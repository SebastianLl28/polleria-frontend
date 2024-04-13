import { Location } from '@/model/Location.model'

export interface LocationAdapter {
  id: number
  name: string
  address: string
  latitude: string
  longitude: string
  imageUrl: string
  status: true
  phone: string
}

export const locationAdapter = (data: Location): LocationAdapter => ({
  id: data.id,
  name: data.name,
  address: data.address,
  latitude: data.latitude,
  longitude: data.longitude,
  imageUrl: data.imageUrl,
  status: data.status,
  phone: data.phone
})
