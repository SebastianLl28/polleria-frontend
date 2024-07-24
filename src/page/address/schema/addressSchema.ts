import z from 'zod'

export const addressSchema = z.object({
  address: z.string().min(1, 'La dirección es requerida'),
  district: z.string().min(1, 'El distrito es requerido'),
  province: z.string().min(1, 'La provincia es requerida')
})

export type TAddressSchema = z.infer<typeof addressSchema>
