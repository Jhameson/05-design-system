import { Text, TextProps } from '@jl-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nemo quo laboriosam amet dolorem. Mollitia voluptas aut, excepturi doloremque animi ipsam vitae non quo consequatur eaque perferendis vel quod harum!',
  },
  // tags: ['autodocs'],
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
