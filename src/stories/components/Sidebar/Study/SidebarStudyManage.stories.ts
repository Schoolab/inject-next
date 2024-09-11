import type { Meta, StoryObj } from '@storybook/react';
import { SidebarStudyManage } from '@/app/components/sidebar/study/SidebarStudyManage';

const meta = {
  title: 'Components/Sidebar/Study/Manage',
  component: SidebarStudyManage,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },

} satisfies Meta<typeof SidebarStudyManage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Manage: Story = {
};
