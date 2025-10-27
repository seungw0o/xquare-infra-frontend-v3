import {SidebarItemProps} from "./sidebar-item.types";
import {SideBarMenuItem, SideBarMenuItemLabel,} from "./sidebar-item-style";

export function SidebarItem({label, isActive = false, onClick}: SidebarItemProps) {
    return (
        <SideBarMenuItem isActive={isActive} onClick={onClick}>
            <SideBarMenuItemLabel isActive={isActive}>
                {label}
            </SideBarMenuItemLabel>
        </SideBarMenuItem>
    );
}