import '@testing-library/jest-native/extend-expect'

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

beforeAll(() => {
  const originalConsoleError = console.error
  console.error = (...args) => {
    if (/Warning: You called act/.test(args[0])) return
    originalConsoleError(...args)
  }
})
