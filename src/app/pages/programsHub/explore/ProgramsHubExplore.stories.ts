import type { Meta, StoryObj } from '@storybook/react';
import { ProgramsHubExplore } from '@/app/pages/programsHub/explore/programsHubExplore';

const meta = {
  title: 'Pages/Programs Hub/Explore',
  component: ProgramsHubExplore,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ProgramsHubExplore>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Explore: Story = {};



