import React from "react";
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { Button } from "@/app/components/Button";
import { ItemsGroup } from "@/app/components/items-group/ItemsGroup";
import { ItemsGroupHeader } from "@/app/components/items-group/ItemsGroupHeader";
import { ItemQuestionnaire } from "@/app/components/items/ItemQuestionnaire";
import { ItemCondition } from "@/app/components/items/ItemCondition";
import { Section } from "@/app/components/Section";
import { EmptyState } from "@/app/content/EmptyState";
import { ItemForm } from "@/app/components/items/parts/ItemForm";

export const ManageApplicationForms = () => {
    return (
        <Layout  sideBar="Manage">
            <AppContent
                sections="transparent"
                breadcrumb={[
                    {
                        label: "Impact Innovators",
                        href: "#",
                    },
                    {
                        label: "Manage",
                        href: "#",
                    },
                    {
                        label: "Participants",
                        href: "#",
                    },
                    {
                        label: "Application forms",
                    },
                ]}
                title="Application forms"
            >
                <div className="row">
                    <div className="col-12">
                        <Section title="Participants" subtitle="Add questions you want to ask to participants during their applications." collapsable isOpen={true} collapsableId="participants">
                            <div className="grid-vertical gap-md">
                                <ItemsGroup>
                                    <ItemsGroupHeader label="Basic info" />
                                    <div className="d-flex flex-column gap-2xs">
                                        <ItemQuestionnaire type="text" label="Your name" required locked={true} />
                                        <ItemQuestionnaire type="textarea" label="Describe yourself" required locked={true} />
                                        <ItemQuestionnaire type="select" label="Select your program" required locked={true} />
                                        <ItemQuestionnaire type="radio" label="Are you a student?" required />
                                    </div>
                                </ItemsGroup>
                                <ItemsGroup>
                                    <ItemsGroupHeader label="School info" />
                                    <div className="d-flex flex-column gap-2xs">
                                        <ItemCondition condition="Participant's type is" value="Student">
                                            <ItemQuestionnaire type="checklist" label="Choose your school" caption="238 options: [list options here]" required collapsable={true} id="school">
                                                <ItemForm addClass="bg-highlight rounded-sm p-lg mb-2xs" />
                                            </ItemQuestionnaire>
                                        </ItemCondition>
                                        <ItemQuestionnaire type="attachment" label="Upload your resume" required  />
                                        <ItemQuestionnaire type="link" label="Your LinkedIn profile" required />
                                    </div>
                                </ItemsGroup>
                                <ItemsGroup>
                                    <ItemsGroupHeader label="Conditions" />
                                    <div className="d-flex flex-column gap-2xs">
                                        <ItemQuestionnaire type="checkbox" label="I agree to the terms and conditions" required locked={true} />
                                        <ItemQuestionnaire type="rating" label="Rate the program registration process" required isPrivate={true} />
                                    </div>
                                    <Button label="Add question" iconStartName="plus-circle" size="sm" type="muted" addClass="align-self-start" />
                                </ItemsGroup>
                                <Button label="Add step" iconStartName="plus-circle" size="sm" type="muted" addClass="align-self-start" />
                            </div>
                        </Section>
                        <Section title="Projects" subtitle="Add questions you want to ask to participants during their applications." collapsable isOpen={true} collapsableId="projects">
                                <EmptyState
                                    title="There’s no questions yet"
                                    text="Before being able to add a question you have to create a&nbsp;first&nbsp;step."
                                    iconTitle="questionnaire"
                                    iconBtn="plus-circle"
                                    labelBtn="Add step"
                                    labelLink="Learn more about questions"
                                    spacious={true}
                                />
                        </Section>
                        <Section title="Experts" subtitle="Add questions you want to ask to participants during their applications." collapsable isOpen={false} collapsableId="experts">
                        <EmptyState
                                    title="There’s no questions yet"
                                    text="Before being able to add a question you have to create a&nbsp;first&nbsp;step."
                                    iconTitle="questionnaire"
                                    iconBtn="plus-circle"
                                    labelBtn="Add step"
                                    labelLink="Learn more about questions"
                                    spacious={true}
                                />
                        </Section>
                        <Section title="Jury" subtitle="Add questions you want to ask to participants during their applications." collapsable isOpen={false} collapsableId="jury">
                            <EmptyState
                                title="There’s no questions yet"
                                text="Before being able to add a question you have to create a&nbsp;first&nbsp;step."
                                iconTitle="questionnaire"
                                iconBtn="plus-circle"
                                labelBtn="Add step"
                                labelLink="Learn more about questions"
                            />
                        </Section>
                    </div>
                </div>
            </AppContent>
        </Layout>
    );
};
