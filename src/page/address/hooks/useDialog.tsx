import { AddressAdapter } from '@/adapters/address.adapter'
import { useState } from 'react'
import AddressDialog from '../dialog/AddressDialog'
import { useDeleteAddress, usePostAddress, usePutAddress } from '@/hooks/address.hook'

const useDialog = () => {
  const [isOpen, setIsOpen] = useState(false)

  //? if the address is null, it is because a new address is being created, otherwise it is because an existing address is being edited
  const [address, setAddress] = useState<null | AddressAdapter>(null)

  const open = (address: AddressAdapter | null) => {
    setAddress(address)
    setIsOpen(true)
  }

  const close = () => {
    setAddress(null)
    setIsOpen(false)
  }

  const { mutate: mutatePost } = usePostAddress()

  const { mutate: mutatePut } = usePutAddress()

  const { mutate: mutateDelete } = useDeleteAddress()

  const Dialog = () => (
    <AddressDialog
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      address={address}
      close={close}
      add={mutatePost}
      edit={mutatePut}
    />
  )

  return {
    open,
    Dialog,
    mutateDelete
  }
}

export default useDialog
