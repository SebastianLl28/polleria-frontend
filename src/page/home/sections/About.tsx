import { Button } from '@/components/ui/button'

const About = () => {
  return (
    <section className='grid grid-cols-1 text-justify sm:gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16 '>
      <article className='space-y-3 self-center [&>p]:text-pretty [&>p]:text-xl'>
        <h2 className='text-3xl font-bold max-lg:text-center'>¿Quienes somos?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero obcaecati cumque
          ut incidunt. Amet, aperiam nostrum. Distinctio illo laborum in mollitia illum
          dolorum quo nulla? Corrupti molestiae distinctio maiores iusto atque aspernatur,
          exercitationem fugiat delectus modi consectetur sed neque sequi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi provident quidem
          ut molestias cumque sapiente voluptatum accusantium tenetur minus delectus.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad fugiat quod iste
          incidunt blanditiis recusandae odit dolor alias natus corporis aspernatur
          tenetur perferendis repellat, ducimus sit laborum amet? Excepturi iure soluta
          asperiores consequatur recusandae, assumenda nobis nesciunt optio repudiandae
          incidunt.
        </p>
        <div className='text-center lg:text-left'>
          <Button>Ver Locales</Button>
        </div>
      </article>
      <figure className='hidden lg:inline'>
        <img
          src='https://plus.unsplash.com/premium_photo-1686090448301-4c453ee74718?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D'
          className='max-h-[45rem] w-full rounded-md object-cover'
          alt='imagen'
        />
      </figure>
    </section>
  )
}

export default About
