import { Box, BoxProps, Text } from '@jl-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Children em comum com todos</Text>
      </>
    ),
  },

  // argTypes: {
  //   children: {
  //     control: {
  //       type: 'text',
  //     },
  //   },
  // },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
