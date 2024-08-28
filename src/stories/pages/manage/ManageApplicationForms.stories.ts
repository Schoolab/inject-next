import type { Meta, StoryObj } from '@storybook/react';
import { ManageApplicationForms } from '@/app/pages/manage/ManageApplicationForms';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/Manage/ApplicationForms',
  component: ManageApplicationForms,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ManageApplicationForms>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ApplicationForms: Story = {};



