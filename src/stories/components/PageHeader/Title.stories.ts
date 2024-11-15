import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "@/app/components/page-header/Title";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/PageHeader/Title",
  component: Title,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
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
  },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    backLink: "#",
    paginationLabel: "1 of 6",
    nextLink: "#",
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
    ]
  },
};



