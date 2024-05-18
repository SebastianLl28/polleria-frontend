import useCartStore from '@/store/cartStore'
import CardStore from '../components/CardStore'

const Body = () => {
  const { items } = useCartStore()

  return (
    <div>
      {items.length === 0 ? (
        <p className='mt-5 text-center'>No hay productos en el carrito</p>
      ) : (
        <ul className='space-y-5'>
          {items.map(item => (
            <CardStore key={item.id} {...item} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default Body
