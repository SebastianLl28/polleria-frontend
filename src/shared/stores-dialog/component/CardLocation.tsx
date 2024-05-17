import { LocationAdapter } from '@/adapters/location.adapter'

interface CardLocationProps extends LocationAdapter {
  selected: boolean
  handleSelectLocation: (id: number) => void
}

const CardLocation = ({
  id,
  address,
  name,
  selected,
  handleSelectLocation
}: CardLocationProps) => {
  return (
    <li
      className={`relative cursor-pointer select-none rounded border p-3 transition-colors hover:bg-gray-100 ${selected ? 'bg-gray-100' : ''}`}
      onClick={() => handleSelectLocation(id)}
    >
      <p className='font-semibold'>{name}</p>
      <p title={address} className='line-clamp-1'>
        {address}
      </p>
      {selected && (
        <span className='absolute right-1 top-1 text-xs text-blue-500'>seleccionado</span>
      )}
    </li>
  )
}

export default CardLocation
