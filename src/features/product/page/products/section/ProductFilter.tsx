import Input from '@/components/form/Input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { PRODUCT_ORDER_OPTIONS } from '@/config/constants'
import { useId } from 'react'

interface Props {
  handleSearch: (value: string) => void
  handleOrderBy: (value: string) => void
}

const ProductFilter = ({ handleSearch, handleOrderBy }: Props) => {
  const searchProductId = useId()

  return (
    <div className='flex flex-col justify-between space-y-6 md:flex-row md:items-end md:space-y-0'>
      <div className='w-full sm:max-w-md'>
        <Label htmlFor={searchProductId}>Buscar Producto</Label>
        <Input
          type='text'
          placeholder='ejem: 1/4 de pollo'
          id={searchProductId}
          onChange={e => handleSearch(e.target.value)}
        />
      </div>
      <Select onValueChange={handleOrderBy}>
        <SelectTrigger className='w-full sm:w-60'>
          <SelectValue placeholder='Filtrar por' />
        </SelectTrigger>
        <SelectContent>
          {PRODUCT_ORDER_OPTIONS.map(({ value, label }, index) => (
            <SelectItem key={index} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default ProductFilter
