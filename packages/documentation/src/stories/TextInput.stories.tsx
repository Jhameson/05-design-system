import { Box, Text, TextInput, TextInputProps } from '@jl-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  args: {
    disabled: false,
    placeholder: 'Text',
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">User name</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
  },
}
