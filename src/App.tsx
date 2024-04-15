import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { PRIVATE_ROUTER, PUBLIC_ROUTER } from './router'
import { PublicLayout } from './layouts'
import ProductDetailPage from './page/product-detail/ProductDetailPage'

import LocationsPage from './page/locations/LocationsPage'

import PrivateLayout from './layouts/private-layout/PrivateLayout'


const HomePage = lazy(() => import('./page/home/HomePage'))
const ProductsPage = lazy(() => import('./page/products/ProductsPage'))

const ProfilePage = lazy(() => import('./page/profile/ProfilePage'))
const FavoritePage = lazy(() => import('./page/favorite/FavoritePage'))
const PurcharsePage = lazy(() => import('./page/purcharse/PurcharsePage'))
const AddressPage = lazy(() => import('./page/address/AddressPage'))

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path={PUBLIC_ROUTER.HOME} element={<HomePage />} />
            <Route path={PUBLIC_ROUTER.PRODUCTS} element={<ProductsPage />} />
            <Route path={PUBLIC_ROUTER.PRODUCT_DETAIL} element={<ProductDetailPage />} />

            <Route path={PUBLIC_ROUTER.LOCATIONS} element={<LocationsPage />} />

            <Route element={<PrivateLayout />}>
              <Route path={PRIVATE_ROUTER.PROFILE} element={<ProfilePage />} />
              <Route path={PRIVATE_ROUTER.FAVORITE} element={<FavoritePage />} />
              <Route path={PRIVATE_ROUTER.PURCHASE} element={<PurcharsePage />} />
              <Route path={PRIVATE_ROUTER.ADDRESS} element={<AddressPage />} />
            </Route>

          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
