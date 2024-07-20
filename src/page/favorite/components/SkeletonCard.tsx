import { Skeleton } from '@/components/ui/skeleton'

const SkeletonCard = () => {
  return (
    <div className='mt-6 grid grid-cols-[auto,1fr] space-x-4'>
      <Skeleton className='size-28 rounded-md' />
      <div className='flex flex-col'>
        <Skeleton className='mb-2 h-6 w-36' />
        <Skeleton className='mb-2 h-12 w-full' />
        <Skeleton className='mt-auto h-4 w-24' />
      </div>
    </div>
  )
}

export default SkeletonCard
