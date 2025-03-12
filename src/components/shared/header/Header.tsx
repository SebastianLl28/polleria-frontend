import Categories from './sections/categories/Categories'
import useIsScrollDown from './hooks/useIsScrollDown'
import Controls from './sections/controls/Controls'

export const Header = () => {
  const isScrollDown = useIsScrollDown()

  // TODO: add search global state

  return (
    <header className='sticky top-0 z-50 w-full'>
      <Controls isScrollDown={isScrollDown} />
      <Categories isScrollDown={isScrollDown} />
    </header>
  )
}
