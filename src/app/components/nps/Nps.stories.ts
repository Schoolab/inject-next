import type { Meta, StoryObj } from '@storybook/react';
import { Nps } from './Nps';

const meta = {
  title: 'Components/Nps',
  component: Nps,
  parameters: {
    layout: 'padded',
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Nps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};



