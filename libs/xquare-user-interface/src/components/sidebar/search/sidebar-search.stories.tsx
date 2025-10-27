import type {Meta, StoryObj} from '@storybook/react';
import {SidebarSearch} from './sidebar-search';

type Story = StoryObj<typeof SidebarSearch>;

const meta: Meta<typeof SidebarSearch> = {
    component: SidebarSearch,
    title: 'Sidebar/Search',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '사이드바 검색 입력 컴포넌트입니다. 사용자가 검색어를 입력할 수 있도록 제공됩니다.',
            },
        },
    },
    argTypes: {
        placeholder: {
            control: 'text',
            description: '입력 필드의 플레이스홀더 텍스트',
            table: {
                type: {summary: 'string'},
                defaultValue: {summary: '검색'},
            },
        },
        onSearch: {
            description: '검색 입력이 변경될 때 호출되는 콜백 함수',
            table: {
                type: {summary: '(value: string) => void'},
            },
        },
    },
};

export default meta;

/**
 * 기본 검색 컴포넌트입니다.
 */
export const Default: Story = {
    args: {
        placeholder: '검색어를 입력해주세요',
    },
    parameters: {
        docs: {
            description: {
                story: '기본 플레이스홀더 텍스트를 가진 검색 입력창입니다.',
            },
        },
    },
};