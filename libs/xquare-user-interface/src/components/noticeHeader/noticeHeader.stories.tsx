import type { Meta, StoryObj } from "@storybook/react-vite";
import { NoticeHeader } from "./noticeHeader";

const meta: Meta<typeof NoticeHeader> = {
  title: "components/NoticeHeader",
  component: NoticeHeader,
  tags: ["autodocs"],
  args: {
    title: "XQUARE INFRASTRUCTURE VERSION 2 지원 종료 안내",
    date: "2025-11-03",
  },
  argTypes: {
    title: {
      control: "text",
      description: "공지사항의 제목",
    },
    date: {
      control: "text",
      description: "공지사항 생성 날짜",
    },
  },
};

export default meta;
type Story = StoryObj<typeof NoticeHeader>;

export const Default: Story = {};
