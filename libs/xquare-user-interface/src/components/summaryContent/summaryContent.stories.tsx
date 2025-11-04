import type { Meta, StoryObj } from "@storybook/react-vite";
import { SummaryContent } from "./summaryContent";

const meta: Meta<typeof SummaryContent> = {
  title: "components/SummaryContent",
  component: SummaryContent,
  tags: ["autodocs"],
  args: {
    title: "XQUARE INFRASTRUCTURE를 이용하여 50일간 서비스 되었습니다.",
  },
  argTypes: {
    title: {
      control: "text",
      description: "Summary의 제목",
    },
  },
};

export default meta;
type Story = StoryObj<typeof SummaryContent>;

export const Default: Story = {};
