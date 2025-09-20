import styled from "@emotion/styled";
import type { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {}

function Input({ ...props }: InputProps) {
  return <SInput {...props} />;
}

export default Input;

const SInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  color: #1f2937;
  background: white;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #3b82f6;
  }

  &::placeholder {
    color: #9ca3af;
  }
`;
