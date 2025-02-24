import type { Meta, StoryObj } from "@storybook/react";
import { StatCard } from "@/app/components/stat-cards/StatCard";

const meta = {
  title: "Components/StatCard",
  component: StatCard,
  parameters: {
    layout: "padded",
    docs: {
      controls: { sort: "requiredFirst" },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    warning: { control: "boolean" },
  },
  args:{
    warning: false,
  },
} satisfies Meta<typeof StatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    number: 13,
    caption: "Ongoing registrations (> 2 days)",
    warning: true,
    variation: 0,
  },
};

export const Up: Story = {
  args: {
    number: 13,
    caption: "Ongoing registrations (> 2 days)",
    warning: true,
    variation: 2,
  },
};

export const Down: Story = {
  args: {
    number: 13,
    caption: "Ongoing registrations (> 2 days)",
    warning: true,
    variation: -2,
  },
};
