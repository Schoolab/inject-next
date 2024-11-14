import type { Meta, StoryObj } from "@storybook/react";
import { FormGroup } from "@/app/components/forms/FormGroup";

import * as FormInputStories from './FormInput.stories';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Form",
  component: FormGroup,
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
    required: { control: "boolean" },
  },
  args:{
    required: false
  },
} satisfies Meta<typeof FormGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    id: "name",
    label: "Name",
    hint: "This is visible to participants on courses list.",
    placeholder: "A short name",
    required: true,
  },
};
