import { ReactNode } from "react";
import { TextElement, TextElementSize, TextElementWeight} from "./style";

export interface TextProps {
  children: ReactNode;
  size?: TextElementSize;
  vWeight?: TextElementWeight
}

export function Text ({size = 'm', vWeight='Regular', children}: TextProps) {
  return (
    <TextElement variant={size} vWeight={vWeight}>
      {children}
    </TextElement>
  )
}