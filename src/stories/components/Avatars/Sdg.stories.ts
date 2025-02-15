import type { Meta, StoryObj } from "@storybook/react";
import { Sdg } from "@/app/components/avatars/Sdg";

const meta = {
    title: "Components/Avatars/Sdg",
    component: Sdg,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
      size: { control: "radio" },
      number: { control: { type: "number", min: 1, max: 17 } },
    },
    args: {
      number: 1,
      size: "24px",
    },
} satisfies Meta<typeof Sdg>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const Small: Story = {
  args: {
    size: "16px",
  },
};

export const One: Story = {
  args: {
    number: 1,
    size: "24px",
  },
};

export const Seventeen: Story = {
  args: {
    number: 17,
    size: "24px",
  },
};
