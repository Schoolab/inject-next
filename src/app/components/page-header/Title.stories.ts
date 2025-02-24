import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "@/app/components/page-header/Title";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/PageHeader/Title",
  component: Title,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "padded",
    docs: {
      controls: { sort: "requiredFirst" },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
  args:{
    title: "Page title",
  },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
};

export const BackLink: Story = {
  args: {
    backLink: "#",
  },
};

export const Icon: Story = {
  args: {
    iconName: "program",
  },
};

export const Emoji: Story = {
  args: {
    emoji: "🚀",
  },
};

export const Pagination: Story = {
  args: {
    pagination: {
        currentPage: 1,
        totalPages: 6,
        prevLink: "#",
        nextLink: "#",
    },
  },
};

export const Buttons: Story = {
  args: {
    buttons: [
        {
            type: "default",
            label: "Preview",
            iconStartName: "preview",
            iconEndName: "new-tab",
            size: "sm",
        },
        {
            type: "primary",
            label: "Save changes",
            size: "sm",
        },
    ],
  },
};

export const Full: Story = {
  args: {
    title: "Page title",
    emoji: "🚀",
    backLink: "#",
    pagination: {
        currentPage: 1,
        totalPages: 6,
        prevLink: "#",
        nextLink: "#",
    },
    buttons: [
        {
            type: "default",
            label: "Preview",
            iconStartName: "preview",
            iconEndName: "new-tab",
            size: "sm",
        },
        {
          type: "primary",
          label: "Save changes",
          size: "sm",
      },
    ],
  },  
};