import { Star } from 'lucide-react'
import { Link } from 'react-router-dom'

interface CategoryCardProps {
  name: string
  image: string
  valoration: number
  id: number
}

const CategoryCard = ({ name, image, valoration, id }: CategoryCardProps) => {
  return (
    <li>
      <Link
        to={`/products/${id}`}
        className='flex cursor-pointer gap-x-2 rounded-md p-4 hover:bg-gray-200'
        preventScrollReset={false}
      >
        <img src={image} alt={name} className='row-span-2 size-16 rounded-md' />
        <div className='space-y-1 self-center from-neutral-200'>
          <p className='text-lg font-semibold'>{name}</p>
          <div className='flex items-center gap-1'>
            <p>{valoration}</p>
            <Star className='size-4 text-yellow-500' />
          </div>
        </div>
      </Link>
    </li>
  )
}

export default CategoryCard
