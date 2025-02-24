import type { Meta, StoryObj } from '@storybook/react';
import { LearningCapsule } from '@/app/pages/learning/LearningCapsule';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/Learning/Capsule',
  component: LearningCapsule,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof LearningCapsule>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Capsule: Story = {};



