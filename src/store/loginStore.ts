import { Customer } from '@/model/Customer.model'
import { create } from 'zustand'

interface CustomerStore extends Pick<Customer, 'id' | 'email' | 'name'> {}

interface LoginStore {
  user: CustomerStore | null
  setUser: (user: CustomerStore) => void
}

export const useLoginStore = create<LoginStore>(set => ({
  // user: null,
  user: { id: 1, email: 'jorge', name: 'villa' },
  setUser: (user: CustomerStore) => set({ user })
}))
