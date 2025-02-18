import type { Meta, StoryObj } from '@storybook/react';
import { ManageDashboard } from '@/app/pages/manage/ManageDashboard';

const meta = {
  title: 'Pages/Manage/Dashboard',
  component: ManageDashboard,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ManageDashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dashboard: Story = {};



