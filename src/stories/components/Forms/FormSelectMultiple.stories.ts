import type { Meta, StoryObj } from "@storybook/react";
import { FormSelectMultiple } from "@/app/components/forms/FormSelectMultiple";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Form/Select",
    component: FormSelectMultiple,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
        docs: {
            controls: { sort: "requiredFirst" },
        },
    },

    args: {
        options: [
            { label: "Choose an option...", value: "", disabled: true },
            { label: "SaaS", value: "saas", selected: true },
            { label: "Project", value: "projects" },
            { label: "Management", value: "management" },
            { label: "Design", value: "design" },
            { label: "UX design", value: "ux-design" },
            { label: "Figma", value: "figma" },
            { label: "Product", value: "product" },
        ]
    }

} satisfies Meta<typeof FormSelectMultiple>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Multiple: Story = {

};
