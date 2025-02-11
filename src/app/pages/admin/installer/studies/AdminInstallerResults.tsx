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

interface AdminInstallerResultsProps {
  theme?: "default" | "Inject" | "Schoolab" | "Moho" | "Raiselab";
}

export const AdminInstallerResults = ({ theme = "default" }: AdminInstallerResultsProps) => {

    return (
        <Layout showNavbar={false} showShortcutbar={false}>
            <AppSplit addClass="py-3xl" theme={theme} positionX="left" shadow={true} cover="img/cover-installer-basic_info.png">
               
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
