import React from "react";
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { Stepper, StepType } from "@/app/components/Stepper";
import { Alert } from "@/app/components/Alert";
import { FormGroup } from "@/app/components/forms/FormGroup";
import { FormInput } from "@/app/components/forms/FormInput";
import { FormInputWrapper } from "@/app/components/forms/FormInputWrapper";
import { Button } from "@/app/components/Button";
import { Dropdown } from "@/app/components/dropdown/Dropdown";
import { DropdownItem } from "@/app/components/dropdown/DropdownItem";
import { DropdownDivider } from "@/app/components/dropdown/DropdownDivider";
import { DropdownMenu } from "@/app/components/dropdown/DropdownMenu";
import { FormTextarea } from "@/app/components/forms/FormTextarea";
import { ItemResource } from "@/app/components/items/ItemResource";
import { DropdownNested } from "@/app/components/dropdown/DropdownNested";
import { Section } from "@/app/components/Section";
import { FormFieldSet } from "@/app/components/forms/FormFieldSet";
import { FormOption } from "@/app/components/forms/FormOption";
import { LangSwitch } from "@/app/components/LangSwitch";
import { FormSelect } from "@/app/components/forms/FormSelect";
import { AppSplit } from "@/app/layouts/AppSplit";
import { ProgressBar } from "@/app/components/ProgressBar";
import { CardProgram } from "@/app/components/cards/CardProgram";

const Preview = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center w-100 h-100">
        <CardProgram
          name="Impact Innovators"
          actions= {[
            { 
                title: "Join the program",
                metas: [
                    { label: "Applicants" },
                    { iconName: "account", label: "143", addClass: "font-weight-bold" },
                ],
                buttons: [
                    { label: "Join", type: "primary", link: "#" },
                    { label: "Learn more", type: "default", link: "#" },
                ],
            }
          ]}
          style={{ width: "100%", maxWidth: "32rem", }}
          cover="img/program-innovators.png"
        />
    </div>
  );
};

interface AdminInstallerFeaturesProps {
  theme?: "default" | "Inject" | "Schoolab" | "Moho" | "Raiselab";
}

export const AdminInstallerFeatures = ({ theme = "default" }: AdminInstallerFeaturesProps) => {

    return (
        <Layout showNavbar={false} showShortcutbar={false}>
            <AppSplit addClass="py-3xl" theme={theme} positionX="left" shadow={true} preview={<Preview />}>
               
                <div className="d-flex flex-column gap-xs">
                    <h1 className="display-3">Enable features</h1>
                    <p>Choose which features to keep or skip during the program setup.</p>
                </div>

                <form className="d-flex flex-column flex-fill justify-content-start" name="ChallengeDefaultForm" method="post" action="/rest/challenge/create/default">

                    <div className="d-flex flex-column gap-md mb-lg">
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
                    </div>

                    <div className="d-flex gap-lg align-items-center mt-auto">
                        <ProgressBar percentage={100} max={100}  addClass="flex-fill" inline={true} text="8/8" />
                        <div className="d-flex gap-xs">
                          <Button type="default" label="Previous" link="/?path=/story/pages-admin-installer-studies--managers" />
                          <Button type="primary" label="Proceed to dashboard" link="#" />
                        </div>
                    </div>

                </form>
            </AppSplit>
        </Layout>
    );
};
