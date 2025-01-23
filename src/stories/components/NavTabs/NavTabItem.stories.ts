import type { Meta, StoryObj } from '@storybook/react';
import { NavTabItem } from "@/app/components/nav-tabs/NavTabItem";

const meta = {
  title: 'Components/NavTabs/Nav Item',
  component: NavTabItem,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'padded',
  },
  argTypes: {
  },

  args: {
    label: "Label",
    href: "#",
  },

} satisfies Meta<typeof NavTabItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Active: Story = {
  args: {
    isActive: true,
  },
};

export const Badge: Story = {
  args: {
    badge: "3",
  },
};


export const Icon: Story = {
    args: {
      icon: "visibility-off",
    },
};

export const Tooltip: Story = {
    args: {
      icon: "visibility-off",
      tooltip: "Only visible to managers",
    },
};