import type {Meta, StoryObj} from '@storybook/react';
import {SidebarItem} from './sidebar-item';

type Story = StoryObj<typeof SidebarItem>;

const meta: Meta<typeof SidebarItem> = {
    component: SidebarItem,
    title: 'Sidebar/Item',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '사이드바 메뉴 아이템 컴포넌트입니다. 네비게이션 메뉴 항목을 표시합니다.',
            },
        },
    },
    argTypes: {
        label: {
            control: 'text',
            description: '메뉴 항목의 레이블 텍스트',
            table: {
                type: {summary: 'string'},
            },
        },
        isActive: {
            control: 'boolean',
            description: '메뉴 항목의 활성화 상태',
            table: {
                type: {summary: 'boolean'},
                defaultValue: {summary: 'false'},
            },
        },
        onClick: {
            description: '메뉴 항목 클릭 시 호출되는 콜백 함수',
            table: {
                type: {summary: '() => void'},
            },
        },
    },
};

export default meta;

export const Default: Story = {
    args: {
        label: 'HOME',
    },
    parameters: {
        docs: {
            description: {
                story: '기본 메뉴 아이템 상태입니다.',
            },
        },
    },
};

export const Active: Story = {
    args: {
        label: 'DEPLOYMENT',
        isActive: true,
    },
    parameters: {
        docs: {
            description: {
                story: '현재 선택된 메뉴 아이템입니다.',
            },
        },
    },
};