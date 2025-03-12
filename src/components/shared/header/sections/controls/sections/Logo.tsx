import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to='/'>
      <img src='/logo.webp' alt='Logo polleria' className='w-14' />
    </Link>
  )
}

export default Logo
