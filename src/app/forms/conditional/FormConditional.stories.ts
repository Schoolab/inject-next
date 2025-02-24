import type { Meta, StoryObj } from "@storybook/react";
import FormConditional from "@/app/forms/conditional/FormConditional";

const meta = {
  title: "Forms/Conditional",
  component: FormConditional,
  parameters: {
    layout: "padded",
    docs: {
      controls: { sort: "requiredFirst" },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
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

export const Conditional: Story = {
  args: {}
}