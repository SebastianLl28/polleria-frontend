import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet'
import useCartStore, { IProductstore } from '@/store/cartStore'
import { useModalStore } from '@/store/modalStore'
import { Button } from '@/components/ui/button'

const ShoppingCart = () => {
  const { isOpen, setIsOpen } = useModalStore()

  const { items, removeItem, addItem } = useCartStore()

  const handleRemove = (item: IProductstore) => {
    removeItem(item); 
  };

  const handleAdd = (item: IProductstore) => {
    addItem(item); 
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className='overflow-y-scroll px-5 pt-10'>
        <SheetTitle className='py-2 '>Carrito de Compra</SheetTitle>
        {items.length === 0 && (
          <p className='text-center mt-5'>No hay productos en el carrito</p>
        )}
        {items.length > 0 && (
          <ul className='space-y-5'>
            {items.map(item => (
              <li key={item.id} className='overflow-hidden rounded'>
                <img src={item.name} alt='' />
                <div className='flex justify-between px-5 py-2 items-center'>
                  <img 
                    src={item.imageUrl} 
                    className='w-16 '
                    alt={item.name} />
                  <p>{item.name}</p>
                  <div className='flex justify-center items-center'>
                    <Button 
                      className='w-5 h-8'
                      onClick={() => handleRemove(item)}
                    >
                      -
                    </Button>
                    <p className='mx-2'>{item.quantity}</p>
                    <Button 
                      className='w-5 h-8'
                      onClick={() => handleAdd(item)}
                    >
                      +
                    </Button>
                  </div>
                  {/* <input type="number" name="" id="" /> */}
                  <p>{item.quantity * item.price}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
        
          <div className="bg-yellow-400 rounded-t-xl absolute inset-x-0 bottom-0 px-5 flex flex-col justify-center pb-5">
              <div className="total-price flex justify-between py-8">
                <p className="text-[18px] font-bold">Precio</p>
                {items.length > -1 && (
                <p className="text-[22px] font-bold text-slate-100">
                  {/* reduce(accumulated total, and current item) */}
                  {items.reduce((totalPrice, item) => totalPrice + (item.quantity * item.price), 0)}
                </p>
                )}           
              </div>
              <Button className="bg-green-500 rounded-2xl px-4 py-1" disabled={items.length === 0}>
                Finalizar compra
              </Button>
            </div>
      </SheetContent>
    </Sheet>
  )
}

export default ShoppingCart
