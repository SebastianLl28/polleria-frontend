import { IFilterCategory } from '@/interfaces/IFilterCategory.interface'
import { create } from 'zustand'

interface IFilterStore {
  filter: IFilterCategory
  setFilter: (change: object) => void
}

export const useFilterProducts = create<IFilterStore>(set => ({
  filter: {
    category: '',
    partialProduct: '',
    page: 0
  },
  setFilter: change =>
    set(state => ({
      filter: {
        ...state.filter,
        ...change
      }
    }))
}))
