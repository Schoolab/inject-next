import type { Meta, StoryObj } from '@storybook/react';
import { JurySessionUsers } from '@/app/pages/jury/users/JurySessionUsers';

const meta = {
  title: 'Pages/Jury/Session Users',
  component: JurySessionUsers,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof JurySessionUsers>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SessionUsers: Story = {};



