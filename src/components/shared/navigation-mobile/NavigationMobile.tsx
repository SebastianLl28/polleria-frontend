import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet'
import { useNavigationMobileStore } from '@/store/navigationMobileStore'
import { Link } from 'react-router-dom'

const NavigationMobile = () => {
  const { setIsOpen, isOpen } = useNavigationMobileStore()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            <ul>
              <li>
                <Link to='/'>Inicio</Link>
              </li>
              <li>
                <Link to='/products'>Productos</Link>
              </li>
              <li>
                <Link to='/locations'>Locales</Link>
              </li>
              <li>
                <Link to='/locations'>Contacto</Link>
              </li>
            </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default NavigationMobile
