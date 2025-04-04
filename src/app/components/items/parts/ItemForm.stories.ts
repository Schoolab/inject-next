import type { Meta, StoryObj } from "@storybook/react";
import { ItemForm } from "@/app/components/items/parts/ItemForm";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Items/Parts/ItemForm",
    component: ItemForm,    
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
        docs: {
            controls: { sort: "requiredFirst" },
        },
    },
     // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    //  tags: ["autodocs"],
     argTypes: {},
    args: {},

} satisfies Meta<typeof ItemForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
    args: {
        
    },
};
