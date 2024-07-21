import { buttonVariants } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const Loader = () => {
  return (
    <main className='container relative pt-16 '>
      <Link
        to='/locations'
        className={`absolute top-6 space-x-4 ${buttonVariants({ variant: 'ghost' })}`}
      >
        <ArrowLeft />
        <span>Volver</span>
      </Link>
      <div className='space-y-6'>
        <Skeleton className='mx-auto h-10 w-96' />
        <div className='space-y-4'>
          <Skeleton className='mx-auto h-96 w-full' />
          <Skeleton className='mx-auto h-10 w-full' />
        </div>
      </div>
    </main>
  )
}

export default Loader
