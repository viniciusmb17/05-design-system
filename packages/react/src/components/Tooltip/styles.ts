import * as Tooltip from '@radix-ui/react-tooltip'
import { styled, keyframes } from '../../styles'

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

export const TooltipProvider = styled(Tooltip.Provider, {})

export const TooltipRoot = styled(Tooltip.Root, {})

export const TooltipTrigger = styled(Tooltip.Trigger, {})

export const TooltipPortal = styled(Tooltip.Portal, {})

export const TooltipContent = styled(Tooltip.Content, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$3 $4',

  width: 'fit-content',
  height: 'fit-content',

  filter: 'drop-shadow(4px 16px 24px rgba(0, 0, 0, 0.25))',

  zIndex: 2,

  background: '$gray900',
  borderRadius: '$sm',

  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1 , 0.3, 1',
  willChange: 'transform opacity',
  '&[data-state]="delayed-open"]': {
    '&[data-side:"top"]': { animationName: slideDownAndFade },
    '&[data-side:"right"]': { animationName: slideLeftAndFade },
    '&[data-side:"bottom"]': { animationName: slideUpAndFade },
    '&[data-side:"left"]': { animationName: slideRightAndFade },
  },
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
  width: '$4',
  height: '$2',
})
