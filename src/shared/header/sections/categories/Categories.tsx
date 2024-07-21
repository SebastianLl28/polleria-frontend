import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

interface CategoriesProps {
  isScrollDown: boolean
}

const Categories = ({ isScrollDown }: CategoriesProps) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isScrollDown ? '-100%' : 0 }}
      transition={{ duration: 0.3 }}
      className='relative -z-10 hidden w-full overflow-hidden bg-primary text-white md:block'
    >
      <div className='container flex justify-center'>
        <nav className='hidden sm:inline-block'>
          <ul className='flex h-full w-full items-center gap-6 font-semibold'>
            <li className='h-full'>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  `relative flex h-14 items-center px-4 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-white after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out after:content-[''] ${isActive ? 'after:opacity-100' : 'after:opacity-0'}`
                }
              >
                Inicio
              </NavLink>
            </li>
            <li className='h-full'>
              <NavLink
                to='/products'
                className={({ isActive }) =>
                  `relative flex h-full items-center px-4 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-white after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out after:content-[''] ${isActive ? 'after:opacity-100' : 'after:opacity-0'}`
                }
              >
                Productos
              </NavLink>
            </li>
            <li className='h-full'>
              <NavLink
                to='/locations'
                className={({ isActive }) =>
                  `relative flex h-full items-center px-4 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-white after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out after:content-[''] ${isActive ? 'after:opacity-100' : 'after:opacity-0'}`
                }
              >
                Locales
              </NavLink>
            </li>
            <li className='h-full'>
              <NavLink
                to='/contact'
                className={({ isActive }) =>
                  `relative flex h-full items-center px-4 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-white after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out after:content-[''] ${isActive ? 'after:opacity-100' : 'after:opacity-0'}`
                }
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </motion.div>
  )
}

export default Categories
