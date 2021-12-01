import { render, screen } from '@testing-library/react'
import Layout from './Layout'

describe('Layout component', () => {
  test('Layout - Header, Footer and children', async () => {
    render(
      <Layout>
        <div>Test Layout</div>
      </Layout>
    )

    expect(screen.getByText('Test Layout')).toBeInTheDocument()
    expect(screen.getByText('Hang the wise man')).toBeInTheDocument()
    expect(screen.getByText('boris.traljic@gmail.com')).toBeInTheDocument()
  })
})
