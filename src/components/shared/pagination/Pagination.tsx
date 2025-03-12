import { useMemo } from 'react'
import ResponsivePagination, {
  ResponsivePaginationProps
} from 'react-responsive-pagination'
import 'react-responsive-pagination/themes/classic.css'

const Pagination = ({ onPageChange, current, ...args }: ResponsivePaginationProps) => {
  const handlePageChange = (page: number) => {
    onPageChange(page - 1)
  }

  const newCurrent = useMemo(() => current + 1, [current])

  return (
    <ResponsivePagination
      {...args}
      onPageChange={handlePageChange}
      current={newCurrent}
    />
  )
}

export default Pagination
