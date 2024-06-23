import { Button, ButtonProps } from '@jl-design-components/react'
import { Meta, StoryObj } from '@storybook/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
    size: 'md',
    disabled: false,
    variant: 'primary',
  },
  argTypes: {
    variant: {
      //variantes e controles
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'inline-radio' },
    },
    size: {
      description: 'Tamanho do botão',
      options: ['sm', 'md'],
      control: { type: 'inline-radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    onClick: {
      //Configurando a propriedade `argTypes` para receber as ações que queremos que façam log
      action: 'click',
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    size: 'md',
    children: 'Create',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    size: 'md',
    children: 'Cancel',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Send',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
