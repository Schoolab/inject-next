import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from "./Pagination";

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'padded',
  },
  argTypes: {
    currentPage: { control: "number" },
    totalPages: { control: "number" },
    prevLink: { control: "text" },
    nextLink: { control: "text" },
  },

} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 4,
    prevLink: "#",
    nextLink: "#",
  },
};
