import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Text = styled('p', {
  margin: 0,
  color: '$gray100',

  variants: {
    size: {
      xxs: { fontSize: '$xxs' },
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '$2xl' },
      '4xl': { fontSize: '$4xl' },
      '5xl': { fontSize: '$5xl' },
      '6xl': { fontSize: '$6xl' },
      '7xl': { fontSize: '$7xl' },
      '8xl': { fontSize: '$8xl' },
      '9xl': { fontSize: '$9xl' },
    },
    lineHeight: {
      shorter: { lineHeight: '125%' },
      short: { lineHeight: '140%' },
      base: { lineHeight: '160%' },
      tall: { lineHeight: '180%' },
    },
    fontFamily: {
      default: { fontFamily: '$default' },
      code: { fontFamily: '$code' },
      tooltip: { fontFamily: '$tooltip' },
    },
  },

  defaultVariants: {
    size: 'md',
    lineHeight: '$base',
    fontFamily: '$default',
  },
})

export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType
}

Text.displayName = 'Text'
