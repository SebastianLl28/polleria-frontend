import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useModalStore } from '@/store/modalStore'
import { CircleUserRound, Menu, ShoppingBasket } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import useCartStore from '@/store/cartStore'

export const Header = () => {
  const { setIsOpen } = useModalStore()

  const { items } = useCartStore()

  return (
    <header className='sticky top-0 z-50 w-full border-b border-black bg-white py-4'>
      <div className='container mx-auto flex items-center justify-between'>
        <div>
          <Link
            to='/'
            className='flex h-12 w-36 items-center justify-center rounded bg-gray-300 font-bold'
          >
            Logo
          </Link>
        </div>
        <nav className='hidden sm:inline-block'>
          <ul className='flex items-center gap-4'>
            <li>
              <Link to='/products'>Productos</Link>
            </li>
            <li>
              <Link to='/locations'>Locales</Link>
            </li>
            <li>
              <Button className='size-12 rounded-full p-0' variant='ghost'>
                <CircleUserRound size={35} />
              </Button>
            </li>
            <li>
              <Button
                onClick={() => setIsOpen(true)}
                className='size-12 rounded-full p-0 relative'
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
        <div className='sm:hidden'>
          <Sheet>
            <SheetTrigger>
              <Button className='p-0' variant='ghost'>
                <Menu size={30} />
              </Button>
            </SheetTrigger>
            <SheetContent className='w-full'>
              <nav className='h-full w-full'>
                <ul className='flex h-full w-full flex-col items-center justify-center gap-4 text-xl'>
                  <li>
                    <Link
                      to='/'
                      className='flex h-12 w-36 items-center justify-center rounded bg-gray-300 font-bold'
                    >
                      Logo
                    </Link>
                  </li>
                  <li>
                    <Link to='/products'>Productos</Link>
                  </li>
                  <li>
                    <Link to='/locations'>Locales</Link>
                  </li>
                  <li>
                    <Button className='w-full text-xl'>Iniciar Sesión</Button>
                  </li>
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
