import { create } from 'zustand'

interface ModalStore {
  isOpen: boolean
  // eslint-disable-next-line no-unused-vars
  setIsOpen: (isOpen: boolean) => void
}

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
}))