import type { Meta, StoryObj } from '@storybook/react';
import { CPAuthLogin } from './CPAuthLogin';

const meta = {
  title: 'Pages/Consulting portal/Auth/Login',
  component: CPAuthLogin,
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
} satisfies Meta<typeof CPAuthLogin>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Login: Story = {
  args: {
    cover: "img/CP-SignUP.png",
    imgTextTitle:"Consulting portal",
    imgText:"Here you can safely view key information, share and download important documents - all in one place, build for seamless collaboration.",
    shadow: true
  }
};