import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "@/app/components/progress/Progress";

const meta = {
  title: "Components/Progress/Circle",
  component: Progress,
  parameters: {
    layout: "padded",
    docs: {
      controls: { sort: "requiredFirst" },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
  args:{},
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {},
};

export const Incomplete: Story = {
    args: {
        percentage: 13,
        text: "1/8",

    },
};

export const Completed: Story = {
    args: {
        percentage: 100,
        text: "8/8",
    },
};

export const Large: Story = {
    args: {
        percentage: 13,
        text: "1/8",
        size: "lg",
    },
};


export const ExtraLarge: Story = {
    args: {
        percentage: 13,
        text: "1/8",
        subtext: "completed",
        size: "xl",
    },
};

export const DoubleExtraLarge: Story = {
    args: {
        percentage: 50,
        text: "4/8",
        subtext: "completed",
        size: "2xl",
    },
};