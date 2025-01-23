import type { Meta, StoryObj } from "@storybook/react";
import { FormSelect } from "@/app/components/forms/FormSelect";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Form/Select",
    component: FormSelect,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
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

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Unique: Story = {

};
