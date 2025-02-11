import type { Meta, StoryObj } from "@storybook/react";
import { MessageBubble } from "@/app/components/messages/MessageBubble";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Messages/Bubble",
    component: MessageBubble,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
      you: { control: "boolean" },
    },
    args: {
        message: "Hey there! ✋",
        you: false,
    }
  } satisfies Meta<typeof MessageBubble>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};

export const You: Story = {
  args: {
      you: true,
  }
};

export const Options: Story = {
    args: {
        options: [
            { label: "Edit", href: "#", icon: "pencil", disabled: false, onClick: () => {} },
            { label: "Delete", href: "#", icon: "delete", type: "danger", disabled: false, onClick: () => {} },
        ]
    }
};
