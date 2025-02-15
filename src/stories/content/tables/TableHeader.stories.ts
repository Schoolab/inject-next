import type { Meta, StoryObj } from "@storybook/react";
import { TableHeader } from "@/app/content/tables/TableHeader";

const meta = {
  title: "Content/Tables/TableHeader",
  component: TableHeader,
  parameters: {
    layout: "centered",
    docs: {
      controls: { sort: "requiredFirst" },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    type: "default",
    title: "Text",
    meta: [
      { label: "Meta" },
    ],
    style: {
      width: "24rem",
    },
  },

} satisfies Meta<typeof TableHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Empty: Story = {
  args: {
    type: "default",
    title: "–",
    meta: undefined,
  },
};

export const Title: Story = {
  args: {
    type: "title",
    title: "Title",
  },
};

export const Link: Story = {
  args: {
    type: "link",
    title: "Link",
    link: "#",
  },
};

export const Icon: Story = {
  args: {
    icon: "file-document-box",
  },
};

export const Emoji: Story = {
  args: {
    emoji: "👋",
  },
};

export const CopyOnHover: Story = {
  args: {
    copy: true,
  },
};

export const Org: Story = {
  args: {
    type: "org",
    title: "Schoolab",
    link: "#",
    meta: [
      { label: "inject.theschoolab.com" },
      { label: "102 programs" },
    ],
    avatar: "img/placeholder-thumbnail-logo.png",
  },
};

export const Program: Story = {
  args: {
    type: "program",
    title: "Impact Innovators",
    link: "#",
    meta: [
      { label: "Schoolab" },
      { label: "803 participants" },
    ]
  },
};

export const Project: Story = {
  args: {
    type: "project",
    title: "Healthify",
    link: "#",
    meta: [
      { label: "2 members" },
    ]
  },
};

export const User: Story = {
  args: {
    type: "user",
    title: "User Name",
    role: "admin",
    link: "#",
    meta: [
      { label: "name@domain.tld" },
    ]
  },
};

export const File: Story = {
  args: {
    type: "pdf",
    title: "FileName.ext",
    link: "#",
    download: true,
    meta: [
      { label: "PDF File"},
      { label: "1.2 MB" },
    ]
  },
};

export const Event: Story = {
  args: {
    type: "event",
    title: "Event Name",
    link: "#",
    day: "14",
    month: "Feb",
    meta: [
      { label: "Feb 14, 2025" },
      { label: "4:30 PM (2h)" },
    ]
  },
};

export const CoachProject: Story = {
  args: {
    type: "coachProject",
    title: "Coach Name / Project",
    link: "#",
    project: "Healthify",
    meta: [
      { label: "Feb 14, 2025" },
      { label: "4:30 PM (30 min)" },
    ],
  },
};

export const ProjectCoach: Story = {
  args: {
    type: "projectCoach",
    title: "Project / Coach Name",
    link: "#",
    project: "Healthify",
    meta: [
      { label: "Feb 14, 2025" },
      { label: "4:30 PM (30 min)" },
    ],
  },
};

export const Sdg: Story = {
  args: {
    type: "sdg",
    title: "No poverty",
    link: "#",
    meta: [
      { label: "12 programs" },
      { label: "38 projects" }
    ],
    sdg: 1,
  },
};
