import React from "react";
import { Layout } from "../../../layouts/layout";
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

const steps: StepType[] = [
  {
    title: "Basic info",
    description: "Completed",
    status: "in-progress",
    link: "/?path=/story/pages-admin-installer--basic-info",
    current: true,
  },
  {
    title: "Categories",
    description: "In progress",
    status: "not-completed",
    current: false,
  },
  {
    title: "Managers",
    description: "Not completed",
    status: "not-completed",
    current: false,
  },
  {
    title: "Features",
    description: "Not completed",
    status: "not-completed",
    current: false,
  }
];

export const AdminInstallerBasicInfo = () => {
    return (
        <Layout showShortcutbar={false}>
            <AppContent showSubnav={false}>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 ">
                        <div className="mb-7 py-5 py-lg-0">
                            <Stepper steps={steps} />
                        </div>

                        <form name="ChallengeDefaultForm" method="post" action="/rest/challenge/create/default">
                            <Section title="Basic info" subtitle="Name the program and choose a description.">
                                <LangSwitch />

                                <div className="cq">
                                    
                                    <FormGroup id="name" required={true} label="Name" hint="Should be short and descriptive.">
                                        <FormInputWrapper>
                                            <FormInput id="name" required={true} defaultValue="Impact Innovators" maxLength={60} />
                                            <div className="input-floating-actions">
                                                <Dropdown>
                                                    <Button iconStartName="ai" size="xs" type="transparent" addClass="text-ai"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                                    <DropdownMenu direction="right" addClass="dropright">
                                                        <DropdownItem type="ai" label="Improve writing" iconName="improve-writing" />
                                                        <DropdownItem type="ai" label="Make shorter" iconName="shorter-text" />
                                                        <DropdownNested>
                                                            <DropdownItem
                                                                type="ai"
                                                                label="Change tone..."
                                                                iconName="tone"
                                                                toggle={true}
                                                                data-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                            />
                                                            <DropdownMenu>
                                                                <DropdownItem label="Professional" />
                                                                <DropdownItem label="Casual" />
                                                                <DropdownItem label="Straightforward" />
                                                                <DropdownItem label="Confident" />
                                                                <DropdownItem label="Friendly" />
                                                            </DropdownMenu>
                                                        </DropdownNested>
                                                        <DropdownNested>
                                                            <DropdownItem
                                                                type="ai"
                                                                label="Translate to..."
                                                                iconName="translate"
                                                                toggle={true}
                                                                data-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                            />
                                                            <DropdownMenu>
                                                                <DropdownItem label="English" />
                                                                <DropdownItem label="Korean" />
                                                                <DropdownItem label="Chinese, Simplified" />
                                                                <DropdownItem label="Chinese, Traditional" />
                                                                <DropdownItem label="Japanese" />
                                                                <DropdownItem label="Spanish" />
                                                                <DropdownItem label="Russian" />
                                                                <DropdownItem label="French" />
                                                                <DropdownItem label="Portuguese" />
                                                                <DropdownItem label="German" />
                                                                <DropdownItem label="Italian" />
                                                                <DropdownItem label="Dutch" />
                                                                <DropdownItem label="Indonesian" />
                                                                <DropdownItem label="Filipino" />
                                                                <DropdownItem label="Vietnamese" />
                                                            </DropdownMenu>
                                                        </DropdownNested>
                                                        <DropdownDivider />
                                                        <DropdownItem label="Copy from English" iconName="copy" />
                                                        <DropdownItem label="Restore to saved value" iconName="restore" />
                                                        <div className="dropdown-content text-center">
                                                            <span>Ask AI can make mistakes. Check important info.</span>
                                                        </div>
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </div>
                                        </FormInputWrapper>
                                    </FormGroup>
                                    <FormGroup id="slug" required={true} label="Slug" hint="Slug must not be changed after you communicate it to your users.">
                                        <FormInputWrapper>
                                            <FormInput id="slug" required={true} defaultValue="impact-innovators" maxLength={60} />
                                            <div className="input-floating-actions">
                                                <Button iconStartName="restore" size="xs" type="muted" />
                                            </div>
                                        </FormInputWrapper>
                                    </FormGroup>

                                    <FormGroup addClass="cq-12 cq-xs-6" id="start-date" label="Start date" required={true}>
                                        <FormInput id="start-date" type="datetime-local" />
                                    </FormGroup>

                                    <FormGroup addClass="cq-12 cq-xs-6" id="end-date" label="End date" required={true}>
                                        <FormInput id="end-date" type="datetime-local" />
                                    </FormGroup>
                                </div>

                                <FormGroup id="description" label="Short description" hint="A short sentence to explain what the program offers to participants. It will appear on lists.">
                                    <FormInputWrapper>
                                        <FormTextarea
                                            id="description"
                                            rows={4}
                                            defaultValue={"A program to teach you our methodologies and the basics of impact, in your daily life as well as in your company, for a brighter future!"}
                                            maxLength={500}
                                        />
                                        <div className="input-floating-actions">
                                            <Dropdown>
                                                <Button iconStartName="ai" size="xs" type="transparent" addClass="text-ai" data-toggle="dropdown" aria-expanded="false" />
                                                <DropdownMenu direction="right" addClass="dropright">
                                                    <DropdownItem type="ai" label="Write a course summary" caption="From all the content inside" iconName="summarize" />
                                                    <DropdownItem type="ai" label="Translate to French" iconName="translate-generate" />
                                                    <DropdownDivider />
                                                    <DropdownItem type="ai" label="Improve writing" iconName="improve-writing" />
                                                    <DropdownItem type="ai" label="Make shorter" iconName="shorter-text" />
                                                    <DropdownNested>
                                                        <DropdownItem
                                                            type="ai"
                                                            label="Change tone..."
                                                            iconName="tone"
                                                            toggle={true}
                                                            data-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        />
                                                        <DropdownMenu>
                                                            <DropdownItem label="Professional" />
                                                            <DropdownItem label="Casual" />
                                                            <DropdownItem label="Straightforward" />
                                                            <DropdownItem label="Confident" />
                                                            <DropdownItem label="Friendly" />
                                                        </DropdownMenu>
                                                    </DropdownNested>
                                                    <DropdownNested>
                                                        <DropdownItem
                                                            type="ai"
                                                            label="Translate to..."
                                                            iconName="translate"
                                                            toggle={true}
                                                            data-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        />
                                                        <DropdownMenu>
                                                            <DropdownItem label="English" />
                                                            <DropdownItem label="Korean" />
                                                            <DropdownItem label="Chinese, Simplified" />
                                                            <DropdownItem label="Chinese, Traditional" />
                                                            <DropdownItem label="Japanese" />
                                                            <DropdownItem label="Spanish" />
                                                            <DropdownItem label="Russian" />
                                                            <DropdownItem label="French" />
                                                            <DropdownItem label="Portuguese" />
                                                            <DropdownItem label="German" />
                                                            <DropdownItem label="Italian" />
                                                            <DropdownItem label="Dutch" />
                                                            <DropdownItem label="Indonesian" />
                                                            <DropdownItem label="Filipino" />
                                                            <DropdownItem label="Vietnamese" />
                                                        </DropdownMenu>
                                                    </DropdownNested>
                                                    <DropdownDivider />
                                                    <DropdownItem label="Copy from English" iconName="copy" />
                                                    <DropdownItem label="Restore to saved value" iconName="restore" />
                                                    <div className="dropdown-content text-center">
                                                        <span>Ask AI can make mistakes. Check important info.</span>
                                                    </div>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </div>
                                    </FormInputWrapper>
                                </FormGroup>

                            </Section>

                            <Section title="Properties" subtitle="Choose the properties that best fit your program.">
                                <div className="cq">
                                    <FormFieldSet addClass="cq-12" id="plan" legend="Plan" grid={true}>
                                        <div className="g-col-12 g-col-md-6">
                                            <FormOption
                                                name="plan"
                                                id="plan-lite"
                                                label="Lite"
                                                caption="A mutualized plan with all features"
                                                value="lite"
                                                type="radio"
                                                card={true}
                                                icon="plan-native"
                                                labelClass="flex-column gap-3xs"
                                                defaultChecked={true}
                                            />
                                        </div>
                                        <div className="g-col-12 g-col-md-6">
                                            <FormOption
                                                name="plan"
                                                id="plan-data"
                                                label="Data"
                                                caption="Only used to collect data"
                                                value="data"
                                                type="radio"
                                                card={true}
                                                icon="plan-data"
                                                labelClass="flex-column gap-3xs"
                                            />
                                        </div>
                                    </FormFieldSet>

                                    <FormFieldSet addClass="cq-12" id="confidentiality" legend="Confidentiality" grid={true}>
                                        <div className="g-col-12 g-col-md-6">
                                            <FormOption
                                                name="confidentiality"
                                                id="confidentiality-public"
                                                label="Public"
                                                value="public"
                                                type="radio"
                                                card={true}
                                                icon="visibility"
                                                defaultChecked={true}
                                            />
                                        </div>
                                        <div className="g-col-12 g-col-md-6">
                                            <FormOption
                                                name="confidentiality"
                                                id="confidentiality-confidential"
                                                label="Confidential"
                                                value="confidential"
                                                type="radio"
                                                card={true} 
                                                icon="visibility-off"
                                            />
                                        </div>
                                    </FormFieldSet>
                                    
                                    <FormGroup addClass="cq-12 cq-xs-6" id="pipedrive_id" label="Pipedrive ID">
                                        <FormInputWrapper>
                                            <FormInput id="pipedrive_id" placeholder="e.g. #1234567890" />
                                        </FormInputWrapper>
                                    </FormGroup>

                                    <FormGroup addClass="cq-12 cq-xs-6" id="customer" label="Customer name">
                                        <FormInputWrapper>
                                            <FormInput id="customer" placeholder="e.g. Elliot Alderson" />
                                        </FormInputWrapper>
                                    </FormGroup>

                                    <FormGroup addClass="cq-12" id="owner" label="Owner" required={true}>
                                        <FormSelect
                                            id="owner"
                                            options={[
                                                { label: "Guillaume Yvon", value: "guillaume-yvon" },
                                                { label: "Org Admins", value: "org-admin" },
                                            ]}
                                        />
                                    </FormGroup>

                                    <FormGroup addClass="cq-12" id="google_drive" label="Google Drive" hint="The link to the Google Drive folder where the program files are stored.">
                                        <FormInputWrapper>
                                            <FormInput id="google_drive" placeholder="e.g. https://drive.google.com/..." />
                                        </FormInputWrapper>
                                    </FormGroup>

                                    <div className="cq-12">
                                        <Alert type="info" icon="information" text={`You will be asked to add program managers in the third step`} />
                                    </div>
                                </div>
                            </Section>

                            <Section title="Program" subtitle="Describe the program and its objectives.">
                                <div className="cq">
                                    <FormGroup id="problematics" label="Problems addressed">
                                        <FormTextarea id="problematics" rows={4} />
                                    </FormGroup>
                                    <FormGroup id="mission_goal" label="Mission goal">
                                        <FormTextarea id="mission_goal" rows={4} />
                                    </FormGroup>
                                    <FormFieldSet id="methodology" legend="Methodology used">
                                        <FormOption id="methodology" label="Consulting" value="consulting" type="radio" card={true} />
                                        <FormOption id="methodology" label="Design fiction" value="design_fiction" type="radio" card={true} />
                                        <FormOption id="methodology" label="Design thinking" value="design_thinking" type="radio" card={true} />
                                        <FormOption id="methodology" label="Educational engineering" value="educational_engineering" type="radio" card={true} />
                                        <FormOption id="methodology" label="Sustainable design" value="sustainable_design" type="radio" card={true} />
                                        <FormOption id="methodology" label="UX / UI" value="ux_ui" type="radio" card={true} />
                                        <FormOption id="methodology" label="Other" value="other" type="radio" card={true} />
                                    </FormFieldSet>
                                </div>
                            </Section>

                            <Section title="Results and impact" subtitle="Describe the results and impact of the program.">
                                <div className="cq">
                                    <FormGroup id="impact" label="Results and impact" hint="What is the impact of the program? Including environmental and social impact">
                                        <FormTextarea id="impact" rows={4} />
                                    </FormGroup>
                                    <FormGroup id="customer_verbatim" label="Customer verbatim">
                                        <FormTextarea id="customer_verbatim" rows={4} />
                                    </FormGroup>
                                    <FormGroup id="note" label="Note" hint="Why do we believe in it?">
                                        <FormTextarea id="note" rows={4} />
                                    </FormGroup>
                                </div>

                                <div className="d-flex gap-xs justify-content-end">
                                    <Button type="primary" label="Next step" />
                                </div>
                            </Section>

                        </form>
                    </div>
                </div>
            </AppContent>
        </Layout>
    );
};
