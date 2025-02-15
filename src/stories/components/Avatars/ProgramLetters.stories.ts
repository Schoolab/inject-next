import type { Meta, StoryObj } from "@storybook/react";
import { ProgramLetters } from "@/app/components/avatars/ProgramLetters";

const meta = {
    title: "Components/Avatars/ProgramLetters",
    component: ProgramLetters,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
      size: { control: "radio" },
    },
    args: {
      name: "Impact Innovators",
      size: "lg",
    },
} satisfies Meta<typeof ProgramLetters>;

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

