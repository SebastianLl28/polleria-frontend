import LocationCard from '@/components/LocationCard'
import { useGetLocations } from '@/hooks/location.hook'

const Body = () => {
  const { data, isLoading, isError, isSuccess } = useGetLocations()

  return (
    <div className='flex flex-wrap justify-center space-y-10'>
      <ul className='grid w-3/4 grid-cols-2 gap-20'>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error</p>}
        {!isLoading &&
          isSuccess &&
          data.content.length > 0 &&
          data.content.map(location => (
            <div key={location.id} className='w-200 h-48'>
              <LocationCard {...location} />
            </div>
          ))}
      </ul>
    </div>
  )
}

export default Body
