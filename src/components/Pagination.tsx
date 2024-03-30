import { useState } from 'react'
import ResponsivePagination from 'react-responsive-pagination'
import 'react-responsive-pagination/themes/classic.css'

interface PaginationProps {
  total: number
  initialPage?: number
}

const Pagination = ({ total, initialPage = 1 }: PaginationProps) => {

  const [currentPage, setCurrentPage] = useState(initialPage)

  function handlePageChange(page: number) {
    setCurrentPage(page)
  }

  return (
    <ResponsivePagination total={total} current={currentPage} onPageChange={page => handlePageChange(page)}/>
  )
}

export default Pagination
