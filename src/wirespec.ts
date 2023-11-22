import {
    DefaultBodyType,
    MockedRequest,
    PathParams,
    ResponseResolver,
    rest,
    RestContext,
    RestHandler,
    RestRequest
} from "msw";

import {Wirespec} from "../gen/petstore.openapi.ts";

type Handler = (request: any) => Promise<Wirespec.Response<any>>

export const wirespecHandler = <Call extends Handler>(method: string, path: string, call: Call): RestHandler<MockedRequest<DefaultBodyType>> => {

    const handler: ResponseResolver<RestRequest<DefaultBodyType, PathParams>, RestContext, DefaultBodyType> = async (req, res, ctx) => {
        const data = await call({
            content: undefined,
            method: req.method.toUpperCase() as Wirespec.Method,
            path: req.url.toString()
        })
        return res(
            ctx.json(data.content?.body)
        )
    }

    switch (method) {
        case "GET":
            return rest.get(path, handler);
        case "POST":
            return rest.post(path, handler);
        case "PUT":
            return rest.put(path, handler);
        case "DELETE":
            return rest.delete(path, handler);
    }
    
    throw new Error(`Cannot match requst ${method}`)
}
