import type { Meta, StoryObj } from '@storybook/react';
import { ProgramLanding } from '@/app/pages/program/landing/ProgramLanding';

const meta = {
  title: 'Pages/Program/Landing',
  component: ProgramLanding,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ProgramLanding>;

export default meta;
type Story = StoryObj<typeof meta>;

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