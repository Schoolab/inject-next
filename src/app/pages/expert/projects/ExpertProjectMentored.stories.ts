import type { Meta, StoryObj } from '@storybook/react';
import { ExpertProjectMentored } from '@/app/pages/expert/projects/ExpertProjectMentored';

const meta = {
  title: 'Pages/Expert/Project Mentored',
  component: ExpertProjectMentored,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ExpertProjectMentored>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProjectMentored: Story = {};



