import type { Meta, StoryObj } from '@storybook/react';
import { AdminInstallerBasicInfo } from '@/app/pages/admin/installer/basic-info/AdminInstallerBasicInfo';

const meta = {
  title: 'Pages/Admin/Installer',
  component: AdminInstallerBasicInfo,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AdminInstallerBasicInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicInfo: Story = {};
