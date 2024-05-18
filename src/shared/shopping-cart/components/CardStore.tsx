import useCartStore, { IProductstore } from '@/store/cartStore'
import Decimal from 'decimal.js-light'
import { Button } from '@/components/ui/button'
import { useLocationSelectedStore } from '@/store/locationSelectedStore'
import { useCallback, useEffect } from 'react'

const CardStore = ({
  id,
  name,
  imageUrl,
  quantity,
  price,
  stock,
  ...args
}: IProductstore) => {
  const { removeItem, addItem, findItem, setQuantity, deleteItem } = useCartStore()
  const { selected } = useLocationSelectedStore()

  const findStock = useCallback(() => {
    if (!selected) return
    return stock.find(store => store.store === selected.name)
  }, [selected, stock])

  const handleAddItem = () => {
    const item = findItem(id)
    if (!item) return

    if (!selected) return

    const stockSelected = findStock()
    if (!stockSelected) return

    if (item.quantity >= stockSelected.quantity) return
    addItem({ id, name, imageUrl, price, stock, ...args })
  }

  // Check if the location is selected and if the item is in stock
  useEffect(() => {
    // If the store is not selected, return
    if (!selected) return

    // If the item is not found, return
    const item = findItem(id)
    if (!item) return

    // If the stock is not found, return
    const stockSelected = findStock()
    if (!stockSelected) {
      deleteItem(id)
      return
    }

    if (item.quantity > stockSelected.quantity) {
      setQuantity(id, 1)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, setQuantity, findItem, id, findStock, removeItem])

  return (
    <li key={id} className='overflow-hidden rounded'>
      <img src={name} alt='' />
      <div className='flex items-center justify-between px-5 py-2'>
        <img src={imageUrl} className='w-16 ' alt={name} />
        <p>{name}</p>
        <div className='flex items-center justify-center'>
          <Button
            className='h-8 w-5'
            onClick={() => removeItem({ id, name, imageUrl, price, stock, ...args })}
          >
            -
          </Button>
          <p className='mx-2'>{quantity}</p>
          <Button className='h-8 w-5' onClick={handleAddItem}>
            +
          </Button>
        </div>
        <p key={id}>{new Decimal(quantity).times(price).toFixed(2).toString()}</p>
      </div>
    </li>
  )
}

export default CardStore
