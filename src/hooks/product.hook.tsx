import { getProducts } from '@/services/product.service'
import { useQuery } from '@tanstack/react-query'
import { productAdapter } from '@/adapters/product.adapter'
import { IFilterCategory } from '@/interfaces/IFilterCategory.interface'

export const useGetProducts = (filter: IFilterCategory) => useQuery({
  queryKey: ['products'],
  queryFn: () => getProducts(filter),
  refetchOnWindowFocus: false,
  select: data => ({
    ...data,
    content: data.content.map(productAdapter)
  })
})