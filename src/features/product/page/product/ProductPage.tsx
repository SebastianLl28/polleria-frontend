import { Navigate, useParams } from 'react-router-dom'
import { useGetProductById } from '../../hook/useProduct.hook'
import { PUBLIC_ROUTER } from '@/config/path'
import { useMemo, useState } from 'react'
import LocationDialog from '@/features/location/component/dialog/LocationDialog'
import { useLocationSelectedStore } from '@/store/locationSelectedStore'
import { useGetProductLocationStock } from '../../hook/useProductLocationStock.hook'

const ProductPage = () => {
  const { id } = useParams<{ id: string }>()

  const { data, isLoading, isSuccess, isError } = useGetProductById(Number(id))

  const locationSelected = useLocationSelectedStore(state => state.selected)

  // TODO: Tambien validar las dirección del cliente seleccionado ( district )
  const [locationOpen, setLocationOpen] = useState(locationSelected === null)

  const productId = useMemo(() => {
    if (isSuccess && data) {
      return data.id
    }
    return undefined
  }, [isSuccess, data])

  const locationId = useMemo(() => {
    if (locationSelected) {
      return locationSelected.id
    }
    return undefined
  }, [locationSelected])

  const { data: stock } = useGetProductLocationStock({ productId, locationId })

  let content

  if (isLoading) {
    // TODO: Create skeleton loader
    content = <p>loading....</p>
  } else if (isError) {
    content = <Navigate to={PUBLIC_ROUTER.PRODUCTS} />
  } else if (isSuccess && data) {
    content = <div>{data.name}</div>
  }

  return (
    <>
      <main>{content}</main>
      <LocationDialog isOpen={locationOpen} setIsOpen={setLocationOpen} />
    </>
  )
}

export default ProductPage

// TODO: IMPLEMENTAR LA VISTA DE PRODUCTO
// TODO: CAMBIAR EL LOCATION DESDE EL NAVBAR
// TODO: IMPLEMENTAR EL BUSCARDOR
// TODO: IMPLEMENTAR EL RANKING DE PRODUCTO Y EL RANKING DE TIENDAS Y COMENTARIOS DEL PRODUCTO
