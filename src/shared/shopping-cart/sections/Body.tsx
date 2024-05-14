import { Button } from '@/components/ui/button'
import useCartStore from '@/store/cartStore'
import Decimal from 'decimal.js-light'

const Body = () => {
  const { items, removeItem, addItem } = useCartStore()

  return (
    <div>
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
                  <Button className='h-8 w-5' onClick={() => removeItem(item)}>
                    -
                  </Button>
                  <p className='mx-2'>{item.quantity}</p>
                  <Button className='h-8 w-5' onClick={() => addItem(item)}>
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
    </div>
  )
}

export default Body
