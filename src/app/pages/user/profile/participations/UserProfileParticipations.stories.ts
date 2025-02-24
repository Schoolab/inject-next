import type { Meta, StoryObj } from '@storybook/react';
import { UserProfileParticipations } from '@/app/pages/user/profile/participations/UserProfileParticipations';

const meta = {
  title: 'Pages/User/Profile',
  component: UserProfileParticipations,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof UserProfileParticipations>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Participations: Story = {};



