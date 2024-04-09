import About from './sections/About'
import Form from './sections/Form'
import Hero from './sections/Hero'
import Promotion from './sections/Promotion'

const Home = () => {
  return (
    <main className='h-[200dvh] space-y-24'>
      <Hero />
      <div className='container mx-auto space-y-24'>
        <Promotion />
        <About />
        <Form />
      </div>
    </main>
  )
}

export default Home
