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
        isExpanded: {
            control: 'boolean',
            description: '사이드바 확장 상태',
            table: {
                type: {summary: 'boolean'},
                defaultValue: {summary: 'false'},
            },
        },
    },
};

export default meta;

export const Collapsed: Story = {
    args: {
        isExpanded: false,
    },
    parameters: {
        docs: {
            description: {
                story: '사이드바가 축소된 상태의 헤더입니다. "DSM 배포 플랫폼" 텍스트가 표시됩니다.',
            },
        },
    },
};

export const Expanded: Story = {
    args: {
        isExpanded: true,
    },
    parameters: {
        docs: {
            description: {
                story: '사이드바가 확장된 상태의 헤더입니다. "대덕소프트웨어마이스터고등학교 배포 플랫폼" 텍스트가 표시됩니다.',
            },
        },
    },
};