import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useScroll } from '@/hooks/useScroll'
import Buttons from './sections/Buttons'
import Logo from './sections/Logo'
import Ubication from './sections/Ubication'
import Search from './sections/Search'
import { useState } from 'react'

interface ControlsProps {
  isScrollDown: boolean
}

const Controls = ({ isScrollDown }: ControlsProps) => {
  const { positionY } = useScroll()
  const [isOpenSearch, setIsOpenSearch] = useState(false)

  return (
    <div
      className={cn(
        `border-b border-black bg-primary shadow-lg duration-300 ease-in-out md:border-transparent md:bg-white md:shadow-none ${isScrollDown ? 'md:border-black md:shadow-lg' : ''}`,
        `${isScrollDown && positionY > 75 ? '-translate-y-full transition-transform md:translate-y-0' : 'translate-y-0'}`
      )}
    >
      <div className='container mx-auto flex items-center justify-between py-2'>
        <div className='hidden md:inline-block md:flex-grow md:basis-0'>
          <Ubication />
        </div>
        <div>
          <Logo />
        </div>
        <div className='hidden md:flex md:flex-grow md:basis-0 md:justify-end'>
          <Buttons isOpenSearch={isOpenSearch} setIsOpenSearch={setIsOpenSearch} />
        </div>
        <Button type='button' variant='ghost' className='text-white md:hidden'>
          <Menu size={35} />
        </Button>
      </div>
      <Search isOpenSearch={isOpenSearch} setIsOpenSearch={setIsOpenSearch} />
    </div>
  )
}

export default Controls
