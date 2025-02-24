import type { Meta, StoryObj } from '@storybook/react';
import { UserSettingsAccount } from '@/app/pages/user/studies/settings/account/UserSettingsAccount';

const meta = {
  title: 'Pages/User/Studies/Settings',
  component: UserSettingsAccount,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof UserSettingsAccount>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Account: Story = {};
