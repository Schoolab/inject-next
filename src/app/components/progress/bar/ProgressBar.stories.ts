import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "@/app/components/progress/bar/ProgressBar";

const meta = {
  title: "Components/Progress/Bar",
  component: ProgressBar,
  parameters: {
    layout: "padded",
    docs: {
      controls: { sort: "requiredFirst" },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
  args:{},
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const Inline: Story = {
  args: {
    inline: true,
  },
};

export const Incomplete: Story = {
    args: {
        percentage: 25,
        text: "25%",

    },
};

export const Completed: Story = {
    args: {
        percentage: 100,
        text: "100%",
    },
};