import type { Meta, StoryObj } from '@storybook/react';
import { ApplicationOverview } from '@/app/pages/application/overview/ApplicationOverview';

const meta = {
  title: 'Pages/Application/Overview',
  component: ApplicationOverview,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ApplicationOverview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {};



