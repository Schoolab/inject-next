import type { Meta, StoryObj } from '@storybook/react';
import { SidebarItem } from '@/app/components/sidebar/SidebarItem';

const meta = {
  title: 'Components/Sidebar Item',
  component: SidebarItem,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    docs: {
      controls: { sort: "requiredFirst" },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    href: { control: "text" },
    icon: { control: "text" },
    newFeature: { control: "boolean" },
    notif: { control: "number" },
    newTab: { control: "boolean" },
  },
  args: {
    label: "Label",
    href: "#",
    newFeature: false,
    notif: 0,
    newTab: false,
    style: {
      // width: "24rem",
    },
  },
} satisfies Meta<typeof SidebarItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};

export const Active: Story = {
  args: {
    active: true,
  },
};

export const Icon: Story = {
  args: {
    icon: "home",
  },
};

export const Locked: Story = {
  args: {
    locked: true,
  },
};

export const Notif: Story = {
  args: {
    notif: 1,
  },
};

export const NewFeature: Story = {
  args: {
    newFeature: true,
  },
};

export const NewTab: Story = {
  args: {
    newTab: true,
  },
};

