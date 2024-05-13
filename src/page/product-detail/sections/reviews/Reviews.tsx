import { useValorationByProductId } from '@/hooks/valoration.hook'
import { Frown } from 'lucide-react'

interface ReviewsProps {
  id: number | null
  dependecy: boolean
  valoration: number
}
const Reviews = ({ dependecy, id, valoration }: ReviewsProps) => {
  const { data } = useValorationByProductId(id, dependecy)

  return (
    <div className='flex flex-col space-y-1 pb-6 text-gray-500'>
      <h2 className='text-2xl font-bold'>Reseñas</h2>
      <div className='flex items-center gap-2'>
        <p>Valoración general: </p>
        <div className='flex gap-1'>
          <span className='text-2xl font-bold'>{valoration}</span>
          <img src='/star.svg' alt='star icon' />
        </div>
      </div>
      <ul className='!mt-4 space-y-6'>
        {data && data.content.length > 0 ? (
          data.content.map(valoration => (
            <li key={valoration.id} className='grid'>
              <div className='flex items-center gap-2'>
                <img src='/user.svg' alt='' className='row-span-2 w-8' />
                <span>
                  {valoration.customerName} {valoration.customerLastName}
                </span>
              </div>
              <p className='mt-1 italic'>
                {valoration.review ? `"${valoration.review}"` : 'Sin reseña'}
              </p>
              <div className='flex gap-1'>
                <span>{valoration.valoration}</span>
                <img src='/star.svg' alt='star icon' />
              </div>
            </li>
          ))
        ) : (
          <div className='text-center'>
            <Frown className='mx-auto' size={32} />
            <p className='text-2xl font-bold'>Sin reseñas</p>
          </div>
        )}
      </ul>
    </div>
  )
}

export default Reviews
