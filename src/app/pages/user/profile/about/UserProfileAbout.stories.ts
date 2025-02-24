import type { Meta, StoryObj } from '@storybook/react';
import { UserProfileAbout } from '@/app/pages/user/profile/about/UserProfileAbout';

const meta = {
  title: 'Pages/User/Profile',
  component: UserProfileAbout,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof UserProfileAbout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const About: Story = {};



