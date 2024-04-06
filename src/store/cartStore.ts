import { Product } from '@/model/Product.model'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface IProductstore extends Product {
  quantity: number
}

interface ICartStore {
  items: IProductstore[]
  addItem: (item: Product) => void
  removeItem: (item: Product) => void
}

const useCartStore = create(
  persist<ICartStore>(
    (set) => ({
      items: [],
      addItem: (item) => {
        set((state) => {
          const index = state.items.findIndex((i) => i.id === item.id)
          if (index === -1) {
            return { items: [...state.items, { ...item, quantity: 1 }] }
          }
          state.items[index].quantity++
          return { items: [...state.items] }
        })
      },
      removeItem: (item) => {
        set((state) => {
          const index = state.items.findIndex((i) => i.id === item.id)
          if (index === -1) {
            return { items: [...state.items] }
          }
          if (state.items[index].quantity > 1) {
            state.items[index].quantity--
            return { items: [...state.items] }
          }
          return { items: state.items.filter((i) => i.id !== item.id) }
        })
      },
    }),
    { name: 'cart-store' }
  )
)

export default useCartStore