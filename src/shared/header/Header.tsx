import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useModalStore } from '@/store/modalStore'
import { CircleUserRound, MapPin, ShoppingBasket } from 'lucide-react'
import useCartStore from '@/store/cartStore'
import { useLocationModalStore } from '@/store/localModalStore'
import { useLocationSelectedStore } from '@/store/locationSelectedStore'
import { useLoginModalStore } from '@/store/loginModalStore'

export const Header = () => {
  const { setIsOpen } = useModalStore()

  const { items } = useCartStore()

  const { setIsOpen: setIsOpenLocalModalStore } = useLocationModalStore()

  const { selected } = useLocationSelectedStore()

  const { open } = useLoginModalStore()

  return (
    <header className='sticky top-0 z-50 w-full border-b border-black bg-white py-2'>
      <div className='container mx-auto flex items-center justify-between'>
        <div
          className='flex cursor-pointer items-center gap-2 rounded-md p-3 pr-4 hover:bg-slate-100'
          onClick={() => setIsOpenLocalModalStore(true)}
        >
          <MapPin />
          <p className='font-semibold'>
            {selected ? selected.name : '¿De tienda quieres recibir tu pedido?'}
          </p>
        </div>
        <div>
          <Link to='/'>
            <img src='/logo.webp' alt='Logo polleria' className='w-14' />
          </Link>
        </div>
        <nav className='hidden sm:inline-block'>
          <ul className='flex items-center gap-4 font-semibold'>
            <li>
              <Link to='/products'>Productos</Link>
            </li>
            <li>
              <Link to='/locations'>Locales</Link>
            </li>
            <li>
              <Button
                className='size-12 rounded-full p-0'
                variant='ghost'
                type='button'
                name='login button'
                aria-label='login button'
                onClick={open}
              >
                <CircleUserRound size={35} />
              </Button>
            </li>
            <li>
              <Button
                onClick={() => setIsOpen(true)}
                className='relative size-12 rounded-full p-0'
                variant='ghost'
              >
                <ShoppingBasket size={35} />
                <span className='absolute -top-0.5 right-0 h-5 w-5 rounded-full bg-red-300'>
                  {items.length}
                </span>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
