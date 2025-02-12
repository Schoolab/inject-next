import type { Meta, StoryObj } from '@storybook/react';
import { SectionsSeparated } from '@/app/layouts/sections/SectionsSeparated';

const meta = {
  title: 'Layouts/Sections',
  component: SectionsSeparated,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullpage',
  },

} satisfies Meta<typeof SectionsSeparated>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Separated: Story = {
};
