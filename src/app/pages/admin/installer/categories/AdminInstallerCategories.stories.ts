import type { Meta, StoryObj } from '@storybook/react';
import { AdminInstallerCategories } from '@/app/pages/admin/installer/categories/AdminInstallerCategories';

const meta = {
  title: 'Pages/Admin/Installer',
  component: AdminInstallerCategories,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AdminInstallerCategories>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Categories: Story = {};



