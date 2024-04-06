import { useGetCategories } from '@/hooks/categories.hook'
import { Category } from '@/model/Category.model'
import { useEffect, useState } from 'react'

export interface ICategoryState extends Category {
  isActive: boolean
}

const useCategories = () => {

  // initial data
  const { isLoading, isSuccess, data: initialData } = useGetCategories()

  // set data with isActive
  const [categories, setCategories] = useState<null | ICategoryState[]>()

  // set category state with isActive when initial data is success
  useEffect(() => {
    if ( isSuccess && !isLoading && initialData ) {
      const newCategory = initialData.content.map((category) => {
        return {
          ...category,
          isActive: false
        }
      })
      setCategories(newCategory)
    }
  }, [isLoading, isSuccess, initialData ])

  // handle category when clicked
  const handleCategory = (id: number) => {
    const newCategory = categories?.map((category) => {
      if (category.id === id) {
        return {
          ...category,
          isActive: true
        }
      }
      return {
        ...category,
        isActive: false
      }
    })
    setCategories(newCategory)
  }

  return { isLoading, isSuccess, handleCategory, categories }
}

export default useCategories
