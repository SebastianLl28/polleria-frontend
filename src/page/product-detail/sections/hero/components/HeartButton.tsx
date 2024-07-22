import { Button } from '@/components/ui/button'
import { Heart } from 'lucide-react'

interface Props {
  active?: boolean
  disabled?: boolean
  onClick: () => void
}

const HeartButton = ({ active = false, disabled = false, onClick }: Props) => {
  return (
    <Button
      type='button'
      variant='secondary'
      size='icon'
      onClick={onClick}
      disabled={disabled}
    >
      {active ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='26'
          height='26'
          viewBox='0 0 24 24'
          className='text-destructive'
        >
          <path
            fill='currentColor'
            d='m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z'
          />
        </svg>
      ) : (
        <Heart />
      )}
    </Button>
  )
}

export default HeartButton
