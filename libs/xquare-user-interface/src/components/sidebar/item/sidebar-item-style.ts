import styled from "@emotion/styled";

interface SideBarMenuItemProps {
    isActive: boolean;
}

export const SideBarMenuItem = styled.div<SideBarMenuItemProps>`
    align-items: center;
    align-self: stretch;
    background-color: ${props => props.theme.color.background.purple.dark};
    display: flex;
    font-family: ${props => props.theme.typography.fontFamily};
    gap: 10px;
    padding: 10px 0;
`;

export const SideBarMenuItemLabel = styled.span<{ isActive?: boolean }>`
    color: ${props => props.isActive ? props.theme.color.text.none.white : props.theme.color.text.none.purple.dark};
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    transition: color 0.1s linear;

    &:hover {
        color: ${props => props.theme.color.text.none.white};
    }
`;