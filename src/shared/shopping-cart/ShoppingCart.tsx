import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet'
import useCartStore from '@/store/cartStore'
import { useModalStore } from '@/store/modalStore'

const ShoppingCart = () => {
  const { isOpen, setIsOpen } = useModalStore()

  const { items } = useCartStore()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className='overflow-y-scroll'>
        <SheetTitle>Carrito de Compra</SheetTitle>
        {items.length === 0 && (
          <p className='text-center'>No hay productos en el carrito</p>
        )}
        {items.length > 0 && (
          <ul className='space-y-5'>
            {items.map(item => (
              <li key={item.id} className='overflow-hidden rounded'>
                <img src={item.name} alt='' />
                <div className='flex justify-between'>
                  <p>{item.name}</p>
                  <p>{item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </SheetContent>
    </Sheet>
  )
}

export default ShoppingCart
