import type { Meta, StoryObj } from '@storybook/react';
import { SidebarAdmin } from '@/app/components/sidebar/SidebarAdmin';

const meta = {
  title: 'Components/Sidebar/Admin',
  component: SidebarAdmin,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },

} satisfies Meta<typeof SidebarAdmin>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Admin: Story = {
};




