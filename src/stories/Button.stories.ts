import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../app/components/Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    docs: {
      controls: { sort: "requiredFirst" },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    iconStart: { control: "boolean" },
    iconEnd: { control: "boolean" },
    iconStartName: { if: { arg: "iconStart" } },
    iconEndName: { if: { arg: "iconEnd" } },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    iconStart: true,
    iconEnd: false,
    label: "Button",
    type: "default",
  },
};

export const Primary: Story = {
  args: {
    iconStart: true,
    iconEnd: false,
    label: "Button",
    type: "primary",
  },
};

export const Transparent: Story = {
  args: {
    iconStart: true,
    iconEnd: false,
    label: "Button",
    type: "transparent",
  },
};
export const Danger: Story = {
  args: {
    iconStart: true,
    iconEnd: false,
    label: "Button",
    type: "danger",
  },
};
export const Warning: Story = {
  args: {
    iconStart: true,
    iconEnd: false,
    label: "Button",
    type: "warning",
  },
};
export const Secondary: Story = {
  args: {
    iconStart: true,
    iconEnd: false,
    label: "Button",
    type: "secondary",
  },
};
export const Muted: Story = {
  args: {
    iconStart: true,
    iconEnd: false,
    label: "Button",
    type: "muted",
  },
};
