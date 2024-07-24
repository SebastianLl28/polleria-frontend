import { Address } from '@/model/Address.model'

export interface AddressAdapter {
  id: number
  address: string
  district: string
  province: string
  state: string
}

export const addressAdapter = (data: Address): AddressAdapter => {
  return {
    id: data.id,
    address: data.address,
    district: data.district,
    province: data.province,
    state: data.state
  }
}
