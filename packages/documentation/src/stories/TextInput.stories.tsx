import { TextInput, TextInputProps } from '@jl-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  args: {
    children: 'Lorem ',
  },
  // tags: ['autodocs'],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {}
