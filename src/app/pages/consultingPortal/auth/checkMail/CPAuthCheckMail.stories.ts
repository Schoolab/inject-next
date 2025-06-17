import type { Meta, StoryObj } from '@storybook/react';
import { CPAuthCheckMail } from './CPAuthCheckMail';

const meta = {
  title: 'Pages/Consulting portal/Auth/CheckMail',
  component: CPAuthCheckMail,
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
} satisfies Meta<typeof CPAuthCheckMail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckMail: Story = {
  args: {
    cover: "img/CP-SignUP.png",
    shadow: true
  }

};