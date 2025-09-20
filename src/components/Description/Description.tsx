import styled from "@emotion/styled";
import Polymorphic from "../Polymorphic/Polymorphic";
import type { ElementType, PropsWithChildren } from "react";

interface DescriptionProps<T extends ElementType> {
  as?: T;
}

function Description<T extends ElementType>({
  as,
  children,
}: PropsWithChildren<DescriptionProps<T>>) {
  return <SDescription as={as}>{children}</SDescription>;
}

export default Description;

const SDescription = styled(Polymorphic)`
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 32px 0;
  line-height: 1.5;
`;
