import type { Meta, StoryObj } from '@storybook/react';
import { SidebarManageOld } from '@/app/components/sidebar/old/SidebarManageOld';

const meta = {
  title: 'Components/Sidebar/Old/Manage',
  component: SidebarManageOld,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },

} satisfies Meta<typeof SidebarManageOld>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Manage: Story = {
};
