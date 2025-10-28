import styled from "@emotion/styled";
import {SideBarHeaderDescriptionDivProps} from "./sidebar-header.types";

const HEADER_PADDING = "20px";
const TEXT_FONT_SIZE = "12px";
const TEXT_FONT_WEIGHT = "600";
const DESC_MIN_WIDTH = "100px";
const DESC_MAX_WIDTH = "280px";
const ANIMATION_DURATION = "0.3s";

export const SideBarHeader = styled.footer`
    align-items: center;
    align-self: stretch;
    background-color: ${props => props.theme.color.background.purple.dark};
    display: flex;
    justify-content: space-between;
    min-width: 300px;
`;

export const SideBarHeaderDiv = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: space-between;
    padding: ${HEADER_PADDING};
    width: 100%;
`;

export const SideBarHeaderNameSpan = styled.span`
    color: ${props => props.theme.color.text.none.white};
    font-family: ${props => props.theme.typography.fontFamily};
    font-size: ${TEXT_FONT_SIZE};
    font-style: normal;
    font-weight: ${TEXT_FONT_WEIGHT};
    line-height: normal;
    text-align: center;
`;

export const SideBarHeaderDescriptionDiv = styled.div<SideBarHeaderDescriptionDivProps>`
    max-width: ${props => (props.isExpanded ? DESC_MAX_WIDTH : DESC_MIN_WIDTH)};
    overflow: hidden;
    text-overflow: ellipsis;
    transition: max-width ${ANIMATION_DURATION} ease;
    white-space: nowrap;
`;

export const SideBarHeaderDescriptionDivSpan = styled.span`
    color: ${props => props.theme.color.text.none.white};
    font-family: ${props => props.theme.typography.fontFamily};
    font-size: ${TEXT_FONT_SIZE};
    font-style: normal;
    font-weight: ${TEXT_FONT_WEIGHT};
    line-height: normal;
    text-align: center;
`;