import type { Meta, StoryObj } from '@storybook/react';
import { JuryEvaluationEmpty } from '@/app/pages/jury/JuryEvaluationEmpty';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/Jury/Evaluation Empty',
  component: JuryEvaluationEmpty,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof JuryEvaluationEmpty>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const EvaluationEmpty: Story = {};



