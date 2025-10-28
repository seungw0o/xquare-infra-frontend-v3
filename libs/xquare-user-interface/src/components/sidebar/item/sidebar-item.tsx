import {memo} from 'react';
import {SidebarItemProps} from "./sidebar-item.types";
import {SideBarMenuItem, SideBarMenuItemLabel,} from "./sidebar-item-style";

function SidebarItemComponent({label, isActive = false, onClick}: SidebarItemProps) {
    return (
        <SideBarMenuItem isActive={isActive} onClick={onClick}>
            <SideBarMenuItemLabel isActive={isActive}>
                {label}
            </SideBarMenuItemLabel>
        </SideBarMenuItem>
    );
}

export const SidebarItem = memo(SidebarItemComponent);