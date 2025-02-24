import type { Meta, StoryObj } from '@storybook/react';
import { AdminInstallerProperties } from '@/app/pages/admin/installer/studies/properties/AdminInstallerProperties';

const meta = {
  title: 'Pages/Admin/Installer/Studies',
  component: AdminInstallerProperties,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AdminInstallerProperties>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Properties: Story = {};
