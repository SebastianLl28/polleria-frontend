import ResponsivePagination, { ResponsivePaginationProps } from 'react-responsive-pagination'
import 'react-responsive-pagination/themes/classic.css'

const Pagination = ({ ...args }: ResponsivePaginationProps) => {

  return (
    <ResponsivePagination {...args}/>
  )
}

export default Pagination
