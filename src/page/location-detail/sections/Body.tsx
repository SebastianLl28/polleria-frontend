import { LocationAdapter } from '@/adapters/location.adapter'
import { buttonVariants } from '@/components/ui/button'
import { ArrowLeft, MapPinned, Phone } from 'lucide-react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import { Link } from 'react-router-dom'

const Body = ({ longitude, latitude, name, address, phone }: LocationAdapter) => {
  return (
    <main className='container relative pt-16'>
      <Link
        to='/locations'
        className={`absolute top-6 space-x-4 ${buttonVariants({ variant: 'ghost' })}`}
      >
        <ArrowLeft />
        <span>Volver</span>
      </Link>
      <div className='space-y-6'>
        <h3 className='text-center text-2xl font-semibold'>{name}</h3>
        <div className='space-y-4'>
          <MapContainer center={[latitude, longitude]} zoom={15} className='h-96 w-full'>
            <TileLayer
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[latitude, longitude]} />
          </MapContainer>
          <div className='flex flex-wrap items-center gap-x-6 gap-y-4'>
            <div className='flex items-center gap-2'>
              <MapPinned />
              <p>{address}</p>
            </div>
            <div className='flex items-center gap-2'>
              <Phone />
              <p>{phone}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Body
