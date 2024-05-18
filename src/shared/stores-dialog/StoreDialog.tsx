import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTitle
} from '@/components/ui/alert-dialog'
import { useLocationModalStore } from '@/store/localModalStore'
import useListLocation from './hook/useListLocation'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocationSelectedStore } from '@/store/locationSelectedStore'
import CardLocation from './component/CardLocation'
import { Button } from '@/components/ui/button'

const StoreDialog = () => {
  const { isOpen, setIsOpen } = useLocationModalStore()

  const { isLoading, isSuccess, handleSelectLocation, locationStatus } = useListLocation()

  const { pathname } = useLocation()

  const { selected } = useLocationSelectedStore()

  useEffect(() => {
    if (pathname.includes('/products/') && selected === null) {
      setIsOpen(true)
    }
  }, [pathname, setIsOpen, selected])

  const handleClose = () => {
    if (pathname.includes('/products/') && selected === null) {
      return
    }
    setIsOpen(false)
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogTitle className='text-center'>
          Seleccione la tienda más cercana
        </AlertDialogTitle>
        <ul className='space-y-4'>
          {!isLoading &&
            isSuccess &&
            locationStatus &&
            locationStatus?.map(store => (
              <CardLocation
                key={store.id}
                {...store}
                handleSelectLocation={handleSelectLocation}
              />
            ))}
        </ul>
        <AlertDialogFooter>
          <Button
            variant='outline'
            onClick={handleClose}
            disabled={pathname.includes('/products/') && selected === null}
          >
            Cerrar
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default StoreDialog
