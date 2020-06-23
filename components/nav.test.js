import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Nav from './nav'
import { PATHS } from '../constants'

describe('Nav', () => {
  test('should have children.', () => {
    const randomElement = PATHS[Math.floor(Math.random() * PATHS.length)]
    const { asFragment } = render(<Nav />)
    const element = screen.getByText(new RegExp(randomElement.title, 'i'))
    
    expect(asFragment()).toMatchSnapshot()
    expect(element).not.toBeNull()
    expect(element).toHaveAttribute('href', `/tag/${randomElement.slug}`)
  })
})
