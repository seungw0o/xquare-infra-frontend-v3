import React, { useState } from "react";
import styled from "@emotion/styled";
import { Props } from "./menu.types";
import { theme } from "@xquare/design-system";

const Wrapper = styled.div`
  display: flex;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.color.text.none.gray.dark};
  gap: 5px;
`;

const ItemWrapper = styled.div<{ selected: boolean }>`
  padding: 10px 20px;
  border-radius: 10px;
  border: ${({ selected, theme }) =>
    selected ? `1px solid ${theme.color.text.none.purple.light}` : "none"};
  background-color: ${({ selected, theme }) =>
    selected ? `${theme.color.background.purple.light}` : "transparent"};
  font-size: ${theme.light.font.body1.fontSize};
  font-weight: ${theme.light.fontWeight.bold};
  line-height: ${theme.light.font.body1.lineHeight};

  cursor: pointer;
  color: ${({ selected, theme }) =>
    selected
      ? theme.color.text.none.purple.light
      : theme.color.text.none.gray.dark};
`;

export const Menu = ({ options, onSelect }: Props) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    setSelected(value);
    if (onSelect) {
      onSelect(value);
    }
  };

  return (
    <Wrapper>
      {options.map((option) => (
        <ItemWrapper
          selected={selected === option.value}
          key={option.value}
          onClick={() => handleSelect(option.value)}
        >
          {option.label}
        </ItemWrapper>
      ))}
    </Wrapper>
  );
};
