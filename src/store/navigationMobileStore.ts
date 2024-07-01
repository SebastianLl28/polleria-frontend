import { create } from 'zustand'

interface NavigationMobileStore {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  open: () => void
  close: () => void
}

export const useNavigationMobileStore = create<NavigationMobileStore>(set => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  setIsOpen: isOpen => set({ isOpen })
}))
