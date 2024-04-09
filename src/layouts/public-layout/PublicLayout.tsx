import { Outlet } from 'react-router-dom'
import { Header } from '../../shared'
import FloatingButton from '@/shared/floating-button/FloatingButton'
import ShoppingCart from '@/shared/shopping-cart/ShoppingCart'

const PublicLayout = () => {
  return (
    <main>
      <ShoppingCart />
      <Header />
      <Outlet />
      <FloatingButton />
    </main>
  )
}

export default PublicLayout
