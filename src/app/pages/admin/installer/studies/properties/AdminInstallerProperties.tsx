import React from "react";
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { Stepper, StepType } from "@/app/components/stepper/Stepper";
import { Alert } from "@/app/components/alerts/Alert";
import { FormGroup } from "@/app/forms/group/FormGroup";
import { FormInput } from "@/app/forms/input/FormInput";
import { FormInputWrapper } from "@/app/forms/input-wrapper/FormInputWrapper";
import { Button } from "@/app/components/buttons/Button";
import { Dropdown } from "@/app/components/dropdowns/Dropdown";
import { DropdownItem } from "@/app/components/dropdowns/DropdownItem";
import { DropdownDivider } from "@/app/components/dropdowns/DropdownDivider";
import { DropdownMenu } from "@/app/components/dropdowns/DropdownMenu";
import { FormTextarea } from "@/app/forms/textarea/FormTextarea";
import { ItemResource } from "@/app/components/items/ItemResource";
import { DropdownNested } from "@/app/components/dropdowns/DropdownNested";
import { Section } from "@/app/components/sections/Section";
import { FormFieldSet } from "@/app/forms/fieldset/FormFieldSet";
import { FormOption } from "@/app/forms/option/FormOption";
import { LangSwitch } from "@/app/components/lang-switch/LangSwitch";
import { FormSelect } from "@/app/forms/select/FormSelect";
import { AppSplit } from "@/app/layouts/AppSplit";
import { ProgressBar } from "@/app/components/progress/bar/ProgressBar";
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

interface AdminInstallerPropertiesProps {
  theme?: "default" | "Inject" | "Schoolab" | "Moho" | "Raiselab";
}

export const AdminInstallerProperties = ({ theme = "default" }: AdminInstallerPropertiesProps) => {

    return (
        <Layout showNavbar={false} showShortcutbar={false}>
            <AppSplit addClass="py-3xl" theme={theme} positionX="left" shadow={true} preview={<Preview />}>
               
                <div className="d-flex flex-column gap-xs">
                    <h1 className="display-3">Properties</h1>
                    <p>Choose the properties that best fit your program.</p>
                </div>

                <form className="d-flex flex-column flex-fill justify-content-start" name="ChallengeDefaultForm" method="post" action="/rest/challenge/create/default">
                    <div className="cq mb-lg">
                        
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
    
                    </div>

                    <div className="d-flex gap-lg align-items-center mt-auto">
                        <ProgressBar percentage={25} max={100}  addClass="flex-fill" inline={true} text="2/8" />
                        <div className="d-flex gap-xs">
                          <Button type="default" label="Previous" link="/?path=/story/pages-admin-installer-studies--basic-info" />
                          <Button type="primary" label="Next step" link="/?path=/story/pages-admin-installer-studies--program-outline" />
                        </div>
                    </div>

                </form>
            </AppSplit>
        </Layout>
    );
};
