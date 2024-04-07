import { Category } from '@/model/Category.model'

interface CategoryCardProps extends Category{
  isActive: boolean,
  handleCategory: (id: number) => void
}

const CategoryCard = ({ id, imageUrl, name, handleCategory, isActive }: CategoryCardProps ) => {

  const handleCLick = (id: number) => {
    handleCategory(id)
  }

  return (
    <div className={`w-28 p-2 cursor-pointer rounded-md  ${isActive ? 'bg-slate-300' : 'bg-gray-100'}`} onClick={() => handleCLick(id)}>
      <img src={imageUrl} alt={`${name} icon`} className='w-12 mx-auto'/>
      <p className='text-center line-clamp-1'>{name}</p>
    </div>
  )
}

export default CategoryCard
