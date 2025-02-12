import type { Meta, StoryObj } from "@storybook/react";
import { SectionTestimonial } from "@/app/components/sections/SectionTestimonial";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Landing Sections/Testimonial",
    component: SectionTestimonial,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "padded",
        docs: {
            controls: { sort: "requiredFirst" },
        },
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        
    },
    args:{
        quote: `
            <p>“L’équipe Digitale de Schoolab conçoit, design et développe les sites Web et les Plateformes SaaS Schoolab en collaboration étroite avec nos équipes, nos clients et notre écosystème. Ce positionnement unique permet à chaque membre de l’équipe de contribuer directement au succès de nos programmes pour faire bouger les lignes sur nos missions.”</p>
        `,
        author: "Pierre Lemeteil",
        source: "Head of Digital @ Schoolab",
    },
} satisfies Meta<typeof SectionTestimonial>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
    },
};

export const WithAvatar: Story = {
    args: {
        avatar: "img/thumbnails/pierre.jpg",
    },
};

export const WithTitle: Story = {
    args: {
        title: "Hear from our alumni",
        subtitle: "Meet our inspiring alumni from the Innovation Program, who are transforming ideas into impactful solutions.",
    },
};

export const WithButtons: Story = {
    args: {
        title: "Hear from our alumni",
        subtitle: "Meet our inspiring alumni from the Innovation Program, who are transforming ideas into impactful solutions.",
        buttons: [
            { type: "primary", label: "Join today" },
            { type: "default", label: "Learn more" },
        ],
    },
};
