import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "@/app/components/alerts/Alert";

const meta = {
  title: "Components/Alerts",
  component: Alert,
  parameters: {
    layout: "padded",
    docs: {
      controls: { sort: "requiredFirst" },
    },
  },
  tags: ["autodocs"],
  
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

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
    buttonLabel:"Dismiss",
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

export const Interactive: Story = {
  args: {
    icon: "account",
    title: "Title",
    text: "This is an interactive alert—check it out!",
    buttonLabel:"Learn more",
    type: "interactive",
  },
};

export const Accent: Story = {
  args: {
    icon: "alert",
    title: "Title",
    text: "This is an accent alert—check it out!",
    buttonLabel:"Learn more",
    type: "accent",
  },
};

export const Assistant: Story = {
  args: {
    icon: "ai",
    title: "Title",
    text: "This is an assistant alert—check it out!",
    buttonLabel:"Learn more",
    type: "assistant",
  },
};

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
    text: "This is a secondary alert—check it out!",
    buttonLabel:"Learn more",
    type: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    title: "Title",
    text: "This is a tertiary alert—check it out!",
    buttonLabel:"Learn more",
    type: "tertiary",
  },
};