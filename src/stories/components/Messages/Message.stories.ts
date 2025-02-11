import type { Meta, StoryObj } from "@storybook/react";
import { Message } from "@/app/components/messages/Message";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Messages/Message",
    component: Message,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {
        messages: [
            {
              message: "Hey there! ✋",
              options: [
                { label: "Edit", href: "#", icon: "pencil", disabled: false, onClick: () => {} },
                { label: "Delete", href: "#", icon: "delete", type: "danger", disabled: false, onClick: () => {} },
            ]
            }
        ],
        showAvatar: true,
        name: "Pierre Lemeteil",
        role: "admin",
        style: {
          width: "32rem",
        }
    }
  } satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};

export const Multiple: Story = {
  args: {
    messages: [
      {
        message: "Hey there! ✋",
        options: [
          { label: "Edit", href: "#", icon: "pencil", disabled: false, onClick: () => {} },
          { label: "Delete", href: "#", icon: "delete", type: "danger", disabled: false, onClick: () => {} },
        ]
      },
      {
        message: "I was gonna be productive… Laundry, cleaning, but...",
        options: [
          { label: "Edit", href: "#", icon: "pencil", disabled: false, onClick: () => {} },
          { label: "Delete", href: "#", icon: "delete", type: "danger", disabled: false, onClick: () => {} },
        ]
      },
      {
        message: "I’m getting powered donuts",
        options: [
          { label: "Edit", href: "#", icon: "pencil", disabled: false, onClick: () => {} },
          { label: "Delete", href: "#", icon: "delete", type: "danger", disabled: false, onClick: () => {} },
        ]
      },
      {
        message: "powdered*",
        options: [
          { label: "Edit", href: "#", icon: "pencil", disabled: false, onClick: () => {} },
          { label: "Delete", href: "#", icon: "delete", type: "danger", disabled: false, onClick: () => {} },
        ]
      }
    ],
    avatar: "img/avatar-pierre.jpeg",
  }
}

export const You: Story = {
  args: {
    messages: [
      {
        you: true,
        message: "Donuts do have powers 🤣",
        options: [
          { label: "Edit", href: "#", icon: "pencil", disabled: false, onClick: () => {} },
          { label: "Delete", href: "#", icon: "delete", type: "danger", disabled: false, onClick: () => {} },
        ]
      }
    ],
    showAvatar: false,
    avatar: "img/avatar-alexandra.jpeg",
    name: "Alexandra Jolly",
    role: undefined,
    position: "right",
  }
}

export const Seen: Story = {
  args: {
    messages: [
      {
        you: true,
        message: "Donuts do have powers 🤣",
        options: [
          { label: "Edit", href: "#", icon: "pencil", disabled: false, onClick: () => {} },
          { label: "Delete", href: "#", icon: "delete", type: "danger", disabled: false, onClick: () => {} },
        ]
      }
    ],
    showAvatar: false,
    avatar: "img/avatar-alexandra.jpeg",
    name: "Alexandra Jolly",
    role: undefined,
    position: "right",
    seen: true,
  }
}

export const Metas: Story = {
  args: {
    avatar: "img/avatar-pierre.jpeg",
    metas: [
      { label: "7:33 PM", dataToggle: "tooltip", dataPlacement: "top", dataOriginalTitle: "February 11, 2025 at 7:33 PM", dataBoundary: "window" },
    ]
  }
}
