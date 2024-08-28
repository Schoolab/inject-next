import type { Meta, StoryObj } from '@storybook/react';
import { ProgramDashboardCarousel } from '@/app/pages/program/dashboard/ProgramDashboardCarousel';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#Carousel-export
const meta = {
  title: 'Pages/Program/Dashboard/Carousel',
  component: ProgramDashboardCarousel,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ProgramDashboardCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Carousel: Story = {};



