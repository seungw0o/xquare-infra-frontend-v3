import styled from '@emotion/styled';

const SIDEBAR_WIDTH = '300px';
const SIDEBAR_EXPANDED_WIDTH = '600px';
const ANIMATION_DURATION = '0.3s';
const CONTENT_GAP = '10px';
const NAV_GAP = '5px';
const NAV_PADDING = '20px';

interface SidebarContainerProps {
    isExpanded?: boolean;
}

interface SidebarSubNavContainerProps {
    isExpanded?: boolean;
}

export const SidebarContainer = styled.div<SidebarContainerProps>`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: ${props => (props.isExpanded ? SIDEBAR_EXPANDED_WIDTH : SIDEBAR_WIDTH)};
    transition: width ${ANIMATION_DURATION} ease;
`;

export const SidebarContent = styled.div`
    background-color: ${props => props.theme.color.background.purple.dark};
    display: flex;
    flex-direction: column;
    gap: ${CONTENT_GAP};
    height: 100%;
`;

export const SidebarNavContent = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    height: 100%;
`;

export const SidebarNavItemWrapper = styled.div`
    width: 100%;
`;

export const SidebarNavContainer = styled.nav`
    align-items: flex-start;
    align-self: stretch;
    background-color: ${props => props.theme.color.background.purple.dark};
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: ${NAV_GAP};
    padding: ${NAV_PADDING};
    width: ${SIDEBAR_WIDTH};
`;

export const SidebarSubNavContainer = styled.nav<SidebarSubNavContainerProps>`
    align-items: flex-start;
    align-self: stretch;
    background-color: ${props => props.theme.color.background.purple.dark};
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: ${NAV_GAP};
    overflow: hidden;
    padding: ${NAV_PADDING} 0;
    transition: width ${ANIMATION_DURATION} ease;
    width: ${props => (props.isExpanded ? SIDEBAR_WIDTH : '0px')};
`;
