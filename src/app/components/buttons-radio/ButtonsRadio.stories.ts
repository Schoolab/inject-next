import type { Meta, StoryObj } from "@storybook/react";
import { ButtonsRadio } from "@/app/components/buttons-radio/ButtonsRadio";

const meta = {
  title: "Components/Buttons/Radio",
  component: ButtonsRadio,
  parameters: {
    layout: "padded",
    docs: {
      controls: { sort: "requiredFirst" },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    options: [
      { label: "Active", active: true },
      { label: "Radio" },
      { label: "Radio" },
    ],
  },
  
} satisfies Meta<typeof ButtonsRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};