import React from "react";
import { Layout } from "../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { CardEvent } from "@/app/components/cards/CardEvent";
import { Button } from "@/app/components/Button";
import { ItemsGroup } from "@/app/components/items-group/ItemsGroup";
import { ItemsGroupHeader } from "@/app/components/items-group/ItemsGroupHeader";
import { ItemQuestionnaire } from "@/app/components/items/ItemQuestionnaire";
import { ItemCondition } from "@/app/components/items/ItemCondition";

export const ManageApplicationForms = () => {
    return (
        <Layout  sideBar="Manage">
            <AppContent
                sections="separated"
                breadcrumb={[
                    {
                        label: "Impact Innovators",
                        href: "#",
                    },
                    {
                        label: "Manage",
                        href: "#",
                    },
                    {
                        label: "Participants",
                        href: "#",
                    },
                    {
                        label: "Application forms",
                    },
                ]}
                title="Application forms"
            >
                <div className="row">
                    <div className="col-12">
                        <div className="application-section">
                            <h3 className="application-section--title" data-toggle="collapse" data-target="#participants" aria-expanded="true">
                                <span className="application-section--title-content">Participants</span>
                                <span className="icon icon-chevron-right ml-auto" />
                            </h3>
                            <div className="collapse show " id="participants">
                                <p className="mb-md">Add questions you want to ask to participants during their applications.</p>
                                <div className="grid-vertical gap-md">
                                    <ItemsGroup>
                                        <ItemsGroupHeader label="Basic info" />
                                        <div className="d-flex flex-column gap-2xs">
                                            <ItemQuestionnaire type="text" label="Your name" required />
                                            <ItemQuestionnaire type="textarea" label="Describe your project" required />
                                            <ItemQuestionnaire type="select" label="Select your program" required />
                                            <ItemQuestionnaire type="radio" label="Are you a student?" required />
                                            <ItemCondition condition="Participant's type is" value="Student">
                                                <ItemQuestionnaire type="checklist" label="Choose your school" caption="238 options: [list options here]" required />
                                            </ItemCondition>
                                            <ItemQuestionnaire type="attachment" label="Upload your project proposal" required />
                                            <ItemQuestionnaire type="link" label="Your LinkedIn profile" required />
                                            <ItemQuestionnaire type="checkbox" label="I agree to the terms and conditions" required />
                                            <ItemQuestionnaire type="rating" label="Rate the program registration process" required />
                                        </div>
                                        <Button label="Add question" iconStartName="plus-circle" size="sm" type="muted" addClass="align-self-start" />
                                    </ItemsGroup>
                                    <Button label="Add step" iconStartName="plus-circle" size="sm" type="muted" addClass="align-self-start" />
                                </div>
                                {/* <div className="d-flex justify-content-end mt-16px">
                                    <button type="submit" className="btn btn-default btn-lg mr-3">
                                        <span className="icon icon-visibility mr-2" />
                                        Preview questions
                                    </button>
                                    <button type="submit" className="btn btn-primary btn-lg">
                                        Save
                                    </button>
                                </div> */}
                            </div>
                        </div>
                        <div className="application-section">
                            <h3 className="application-section--title" data-toggle="collapse" data-target="#projects" aria-expanded="true">
                                <span className="application-section--title-content">Projects</span>
                                <span className="icon icon-chevron-right ml-auto" />
                            </h3>
                            <div className="collapse show" id="projects">
                                <p className="mb-md">Add questions you want to ask to participants during their applications.</p>
                                <div className="d-flex flex-column gap-md">
                                    <div className="bg-white border rounded px-40px py-80px d-flex flex-column align-items-center gap-0px text-center">
                                        <div className="d-flex pb-16px">
                                            <span className="icon icon-questionnaire is-24px" />
                                        </div>
                                        <div className="d-flex flex-column gap-2xs">
                                            <p className="font-weight-bold">There’s no questions yet</p>
                                            <p className="small text-muted">Before being able to add a question you have to create a&nbsp;first&nbsp;step.</p>
                                        </div>
                                        <div className="d-flex pt-32px">
                                            <a href="#" className="btn btn-lg btn-primary">
                                                <span className="icon icon-plus-circle" />
                                                <span>Add step</span>
                                            </a>
                                        </div>
                                        <div className="d-flex py-16px">
                                            <a href="#" className="small">
                                                Learn more about questions
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="application-section">
                            <h3 className="application-section--title" data-toggle="collapse" data-target="#experts" aria-expanded="false">
                                <span className="application-section--title-content">Experts</span>
                                <span className="icon icon-chevron-right ml-auto" />
                            </h3>
                            <div className="collapse" id="experts"></div>
                        </div>
                        <div className="application-section">
                            <h3 className="application-section--title" data-toggle="collapse" data-target="#jury" aria-expanded="false">
                                <span className="application-section--title-content">Jury</span>
                                <span className="icon icon-chevron-right ml-auto" />
                            </h3>
                            <div className="collapse" id="jury"></div>
                        </div>
                    </div>
                </div>
            </AppContent>
        </Layout>
    );
};
