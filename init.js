import fs from "fs";
import * as mod from "wirespec";

const openapi = String(fs.readFileSync("openapi/petstore.json"));
const file = mod.default.OpenApiV3ToTypescript.compile(openapi)
fs.mkdirSync("gen")
fs.writeFileSync(`gen/petstore.ts`, file[0]?.value ?? "")