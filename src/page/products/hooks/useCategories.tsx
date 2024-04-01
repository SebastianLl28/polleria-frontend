import { useEffect, useReducer, useState } from 'react'
import { Category } from '@/model/Category.model'
import { useGetCategories } from '@/hooks/categories.hook'

export interface CategoryState extends Category {
  selected: boolean
}

const useCategories = () => {

  const { data, isLoading, isSuccess } = useGetCategories()

  const [initialCategoriesState, setInitialCategoriesState] = useState(data?.content ? data?.content.map((category) => ({ ...category, selected: false })) : null)

  useEffect(() => {
    setInitialCategoriesState(data?.content ? data?.content.map((category) => ({ ...category, selected: false })) : null)
  }, [data])

  const [categories, setCategories] = useReducer((state: CategoryState[] | null, action: number) => {
    if (action && state) {
      return state.map(category => {
        if (category.id === action) {
          return { ...category, selected: !category.selected }
        } else {
          return { ...category, selected: false }
        }
      })
    }
    else {
      return state
    }
  }, initialCategoriesState)

  return { categories, setCategories, isLoading, isSuccess }
}

export default useCategories
