import { Sheet, SheetContent } from '@/components/ui/sheet'
import { useModalStore } from '@/store/modalStore'
import Footer from './sections/Footer'
import Body from './sections/Body'
import Header from './sections/Header'
import useCartStore from '@/store/cartStore'

const ShoppingCart = () => {
  const { isOpen, setIsOpen } = useModalStore()
  const { items } = useCartStore()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className='flex flex-col border-none bg-gray-100 p-0' hideCloseButton>
        <Header />
        <div className='flex flex-grow basis-1 flex-col justify-between'>
          <Body />
          {items.length !== 0 && <Footer />}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default ShoppingCart
