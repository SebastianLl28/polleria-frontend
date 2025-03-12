import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className=' top-auto mt-14 border-t border-black bg-primary text-white md:mt-24'>
      <div className='container grid grid-cols-1 gap-12 py-10 md:grid-cols-2 md:items-start lg:grid-cols-3'>
        <div className='flex flex-col-reverse items-center gap-3'>
          <p className='text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla natus deserunt
            officiis quibusdam tempora soluta nisi accusantium aperiam, quaerat quis.
          </p>
          <img src='/logo.webp' alt='Logo polleria' className='w-14' />
        </div>
        <div>
          <h2 className='mb-4 text-center text-lg font-semibold'>MAPA DEL SITIO</h2>
          <ul className='space-y-3 text-center [&>li>a]:underline'>
            <li>
              <Link to='/'>Inicio</Link>
            </li>
            <li>
              <Link to='/products'>Productos</Link>
            </li>
            <li>
              <Link to='/locations'>Locales</Link>
            </li>
            <li>
              <Link to='/locations'>Contacto</Link>
            </li>
          </ul>
        </div>
        <div className='space-y-3 md:col-span-2 lg:col-span-1'>
          <h2 className='text-center text-lg font-semibold'>ENCUESTA</h2>
          <p className='text-center'>¿Qué te gustaría encontrar en nuestra tienda?</p>
          <Link
            to='https://docs.google.com/forms/d/e/1FAIpQLSfncZcXpGWyZXmRKp37q6JCr4GAEzpCwEyODJfDcIc4UINScg/viewform?usp=sf_link'
            target='_blank'
            className='block text-center underline'
          >
            Link del Formulario
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
