import type { Meta, StoryObj } from '@storybook/react';
import { ExpertOverview } from '@/app/pages/expert/overview/ExpertOverview';

const meta = {
  title: 'Pages/Expert/Overview',
  component: ExpertOverview,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ExpertOverview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {};



