import type { Meta, StoryObj } from "@storybook/react";
import { StatCard } from "../stat-cards/StatCard";
import { Stepper } from "@/app/components/stepper/Stepper";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Stepper",
  component: Stepper,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "padded",
    docs: {
      controls: { sort: "requiredFirst" },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
  args:{
    steps: [
      {
        title: "Basic info",
        description: "Completed",
        status: "completed",
        link: "#",
        current: false,
      },
      {
        title: "Categories",
        description: "In progress",
        status: "in-progress",
        current: true,
      },
      {
        title: "Managers",
        description: "Not completed",
        status: "not-completed",
        current: false,
      },
      {
        title: "Features",
        description: "Not completed",
        status: "not-completed",
        current: false,
      }
    ],
  },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};