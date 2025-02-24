import type { Meta, StoryObj } from '@storybook/react';
import { JurySessionProjects } from '@/app/pages/jury/projects/JurySessionProjects';

const meta = {
  title: 'Pages/Jury/Session Projects',
  component: JurySessionProjects,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof JurySessionProjects>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SessionProjects: Story = {};



