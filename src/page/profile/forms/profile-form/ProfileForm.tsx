import { useCallback, useEffect, useState } from 'react'
import { Pencil } from 'lucide-react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { useGetProfileById, useUpdateProfileById } from '@/hooks/customers.hook'
import { zodResolver } from '@hookform/resolvers/zod'
import { useLoginStore } from '@/store/loginStore'
import { TProfileSchema, profileSchema } from '../../schema/profile.schema'
import Input from '@/components/form/Input'

const ProfileForm = () => {
  const [editProfile, setEditProfile] = useState(false)

  const id = useLoginStore(state => state.user!.id)

  const { data, isSuccess } = useGetProfileById()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<TProfileSchema>({
    resolver: zodResolver(profileSchema)
  })

  const onEnableEditAccount = () => {
    setEditProfile(!editProfile)
  }

  const refreshData = useCallback(() => {
    if (data) {
      setValue('name', data.name)
      setValue('lastName', data.lastName)
      setValue('email', data.email)
      setValue('birthDate', data.birthDate)
    }
  }, [data, setValue])

  useEffect(() => {
    refreshData()
  }, [refreshData])

  const { mutate } = useUpdateProfileById(id)

  const onSubmit: SubmitHandler<TProfileSchema> = async data => {
    mutate(data)
    setEditProfile(!editProfile)
  }

  return (
    <div className='relative mx-3 mb-8 w-full rounded-lg bg-stone-100 px-8 py-9 shadow-lg md:max-w-screen-sm '>
      <div className='absolute right-2 top-1'>
        <Button
          className='bg-transparent px-3 py-2 hover:bg-stone-200'
          onClick={onEnableEditAccount}
        >
          <Pencil color='black' strokeWidth={1.5} width={18} />
        </Button>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='grid grid-cols-2 gap-x-2 gap-y-4'
      >
        <Input
          label='Nombre'
          className='w-full'
          hookForm={register('name')}
          classNameContainer='col-span-2 md:col-span-1'
          placeholder={isSuccess ? data.name : ''}
          defaultValue={isSuccess ? data.name : ''}
          disabled={!editProfile}
          error={errors.name}
        />
        <Input
          label='Apellidos'
          className='w-full'
          hookForm={register('lastName')}
          classNameContainer='col-span-2 md:col-span-1'
          placeholder={isSuccess ? data.lastName : ''}
          defaultValue={isSuccess ? data.lastName : ''}
          disabled={!editProfile}
          error={errors.lastName}
        />
        <Input
          label='Correo'
          className='w-full'
          hookForm={register('email')}
          classNameContainer='col-span-2'
          placeholder={isSuccess ? data.email : ''}
          defaultValue={isSuccess ? data.email : ''}
          disabled={!editProfile}
          error={errors.email}
        />
        <Input
          type='date'
          label='Cumpleaños'
          className='w-full'
          hookForm={register('birthDate')}
          classNameContainer='col-span-2'
          placeholder={isSuccess ? data.birthDate : ''}
          defaultValue={isSuccess ? data.birthDate : ''}
          disabled={!editProfile}
          error={errors.birthDate}
        />
        <div className={!editProfile ? 'col-span-2 hidden' : 'col-span-2 block'}>
          <Button type='submit' className='mt-5 w-full bg-green-600 hover:bg-green-700'>
            Editar
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ProfileForm
