import type { Meta, StoryObj } from '@storybook/react';
import { Section } from "./Section";

const meta = {
  title: 'Components/Section',
  component: Section,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'padded',
  },
  argTypes: {},

  args: {},

} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Title: Story = {
    args: {
        title: "Daily digest",
    },
};

export const Subtitle: Story = {
    args: {
        title: "Daily digest",
        subtitle: "Only visible to you",
    },
};

export const SubtitleIcon: Story = {
    args: {
        title: "Daily digest",
        subtitle: "Only visible to you",
        subtitleIcon: "lock",
    },
};

export const Collapsable: Story = {
    args: {
        title: "Daily digest",
        collapsable: true,
        collapsableId: "daily-digest",
    },
};

export const Closed: Story = {
    args: {
        title: "Daily digest",
        collapsable: true,
        collapsableId: "daily-digest",
        isOpen: false,
    },
};