import type { Meta, StoryObj } from '@storybook/react';
import { CPAuthSignup } from './CPAuthSignup';

const meta = {
  title: 'Pages/Consulting portal/Auth/Sign Up',
  component: CPAuthSignup,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    boxed: { control: "boolean" },
    shadow: { control: "boolean" },
    rounded: { control: "boolean" },
  },
  args: {
    theme: "Inject",
    showPlatforms: true,
    boxed: false,
    shadow: false,
    rounded: false,
  }
} satisfies Meta<typeof CPAuthSignup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SignUp: Story = {
  args: {
    cover: "img/CP-SignUP.png",
    shadow: true
  }
};