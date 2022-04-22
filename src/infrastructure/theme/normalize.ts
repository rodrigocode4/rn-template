import { Dimensions } from 'react-native'

export const { width, height } = Dimensions.get('window')

const IPHONE8_SCREEN_WIDTH = 375
const IPHONE8_SCREEN_HEIGHT = 667

const wscale = (width / IPHONE8_SCREEN_WIDTH) * 0.8
const hscale = (height / IPHONE8_SCREEN_HEIGHT) * 0.8

export const normalize = (size: number, based: 'width' | 'height' = 'width') =>
  based === 'height' ? size * hscale : size * wscale
