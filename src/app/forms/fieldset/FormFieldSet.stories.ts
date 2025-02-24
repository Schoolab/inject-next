import type { Meta, StoryObj } from "@storybook/react";
import { FormFieldSet } from "@/app/forms/fieldset/FormFieldSet";

const meta = {
  title: "Forms/Form Fieldset",
  component: FormFieldSet,
  parameters: {
    layout: "padded",
    docs: {
      controls: { sort: "requiredFirst" },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
  },
  args:{
    name: "name",
    legend: "Name",
    disabled: false,
  },
} satisfies Meta<typeof FormFieldSet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Grid: Story = {
  args: {
    grid: true,
  },
};
