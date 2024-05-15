import { Location } from '@/model/Location.model'
import { create } from 'zustand'

interface LocalModalStore {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  location: Location | null
}

export const useLocationModalStore = create<LocalModalStore>(set => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
  location: null
}))
