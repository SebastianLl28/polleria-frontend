import {
  getProductById,
  getProducts,
  getProductsByCategory
} from '@/services/product.service'
import { useQuery } from '@tanstack/react-query'
import { productAdapter, productStockAdapter } from '@/adapters/product.adapter'
import { useFilterProducts } from '@/page/products/store/useFilterProducts'

export const useGetProducts = () => {
  const { filter } = useFilterProducts()

  return useQuery({
    queryKey: ['products', filter],
    queryFn: () => getProducts(filter),
    refetchOnWindowFocus: false,
    select: data => ({
      ...data,
      content: data.content.map(productAdapter)
    })
  })
}

export const useGetProductById = (id: number) =>
  useQuery({
    queryKey: ['products', id],
    queryFn: () => getProductById(id),
    refetchOnWindowFocus: false,
    select: data => productStockAdapter(data),
    enabled: !!id,
    // cahce time 1 hour
    staleTime: 1000 * 60 * 60,
    retry: false
  })

export const useGetProductsByCategory = (categoryName: string, dependecy: boolean) => {
  return useQuery({
    queryKey: ['products', categoryName],
    queryFn: () => getProductsByCategory(categoryName),
    refetchOnWindowFocus: false,
    select: data => ({
      ...data,
      content: data.content.map(productAdapter)
    }),
    enabled: !!categoryName && dependecy,
    // cahce time 1 hour
    staleTime: 1000 * 60 * 60
  })
}
