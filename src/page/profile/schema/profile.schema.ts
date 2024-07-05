import z from 'zod'

export const profileSchema = z.object({
  name: z.string().min(1, 'Completa tu nombre'),
  lastname: z.string().min(1, 'Completa tu nombre'),
  email: z.string().email('Formato incorrecto del correo'),
  birthdate: z.string().date('Ingrese una fecha valida'),
  password: z.string().min(8, 'La contraseña debe de tener al menos 8 caracteres')
})

export type TProfileSchema = z.infer<typeof profileSchema>