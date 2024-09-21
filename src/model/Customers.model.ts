export interface Customer {
  id: number
  name: string
  lastName: string
  email: string
  birthDate: string
  status: boolean
}

export interface getCustomer extends Customer {
  addressList: string[]
  favoriteProducts: string[]
}
