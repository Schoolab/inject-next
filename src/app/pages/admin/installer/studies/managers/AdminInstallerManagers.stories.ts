import type { Meta, StoryObj } from '@storybook/react';
import { AdminInstallerManagers } from '@/app/pages/admin/installer/studies/managers/AdminInstallerManagers';

const meta = {
  title: 'Pages/Admin/Installer/Studies',
  component: AdminInstallerManagers,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AdminInstallerManagers>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Managers: Story = {};
