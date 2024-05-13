interface CalificationsProps {
  valoration: number
}

const Califications = ({ valoration }: CalificationsProps) => {
  return (
    <div className='relative flex space-x-4 text-lg [&>div>p]:text-center'>
      <div>
        <p>Compras</p>
        <p className='font-bold'>85</p>
      </div>
      <div className='h-12 w-px bg-white/25' />
      <div>
        <p>Reseñas</p>
        <p className='font-bold'>4</p>
      </div>
      <div className='h-12 w-px bg-white/25' />
      <div>
        <p>Valoracion</p>
        <div className='flex justify-center gap-1.5'>
          <span className='font-bold'>{valoration}</span>
          <img src='/star.svg' alt='' />
        </div>
      </div>
    </div>
  )
}

export default Califications
