import type { Meta, StoryObj } from "@storybook/react";
import { GridCourse } from "@/app/layouts/grids/GridCourse";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Layouts/Grids",
    component: GridCourse,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
    },
} satisfies Meta<typeof GridCourse>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Course: Story = {
    args: {
        modules: [
            {
                label: "Before Starting",
                date: "Oct 1",
                locked: false,
                number: 1,
                capsules: [
                    {
                        name: "Introduction to Design Thinking",
                        emoji: "👋",
                    },
                ],
            },
            {
                label: "1. The stakes of observation",
                date: "Oct 1",
                locked: false,
                number: 2,
                capsules: [
                    {
                        name: "The importance of the observation phase",
                        emoji: "👀",
                    },
                    {
                        name: "Identify stakeholders",
                        questions: 5,
                        emoji: "🤝",
                    },
                ],
            },
            {
                label: "2. Frame the issue",
                date: "Oct 17",
                locked: true,
                number: 4,
                capsules: [
                    {
                        name: "Analyze the issue",
                        emoji: "🔍",
                    },
                    {
                        name: "Key terms",
                        emoji: "💬",
                    },
                    {
                        name: "Planetary limits",
                        emoji: "🌍",
                    },
                    {
                        name: "Reframe the issue",
                        questions: 3,
                        emoji: "🤔",
                    },
                ],
            },
            {
                label: "3. Launch your observation strategy",
                date: "Oct 24",
                locked: true,
                number: 8,
                capsules: [
                    {
                        name: "The observation roadmap",
                        questions: 1,
                        emoji: "🚧",
                    },
                    {
                        name: "Observation - research",
                        emoji: "🔎",
                    },
                    {
                        name: "Observation - the field",
                        emoji: "🥊",
                    },
                    {
                        name: "Identify environmental issues",
                        emoji: "🌱",
                    },
                    {
                        name: "Identifying the stakeholders to interview",
                        questions: 2,
                        emoji: "🎤",
                        date: "Oct 26",
                        locked: true,
                    },
                    {
                        name: "Writing an interview guide",
                        questions: 1,
                        emoji: "✍️",
                        date: "Oct 26",
                        locked: true,
                    },
                    {
                        name: "The semi-structured interview",
                        emoji: "📆",
                        date: "Oct 26",
                        locked: true,
                    },
                    {
                        name: "Synthesize your interviews",
                        questions: 8,
                        emoji: "💬",
                        date: "Oct 28",
                        locked: true,
                    },
                ],
            },
            {
                label: "AfterWords",
                date: "Oct 24",
                locked: true,
                number: 1,
                capsules: [
                    {
                        name: "Thank you!",
                        questions: 3,
                    },
                ],
            },
        ],
    }
};
