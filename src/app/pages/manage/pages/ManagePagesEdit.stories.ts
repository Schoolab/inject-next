import type { Meta, StoryObj } from '@storybook/react';
import { ManagePagesEdit } from '@/app/pages/manage/pages/ManagePagesEdit';

const meta = {
  title: 'Pages/Manage/Pages',
  component: ManagePagesEdit,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ManagePagesEdit>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Edit: Story = {};
