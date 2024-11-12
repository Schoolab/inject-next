import React from "react";
import { Layout } from "../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";

export const ManageSetup = () => {
    return (
        <Layout sideBar="Manage">
            <AppContent sections="separated" showSubnav={false}>
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
                                        <div className="my-5">
                                            <div className="d-flex justify-content-between mb-3">
                                                <span className="small text-muted">Tasks</span>
                                                <span className="small text-primary">
                                                    <span className="mr-2 icon icon-check" />
                                                    Finished
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="progress flex-fill mr-3" style={{ height: 5 }}>
                                                    <div className="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                                <span className="small text-primary">2/2</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-8">
                                        <div className="item is-complet is-static is-bordered resource mb-3">
                                            <div className="item-row flex-column flex-md-row">
                                                <div className="mr-5 d-flex flex-fill">
                                                    <div className="item-icon is-darker icon icon-information" />
                                                    <div className="item-content ml-3">
                                                        <h4 className="mb-none">Complete the basic info</h4>
                                                        <span className="small text-muted">Review key details: program name, description, dates, visibility</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center dropdown align-self-end align-self-lg-start mt-3 mt-md-0">
                                                    <span className="small text-muted mr-3 d-none">0/3</span>
                                                    <svg className="progress-circle-container is-small flex-shrink-0 mr-3" viewBox="0 0 32 32" data-percent={100} style={{ ["--percent" as any]: 100 }}>
                                                        <circle className="progress-circle progress-circle-bg" />
                                                        <circle className="progress-circle progress-circle-percent" />
                                                        <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                    </svg>
                                                    <button className="btn btn-lg btn-default dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        View
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">
                                                            View
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Uncomplet
                                                        </a>
                                                        <div role="separator" className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">
                                                            Tutoriel
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item is-complet is-static is-bordered resource mb-3">
                                            <div className="item-row flex-column flex-md-row">
                                                <div className="mr-5 d-flex flex-fill">
                                                    <div className="item-icon is-darker icon icon-account-plus" />
                                                    <div className="item-content ml-3">
                                                        <h4 className="mb-none">Invite program managers</h4>
                                                        <span className="small text-muted">Invite your program managers to access and help run the program.</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center dropdown align-self-end align-self-lg-start mt-3 mt-md-0">
                                                    <span className="small text-muted mr-3 d-none">0-3</span>
                                                    <svg className="progress-circle-container is-small flex-shrink-0 mr-3" viewBox="0 0 32 32" data-percent={100} style={{ ["--percent" as any]: 100 }}>
                                                        <circle className="progress-circle progress-circle-bg" />
                                                        <circle className="progress-circle progress-circle-percent" />
                                                        <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                    </svg>
                                                    <button className="btn btn-lg btn-default dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        View
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">
                                                            View
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Uncomplet
                                                        </a>
                                                        <div role="separator" className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">
                                                            Tutoriel
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
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
                                        <div className="my-5">
                                            <div className="d-flex justify-content-between mb-3">
                                                <span className="small text-muted">Tasks</span>
                                                <span className="small text-muted">In progress</span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="progress flex-fill mr-3" style={{ height: 5 }}>
                                                    <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                                <span className="small text-muted">1/4</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-8">
                                        <div className="item is-complet is-static is-bordered resource mb-3">
                                            <div className="item-row flex-column flex-md-row">
                                                <div className="mr-5 d-flex flex-fill">
                                                    <div className="item-icon is-darker icon icon-calendar" />
                                                    <div className="item-content ml-3">
                                                        <h4 className="mb-none">Registrations dates and rights</h4>
                                                        <span className="small text-muted">Set registration period and who can view the program</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center dropdown align-self-end align-self-lg-start mt-3 mt-md-0">
                                                    <span className="small text-muted mr-3 d-none">0/3</span>
                                                    <svg className="progress-circle-container is-small flex-shrink-0 mr-3" viewBox="0 0 32 32" data-percent={100} style={{ ["--percent" as any]: 100 }}>
                                                        <circle className="progress-circle progress-circle-bg" />
                                                        <circle className="progress-circle progress-circle-percent" />
                                                        <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                    </svg>
                                                    <button className="btn btn-lg btn-default dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        View
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">
                                                            View
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Uncomplet
                                                        </a>
                                                        <div role="separator" className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">
                                                            Tutoriel
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="item is-static is-bordered resource mb-3">
                                            <div className="item-row flex-column flex-md-row">
                                                <div className="mr-5 d-flex flex-fill">
                                                    <div className="item-icon is-darker icon icon-format-list-checks" />
                                                    <div className="item-content ml-3">
                                                        <h4 className="mb-none">Setup Application Forms</h4>
                                                        <span className="small text-muted">Create forms to collect participant or project details</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center dropdown align-self-end align-self-lg-start mt-3 mt-md-0">
                                                    <button className="btn btn-lg btn-primary dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Edit
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">
                                                            Edit
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Complet
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Skip
                                                        </a>
                                                        <div role="separator" className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">
                                                            Tutoriel
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item is-complet is-static is-bordered resource mb-3">
                                            <div className="item-row flex-column flex-md-row">
                                                <div className="mr-5 d-flex flex-fill">
                                                    <div className="item-icon is-darker icon icon-information" />
                                                    <div className="item-content ml-3">
                                                        <h4 className="mb-none">Create a landing page (Optional)</h4>
                                                        <span className="small text-muted">Set up a public-facing page to showcase your program</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center dropdown align-self-end align-self-lg-start mt-3 mt-md-0">
                                                    <button className="btn btn-lg btn-default dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        View
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">
                                                            View
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Unskip
                                                        </a>
                                                        <div role="separator" className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">
                                                            Tutoriel
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item is-static is-bordered resource mb-3">
                                            <div className="item-row flex-column flex-md-row">
                                                <div className="mr-5 d-flex flex-fill">
                                                    <div className="item-icon is-darker icon icon-label" />
                                                    <div className="item-content ml-3">
                                                        <h4 className="mb-none">Setup Participant Type (Optional / Advanced)</h4>
                                                        <span className="small text-muted">Create custom forms tailored for different participant types</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center dropdown align-self-end align-self-lg-start mt-3 mt-md-0">
                                                    <button className="btn btn-lg btn-primary dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Edit
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">
                                                            Edit
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Complet
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Skip
                                                        </a>
                                                        <div role="separator" className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">
                                                            Tutoriel
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
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
                                        <div className="my-5">
                                            <div className="d-flex justify-content-between mb-3">
                                                <span className="small text-muted">Tasks</span>
                                                <span className="small text-muted">Not completd</span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="progress flex-fill mr-3" style={{ height: 5 }}>
                                                    <div className="progress-bar" role="progressbar" style={{ width: "0%" }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                                <span className="small text-muted">0/6</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-8">
                                        <div className="item is-static is-bordered resource mb-3">
                                            <div className="item-row flex-column flex-md-row">
                                                <div className="mr-5 d-flex flex-fill">
                                                    <div className="item-icon is-darker icon icon-gavel" />
                                                    <div className="item-content ml-3">
                                                        <h4 className="mb-none">Evaluation dates and rights</h4>
                                                        <span className="small text-muted">Set dates and permissions for evaluations or jury sessions</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center dropdown align-self-end align-self-lg-start mt-3 mt-md-0">
                                                    <button className="btn btn-lg btn-primary dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Edit
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">
                                                            Edit
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Complet
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Skip
                                                        </a>
                                                        <div role="separator" className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">
                                                            Tutoriel
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item is-static is-bordered resource mb-3">
                                            <div className="item-row flex-column flex-md-row">
                                                <div className="mr-5 d-flex flex-fill">
                                                    <div className="item-icon is-darker icon icon-format-list-checks" />
                                                    <div className="item-content ml-3">
                                                        <h4 className="mb-none">Notation & Scorecard</h4>
                                                        <span className="small text-muted">Define scoring criteria and weighting for jury evaluations</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center dropdown align-self-end align-self-lg-start mt-3 mt-md-0">
                                                    <button className="btn btn-lg btn-primary dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Edit
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">
                                                            Edit
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Complet
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Skip
                                                        </a>
                                                        <div role="separator" className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">
                                                            Tutoriel
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item is-static is-bordered resource mb-3">
                                            <div className="item-row flex-column flex-md-row">
                                                <div className="mr-5 d-flex flex-fill">
                                                    <div className="item-icon is-darker icon icon-account-plus" />
                                                    <div className="item-content ml-3">
                                                        <h4 className="mb-none">Invite Jury Members</h4>
                                                        <span className="small text-muted">Invite juries to assess submissions and participate in scoring</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center dropdown align-self-end align-self-lg-start mt-3 mt-md-0">
                                                    <button className="btn btn-lg btn-primary dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Invit
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">
                                                            Invit
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Complet
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Skip
                                                        </a>
                                                        <div role="separator" className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">
                                                            Tutoriel
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="item is-static is-bordered resource mb-3">
                                            <div className="item-row flex-column flex-md-row">
                                                <div className="mr-5 d-flex flex-fill">
                                                    <div className="item-icon is-darker icon icon-text" />
                                                    <div className="item-content ml-3">
                                                        <h4 className="mb-none">Communication with Jury</h4>
                                                        <span className="small text-muted">Set up notifications and reminders for jury members</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center dropdown align-self-end align-self-lg-start mt-3 mt-md-0">
                                                    <button className="btn btn-lg btn-primary dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Edit
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">
                                                            Edit
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Complet
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Skip
                                                        </a>
                                                        <div role="separator" className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">
                                                            Tutoriel
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item is-static is-bordered resource mb-3">
                                            <div className="item-row flex-column flex-md-row">
                                                <div className="mr-5 d-flex flex-fill">
                                                    <div className="item-icon is-darker icon icon-email" />
                                                    <div className="item-content ml-3">
                                                        <h4 className="mb-none">Results Management</h4>
                                                        <span className="small text-muted">Send emails to notify participants of acceptance or rejection</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center dropdown align-self-end align-self-lg-start mt-3 mt-md-0">
                                                    <button className="btn btn-lg btn-primary dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Edit
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">
                                                            Edit
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Complet
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Skip
                                                        </a>
                                                        <div role="separator" className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">
                                                            Tutoriel
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item is-static is-bordered resource mb-3">
                                            <div className="item-row flex-column flex-md-row">
                                                <div className="mr-5 d-flex flex-fill">
                                                    <div className="item-icon is-darker icon icon-clipboard-text" />
                                                    <div className="item-content ml-3">
                                                        <h4 className="mb-none">Project Validation</h4>
                                                        <span className="small text-muted">Confirm which projects advance based on scores or manual selection</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center dropdown align-self-end align-self-lg-start mt-3 mt-md-0">
                                                    <button className="btn btn-lg btn-primary dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Edit
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">
                                                            Edit
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Complet
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Skip
                                                        </a>
                                                        <div role="separator" className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">
                                                            Tutoriel
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
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
                                        <div className="my-5">
                                            <div className="d-flex justify-content-between mb-3">
                                                <span className="small text-muted">Tasks</span>
                                                <span className="small text-muted">In progress</span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="progress flex-fill mr-3" style={{ height: 5 }}>
                                                    <div className="progress-bar" role="progressbar" style={{ width: "20%" }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                                <span className="small text-muted">0/3</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-8">
                                        <div className="item is-static is-bordered resource mb-3">
                                            <div className="item-row flex-column flex-md-row">
                                                <div className="mr-5 d-flex flex-fill">
                                                    <div className="item-icon is-darker icon icon-library" />
                                                    <div className="item-content ml-3">
                                                        <h4 className="mb-none">Learning course</h4>
                                                        <span className="small text-muted">Design a learning course with modules for participants</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center dropdown align-self-end align-self-lg-start mt-3 mt-md-0">
                                                    <button className="btn btn-lg btn-primary dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Edit
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">
                                                            Edit
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Complet
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Skip
                                                        </a>
                                                        <div role="separator" className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">
                                                            Tutoriel
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="item is-static is-bordered resource mb-3">
                                            <div className="item-row flex-column flex-md-row">
                                                <div className="mr-5 d-flex flex-fill">
                                                    <div className="item-icon is-darker icon icon-bullseye-arrow" />
                                                    <div className="item-content ml-3">
                                                        <h4 className="mb-none">Objectives</h4>
                                                        <span className="small text-muted">Set clear goals or milestones for participant projects</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center dropdown align-self-end align-self-lg-start mt-3 mt-md-0">
                                                    <button className="btn btn-lg btn-primary dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Edit
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">
                                                            edit
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Complet
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Skip
                                                        </a>
                                                        <div role="separator" className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">
                                                            Tutoriel
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item is-static is-bordered resource mb-3">
                                            <div className="item-row flex-column flex-md-row">
                                                <div className="mr-5 d-flex flex-fill">
                                                    <div className="item-icon is-darker icon icon-book-open-blank-variant" />
                                                    <div className="item-content ml-3">
                                                        <h4 className="mb-none">Add Ressources</h4>
                                                        <span className="small text-muted">Upload documents and tools for participant reference</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center dropdown align-self-end align-self-lg-start mt-3 mt-md-0">
                                                    <button className="btn btn-lg btn-primary dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Add
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">
                                                            Add
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Complet
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Skip
                                                        </a>
                                                        <div role="separator" className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">
                                                            Tutoriel
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
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
                                        <div className="my-5">
                                            <div className="d-flex justify-content-between mb-3">
                                                <span className="small text-muted">Tasks</span>
                                                <span className="small text-muted">Not completd</span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="progress flex-fill mr-3" style={{ height: 5 }}>
                                                    <div className="progress-bar" role="progressbar" style={{ width: "0%" }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                                <span className="small text-muted">0/3</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-8">
                                        <div className="item is-static is-bordered resource mb-3">
                                            <div className="item-row flex-column flex-md-row">
                                                <div className="mr-5 d-flex flex-fill">
                                                    <div className="item-icon is-darker icon icon-account-plus" />
                                                    <div className="item-content ml-3">
                                                        <h4 className="mb-none">Invite Expert</h4>
                                                        <span className="small text-muted">Invite your program experts</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center dropdown align-self-end align-self-lg-start mt-3 mt-md-0">
                                                    <button className="btn btn-lg btn-primary dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Invit
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">
                                                            Invit
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Complet
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Skip
                                                        </a>
                                                        <div role="separator" className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">
                                                            Tutoriel
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item is-static is-bordered resource mb-3">
                                            <div className="item-row flex-column flex-md-row">
                                                <div className="mr-5 d-flex flex-fill">
                                                    <div className="item-icon is-darker icon icon-clipboard-text" />
                                                    <div className="item-content ml-3">
                                                        <h4 className="mb-none">Assign Expert to Project</h4>
                                                        <span className="small text-muted">Link experts to specific projects for support and advice</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center dropdown align-self-end align-self-lg-start mt-3 mt-md-0">
                                                    <button className="btn btn-lg btn-primary dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Edit
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">
                                                            Edit
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Complet
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Skip
                                                        </a>
                                                        <div role="separator" className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">
                                                            Tutoriel
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item is-static is-bordered resource mb-3">
                                            <div className="item-row flex-column flex-md-row">
                                                <div className="mr-5 d-flex flex-fill">
                                                    <div className="item-icon is-darker icon icon-eye" />
                                                    <div className="item-content ml-3">
                                                        <h4 className="mb-none">Set Experts Visibility</h4>
                                                        <span className="small text-muted">Control whether experts are visible to all participants</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center dropdown align-self-end align-self-lg-start mt-3 mt-md-0">
                                                    <button className="btn btn-lg btn-primary dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Edit
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">
                                                            Edit
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Complet
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Skip
                                                        </a>
                                                        <div role="separator" className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">
                                                            Tutoriel
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
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
                                        <div className="my-5">
                                            <div className="d-flex justify-content-between mb-3">
                                                <span className="small text-muted">Tasks</span>
                                                <span className="small text-muted">Not completd</span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="progress flex-fill mr-3" style={{ height: 5 }}>
                                                    <div className="progress-bar" role="progressbar" style={{ width: "0%" }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                                <span className="small text-muted">0/4</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-8">
                                        <div className="item is-static is-bordered resource mb-3">
                                            <div className="item-row flex-column flex-md-row">
                                                <div className="mr-5 d-flex flex-fill">
                                                    <div className="item-icon is-darker icon icon-newspaper-variant-outline" />
                                                    <div className="item-content ml-3">
                                                        <h4 className="mb-none">Newsfeed</h4>
                                                        <span className="small text-muted">Post updates and tips to keep participants informed and engaged with the program</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center dropdown align-self-end align-self-lg-start mt-3 mt-md-0">
                                                    <button className="btn btn-lg btn-primary dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Edit
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">
                                                            Edit
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Complet
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Skip
                                                        </a>
                                                        <div role="separator" className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">
                                                            Tutoriel
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item is-static is-bordered resource mb-3">
                                            <div className="item-row flex-column flex-md-row">
                                                <div className="mr-5 d-flex flex-fill">
                                                    <div className="item-icon is-darker icon icon-email" />
                                                    <div className="item-content ml-3">
                                                        <h4 className="mb-none">Mail</h4>
                                                        <span className="small text-muted">Schedule automated emails to share news and reminders</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center dropdown align-self-end align-self-lg-start mt-3 mt-md-0">
                                                    <button className="btn btn-lg btn-primary dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Edit
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">
                                                            Edit
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Complet
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Skip
                                                        </a>
                                                        <div role="separator" className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">
                                                            Tutoriel
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item is-static is-bordered resource mb-3">
                                            <div className="item-row flex-column flex-md-row">
                                                <div className="mr-5 d-flex flex-fill">
                                                    <div className="item-icon is-darker icon icon-format-list-checks" />
                                                    <div className="item-content ml-3">
                                                        <h4 className="mb-none">Survey</h4>
                                                        <span className="small text-muted">Collect feedback from participants through custom surveys</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center dropdown align-self-end align-self-lg-start mt-3 mt-md-0">
                                                    <button className="btn btn-lg btn-primary dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Edit
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">
                                                            Edit
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Complet
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Skip
                                                        </a>
                                                        <div role="separator" className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">
                                                            Tutoriel
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item is-static is-bordered resource mb-3">
                                            <div className="item-row flex-column flex-md-row">
                                                <div className="mr-5 d-flex flex-fill">
                                                    <div className="item-icon is-darker icon icon-calendar" />
                                                    <div className="item-content ml-3">
                                                        <h4 className="mb-none">Events</h4>
                                                        <span className="small text-muted">Plan and manage program events like workshops or webinars</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center dropdown align-self-end align-self-lg-start mt-3 mt-md-0">
                                                    <button className="btn btn-lg btn-primary dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Edit
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">
                                                            Edit
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Complet
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Skip
                                                        </a>
                                                        <div role="separator" className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">
                                                            Tutoriel
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
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
                                        <div className="my-5">
                                            <div className="d-flex justify-content-between mb-3">
                                                <span className="small text-muted">Tasks</span>
                                                <span className="small text-muted">Not completd</span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="progress flex-fill mr-3" style={{ height: 5 }}>
                                                    <div className="progress-bar" role="progressbar" style={{ width: "0%" }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                                <span className="small text-muted">0/1</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-8">
                                        <div className="item is-static is-bordered resource mb-3">
                                            <div className="item-row flex-column flex-md-row">
                                                <div className="mr-5 d-flex flex-fill">
                                                    <div className="item-icon is-darker icon icon-chart-donut" />
                                                    <div className="item-content ml-3">
                                                        <h4 className="mb-none">Insights & Analytics</h4>
                                                        <span className="small text-muted">Track participant engagement and program progress</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center dropdown align-self-end align-self-lg-start mt-3 mt-md-0">
                                                    <button className="btn btn-lg btn-primary dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Edit
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">
                                                            Edit
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Complet
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Skip
                                                        </a>
                                                        <div role="separator" className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">
                                                            Tutoriel
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
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
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="customSwitch2" />
                                    <label className="custom-control-label" htmlFor="customSwitch2">
                                        Show skipped tasks
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
