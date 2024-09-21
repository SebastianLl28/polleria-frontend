import { Customer } from '@/model/Customer.model'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CustomerStore extends Pick<Customer, 'id' | 'email' | 'name'> {}

interface LoginStore {
  user: CustomerStore | null
  setUser: (user: CustomerStore) => void
}

export const useLoginStore = create(
  persist<LoginStore>(
    set => ({
      user: null,
      setUser: (user: CustomerStore) => set({ user })
    }),
    {
      name: 'login-storage'
    }
  )
)
