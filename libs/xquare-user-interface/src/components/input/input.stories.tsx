import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn, userEvent, within, expect } from "storybook/test";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  title: "components/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    onChange: fn(),
    value: "",
    placeholder: "텍스트를 입력해주세요.",
    $width: "300px",
    $errorMessage: "",
  },
  argTypes: {
    value: {
      control: "text",
      description: "인풋의 값",
    },
    onChange: {
      action: "changed",
      description: "값이 변경될 때 호출되는 이벤트 핸들러",
    },
    placeholder: {
      control: "text",
      description: "인풋에 표시될 플레이스홀더 텍스트",
    },
    $width: {
      control: "text",
      description: "인풋의 너비",
    },
    $errorMessage: {
      control: "text",
      description: "에러 상태일 때 표시될 메시지",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    await userEvent.type(input, "Hello world!");
    await expect(args.onChange).toHaveBeenCalled();
  },
};

export const Error: Story = {
  args: {
    $errorMessage: "에러가 발생했습니다.",
    value: "error",
  },
};
