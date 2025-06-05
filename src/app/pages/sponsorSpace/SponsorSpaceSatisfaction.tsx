import React from "react";
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { CardEvent } from "@/app/components/cards/CardEvent";
import { Button } from "@/app/components/buttons/Button";
import { CardFeed } from "@/app/components/cards/CardFeed";
import { ItemResource } from "@/app/components/items/ItemResource";
import { Icon } from "@/app/components/icons/Icon";
import { Dropdown } from "@/app/components/dropdowns/Dropdown";
import { DropdownMenu } from "@/app/components/dropdowns/DropdownMenu";
import { DropdownItem } from "@/app/components/dropdowns/DropdownItem";
import { DropdownDivider } from "@/app/components/dropdowns/DropdownDivider";
import { Section } from "@/app/components/sections/Section";
import { CardParticipant } from "@/app/components/cards/CardParticipant";
import { ItemSetupTask } from "@/app/components/items/ItemSetupTask";
import { ItemFolder } from "@/app/components/items/ItemFolder";
import { FormGroup } from "@/app/forms/group/FormGroup";
import { Nps } from "@/app/components/nps/Nps";
import { FormTextarea } from "@/app/forms/textarea/FormTextarea";

export const SponsorSpaceSatisfaction = () => {
    return (
        <Layout theme="default" shortcutBarExpanded={true}>
            <AppContent
                sections="separated"
                breadcrumb={[
                    {
                        label: "Impact Innovators",
                        href: "./?path=/story/pages-program-dashboard--overview",
                    },
                    {
                        label: "Sponsor space",
                        href: "./?path=/story/pages-program-dashboard--overview",
                    },
                    {
                        label: "Satisfaction",
                    },
                ]}
                title="Sponsor space"
                subnav={[
                    {
                        label: "Overview",
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
                    {
                        label: "Projects",
                        href: "",
                    },
                    {
                        label: "Members",
                        href: "",
                    },
                ]}
            >
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
                    <FormGroup id="Context and Challenges" label="What is the main reason for your score?">
                        <FormTextarea id="score" rows={4} />
                    </FormGroup>
                      <div className="d-flex gap-xs flex-fill justify-content-end">
                                            <Button type="primary" label="Send" iconStartName="send"></Button>
                                        </div>
                </Section>
            </AppContent>
        </Layout>
    );
};
