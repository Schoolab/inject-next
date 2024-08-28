import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../app/components/Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Button",
  component: Button,
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
    isActive: { control: "boolean" },
    extended: { control: "boolean" },
  },
  args:{
    isActive: false,
    type: "default",
    size: "default",
    extended: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    iconStartName: "link",
    label: "Button",
    type: "default",
  },
};

export const Active: Story = {
  args: {
    iconStartName: "link",
    label: "Button",   
    isActive: true,
  },
};

export const Primary: Story = {
  args: {
    iconStartName: "link",
    label: "Button",
    type: "primary",
  },
};

export const Transparent: Story = {
  args: {
    iconStartName: "link",
    label: "Button",
    type: "transparent",
  },
};
export const Danger: Story = {
  args: {
    iconStartName: "link",
    label: "Button",
    type: "danger",
  },
};
export const Warning: Story = {
  args: {
    iconStartName: "link",
    label: "Button",
    type: "warning",
  },
};
export const Secondary: Story = {
  args: {
    iconStartName: "link",
    label: "Button",
    type: "secondary",
  },
};
export const Muted: Story = {
  args: {
    iconStartName: "link",
    label: "Button",
    type: "muted",
  },
};
