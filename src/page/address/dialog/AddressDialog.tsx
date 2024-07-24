import { AddressAdapter } from '@/adapters/address.adapter'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { addressSchema, TAddressSchema } from '../schema/addressSchema'
import Input from '@/components/Input'
import { Button } from '@/components/ui/button'
import useConfirmation from '@/hooks/useConfirmation.hook'

interface Props {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  address: AddressAdapter | null
  close: () => void
  add: (address: Omit<AddressAdapter, 'id'>) => void
  edit: (address: AddressAdapter) => void
}

const AddressDialog = ({ isOpen, onOpenChange, address, close, add, edit }: Props) => {
  const isCreate = useMemo(() => address === null, [address])

  const { Modal, open, saveData } = useConfirmation({
    title: 'Editar Dirección',
    message: '¿Estás seguro de editar esta dirección?',
    onConfirm: (data?: TAddressSchema) => {
      if (address && data) {
        edit({ ...data, state: 'active', id: address.id })
        close()
      }
    }
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TAddressSchema>({
    resolver: zodResolver(addressSchema)
  })

  const handleOnSubmit = (data: TAddressSchema) => {
    const body = { ...data, state: 'active' }
    if (isCreate) {
      add(body)
      close()
      return
    }
    saveData(data)
    open()
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <AlertDialogHeader>
            <AlertDialogTitle className='text-center'>
              {isCreate ? 'Agregar Dirección' : 'Editar Dirección '}
            </AlertDialogTitle>
          </AlertDialogHeader>
          <div className='space-y-2'>
            <Input
              hookForm={register('address')}
              label='Dirección'
              placeholder='Av. San Martin de Porres 4321...'
              defaultValue={address?.address}
              error={errors.address}
            />
            <Input
              hookForm={register('district')}
              label='Distrito'
              placeholder='San Juan de Lurigancho'
              defaultValue={address?.district}
              error={errors.district}
            />
            <Input
              hookForm={register('province')}
              label='Provincia'
              placeholder='Lima'
              defaultValue={address?.province}
              error={errors.province}
            />
          </div>
          <AlertDialogFooter className='mt-4'>
            <Button type='button' variant='ghost' onClick={close}>
              Cancel
            </Button>
            <Button type='submit'>{isCreate ? 'Agregar' : 'Editar'}</Button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
      <Modal />
    </AlertDialog>
  )
}

export default AddressDialog
