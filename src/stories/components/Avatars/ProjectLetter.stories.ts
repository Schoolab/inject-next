import type { Meta, StoryObj } from "@storybook/react";
import { ProjectLetter } from "@/app/components/avatars/ProjectLetter";

const meta = {
    title: "Components/Avatars/ProjectLetter",
    component: ProjectLetter,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
      size: { control: "radio" },
    },
    args: {
      name: "Healthify",
      size: "lg",
    },
} satisfies Meta<typeof ProjectLetter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
  },
};

export const ExtraLarge: Story = {
  args: {
    size: "xl",
  },
};

