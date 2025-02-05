import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../app/components/Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Buttons/Button",
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
    disabled: { control: "boolean" },
    isActive: { control: "boolean" },
    isLoading: { control: "boolean" },
    hasDropdown: { control: "boolean" },
    extended: { control: "boolean" },
    outlined: { control: "boolean" },
  },
  args:{
    disabled: false,
    isActive: false,
    hasDropdown: false,
    type: "default",
    size: "default",
    extended: false,
    outlined: false,
    label: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    iconStartName: "link",
    type: "default",
  },
};

export const Loading: Story = {
  args: {
    iconStartName: "link",
    type: "default",
    isLoading: true,
  },
};

export const Active: Story = {
  args: {   
    isActive: true,
  },
};

export const Dropdown: Story = {
  args: {   
    hasDropdown: true,
  },
};

export const Disabled: Story = {
  args: {
    iconStartName: "link",
    disabled: true,
  },
};

export const Primary: Story = {
  args: {
    iconStartName: "link",
    type: "primary",
  },
};

export const Secondary: Story = {
  args: {
    iconStartName: "link",
    type: "secondary",
  },
};

export const Accent: Story = {
  args: {
    iconStartName: "link",
    type: "accent",
  },
};

export const Assistant: Story = {
  args: {
    iconStartName: "link",
    type: "assistant",
  },
};

export const Muted: Story = {
  args: {
    iconStartName: "link",
    type: "muted",
  },
};

export const Transparent: Story = {
  args: {
    iconStartName: "link",
    type: "transparent",
  },
};

export const Warning: Story = {
  args: {
    iconStartName: "link",
    type: "warning",
  },
};

export const Danger: Story = {
  args: {
    iconStartName: "link",
    type: "danger",
  },
};

export const Service: Story = {
  args: {
    iconStartImage: "img/platform-google.png",
    addClass: "btn-service",
  },
};

export const SSO: Story = {
  args: {
    type: "sso",
    iconStartName: "service-sso",
    addClass: "btn-service",
  },
};