import {
    SideBarFooter,
    SideBarFooterNameSpan,
    SideBarFooterProjectDiv,
    SideBarFooterProjectDivSpan,
} from "./sidebar-footer-style";

interface SidebarFooterProps {
    name: string;
    project: string;
}

export function SidebarFooter({name, project}: SidebarFooterProps) {
    return (
        <SideBarFooter>
            <SideBarFooterNameSpan>
                {name}
            </SideBarFooterNameSpan>
            <SideBarFooterProjectDiv>
                <SideBarFooterProjectDivSpan>
                    {project}
                </SideBarFooterProjectDivSpan>
            </SideBarFooterProjectDiv>
        </SideBarFooter>
    );
}