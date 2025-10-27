import type {Meta, StoryObj} from '@storybook/react';
import {SidebarFooter} from './sidebar-footer';

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof SidebarFooter> = {
    component: SidebarFooter,
    title: 'Sidebar/Footer',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        name: {
            control: 'text',
            description: '사용자 이름',
        },
        project: {
            control: 'text',
            description: '프로젝트 이름',
        },
    },
};

export default meta;

export const Default: Story = {
    args: {
        name: '강은찬',
        project: 'XQUARE',
    },
};