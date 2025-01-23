import type { Meta, StoryObj } from '@storybook/react';
import { NavTab } from "@/app/components/nav-tabs/NavTab";

const meta = {
  title: 'Components/NavTabs/NavTab',
  component: NavTab,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'padded',
  },
  argTypes: {
  },

} satisfies Meta<typeof NavTab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
