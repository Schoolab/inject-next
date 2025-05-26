import type { Meta, StoryObj } from '@storybook/react';
import { ShortcutBar } from './ShortcutBar';

const meta = {
  title: 'Components/ShortcutBar/Default',
  component: ShortcutBar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  argTypes: {
    isExpanded: { control: "boolean" },
  },

} satisfies Meta<typeof ShortcutBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isExpanded: false,
  },
};

export const Expanded: Story = {
    args: {
      isExpanded: true,
    },
  };



