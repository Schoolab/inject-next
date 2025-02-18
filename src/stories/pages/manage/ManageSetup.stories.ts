import type { Meta, StoryObj } from '@storybook/react';
import { ManageSetup } from '@/app/pages/manage/ManageSetup';

const meta = {
  title: 'Pages/Manage/Setup',
  component: ManageSetup,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ManageSetup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Setup: Story = {};



