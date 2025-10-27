export interface SidebarNavItem {
    id: string;
    label: string;
    subItems?: SidebarNavItem[];
}

export interface SidebarProps {
    navItems: SidebarNavItem[];
    projectName: string;
    searchPlaceholder: string;
    userName: string;
    onNavItemClick: (itemId: string) => void;
    onSearch?: (value: string) => void;
}