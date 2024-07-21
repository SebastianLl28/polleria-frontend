import { Location } from '@/model/Location.model'

export interface LocationAdapter {
  id: number
  name: string
  address: string
  latitude: number
  longitude: number
  imageUrl: string
  status: true
  phone: string
}

export const locationAdapter = (data: Location): LocationAdapter => ({
  id: data.id,
  name: data.name,
  address: data.address,
  latitude: Number(data.latitude),
  longitude: Number(data.longitude),
  imageUrl: data.imageUrl,
  status: data.status,
  phone: data.phone
})
