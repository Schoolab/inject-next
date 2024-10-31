import type { Meta, StoryObj } from "@storybook/react";
import { EmptyState } from "@/app/components/EmptyState";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/EmptyState",
  component: EmptyState,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "padded",
    docs: {
      controls: { sort: "requiredFirst" },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs

} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title: "No category", 
    text: "Your category will be listed here", 
    iconTitle: "newspaper-variant-outline",
    iconBtn: "plus-circle",
    labelBtn: "Add category",
    labelLink: "learn more about category",
  },
};

export const Newsfeed: Story = {
  args: {
    title: "No Newsfeed", 
    text: "Your Newsfeed will be listed here", 
    iconTitle: "newspaper-variant-outline",
  },
};


