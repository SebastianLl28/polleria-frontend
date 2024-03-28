import { Button, buttonVariants } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='h-[200dvh]'>
      <p>asdasda</p>
      <Button>Click me</Button>
      <Button variant='link'>Click me</Button>
      <Link to='/products' className={buttonVariants()}>go to Producst</Link>
    </div>
  )
}

export default Home