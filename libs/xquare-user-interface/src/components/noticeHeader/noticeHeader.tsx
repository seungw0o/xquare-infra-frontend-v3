import styled from "@emotion/styled";
import { Props } from "./noticeHeader.types";

const Wrapper = styled.div<Pick<Props, "width">>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: ${({ width }) => width || "664px"};
  border-bottom: 1px solid ${({ theme }) => theme.color.text.none.gray.dark};
  padding-bottom: 10px;
  cursor: pointer;
  &:hover .title {
    color: ${({ theme }) => theme.color.text.none.purple.light};
    text-decoration: none;
  }
`;
const Title = styled.div`
  color: ${({ theme }) => theme.color.text.none.purple.dark};
  text-decoration: underline;
`;
const Date = styled.div`
  color: ${({ theme }) => theme.color.text.none.gray.dark};
`;

export const NoticeHeader = ({ title, date, width }: Props) => {
  return (
    <Wrapper width={width}>
      <Title className="title">{title}</Title>
      <Date>{date}</Date>
    </Wrapper>
  );
};
