import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '../../shared'
import ShoppingCart from '@/components/shared/shopping-cart/ShoppingCart'
import { useEffect } from 'react'
import Login from '@/components/shared/login/Login'
import NavigationBar from '@/components/shared/navigation-bar/NavigationBar'
import { useSearchStore } from '@/store/searchStore'
import NavigationMobile from '@/components/shared/navigation-mobile/NavigationMobile'
import { useNavigationMobileStore } from '@/store/navigationMobileStore'
import Footer from '@/components/shared/footer/Footer'

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
    <main className='relative grid min-h-dvh grid-rows-[auto,1fr,auto]'>
      <Login />
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
