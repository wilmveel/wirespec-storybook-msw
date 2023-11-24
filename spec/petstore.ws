endpoint AddPet POST Pet /pet -> {
  200 -> Pet
  200 -> Pet
  405 -> Unit
}

endpoint UpdatePet PUT Pet /pet -> {
  200 -> Pet
  200 -> Pet
  400 -> Unit
  404 -> Unit
  405 -> Unit
}

endpoint FindPetsByStatus GET /pet/findByStatus ? {status: FindPetsByStatusParameterStatus?} -> {
  200 -> Pet[]
  200 -> Pet[]
  400 -> Unit
}

endpoint FindPetsByTags GET /pet/findByTags ? {tags: String[]?} -> {
  200 -> Pet[]
  200 -> Pet[]
  400 -> Unit
}

endpoint GetPetById GET /pet/{petId: Integer} -> {
  200 -> Pet
  200 -> Pet
  400 -> Unit
  404 -> Unit
}

endpoint UpdatePetWithForm POST /pet/{petId: Integer} ? {name: String?,status: String?} -> {
  405 -> Unit
}

endpoint DeletePet DELETE /pet/{petId: Integer} -> {
  400 -> Unit
}

endpoint UploadFile POST String /pet/{petId: Integer}/uploadImage ? {additionalMetadata: String?} -> {
  200 -> ApiResponse
}

endpoint GetInventory GET /store/inventory -> {
  200 -> Integer
}

endpoint PlaceOrder POST Order /store/order -> {
  200 -> Order
  405 -> null
}

endpoint GetOrderById GET /store/order/{orderId: Integer} -> {
  200 -> Order
  200 -> Order
  400 -> Unit
  404 -> Unit
}

endpoint DeleteOrder DELETE /store/order/{orderId: Integer} -> {
  400 -> Unit
  404 -> Unit
}

endpoint CreateUser POST User /user -> {
  default -> User
  default -> User
}

endpoint CreateUsersWithListInput POST User[] /user/createWithList -> {
  200 -> User
  200 -> User
  default -> Unit
}

endpoint LoginUser GET /user/login ? {username: String?,password: String?} -> {
  200 -> String
  200 -> String
  400 -> Unit
}

endpoint LogoutUser GET /user/logout -> {
  default -> Unit
}

endpoint GetUserByName GET /user/{username: String} -> {
  200 -> User
  200 -> User
  400 -> Unit
  404 -> Unit
}

endpoint UpdateUser PUT User /user/{username: String} -> {
  default -> Unit
}

endpoint DeleteUser DELETE /user/{username: String} -> {
  400 -> Unit
  404 -> Unit
}

enum FindPetsByStatusParameterStatus {
  available, pending, sold
}

type Order {
  id: Integer?,
  petId: Integer?,
  quantity: Integer?,
  shipDate: String?,
  status: OrderStatus?,
  complete: Boolean?
}

enum OrderStatus {
  placed, approved, delivered
}

type Customer {
  id: Integer?,
  username: String?,
  address: Address[]?
}

type Address {
  street: String?,
  city: String?,
  state: String?,
  zip: String?
}

type Category {
  id: Integer?,
  name: String?
}

type User {
  id: Integer?,
  username: String?,
  firstName: String?,
  lastName: String?,
  email: String?,
  password: String?,
  phone: String?,
  userStatus: Integer?
}

type Tag {
  id: Integer?,
  name: String?
}

type Pet {
  id: Integer?,
  name: String,
  category: Category?,
  photoUrls: String[],
  tags: Tag[]?,
  status: PetStatus?
}

enum PetStatus {
  available, pending, sold
}

type ApiResponse {
  code: Integer?,
  type: String?,
  message: String?
}
