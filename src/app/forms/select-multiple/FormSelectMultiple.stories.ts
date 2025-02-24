import type { Meta, StoryObj } from "@storybook/react";
import { FormSelectMultiple } from "@/app/forms/select-multiple/FormSelectMultiple";

const meta = {
    title: "Forms/Select",
    component: FormSelectMultiple,
    parameters: {
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

export const Multiple: Story = {

};
