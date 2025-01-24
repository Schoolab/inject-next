import type { Meta, StoryObj } from '@storybook/react';
import { ProgramDashboardEvents } from '@/app/pages/program/dashboard/ProgramDashboardEvents';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#Carousel-export
const meta = {
  title: 'Pages/Program/Dashboard',
  component: ProgramDashboardEvents,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ProgramDashboardEvents>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Events: Story = {};



