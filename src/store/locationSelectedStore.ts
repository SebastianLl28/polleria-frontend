import { Location } from '@/model/Location.model'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface LocationSelectedStore {
  selected: Location | null
  setSelected: (location: Location | null) => void
}

export const useLocationSelectedStore = create(
  persist<LocationSelectedStore>(
    set => ({
      selected: null,
      setSelected: location => set({ selected: location })
    }),
    {
      name: 'location-selected-store'
    }
  )
)
