import type { Meta, StoryObj } from "@storybook/react";
import { SectionTestimonial } from "@/app/content/sections/testimonial/SectionTestimonial";

const meta = {
    title: "Content/Landing Sections/Testimonial",
    component: SectionTestimonial,
    parameters: {
        layout: "padded",
        docs: {
            controls: { sort: "requiredFirst" },
        },
    },
    tags: ["autodocs"],
    argTypes: {},
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
