import type { Meta, StoryObj } from "@storybook/react";
import { Folders } from "@/app/content/folders/Folders";

const meta = {
  title: "Content/Folders",
  component: Folders,
  parameters: {
    layout: "padded",
    docs: {
      controls: { sort: "requiredFirst" },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
  args:{},
} satisfies Meta<typeof Folders>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
