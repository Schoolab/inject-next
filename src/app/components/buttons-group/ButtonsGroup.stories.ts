import type { Meta, StoryObj } from "@storybook/react";
import { ButtonsGroup } from "@/app/components/buttons-group/ButtonsGroup";

const meta = {
  title: "Components/Buttons/Group",
  component: ButtonsGroup,
  parameters: {
    layout: "padded",
    docs: {
      controls: { sort: "requiredFirst" },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    role: "group",
    ariaLabel: "Buttons group",
    style: {
        width: "256px",
    },
  },
  
} satisfies Meta<typeof ButtonsGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};