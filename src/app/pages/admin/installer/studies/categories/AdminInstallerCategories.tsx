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

interface AdminInstallerCategoriesProps {
  theme?: "default" | "Inject" | "Schoolab" | "Moho" | "Raiselab";
}

export const AdminInstallerCategories = ({ theme = "default" }: AdminInstallerCategoriesProps) => {

    return (
        <Layout showNavbar={false} showShortcutbar={false}>
            <AppSplit addClass="py-3xl" theme={theme} positionX="left" shadow={true} preview={<Preview />}>
               
                <div className="d-flex flex-column gap-xs">
                    <h1 className="display-3">Categories</h1>
                    <p>Choose the impact and the categories of the program. It will be used for insights.</p>
                </div>

                <form className="d-flex flex-column flex-fill justify-content-start" name="ChallengeDefaultForm" method="post" action="/rest/challenge/create/default">

                    <div className="cq mb-lg">
                        
                        <FormFieldSet id="impact" legend="Impact" hint="Choose the the case that best describes the program." grid={true}>
                          <div className="g-col-12 g-col-sm-6">
                            <FormOption
                                name="impact"
                                id="no-impact"
                                value="no-impact"
                                type="radio"
                                card={true}
                                label="None"
                                defaultChecked={true}
                                icon="impact-none"
                                
                            />
                          </div>
                          <div className="g-col-12 g-col-sm-6">
                            <FormOption
                                name="impact"
                                id="impact-not-obvious"
                                value="impact-not-obvious"
                                type="radio"
                                card={true}
                                label="Not obvious"
                                icon="impact-not-obvious"
                                
                              />
                            </div>
                            <div className="g-col-12 g-col-sm-6">
                              <FormOption
                                name="impact"
                                id="impact-push"
                                value="impact-push"
                                type="radio"
                                card={true}
                                label="Push"
                                // caption="The program has an impact, but not initially."
                                icon="impact-push"
                                
                              />
                            </div>
                            <div className="g-col-12 g-col-sm-6">
                              <FormOption
                                name="impact"
                                id="impact-native"
                                value="impact-native"
                                type="radio"
                                card={true}
                                label="Native"
                                // caption="The program has an impact and is part of the core."
                                icon="impact-native"
                                
                              />
                            </div>
                        </FormFieldSet>

                        <FormFieldSet id="verticals" legend="Verticals">
                            <FormOption
                                name="verticals"
                                id="plastic"
                                value="plastic"
                                type="checkbox"
                                card={true}
                                icon="vertical-plastic"
                                label="Plastic"
                            />
                            <FormOption
                                name="verticals"
                                id="food"
                                value="food"
                                type="checkbox"
                                card={true}
                                icon="vertical-food"
                                label="Food"
                            />
                            <FormOption
                                name="verticals"
                                id="dei"
                                value="dei"
                                type="checkbox"
                                card={true}
                                icon="vertical-dei"
                                label="DEI"
                            />
                        </FormFieldSet>

                        <FormFieldSet name="ecosystems" legend="Ecosystems">
                            <FormOption
                                name="ecosystems"
                                id="ecosystem-students"
                                value="students"
                                type="checkbox"
                                card={true}
                                label="Students"
                                icon="ecosystem-student"
                            />
                            <FormOption
                                name="ecosystems"
                                id="ecosystem-startups"
                                value="startups"
                                type="checkbox"
                                card={true}
                                label="Startups"
                                icon="ecosystem-startups"
                            />
                            <FormOption
                                name="ecosystems"
                                id="ecosystem-corporate"    
                                value="corporate"
                                type="checkbox"
                                card={true}
                                label="Corporate"
                                icon="ecosystem-corporate"
                            />
                        </FormFieldSet>
                    
                    </div>

                    <div className="d-flex gap-lg align-items-center mt-auto">
                        <ProgressBar percentage={62} max={100}  addClass="flex-fill" inline={true} text="5/8" />
                        <div className="d-flex gap-xs">
                          <Button type="default" label="Previous" link="/?path=/story/pages-admin-installer-studies--results" />
                          <Button type="primary" label="Next step" link="/?path=/story/pages-admin-installer-studies--sdg" />
                        </div>
                    </div>

                </form>
            </AppSplit>
        </Layout>
    );
};
