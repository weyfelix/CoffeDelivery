import styled from "styled-components";

export type TextElementSize = 'xl' | 'l' | 'm' | 's' | 'xs';
export type TextElementWeight = 'ExtraBold' | 'Bold'

interface TextElementProps {
  variant: TextElementSize;
  vWeight: TextElementWeight
}

const textSize = {
  xl: '3rem',
  l: '2rem',
  m: '1.5rem',
  s: '1.25rem',
  xs: '1.125rem' 
} as const


const textWeight = {
  Bold: 700,
  ExtraBold: 800
} as const



export const TextElement = styled.p<TextElementProps>`
  line-height: 130%;
  font-family: 'Baloo 2', 'sans-serif';
  ${props => {
    return (
      `
      font-size: ${textSize[props.variant]};
      font-weight: ${textWeight[props.vWeight]};
      `
    )
  }}
  `