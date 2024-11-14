import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "../../app/components/Progress";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Progress",
  component: Progress,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "padded",
    docs: {
      controls: { sort: "requiredFirst" },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {

  },
  args:{

  },
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