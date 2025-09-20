import styled from "@emotion/styled";
import type { ComponentProps } from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends ComponentProps<"select"> {
  options: Option[];
}

function Select({ options, ...props }: SelectProps) {
  return (
    <SSelect {...props}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </SSelect>
  );
}

export default Select;

const SSelect = styled.select`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  color: #1f2937;
  background: white;
  cursor: pointer;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #3b82f6;
  }

  option {
    color: #1f2937;
  }
`;
