import About from './sections/About'
import Form from './sections/Form'
import Hero from './sections/Hero'
import Promotion from './sections/Promotion'

const Home = () => {
  return (
    <main className='space-y-14 md:space-y-24'>
      <Hero />
      <div className='container mx-auto space-y-14  md:space-y-24'>
        <Promotion />
        <About />
        <Form />
      </div>
    </main>
  )
}

export default Home
