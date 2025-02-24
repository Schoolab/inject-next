import type { Meta, StoryObj } from '@storybook/react';
import { ProgramHubMyDashboard } from '@/app/pages/programsHub/my-dashboard/ProgramHubMyDashboard';

const meta = {
  title: 'Pages/Programs Hub/MyDashboard',
  component: ProgramHubMyDashboard,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ProgramHubMyDashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MySpace: Story = {};
