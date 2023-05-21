import { render, fireEvent, waitFor, act } from '~/infrastructure/test.utils'
import Login from './Login.screen'

describe('<Login />', () => {
  test('Deve carregar dados da store', async () => {
    const promise = await Promise.resolve()
    const { findByRole, store } = render(<Login />)

    const button = await findByRole('button')

    fireEvent.press(button)

    await waitFor(() => {
      expect(store.getState().login).toEqual({
        email: 'rodrigocode4@gmail.com',
        password: '123password'
      })
    })
    await act(async () => promise)
  })
})
