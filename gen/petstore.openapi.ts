export module Wirespec {
  export type Method = "GET" | "PUT" | "POST" | "DELETE" | "OPTIONS" | "HEAD" | "PATCH" | "TRACE"
  export type Content<T> = { type:string, body:T }
  export type Request<T> = { path:string, method: Method, query?: Record<string, any[]>, headers?: Record<string, any[]>, content?:Content<T> }
  export type Response<T> = { status:number, headers?: Record<string, any[]>, content?:Content<T> }
}
export module AddPet {
  export const PATH = "/pet"
  export const METHOD = "POST"
  type RequestApplicationJson = { path: `/pet`, method: "POST", headers: {}, query: {}, content: { type: "application/json", body: Pet } } 
  type RequestApplicationXml = { path: `/pet`, method: "POST", headers: {}, query: {}, content: { type: "application/xml", body: Pet } } 
  type RequestApplicationXWwwFormUrlencoded = { path: `/pet`, method: "POST", headers: {}, query: {}, content: { type: "application/x-www-form-urlencoded", body: Pet } } 
  export type Request = RequestApplicationJson | RequestApplicationXml | RequestApplicationXWwwFormUrlencoded
  type Response200ApplicationXml = { status: 200, content: { type: "application/xml", body: Pet } }
  type Response200ApplicationJson = { status: 200, content: { type: "application/json", body: Pet } }
  type Response405Undefined = { status: 405 }
  export type Response = Response200ApplicationXml | Response200ApplicationJson | Response405Undefined
  export type Handler = (request:Request) => Promise<Response>
  export type Call = {
    addPet: Handler
  }
  export const requestApplicationJson = (obj:{  body: Pet}) => ({path: `/pet`, method: "POST", query: {}, headers: {}, content: {type: "application/json", body: obj.body}} as const)
  export const requestApplicationXml = (obj:{  body: Pet}) => ({path: `/pet`, method: "POST", query: {}, headers: {}, content: {type: "application/xml", body: obj.body}} as const)
  export const requestApplicationXWwwFormUrlencoded = (obj:{  body: Pet}) => ({path: `/pet`, method: "POST", query: {}, headers: {}, content: {type: "application/x-www-form-urlencoded", body: obj.body}} as const)
  export const response200ApplicationXml = (obj:{  body: Pet}) => ({status: 200, headers: {}, content: {type: "application/xml", body: obj.body}} as const)
  export const response200ApplicationJson = (obj:{  body: Pet}) => ({status: 200, headers: {}, content: {type: "application/json", body: obj.body}} as const)
  export const response405Undefined = () => ({status: 405, headers: {}} as const)
}

export module UpdatePet {
  export const PATH = "/pet"
  export const METHOD = "PUT"
  type RequestApplicationJson = { path: `/pet`, method: "PUT", headers: {}, query: {}, content: { type: "application/json", body: Pet } } 
  type RequestApplicationXml = { path: `/pet`, method: "PUT", headers: {}, query: {}, content: { type: "application/xml", body: Pet } } 
  type RequestApplicationXWwwFormUrlencoded = { path: `/pet`, method: "PUT", headers: {}, query: {}, content: { type: "application/x-www-form-urlencoded", body: Pet } } 
  export type Request = RequestApplicationJson | RequestApplicationXml | RequestApplicationXWwwFormUrlencoded
  type Response200ApplicationXml = { status: 200, content: { type: "application/xml", body: Pet } }
  type Response200ApplicationJson = { status: 200, content: { type: "application/json", body: Pet } }
  type Response400Undefined = { status: 400 }
  type Response404Undefined = { status: 404 }
  type Response405Undefined = { status: 405 }
  export type Response = Response200ApplicationXml | Response200ApplicationJson | Response400Undefined | Response404Undefined | Response405Undefined
  export type Handler = (request:Request) => Promise<Response>
  export type Call = {
    updatePet: Handler
  }
  export const requestApplicationJson = (obj:{  body: Pet}) => ({path: `/pet`, method: "PUT", query: {}, headers: {}, content: {type: "application/json", body: obj.body}} as const)
  export const requestApplicationXml = (obj:{  body: Pet}) => ({path: `/pet`, method: "PUT", query: {}, headers: {}, content: {type: "application/xml", body: obj.body}} as const)
  export const requestApplicationXWwwFormUrlencoded = (obj:{  body: Pet}) => ({path: `/pet`, method: "PUT", query: {}, headers: {}, content: {type: "application/x-www-form-urlencoded", body: obj.body}} as const)
  export const response200ApplicationXml = (obj:{  body: Pet}) => ({status: 200, headers: {}, content: {type: "application/xml", body: obj.body}} as const)
  export const response200ApplicationJson = (obj:{  body: Pet}) => ({status: 200, headers: {}, content: {type: "application/json", body: obj.body}} as const)
  export const response400Undefined = () => ({status: 400, headers: {}} as const)
  export const response404Undefined = () => ({status: 404, headers: {}} as const)
  export const response405Undefined = () => ({status: 405, headers: {}} as const)
}

export module FindPetsByStatus {
  export const PATH = "/pet/findByStatus"
  export const METHOD = "GET"
  type RequestUndefined = { path: `/pet/findByStatus`, method: "GET", headers: {}, query: {  status?: FindPetsByStatusParameterStatus} } 
  export type Request = RequestUndefined
  type Response200ApplicationXml = { status: 200, content: { type: "application/xml", body: Pet[] } }
  type Response200ApplicationJson = { status: 200, content: { type: "application/json", body: Pet[] } }
  type Response400Undefined = { status: 400 }
  export type Response = Response200ApplicationXml | Response200ApplicationJson | Response400Undefined
  export type Handler = (request:Request) => Promise<Response>
  export type Call = {
    findPetsByStatus: Handler
  }
  export const requestUndefined = (obj:{  status?: FindPetsByStatusParameterStatus}) => ({path: `/pet/findByStatus`, method: "GET", query: {"status": obj.status}, headers: {}} as const)
  export const response200ApplicationXml = (obj:{  body: Pet[]}) => ({status: 200, headers: {}, content: {type: "application/xml", body: obj.body}} as const)
  export const response200ApplicationJson = (obj:{  body: Pet[]}) => ({status: 200, headers: {}, content: {type: "application/json", body: obj.body}} as const)
  export const response400Undefined = () => ({status: 400, headers: {}} as const)
}

export module FindPetsByTags {
  export const PATH = "/pet/findByTags"
  export const METHOD = "GET"
  type RequestUndefined = { path: `/pet/findByTags`, method: "GET", headers: {}, query: {  tags?: string[]} } 
  export type Request = RequestUndefined
  type Response200ApplicationXml = { status: 200, content: { type: "application/xml", body: Pet[] } }
  type Response200ApplicationJson = { status: 200, content: { type: "application/json", body: Pet[] } }
  type Response400Undefined = { status: 400 }
  export type Response = Response200ApplicationXml | Response200ApplicationJson | Response400Undefined
  export type Handler = (request:Request) => Promise<Response>
  export type Call = {
    findPetsByTags: Handler
  }
  export const requestUndefined = (obj:{  tags?: string[]}) => ({path: `/pet/findByTags`, method: "GET", query: {"tags": obj.tags}, headers: {}} as const)
  export const response200ApplicationXml = (obj:{  body: Pet[]}) => ({status: 200, headers: {}, content: {type: "application/xml", body: obj.body}} as const)
  export const response200ApplicationJson = (obj:{  body: Pet[]}) => ({status: 200, headers: {}, content: {type: "application/json", body: obj.body}} as const)
  export const response400Undefined = () => ({status: 400, headers: {}} as const)
}

export module GetPetById {
  export const PATH = "/pet/:petId"
  export const METHOD = "GET"
  type RequestUndefined = { path: `/pet/${number}`, method: "GET", headers: {}, query: {} } 
  export type Request = RequestUndefined
  type Response200ApplicationXml = { status: 200, content: { type: "application/xml", body: Pet } }
  type Response200ApplicationJson = { status: 200, content: { type: "application/json", body: Pet } }
  type Response400Undefined = { status: 400 }
  type Response404Undefined = { status: 404 }
  export type Response = Response200ApplicationXml | Response200ApplicationJson | Response400Undefined | Response404Undefined
  export type Handler = (request:Request) => Promise<Response>
  export type Call = {
    getPetById: Handler
  }
  export const requestUndefined = (obj:{  petId: number}) => ({path: `/pet/${obj.petId}`, method: "GET", query: {}, headers: {}} as const)
  export const response200ApplicationXml = (obj:{  body: Pet}) => ({status: 200, headers: {}, content: {type: "application/xml", body: obj.body}} as const)
  export const response200ApplicationJson = (obj:{  body: Pet}) => ({status: 200, headers: {}, content: {type: "application/json", body: obj.body}} as const)
  export const response400Undefined = () => ({status: 400, headers: {}} as const)
  export const response404Undefined = () => ({status: 404, headers: {}} as const)
}

export module UpdatePetWithForm {
  export const PATH = "/pet/:petId"
  export const METHOD = "POST"
  type RequestUndefined = { path: `/pet/${number}`, method: "POST", headers: {}, query: {  name?: string,  status?: string} } 
  export type Request = RequestUndefined
  type Response405Undefined = { status: 405 }
  export type Response = Response405Undefined
  export type Handler = (request:Request) => Promise<Response>
  export type Call = {
    updatePetWithForm: Handler
  }
  export const requestUndefined = (obj:{  petId: number,  name?: string,  status?: string}) => ({path: `/pet/${obj.petId}`, method: "POST", query: {"name": obj.name, "status": obj.status}, headers: {}} as const)
  export const response405Undefined = () => ({status: 405, headers: {}} as const)
}

export module DeletePet {
  export const PATH = "/pet/:petId"
  export const METHOD = "DELETE"
  type RequestUndefined = { path: `/pet/${number}`, method: "DELETE", headers: {  api_key?: string}, query: {} } 
  export type Request = RequestUndefined
  type Response400Undefined = { status: 400 }
  export type Response = Response400Undefined
  export type Handler = (request:Request) => Promise<Response>
  export type Call = {
    deletePet: Handler
  }
  export const requestUndefined = (obj:{  petId: number,  api_key?: string}) => ({path: `/pet/${obj.petId}`, method: "DELETE", query: {}, headers: {"api_key": obj.api_key}} as const)
  export const response400Undefined = () => ({status: 400, headers: {}} as const)
}

export module UploadFile {
  export const PATH = "/pet/:petId/uploadImage"
  export const METHOD = "POST"
  type RequestApplicationOctetStream = { path: `/pet/${number}/uploadImage`, method: "POST", headers: {}, query: {  additionalMetadata?: string}, content: { type: "application/octet-stream", body: string } } 
  export type Request = RequestApplicationOctetStream
  type Response200ApplicationJson = { status: 200, content: { type: "application/json", body: ApiResponse } }
  export type Response = Response200ApplicationJson
  export type Handler = (request:Request) => Promise<Response>
  export type Call = {
    uploadFile: Handler
  }
  export const requestApplicationOctetStream = (obj:{  petId: number,  additionalMetadata?: string,  body: string}) => ({path: `/pet/${obj.petId}/uploadImage`, method: "POST", query: {"additionalMetadata": obj.additionalMetadata}, headers: {}, content: {type: "application/octet-stream", body: obj.body}} as const)
  export const response200ApplicationJson = (obj:{  body: ApiResponse}) => ({status: 200, headers: {}, content: {type: "application/json", body: obj.body}} as const)
}

export module GetInventory {
  export const PATH = "/store/inventory"
  export const METHOD = "GET"
  type RequestUndefined = { path: `/store/inventory`, method: "GET", headers: {}, query: {} } 
  export type Request = RequestUndefined
  type Response200ApplicationJson = { status: 200, content: { type: "application/json", body: Record<string, number> } }
  export type Response = Response200ApplicationJson
  export type Handler = (request:Request) => Promise<Response>
  export type Call = {
    getInventory: Handler
  }
  export const requestUndefined = () => ({path: `/store/inventory`, method: "GET", query: {}, headers: {}} as const)
  export const response200ApplicationJson = (obj:{  body: Record<string, number>}) => ({status: 200, headers: {}, content: {type: "application/json", body: obj.body}} as const)
}

export module PlaceOrder {
  export const PATH = "/store/order"
  export const METHOD = "POST"
  type RequestApplicationJson = { path: `/store/order`, method: "POST", headers: {}, query: {}, content: { type: "application/json", body: Order } } 
  type RequestApplicationXml = { path: `/store/order`, method: "POST", headers: {}, query: {}, content: { type: "application/xml", body: Order } } 
  type RequestApplicationXWwwFormUrlencoded = { path: `/store/order`, method: "POST", headers: {}, query: {}, content: { type: "application/x-www-form-urlencoded", body: Order } } 
  export type Request = RequestApplicationJson | RequestApplicationXml | RequestApplicationXWwwFormUrlencoded
  type Response200ApplicationJson = { status: 200, content: { type: "application/json", body: Order } }
  type Response405Undefined = { status: 405 }
  export type Response = Response200ApplicationJson | Response405Undefined
  export type Handler = (request:Request) => Promise<Response>
  export type Call = {
    placeOrder: Handler
  }
  export const requestApplicationJson = (obj:{  body: Order}) => ({path: `/store/order`, method: "POST", query: {}, headers: {}, content: {type: "application/json", body: obj.body}} as const)
  export const requestApplicationXml = (obj:{  body: Order}) => ({path: `/store/order`, method: "POST", query: {}, headers: {}, content: {type: "application/xml", body: obj.body}} as const)
  export const requestApplicationXWwwFormUrlencoded = (obj:{  body: Order}) => ({path: `/store/order`, method: "POST", query: {}, headers: {}, content: {type: "application/x-www-form-urlencoded", body: obj.body}} as const)
  export const response200ApplicationJson = (obj:{  body: Order}) => ({status: 200, headers: {}, content: {type: "application/json", body: obj.body}} as const)
  export const response405Undefined = () => ({status: 405, headers: {}} as const)
}

export module GetOrderById {
  export const PATH = "/store/order/:orderId"
  export const METHOD = "GET"
  type RequestUndefined = { path: `/store/order/${number}`, method: "GET", headers: {}, query: {} } 
  export type Request = RequestUndefined
  type Response200ApplicationXml = { status: 200, content: { type: "application/xml", body: Order } }
  type Response200ApplicationJson = { status: 200, content: { type: "application/json", body: Order } }
  type Response400Undefined = { status: 400 }
  type Response404Undefined = { status: 404 }
  export type Response = Response200ApplicationXml | Response200ApplicationJson | Response400Undefined | Response404Undefined
  export type Handler = (request:Request) => Promise<Response>
  export type Call = {
    getOrderById: Handler
  }
  export const requestUndefined = (obj:{  orderId: number}) => ({path: `/store/order/${obj.orderId}`, method: "GET", query: {}, headers: {}} as const)
  export const response200ApplicationXml = (obj:{  body: Order}) => ({status: 200, headers: {}, content: {type: "application/xml", body: obj.body}} as const)
  export const response200ApplicationJson = (obj:{  body: Order}) => ({status: 200, headers: {}, content: {type: "application/json", body: obj.body}} as const)
  export const response400Undefined = () => ({status: 400, headers: {}} as const)
  export const response404Undefined = () => ({status: 404, headers: {}} as const)
}

export module DeleteOrder {
  export const PATH = "/store/order/:orderId"
  export const METHOD = "DELETE"
  type RequestUndefined = { path: `/store/order/${number}`, method: "DELETE", headers: {}, query: {} } 
  export type Request = RequestUndefined
  type Response400Undefined = { status: 400 }
  type Response404Undefined = { status: 404 }
  export type Response = Response400Undefined | Response404Undefined
  export type Handler = (request:Request) => Promise<Response>
  export type Call = {
    deleteOrder: Handler
  }
  export const requestUndefined = (obj:{  orderId: number}) => ({path: `/store/order/${obj.orderId}`, method: "DELETE", query: {}, headers: {}} as const)
  export const response400Undefined = () => ({status: 400, headers: {}} as const)
  export const response404Undefined = () => ({status: 404, headers: {}} as const)
}

export module CreateUser {
  export const PATH = "/user"
  export const METHOD = "POST"
  type RequestApplicationJson = { path: `/user`, method: "POST", headers: {}, query: {}, content: { type: "application/json", body: User } } 
  type RequestApplicationXml = { path: `/user`, method: "POST", headers: {}, query: {}, content: { type: "application/xml", body: User } } 
  type RequestApplicationXWwwFormUrlencoded = { path: `/user`, method: "POST", headers: {}, query: {}, content: { type: "application/x-www-form-urlencoded", body: User } } 
  export type Request = RequestApplicationJson | RequestApplicationXml | RequestApplicationXWwwFormUrlencoded
  type ResponseDefaultApplicationJson = { status: string, content: { type: "application/json", body: User } }
  type ResponseDefaultApplicationXml = { status: string, content: { type: "application/xml", body: User } }
  export type Response = ResponseDefaultApplicationJson | ResponseDefaultApplicationXml
  export type Handler = (request:Request) => Promise<Response>
  export type Call = {
    createUser: Handler
  }
  export const requestApplicationJson = (obj:{  body: User}) => ({path: `/user`, method: "POST", query: {}, headers: {}, content: {type: "application/json", body: obj.body}} as const)
  export const requestApplicationXml = (obj:{  body: User}) => ({path: `/user`, method: "POST", query: {}, headers: {}, content: {type: "application/xml", body: obj.body}} as const)
  export const requestApplicationXWwwFormUrlencoded = (obj:{  body: User}) => ({path: `/user`, method: "POST", query: {}, headers: {}, content: {type: "application/x-www-form-urlencoded", body: obj.body}} as const)
  export const responseDefaultApplicationJson = (obj:{  body: User}) => ({status: `default`, headers: {}, content: {type: "application/json", body: obj.body}} as const)
  export const responseDefaultApplicationXml = (obj:{  body: User}) => ({status: `default`, headers: {}, content: {type: "application/xml", body: obj.body}} as const)
}

export module CreateUsersWithListInput {
  export const PATH = "/user/createWithList"
  export const METHOD = "POST"
  type RequestApplicationJson = { path: `/user/createWithList`, method: "POST", headers: {}, query: {}, content: { type: "application/json", body: User[] } } 
  export type Request = RequestApplicationJson
  type Response200ApplicationXml = { status: 200, content: { type: "application/xml", body: User } }
  type Response200ApplicationJson = { status: 200, content: { type: "application/json", body: User } }
  type ResponseDefaultUndefined = { status: string }
  export type Response = Response200ApplicationXml | Response200ApplicationJson | ResponseDefaultUndefined
  export type Handler = (request:Request) => Promise<Response>
  export type Call = {
    createUsersWithListInput: Handler
  }
  export const requestApplicationJson = (obj:{  body: User[]}) => ({path: `/user/createWithList`, method: "POST", query: {}, headers: {}, content: {type: "application/json", body: obj.body}} as const)
  export const response200ApplicationXml = (obj:{  body: User}) => ({status: 200, headers: {}, content: {type: "application/xml", body: obj.body}} as const)
  export const response200ApplicationJson = (obj:{  body: User}) => ({status: 200, headers: {}, content: {type: "application/json", body: obj.body}} as const)
  export const responseDefaultUndefined = () => ({status: `default`, headers: {}} as const)
}

export module LoginUser {
  export const PATH = "/user/login"
  export const METHOD = "GET"
  type RequestUndefined = { path: `/user/login`, method: "GET", headers: {}, query: {  username?: string,  password?: string} } 
  export type Request = RequestUndefined
  type Response200ApplicationXml = { status: 200, content: { type: "application/xml", body: string } }
  type Response200ApplicationJson = { status: 200, content: { type: "application/json", body: string } }
  type Response400Undefined = { status: 400 }
  export type Response = Response200ApplicationXml | Response200ApplicationJson | Response400Undefined
  export type Handler = (request:Request) => Promise<Response>
  export type Call = {
    loginUser: Handler
  }
  export const requestUndefined = (obj:{  username?: string,  password?: string}) => ({path: `/user/login`, method: "GET", query: {"username": obj.username, "password": obj.password}, headers: {}} as const)
  export const response200ApplicationXml = (obj:{  xRateLimit?: number,  xExpiresAfter?: string,  body: string}) => ({status: 200, headers: {"X-Rate-Limit": obj.xRateLimit, "X-Expires-After": obj.xExpiresAfter}, content: {type: "application/xml", body: obj.body}} as const)
  export const response200ApplicationJson = (obj:{  xRateLimit?: number,  xExpiresAfter?: string,  body: string}) => ({status: 200, headers: {"X-Rate-Limit": obj.xRateLimit, "X-Expires-After": obj.xExpiresAfter}, content: {type: "application/json", body: obj.body}} as const)
  export const response400Undefined = () => ({status: 400, headers: {}} as const)
}

export module LogoutUser {
  export const PATH = "/user/logout"
  export const METHOD = "GET"
  type RequestUndefined = { path: `/user/logout`, method: "GET", headers: {}, query: {} } 
  export type Request = RequestUndefined
  type ResponseDefaultUndefined = { status: string }
  export type Response = ResponseDefaultUndefined
  export type Handler = (request:Request) => Promise<Response>
  export type Call = {
    logoutUser: Handler
  }
  export const requestUndefined = () => ({path: `/user/logout`, method: "GET", query: {}, headers: {}} as const)
  export const responseDefaultUndefined = () => ({status: `default`, headers: {}} as const)
}

export module GetUserByName {
  export const PATH = "/user/:username"
  export const METHOD = "GET"
  type RequestUndefined = { path: `/user/${string}`, method: "GET", headers: {}, query: {} } 
  export type Request = RequestUndefined
  type Response200ApplicationXml = { status: 200, content: { type: "application/xml", body: User } }
  type Response200ApplicationJson = { status: 200, content: { type: "application/json", body: User } }
  type Response400Undefined = { status: 400 }
  type Response404Undefined = { status: 404 }
  export type Response = Response200ApplicationXml | Response200ApplicationJson | Response400Undefined | Response404Undefined
  export type Handler = (request:Request) => Promise<Response>
  export type Call = {
    getUserByName: Handler
  }
  export const requestUndefined = (obj:{  username: string}) => ({path: `/user/${obj.username}`, method: "GET", query: {}, headers: {}} as const)
  export const response200ApplicationXml = (obj:{  body: User}) => ({status: 200, headers: {}, content: {type: "application/xml", body: obj.body}} as const)
  export const response200ApplicationJson = (obj:{  body: User}) => ({status: 200, headers: {}, content: {type: "application/json", body: obj.body}} as const)
  export const response400Undefined = () => ({status: 400, headers: {}} as const)
  export const response404Undefined = () => ({status: 404, headers: {}} as const)
}

export module UpdateUser {
  export const PATH = "/user/:username"
  export const METHOD = "PUT"
  type RequestApplicationJson = { path: `/user/${string}`, method: "PUT", headers: {}, query: {}, content: { type: "application/json", body: User } } 
  type RequestApplicationXml = { path: `/user/${string}`, method: "PUT", headers: {}, query: {}, content: { type: "application/xml", body: User } } 
  type RequestApplicationXWwwFormUrlencoded = { path: `/user/${string}`, method: "PUT", headers: {}, query: {}, content: { type: "application/x-www-form-urlencoded", body: User } } 
  export type Request = RequestApplicationJson | RequestApplicationXml | RequestApplicationXWwwFormUrlencoded
  type ResponseDefaultUndefined = { status: string }
  export type Response = ResponseDefaultUndefined
  export type Handler = (request:Request) => Promise<Response>
  export type Call = {
    updateUser: Handler
  }
  export const requestApplicationJson = (obj:{  username: string,  body: User}) => ({path: `/user/${obj.username}`, method: "PUT", query: {}, headers: {}, content: {type: "application/json", body: obj.body}} as const)
  export const requestApplicationXml = (obj:{  username: string,  body: User}) => ({path: `/user/${obj.username}`, method: "PUT", query: {}, headers: {}, content: {type: "application/xml", body: obj.body}} as const)
  export const requestApplicationXWwwFormUrlencoded = (obj:{  username: string,  body: User}) => ({path: `/user/${obj.username}`, method: "PUT", query: {}, headers: {}, content: {type: "application/x-www-form-urlencoded", body: obj.body}} as const)
  export const responseDefaultUndefined = () => ({status: `default`, headers: {}} as const)
}

export module DeleteUser {
  export const PATH = "/user/:username"
  export const METHOD = "DELETE"
  type RequestUndefined = { path: `/user/${string}`, method: "DELETE", headers: {}, query: {} } 
  export type Request = RequestUndefined
  type Response400Undefined = { status: 400 }
  type Response404Undefined = { status: 404 }
  export type Response = Response400Undefined | Response404Undefined
  export type Handler = (request:Request) => Promise<Response>
  export type Call = {
    deleteUser: Handler
  }
  export const requestUndefined = (obj:{  username: string}) => ({path: `/user/${obj.username}`, method: "DELETE", query: {}, headers: {}} as const)
  export const response400Undefined = () => ({status: 400, headers: {}} as const)
  export const response404Undefined = () => ({status: 404, headers: {}} as const)
}

type FindPetsByStatusParameterStatus = "available" | "pending" | "sold"

export type Order = {
  id?: number,
  petId?: number,
  quantity?: number,
  shipDate?: string,
  status?: OrderStatus,
  complete?: boolean
}


type OrderStatus = "placed" | "approved" | "delivered"

export type Customer = {
  id?: number,
  username?: string,
  address?: Address[]
}


export type Address = {
  street?: string,
  city?: string,
  state?: string,
  zip?: string
}


export type Category = {
  id?: number,
  name?: string
}


export type User = {
  id?: number,
  username?: string,
  firstName?: string,
  lastName?: string,
  email?: string,
  password?: string,
  phone?: string,
  userStatus?: number
}


export type Tag = {
  id?: number,
  name?: string
}


export type Pet = {
  id?: number,
  name: string,
  category?: Category,
  photoUrls: string[],
  tags?: Tag[],
  status?: PetStatus
}


type PetStatus = "available" | "pending" | "sold"

export type ApiResponse = {
  code?: number,
  type?: string,
  message?: string
}

