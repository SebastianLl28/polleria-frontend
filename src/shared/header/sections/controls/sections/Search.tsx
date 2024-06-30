import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet'

interface SearchProps {
  isOpenSearch: boolean
  setIsOpenSearch: (value: boolean) => void
}

const Search = ({ isOpenSearch, setIsOpenSearch }: SearchProps) => {
  return (
    <Sheet open={isOpenSearch} onOpenChange={setIsOpenSearch}>
      <SheetContent className='' side='top'>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your account and
            remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default Search
