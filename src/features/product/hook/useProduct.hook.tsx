import { useQuery } from '@tanstack/react-query'
import { getProductById, getProducts } from '../service/product.service'
import { PRODUCT_QUERY_KEY, PRODUCTS_QUERY_KEY } from '@/config/keys'
import { IProductFilter } from '../interface/IProductFilter'

interface Props {
  filter: IProductFilter
}

export const useGetProducts = ({ filter }: Props) =>
  useQuery({
    queryKey: [...PRODUCTS_QUERY_KEY, filter],
    queryFn: () => getProducts({ filter }),
    staleTime: 1000 * 60 * 60 * 2
  })

export const useGetProductById = (id: number) =>
  useQuery({
    queryKey: [...PRODUCT_QUERY_KEY, id],
    queryFn: () => getProductById(id),
    staleTime: 1000 * 60 * 60 * 2
  })
