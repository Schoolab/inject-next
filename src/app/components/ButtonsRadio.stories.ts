import type { Meta, StoryObj } from "@storybook/react";
import { ButtonsRadio } from "@/app/components/ButtonsRadio";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Buttons/Radio",
  component: ButtonsRadio,
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
  argTypes: {},

  args: {
    options: [
      { label: "Active", active: true },
      { label: "Radio" },
      { label: "Radio" },
    ],
  },
  
} satisfies Meta<typeof ButtonsRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args


export const Default: Story = {
  args: {
  },
};