import type { Meta, StoryObj } from "@storybook/react";
import FormConditional from "@/app/forms/FormConditional";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Forms/Conditional",
  component: FormConditional,
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

  },
  args:{
    type: "checkbox",
    id: "id",
    label: "Label",
    card: true,
    checked: false
  },
} satisfies Meta<typeof FormConditional>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Conditional: Story = {
  args: {}
}