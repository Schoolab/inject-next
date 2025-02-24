import type { Meta, StoryObj } from '@storybook/react';
import { UserSettingsNotes } from '@/app/pages/user/studies/settings/notes/UserSettingsNotes';

const meta = {
  title: 'Pages/User/Studies/Settings',
  component: UserSettingsNotes,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof UserSettingsNotes>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Notes: Story = {};
