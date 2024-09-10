import type { Meta, StoryObj } from '@storybook/react';
import { SectionsBordered } from '@/app/pages/layouts/SectionsBordered';

const meta = {
  title: 'Pages/Layouts/Sections',
  component: SectionsBordered,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullpage',
  },

} satisfies Meta<typeof SectionsBordered>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bordered: Story = {
};
