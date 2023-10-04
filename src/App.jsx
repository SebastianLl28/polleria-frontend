/** @jsxImportSource @emotion/react */
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage, MenuPage } from './pages/index'
import { css } from '@emotion/react'
import { Header } from './components'

const App = () => {
  return (
    <main
      css={css`
        background-color: #f2f2f2;
        min-height: 100vh;
      `}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/menu' element={<MenuPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
