import type { Meta, StoryObj } from "@storybook/react";
import { FormInputWrapper } from "@/app/forms/input-wrapper/FormInputWrapper";

const meta = {
  title: "Forms/Input Wrapper",
  component: FormInputWrapper,
  parameters: {
    layout: "padded",
    docs: {
      controls: { sort: "requiredFirst" },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
  args:{},
} satisfies Meta<typeof FormInputWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
