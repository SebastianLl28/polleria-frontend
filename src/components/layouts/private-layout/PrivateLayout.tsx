import PrivateHeader from '@/components/shared/private-header/PrivateHeader'
import { Outlet } from 'react-router-dom'

const PrivateLayout = () => {
  return (
    <>
      <PrivateHeader />
      <Outlet />
    </>
  )
}

export default PrivateLayout
