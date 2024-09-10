import type { Meta, StoryObj } from '@storybook/react';
import { SectionsTransparent } from '@/app/pages/layouts/SectionsTransparent';

const meta = {
  title: 'Pages/Layouts/Sections',
  component: SectionsTransparent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullpage',
  },

} satisfies Meta<typeof SectionsTransparent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Transparent: Story = {
};
