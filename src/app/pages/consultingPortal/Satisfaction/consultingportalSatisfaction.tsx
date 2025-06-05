import React from "react";

import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";

import { Button } from "@/app/components/buttons/Button";
import { Title } from "@/app/components/page-header/Title";
import { SubNav } from "@/app/components/page-header/SubNav";
import { ItemFolder } from "@/app/components/items/ItemFolder";
import { CardFeed } from "@/app/components/cards/CardFeed";
import { Section } from "@/app/components/sections/Section";
import { FormGroup } from "@/app/forms/group/FormGroup";
import { Nps } from "@/app/components/nps/Nps";
import { FormTextarea } from "@/app/forms/textarea/FormTextarea";

export const consultingportalSatisfaction = () => {
    return (
        <Layout showShortcutbar={false} hub={false}>
            <main className="application-content transparent-sections">
                <div className="application-header">
                    <Title
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
                    />
                    <SubNav
                        items={[
                            {
                                label: "Details",
                                href: "",
                            },
                            {
                                label: "Shared files",
                                href: "",
                            },
                            {
                                label: "Satisfaction",
                                href: "",
                                isActive: true,
                            },
                        ]}
                    />
                </div>
                <div id="appMainContainer" className="h-100 overflow-y-auto overflow-x-hidden">
                    <div className="container-lg container-lg-fluid p-sm p-md-md p-lg-xl">
                        <Section addClass="gap-2xl">
                            <CardFeed
                                avatar="https://inject-prod.s3.amazonaws.com/images/71446890-6864-4521-9548-8f5973075b3a/sq150.jpeg"
                                author="Pierre Forestier"
                                metas={[{ label: "Program Manager, Schoolab" }]}
                                content={`
                                            <h4>Hi, thanks again for the great collab! 🙌</h4><p>We’d love your quick feedback to keep improving — just leave a score and a comment below 👇</p>
                                            <p>Warm regards</p>
                                        `}
                                readMore={false}
                                isFooterActions={false}
                                isTitleActions={false}
                            ></CardFeed>

                            <FormGroup id="nps" label="How likely are you to recommend Schoolab to a professional contact or partner?" hint="On a scale from 0 to 10. 0 means very disappointed, 10 very satisfied.">
                                <Nps />
                            </FormGroup>
                            <FormGroup id="Context and Challenges" label="What is the main reason for your score?" >
                                <FormTextarea id="score" rows={4} />
                            </FormGroup>
                        </Section>
                    </div>
                </div>
                <div className="d-flex p-md border-top">
                    <div className="d-flex gap-xs flex-fill justify-content-end">
                        <Button type="primary" label="Send" iconStartName="send"></Button>
                    </div>
                </div>
            </main>
        </Layout>
    );
};
