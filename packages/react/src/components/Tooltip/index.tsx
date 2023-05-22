import { ComponentProps } from 'react'
import {
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
  TooltipPortal,
  TooltipArrow,
  TooltipContent,
} from './styles'
import { Text } from '../Text'

export interface TooltipProps extends ComponentProps<typeof TooltipContent> {
  message: string
}

export function Tooltip({
  children,
  message,
  sideOffset = 5,
  ...props
}: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipRoot>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent {...props} sideOffset={sideOffset}>
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
