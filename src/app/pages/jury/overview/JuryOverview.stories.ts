import type { Meta, StoryObj } from '@storybook/react';
import { JuryOverview } from '@/app/pages/jury/overview/JuryOverview';

const meta = {
  title: 'Pages/Jury/Overview',
  component: JuryOverview,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof JuryOverview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {};



