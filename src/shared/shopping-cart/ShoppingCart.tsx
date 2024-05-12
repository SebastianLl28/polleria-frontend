import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet'
import useCartStore, { IProductstore } from '@/store/cartStore'
import { useModalStore } from '@/store/modalStore'
import { Button } from '@/components/ui/button'
import Decimal from 'decimal.js-light'

const ShoppingCart = () => {
  const { isOpen, setIsOpen } = useModalStore()

  const { items, removeItem, addItem } = useCartStore()

  const handleRemove = (item: IProductstore) => {
    removeItem(item)
  }

  const handleAdd = (item: IProductstore) => {
    addItem(item)
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className='overflow-y-scroll px-5 pt-10'>
        <SheetTitle className='py-2 '>Carrito de Compra</SheetTitle>
        {items.length === 0 && (
          <p className='mt-5 text-center'>No hay productos en el carrito</p>
        )}
        {items.length > 0 && (
          <ul className='space-y-5'>
            {items.map(item => (
              <li key={item.id} className='overflow-hidden rounded'>
                <img src={item.name} alt='' />
                <div className='flex items-center justify-between px-5 py-2'>
                  <img src={item.imageUrl} className='w-16 ' alt={item.name} />
                  <p>{item.name}</p>
                  <div className='flex items-center justify-center'>
                    <Button className='h-8 w-5' onClick={() => handleRemove(item)}>
                      -
                    </Button>
                    <p className='mx-2'>{item.quantity}</p>
                    <Button className='h-8 w-5' onClick={() => handleAdd(item)}>
                      +
                    </Button>
                  </div>
                  <p key={item.id}>
                    {new Decimal(item.quantity).times(item.price).toFixed(2).toString()}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className='absolute inset-x-0 bottom-0 flex flex-col justify-center rounded-t-xl bg-yellow-400 px-5 pb-5'>
          <div className='total-price flex justify-between py-8'>
            <p className='text-[18px] font-bold'>Precio</p>
            {items.length > -1 && (
              <p className='text-[22px] font-bold text-slate-100'>
                {/* reduce(accumulated total, and current item) */}
                {items
                  .reduce(
                    (totalPrice, item) =>
                      new Decimal(totalPrice).plus(
                        new Decimal(item.quantity).times(item.price)
                      ),
                    new Decimal(0)
                  )
                  .toFixed(2)
                  .toString()}
              </p>
            )}
          </div>
          <Button
            className='rounded-2xl bg-green-500 px-4 py-1'
            disabled={items.length === 0}
          >
            Finalizar compra
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default ShoppingCart
