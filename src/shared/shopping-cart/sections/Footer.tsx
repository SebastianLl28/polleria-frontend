import { Button } from '@/components/ui/button'
import useCartStore from '@/store/cartStore'
import Decimal from 'decimal.js-light'

const Footer = () => {
  const { items } = useCartStore()

  return (
    <footer className='absolute inset-x-0 bottom-0 flex flex-col justify-center rounded-t-xl bg-yellow-400 px-5 pb-5'>
      <div className='total-price flex justify-between py-8'>
        <p className='text-[18px] font-bold'>Precio</p>
        {items.length > -1 && (
          <p className='text-[22px] font-bold text-slate-100'>
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
    </footer>
  )
}

export default Footer
