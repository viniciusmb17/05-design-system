import type { StoryObj, Meta } from '@storybook/react'
import { Button, Toast, ToastProps } from '@ignite-ui-vmb/react'

export default {
  title: 'Form/Toast',
  component: Toast,
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
