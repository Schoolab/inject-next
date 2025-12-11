import type { Meta, StoryObj } from '@storybook/react';
import { SessionJuryFields } from './SessionJuryFields';

const meta = {
  title: 'Pages/Manage/Jury/SessionFields',
  component: SessionJuryFields,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SessionJuryFields>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SessionFields: Story = {};



