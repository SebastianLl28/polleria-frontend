import { useReducer } from 'react'
import categoriesData from '../data/categories.json' assert { type: 'json' }
import { Category } from '@/model/Category.model'

export interface CategoryState extends Category {
  selected: boolean
}

const useCategories = () => {

  const [categories, setCategories] = useReducer((state: CategoryState[], action: number) => {
    if (action) {
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
  }, categoriesData.map((category) => ({ ...category, selected: false })) as CategoryState[])

  return { categories, setCategories }
}

export default useCategories
