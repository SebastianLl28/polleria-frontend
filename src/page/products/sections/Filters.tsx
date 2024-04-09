import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { useId } from 'react'
import { useFilterProducts } from '../store/useFilterProducts'

const Filters = () => {
  const searchProductId = useId()

  const { setFilter, filter } = useFilterProducts()

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 60) return
    setFilter({ partialProduct: e.target.value, page: 0 })
  }

  return (
    <div className='flex justify-between'>
      <div className='w-full max-w-md'>
        <Label htmlFor={searchProductId}>Buscar Producto</Label>
        <Input
          type='text'
          placeholder='ejem: 1/4 de pollo'
          id={searchProductId}
          onChange={handleName}
          value={filter.partialProduct}
        />
      </div>
      <Select>
        <SelectTrigger className='w-60'>
          <SelectValue placeholder='Filtrar por' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='1'>Option 1</SelectItem>
          <SelectItem value='2'>Option 2</SelectItem>
          <SelectItem value='3'>Option 3</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default Filters
