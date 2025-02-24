import React from "react";
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { Stepper, StepType } from "@/app/components/stepper/Stepper";
import { Alert } from "@/app/components/alerts/Alert";
import { FormGroup } from "@/app/forms/FormGroup";
import { FormInput } from "@/app/forms/FormInput";
import { FormInputWrapper } from "@/app/forms/FormInputWrapper";
import { Button } from "@/app/components/buttons/Button";
import { Dropdown } from "@/app/components/dropdowns/Dropdown";
import { DropdownItem } from "@/app/components/dropdowns/DropdownItem";
import { DropdownDivider } from "@/app/components/dropdowns/DropdownDivider";
import { DropdownMenu } from "@/app/components/dropdowns/DropdownMenu";
import { FormTextarea } from "@/app/forms/FormTextarea";
import { ItemResource } from "@/app/components/items/ItemResource";
import { DropdownNested } from "@/app/components/dropdowns/DropdownNested";
import { Section } from "@/app/components/sections/Section";
import { FormFieldSet } from "@/app/forms/FormFieldSet";
import { FormOption } from "@/app/forms/FormOption";
import { LangSwitch } from "@/app/components/lang-switch/LangSwitch";
import { FormSelect } from "@/app/forms/FormSelect";

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
                                                // caption="A mutualized plan with all features"
                                                value="lite"
                                                type="radio"
                                                card={true}
                                                icon="plan-native"
                                                // labelClass="flex-column gap-3xs"
                                                defaultChecked={true}
                                            />
                                        </div>
                                        <div className="g-col-12 g-col-md-6">
                                            <FormOption
                                                name="plan"
                                                id="plan-data"
                                                label="Data"
                                                // caption="Only used to collect data"
                                                value="data"
                                                type="radio"
                                                card={true}
                                                icon="plan-data"
                                                // labelClass="flex-column gap-3xs"
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

                                    <FormGroup addClass="cq-12" id="owner" label="Owner" required={true}>
                                        <FormSelect
                                            id="owner"
                                            options={[
                                                { label: "Guillaume Yvon", value: "guillaume-yvon" },
                                                { label: "Org Admins", value: "org-admin" },
                                            ]}
                                        />
                                    </FormGroup>

                                    <FormGroup addClass="cq-12 cq-xs-6" id="user-case" label="User case">
                                    <FormSelect
                                        id="user-case"
                                        options={[
                                        {
                                            label: "Incubator & Entrepreneurship",
                                            value: "incubator",
                                        },
                                        {
                                            label: "Innovation hub & Community",
                                            value: "innovation-hub",
                                        },
                                        {
                                            label: "Hackathon, Bootcamp & Project acceleration",
                                            value: "hackathon"
                                        },
                                        {
                                            label: "Learning Expedition",
                                            value: "learning-expedition"
                                        },
                                        {
                                            label: "Learning",
                                            value: "learning"
                                        },
                                        {
                                            label: "Workshop",
                                            value: "workshop"
                                        },
                                        {
                                            label: "Startup & Student challenge",
                                            value: "startup-challenge"
                                        },
                                        {
                                            label: "Strategic thinking, Framework",
                                            value: "strategic-thinking"
                                        },
                                        {
                                            label: "Inject",
                                            value: "inject"
                                        },
                                        {
                                            label: "Leadership, Talent & Intrapreneurship program",
                                            value: "leadership"
                                        },
                                        {
                                            label: "Other",
                                            value: "other"
                                        }
                                        ]}
                                    />
                                    </FormGroup>

                                    <FormGroup addClass="cq-12 cq-xs-6" id="capability" label="Capability">
                                    <FormSelect
                                        id="capability"
                                        options={[
                                        {
                                            label: "Education",
                                            value: "education"
                                        },
                                        {
                                            label: "Entrepreneurship",
                                            value: "entrepreneurship"
                                        },
                                        {
                                            label: "Innovation",
                                            value: "innovation"
                                        },
                                        {
                                            label: "Inject",
                                            value: "inject"
                                        },
                                        {
                                            label: "Campus",
                                            value: "campus"
                                        },
                                        ]}
                                    />
                                    </FormGroup>

                                    <FormGroup id="business-line" label="Business line">
                                    <FormSelect
                                        id="business-line"
                                        options={[
                                            {
                                                label: "Select a business line",
                                                value: "",
                                                selected: true,
                                                disabled: true,
                                            },
                                            {
                                                label: "Agriculture and Food Production",
                                                value: "agriculture-and-food-production",
                                            },
                                            {
                                                label: "Corporate services",
                                                value: "corporate-services",
                                            },
                                            {
                                                label: "Education",
                                                value: "education",
                                            },
                                            {
                                                label: "Energy and Utilities",
                                                value: "energy-and-utilities",
                                            },
                                            {
                                                label: "Entertainment",
                                                value: "entertainment",
                                            },
                                            {
                                                label: "Financial Services",
                                                value: "financial-services",
                                            },
                                            {
                                                label: "Healthcare and Life Sciences",
                                                value: "healthcare-and-life-sciences",
                                            },
                                            {
                                                label: "Hospitality and Tourism",
                                                value: "hospitality-and-tourism",
                                            },
                                            {
                                                label: "Manufacturing",
                                                value: "manufacturing",
                                            },
                                            {
                                                label: "Media",
                                                value: "media",
                                            },
                                            {
                                                label: "Mobility and Logistics",
                                                value: "mobility-and-logistics",
                                            },
                                            {
                                                label: "Public Administration and Government Services",
                                                value: "public-administration-and-government-services",
                                            },
                                            {
                                                label: "Real Estate and Construction",
                                                value: "real-estate-and-construction",
                                            },
                                            {
                                                label: "Retail and Consumer Goods",
                                                value: "retail-and-consumer-goods",
                                            },
                                            {
                                                label: "Software and Technology",
                                                value: "software-and-technology",
                                            },
                                            {
                                                label: "Telecommunications",
                                                value: "telecommunications",
                                            },
                                            {
                                                label: "Other",
                                                value: "other",
                                            }
                                        ]}
                                    />
                                    </FormGroup>

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

                                    <FormGroup addClass="cq-12" id="google_drive" label="Google Drive" hint="The folder where the program files are stored.">
                                        <FormInputWrapper>
                                            <FormInput id="google_drive" placeholder="e.g. https://drive.google.com/..." />
                                        </FormInputWrapper>
                                    </FormGroup>

                                    <div className="cq-12">
                                        <Alert type="info" icon="information" text={`You will be asked to add program managers in the third step`} />
                                    </div>
                                </div>
                            </Section>

                            <Section title="Program outline" subtitle="Describe the program and its objectives.">
                                <div className="cq">
                                    <FormGroup id="problematics" label="Problems addressed">
                                        <FormTextarea id="problematics" rows={4} />
                                    </FormGroup>
                                    <FormGroup id="mission_goal" label="Mission goal">
                                        <FormTextarea id="mission_goal" rows={4} />
                                    </FormGroup>
                                    <FormFieldSet id="methodology" legend="Used methodology">
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
