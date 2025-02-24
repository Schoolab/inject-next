import type { Meta, StoryObj } from '@storybook/react';
import { ProgramEvent } from '@/app/pages/program/event/ProgramEvent';

const meta = {
  title: 'Pages/Program/Event',
  component: ProgramEvent,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ProgramEvent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Event: Story = {};



