import type { Props } from "./input.type";
import styled from "@emotion/styled";
import { parseValue } from "../../utils";
import { type ChangeEvent, useId } from "react";
import { Text } from "../text";

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
`;

const InputWrapper = styled.div<Pick<Props, "$width" | "$errorMessage">>`
  display: flex;
  align-items: center;
  gap: 8px;
  width: ${({ $width }) => parseValue($width || "100%")};
  height: 48px;
  border-bottom: 1px solid ${({ theme }) => theme.color.text.none.gray.dark};

  &:focus-within {
    border-color: ${({ theme }) => theme.color.text.none.gray.dark};
  }
`;

const StyledInput = styled.input`
  flex-grow: 1;
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${({ theme }) => theme.color.text.none.gray.dark};
  font-size: 14px;

  &::placeholder {
    color: ${({ theme }) => theme.color.text.none.gray.dark};
  }
`;

export const Input = ({
  value,
  onChange,
  $errorMessage,
  $width,

  ...props
}: Props) => {
  const id = useId();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <Wrapper>
      <InputWrapper $width={$width} $errorMessage={$errorMessage}>
        <StyledInput
          id={id}
          value={value}
          onChange={handleChange}
          aria-invalid={!!$errorMessage}
          {...props}
        />
      </InputWrapper>
      {$errorMessage && (
        <Text $span $size="body3" $weight="regular" $color="#E74C3C">
          {$errorMessage}
        </Text>
      )}
    </Wrapper>
  );
};
