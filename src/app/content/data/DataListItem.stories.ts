import type { Meta, StoryObj } from '@storybook/react';
import { DataListItem } from "@/app/content/data/DataListItem";

const meta = {
  title: 'Content/Data/Item',
  component: DataListItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {},
  args: {
    label: "Label",
  },

} satisfies Meta<typeof DataListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Vertical: Story = {
  args: {
    direction: "vertical",
  },
};

export const Horizontal: Story = {
  args: {
    direction: "horizontal",
  },
};
