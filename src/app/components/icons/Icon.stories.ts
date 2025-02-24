import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '@/app/components/icons/Icon';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'padded',
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "account",
    size: "md",    
  }
};



