import type { Meta, StoryObj } from '@storybook/react';
import { UserAuthSignin } from '@/app/pages/user/auth/signin/UserAuthSignin';

const meta = {
  title: 'Pages/User/Auth/Signin',
  component: UserAuthSignin,
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
    showSso: false,
    showEmail: true,
    boxed: false,
    shadow: false,
    rounded: false,
  }
} satisfies Meta<typeof UserAuthSignin>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SSO: Story = {
  args: {
    showPlatforms: false,
    showSso: true,
  }
};

// export const Cover: Story = {
//   args: {
//     cover: "img/signin-cover.jpg",
//     shadow: true
//   }
// };

// export const Video: Story = {
//   args: {
//     video: "https://www.theschoolab.com/wp-content/uploads/2022/04/Open-Schoolab_2022-Aftermovie.mp4",
//     shadow: true
//   }
// };

// export const Boxed: Story = {
//   args: {
//     cover: "img/signin-cover.jpg",
//     shadow: true,
//     boxed: true,
//     rounded: true,
//     positionX: "right",
//     positionY: "middle",
//     showEmail: false,
//   }
// };