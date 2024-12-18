import type { Meta, StoryObj } from "@storybook/react";
import { StatCard } from "../../app/components/StatCard";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/StatCard",
  component: StatCard,
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
    warning: { control: "boolean" },
  },
  args:{
    warning: false,
  },
} satisfies Meta<typeof StatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    number: 13,
    caption: "Ongoing registrations (> 2 days)",
    warning: true,
    variation: 0,
  },
};

export const Up: Story = {
  args: {
    number: 13,
    caption: "Ongoing registrations (> 2 days)",
    warning: true,
    variation: 2,
  },
};

export const Down: Story = {
  args: {
    number: 13,
    caption: "Ongoing registrations (> 2 days)",
    warning: true,
    variation: -2,
  },
};
