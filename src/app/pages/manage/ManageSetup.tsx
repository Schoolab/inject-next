import React from "react";
import { Layout } from "../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { ItemSetupTask } from "@/app/components/items/ItemSetupTask";
import { ProgressBar } from "@/app/components/ProgressBar";

export const ManageSetup = () => {
    return (
        <Layout sideBar="Manage">
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
                        label: "Program",
                        href: "#",
                    },
                    {
                        label: "Getting started",
                    },
                ]}
                title="Getting started"
            >
                <div className="row">
                    <div className="col-12">
                        <div className="application-section">
                            <h3 className="application-section--title">
                                <span className="application-section--title-content">Getting started tasks</span>
                            </h3>
                            <p>Complete these simple steps to get your program up and running before publishing it to participants.</p>
                            <div className="mb-5 rounded bg-light p-5">
                                <div className="row">
                                    <div className="col-12 col-lg-4">
                                        <h4 className="to-collapse" data-toggle="collapse" data-target="#desc-1" aria-expanded="true">
                                            <span>1. Program Information</span>
                                            <span className="icon icon-chevron-right ml-auto" />
                                        </h4>
                                        <div className="collapse show" id="desc-1">
                                            <p className="small text-muted">Define the core details of your program and invite program managers to collaborate in setting it up</p>
                                        </div>
                                        <ProgressBar label="Tasks" percentage={100} min={0} max={100} text="2/2" addClass="my-md" />
                                    </div>
                                    <div className="col-12 col-lg-8 ">
                                        <div className="d-flex flex-column gap-2xs">
                                            <ItemSetupTask icon="information" title="Complete the basic info" caption="Review key details: program name, description, dates, visibility" progress={3} tasks={3} />
                                            <ItemSetupTask icon="account-plus" title="Invite program managers" caption="Invite your program managers to access and help run the program." progress={3} tasks={3} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-5 rounded bg-light p-5">
                                <div className="row">
                                    <div className="col-12 col-lg-4">
                                        <h4 className="to-collapse" data-toggle="collapse" data-target="#desc-2" aria-expanded="true">
                                            <span>2. Registrations & Application</span>
                                            <span className="icon icon-chevron-right ml-auto" />
                                        </h4>
                                        <div className="collapse show" id="desc-2">
                                            <p className="small text-muted">Configure essential registration settings and application forms to make the program accessible to participants</p>
                                        </div>
                                        <ProgressBar label="Tasks" percentage={50} min={0} max={100} text="2/4" addClass="my-md" />
                                    </div>
                                    <div className="col-12 col-lg-8">
                                        <div className="d-flex flex-column gap-2xs">
                                            <ItemSetupTask icon="calendar" title="Registrations dates and rights" caption="Set registration period and who can view the program" progress={3} tasks={3} />
                                            <ItemSetupTask icon="format-list-checks" title="Setup Application Forms" caption="Create forms to collect participant or project details" progress={1} tasks={3} />
                                            <ItemSetupTask icon="information" title="Create a landing page (Optional)" caption="Set up a public-facing page to showcase your program" progress={3} tasks={3} />
                                            <ItemSetupTask icon="label" title="Setup Participant Type (Optional / Advanced)" caption="Create custom forms tailored for different participant types" progress={0} tasks={3} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-5 rounded bg-light p-5">
                                <div className="row">
                                    <div className="col-12 col-lg-4">
                                        <h4 className="to-collapse" data-toggle="collapse" data-target="#desc-5" aria-expanded="true">
                                            <span>3. Evaluations</span>
                                            <span className="icon icon-chevron-right ml-auto" />
                                        </h4>
                                        <div className="collapse show" id="desc-5">
                                            <p className="small text-muted">Schedule evaluation sessions, invite jury members, and manage project assessments to determine outcomes via jury sessions</p>
                                        </div>
                                        <ProgressBar label="Tasks" percentage={0} min={0} max={100} text="0/4" addClass="my-md" />
                                    </div>
                                    <div className="col-12 col-lg-8">
                                        <div className="d-flex flex-column gap-2xs">
                                            <ItemSetupTask icon="gavel" title="Evaluation dates and rights" caption="Set dates and permissions for evaluations or jury sessions" progress={0} tasks={3} />
                                            <ItemSetupTask icon="format-list-checks" title="Notation & Scorecard" caption="Define scoring criteria and weighting for jury evaluations" progress={0} tasks={3} />
                                            <ItemSetupTask icon="account-plus" title="Invite Jury Members" caption="Invite juries to assess submissions and participate in scoring" progress={0} tasks={3} />
                                            <ItemSetupTask icon="notifications" title="Communication with Jury" caption="Set up notifications and reminders for jury members" progress={0} tasks={3} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-5 rounded bg-light p-5">
                                <div className="row">
                                    <div className="col-12 col-lg-4">
                                        <h4 className="to-collapse" data-toggle="collapse" data-target="#desc-3" aria-expanded="true">
                                            <span>4. Content - Learning</span>
                                            <span className="icon icon-chevron-right ml-auto" />
                                        </h4>
                                        <div className="collapse show" id="desc-3">
                                            <p className="small text-muted">Add course modules, objectives, and supporting resources to guide participants through a structured learning journey</p>
                                        </div>
                                        <ProgressBar label="Tasks" percentage={0} min={0} max={100} text="0/3" addClass="my-md" />
                                    </div>
                                    <div className="col-12 col-lg-8">
                                        <div className="d-flex flex-column gap-2xs">
                                            <ItemSetupTask icon="library" title="Learning course" caption="Design a learning course with modules for participants" progress={0} tasks={3} />
                                            <ItemSetupTask icon="bullseye-arrow" title="Objectives" caption="Set clear goals or milestones for participant projects" progress={0} tasks={3} />
                                            <ItemSetupTask icon="book-open-blank-variant" title="Add Ressources" caption="Upload documents and tools for participant reference" progress={0} tasks={3} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-5 rounded bg-light p-5">
                                <div className="row">
                                    <div className="col-12 col-lg-4">
                                        <h4 className="to-collapse" data-toggle="collapse" data-target="#desc-4" aria-expanded="true">
                                            <span>5. Coaching</span>
                                            <span className="icon icon-chevron-right ml-auto" />
                                        </h4>
                                        <div className="collapse show" id="desc-4">
                                            <p className="small text-muted">Set up spaces for experts to offer guidance, manage their visibility to participants, and provide resources for coaching sessions</p>
                                        </div>
                                        <ProgressBar label="Tasks" percentage={0} min={0} max={100} text="0/3" addClass="my-md" />
                                    </div>
                                    <div className="col-12 col-lg-8">
                                        <div className="d-flex flex-column gap-2xs">
                                            <ItemSetupTask icon="account-plus" title="Invite experts" caption="Invite your program experts" progress={0} tasks={3} />
                                            <ItemSetupTask icon="clipboard-text" title="Assign expert to project" caption="Link experts to specific projects for support and advice" progress={0} tasks={3} />
                                            <ItemSetupTask icon="eye" title="Set experts visibility" caption="Control whether experts are visible to all participants" progress={0} tasks={3} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-5 rounded bg-light p-5">
                                <div className="row">
                                    <div className="col-12 col-lg-4">
                                        <h4 className="to-collapse" data-toggle="collapse" data-target="#desc-5" aria-expanded="true">
                                            <span>6. Program Engagement</span>
                                            <span className="icon icon-chevron-right ml-auto" />
                                        </h4>
                                        <div className="collapse show" id="desc-5">
                                            <p className="small text-muted">Maintain participant engagement through regular updates, emails, surveys, and events</p>
                                        </div>
                                        <ProgressBar label="Tasks" percentage={0} min={0} max={100} text="0/4" addClass="my-md" />
                                    </div>
                                    <div className="col-12 col-lg-8">
                                        <div className="d-flex flex-column gap-2xs">
                                            <ItemSetupTask icon="newspaper-variant-outline" title="Newsfeed" caption="Post updates and tips to keep participants informed and engaged with the program" progress={0} tasks={3} />
                                            <ItemSetupTask icon="email" title="Mail" caption="Schedule automated emails to share news and reminders" progress={0} tasks={3} />
                                            <ItemSetupTask icon="format-list-checks" title="Survey" caption="Collect feedback from participants through custom surveys" progress={0} tasks={3} />
                                            <ItemSetupTask icon="calendar" title="Events" caption="Plan and manage program events like workshops or webinars" progress={0} tasks={3} />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="mb-5 rounded bg-light p-5">
                                <div className="row">
                                    <div className="col-12 col-lg-4">
                                        <h4 className="to-collapse" data-toggle="collapse" data-target="#desc-7" aria-expanded="true">
                                            <span>7. Insights</span>
                                            <span className="icon icon-chevron-right ml-auto" />
                                        </h4>
                                        <div className="collapse show" id="desc-7">
                                            <p className="small text-muted">Access analytics to monitor participant engagement and measure program effectiveness</p>
                                        </div>
                                        <ProgressBar label="Tasks" percentage={0} min={0} max={100} text="0/4" addClass="my-md" />
                                    </div>
                                    <div className="col-12 col-lg-8">
                                        <div className="d-flex flex-column gap-2xs">
                                            <ItemSetupTask icon="chart-donut" title="Insights & Analytics" caption="Track participant engagement and program progress" progress={0} tasks={3} />
                                            <ItemSetupTask icon="library" title="Learning Tracking" caption="Track progress on learning course" progress={0} tasks={3} />
                                            <ItemSetupTask icon="bullseye-arrow" title="Objectives Tracking" caption="Track progress on program objectives" progress={0} tasks={3} />
                                            <ItemSetupTask icon="label" title="Segments" caption="Create Segments across the different participant groups" progress={0} tasks={3} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <span className="font-weight-bold mr-5">Filters</span>
                                <div className="custom-control custom-switch mr-3">
                                    <input type="checkbox" defaultChecked className="custom-control-input" id="customSwitch1" />
                                    <label className="custom-control-label" htmlFor="customSwitch1">
                                        Show complet tasks
                                    </label>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </AppContent>
        </Layout>
    );
};
