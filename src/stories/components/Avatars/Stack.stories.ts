import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "@/app/components/avatars/Stack";

const meta = {
    title: "Components/Avatars/Stack",
    component: Stack,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};