import { useLocationSelectedStore } from '@/store/locationSelectedStore'
import { useLocationModalStore } from '@/store/localModalStore'
import { MapPin } from 'lucide-react'

const Ubication = () => {
  const { selected } = useLocationSelectedStore()
  const { setIsOpen: setIsOpenLocalModalStore } = useLocationModalStore()

  return (
    <button
      type='button'
      className='cursor-pointer rounded-md p-3 pr-4 hover:bg-slate-100 md:flex md:items-center md:gap-2'
      onClick={() => setIsOpenLocalModalStore(true)}
    >
      <MapPin />
      <p className='font-semibold'>
        {selected ? selected.name : '¿De tienda quieres recibir tu pedido?'}
      </p>
    </button>
  )
}

export default Ubication
