import type { Meta, StoryObj } from '@storybook/react';
import { consultingportalSatisfaction } from './consultingportalSatisfaction';

const meta = {
  title: 'Pages/Consulting portal/Satisfaction',
  component: consultingportalSatisfaction,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof consultingportalSatisfaction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Satisfaction: Story = {};



