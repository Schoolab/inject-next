import type { Meta, StoryObj } from '@storybook/react';
import { ProgramDashboardDefault } from '@/app/pages/program/dashboard/ProgramDashboardDefault';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/Program/Dashboard',
  component: ProgramDashboardDefault,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ProgramDashboardDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Dashboard: Story = {};



