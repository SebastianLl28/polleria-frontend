import { ProductAdapter } from '@/adapters/product.adapter'
import { Link } from 'react-router-dom'

const Card = ({ id, name, description, imageUrl }: ProductAdapter) => {
  return (
    <li key={id} className='grid grid-cols-[auto,1fr] gap-3'>
      <img
        src={imageUrl}
        alt={name}
        width={112}
        height={112}
        className='size-28 rounded-md'
        loading='lazy'
      />
      <div className='flex flex-col'>
        <h3 className='text-lg font-semibold'>{name}</h3>
        <p className='line-clamp-2 h-12 text-gray-500'>{description}</p>
        <Link to={`/products/${id}`} className='mt-auto text-primary underline'>
          Ver más
        </Link>
      </div>
    </li>
  )
}

export default Card
