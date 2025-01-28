import type { Meta, StoryObj } from "@storybook/react";
import { Error } from "@/app/pages/error/Error";

const meta = {
    title: "Pages/Error",
    component: Error,
    parameters: {
        layout: "fullscreen",
        docs: {
            controls: { sort: "requiredFirst" },
        },
    },
    argTypes: {},
    args:{},
} satisfies Meta<typeof Error>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Error401: Story = {
    args: {
        code: "401",
        title: "Unauthorized",
        description: "Something has gone wrong on the server.",
    },
};

export const Error403: Story = {
    args: {
        code: "403",
        title: "Access Forbidden",
        description: "Accessing the page or resource you were trying to reach is forbidden.",
    },
};

export const Error404: Story = {
    args: {
        code: "404",
        title: "Oops, this page doesn’t exist!",
        description: "Looks like you’ve wandered off the beaten path. Our team is working to get you back on track and find what you’re looking for.",
    },
};

export const Error410: Story = {
    args: {
        code: "410",
        title: "Oops, this page doesn’t exist!",
        description: "Looks like you’ve wandered off the beaten path. Our team is working to get you back on track and find what you’re looking for.",
    },
};

export const Error500: Story = {
    args: {
        code: "500",
        title: "This page isn’t working",
        description: "We apologize and are fixing the problem. Please try again later.",
    },
};

export const Error502: Story = {
    args: {
        code: "502",
        title: "This page isn’t working",
        description: "We apologize and are fixing the problem. Please try again later.",
    },
};

export const Error503: Story = {
    args: {
        code: "503",
        title: "Service Unavailable",
        description: "We promise, we’ll be back soon!",
    },
};

export const Error504: Story = {
    args: {
        code: "504",
        title: "Gateway Timeout",
        description: "The server could not respond in time.",
    },
};