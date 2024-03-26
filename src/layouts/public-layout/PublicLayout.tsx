import { Outlet } from 'react-router-dom'
import { Header } from '../../shared'

const PublicLayout = () => {
  return (
    <main>
      <Header/>
      <Outlet/>
    </main>
  )
}

export default PublicLayout
