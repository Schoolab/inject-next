import type { Meta, StoryObj } from '@storybook/react';
import { AdminInstallerFeatures } from '@/app/pages/admin/installer/features/AdminInstallerFeatures';

const meta = {
  title: 'Pages/Admin/Installer',
  component: AdminInstallerFeatures,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AdminInstallerFeatures>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Features: Story = {};



