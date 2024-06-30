import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '../../shared'
import ShoppingCart from '@/shared/shopping-cart/ShoppingCart'
import { useEffect } from 'react'
import StoreDialog from '@/shared/stores-dialog/StoreDialog'
import Login from '@/shared/login/Login'
import NavigationBar from '@/shared/navigation-bar/NavigationBar'

const PublicLayout = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <main className='relative'>
      <Login />
      <StoreDialog />
      <ShoppingCart />
      <Header />
      <Outlet />
      {/* <FloatingButton /> */}
      <NavigationBar />
    </main>
  )
}

export default PublicLayout
