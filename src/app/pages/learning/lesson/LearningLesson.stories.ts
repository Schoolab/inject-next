import type { Meta, StoryObj } from '@storybook/react';
import { LearningLesson } from '@/app/pages/learning/lesson/LearningLesson';

const meta = {
  title: 'Pages/Learning/Lesson',
  component: LearningLesson,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof LearningLesson>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Lesson: Story = {};



