import { FieldError, UseFormRegisterReturn } from 'react-hook-form'
import { Input as InputSCN } from '../ui/input'
import { useId } from 'react'
import { cn } from '@/lib/utils'

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  hookForm?: UseFormRegisterReturn<string>
  error?: FieldError | undefined
  classNameContainer?: string
}

const Input = ({
  label,
  hookForm,
  error,
  className,
  classNameContainer,
  ...args
}: IInput) => {
  const id = useId()

  return (
    <div className={cn('relative w-full', classNameContainer)}>
      <label htmlFor={id} className={`font-semibold ${error && 'text-red-600'}`}>
        {label}
      </label>
      <InputSCN
        id={id}
        className={cn(
          'w-full',
          className,
          error && 'border-red-500 focus:outline-red-600 focus-visible:outline-red-600'
        )}
        {...hookForm}
        {...args}
      />
      {error && <span className='text-xs text-red-500'>{error.message}</span>}
    </div>
  )
}

export default Input
