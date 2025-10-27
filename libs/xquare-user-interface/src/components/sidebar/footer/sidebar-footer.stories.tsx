import type {Meta, StoryObj} from '@storybook/react';
import {SidebarFooter} from './sidebar-footer';

type Story = StoryObj<typeof SidebarFooter>;

const meta: Meta<typeof SidebarFooter> = {
    component: SidebarFooter,
    title: 'Sidebar/Footer',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '사이드바 푸터 컴포넌트로, 사용자 정보와 현재 프로젝트를 표시합니다. 사이드바의 최하단에 위치합니다.',
            },
        },
    },
    argTypes: {
        name: {
            control: 'text',
            description: '사용자 이름',
            table: {
                type: {summary: 'string'},
            },
        },
        project: {
            control: 'text',
            description: '프로젝트 이름',
            table: {
                type: {summary: 'string'},
            },
        },
    },
};

export default meta;

/**
 * 기본 푸터 컴포넌트입니다.
 * 사용자 이름과 프로젝트 정보를 표시합니다.
 */
export const Default: Story = {
    args: {
        name: '강은찬',
        project: 'XQUARE',
    },
    parameters: {
        docs: {
            description: {
                story: '사용자 이름과 현재 프로젝트를 표시하는 기본 푸터 상태입니다.',
            },
        },
    },
};

/**
 * 다른 사용자와 프로젝트로 표시된 푸터입니다.
 */
export const Alternative: Story = {
    args: {
        name: '홍길동',
        project: 'DESIGN-SYSTEM',
    },
    parameters: {
        docs: {
            description: {
                story: '다양한 사용자 이름과 프로젝트 이름으로 표시될 수 있습니다.',
            },
        },
    },
};