import { District } from './District.model'

export interface Location {
  id: number
  name: string
  address: string
  latitude: string
  longitude: string
  districtId: number
  district: District
  imageUrl: string
  status: boolean
  phone: string
}
