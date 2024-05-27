import { Badge } from '@/components/ui/badge'
import { ProductStockAdapter } from '@/adapters/product.adapter'
import Styles from './styles/background.module.css'
import { Califications } from './shared'
import { Button } from '@/components/ui/button'
import useCartStore from '@/store/cartStore'
import { useModalStore } from '@/store/modalStore'
import useCounter from '@/hooks/useCounter.hook'
import { useLocationSelectedStore } from '@/store/locationSelectedStore'
import { useEffect, useState } from 'react'

const Hero = ({
  name,
  categoryList,
  description,
  imageUrl,
  price,
  id,
  valoration,
  stock
}: ProductStockAdapter) => {
  const { addItem, findItem } = useCartStore()
  const { setIsOpen } = useModalStore()
  const { count, increment, decrement, setCount } = useCounter(0)
  const { selected } = useLocationSelectedStore()
  const handleFoodAdd = () => {
    const item = findItem(id)
    if (!item) {
      addItem({ id, name, price, imageUrl, stock, description }, count)
      setIsOpen(true)
      return
    }
    if (!selected) return
    const stockSelected = stock.find(store => store.store === selected.name)
    if (!stockSelected) return
    //If you want to add more than what is in stock
    if (item.quantity + count > stockSelected.quantity) return

    setIsOpen(true)
    addItem({ id, name, price, imageUrl, stock, description }, count)
  }

  const [isError, setIsError] = useState(false)

  const handleIncrement = () => {
    const stockSelected = stock.find(store => store.store === selected?.name)
    if (count >= (stockSelected?.quantity || 0)) {
      setIsError(true)
      return
    }
    setIsError(false)
    increment()
  }

  useEffect(() => {
    setCount(1)
    setIsError(false)

    if (!selected) return

    const stockSelected = stock.find(store => store.store === selected.name)

    if (!stockSelected) {
      setCount(0)
      setIsError(true)
      return
    }

    if (count >= stockSelected.quantity) {
      setCount(1)
      return
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, setCount, stock])

  const handleDecrement = () => {
    if (count <= 1) return
    setIsError(false)
    decrement()
  }

  return (
    <section className='bg-gray-900 py-20 text-white'>
      <div className='container grid grid-cols-2'>
        <div className='space-y-8'>
          <div>
            <h1 className='text-6xl font-bold leading-snug'>{name}</h1>
            <div className='flex gap-2'>
              {categoryList.map(category => (
                <Badge key={category} className='text-sm'>
                  {category}
                </Badge>
              ))}
            </div>
          </div>
          <Califications valoration={valoration} />
          <p className='text-xl'>{description}</p>
          <div className='space-y-4'>
            <div>
              <div className='flex items-center gap-4'>
                <Button
                  onClick={handleDecrement}
                  className='select-none bg-gray-700 hover:bg-gray-800'
                  disabled={count <= 1}
                >
                  -
                </Button>
                <span className='font-semibold'>{count}</span>
                <Button
                  onClick={handleIncrement}
                  className='select-none bg-gray-700 hover:bg-gray-800'
                  disabled={isError}
                >
                  +
                </Button>
              </div>
            </div>
            <Button
              onClick={handleFoodAdd}
              className='bg-green-700 hover:bg-green-800'
              disabled={count === 0}
            >
              Agregar Al Carrito
            </Button>
            {isError && (
              <p className='text-sm text-red-500'>
                No hay suficiente stock en la tienda seleccionada
              </p>
            )}
          </div>
        </div>
        <div className='relative flex justify-end'>
          <img src={imageUrl} alt={name} className='max-w-md' />
          <div className={Styles.backgroundImage}></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
