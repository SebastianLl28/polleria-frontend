import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '../../shared'
import FloatingButton from '@/shared/floating-button/FloatingButton'
import ShoppingCart from '@/shared/shopping-cart/ShoppingCart'
import { useEffect } from 'react'

const PublicLayout = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

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
