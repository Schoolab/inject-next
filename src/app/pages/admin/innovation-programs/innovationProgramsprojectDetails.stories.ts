import type { Meta, StoryObj } from '@storybook/react';
import { innovationProgramsprojectDetails } from './innovationProgramsprojectDetails';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/Admin/Innovation programs/Project',
  component: innovationProgramsprojectDetails,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof innovationProgramsprojectDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Project: Story = {};



