import { useGetLocationById } from '@/hooks/location.hook'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from './sections/Loader'
import Body from './sections/Body'

const LocationDetailPage = () => {
  const { id } = useParams()

  const { isError, isLoading, isSuccess, data } = useGetLocationById(id)

  const navigate = useNavigate()

  useEffect(() => {
    if (isError) navigate('/locations')
  }, [isError, navigate])

  return (
    <main className='container'>
      {isLoading && <Loader />}
      {isSuccess && data && <Body {...data} />}
    </main>
  )
}

export default LocationDetailPage
