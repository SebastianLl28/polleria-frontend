import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Pencil } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useGetProfileById, useUpdateProfileById } from '@/hooks/customers.hook'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TProfileSchema, profileSchema } from './schema/profile.schema'
import { postCustomer } from '@/model/Customers.model'

const ProfilePage = () => {
  const [editProfile, setEditProfile] = useState(true)
  const { data, isSuccess } = useGetProfileById(1)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<TProfileSchema>({
    resolver: zodResolver(profileSchema)
  })

  useEffect(() => {
    if (data) {
      setValue('name', data.name)
      setValue('lastname', data.lastname)
      setValue('email', data.email)
      setValue('birthdate', data.birthdate)
    }
  }, [data, setValue])

  function onEnableEdit() {
    setEditProfile(false)
  }

  const { mutate } = useUpdateProfileById(1)

  const onSubmit: SubmitHandler<TProfileSchema> = async(data) => {
    mutate({...data, status: true} as Omit<postCustomer, 'id'>) /*no detecta tipido */
  }

  return (
    <div className='flex justify-center'>
      <div className='relative mb-8 w-full rounded-lg shadow-lg bg-stone-100 px-8 py-9 mx-3 md:max-w-screen-sm '>
        <div className='absolute right-2 top-1'>
          <Button
            className='bg-transparent px-3 py-2 hover:bg-stone-200'
            onClick={onEnableEdit}
          >
            <Pencil color='black' strokeWidth={1.5} width={18} />
          </Button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-2 gap-x-2 gap-y-4'>
          <div className='col-span-2 md:col-span-1'>
            <Label htmlFor='name'>Nombre</Label>
            <Input
              {...register('name')}
              id='name'
              type='text'
              className='w-full'
              placeholder={isSuccess ? data.name : ''}
              defaultValue={isSuccess ? data.name : ''}
              disabled={editProfile}
            />
            {errors.name && (
              <p className='text-xs text-red-500'>{errors.name.message}</p>
            )}
          </div>
          <div className='col-span-2 md:col-span-1'>
            <Label htmlFor='lastname'>Apellidos</Label>
            <Input
              id='lastname'
              type='text'
              className='w-full'
              {...register('lastname')}
              placeholder={isSuccess ? data.lastname : ''}
              defaultValue={isSuccess ? data.lastname : ''}
              disabled={editProfile}
            />
            {errors.lastname && (
              <p className='text-xs text-red-500'>{errors.lastname.message}</p>
            )}
          </div>
          <div className='col-span-2'>
            <Label htmlFor='email'>Correo</Label>
            <Input
              id='email'
              type='text'
              {...register('email')}
              placeholder={isSuccess ? data.email : ''}
              defaultValue={isSuccess ? data.email : ''}
              className='w-full'
              disabled={editProfile}
            />
            {errors.email && (
              <p className='text-xs text-red-500'>{errors.email.message}</p>
            )}
          </div>
          <div className='col-span-2'>
            <Label htmlFor='birthdate'>Cumpleaños</Label>
            <Input
              id='birthdate'
              type='date'
              className='w-full'
              {...register('birthdate')}
              disabled={editProfile}
              defaultValue={isSuccess ? data.birthdate : ''}
            />
            {errors.birthdate && (
              <p className='text-xs text-red-500'>{errors.birthdate.message}</p>
            )}
          </div>
          <div className='col-span-2'>
            <Label htmlFor='password'>Contraseña</Label>
            <Input
              id='password'
              type='password'
              className='w-full'
              {...register('password')}
              disabled={editProfile}
            />
            {errors.password && (
              <p className='text-xs text-red-500'>{errors.password.message}</p>
            )}
          </div>
          <div className={editProfile ? 'hidden col-span-2' : 'block col-span-2'}>
            <Button type='submit' className='mt-5 w-full bg-green-600 hover:bg-green-700'>
              Editar
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProfilePage
