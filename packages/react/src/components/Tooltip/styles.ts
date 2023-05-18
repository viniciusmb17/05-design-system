import { styled } from '../../styles'

export const TooltipContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 0,

  width: 'fit-content',
  height: 52,

  filter: 'drop-shadow(4px 16px 24px rgba(0, 0, 0, 0.25))',

  zIndex: 2,
})

export const TooltipContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '$3 $4',
  gap: '$2',

  width: 'inherit',
  height: 44,

  background: '$gray900',
  borderRadius: '$sm',
})

export const TooltipArrow = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'flex-start',
  padding: 0,
  marginTop: -6.5,

  zIndex: 1,

  color: '$gray900',
})
