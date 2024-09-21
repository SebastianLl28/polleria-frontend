import z from 'zod'

export const profileSchema = z.object({
  name: z.string().min(1, 'Completa tu nombre'),
  lastName: z.string().min(1, 'Completa tu apellido'),
  email: z.string().email('Formato incorrecto del correo'),
  birthDate: z.string().date('Ingrese una fecha valida')
})

export type TProfileSchema = z.infer<typeof profileSchema>
