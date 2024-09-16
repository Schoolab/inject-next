import type { Meta, StoryObj } from "@storybook/react";
import { FormInputDisabled } from "@/app/components/forms/FormInputDisabled";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Form/InputDisabled",
    component: FormInputDisabled,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
        docs: {
            controls: { sort: "requiredFirst" },
        },
    },

} satisfies Meta<typeof FormInputDisabled>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const InputDisabled: Story = {

};
