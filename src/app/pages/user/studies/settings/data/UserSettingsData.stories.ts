import type { Meta, StoryObj } from '@storybook/react';
import { UserSettingsData } from '@/app/pages/user/studies/settings/data/UserSettingsData';

const meta = {
  title: 'Pages/User/Studies/Settings',
  component: UserSettingsData,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof UserSettingsData>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Data: Story = {};
