import { Category } from '@/model/Category.model'
import { Dispatch } from 'react'

interface CategoryCardProps extends Category{
  setCategory: Dispatch<number>
  selected: boolean
}

const CategoryCard = ({ id, image, name, setCategory, selected }: CategoryCardProps ) => {
  return (
    <div onClick={() => setCategory(id)} className={`w-28 p-2 cursor-pointer rounded-md ${selected ? 'bg-gray-400' : 'bg-gray-100'}`}>
      <img src={image} alt={`${name} icon`} className='w-12 mx-auto'/>
      <p className='text-center line-clamp-1'>{name}</p>
    </div>
  )
}

export default CategoryCard
