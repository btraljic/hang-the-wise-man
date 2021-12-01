import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'

import { store } from '../../app/store'
import Home from './Home'

describe('Home page', () => {
  test('Login fire alert if name is empty', async () => {
    global.alert = jest.fn()

    render(
      <Provider store={store}>
        <Home />
      </Provider>
    )

    const button = screen.getByText('SUBMIT')
    expect(button).toBeEnabled()
    fireEvent.click(button)
    expect(global.alert).toBeCalledWith('Please enter your name.')
  })
})
