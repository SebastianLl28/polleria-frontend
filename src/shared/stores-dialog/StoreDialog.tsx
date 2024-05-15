import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTitle
} from '@/components/ui/alert-dialog'
import { useGetLocations } from '@/hooks/location.hook'
import { useLocationModalStore } from '@/store/localModalStore'

const StoreDialog = () => {
  const { isOpen, setIsOpen } = useLocationModalStore()

  const { data, isLoading, isSuccess } = useGetLocations(isOpen)

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogTitle className='text-center'>Locales</AlertDialogTitle>
        <ul className='space-y-4'>
          {!isLoading &&
            isSuccess &&
            data.content.map(store => (
              <li
                key={store.id}
                className='cursor-pointer rounded border p-3 transition-colors hover:bg-gray-50'
              >
                <p className='font-semibold'>{store.name}</p>
                <p title={store.address} className='line-clamp-1'>
                  {store.address}
                </p>
              </li>
            ))}
        </ul>
        <AlertDialogFooter>
          <AlertDialogCancel>Cerrar</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default StoreDialog
