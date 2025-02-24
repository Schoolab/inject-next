import type { Meta, StoryObj } from '@storybook/react';
import { JuryEvaluationUser } from '@/app/pages/jury/evaluation-user/JuryEvaluationUser';

const meta = {
  title: 'Pages/Jury/Evaluation User',
  component: JuryEvaluationUser,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof JuryEvaluationUser>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EvaluationUser: Story = {};



