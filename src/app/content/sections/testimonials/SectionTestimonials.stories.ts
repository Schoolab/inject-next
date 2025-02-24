import type { Meta, StoryObj } from "@storybook/react";
import { SectionTestimonials } from "@/app/content/sections/testimonials/SectionTestimonials";

const meta = {
    title: "Content/Landing Sections/Testimonials",
    component: SectionTestimonials,
    parameters: {
        layout: "padded",
        docs: {
            controls: { sort: "requiredFirst" },
        },
    },
    tags: ["autodocs"],
    argTypes: {},
    args:{
        quotes: [
            {
                quote: `
                    <p>“L’équipe Digitale de Schoolab conçoit, design et développe les sites Web et les Plateformes SaaS Schoolab en collaboration étroite avec nos équipes, nos clients et notre écosystème. Ce positionnement unique permet à chaque membre de l’équipe de contribuer directement au succès de nos programmes pour faire bouger les lignes sur nos missions.”</p>
                `,
                avatar: "img/thumbnails/pierre.jpg",
                author: "Pierre Lemeteil",
                source: "Head of Digital @ Schoolab",
            },
            {
                quote: `
                    <p>“L’équipe Digitale de Schoolab conçoit, design et développe les sites Web et les Plateformes SaaS Schoolab en collaboration étroite avec nos équipes, nos clients et notre écosystème. Ce positionnement unique permet à chaque membre de l’équipe de contribuer directement au succès de nos programmes pour faire bouger les lignes sur nos missions.”</p>
                `,
                author: "Anonymous",
            },
        ]
    },
} satisfies Meta<typeof SectionTestimonials>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
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
