import { getProductByName, getProducts } from '@/services/product.service'
import { useQuery } from '@tanstack/react-query'
import { productAdapter } from '@/adapters/product.adapter'
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
    }),
  })
}

export const useGetProductByName = (name: string) => useQuery({
  queryKey: ['products', name],
  queryFn: () => getProductByName(name),
  refetchOnWindowFocus: false,
  select: data => productAdapter(data),
  enabled: !!name,
  // cahce time 1 hour
  staleTime: 1000 * 60 * 60
})