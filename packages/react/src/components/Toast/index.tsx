import { ComponentProps, ReactNode, useRef, useState } from 'react'
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
import { Button } from '../Button'

export interface ToastProps extends ComponentProps<typeof ToastProvider> {
  action?: ReactNode
  title?: string
}

export function Toast({ action, title = 'Agendamento realizado' }: ToastProps) {
  const [open, setOpen] = useState(false)
  const eventDateRef = useRef(new Date())

  function handleToggle(e: any) {
    e.preventDefault()
    setOpen((prevState: boolean) => !prevState)
  }
  function prettyDate(date: Date): string {
    return new Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'full',
      timeStyle: 'short',
    })
      .format(date)
      .replace(/(^|\W)([a-zÀ-ÖØ-öø-ÿ])/g, (_, p1, p2) => {
        if ('àd'.includes(p2)) {
          return p1 + p2
        }
        return p1 + p2.toUpperCase()
      })
  }
  return (
    <ToastProvider swipeDirection="right">
      <Button onClick={handleToggle}>Clique aqui</Button>
      <ToastRoot open={open} onOpenChange={setOpen} defaultOpen={false}>
        {title && (
          <ToastTitle>
            <Heading>{title}</Heading>
          </ToastTitle>
        )}
        <ToastDescription asChild>
          <time dateTime={eventDateRef.current.toISOString()}>
            <Text size={'sm'}>{prettyDate(eventDateRef.current)}</Text>
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
