import { useLocationModalStore } from '@/store/localModalStore'
import { useModalStore } from '@/store/modalStore'
import useCartStore from '@/store/cartStore'
import { useLoginModalStore } from '@/store/loginModalStore'
import { Button } from '@/components/ui/button'
import { MapPin, Search, ShoppingCart, User } from 'lucide-react'
import { useSearchStore } from '@/store/searchStore'

const Buttons = () => {
  const { open } = useLoginModalStore()
  const { setIsOpen } = useModalStore()

  const { items } = useCartStore()
  const { setIsOpen: setIsOpenLocalModalStore } = useLocationModalStore()

  const { setIsOpenSearch, isOpenSearch } = useSearchStore()

  return (
    <ul className='flex items-center gap-6 font-semibold'>
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
          className='size-12 rounded-full p-0'
          variant='ghost'
          type='button'
          name='search button'
          aria-label='search button'
          onClick={() => setIsOpenSearch(!isOpenSearch)}
        >
          <Search size={30} />
        </Button>
      </li>
      <li>
        <Button
          onClick={() => setIsOpen(true)}
          className='relative size-12 rounded-full p-0'
          variant='ghost'
        >
          <ShoppingCart size={30} />
          <span className='absolute -top-0.5 right-0 h-5 w-5 rounded-full bg-red-500 text-white'>
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
  )
}

export default Buttons
