import type { Meta, StoryObj } from "@storybook/react";
import { EmptyState } from "@/app/content/empty-states/EmptyState";

const meta = {
  title: "Content/EmptyState",
  component: EmptyState,
  parameters: {
    layout: "padded",
    docs: {
      controls: { sort: "requiredFirst" },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    text: { control: "text" },
    iconTitle: { control: "text" },
    iconBtn: { control: "text" },
    labelBtn: { control: "text" },
  },
  args: {
    title: "No category", 
    text: "Your category will be listed here", 
    iconTitle: "tag",
  },

} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Button: Story = {
  args: {
    iconBtn: "plus-circle",
    labelBtn: "Add category",
    labelLink: "Learn more about categories",
  },
};


