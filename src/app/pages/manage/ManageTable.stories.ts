import type { Meta, StoryObj } from "@storybook/react";
import { ManageTable } from "@/app/pages/manage/ManageTable";

const meta = {
    title: "Pages/Manage/Table",
    component: ManageTable,
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof ManageTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
   
};
