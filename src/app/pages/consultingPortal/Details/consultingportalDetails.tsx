import React from "react";

import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { Button } from "@/app/components/buttons/Button";
import { Title } from "@/app/components/page-header/Title";
import { SubNav } from "@/app/components/page-header/SubNav";
import { Stepper, StepType } from "@/app/components/stepper/Stepper";
import { CardFeed } from "@/app/components/cards/CardFeed";
import { Section } from "@/app/components/sections/Section";

const steps: StepType[] = [
    {
        title: "Initiation",
        description: "Completed",
        status: "completed",
        link: "",
        current: false,
    },
    {
        title: "Diagnostic",
        description: "In progress",
        status: "in-progress",
        current: true,
    },
    {
        title: "Delivery",
        description: "Not completed",
        status: "not-completed",
        current: false,
    },
    {
        title: "Closing",
        description: "Not completed",
        status: "not-completed",
        current: false,
    },
];

export const consultingportalDetails = () => {
    return (
        <Layout showShortcutbar={false}>
            <AppContent
                showBreadcrumb={false}
                sections="transparent"
                title="Consulting portal"
                buttons={[
                    {
                        type: "default",
                        label: "Manage access",
                        link: "",
                        iconStartName: "account-plus",
                        hasNumber: "3",
                    },
                ]}
                subnav={[
                    {
                        label: "Details",
                        href: "",
                        isActive: true,
                    },
                    {
                        label: "Shared files",
                        href: "",
                        
                    },
                    {
                        label: "Satisfaction",
                        href: "",
                    },
                ]}
            >

                    <Section addClass="gap-2xl">
                        <Stepper steps={steps} />
                        <CardFeed 
                            avatar="https://inject-prod.s3.amazonaws.com/images/71446890-6864-4521-9548-8f5973075b3a/sq150.jpeg"
                            author="Pierre Forestier"
                            metas={[
                                { label: "Program Manager, Schoolab" },
                            ]}
                            content={`
                                <p>As we’re reaching the end of our mission together, I wanted to thank you personally for the collaboration and the trust you’ve placed in us.</p>
                                <ul><li>You’ll find all the key deliverables and documents available in the Shared Files section of this space.</li>
                                <li>We’d love to hear your thoughts — please take a moment to share your feedback in the Satisfaction tab.</li></ul>
                                <p>Your insights help us grow and continue to improve how we support our partners.</p>
                                <p>It’s been a real pleasure working with you — and I hope we get to collaborate again in the future!</p>
                                <p>Warm regards</p>
                            `}
                            readMore={false}
                           isFooterActions ={false}
                           isTitleActions = {false}
                        >
                        </CardFeed>       
                    </Section>
                    <Section addClass="border rounded p-md" title="InjectAI - Mission report" titleIcon="ai" addClassTitleIcon="text-assistant" subtitle="An AI assistant to guide you through your misson with schoolab" collapsable={true} collapsableId="InjectAI">
                                blahblah
                    </Section>
                          

            </AppContent>
        </Layout>
    );
};
