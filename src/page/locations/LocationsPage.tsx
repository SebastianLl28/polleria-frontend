import { buttonVariants } from '@/components/ui/button'
import Body from './sections/Body'
import { Link } from 'react-router-dom'

const LocationsPage = () => {
  return (
    <main className='container mb-12 mt-12 space-y-12'>
      <Link to={'/'} className={buttonVariants({ variant: 'ghost' })}>
        Regresar
      </Link>
      <div className='flex  flex-col items-center justify-center gap-6'>
        <h1 className='text-2xl font-bold'>Nuestros locales</h1>
        <span className='text-lg'>Ubica tu restaurante más cercano</span>
      </div>
      <Body />
    </main>
  )
}

export default LocationsPage
