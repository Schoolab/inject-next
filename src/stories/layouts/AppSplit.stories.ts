import type { Meta, StoryObj } from '@storybook/react';
import { AppSplit } from "@/app/layouts/AppSplit";

const meta = {
  title: 'Layouts/AppSplit',
  component: AppSplit,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
  args: {
    theme: "default",
    positionX: "none",
    positionY: "none",
    boxed: false,
    shadow: false,
    rounded: false,
  },
} satisfies Meta<typeof AppSplit>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

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

export const Preview: Story = {
  args: {
    preview: `Preview content here...`,
    shadow: true
  }
};


export const Boxed: Story = {
  args: {
    cover: "img/signin-cover.jpg",
    shadow: true,
    boxed: true,
    rounded: true,
    positionX: "center",
    positionY: "middle",
  }
};