import { ark } from '@ark-ui/react/factory'
import type { ComponentProps } from 'react'
import { styled } from '@huspy/briks-web-styled-system/jsx'
import { button } from '@huspy/briks-web-styled-system/recipes'

export const Button = styled(ark.button, button)
export interface ButtonProps extends ComponentProps<typeof Button> {}
