import styled from "@emotion/styled";

export const SideBarHeader = styled.footer`
    align-items: center;
    align-self: stretch;
    background-color: ${props => props.theme.color.background.purple.dark};
    display: flex;
    font-family: ${props => props.theme.typography.fontFamily};
    justify-content: space-between;
    min-width: 300px;
`;

export const SideBarHeaderDiv = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: space-between;
    padding: 20px;
    width: 100%;
`;

export const SideBarHeaderNameSpan = styled.span`
    color: ${props => props.theme.color.text.none.white};
    font-family: ${props => props.theme.typography.fontFamily};
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-align: center;
`;

export const SideBarHeaderDescriptionDiv = styled.div``;

export const SideBarHeaderDescriptionDivSpan = styled.span`
    color: ${props => props.theme.color.text.none.white};
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-align: center;
`;