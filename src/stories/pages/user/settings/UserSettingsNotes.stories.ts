import type { Meta, StoryObj } from '@storybook/react';
import { UserSettingsNotes } from '@/app/pages/user/studies/settings/UserSettingsNotes';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#Carousel-export
const meta = {
  title: 'Pages/User/Studies/Settings',
  component: UserSettingsNotes,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof UserSettingsNotes>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Notes: Story = {};
