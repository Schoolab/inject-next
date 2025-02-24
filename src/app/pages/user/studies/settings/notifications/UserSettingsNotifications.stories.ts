import type { Meta, StoryObj } from '@storybook/react';
import { UserSettingsNotifications } from '@/app/pages/user/studies/settings/notifications/UserSettingsNotifications';

const meta = {
  title: 'Pages/User/Studies/Settings',
  component: UserSettingsNotifications,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof UserSettingsNotifications>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Notifications: Story = {};
