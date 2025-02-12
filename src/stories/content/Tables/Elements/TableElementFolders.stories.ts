import type { Meta, StoryObj } from "@storybook/react";
import { TableElementFolders } from "@/app/components/tables/elements/TableElementFolders";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Content/Tables/Elements/Folders",
    component: TableElementFolders,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "padded",
    },
} satisfies Meta<typeof TableElementFolders>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Folders: Story = {
   
};
