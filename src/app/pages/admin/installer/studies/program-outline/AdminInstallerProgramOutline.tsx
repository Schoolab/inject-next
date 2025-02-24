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

interface AdminInstallerProgramOutlineProps {
  theme?: "default" | "Inject" | "Schoolab" | "Moho" | "Raiselab";
}

export const AdminInstallerProgramOutline = ({ theme = "default" }: AdminInstallerProgramOutlineProps) => {

    return (
        <Layout showNavbar={false} showShortcutbar={false}>
            <AppSplit addClass="py-3xl" theme={theme} positionX="left" shadow={true} preview={<Preview />}>
               
                <div className="d-flex flex-column gap-xs">
                    <h1 className="display-3">Program outline</h1>
                    <p>Describe the program and its objectives.</p>
                </div>

                <form className="d-flex flex-column flex-fill justify-content-start" name="ChallengeDefaultForm" method="post" action="/rest/challenge/create/default">

                    <div className="cq mb-lg">
                        
                        <FormGroup id="problematics" label="Problems addressed">
                            <FormTextarea id="problematics" rows={4} />
                        </FormGroup>
                        <FormGroup id="mission_goal" label="Mission goal">
                            <FormTextarea id="mission_goal" rows={4} />
                        </FormGroup>
                        <FormGroup id="methodology" label="Used methodology" required={true}>
                          <FormSelect
                            id="methodology"
                            options={[
                              { label: "Consulting", value: "consulting" },
                              { label: "Design fiction", value: "design_fiction" },
                              { label: "Design thinking", value: "design_thinking" },
                              { label: "Educational engineering", value: "educational_engineering" },
                              { label: "Sustainable design", value: "sustainable_design" },
                              { label: "UX / UI", value: "ux_ui" },
                              { label: "Other", value: "other" },
                            ]}
                          />  
                        </FormGroup>
                    
                    </div>

                    <div className="d-flex gap-lg align-items-center mt-auto">
                        <ProgressBar percentage={37} max={100}  addClass="flex-fill" inline={true} text="3/8" />
                        <div className="d-flex gap-xs">
                          <Button type="default" label="Previous" link="/?path=/story/pages-admin-installer-studies--properties" />
                          <Button type="primary" label="Next step" link="/?path=/story/pages-admin-installer-studies--results" />
                        </div>
                    </div>

                </form>
            </AppSplit>
        </Layout>
    );
};
