import type { Meta, StoryObj } from "@storybook/react";
import { FormGroup } from "@/app/forms/group/FormGroup";

const meta = {
  title: "Forms/Form Group",
  component: FormGroup,
  parameters: {
    layout: "padded",
    docs: {
      controls: { sort: "requiredFirst" },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    required: { control: "boolean" },
    hint: { control: 'text' }
  },
  args:{
    required: false
  },
} satisfies Meta<typeof FormGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "name",
    label: "Name",
    required: false,
  },
};

export const Hint: Story = {
  args: {
    id: "name",
    label: "Name",
    hint: "This is visible to participants on courses list.",
    required: false,
  },
};

export const Required: Story = {
  args: {
    id: "name",
    label: "Name",
    hint: "This is visible to participants on courses list.",
    required: true,
  },
};
