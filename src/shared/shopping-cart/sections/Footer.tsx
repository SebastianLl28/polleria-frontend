import { Button } from '@/components/ui/button'
import useCartStore from '@/store/cartStore'
import Decimal from 'decimal.js-light'
import { useMemo } from 'react'

const Footer = () => {
  const { items } = useCartStore()

  const totalPrice = useMemo(() => {
    return items
      .reduce(
        (totalPrice, item) =>
          new Decimal(totalPrice).plus(new Decimal(item.quantity).times(item.price)),
        new Decimal(0)
      )
      .toFixed(2)
      .toString()
  }, [items])

  return (
    <footer className='p-5'>
      <Button className='flex w-full items-center justify-between rounded-full px-7 py-7 text-lg'>
        <span>S/ {totalPrice}</span>
        <span>Comprar</span>
      </Button>
    </footer>
  )
}

export default Footer
