import type { Meta, StoryObj } from '@storybook/react';
import { AdminInstallerSdg } from '@/app/pages/admin/installer/studies/sdg/AdminInstallerSdg';

const meta = {
  title: 'Pages/Admin/Installer/Studies',
  component: AdminInstallerSdg,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AdminInstallerSdg>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sdg: Story = {};
