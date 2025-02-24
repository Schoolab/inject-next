import type { Meta, StoryObj } from "@storybook/react";
import { ItemCondition } from "@/app/components/items/ItemCondition";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Items/Condition",
    component: ItemCondition,    
    parameters: {
        layout: "centered",
        docs: {
            controls: { sort: "requiredFirst" },
        },
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {
      condition: "If Participant's type is",
      value: "Student",
    },

} satisfies Meta<typeof ItemCondition>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
    args: {
        
    },
};
