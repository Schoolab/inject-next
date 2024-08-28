import type { Meta, StoryObj } from '@storybook/react';
import { ProgramUserParticipations } from '@/app/pages/program/user/ProgramUserParticipations';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#Carousel-export
const meta = {
  title: 'Pages/Program/User/Participations',
  component: ProgramUserParticipations,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ProgramUserParticipations>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Participations: Story = {};



