import { Button } from '@/components/ui/button'
import { useModalStore } from '@/store/modalStore'
import { ShoppingBasket } from 'lucide-react'

const FloatingButton = () => {
  const { setIsOpen } = useModalStore()

  const handleClick = () => {
    setIsOpen(true)
  }

  return (
    <Button
      onClick={handleClick}
      className='fixed bottom-4 right-4 size-16 rounded-full p-0 sm:hidden'
    >
      <ShoppingBasket size={48} />
    </Button>
  )
}

export default FloatingButton
