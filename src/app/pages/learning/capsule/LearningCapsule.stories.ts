import type { Meta, StoryObj } from '@storybook/react';
import { LearningCapsule } from '@/app/pages/learning/capsule/LearningCapsule';

const meta = {
  title: 'Pages/Learning/Capsule',
  component: LearningCapsule,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof LearningCapsule>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Capsule: Story = {};



