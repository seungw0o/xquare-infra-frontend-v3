import {memo, useCallback} from 'react';
import {SidebarSearchProps} from "./sidebar-search.types";
import {SideBarDiv, SideBarSearch, SideBarSearchInput,} from "./sidebar-search-style";

const DEFAULT_PLACEHOLDER = "검색어를 입력해주세요.";

function SidebarSearchComponent({placeholder = DEFAULT_PLACEHOLDER, onSearch}: SidebarSearchProps) {
    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            onSearch?.(e.target.value);
        },
        [onSearch]
    );

    return (
        <SideBarDiv>
            <SideBarSearch>
                <SideBarSearchInput
                    type="text"
                    placeholder={placeholder}
                    onChange={handleChange}
                />
            </SideBarSearch>
        </SideBarDiv>
    );
}

export const SidebarSearch = memo(SidebarSearchComponent);