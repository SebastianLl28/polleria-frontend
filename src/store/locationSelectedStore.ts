import { LocationAdapter } from '@/adapters/location.adapter'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface LocationSelectedStore {
  selected: LocationAdapter | null
  setSelected: (location: LocationAdapter) => void
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
