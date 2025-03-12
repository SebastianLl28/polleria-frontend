import { Location } from '@/model/Location.model'

interface Props {
  handleLocationSelected: (location: Location) => void
  isLocationSelected: (location: Location) => boolean
  location: Location
}

const LocationDialogCard = ({
  handleLocationSelected,
  isLocationSelected,
  location
}: Props) => {
  return (
    <li
      className={`relative cursor-pointer select-none rounded border p-3 transition-colors hover:bg-gray-100 ${isLocationSelected(location) ? 'bg-gray-100' : ''}`}
      onClick={() => handleLocationSelected(location)}
    >
      <p className='font-semibold'>{location.name}</p>
      <p title={location.address} className='line-clamp-1'>
        {location.address}
      </p>
      {isLocationSelected(location) && (
        <span className='absolute right-1 top-1 text-xs text-blue-500'>
          seleccionado
        </span>
      )}
    </li>
  )
}

export default LocationDialogCard
