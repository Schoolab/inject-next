import type { Meta, StoryObj } from '@storybook/react';
import { JuryEvaluationProject } from '@/app/pages/jury/evaluation-project/JuryEvaluationProject';

const meta = {
  title: 'Pages/Jury/Evaluation Project',
  component: JuryEvaluationProject,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof JuryEvaluationProject>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EvaluationProject: Story = {};



