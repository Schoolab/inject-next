import type { Meta, StoryObj } from '@storybook/react';
import { JuryResults } from './JuryResults';

const meta = {
  title: 'Pages/Manage/Jury/Results',
  component: JuryResults,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof JuryResults>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Results: Story = {};



