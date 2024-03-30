import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Star } from 'lucide-react'

type Props = {
  title: string,
  image: string
  description: string
  price: number
  valoration: number
}

const ProductCard = ({ title, image, description, price, valoration }: Props) => {
  return (
    <Card className='overflow-hidden relative bg-gray-50'>
      <CardHeader className='p-0'>
        <img src={image} alt={title} className='h-48 object-cover'/>
      </CardHeader>
      <CardContent className='p-0 grid grid-cols-[1fr,auto] grid-rows-[auto,auto] py-3 px-2 gap-y-2'>
        <CardTitle className='line-clamp-1' title={title}>{title}</CardTitle>
        <p className='font-bold text-2xl self-center text-center row-span-2 px-2'>S/. {price}</p>
        <p className='line-clamp-2 leading-4 text-sm text-gray-500' title={description}>{description}</p>
      </CardContent>
      <Badge className='absolute top-4 right-4 text-base space-x-1' variant={'secondary'}>
        <span>{valoration}</span>
        <Star size={18}/>
      </Badge>
    </Card>
  )
}

export default ProductCard
