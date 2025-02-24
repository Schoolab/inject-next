import type { Meta, StoryObj } from '@storybook/react';
import { ManagePagesEditEmpty } from '@/app/pages/manage/pages/ManagePagesEditEmpty';

const meta = {
  title: 'Pages/Manage/Pages',
  component: ManagePagesEditEmpty,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ManagePagesEditEmpty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EditEmpty: Story = {};
