import { apiClient, PRODUCT_LOCATION_STOCK_ENDPOINT } from '@/config/endpoints'
import { ProductLocationStock } from '@/model/ProductLocationStock.model'
import { GetProductLocationStockProps } from '../hook/useProductLocationStock.hook'

export const getProductLocationStockByProductIdAndLocationId = async ({
  locationId,
  productId
}: GetProductLocationStockProps) =>
  await apiClient
    .get<ProductLocationStock>(
      `${PRODUCT_LOCATION_STOCK_ENDPOINT}/location/${locationId}/product/${productId}`
    )
    .then(res => res.data)
