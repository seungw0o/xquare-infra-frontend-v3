import {SidebarSearchProps} from "./sidebar-search.types";
import {SideBarDiv, SideBarSearch, SideBarSearchInput,} from "./sidebar-search-style";

export function SidebarSearch({placeholder = "검색어를 입력해주세요.", onSearch}: SidebarSearchProps) {

    return (
        <SideBarDiv>
            <SideBarSearch>
                <SideBarSearchInput
                    type="text"
                    placeholder={placeholder}
                />
            </SideBarSearch>
        </SideBarDiv>
    );
}