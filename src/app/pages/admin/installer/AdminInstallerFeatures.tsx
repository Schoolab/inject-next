import React from "react";
import { Layout } from "../../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { Stepper, StepType } from "@/app/components/Stepper";
import { Section } from "@/app/components/Section";
import { FormFieldSet } from "@/app/components/forms/FormFieldSet";
import { FormOption } from "@/app/components/forms/FormOption";
import { Alert } from "@/app/components/Alert";
import { Button } from "@/app/components/Button";

const steps: StepType[] = [
    {
      title: "Basic info",
      description: "Completed",
      status: "completed",
      link: "/?path=/story/pages-admin-installer--basic-info",
      current: false,
    },
    {
      title: "Categories",
      description: "In progress",
      status: "completed",
      link: "/?path=/story/pages-admin-installer--categories",
      current: false,
    },
    {
      title: "Managers",
      description: "Not completed",
      status: "completed",
      link: "/?path=/story/pages-admin-installer--managers",
      current: false,
    },
    {
      title: "Features",
      description: "Not completed",
      status: "in-progress",
      current: true,
    }
  ];

export const AdminInstallerFeatures = () => {
    return (
        <Layout showShortcutbar={false}>
            <AppContent showSubnav={false}>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 ">
                        <div className="mb-7 py-5 py-lg-0">
                            <div className="mb-5">
                                <h2>Create a new program</h2>
                                <p className="text-muted">Fill the information below and watch how it will appear to people joining it.</p>
                            </div>
                            <Stepper steps={steps} />
                        </div>
                        <Section title="Features" subtitle="Choose which features to keep or skip during the program setup. You can stop here and send an invitation or a link to the program manager to complete the needed information.">

                            <div className="d-flex flex-column gap-md">
                                <FormFieldSet name="features" legend="Join the program">
                                    <FormOption
                                        name="features"
                                        id="registrations"
                                        value="registrations"
                                        type="checkbox"
                                        card={true}
                                        label="Registrations"
                                        caption="This feature is required to add participants to a program"
                                        defaultChecked={true}
                                        disabled={true}
                                    />
                                    <FormOption
                                        name="features"
                                        id="invitations"
                                        value="invitations"
                                        type="checkbox"
                                        card={true}
                                        label="Invitations"
                                        caption="Send invitations to participants to join the program"
                                    />
                                </FormFieldSet>
                                
                                <FormFieldSet name="features" legend="Content">
                                    <FormOption
                                        name="features"
                                        id="learning"
                                        value="learning"
                                        type="checkbox"
                                        card={true}
                                        label="Learning Course, Modules, Capsules and Tasks"
                                        caption="Create content for participants to learn and validate during the program"
                                        defaultChecked={true}
                                    />
                                    <FormOption
                                        name="features"
                                        id="objectives"
                                        value="objectives"
                                        type="checkbox"
                                        card={true}
                                        label="Objectives, Milestones and Tasks"
                                        caption="Create content for projects to validate during the program"
                                        defaultChecked={true}
                                    />
                                    <FormOption
                                        name="features"
                                        id="libraries"
                                        value="libraries"
                                        type="checkbox"
                                        card={true}
                                        label="Libraries"
                                        caption="Upload and share documents, videos, images and other files with participants"
                                    />
                                    <FormOption
                                        name="features"
                                        id="landing-page"
                                        value="landing-page"
                                        type="checkbox"
                                        card={true}
                                        label="Landing page"
                                        caption="Create landing pages to promote the program"
                                    />
                                </FormFieldSet>

                                <FormFieldSet name="features" legend="Animation">
                                    <FormOption
                                        name="features"
                                        id="coaching"
                                        value="coaching"
                                        type="checkbox"
                                        card={true}
                                        label="Coaching"
                                        caption="Allow experts to create coaching sessions for participants and projects"
                                    />
                                    <FormOption
                                        name="features"
                                        id="evaluations"
                                        value="evaluations"
                                        type="checkbox"
                                        card={true}
                                        label="Evaluations"
                                        caption="Create public votes and evaluation sessions by juries"
                                    />
                                    <FormOption
                                        name="features"
                                        id="events"
                                        value="events"
                                        type="checkbox"
                                        card={true}
                                        label="Events and Signatures"
                                        caption="Create events for participants to attend and sign their presence"
                                    />
                                </FormFieldSet>

                                <FormFieldSet name="features" legend="Communication">
                                    <FormOption
                                        name="features"
                                        id="mails"
                                        value="mails"
                                        type="checkbox"
                                        card={true}
                                        label="Mails and templates"
                                        caption="Schedule and send email campains during the program"
                                    />
                                    <FormOption
                                        name="features"
                                        id="newsfeed"
                                        value="newsfeed"
                                        type="checkbox"
                                        card={true}
                                        label="Newsfeed and Comments"
                                        caption="Enable posts and comments on the program and projects newsfeeds"
                                    />
                                    <FormOption
                                        name="features"
                                        id="chat"
                                        value="chat"
                                        type="checkbox"
                                        card={true}
                                        label="Private messages in chat and Broadcasts"
                                        caption="Allow participants to socialize and chat directly from the program"
                                    />
                                </FormFieldSet>

                                <FormFieldSet name="features" legend="Other">
                                    <FormOption
                                        name="features"
                                        id="insights"
                                        value="insights"
                                        type="checkbox"
                                        card={true}
                                        label="Insights"
                                        caption="Get insights about the program and participants"
                                    />
                                    <FormOption
                                        name="features"
                                        id="data"
                                        value="data"
                                        type="checkbox"
                                        card={true}
                                        label="Data"
                                        caption="Import and export data from a program to another"
                                    />
                                </FormFieldSet>

                                <Alert type="info" icon="information" text={`You can enable each features later from the administrator interface`} />
                            </div>

                            <div className="d-flex gap-xs justify-content-end">
                                <Button type="default" label="Previous" />
                                <Button type="primary" label="Proceed to dashboard" />
                            </div>
                        </Section>
                    </div>
                </div>
            </AppContent>
        </Layout>
    );
};
