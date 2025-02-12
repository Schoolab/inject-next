import type { Meta, StoryObj } from "@storybook/react";
import { FormAddOptions } from "@/app/forms/FormAddOptions";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Forms/Add Options",
    component: FormAddOptions,
    parameters: {
        // Optionsal parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
        docs: {
            controls: { sort: "requiredFirst" },
        },
    },

} satisfies Meta<typeof FormAddOptions>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const AddOptions: Story = {

};
