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

interface AdminInstallerResultsProps {
  theme?: "default" | "Inject" | "Schoolab" | "Moho" | "Raiselab";
}

export const AdminInstallerResults = ({ theme = "default" }: AdminInstallerResultsProps) => {

    return (
        <Layout showNavbar={false} showShortcutbar={false}>
            <AppSplit addClass="py-3xl" theme={theme} positionX="left" shadow={true} preview={<Preview />}>
               
                <div className="d-flex flex-column gap-xs">
                    <h1 className="display-3">Results and impact</h1>
                    <p>Describe the results and impact of the program. You can complete this step later.</p>
                </div>

                <form className="d-flex flex-column flex-fill justify-content-start" name="ChallengeDefaultForm" method="post" action="/rest/challenge/create/default">

                    <div className="cq mb-lg">
                        
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

                    <div className="d-flex gap-lg align-items-center mt-auto">
                        <ProgressBar percentage={50} max={100}  addClass="flex-fill" inline={true} text="4/8" />
                        <div className="d-flex gap-xs">
                          <Button type="default" label="Previous" link="/?path=/story/pages-admin-installer-studies--program-outline" />
                          <Button type="primary" label="Next step" link="/?path=/story/pages-admin-installer-studies--categories" />
                        </div>
                    </div>

                </form>
            </AppSplit>
        </Layout>
    );
};
