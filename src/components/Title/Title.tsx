import styled from "@emotion/styled";
import Polymorphic from "../Polymorphic/Polymorphic";
import type { ComponentProps, ElementType, PropsWithChildren } from "react";

type TitleProps<T extends ElementType> = ComponentProps<T> & {
  as?: T;
};

function Title<T extends ElementType>({
  as,
  children,
}: PropsWithChildren<TitleProps<T>>) {
  return <STitle as={as}>{children}</STitle>;
}

export default Title;

const STitle = styled(Polymorphic)`
  font-size: 24px;
  font-weight: bold;
  color: #1f2937;
  margin: 0 0 8px 0;
`;
