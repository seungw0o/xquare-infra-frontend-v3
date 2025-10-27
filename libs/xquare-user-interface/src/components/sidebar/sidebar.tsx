import {useState} from 'react';
import {SidebarProps} from "./sidebar.types";
import {SidebarHeader} from "./header/sidebar-header";
import {SidebarSearch} from "./search/sidebar-search";
import {SidebarItem} from "./item/sidebar-item";
import {SidebarFooter} from "./footer/sidebar-footer";
import {SidebarContainer, SidebarContent, SidebarNavContainer} from "./siderbar-style";

export function Sidebar({
                            navItems,
                            userName,
                            projectName,
                            searchPlaceholder,
                            onNavItemClick,
                            onSearch,
                        }: SidebarProps) {
    const [activeItemId, setActiveItemId] = useState<string>(navItems[0].id);

    const handleItemClick = (itemId: string) => {
        setActiveItemId(itemId);
        onNavItemClick(itemId);
    };

    return (
        <SidebarContainer>
            <SidebarHeader/>
            <SidebarContent>
                <SidebarSearch
                    placeholder={searchPlaceholder}
                    onSearch={onSearch}
                />
                <SidebarNavContainer>
                    {navItems.map((item) => (
                        <SidebarItem
                            key={item.id}
                            label={item.label}
                            isActive={item.id === activeItemId}
                            onClick={() => handleItemClick(item.id)}
                        />
                    ))}
                </SidebarNavContainer>
            </SidebarContent>
            <SidebarFooter name={userName} project={projectName}/>
        </SidebarContainer>
    );
}