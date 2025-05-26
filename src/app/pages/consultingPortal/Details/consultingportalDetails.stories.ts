import type { Meta, StoryObj } from '@storybook/react';
import { consultingportalDetails } from './consultingportalDetails';

const meta = {
  title: 'Pages/Consulting portal/Details',
  component: consultingportalDetails,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof consultingportalDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Details: Story = {};



