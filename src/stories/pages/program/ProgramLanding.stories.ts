import type { Meta, StoryObj } from '@storybook/react';
import { ProgramLanding } from '@/app/pages/program/ProgramLanding';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/Program/Landing',
  component: ProgramLanding,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ProgramLanding>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    theme: "default",
  },
};

export const Inject: Story = {
  args: {
    theme: "Inject",
  },
};

export const Schoolab: Story = {
  args: {
    theme: "Schoolab",
  },
};

export const Moho: Story = {
  args: {
    theme: "Moho",
  },
};

export const Raiselab: Story = {
  args: {
    theme: "Raiselab",
  },
};