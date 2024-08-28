import type { Meta, StoryObj } from "@storybook/react";
import { DropdownDefault } from "@/app/components/dropdown/DropdownDefault";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Dropdowns/Default",
    component: DropdownDefault,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "padded",
    },
} satisfies Meta<typeof DropdownDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {};
