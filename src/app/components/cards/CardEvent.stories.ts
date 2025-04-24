import type { Meta, StoryObj } from "@storybook/react";
import { CardEvent } from "@/app/components/cards/CardEvent";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Cards/Event",
    component: CardEvent,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
        docs: {
            controls: { sort: "requiredFirst" },
        },
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    argTypes: {
        pin: { control: "boolean" },
        ongoing: { control: "boolean" },
    },
    args: {
        pin: false,
        ongoing: false,
        style: {
            width: "32rem",
        },
    },
} satisfies Meta<typeof CardEvent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
    args: {
        start: {
            month: "June",
            day: "8",
            startTime: "10 AM",
            endTime: "11 AM",
        },
        location: "Online",
        title: "Event Not started",
    },
};
export const Random_color_1: Story = {
    args: {
        start: {
            month: "June",
            day: "8",
            startTime: "10 AM",
            endTime: "11 AM",
        },
        cardIconAddClass:"c-random-1",
        cardImageAddClass:"bg-random-1",
        location: "Online",
        title: "Event Not started",
    },
};
export const Random_color_2: Story = {
    args: {
        start: {
            month: "June",
            day: "8",
            startTime: "10 AM",
            endTime: "11 AM",
        },
        cardIconAddClass:"c-random-2",
        cardImageAddClass:"bg-random-2",
        location: "Online",
        title: "Event Not started",
    },
};
export const Random_color_3: Story = {
    args: {
        start: {
            month: "June",
            day: "8",
            startTime: "10 AM",
            endTime: "11 AM",
        },
        cardIconAddClass:"c-random-3",
        cardImageAddClass:"bg-random-3",
        location: "Online",
        title: "Event Not started",
    },
};
export const Random_color_4: Story = {
    args: {
        start: {
            month: "June",
            day: "8",
            startTime: "10 AM",
            endTime: "11 AM",
        },
        cardIconAddClass:"c-random-4",
        cardImageAddClass:"bg-random-4",
        location: "Online",
        title: "Event Not started",
    },
};
export const Random_color_5: Story = {
    args: {
        start: {
            month: "June",
            day: "8",
            startTime: "10 AM",
            endTime: "11 AM",
        },
        cardIconAddClass:"c-random-5",
        cardImageAddClass:"bg-random-5",
        location: "Online",
        title: "Event Not started",
    },
};
export const Random_color_6: Story = {
    args: {
        start: {
            month: "June",
            day: "8",
            startTime: "10 AM",
            endTime: "11 AM",
        },
        cardIconAddClass:"c-random-6",
        cardImageAddClass:"bg-random-6",
        location: "Online",
        title: "Event Not started",
    },
};
export const Random_color_7: Story = {
    args: {
        start: {
            month: "June",
            day: "8",
            startTime: "10 AM",
            endTime: "11 AM",
        },
        cardIconAddClass:"c-random-7",
        cardImageAddClass:"bg-random-7",
        location: "Online",
        title: "Event Not started",
    },
};
export const Random_color_8: Story = {
    args: {
        start: {
            month: "June",
            day: "8",
            startTime: "10 AM",
            endTime: "11 AM",
        },
        cardIconAddClass:"c-random-8",
        cardImageAddClass:"bg-random-8",
        location: "Online",
        title: "Event Not started",
    },
};

export const IsPrivate: Story = {
    args: {
        start: {
            month: "June",
            day: "8",
            startTime: "10 AM",
            endTime: "11 AM",
        },
        isPrivate: true,
        location: "Online",
        title: "Event Not started",
        cardIconAddClass:"c-random-7",
        cardImageAddClass:"bg-random-7",
    },
};

export const Register: Story = {
    args: {
        start: {
            month: "June",
            day: "8",
            startTime: "10 AM",
            endTime: "11 AM",
        },
        location: "Online",
        title: "Event Not started",
        cardIconAddClass:"c-random-7",
        cardImageAddClass:"bg-random-7",
        actions: [
            {
                title: "To access the event",
                metas: [
                    { label: "Attendees" },
                    { iconName: "account", label: "32", addClass: "font-weight-bold" },
                ],
                buttons: [
                    { label: "Register", type: "primary", link: "#" },
                    { label: "Learn more", type: "default", link: "#" },
                ],
            }
        ]
    },
};

export const Ongoing: Story = {
    args: {
        start: {
            month: "June",
            day: "8",
            startTime: "10 AM",
            endTime: "11 AM",
        },
        ongoing: true,
        location: "Hybride",
        title: "Ongoing Event Name",
        cardIconAddClass:"c-random-7",
        cardImageAddClass:"bg-random-7",
    },
};

export const Condensed: Story = {
    args: {
        start: {
            month: "June",
            day: "8",
            startTime: "10 AM",
            endTime: "11 AM",
        },
        location: "InPerson",
        title: "Condensed Event ",
    },
};
