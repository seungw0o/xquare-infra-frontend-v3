import type { Meta, StoryObj } from "@storybook/react-vite";
import { Menu } from "./menu";

const meta: Meta<typeof Menu> = {
  title: "components/Menu",
  component: Menu,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    options: {
      description: "메뉴 아이템 배열",
      control: "object",
    },
    onSelect: {
      description: "메뉴 아이템 선택 시 호출되는 콜백 함수",
      action: "selected",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  args: {
    options: [
      { value: "Summary", label: "Summary" },
      { value: "Deployment", label: "Deployment" },
      { value: "Secret", label: "Secret" },
      { value: "Log", label: "Log" },
    ],
  },
};
