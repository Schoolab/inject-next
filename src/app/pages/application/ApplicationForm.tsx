import React from "react";
import { Layout } from "../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { Button } from "@/app/components/Button";
import { Alert } from "@/app/components/Alert";
import { Icon } from "@/app/components/Icon";
import { Section } from "@/app/components/Section";
import { FormTextarea } from "@/app/components/forms/FormTextarea";
import { FormOption } from "@/app/components/forms/FormOption";
import { Stepper, StepType } from "@/app/components/Stepper";
import { FormInput } from "@/app/components/forms/FormInput";
import { FormGroup } from "@/app/components/forms/FormGroup";
import { FormInputWrapper } from "@/app/components/forms/FormInputWrapper";

const steps: StepType[] = [
    {
        title: "Step 1",
        description: "completed",
        status: "completed",
        link: "/?path=/story/pages-admin-installer--basic-info",
        current: false,
    },
    {
        title: "Step 2",
        description: "Not completed",
        status: "in-progress",
        current: true,
    },
    {
        title: "Step 3",
        description: "Not completed",
        status: "not-completed",
        current: false,
    }

];

export const ApplicationForm = () => {
    return (
        <Layout showShortcutbar={false}>
            <AppContent showSubnav={false} showBreadcrumb={false} showTitle={false}>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 d-flex flex-column gap-md">
                        <div className="d-flex flex-column gap-sm">
                            <span className="d-flex align-items-start gap-xs">
                                <Button size="sm" type="default" iconStartName="arrow-left" data-toggle="tooltip" data-original-title="Back" />
                                <h2>Participant account creation</h2>
                            </span>
                            <Stepper steps={steps} />
                        </div>

                        <Section title="Title" subtitle="subtitle">
                        <FormGroup id="1" required={true} label="Question 1">
                            <FormInputWrapper>
                                <FormInput id="1" required={true}  />
                            </FormInputWrapper>
                        </FormGroup>
                        <FormGroup id="2" label="Question 2">
                            <FormInputWrapper>
                                <FormInput id="2" required={true}  />
                            </FormInputWrapper>
                        </FormGroup>
                        <FormGroup id="3" label="Question 3">
                            <FormInputWrapper>
                                <FormInput id="3" required={true}  />
                            </FormInputWrapper>
                        </FormGroup>
                        </Section>
                
                        <div className="d-flex justify-content-end">
                            <Button iconStartImage="" iconStartName="" label="Next" size="default" type="primary" />
                        </div>
                    </div>
                </div>
            </AppContent>
        </Layout>
    );
};
