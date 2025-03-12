import { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { PRODUCT_CARDS_SIZE } from '@/config/constants'
import { useGetProducts } from '@/features/product/hook/useProduct.hook'
import { IProductFilter } from '../../../interface/IProductFilter'

const useCategoriesFielter = () => {
  const [filter, setFilter] = useState<IProductFilter>({
    name: '',
    categoryId: null,
    page: 0,
    size: PRODUCT_CARDS_SIZE,
    sort: ''
  })

  const { data: products, isLoading, isError, isSuccess } = useGetProducts({ filter })

  const handleSearch = useDebouncedCallback((name: string) => {
    setFilter({ ...filter, name, page: 0 })
  }, 350)

  const handleCategory = (categoryId: number | null) => {
    setFilter({ ...filter, categoryId, page: 0 })
  }

  const handleOrderBy = (sort: string) => {
    setFilter({ ...filter, sort, page: 0 })
  }

  const handlePageChange = (page: number) => {
    setFilter({ ...filter, page })
  }

  return {
    handleSearch,
    handleCategory,
    handleOrderBy,
    filter,
    handlePageChange,
    products,
    isLoading,
    isError,
    isSuccess
  }
}

export default useCategoriesFielter
