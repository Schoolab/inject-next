import type { Meta, StoryObj } from '@storybook/react';
import { SidebarDefault } from '@/app/components/sidebar/SidebarDefault';

const meta = {
  title: 'Components/Sidebar/Default',
  component: SidebarDefault,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },

} satisfies Meta<typeof SidebarDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};




