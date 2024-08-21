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
      buttonLabel:"Action",
      type: "primary",
    },
  };

export const Success: Story = {
  args: {
    title: "Title",
    text: "This is a success alert—check it out!",
    buttonLabel:"Action",
    type: "success",
  },
};

export const Danger: Story = {
    args: {
      title: "Title",
      text: "This is a danger alert—check it out!",
      buttonLabel: "Action",
      type: "danger",
    },
  };

  export const Warning: Story = {
    args: {
      title: "Title",
      text: "This is a warning alert—check it out!",
      buttonLabel:"CTA",
      type: "warning",
    },
  };

  export const Info: Story = {
    args: {
      title: "Title",
      text: "This is a info alert—check it out!",
      buttonLabel:"CTA",
      type: "info",
    },
  };
