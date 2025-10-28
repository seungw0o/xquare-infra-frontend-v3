import {memo} from 'react';
import {SidebarFooterProps} from "./sidebar-footer.types";
import {
    SideBarFooter,
    SideBarFooterDiv,
    SideBarFooterNameSpan,
    SideBarFooterProjectDiv,
    SideBarFooterProjectDivSpan,
} from "./sidebar-footer-style";

function SidebarFooterComponent({name, project}: SidebarFooterProps) {
    return (
        <SideBarFooter>
            <SideBarFooterDiv>
                <SideBarFooterNameSpan>
                    {name}
                </SideBarFooterNameSpan>
                <SideBarFooterProjectDiv>
                    <SideBarFooterProjectDivSpan>
                        {project}
                    </SideBarFooterProjectDivSpan>
                </SideBarFooterProjectDiv>
            </SideBarFooterDiv>
        </SideBarFooter>
    );
}

export const SidebarFooter = memo(SidebarFooterComponent);