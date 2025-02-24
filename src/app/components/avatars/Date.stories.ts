import type { Meta, StoryObj } from "@storybook/react";
import { Date } from "@/app/components/avatars/Date";

const meta = {
    title: "Components/Avatars/Date",
    component: Date,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
    },
    args: {
      month: "Feb",
      day: "14",
      size: "lg",
    },
} satisfies Meta<typeof Date>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const Medium: Story = {
  args: {
    size: "md",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

