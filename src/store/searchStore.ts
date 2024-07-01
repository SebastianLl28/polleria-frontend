import { create } from 'zustand'

interface SearchStore {
  isOpenSearch: boolean
  setIsOpenSearch: (value: boolean) => void
  openSearch: () => void
  closeSearch: () => void
}

export const useSearchStore = create<SearchStore>(set => ({
  isOpenSearch: false,
  setIsOpenSearch: value => set({ isOpenSearch: value }),
  openSearch: () => set({ isOpenSearch: true }),
  closeSearch: () => set({ isOpenSearch: false })
}))
