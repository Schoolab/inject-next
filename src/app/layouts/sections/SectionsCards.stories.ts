import type { Meta, StoryObj } from '@storybook/react';
import { SectionsCards } from '@/app/layouts/sections/SectionsCards';

const meta = {
  title: 'Layouts/Sections',
  component: SectionsCards,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullpage',
  },

} satisfies Meta<typeof SectionsCards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Cards: Story = {
};
