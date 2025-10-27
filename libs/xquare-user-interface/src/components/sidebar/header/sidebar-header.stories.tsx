import type {Meta, StoryObj} from '@storybook/react';
import {SidebarHeader} from './sidebar-header';

type Story = StoryObj<typeof SidebarHeader>;

const meta: Meta<typeof SidebarHeader> = {
    component: SidebarHeader,
    title: 'Sidebar/Header',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '사이드바 헤더 컴포넌트로, XQUARE와 DSM 정보를 표시합니다. 사이드바의 최상단에 위치하며 프로젝트 정보를 나타냅니다.',
            },
        },
    },
    argTypes: {
        isOpen: {
            control: 'boolean',
            description: '사이드바 열림 상태',
            table: {
                type: {summary: 'boolean'},
                defaultValue: {summary: 'false'},
            },
        },
    },
};

export default meta;
export const Open: Story = {
    args: {
        isOpen: true,
    },
    parameters: {
        docs: {
            description: {
                story: '사이드바가 열려있을 때의 헤더 상태를 보여줍니다.',
            },
        },
    },
};

/**
 * 사이드바가 닫힌 상태의 헤더 컴포넌트입니다.
 * 제한된 공간에 콘텐츠가 표시됩니다.
 */
export const Closed: Story = {
    args: {
        isOpen: false,
    },
    parameters: {
        docs: {
            description: {
                story: '사이드바가 닫혀있을 때의 헤더 상태를 보여줍니다.',
            },
        },
    },
};