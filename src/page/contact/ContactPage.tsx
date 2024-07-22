import { Button } from '@/components/ui/button'

const ContactPage = () => {
  return (
    <main className='container space-y-4 py-12'>
      <h3 className='text-center text-3xl font-semibold'>Contacto</h3>
      <p className='text-center text-lg'>¿Tienes alguna duda o sugerencia? Escríbenos</p>
      <div className='grid gap-6 pt-12 md:grid-cols-2 md:gap-12 md:pt-0'>
        <img
          src='https://images.blush.design/VXC8cmcfRH6ehJWCFqDt?w=920&auto=compress&cs=srgb'
          alt='blush image'
          className='m-auto h-auto w-full object-cover'
        />
        <div className='mt-6 grid grid-cols-1 gap-6'>
          <div>
            <label htmlFor='name' className='block text-lg font-semibold'>
              Nombre
            </label>
            <input
              type='text'
              id='name'
              className='mt-2 h-12 w-full rounded-md border border-gray-300 px-4'
            />
          </div>
          <div>
            <label htmlFor='email' className='block text-lg font-semibold'>
              Correo electrónico
            </label>
            <input
              type='email'
              id='email'
              className='mt-2 h-12 w-full rounded-md border border-gray-300 px-4'
            />
          </div>
          <div>
            <label htmlFor='message' className='block text-lg font-semibold'>
              Mensaje
            </label>
            <textarea
              id='message'
              className='mt-2 h-32 w-full rounded-md border border-gray-300 px-4 py-2'
            ></textarea>
          </div>
          <Button>Enviar</Button>
        </div>
      </div>
    </main>
  )
}

export default ContactPage
