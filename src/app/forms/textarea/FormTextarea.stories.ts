import type { Meta, StoryObj } from "@storybook/react";
import { FormTextarea } from "@/app/forms/textarea/FormTextarea";

const meta = {
    title: "Forms/Textarea",
    component: FormTextarea,
    parameters: {
        layout: "centered",
        docs: {
            controls: { sort: "requiredFirst" },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        required: { control: "boolean" },
        disabled: { control: "boolean" },
    },
    args:{
        required: false,
        disabled: false,
    },

} satisfies Meta<typeof FormTextarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        id: "description",
        placeholder: "Write your text here...",
        defaultValue: "Bienvenue !\n\nDans cette toute première vidéo, nous abordons les bases de la méthodologie du Design Thinking : d'où vient-il, à quoi sert-il ?\n\nPetit récapitulatif des 3 pilliers du Design Thinking :\n- Désirabilité : Quel est de problème de mon utilisateur et est-ce que ma solution y répond ?\n- Viabilité : Est-il prêt à payer pour cette solution ?\n- Faisabilité : Mon équipe a-t-elle les moyens techniques de la développer ?\n\nEt enfin, les 5 grandes étapes de cette méthodologie :\n- Observation : Prendre une posture empathique.\n- Définition : Priorisation des problèmes de notre utilisateur.\n- Idéation : Générer des idées de solutions.\n- Prototypage : Concrétiser sa solution avec peu de moyens.\n- Lancement : Définir une roadmap pour lancer son projet.\n\nLe Design Thinking est une méthode Itérative ! Revenir en arrière pour ajuster le projet n'est pas un problème, c'est même bien souvent nécessaire.\n\nBon courage pour vos projets !", 
        required: false,
        disabled: false,
        fieldSizing: true,
    }
};
