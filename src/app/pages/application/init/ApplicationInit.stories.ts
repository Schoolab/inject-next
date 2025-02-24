import type { Meta, StoryObj } from '@storybook/react';
import { ApplicationInit } from '@/app/pages/application/init/ApplicationInit';

const meta = {
  title: 'Pages/Application/Init',
  component: ApplicationInit,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ApplicationInit>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Init: Story = {};



