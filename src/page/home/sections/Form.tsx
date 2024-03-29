import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useId } from 'react'

const Form = () => {

  const idName = useId()
  const idEmail = useId()
  const idMessage = useId()

  return (
    <section className='space-y-6'>
      <h2 className='text-3xl text-center font-bold'>Contáctanos</h2>
      <div className='w-full grid grid-cols-2'>
        <figure>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15607.758232743252!2d-77.04603671284178!3d-12.047679699999982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b1381abf97%3A0x53eacd1b871d5512!2sRoky&#39;s!5e0!3m2!1ses!2spe!4v1711682980428!5m2!1ses!2spe" width={600} height={450} loading='lazy' referrerPolicy='no-referrer-when-downgrade'></iframe>
        </figure>
        <form className='[&>div]:space-y-2 space-y-4'>
          <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum expedita hic dignissimos odit similique iusto nemo, velit nesciunt! Consequuntur, quis? iusto nemo, velit nesciunt! Consequuntur, quis?</p>
          <div>
            <Label htmlFor={idName}>Nombres</Label>
            <Input type='text' id={idName} />
          </div>
          <div>
            <Label htmlFor={idEmail}>Email</Label>
            <Input type='email' id={idEmail} />
          </div>
          <div>
            <Label htmlFor={idMessage}>Mensaje</Label>
            <Textarea id={idMessage}></Textarea>
          </div>
          <Button type='button'>Enviar</Button>
        </form>
      </div>
    </section>
  )
}

export default Form
