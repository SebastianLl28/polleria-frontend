import { Skeleton } from '@/components/ui/skeleton'

const Loader = () => {
  return (
    <div className='w-11/12 max-w-3xl space-y-5 '>
      {Array.from({ length: 3 }).map((_, index) => (
        <Skeleton key={index} className='h-[100px] w-full' />
      ))}
    </div>
  )
}

export default Loader
