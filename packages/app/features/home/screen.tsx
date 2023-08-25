import React from 'react'
import { Button, createStyledContext, Stack, styled, Text, withStaticProperties } from 'tamagui'

const StyledButton = styled(Button, {
  alignItems: 'center',
  borderRadius: '$8',
  cursor: 'pointer',
  defaultVariants: {
    adoptRole: 'default',
  },
  variants: {
    adoptRole: {
      danger: {
        theme: 'blue',
      },
      default: {
        theme: 'green',
      },
    },
  } as const,
})

export const ButtonContext = createStyledContext({
  adoptRole: 'default' as 'default' | 'other',
})

export const ButtonFrame = styled(Stack, {
  alignItems: 'center',
  borderRadius: '$8',
  context: ButtonContext,
  cursor: 'pointer',
  defaultVariants: {
    adoptRole: 'default',
  },
  variants: {
    adoptRole: {
      danger: {
        theme: 'red',
      },
      default: {
        theme: 'green',
      },
    },
  } as const,
})

export const ButtonText = styled(Text, {
  context: ButtonContext,
  fontWeight: '700',
  name: 'ButtonText',
  userSelect: 'none',
})

export const ButtonWithContext = withStaticProperties(ButtonFrame, {
  Props: ButtonContext.Provider,
  Text: ButtonText,
})

export function HomeScreen() {
  return (
    <>
      <StyledButton>
        <StyledButton.Text>asdasda</StyledButton.Text>
      </StyledButton>
      <StyledButton adoptRole="danger">
        <StyledButton.Text>asdasda</StyledButton.Text>
      </StyledButton>
      <ButtonWithContext>
        <ButtonWithContext.Text>asdasda</ButtonWithContext.Text>
      </ButtonWithContext>
      <ButtonWithContext adoptRole="danger">
        <ButtonWithContext.Text>asdasda</ButtonWithContext.Text>
      </ButtonWithContext>
    </>
  )
}
