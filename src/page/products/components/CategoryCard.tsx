import { Category } from '@/model/Category.model'

interface CategoryCardProps extends Category {
  isActive: boolean
  handleCategory: (id: number) => void
}

const CategoryCard = ({
  id,
  imageUrl,
  name,
  handleCategory,
  isActive
}: CategoryCardProps) => {
  const handleCLick = (id: number) => {
    handleCategory(id)
  }

  return (
    <div
      className={`w-28 cursor-pointer rounded-md p-2  ${isActive ? 'bg-slate-300' : 'bg-gray-100'}`}
      onClick={() => handleCLick(id)}
    >
      <img src={imageUrl} alt={`${name} icon`} className='mx-auto w-12' />
      <p className='line-clamp-1 text-center'>{name}</p>
    </div>
  )
}

export default CategoryCard
