import type { Meta, StoryObj } from '@storybook/react';
import { ManageApplicationForms } from '@/app/pages/manage/application-forms/ManageApplicationForms';

const meta = {
  title: 'Pages/Manage/ApplicationForms',
  component: ManageApplicationForms,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ManageApplicationForms>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ApplicationForms: Story = {};



