import Input from "@/components/Input";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { passwordSchema, TPasswordSchema } from "./schema/password.schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function PasswordChanged(onSubmit) {
  const [editPassword, setEditPassword] = useState(true)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TPasswordSchema>({
    resolver: zodResolver(passwordSchema)
  })
  function onEnableEditPassword() {
    setEditPassword(false)
  }
  return (
    <div className='relative mx-3 mb-8 w-full rounded-lg bg-stone-100 px-8 py-9 shadow-lg md:max-w-screen-sm'>
      <div className='absolute right-2 top-1'>
        <Button
          className='bg-transparent px-3 py-2 hover:bg-stone-200'
          onClick={onEnableEditPassword}
        >
          <Pencil color='black' strokeWidth={1.5} width={18} />
        </Button>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='grid grid-cols-2 gap-x-2 gap-y-4'
      >
        <div className='col-span-2'>
          <Label htmlFor='password'>Contraseña Actual</Label>
          <Input
            id='password'
            type='password'
            className='w-full'
            {...register('password')}
            disabled={editPassword}
          />
          {errors.password && (
            <p className='text-xs text-red-500'>{errors.password.message}</p>
          )}
        </div>
        <div className=''>
          <Label htmlFor='newPassword'>Nueva Contraseña</Label>
          <Input
            id='newPassword'
            type='password'
            className='w-full'
            {...register('newPassword')}
            disabled={editPassword}
          />
          {errors.newPassword && (
            <p className='text-xs text-red-500'>{errors.newPassword.message}</p>
          )}
        </div>
        <div className=''>
          <Label htmlFor='confirmPassword'>Confirmar Nueva Contraseña</Label>
          <Input
            id='confirmPassword'
            type='password'
            className='w-full'
            {...register('confirmPassword')}
            disabled={editPassword}
          />
          {errors.confirmPassword && (
            <p className='text-xs text-red-500'>{errors.confirmPassword.message}</p>
          )}
        </div>
        <div className={editPassword ? 'col-span-2 hidden' : 'col-span-2 block'}>
          <Button type='submit' className='mt-5 w-full bg-green-600 hover:bg-green-700'>
            Editar
          </Button>
        </div>
      </form>
    </div>
  )
}
