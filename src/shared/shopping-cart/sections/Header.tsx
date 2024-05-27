import { Button } from '@/components/ui/button'
import { useLocationModalStore } from '@/store/localModalStore'
import { useLocationSelectedStore } from '@/store/locationSelectedStore'

const Header = () => {
  const { selected } = useLocationSelectedStore()
  const { setIsOpen } = useLocationModalStore()

  const handleSelect = () => {
    setIsOpen(true)
  }

  return (
    <header className='w-full bg-primary px-4 py-2'>
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
    </header>
  )
}

export default Header
