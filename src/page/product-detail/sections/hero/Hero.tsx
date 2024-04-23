import { Badge } from '@/components/ui/badge'
import { ProductAdapter } from '@/adapters/product.adapter'
import Styles from './styles/background.module.css'
import { Califications } from './shared'
import { Button } from '@/components/ui/button'
import useCartStore from '@/store/cartStore'

const Hero = ({ name, categoryList, description, imageUrl, price, id }: ProductAdapter) => {

  const {addItem} = useCartStore();

  const handleFoodAdd = () => {
    addItem({id, name, price, imageUrl});
  }

  return (
    <section className='bg-gray-900 py-20 text-white'>
      <div className='container grid grid-cols-2'>
        <div className='space-y-8'>
          <h1 className='text-6xl font-bold leading-snug'>{name}</h1>
          <div className='flex gap-2'>
            {categoryList.map(category => (
              <Badge key={category} className='text-sm'>
                {category}
              </Badge>
            ))}
          </div>
          <Califications />
          <p className='text-xl'>{description}</p>
          <div>
            <Button 
              onClick={handleFoodAdd}
              className='bg-green-700 hover:bg-green-800'>
              Agregar Al Carrito
            </Button>
          </div>
        </div>
        <div className='relative'>
          <img src={imageUrl} alt={name} className='' />
          <div className={Styles.backgroundImage}></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
