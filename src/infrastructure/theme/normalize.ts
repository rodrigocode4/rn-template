import { Dimensions } from 'react-native'

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get(
  'window',
)

const IPHONE6_SCREEN_WIDTH = 375
const IPHONE6_SCREEN_HEIGHT = 375

const wscale = SCREEN_WIDTH / IPHONE6_SCREEN_WIDTH
const hscale = SCREEN_HEIGHT / IPHONE6_SCREEN_HEIGHT

export const normalize = (size: number, based: 'width' | 'height' = 'width') => {
  return based === 'height' ? size * hscale : size * wscale
}
