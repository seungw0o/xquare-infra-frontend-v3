import type {Meta, StoryObj} from '@storybook/react';
import {Sidebar} from './sidebar';

type Story = StoryObj<typeof Sidebar>;

const meta: Meta<typeof Sidebar> = {
    component: Sidebar,
    title: 'Sidebar',
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: '사이드바 컴포넌트는 앱의 메인 네비게이션을 제공합니다. 헤더, 검색, 메뉴 아이템, 푸터로 구성됩니다.',
            },
        },
    },
    argTypes: {
        navItems: {
            description: '네비게이션 메뉴 아이템 목록',
            table: {
                type: {summary: 'SidebarNavItem[]'},
            },
        },
        projectName: {
            control: 'text',
            description: '표시할 프로젝트 이름',
            table: {
                type: {summary: 'string'},
            },
        },
        searchPlaceholder: {
            control: 'text',
            description: '검색 입력 필드의 placeholder 텍스트',
            table: {
                type: {summary: 'string'},
            },
        },
        userName: {
            control: 'text',
            description: '표시할 사용자 이름',
            table: {
                type: {summary: 'string'},
            },
        },
        onNavItemClick: {
            description: '네비게이션 아이템 클릭 시 호출되는 콜백',
            table: {
                type: {summary: '(itemId: string) => void'},
            },
        },
        onSearch: {
            description: '검색 입력 변경 시 호출되는 콜백',
            table: {
                type: {summary: '(value: string) => void'},
            },
        },
    },
};

export default meta;

export const Default: Story = {
    args: {
        navItems: [
            {id: 'home', label: 'HOME'},
            {id: 'notification', label: 'NOTIFICATION'},
            {id: 'deployment', label: 'DEPLOYMENT'},
            {id: 'network', label: 'NETWORK'},
            {id: 'monitor', label: 'MONITOR'},
        ],
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onNavItemClick: () => {
        },
        projectName: 'XQUARE',
        searchPlaceholder: '검색어를 입력해주세요.',
        userName: '강은찬',
    },
};