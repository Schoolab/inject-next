import type { Meta, StoryObj } from "@storybook/react";
import { FormSelect } from "@/app/forms/select/FormSelect";

const meta = {
    title: "Forms/Select",
    component: FormSelect,
    parameters: {
        layout: "centered",
        docs: {
            controls: { sort: "requiredFirst" },
        },
    },
    args: {
        options: [
            { label: "Choose an option...", value: "", disabled: true, selected: true },
            { label: "Short text", value: "short" },
            { label: "Long text", value: "long" },
            { label: "Unique choice (select)", value: "unique_select" },
            { label: "Unique choice (radio)", value: "unique_radio" },
            { label: "Multiple choices", value: "multiple" },
            { label: "Checklist", value: "checklist" },
            { label: "Resources", value: "resources" },
            { label: "Links", value: "links" },
            { label: "Rating", value: "rating" },
            { label: "NPS", value: "nbs" },
        ]
    }

} satisfies Meta<typeof FormSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unique: Story = {

};
