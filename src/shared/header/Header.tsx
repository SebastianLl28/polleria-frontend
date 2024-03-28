import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useModalStore } from '@/store/modalStore'
import { CircleUserRound, Menu, ShoppingBasket } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export const Header = () => {

  const { setIsOpen } = useModalStore()

  return (
    <header className='w-full border-b border-black py-4 sticky top-0 bg-white'>
      <div className='container mx-auto flex justify-between items-center'>
        <div>
          <Link to='/' className='w-36 h-12 bg-gray-300 rounded flex items-center justify-center font-bold'>
            Logo
          </Link>
        </div>
        <nav className='hidden sm:inline-block'>
          <ul className='flex items-center gap-4'>
            <li>
              <Link to='/products'>Productos</Link>
            </li>
            <li>
              <Link to='/'>Locales</Link>
            </li>
            <li>
              <Button className='size-12 p-0 rounded-full' variant='ghost'>
                <CircleUserRound size={35}/>
              </Button>
            </li>
            <li>
              <Button onClick={() => setIsOpen(true)} className='size-12 p-0 rounded-full' variant='ghost'>
                <ShoppingBasket size={35}/>
              </Button>
            </li>
          </ul>
        </nav>
        <div className='sm:hidden'>
          <Sheet>
            <SheetTrigger>
              <Button className='p-0' variant='ghost'>
                <Menu size={35}/>
              </Button>
            </SheetTrigger>
            <SheetContent className='w-full'>
              <nav className='w-full h-full'>
                <ul className='w-full h-full flex flex-col items-center justify-center gap-4 text-xl'>
                  <li>
                    <Link to='/' className='w-36 h-12 bg-gray-300 rounded flex items-center justify-center font-bold'>
                    Logo
                    </Link>
                  </li>
                  <li>
                    <Link to='/products'>Productos</Link>
                  </li>
                  <li>
                    <Link to='/'>Locales</Link>
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