import { Button } from '@/components/ui/button'
import { useModalStore } from '@/store/modalStore'
import { ShoppingBasket } from 'lucide-react'

const FloatingButton = () => {

  const { setIsOpen } = useModalStore()

  const handleClick = () => {
    setIsOpen(true)
  }

  return (
    <Button onClick={handleClick} className='fixed right-4 bottom-4 sm:hidden size-16 p-0 rounded-full'>
      <ShoppingBasket size={48}/>
    </Button>
  )
}

export default FloatingButton
