import { ReactNode } from "react";
import { TextElement, TextElementSize, TextElementFamily } from "./style";

export interface TextProps {
  children: ReactNode;
  size?: TextElementSize;
  family?:TextElementFamily;
}

export function Text ({size = 'm', family='Roboto', children}: TextProps) {
  return (
    <TextElement variant={size} family={family} >
      {children}
    </TextElement>
  )
}