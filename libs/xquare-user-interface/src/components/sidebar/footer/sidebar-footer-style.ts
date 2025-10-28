import styled from "@emotion/styled";

const FOOTER_PADDING = "20px";
const NAME_FONT_SIZE = "12px";
const NAME_FONT_WEIGHT = "600";
const PROJECT_GAP = "10px";
const PROJECT_PADDING = "5px 10px";
const PROJECT_BORDER_RADIUS = "28px";
const PROJECT_FONT_SIZE = "10px";
const PROJECT_FONT_WEIGHT = "700";

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
    padding: ${FOOTER_PADDING};
    width: 100%;
`;

export const SideBarFooterNameSpan = styled.span`
    color: ${props => props.theme.color.text.none.white};
    font-family: ${props => props.theme.typography.fontFamily};
    font-size: ${NAME_FONT_SIZE};
    font-style: normal;
    font-weight: ${NAME_FONT_WEIGHT};
    line-height: normal;
    text-align: center;
`;

export const SideBarFooterProjectDiv = styled.div`
    align-items: center;
    background: ${props => props.theme.color.background.purple.light};
    border: 1px solid ${props => props.theme.color.button.select.purple.dark};
    border-radius: ${PROJECT_BORDER_RADIUS};
    color: ${props => props.theme.color.button.select.purple.dark};
    display: flex;
    gap: ${PROJECT_GAP};
    justify-content: center;
    padding: ${PROJECT_PADDING};
`;

export const SideBarFooterProjectDivSpan = styled.span`
    color: ${props => props.theme.color.button.select.purple.dark};
    font-family: ${props => props.theme.typography.fontFamily};
    font-size: ${PROJECT_FONT_SIZE};
    font-style: normal;
    font-weight: ${PROJECT_FONT_WEIGHT};
    line-height: normal;
    text-align: right;
`;