import type { Meta, StoryObj } from '@storybook/react';
import { AppContent } from '@/app/layouts/AppContent';

const meta = {
  title: 'Layouts/AppContent',
  component: AppContent,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    showBreadcrumb: false,
    showTitle: false,
    showSubnav: false,
    showStepper: false,
    showFooter: false,
  },
} satisfies Meta<typeof AppContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
}

export const PageHeader: Story = {
  args: {
    showBreadcrumb: true,
    showTitle: true,
    showSubnav: true,
    subnav: [
      {
        label: 'Active',
        href: '#',
        isActive: true,
      },
      {
        label: 'Label',
        href: '#',
      },
      {
        label: 'Dropdown',
        href: '#',
        hasDropdown: true,
        dropdownItems: [
          {
            label: 'Label',
            href: '#',
          },
          {
            label: 'Label',
            href: '#',
          },
        ]
      },
    ]
  }
}

export const Stepper: Story = {
  args: {
    showBreadcrumb: true,
    showTitle: true,
    showSubnav: false,
    showStepper: true,
  }
}

export const Footer: Story = {
  args: {
    showFooter: true,
  }
}