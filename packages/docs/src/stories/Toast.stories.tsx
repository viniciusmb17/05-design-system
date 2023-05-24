import type { StoryObj, Meta } from '@storybook/react'
import { Button, Toast, ToastProps } from '@ignite-ui-vmb/react'
import { useEffect, useRef, useState } from 'react'

const DemoToast = (props: ToastProps) => {
  const [open, setOpen] = useState(false)

  const timeRef = useRef(0)

  const eventDate = new Date()

  useEffect(() => {
    return () => clearTimeout(timeRef.current)
  }, [])

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
    <>
      <Button
        onClick={() => {
          setOpen(false)
          window.clearTimeout(timeRef.current)
          timeRef.current = window.setTimeout(() => setOpen(true), 100)
        }}
      >
        Agendar
      </Button>
      <Toast
        {...props}
        open={open}
        onOpenChange={setOpen}
        description={prettyDate(eventDate)}
        eventDate={eventDate}
        title="Agendamento realizado"
      />
    </>
  )
}

export default {
  title: 'Form/Toast',
  component: DemoToast,
  tags: ['autodocs'],
  args: {},
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}

export const WithAction: StoryObj<ToastProps> = {
  args: {
    action: (
      <Button variant={'tertiary'} size={'sm'}>
        Desfazer
      </Button>
    ),
  },
}
