import { ComponentProps, ElementType } from 'react'
import { TextInputContainer } from './styles'

export interface TextInputProps
  extends ComponentProps<typeof TextInputContainer> {
  as?: ElementType
}

export function TextInput() {
  return <TextInputContainer>teste</TextInputContainer>
}
