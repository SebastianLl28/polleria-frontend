import { expect, describe, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import About from '@/page/home/sections/About'

describe('HomePage', () => {
  test('should render about section', () => {
    render(<About />)
    expect(screen.getByText('¿Quienes somos?')).toBeDefined()
  })
})
