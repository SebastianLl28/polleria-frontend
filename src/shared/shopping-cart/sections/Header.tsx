import { Button } from '@/components/ui/button'
import { useLocationModalStore } from '@/store/localModalStore'
import { useLocationSelectedStore } from '@/store/locationSelectedStore'
import { useModalStore } from '@/store/modalStore'
import { X } from 'lucide-react'

const Header = () => {
  const { selected } = useLocationSelectedStore()
  const { setIsOpen } = useLocationModalStore()
  const { setIsOpen: setIsOpenCart } = useModalStore()

  const handleSelect = () => {
    setIsOpen(true)
  }

  return (
    <header className='flex w-full items-center gap-4 bg-primary px-4 py-2'>
      <Button
        type='button'
        variant='secondary'
        className='h-auto w-auto rounded-full p-2'
        size='sm'
        onClick={() => setIsOpenCart(false)}
      >
        <X size={16} />
      </Button>
      <div className='flex-grow basis-0'>
        {selected ? (
          <div className='flex'>
            <div className='text-white'>
              <p className='text-xs'>Tienda seleccionada: </p>
              <p className='font-semibold'>{selected.name}</p>
            </div>
            <Button type='button' onClick={handleSelect} className='ml-auto underline'>
              Cambiar
            </Button>
          </div>
        ) : (
          <button
            type='button'
            onClick={handleSelect}
            className='line-clamp-1 text-white underline'
          >
            Selecciona una tienda para su carrito
          </button>
        )}
      </div>
    </header>
  )
}

export default Header
