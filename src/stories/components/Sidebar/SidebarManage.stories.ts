import type { Meta, StoryObj } from '@storybook/react';
import { SidebarManage } from '@/app/components/sidebar/SidebarManage';

const meta = {
  title: 'Components/Sidebar/Manage',
  component: SidebarManage,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },

} satisfies Meta<typeof SidebarManage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Manage: Story = {
};




