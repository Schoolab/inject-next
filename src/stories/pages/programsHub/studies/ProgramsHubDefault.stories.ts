import type { Meta, StoryObj } from '@storybook/react';
import { ProgramsHubDefault } from '@/app/pages/programsHub/studies/programsHubDefault';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#Carousel-export
const meta = {
  title: 'Pages/Programs Hub/studies/Default',
  component: ProgramsHubDefault,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ProgramsHubDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {};



