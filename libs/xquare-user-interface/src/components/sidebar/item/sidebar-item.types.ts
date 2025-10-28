export interface SidebarItemProps {
    label: string;
    isActive?: boolean;
    onClick?: () => void;
}

export interface SideBarMenuItemProps {
    isActive: boolean;
}

export interface SideBarMenuItemLabelProps {
    isActive?: boolean;
}