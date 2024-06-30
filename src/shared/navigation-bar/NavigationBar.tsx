import useCartStore from '@/store/cartStore'
import { useLoginModalStore } from '@/store/loginModalStore'
import { useModalStore } from '@/store/modalStore'
import { Button } from '@/components/ui/button'
import { MapPin, Search, ShoppingCart, User } from 'lucide-react'
import { useLocationModalStore } from '@/store/localModalStore'

const NavigationBar = () => {
  const { setIsOpen: setIsOpenLocalModalStore } = useLocationModalStore()
  const { setIsOpen } = useModalStore()
  const { items } = useCartStore()
  const { open } = useLoginModalStore()

  return (
    <header className='fixed bottom-0 inline-block w-full bg-primary pb-2 pt-3 md:hidden'>
      <nav className='container w-full'>
        <ul className='flex items-center justify-between font-semibold text-white sm:justify-around'>
          <li>
            <Search size={30} />
          </li>
          <li>
            <Button
              className='size-12 rounded-full p-0 md:hidden'
              variant='ghost'
              type='button'
              name='location button'
              aria-label='location button'
              onClick={() => setIsOpenLocalModalStore(true)}
            >
              <MapPin size={30} />
            </Button>
          </li>
          <li>
            <Button
              onClick={() => setIsOpen(true)}
              className='relative size-12 rounded-full p-0'
              variant='ghost'
            >
              <ShoppingCart size={30} />
              <span className='absolute -top-0.5 right-0 h-5 w-5 rounded-full bg-red-500'>
                {items.length}
              </span>
            </Button>
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
              <User size={33} />
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavigationBar
