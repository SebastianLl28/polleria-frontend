import { Button } from '@/components/ui/button'
import { useGetAllAddressByUserId } from '@/hooks/address.hook'
import { Frown, PlusIcon } from 'lucide-react'
import Card from './components/Card'
import Loader from './components/Loader'
import useDialog from './hooks/useDialog'

const AddressPage = () => {
  const { data, isLoading, isSuccess, isError } = useGetAllAddressByUserId()
  const { Dialog, open, mutateDelete } = useDialog()
  return (
    <div className='container flex min-h-[40vh] flex-col items-center space-y-6'>
      <div className='space-y-4'>
        <h2 className=' text-2xl font-semibold'>Mis direcciones</h2>
        <Button variant='secondary' className='space-x-2' onClick={() => open(null)}>
          <PlusIcon size={16} />
          <span>Agregar dirección</span>
        </Button>
      </div>
      {isLoading && <Loader />}
      {isSuccess &&
        (data && data.length > 0 ? (
          <ul className='w-11/12 max-w-3xl space-y-5'>
            {data.map(address => (
              <Card
                {...address}
                key={address.id}
                open={open}
                deleteAddress={mutateDelete}
              />
            ))}
          </ul>
        ) : (
          <p>No tienes direcciones registradas</p>
        ))}
      {isError && (
        <p className='flex gap-2 text-gray-700'>
          Ocurrió un error, intentelo mas tarde <Frown />
        </p>
      )}
      <Dialog />
    </div>
  )
}

export default AddressPage
