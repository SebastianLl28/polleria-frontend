import { ProductAdapter } from '@/adapters/product.adapter'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Decimal from 'decimal.js-light'
// import useCartStore from '@/store/cartStore'
import { Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({
  name,
  imageUrl,
  description,
  price,
  valoration,
  id
}: ProductAdapter) => {
  // const { addItem } = useCartStore()

  const navigate = useNavigate()

  const handleClick = () => {
    // addItem({ id, name, imageUrl, description, price, valoration })
    // const encodedName = encodeURIComponent(name)
    // navigate(`/products/${encodedName}`)
    navigate(`/products/${id}`)
  }

  return (
    <Card
      className='relative cursor-pointer overflow-hidden bg-gray-50 transition-transform hover:scale-105'
      onClick={handleClick}
    >
      <CardHeader className='p-0'>
        <img src={imageUrl} alt={name} className='h-48 object-cover' />
      </CardHeader>
      <CardContent className='grid grid-cols-[1fr,auto] grid-rows-[auto,auto] gap-y-2 p-0 px-2 py-3'>
        <CardTitle className='line-clamp-1' title={name}>
          {name}
        </CardTitle>
        <p className='row-span-2 self-center px-2 text-center text-2xl font-bold'>
          S/. {price}
        </p>
        <p className='line-clamp-2 text-sm leading-4 text-gray-500' title={description}>
          {description}
        </p>
      </CardContent>
      <Badge className='absolute right-4 top-4 space-x-1 text-base' variant={'secondary'}>
        {/* <span>{valoration}</span> */}
        <span>{new Decimal(valoration).toFixed(0).toString()}</span>
        <Star size={18} />
      </Badge>
    </Card>
  )
}

export default ProductCard
