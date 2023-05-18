import type { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps } from '@ignite-ui-vmb/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    children: '21 de Outubro - Indisponível',
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
