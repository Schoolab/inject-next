import type { Meta, StoryObj } from '@storybook/react';
import { Layout } from '@/app/layouts/layout';

const meta = {
  title: 'Layouts/App',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    hub: {
      control: 'boolean',
    },
    sideBar: {
      control: 'radio',
      options: ['None', 'Admin', 'Manage'],
    },
    showNavbar: {
      control: 'boolean',
    },
    showShortcutbar: {
      control: 'boolean',
    },
    shortcutBarExpanded: {
      control: 'boolean',
    },
  },
  args: {
    showNavbar: true,
    showShortcutbar: true,
    sideBar: 'None',
    hub: false,
    shortcutBarExpanded: true,
  },
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
}

export const Hub: Story = {
  args: {
    hub: true,
    showShortcutbar: false,
  }
}

export const Manage: Story = {
  args: {
    sideBar: 'Manage',
    shortcutBarExpanded: false,
  }
}

export const Admin: Story = {
  args: {
    sideBar: 'Admin',
    shortcutBarExpanded: false,
  }
}