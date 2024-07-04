import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '../../shared'
import ShoppingCart from '@/shared/shopping-cart/ShoppingCart'
import { useEffect } from 'react'
import StoreDialog from '@/shared/stores-dialog/StoreDialog'
import Login from '@/shared/login/Login'
import NavigationBar from '@/shared/navigation-bar/NavigationBar'
import { useSearchStore } from '@/store/searchStore'
import NavigationMobile from '@/shared/navigation-mobile/NavigationMobile'
import { useNavigationMobileStore } from '@/store/navigationMobileStore'
import Footer from '@/shared/footer/Footer'

const PublicLayout = () => {
  const { pathname } = useLocation()
  const { closeSearch } = useSearchStore()
  const { close: closeNavigationMobile } = useNavigationMobileStore()

  useEffect(() => {
    window.scrollTo(0, 0)

    // close all modals
    closeSearch()
    closeNavigationMobile()
  }, [pathname, closeSearch, closeNavigationMobile])

  return (
    <main className='relative'>
      <Login />
      <StoreDialog />
      <ShoppingCart />
      <Header />
      <Outlet />
      <Footer />

      {/* buttons for mobile */}
      <NavigationBar />

      {/* modal navigation for mobile */}
      <NavigationMobile />
    </main>
  )
}

export default PublicLayout
