import { Valoration } from '@/model/valoration.model'

interface ValorationAdapter {
  id: number
  valoration: number
  productId: number
  customerId: number
  customerName: string
  customerLastName: string
  date: string
  review?: string
}

export const valorationAdapter = (data: Valoration): ValorationAdapter => ({
  id: data.id,
  valoration: data.valoration,
  productId: data.productId,
  customerId: data.customerId,
  customerName: data.customerName,
  customerLastName: data.customerLastname,
  date: data.date,
  review: data.review
})
