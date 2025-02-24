import type { Meta, StoryObj } from '@storybook/react';
import { ApplicationForm } from '@/app/pages/application/form/ApplicationForm';

const meta = {
  title: 'Pages/Application/Form',
  component: ApplicationForm,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ApplicationForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Form: Story = {};



