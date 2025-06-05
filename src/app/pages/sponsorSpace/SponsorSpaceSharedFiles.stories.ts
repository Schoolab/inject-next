import type { Meta, StoryObj } from '@storybook/react';
import { SponsorSpaceSharedFiles } from './SponsorSpaceSharedFiles';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/Sponsor space/Shared Files',
  component: SponsorSpaceSharedFiles,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SponsorSpaceSharedFiles>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SharedFiles: Story = {};



