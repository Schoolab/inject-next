import type { Meta, StoryObj } from '@storybook/react';
import { consultingportalSharedFiles } from './consultingportalSharedFiles';

const meta = {
  title: 'Pages/Consulting portal/SharedFiles',
  component: consultingportalSharedFiles,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof consultingportalSharedFiles>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SharedFiles: Story = {};



