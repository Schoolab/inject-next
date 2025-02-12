import type { Meta, StoryObj } from '@storybook/react';
import { DataListItem } from "@/app/content/data/DataListItem";

const meta = {
  title: 'Content/Data/Item',
  component: DataListItem,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
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