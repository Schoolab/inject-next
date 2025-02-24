import type { Meta, StoryObj } from '@storybook/react';
import { ProjectLandingPage } from '@/app/pages/project/landing/ProjectLandingPage';

const meta = {
  title: 'Pages/Project/LandingPage',
  component: ProjectLandingPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ProjectLandingPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LandingPage: Story = {};



