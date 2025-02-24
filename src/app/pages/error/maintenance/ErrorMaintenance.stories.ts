import type { Meta, StoryObj } from "@storybook/react";
import { ErrorMaintenance } from "@/app/pages/error/maintenance/ErrorMaintenance";

const meta = {
    title: "Pages/Error",
    component: ErrorMaintenance,
    parameters: {
        layout: "fullscreen",
        docs: {
            controls: { sort: "requiredFirst" },
        },
    },
    tags: ["autodocs"],
    argTypes: {},
    args:{},
} satisfies Meta<typeof ErrorMaintenance>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Maintenance: Story = {};