import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet'
import { useModalStore } from '@/store/modalStore'

const ShoppingCart = () => {

  const { isOpen, setIsOpen } = useModalStore()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent>
        <SheetTitle>Carrito de Compra</SheetTitle>
      </SheetContent>
    </Sheet>
  )
}

export default ShoppingCart
