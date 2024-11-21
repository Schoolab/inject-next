import type { Meta, StoryObj } from "@storybook/react";
import { CardFeed } from "@/app/components/cards/CardFeed";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Cards/Feed",
    component: CardFeed,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
        docs: {
            controls: { sort: "requiredFirst" },
        },
    },
     // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
     tags: ["autodocs"],
     argTypes: {
        liked: { control: "boolean" },
        commented: { control: "boolean" },
        copyLink: { control: "boolean" },
    },
    args: {
        author: "Nora Hechelef",
        liked: false,
        commented: false,
        copyLink: true,
        style: {
            width: "32rem",
        },
    },

} satisfies Meta<typeof CardFeed>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
    args: {},
};

export const WithAvatar: Story = {
    args: {
        avatar: "https://inject-prod.s3.amazonaws.com/images/b95837ec-6dcf-4600-8567-dfb71f4e3c38/sq150.jpeg",
    },
};

export const WithRole: Story = {
    args: {
        role: "admin",
    },
};

export const WithType: Story = {
    args: {
        author: "Schoolab",
        type: "org",
    },
};

export const WithMetas: Story = {
    args: {
        avatar: "https://inject-prod.s3.amazonaws.com/images/71446890-6864-4521-9548-8f5973075b3a/sq150.jpeg",
        author: "Pierre Forestier",
        role: "manager",
        metas: [
            { label: "Program Manager, Schoolab" },
        ]
    },
};


export const WithFrom: Story = {
    args: {
        from: "CPI Concept"
    },
};

export const WithReadMore: Story = {
    args: {
        readMore: true,
    },
};

export const WithTitle: Story = {
    args: {
        title: "Bienvenue à Schoolab!",
        content: `
            <p>Nous sommes ravis de vous accueillir sur la plateforme dédiée au programme.</p>
            <p>Nous espérons que vous y accomplirez beaucoup de grandes choses (nous en sommes certains) 💪</p>
            <p>Si vous avez la moindre question, vous pouvez consulter le Help Center 😎</p>
            <p>Ou nous poser des questions juste ici 🤩</p>
            <p>Bonne aventure !</p>
        `,
    },
};

export const Liked: Story = {
    args: {
        liked: true,
        likes: 9,
    },
};

export const Commented: Story = {
    args: {
        commented: true,
        comments: 4,
    },
};
