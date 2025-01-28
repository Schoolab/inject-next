import type { Meta, StoryObj } from '@storybook/react';
import { UserAuthSignin } from '@/app/pages/user/auth/UserAuthSignin';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#Carousel-export
const meta = {
  title: 'Pages/User/Auth/Signin',
  component: UserAuthSignin,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {
    boxed: { control: "boolean" },
    shadow: { control: "boolean" },
    rounded: { control: "boolean" },
  },
  args: {
    theme: "Inject",
    showEmail: true,
    boxed: false,
    shadow: false,
    rounded: false,
  }
} satisfies Meta<typeof UserAuthSignin>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {};

export const Cover: Story = {
  args: {
    cover: "img/signin-cover.jpg",
    shadow: true
  }
};

export const Video: Story = {
  args: {
    video: "https://www.theschoolab.com/wp-content/uploads/2022/04/Open-Schoolab_2022-Aftermovie.mp4",
    shadow: true
  }
};

export const Boxed: Story = {
  args: {
    cover: "img/signin-cover.jpg",
    shadow: true,
    boxed: true,
    rounded: true,
    positionX: "right",
    positionY: "middle",
    showEmail: false,
  }
};