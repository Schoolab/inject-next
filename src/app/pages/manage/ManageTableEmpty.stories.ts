import type { Meta, StoryObj } from "@storybook/react";
import { ManageTableEmpty } from "@/app/pages/manage/ManageTableEmpty";

const meta = {
    title: "Pages/Manage/Table",
    component: ManageTableEmpty,
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof ManageTableEmpty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
   
};
