import type { Meta, StoryObj } from '@storybook/react';
import { ProjectOverview } from '@/app/pages/project/overview/ProjectOverview';

const meta = {
  title: 'Pages/Project/Overview',
  component: ProjectOverview,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ProjectOverview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {};



