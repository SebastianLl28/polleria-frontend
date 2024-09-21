import { getCustomer, postCustomer } from '@/model/Customers.model'

export interface CustomerAdapter {
  id: number
  name: string
  lastName: string
  email: string
  birthDate: string
  status: boolean
}

export interface getCustomerAdapter extends CustomerAdapter {
  addressList: string[]
  favoriteProducts: string[]
}

export interface postCustomerAdapter extends CustomerAdapter {
  password: string
}

export const customerAdapter = (customer: getCustomer): getCustomerAdapter => ({
  id: customer.id,
  name: customer.name,
  lastName: customer.lastName,
  email: customer.email,
  birthDate: customer.birthDate,
  status: customer.status,
  addressList: customer.addressList,
  favoriteProducts: customer.favoriteProducts
})

export const updateCustomerAdapter = (customer: postCustomer): postCustomerAdapter => ({
  id: customer.id,
  name: customer.name,
  lastName: customer.lastName,
  email: customer.email,
  birthDate: customer.birthDate,
  status: customer.status,
  password: customer.password
})
