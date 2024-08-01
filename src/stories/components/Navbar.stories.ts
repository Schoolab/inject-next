import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from "../../app/components/NavBar";

const meta = {
  title: 'Components/NavBar',
  component: Navbar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {
    isLogged: { control: "boolean" },
  },

} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isLogged: true,
  },
};



