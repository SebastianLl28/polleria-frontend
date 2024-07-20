export interface Customer {
  id: number
  name: string
  lastname: string
  email: string
  birthdate: string
  status: boolean
}

export interface getCustomer extends Customer {
  addressList: string[]
  favoriteProducts: string[]
}

export interface postCustomer extends Customer {
  password: string
}
