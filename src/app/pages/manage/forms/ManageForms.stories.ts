import type { Meta, StoryObj } from '@storybook/react';
import { ManageForms } from '@/app/pages/manage/forms/ManageForms';

const meta = {
  title: 'Pages/Manage/Forms',
  component: ManageForms,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ManageForms>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Forms: Story = {};
