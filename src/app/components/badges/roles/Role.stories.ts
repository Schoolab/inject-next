import type { Meta, StoryObj } from "@storybook/react";
import { Role } from "@/app/components/badges/roles/Role";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Badges/Roles",
    component: Role,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],

} satisfies Meta<typeof Role>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Admin: Story = {
    args: {    
        status: "admin"     
    }
};

export const Expert: Story = {
    args: {    
        status: "expert" 
    }
};

export const Jury: Story = {
    args: {    
        status: "jury"   
    }
};

export const Manager: Story = {
    args: {    
        status: "manager"   
    }
};

export const Participant: Story = {
    args: {    
        status: "participant" 
    }
};

export const Visitor: Story = {
    args: {    
        status: "visitor"    
    }
};

