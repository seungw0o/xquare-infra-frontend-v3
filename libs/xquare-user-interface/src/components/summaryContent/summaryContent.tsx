import styled from "@emotion/styled";
import { Props } from "./summaryContent.types";

const Wrapper = styled.div<Pick<Props, "width">>`
  border-bottom: 1px solid ${({ theme }) => theme.color.background.gray};
  padding-bottom: 10px;
  width: ${({ width }) => width || "664px"};
`;

export const SummaryContent = ({ title, width }: Props) => {
  return <Wrapper width={width}>{title}</Wrapper>;
};
