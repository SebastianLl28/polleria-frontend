import { expect, describe, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '@/page/home/HomePage'

describe('HomePage', () => {
  test('should render home component', () => {
    render(<Home />)
    expect(screen.getByText('¿Quienes somos?')).toBeDefined()
  })
})
