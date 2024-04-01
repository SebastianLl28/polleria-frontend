import { Category } from '@/model/Category.model'
// import { Dispatch } from 'react'

interface CategoryCardProps extends Category{
  // setCategory: Dispatch<number>
  // selected: boolean
}

const CategoryCard = ({ imageUrl, name }: CategoryCardProps ) => {
  return (
    <div className={'w-28 p-2 cursor-pointer rounded-md bg-gray-100'}>
      <img src={imageUrl} alt={`${name} icon`} className='w-12 mx-auto'/>
      <p className='text-center line-clamp-1'>{name}</p>
    </div>
  )
}

export default CategoryCard
