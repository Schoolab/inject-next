import type { Meta, StoryObj } from '@storybook/react';
import { SectionsTransparent } from '@/app/layouts/sections/SectionsTransparent';

const meta = {
  title: 'Layouts/Sections',
  component: SectionsTransparent,
  parameters: {
    layout: 'fullpage',
  },

} satisfies Meta<typeof SectionsTransparent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Transparent: Story = {
};
