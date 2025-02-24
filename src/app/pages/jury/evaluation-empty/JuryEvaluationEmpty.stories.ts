import type { Meta, StoryObj } from '@storybook/react';
import { JuryEvaluationEmpty } from '@/app/pages/jury/evaluation-empty/JuryEvaluationEmpty';

const meta = {
  title: 'Pages/Jury/Evaluation Empty',
  component: JuryEvaluationEmpty,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof JuryEvaluationEmpty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EvaluationEmpty: Story = {};



