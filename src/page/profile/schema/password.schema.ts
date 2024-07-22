import z from 'zod'

export const passwordSchema = z
  .object({
    password: z.string().min(8, 'La contraseña debe de tener al menos 8 caracteres'),
    newPassword: z.string().min(8, 'La contraseña debe de tener al menos 8 caracteres'),
    confirmPassword: z
      .string()
      .min(8, 'La contraseña debe de tener al menos 8 caracteres')
  })
  .superRefine(({ confirmPassword, newPassword }, ctx) => {
    if (confirmPassword !== newPassword) {
      ctx.addIssue({
        code: 'custom',
        message: 'Las contraseñas no coinciden',
        path: ['confirmPassword']
      })
    }
  }).refine((passwordSchema)=> passwordSchema.password === '12345678', {
    message: 'Contraseña erronea',
    path: ['password']
  })

export type TPasswordSchema = z.infer<typeof passwordSchema>