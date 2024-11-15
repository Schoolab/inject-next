import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "@/app/components/Alert";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "padded",
    docs: {
      controls: { sort: "requiredFirst" },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args


export const Primary: Story = {
  args: {
    title: "Title",
    text: "This is a primary alert—check it out!",
    buttonLabel:"Learn more",
    type: "primary",
  },
};

export const Secondary: Story = {
  args: {
    title: "Title",
    text: "This is a primary alert—check it out!",
    buttonLabel:"Learn more",
    type: "secondary",
  },
};

export const Info: Story = {
  args: {
    icon: "information",
    title: "Title",
    text: "This is a info alert—check it out!",
    buttonLabel:"Learn more",
    type: "info",
  },
};

export const Success: Story = {
  args: {
    icon: "check-circle",
    title: "Title",
    text: "This is a success alert—check it out!",
    type: "success",
  },
};

export const Warning: Story = {
  args: {
    icon: "alert",
    title: "Title",
    text: "This is a warning alert—check it out!",
    buttonLabel:"Review",
    type: "warning",
  },
};

export const Danger: Story = {
  args: {
    icon: "alert-circle",
    title: "Title",
    text: "This is a danger alert—check it out!",
    buttonLabel: "Delete permanently",
    type: "danger",
  },
};