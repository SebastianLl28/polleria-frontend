import { Sheet, SheetContent } from '@/components/ui/sheet'
import { useModalStore } from '@/store/modalStore'
import Footer from './sections/Footer'
import Body from './sections/Body'
import Header from './sections/Header'

const ShoppingCart = () => {
  const { isOpen, setIsOpen } = useModalStore()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className='overflow-y-scroll px-5 pt-10'>
        <Header />
        <Body />
        <Footer />
      </SheetContent>
    </Sheet>
  )
}

export default ShoppingCart
