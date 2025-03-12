import { useEffect, useId } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search as SearchIcon } from 'lucide-react'
import { useDebouncedCallback } from 'use-debounce'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet'
import { useSearchStore } from '@/store/searchStore'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
// import { useFilterProducts } from '@/page/products/store/useFilterProducts'
import { Badge } from '@/components/ui/badge'
import { popularList } from '../data/popularList'

const Search = () => {
  const { isOpenSearch, setIsOpenSearch, closeSearch } = useSearchStore()
  const inputId = useId()
  // const { filter, setFilter } = useFilterProducts()
  const navigate = useNavigate()
  // const debounced = useDebouncedCallback(value => {
  //   setFilter({ partialProduct: value, page: 0 })
  // }, 500)

  useEffect(() => {
    // focus on input when search is open
    if (isOpenSearch) {
      document.getElementById(inputId)?.focus()
    }
  }, [isOpenSearch, inputId])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      closeSearch()
      navigate('/products')
    }
  }

  const handlePopularClick = (label: string) => {
    // setFilter({ partialProduct: label, page: 0 })
    closeSearch()
    navigate('/products')
  }

  return (
    <Sheet open={isOpenSearch} onOpenChange={setIsOpenSearch}>
      <SheetContent className='' side='top' hideCloseButton>
        <SheetHeader className='space-y-6 md:container'>
          <div className='flex items-center md:gap-6'>
            <div className='relative flex flex-grow basis-0 items-center'>
              <SearchIcon className='absolute left-2 text-gray-500' id={inputId} />
              <Input
                className='pl-10'
                // defaultValue={filter.partialProduct}
                // onChange={e => debounced(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
            <Button type='button' variant='ghost' onClick={closeSearch}>
              Cancelar
            </Button>
          </div>
          <SheetDescription>
            <SheetTitle className='mb-2 text-start text-2xl'>
              Búsquedas Populares
            </SheetTitle>
            <ul className='flex flex-wrap items-start gap-4 text-lg'>
              {popularList.map(({ id, label }) => (
                <li key={id}>
                  <Badge
                    onClick={() => handlePopularClick(label)}
                    className='cursor-pointer'
                  >
                    {label}
                  </Badge>
                </li>
              ))}
            </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default Search
