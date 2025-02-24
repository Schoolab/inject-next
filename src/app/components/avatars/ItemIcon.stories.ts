import type { Meta, StoryObj } from "@storybook/react";
import { ItemIcon } from "@/app/components/avatars/ItemIcon";

const meta = {
    title: "Components/Avatars/ItemIcon",
    component: ItemIcon,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
    },
    args: {
      icon: "brand-inject",
    },
} satisfies Meta<typeof ItemIcon>;

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

export const SmallAlt: Story = {
  args: {
    size: "sm",
    icon: "file-pdf-box",
    addClass: "text-danger border rounded-sm bg-white",
  },
};

export const PDF: Story = {
  args: {
    icon: "file-pdf-box",
    addClass: "text-danger",
  },
};

export const Image: Story = {
  args: {
    icon: "image",
  },
};

export const Video: Story = {
  args: {
    icon: "file-play-box",
  },
};

export const Audio: Story = {
  args: {
    icon: "file-audio-box",
  },
};

export const Excel: Story = {
  args: {
    icon: "file-excel-box",
  },
};

export const Word: Story = {
  args: {
    icon: "file-word-box",
  },
};

export const Powerpoint: Story = {
  args: {
    icon: "file-powerpoint-box",
  },
};

export const CSV: Story = {
  args: {
    icon: "file-csv-box",
  },
};

export const Zip: Story = {
  args: {
    icon: "file-zip-box",
  },
};

export const Document: Story = {
  args: {
    icon: "file-document-box",
  },
};

export const Spreadsheet: Story = {
  args: {
    icon: "file-google-spreadsheet",
  },
};

export const Presentation: Story = {
  args: {
    icon: "file-presentation-box",
  },
};

