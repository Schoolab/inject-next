import type { Meta, StoryObj } from '@storybook/react';
import { UserProfileParticipations } from '@/app/pages/user/profile/UserProfileParticipations';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#Carousel-export
const meta = {
  title: 'Pages/User/Profile',
  component: UserProfileParticipations,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof UserProfileParticipations>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Participations: Story = {};



