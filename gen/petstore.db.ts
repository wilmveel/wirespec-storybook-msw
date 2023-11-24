import {factory, nullable, primaryKey, oneOf, manyOf} from '@mswjs/data'
import {faker} from '@faker-js/faker'

import {Order, Customer, Address, Category, User, Tag, Pet, ApiResponse} from './petstore.openapi.ts'

const FindPetsByStatusParameterStatus = ["available", "pending", "sold"]
const OrderStatus = ["placed", "approved", "delivered"]
const PetStatus = ["available", "pending", "sold"]
const Order = {
  id: primaryKey<number>(() => faker.number.int()),
  petId: nullable<number>(() => faker.number.int()),
  quantity: nullable<number>(() => faker.number.int()),
  shipDate: nullable<string>(() => faker.string.alphanumeric()),
  status:() => faker.helpers.arrayElement(OrderStatus),
  complete: nullable<boolean>(() => faker.datatype.boolean())
}

const Customer = {
  id: primaryKey<number>(() => faker.number.int()),
  username: nullable<string>(() => faker.string.alphanumeric()),
  address: manyOf('Address')
}

const Address = {
  id: primaryKey<number>(() => faker.number.int()),
  street: nullable<string>(() => faker.string.alphanumeric()),
  city: nullable<string>(() => faker.string.alphanumeric()),
  state: nullable<string>(() => faker.string.alphanumeric()),
  zip: nullable<string>(() => faker.string.alphanumeric())
}

const Category = {
  id: primaryKey<number>(() => faker.number.int()),
  name: nullable<string>(() => faker.string.alphanumeric())
}

const User = {
  id: primaryKey<number>(() => faker.number.int()),
  username: nullable<string>(() => faker.string.alphanumeric()),
  firstName: nullable<string>(() => faker.string.alphanumeric()),
  lastName: nullable<string>(() => faker.string.alphanumeric()),
  email: nullable<string>(() => faker.string.alphanumeric()),
  password: nullable<string>(() => faker.string.alphanumeric()),
  phone: nullable<string>(() => faker.string.alphanumeric()),
  userStatus: nullable<number>(() => faker.number.int())
}

const Tag = {
  id: primaryKey<number>(() => faker.number.int()),
  name: nullable<string>(() => faker.string.alphanumeric())
}

const Pet = {
  id: primaryKey<number>(() => faker.number.int()),
  name: () => faker.string.alphanumeric(),
  category: oneOf('Category'),
  photoUrls: () => faker.string.alphanumeric(),
  tags: manyOf('Tag'),
  status:() => faker.helpers.arrayElement(PetStatus)
}

const ApiResponse = {
  id: primaryKey<number>(() => faker.number.int()),
  code: nullable<number>(() => faker.number.int()),
  type: nullable<string>(() => faker.string.alphanumeric()),
  message: nullable<string>(() => faker.string.alphanumeric())
}


export const db = factory({Order, Customer, Address, Category, User, Tag, Pet, ApiResponse})