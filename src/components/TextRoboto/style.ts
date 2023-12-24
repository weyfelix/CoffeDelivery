import styled from "styled-components";

export type TextElementSize = 'l' | 'm' | 's' | 'xs';
export type TextElementWeight = 'Regular' | 'Bold'

interface TextElementProps {
  variant: TextElementSize;
  vWeight: TextElementWeight
}

const textSize = {
  l: '1.25rem',
  m: '1rem',
  s: '0.875rem',
  xs: '0.75rem' 
} as const

const textWeight = {
  Bold: 700,
  Regular: 400
} as const


export const TextElement = styled.p<TextElementProps>`
  line-height: 130%;
  font-family: 'Roboto', 'sans-serif';
  ${props => {
    return (
      `
      font-size: ${textSize[props.variant]};
      font-weight: ${textWeight[props.vWeight]};
      `
    )
  }}
  `