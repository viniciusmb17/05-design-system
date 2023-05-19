import { ComponentProps } from 'react'
import { TooltipArrow, TooltipContent } from './styles'
import {
  Provider as TooltipProvider,
  Root as TooltipRoot,
  Trigger as TooltipTrigger,
  Portal as TooltipPortal,
} from '@radix-ui/react-tooltip'
import { Text } from '../Text'

export interface TooltipProps extends ComponentProps<typeof TooltipRoot> {
  message: string
}

export function Tooltip({ children, message, ...props }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipRoot {...props}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent sideOffset={5}>
            <Text fontFamily={'tooltip'} size={'sm'}>
              {message}
            </Text>
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  )
}

Tooltip.displayName = 'Tooltip'
