import fs from "fs";
import wirespec from "@flock/wirespec";

const openapi = String(fs.readFileSync("openapi/petstore.json"));
const file = wirespec.OpenApiV3ToTypescript.compile(openapi)
const ast = wirespec.OpenApiV3Parser.parse(openapi)

fs.rmSync("gen", { recursive: true, force: true })
fs.mkdirSync("gen")
fs.writeFileSync(`gen/petstore.openapi.ts`, file[0]?.value ?? "")

const types = ast.filter(it => it instanceof wirespec.WsType).filter(type => type.shape.value.some(field => field.identifier.value === "id"))
const enums = ast.filter(it => it instanceof wirespec.WsEnum)

const renderFields = (field) => {
    if (field.identifier.value === "id") {
        return `${field.identifier.value}: primaryKey(() => faker.string.alphanumeric())`
    }
    if (enums.find(en => en.name === field.reference.value)) {
        return `${field.identifier.value}:() => faker.helpers.arrayElement(${field.reference.value})`
    }
    if(field.isNullable){
        return `${field.identifier.value}: nullable<string>(() => faker.string.alphanumeric())`
    }
    else {
        return `${field.identifier.value}: () => faker.string.alphanumeric()`
    }
}
const db = `
import {factory, nullable, primaryKey} from '@mswjs/data'
import {faker} from '@faker-js/faker'

${enums.map(enm => `const ${enm.name} = [${enm.entries.map(entry => `"${entry}"`).join(", ")}]`).join("\n")}
${types.map(type => `const ${type.name} = {\n${type.shape.value.map(field => `  ${renderFields(field)}`).join(",\n")}\n}\n`).join("\n")}

export const db = factory({${types.map(type => type.name).join(", ")}})
`

fs.writeFileSync(`gen/petstore.db.ts`, db.trim())