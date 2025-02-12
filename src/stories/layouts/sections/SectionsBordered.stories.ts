import type { Meta, StoryObj } from '@storybook/react';
import { SectionsBordered } from '@/app/layouts/sections/SectionsBordered';

const meta = {
  title: 'Layouts/Sections',
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
