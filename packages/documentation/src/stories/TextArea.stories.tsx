import { Box, Text, TextArea, TextAreaProps } from '@jl-design-components/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,
  args: {
    disabled: false,
    placeholder: 'Add any observations...',
  },
  //forma de customizar a view sem alterar o componente / view do componente
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {}
