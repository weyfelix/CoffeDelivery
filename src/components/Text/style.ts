import styled from "styled-components";

export type TextElementSize = 'xl' | 'l' | 'm' | 's' | 'xs';
export type TextElementFamily = 'Baloo' | 'Roboto';

interface TextElementProps {
  variant: TextElementSize;
  family: TextElementFamily;
}

const textSize = {
  xl: '3rem',
  l: '2rem',
  m: '1.5rem',
  s: '1.25rem',
  xs: '1.125rem' 
} as const

const textFamily = {
  Baloo: 'Baloo 2',
  Roboto: 'Roboto'
} as const


export const TextElement = styled.p<TextElementProps>`
  line-height: 130%;
  ${props => {
    return (
      `
      font-family: '${textFamily[props.family]}', 'sans-serif';
      font-size: ${textSize[props.variant]}
      `
    )
  }}
  `