import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Tooltip, TooltipProps } from '@ignite-ui-vmb/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    children: <Text>Hover para abrir tooltip</Text>,
    message: '21 de Outubro - Disponível',
    sideOffset: 5,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as={'div'}
          css={{
            display: 'flex',
            flexDirection: 'row',
            gap: '$2',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
