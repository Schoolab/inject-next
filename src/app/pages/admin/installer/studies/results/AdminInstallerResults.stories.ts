import type { Meta, StoryObj } from '@storybook/react';
import { AdminInstallerResults } from '@/app/pages/admin/installer/studies/results/AdminInstallerResults';

const meta = {
  title: 'Pages/Admin/Installer/Studies',
  component: AdminInstallerResults,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AdminInstallerResults>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Results: Story = {};
