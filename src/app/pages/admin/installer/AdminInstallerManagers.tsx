import React from "react";
import { Layout } from "../../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { Stepper, StepType } from "@/app/components/Stepper";
import { Section } from "@/app/components/Section";

const steps: StepType[] = [
    {
      title: "Basic info",
      description: "Completed",
      status: "completed",
      link: "/?path=/story/pages-admin-installer--basic-info",
      current: false,
    },
    {
      title: "Categories",
      description: "In progress",
      status: "completed",
      link: "/?path=/story/pages-admin-installer--categories",
      current: false,
    },
    {
      title: "Managers",
      description: "Not completed",
      status: "in-progress",
      current: true,
    },
    {
      title: "Features",
      description: "Not completed",
      status: "not-completed",
      current: false,
    }
  ];

export const AdminInstallerManagers = () => {
    return (
        <Layout showShortcutbar={false}>
            <AppContent showSubnav={false}>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 ">
                        <div className="mb-7 py-5 py-lg-0">
                            <div className="mb-5">
                                <h2>Create a new program</h2>
                                <p className="text-muted">Fill the information below and watch how it will appear to people joining it.</p>
                            </div>
                            <Stepper steps={steps} />
                        </div>
                        <Section title="Managers" subtitle="Choose the people who will be in charge of the program">
                            <div className="bg-light rounded p-5">
                                <p>todo</p>
                            </div>
                           
                            <div className="d-flex justify-content-end">
                                <button type="submit" className="btn btn-default btn-lg mr-3">
                                    Previous
                                </button>
                                <button type="submit" className="btn btn-primary btn-lg">
                                    Next Step
                                </button>
                            </div>
                        </Section>
                    </div>
                </div>
            </AppContent>
        </Layout>
    );
};
