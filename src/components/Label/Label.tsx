import styled from "@emotion/styled";
import type { ComponentProps, PropsWithChildren } from "react";

interface LabelProps extends ComponentProps<"label"> {
  isHidden?: boolean;
}

function Label({
  isHidden = false,
  children,
  ...props
}: PropsWithChildren<LabelProps>) {
  if (isHidden) {
    return <SHiddenLabel {...props}>{children}</SHiddenLabel>;
  }

  return <SLabel {...props}>{children}</SLabel>;
}

export default Label;

const SLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
`;

const SHiddenLabel = styled.label`
  position: "absolute";
  border: 0;
  width: 1;
  height: 1;
  padding: 0;
  margin: -1;
  overflow: "hidden";
  clip: "rect(0; 0; 0; 0)";
  white-space: "nowrap";
  word-wrap: "normal";
`;
