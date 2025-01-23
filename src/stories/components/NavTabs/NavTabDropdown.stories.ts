import type { Meta, StoryObj } from '@storybook/react';
import { NavTabDropdown } from "@/app/components/nav-tabs/NavTabDropdown";

const meta = {
  title: 'Components/NavTabs/Nav Dropdown',
  component: NavTabDropdown,
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
    dropdownItems: [
        {
            label: "Label",
            href: "#",
        },
        {
            label: "Label",
            href: "#",
        }
    ]
  },

} satisfies Meta<typeof NavTabDropdown>;

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