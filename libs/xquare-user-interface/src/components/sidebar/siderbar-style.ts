import styled from "@emotion/styled";

interface SidebarWrapperProps {
    hasSubItems: boolean;
}

export const SidebarWrapper = styled.div<SidebarWrapperProps>`
    display: flex;
    height: 100vh;
    width: ${props => props.hasSubItems ? '600px' : '300px'};
    transition: width 0.3s ease;
`;

export const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 300px;
`;

export const SidebarContent = styled.div`
    background-color: ${props => props.theme.color.background.purple.dark};
    gap: 10px;
    height: 100%;
`;

export const SidebarNavContainer = styled.nav`
    align-items: center;
    align-self: stretch;
    background-color: ${props => props.theme.color.background.purple.dark};
    display: flex;
    flex: 1 0 0;
    flex-direction: column;
    gap: 5px;
    padding: 20px;
`;

export const SidebarSubContainer = styled.div`
    background-color: ${props => props.theme.color.background.purple.dark};
    border-left: 1px solid ${props => props.theme.color.text.none.purple.dark};
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 300px;
    opacity: 0;
    transition: opacity 0.3s ease;

    &.visible {
        opacity: 1;
    }
`;

export const SidebarSubContent = styled.div`
    background-color: ${props => props.theme.color.background.purple.dark};
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100%;
    padding: 20px;
`;

export const SidebarSubNavContainer = styled.nav`
    align-items: center;
    align-self: stretch;
    background-color: ${props => props.theme.color.background.purple.dark};
    display: flex;
    flex: 1 0 0;
    flex-direction: column;
    gap: 5px;
`;