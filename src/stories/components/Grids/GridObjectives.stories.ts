import type { Meta, StoryObj } from "@storybook/react";
import { GridObjectives } from "@/app/components/grids/GridObjectives";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Grids/Objectives",
    component: GridObjectives,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
    },
} satisfies Meta<typeof GridObjectives>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Objectives: Story = {
    args: {
        milestones: [
            {
                label: "Before Starting",
                locked: false,
                number: 0,
                objectives: [],
            },
            {
                label: "1. Observation",
                date: "Oct 12",
                locked: true,
                number: 5,
                objectives: [
                    {
                        name: "Initial observation points",
                        tasks: 5,
                        emoji: "👀",
                    },
                    {
                        name: "Company visit",
                        tasks: 2,
                        emoji: "💼",
                        date: "Oct 19",
                    },
                    {
                        name: "Stakeholder map",
                        tasks: 1,
                        emoji: "🗺",
                    },
                    {
                        name: "Interview guide",
                        tasks: 1,
                        emoji: "🎤",
                    },
                    {
                        name: "Interview summaries",
                        tasks: 3,
                        emoji: "💬",
                    },
                ],
            },
            {
                label: "2. Definition of needs",
                date: "Nov 2",
                locked: true,
                number: 7,
                objectives: [
                    {
                        name: "Personas",
                        tasks: 3,
                        emoji: "👥",
                    },
                    {
                        name: "User journeys",
                        tasks: 3,
                        emoji: "👤",
                    },
                    {
                        name: "Presentation of initial observations",
                        tasks: 1,
                        emoji: "💬",
                        date: "Nov 9"
                    },
                    {
                        name: "Analogies*",
                        tasks: 1,
                        emoji: "✌️",
                    },
                    {
                        name: "Benchmark",
                        tasks: 1,
                        emoji: "🕶️",
                    },
                    {
                        name: "Refined issues",
                        tasks: 1,
                        emoji: "🔍",
                    },
                    {
                        name: "Presentation of Preliminary Design Review",
                        tasks: 1,
                        emoji: "🎨",
                        date: "Nov 30",
                        dueDate: "Dec 7",
                    },
                ],
            },
            {
                label: "3. Conception",
                date: "Dec 14",
                locked: true,
                number: 4,
                objectives: [
                    {
                        name: "Idea Cards",
                        tasks: 3,
                        emoji: "📋",
                    },
                    {
                        name: "Value Proposition",
                        tasks: 3,
                        emoji: "💎",
                    },
                    {
                        name: "Use Case Scenario",
                        tasks: 3,
                        emoji: "🎞️",
                    },
                    {
                        name: "MOSCOW Matrix",
                        tasks: 3,
                        emoji: "🇷🇺",
                    },
                ],
            },
            {
                label: "4. Prototyping",
                date: "Dec 14",
                locked: true,
                number: 5,
                objectives: [
                    {
                        name: "Solution Choice",
                        tasks: 12,
                        emoji: "✅",
                    },
                    {
                        name: "Lean Canvas",
                        tasks: 1,
                        emoji: "📑",
                    },
                    {
                        name: "First Prototype",
                        tasks: 2,
                        emoji: "🚧",
                    },
                    {
                        name: "Presentation of Initial Tests",
                        tasks: 1,
                        emoji: "🎤",
                        date: "Dec 16",
                    },
                    {
                        name: "Final Prototype",
                        tasks: 1,
                        emoji: "🎨",
                        date: "Dec 16",
                    },
                ],
            },
            {
                label: "5. Launch",
                date: "Dec 16",
                locked: true,
                number: 7,
                objectives: [
                    {
                        name: "Business model canvas*",
                        tasks: 1,
                        emoji: "📑",
                    },
                    {
                        name: "Presentation canvas",
                        tasks: 1,
                        emoji: "🎤",
                    },
                    {
                        name: "Launch roadmap",
                        tasks: 1,
                        emoji: "🗺️",
                    },
                    {
                        name: "Communication strategy",
                        tasks: 1,
                        emoji: "👋",
                    },
                    {
                        name: "Corporate presentation",
                        tasks: 3,
                        emoji: "💼",
                        date: "Dec 21",
                    },
                    {
                        name: "Demo Day",
                        tasks: 3,
                        emoji: "🎤",
                        date: "Dec 28",
                    },
                    {
                        name: "Virtual Fair 2025",
                        tasks: 6,
                        emoji: "💻",
                    },
                ],
            },
            {
                label: "AfterWords",
                date: "Dec 24",
                locked: true,
                number: 0,
                objectives: [],
            },
        ],
    }
};
