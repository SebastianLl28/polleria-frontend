import { valorationAdapter } from '@/adapters/valoration.adapter'
import { getValorationByProductId } from '@/services/valoration.service'
import { useQuery } from '@tanstack/react-query'

export const useValorationByProductId = (productId: number | null, dependecy: boolean) =>
  useQuery({
    queryKey: ['valorations', productId],
    queryFn: () => {
      if (productId) {
        return getValorationByProductId(productId)
      }
    },
    enabled: !!productId && dependecy,
    refetchOnWindowFocus: false,
    select: data => {
      if (data) {
        return { ...data, content: data.content.map(valorationAdapter) }
      }
    }
  })
