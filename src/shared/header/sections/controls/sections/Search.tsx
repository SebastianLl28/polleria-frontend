import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet'
import { Search as SearchIcon } from 'lucide-react'

import { useSearchStore } from '@/store/searchStore'
import { Input } from '@/components/ui/input'
import { useEffect, useId } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const Search = () => {
  const { isOpenSearch, setIsOpenSearch, closeSearch } = useSearchStore()
  const inputId = useId()

  useEffect(() => {
    // focus on input when search is open
    if (isOpenSearch) {
      document.getElementById(inputId)?.focus()
    }
  }, [isOpenSearch, inputId])

  return (
    <Sheet open={isOpenSearch} onOpenChange={setIsOpenSearch}>
      <SheetContent className='' side='top' hideCloseButton>
        <SheetHeader className='space-y-6 md:container'>
          <div className='flex items-center md:gap-6'>
            <div className='relative flex flex-grow basis-0 items-center'>
              <SearchIcon className='absolute left-2 text-gray-500' id={inputId} />
              <Input className='pl-10' />
            </div>
            <Button type='button' variant='ghost' onClick={closeSearch}>
              Cancelar
            </Button>
          </div>
          <SheetDescription>
            <SheetTitle className='mb-2 text-start text-2xl'>
              Búsquedas Populares
            </SheetTitle>
            <ul className='flex flex-col items-start gap-1 text-lg'>
              <li>
                <Link to='/products'>Pollo Familiar</Link>
              </li>
              <li>
                <Link to='/products'>Golosa</Link>
              </li>
              <li>
                <Link to='/products'>El rico rico ricoooo</Link>
              </li>
            </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default Search
