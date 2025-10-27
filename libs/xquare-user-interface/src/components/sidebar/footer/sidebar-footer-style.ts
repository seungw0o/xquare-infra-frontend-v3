import styled from "@emotion/styled";

export const SideBarFooter = styled.footer`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    background-color: ${props => props.theme.color.background.purple.dark};
    font-family: ${props => props.theme.typography.fontFamily};
    min-width: 300px;
`;

export const SideBarFooterNameSpan = styled.span`
    color: ${props => props.theme.color.text.none.white};
    font-family: ${props => props.theme.typography.fontFamily};
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

export const SideBarFooterProjectDiv = styled.div`
    color: ${props => props.theme.color.button.select.purple.dark};
    display: flex;
    padding: 5px 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 28px;
    border: 1px solid ${props => props.theme.color.button.select.purple.dark};
    background: ${props => props.theme.color.background.purple.medium};
`;

export const SideBarFooterProjectDivSpan = styled.span`
    color: ${props => props.theme.color.button.select.purple.dark};
    text-align: right;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;