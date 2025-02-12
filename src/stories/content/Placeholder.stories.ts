import type { Meta, StoryObj } from "@storybook/react";
import { Placeholder } from "@/app/content/Placeholder";

const meta = {
  title: "Content/Placeholder",
  component: Placeholder,
  parameters: {
    layout: "padded",
    docs: {
      controls: { sort: "requiredFirst" },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
  args:{},
} satisfies Meta<typeof Placeholder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
