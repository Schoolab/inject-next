import type { Meta, StoryObj } from '@storybook/react';
import { ProgramsHubEvents } from '@/app/pages/programsHub/events/programsHubEvents';

const meta = {
  title: 'Pages/Programs Hub/Events',
  component: ProgramsHubEvents,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ProgramsHubEvents>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Events: Story = {};



