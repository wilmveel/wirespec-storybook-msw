import {
    DefaultBodyType,
    MockedRequest,
    rest,
    RestHandler,
} from "msw";

import {Wirespec} from "../gen/petstore.ts";

export const wirespecHandler = <Req extends Wirespec.Request<object>, Res extends Wirespec.Response<object>> (method:Wirespec.Method, path:string, call: (req: Req) => Res): RestHandler<MockedRequest<DefaultBodyType>> => {
    console.log(`[${method}] ${path}`)

    return rest.get("/pet", (req, res, ctx) => {

        // @ts-ignore
        const x = call({
            content: undefined,
            method: req.method.toUpperCase() as Wirespec.Method,
            path: req.url.toString()
        })

        return res(
            ctx.json(x.content?.body)
        )
    })
}
