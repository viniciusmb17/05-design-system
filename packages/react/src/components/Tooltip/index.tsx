import { ComponentProps } from 'react'
import { Text } from '../Text'
import { TooltipArrow, TooltipContainer, TooltipContent } from './styles'
import { CaretDown } from 'phosphor-react'

export interface TooltipProps extends ComponentProps<typeof TooltipContent> {}

export function Tooltip({ children, ...props }: TooltipProps) {
  return (
    <TooltipContainer {...props}>
      <TooltipContent>
        <Text size={'sm'} lineHeight={'short'}>
          {children}
        </Text>
      </TooltipContent>
      <TooltipArrow>
        <CaretDown size={16} weight="fill" />
      </TooltipArrow>
    </TooltipContainer>
  )
}

Tooltip.displayName = 'Tooltip'
