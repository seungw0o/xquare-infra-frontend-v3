import styled from "@emotion/styled";
import {SideBarMenuItemLabelProps, SideBarMenuItemProps} from "./sidebar-item.types";

const ITEM_PADDING = "10px 0";
const LABEL_FONT_SIZE = "14px";
const LABEL_FONT_WEIGHT = "600";
const TRANSITION_DURATION = "0.05s";
const LABEL_MARGIN_RIGHT = "5px";

export const SideBarMenuItem = styled.div<SideBarMenuItemProps>`
    align-items: center;
    background-color: ${props => props.theme.color.background.purple.dark};
    display: flex;
    font-family: ${props => props.theme.typography.fontFamily};
    padding: ${ITEM_PADDING};
    width: 100%;
`;

export const SideBarMenuItemWrapper = styled.div`
    width: 100%;
`;

export const SideBarMenuItemLabel = styled.span<SideBarMenuItemLabelProps>`
    color: ${props =>
            props.isActive ? props.theme.color.text.none.white : props.theme.color.text.none.purple.dark};
    font-size: ${LABEL_FONT_SIZE};
    font-style: normal;
    font-weight: ${LABEL_FONT_WEIGHT};
    line-height: normal;
    margin-right: ${LABEL_MARGIN_RIGHT};
    transition: color ${TRANSITION_DURATION} linear;
    width: 100%;

    &:hover {
        color: ${props => props.theme.color.text.none.white};
    }
`;