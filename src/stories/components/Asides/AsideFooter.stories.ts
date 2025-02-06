import type { Meta, StoryObj } from "@storybook/react";
import { AsideFooter } from "@/app/components/asides/AsideFooter";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Asides/Footer",
    component: AsideFooter,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "fullscreen",
        docs: {
            controls: { sort: "requiredFirst" },
        },
        
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {},

} satisfies Meta<typeof AsideFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {}

export const Options: Story = {
  args: {
    options: [
      { label: "Open", link: "#", newTab: true },
      { separator: true },
      { label: "Edit", link: "#", iconName: "pencil" },
      { label: "Delete", link: "#", iconName: "delete", type: "danger" },
    ],
  },
}

export const OneOption: Story = {
  args: {
    options: [{ label: "Full page", newTab: true, iconName: "public-page" }],
  },
}
