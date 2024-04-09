const Califications = () => {
  return (
    <div className='flex space-x-4 relative [&>div>p]:text-center text-lg'>
      <div>
        <p>Compras</p>
        <p className='font-bold'>85</p>
      </div>
      <div className='h-12 w-px bg-white/25'/>
      <div>
        <p>Reseñas</p>
        <p className='font-bold'>4</p>
      </div>
      <div className='h-12 w-px bg-white/25'/>
      <div>
        <p>Valoracion</p>
        <p className='font-bold'>4.5</p>
      </div>
    </div>
  )
}

export default Califications
