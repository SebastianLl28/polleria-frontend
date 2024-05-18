import { LocationAdapter } from '@/adapters/location.adapter'
import { useGetLocations } from '@/hooks/location.hook'
import { useLocationModalStore } from '@/store/localModalStore'
import { useLocationSelectedStore } from '@/store/locationSelectedStore'
import { useEffect, useState } from 'react'

interface LocationStatus extends LocationAdapter {
  selected: boolean
}

const useListLocation = () => {
  const { setSelected, selected } = useLocationSelectedStore()

  const { isOpen } = useLocationModalStore()

  const { data, isLoading, isSuccess } = useGetLocations(isOpen)

  const [isSelected, setIsSelected] = useState(false)

  const [locationStatus, setLocationStatus] = useState<LocationStatus[] | undefined>()

  useEffect(() => {
    if (data && isSuccess && !isLoading) {
      setLocationStatus(
        data.content.map(location => {
          if (selected && selected.id === location.id) {
            setIsSelected(true)
            return { ...location, selected: true }
          }
          return { ...location, selected: false }
        })
      )
    }
  }, [data, isLoading, isSuccess, selected])

  const handleSelectLocation = (id: number) => {
    if (locationStatus) {
      setLocationStatus(
        locationStatus.map(location => {
          if (location.id === id) {
            setIsSelected(true)
            setSelected(location)
            return {
              ...location,
              selected: true
            }
          }

          return {
            ...location,
            selected: false
          }
        })
      )
    }
  }

  return {
    data,
    isLoading,
    isSuccess,
    locationStatus,
    handleSelectLocation,
    isSelected
  }
}

export default useListLocation
