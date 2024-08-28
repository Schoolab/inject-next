import type { Meta, StoryObj } from '@storybook/react';
import { SidebarManageOld } from '@/app/components/sidebar/SidebarManageOld';

const meta = {
  title: 'Components/Sidebar/ManageOld',
  component: SidebarManageOld,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },

} satisfies Meta<typeof SidebarManageOld>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ManageOld: Story = {
};




