import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { useRef, useState } from 'react'

interface Props<T> {
  title: string
  message: string
  onConfirm: (data?: T) => void
}

const useConfirmation = <T,>({ message, onConfirm, title }: Props<T>) => {
  const [isOpen, setIsOpen] = useState(false)
  const data = useRef<T | undefined>(undefined)

  const handleConfirm = () => {
    onConfirm(data.current)
    setIsOpen(false)
  }

  const saveData = (newDataSave: T) => {
    data.current = newDataSave
  }

  const open = () => setIsOpen(true)

  const Modal = () => {
    return (
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{title}</AlertDialogTitle>
            <AlertDialogDescription>{message}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button type='button' variant='ghost' onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button type='button' onClick={handleConfirm}>
              Confirm
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }

  return {
    Modal,
    open,
    saveData
  }
}

export default useConfirmation
