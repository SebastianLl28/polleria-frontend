import z from 'zod'

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'El correo electrónico es requerido')
    .email('El formato del correo electrónico es inválido'),
  password: z.string().min(1, 'La contraseña es requerida')
})

export type TLoginSchema = z.infer<typeof loginSchema>

// export const loginSchema
