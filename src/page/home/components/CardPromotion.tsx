import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Star } from 'lucide-react'

type Props = {
  title: string
  image: string
  description: string
  price: number
  valoration: number
}

const CardPromotion = ({ title, image, description, price, valoration }: Props) => {
  return (
    <Card className='relative overflow-hidden bg-gray-50'>
      <CardHeader className='p-0'>
        <img src={image} alt={title} className='' />
      </CardHeader>
      <CardContent className='grid grid-cols-[1fr,auto] grid-rows-[auto,auto] gap-y-2 p-0 px-2 py-3'>
        <CardTitle className='line-clamp-1' title={title}>
          {title}
        </CardTitle>
        <p className='row-span-2 self-center px-2 text-center text-2xl font-bold'>
          S/. {price}
        </p>
        <p className='line-clamp-2 text-sm leading-4 text-gray-500' title={description}>
          {description}
        </p>
      </CardContent>
      <Badge className='absolute right-4 top-4 space-x-1 text-base' variant={'secondary'}>
        <span>{valoration}</span>
        <Star size={18} />
      </Badge>
    </Card>
  )
}

export default CardPromotion
