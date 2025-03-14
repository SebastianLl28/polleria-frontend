import { Category } from '@/model/Category.model'

interface CategoryCardProps extends Category {
  isActive?: boolean
  handleCategory: (id: number | null) => void
  categoryIdActive: number | null
}

const CategoryCard = ({
  id,
  imageUrl,
  name,
  handleCategory,
  isActive,
  categoryIdActive
}: CategoryCardProps) => {
  const handleCLick = (id: number) => {
    if (categoryIdActive !== id) {
      handleCategory(id)
      return
    }
    handleCategory(null)
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
