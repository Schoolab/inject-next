import type { Meta, StoryObj } from '@storybook/react';
import { UserSettingsProfile } from '@/app/pages/user/studies/settings/profile/UserSettingsProfile';

const meta = {
  title: 'Pages/User/Studies/Settings',
  component: UserSettingsProfile,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof UserSettingsProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Profile: Story = {};
