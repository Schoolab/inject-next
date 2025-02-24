import type { Meta, StoryObj } from '@storybook/react';
import { AdminInstallerProgramOutline } from '@/app/pages/admin/installer/studies/program-outline/AdminInstallerProgramOutline';

const meta = {
  title: 'Pages/Admin/Installer/Studies',
  component: AdminInstallerProgramOutline,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AdminInstallerProgramOutline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProgramOutline: Story = {};
