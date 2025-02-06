import type { Meta, StoryObj } from "@storybook/react";
import { AsideHeader } from "@/app/components/asides/AsideHeader";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Asides/Header",
    component: AsideHeader,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "fullscreen",
        docs: {
            controls: { sort: "requiredFirst" },
        },
        
    },
    tags: ["autodocs"],
    argTypes: {
        showNewTab: { type: "boolean" },
        showClose: { type: "boolean" },
        pagination: {
          description: "Pagination configuration",
          control: { type: "object" },
          table: {
            type: {
              summary: "PaginationProps",
              detail: `{
  currentPage: number;
  totalPages: number;
  prevLink?: string;
  nextLink?: string;
  onPageChange?: (page: number) => void;
}`
            },
          },
        },
    },
    args: {
        title: "Title",
        showNewTab: false,
        showClose: true,
    },

} satisfies Meta<typeof AsideHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
  args: {
    title: "Title",
  },
};

export const NotClosable: Story = {
  args: {
    showClose: false,
  },
};

export const NewTab: Story = {
  args: {
    showNewTab: true,
  },
};

export const Tabs: Story = {
  args: {
    tabs: [
      { 
        label: "Info", 
        href: "#", 
        isActive: true, 
        dataToggle: "tab", 
        dataTarget: "#info", 
        role: "tab", 
        ariaControls: "info", 
        ariaSelected: true,
      },
      { 
        label: "Responses", 
        href: "#", 
        isActive: false,
        icon: "visibility-off", 
        tooltip: "Accessible only to admins", 
        dataToggle: "tab", 
        dataTarget: "#responses", 
        role: "tab", 
        ariaControls: "responses", 
        ariaSelected: false,
      },
      { 
        label: "Limited", 
        href: "#",
        isActive: false,
        dataToggle: "tab", 
        dataTarget: "#limited", 
        role: "tab", 
        ariaControls: "limited", 
        ariaSelected: false,
      }
    ],
  },
};

export const Pagination: Story = {
  args: {
    pagination: {
      currentPage: 1,
      totalPages: 4,
      prevLink: "#",
      nextLink: "#",
    },
  },
};

export const Full: Story = {
  args: {
    title: "Title",
    tabs: [
      { 
        label: "Info", 
        href: "#", 
        isActive: true, 
        dataToggle: "tab", 
        dataTarget: "#info", 
        role: "tab", 
        ariaControls: "info", 
        ariaSelected: true,
      },
      { 
        label: "Responses", 
        href: "#", 
        isActive: false,
        icon: "visibility-off", 
        tooltip: "Accessible only to admins", 
        dataToggle: "tab", 
        dataTarget: "#responses", 
        role: "tab", 
        ariaControls: "responses", 
        ariaSelected: false,
      },
      { 
        label: "Limited", 
        href: "#",
        isActive: false,
        dataToggle: "tab", 
        dataTarget: "#limited", 
        role: "tab", 
        ariaControls: "limited", 
        ariaSelected: false,
      }
    ],
    pagination: {
      currentPage: 1,
      totalPages: 4,
      prevLink: "#",
      nextLink: "#",
    },
    showNewTab: true,
    showClose: true,
  },
};
