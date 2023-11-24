import fs from "fs";
import wirespec from "@flock/wirespec";

const openapi = String(fs.readFileSync("spec/petstore.json"));
const file = wirespec.OpenApiV3ToTypescript.compile(openapi)
const ast = wirespec.OpenApiV3Parser.parse(openapi)

fs.rmSync("gen", { recursive: true, force: true })
fs.mkdirSync("gen")
fs.writeFileSync(`gen/petstore.openapi.ts`, file[0]?.value ?? "")

const types = ast.filter(it => it instanceof wirespec.WsType)
const enums = ast.filter(it => it instanceof wirespec.WsEnum)

const renderFaker = (type) => {
    switch (type){
        case "string": return "faker.string.alphanumeric()"
        case "number": return "faker.number.int()"
        case "boolean": return "faker.datatype.boolean()"
        default: return "faker.string.alphanumeric()"
    }
}
const renderReference = (reference) => {
    if(reference instanceof wirespec.WsPrimitive) {
        switch (reference.type.name){
            case "String": return "string"
            case "Integer": return "number"
            case "Number": return "number"
            case "Boolean": return "boolean"
        }
    }
    if(reference instanceof wirespec.WsCustom) return reference.value
    if(reference instanceof wirespec.WsAny) return "any"
}

const renderField = (field) => {
    const type = renderReference(field.reference)
    if (field.identifier.value === "id") {
        return `${field.identifier.value}: primaryKey<${type}>(() => ${renderFaker(type)})`
    }
    if (enums.find(en => en.name === field.reference.value)) {
        return `${field.identifier.value}:() => faker.helpers.arrayElement(${field.reference.value})`
    }
    if(!["boolean", "number", "string"].includes(type)){
        if(field.reference.isIterable){
            return `${field.identifier.value}: manyOf('${type}')`
        }else {
            return `${field.identifier.value}: oneOf('${type}')`
        }
    }
    if(field.isNullable){
        return `${field.identifier.value}: nullable<${type}>(() => ${renderFaker(type)})`
    }
    else {
        return `${field.identifier.value}: () => ${renderFaker(type)}`
    }
}

const renderIdField = (shape) => {
    if(!shape.value.some(field => field.identifier.value === "id")) {
        return `  id: primaryKey<number>(() => ${renderFaker("number")}),\n`
    }else{
        return ""
    }
}

const db = `
import {factory, nullable, primaryKey, oneOf, manyOf} from '@mswjs/data'
import {faker} from '@faker-js/faker'

import {${types.map(type => type.name).join(", ")}} from './petstore.openapi.ts'

${enums.map(enm => `const ${enm.name} = [${enm.entries.map(entry => `"${entry}"`).join(", ")}]`).join("\n")}
${types.map(type => `const ${type.name} = {\n${renderIdField(type.shape)}${type.shape.value.map(field => `  ${renderField(field)}`).join(",\n")}\n}\n`).join("\n")}

export const db = factory({${types.map(type => type.name).join(", ")}})
`

fs.writeFileSync(`gen/petstore.db.ts`, db.trim())