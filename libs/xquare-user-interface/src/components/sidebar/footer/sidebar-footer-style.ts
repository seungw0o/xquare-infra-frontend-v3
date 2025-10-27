import styled from "@emotion/styled";

export const SideBarFooter = styled.footer`
    align-items: center;
    background-color: ${props => props.theme.color.background.purple.dark};
    display: flex;
`;

export const SideBarFooterDiv = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: space-between;
    padding: 20px;
    width: 100%;
`;

export const SideBarFooterNameSpan = styled.span`
    color: ${props => props.theme.color.text.none.white};
    font-family: ${props => props.theme.typography.fontFamily};
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-align: center;
`;

export const SideBarFooterProjectDiv = styled.div`
    align-items: center;
    background: ${props => props.theme.color.background.purple.light};
    border: 1px solid ${props => props.theme.color.button.select.purple.dark};
    border-radius: 28px;
    color: ${props => props.theme.color.button.select.purple.dark};
    display: flex;
    gap: 10px;
    justify-content: center;
    padding: 5px 10px;
`;

export const SideBarFooterProjectDivSpan = styled.span`
    color: ${props => props.theme.color.button.select.purple.dark};
    font-family: ${props => props.theme.typography.fontFamily};
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: right;
`;