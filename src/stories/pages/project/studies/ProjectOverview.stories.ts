import type { Meta, StoryObj } from '@storybook/react';
import { ProjectOverview } from '@/app/pages/project/Studies/ProjectOverview';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#Carousel-export
const meta = {
  title: 'Pages/Project/Studies/Overview',
  component: ProjectOverview,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ProjectOverview>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Overview: Story = {};



