import { AddressAdapter } from '@/adapters/address.adapter'
import { Button } from '@/components/ui/button'
import { Card as CardCN } from '@/components/ui/card'
import useConfirmation from '@/hooks/useConfirmation.hook'
import { Pencil, Trash2 } from 'lucide-react'

interface Props extends AddressAdapter {
  open: (address: AddressAdapter) => void
  deleteAddress: (id: number) => void
}

const Card = ({ address, district, id, province, state, open, deleteAddress }: Props) => {
  const { Modal, open: openModal } = useConfirmation({
    title: 'Eliminar Dirección',
    message:
      '¿Estás seguro de eliminar esta dirección?, esta acción no se puede deshacer',
    onConfirm: () => {
      deleteAddress(id)
    }
  })

  const handleEdit = () => {
    const addressObj = { address, district, id, province, state }
    open(addressObj)
  }

  const handleDelete = () => {
    openModal()
  }

  return (
    <CardCN
      key={id}
      className='flex w-full items-center justify-between rounded-md border border-gray-300 bg-gray-50 p-4'
    >
      <div>
        <p className='text-lg font-bold'>{address}</p>
        <p className='text-sm text-gray-600'>{district}</p>
        <p className='text-sm text-gray-600'>{province}</p>
      </div>
      <div className='flex h-full gap-2'>
        <Button
          variant='ghost'
          type='button'
          size='icon'
          className='hover:text-yellow-500'
          onClick={handleEdit}
        >
          <Pencil />
        </Button>
        <Button
          variant='ghost'
          type='button'
          size='icon'
          className='hover:text-red-500'
          onClick={handleDelete}
        >
          <Trash2 />
        </Button>
      </div>
      <Modal />
    </CardCN>
  )
}

export default Card
