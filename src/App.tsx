import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { PUBLIC_ROUTER } from './router'
import { PublicLayout } from './layouts'

const HomePage = lazy(() => import('./page/home/HomePage'))
const ProductsPage = lazy(() => import('./page/products/ProductsPage'))

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route element={<PublicLayout/>}>
            <Route path={PUBLIC_ROUTER.HOME} element={<HomePage/>}/>
            <Route path={PUBLIC_ROUTER.PRODUCTS} element={<ProductsPage/>}/>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App