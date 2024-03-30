import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useId } from 'react'

const Filters = () => {

  const searchProductId = useId()

  return (
    <div className='flex justify-between'>
      <div className='max-w-md w-full'>
        <Label htmlFor={searchProductId}>Buscar Producto</Label>
        <Input type='text' placeholder='ejem: 1/4 de pollo' id={searchProductId}/>
      </div>
      <Select>
        <SelectTrigger className='w-60'>
          <SelectValue placeholder='Filtrar por'/>
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
