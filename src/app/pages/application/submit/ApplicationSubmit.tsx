import React from "react";
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { Button } from "@/app/components/Button";
import { Alert } from "@/app/components/Alert";
import { Icon } from "@/app/components/Icon";
import { Section } from "@/app/components/Section";
import { FormTextarea } from "@/app/forms/FormTextarea";
import { FormOption } from "@/app/forms/FormOption";
import { Stepper, StepType } from "@/app/components/Stepper";
import { FormInput } from "@/app/forms/FormInput";
import { FormGroup } from "@/app/forms/FormGroup";
import { FormInputWrapper } from "@/app/forms/FormInputWrapper";

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
        description:  "completed",
        status: "completed",
        current: false,
    },
    {
        title: "Step 3",
        description: "Not completed",
        status: "in-progress",
        current: true,
    },
];

export const ApplicationSubmit = () => {
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

                        <Section title="Submit" subtitle="Check the data below and click “Submit” to finalize your application">
                            <FormGroup id="1" label="Question 1">
                                <FormInputWrapper>
                                    <FormInput id="1" defaultValue="Lorem ipsum" readonly={true} />
                                </FormInputWrapper>
                            </FormGroup>
                            <FormGroup id="2" label="Question 2 ">
                                <FormInputWrapper>
                                    <FormInput id="2" defaultValue="Lorem ipsum" readonly={true} />
                                </FormInputWrapper>
                            </FormGroup>
                            <FormGroup id="3" label="Question 3">
                                <FormInputWrapper>
                                    <FormInput id="3" defaultValue="Lorem ipsum" readonly={true} />
                                </FormInputWrapper>
                            </FormGroup>
                        </Section>

                        <div className="d-flex justify-content-end">
                            <Button iconStartImage="" iconStartName="" label="Submit" size="default" type="primary" />
                        </div>
                    </div>
                </div>
            </AppContent>
        </Layout>
    );
};
