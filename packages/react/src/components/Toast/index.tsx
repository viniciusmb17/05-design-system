import { ComponentProps, ReactNode } from 'react'
import {
  ToastProvider,
  ToastRoot,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastTitle,
  ToastViewport,
} from './styles'
import { Heading } from '../Heading'
import { Text } from '../Text'
import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  action?: ReactNode | string
  title?: string
  description: string
  eventDate: Date
}

export function Toast({
  title,
  action,
  description,
  eventDate,
  open,
  onOpenChange,
}: ToastProps) {
  return (
    <ToastProvider swipeDirection="right">
      <ToastRoot open={open} onOpenChange={onOpenChange}>
        {title && (
          <ToastTitle>
            <Heading>{title}</Heading>
          </ToastTitle>
        )}
        <ToastDescription asChild>
          <time dateTime={eventDate.toISOString()}>
            <Text size={'sm'}>{description}</Text>
          </time>
        </ToastDescription>
        <ToastClose asChild>
          <X size={20} aria-hidden={true} />
        </ToastClose>
        {!!action && (
          <ToastAction altText="Desfazer" asChild>
            {action}
          </ToastAction>
        )}
      </ToastRoot>

      <ToastViewport />
    </ToastProvider>
  )
}

Toast.displayName = 'Toast'
