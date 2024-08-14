import z from 'zod'

export const profileSchema = z.object({
  name: z.string().min(1, 'Completa tu nombre'),
  lastname: z.string().min(1, 'Completa tu apellido'),
  email: z.string().email('Formato incorrecto del correo'),
  birthdate: z.string().date('Ingrese una fecha valida')
})

export type TProfileSchema = z.infer<typeof profileSchema>
