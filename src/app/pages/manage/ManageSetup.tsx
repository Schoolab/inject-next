import React from "react";
import { Layout } from "../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";

export const ManageSetup = () => {
    return (
        <Layout  sideBar="Manage">
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
                                        <h4 className="to-collapse" data-toggle="collapse" data-target="#desc-1" aria-expanded="false">
                                            <span>1. Basic info</span>
                                            <span className="icon icon-chevron-right ml-auto" />
                                        </h4>
                                        <div className="collapse" id="desc-1">
                                            <p className="small text-muted">Add details and invite program managers to help you setup the program.</p>
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
                                                <span className="small text-primary">100%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-8">
                                        <div className="item is-completed is-static is-bordered resource mb-3">
                                            <div className="item-row flex-column flex-md-row">
                                                <div className="mr-5 d-flex flex-fill">
                                                    <div className="item-icon is-darker icon icon-information" />
                                                    <div className="item-content ml-3">
                                                        <h4 className="mb-none">Complete the basic info</h4>
                                                        <span className="small text-muted">Review the name, the description, dates and cover of the program</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center dropdown align-self-end mt-3 mt-md-0">
                                                    <span className="small text-muted mr-3 d-none">0/3</span>
                                                    <svg className="progress-circle-container is-small flex-shrink-0 mr-3" viewBox="0 0 32 32" data-percent={100} style={{ ["--percent" as any] : 100 }}>
                                                        <circle className="progress-circle progress-circle-bg" />
                                                        <circle className="progress-circle progress-circle-percent" />
                                                        <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                    </svg>
                                                    <button className="btn btn-lg btn-default dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        View
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Something else here
                                                        </a>
                                                        <div role="separator" className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">
                                                            Separated link
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item is-completed is-static is-bordered resource mb-3">
                                            <div className="item-row flex-column flex-md-row">
                                                <div className="mr-5 d-flex flex-fill">
                                                    <div className="item-icon is-darker icon icon-account-plus" />
                                                    <div className="item-content ml-3">
                                                        <h4 className="mb-none">Invite program managers</h4>
                                                        <span className="small text-muted">Invite your program managers, they will have access to this interface</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center dropdown align-self-end mt-3 mt-md-0">
                                                    <span className="small text-muted mr-3 d-none">0-3</span>
                                                    <svg className="progress-circle-container is-small flex-shrink-0 mr-3" viewBox="0 0 32 32" data-percent={100} style={{ ["--percent" as any] : 100 }}>
                                                        <circle className="progress-circle progress-circle-bg" />
                                                        <circle className="progress-circle progress-circle-percent" />
                                                        <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                    </svg>
                                                    <button className="btn btn-lg btn-default dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        View
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Something else here
                                                        </a>
                                                        <div role="separator" className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">
                                                            Separated link
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
                                        <h4 className="to-collapse" data-toggle="collapse" data-target="#desc-2" aria-expanded="false">
                                            <span>2. Registrations</span>
                                            <span className="icon icon-chevron-right ml-auto" />
                                        </h4>
                                        <div className="collapse" id="desc-2">
                                            <p className="small text-muted">Complete each task to publish the program to the public.</p>
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
                                                <span className="small text-muted">25%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-8">
                                        <div className="item is-completed is-static is-bordered resource mb-3">
                                            <div className="item-row flex-column flex-md-row">
                                                <div className="mr-5 d-flex flex-fill">
                                                    <div className="item-icon is-darker icon icon-calendar" />
                                                    <div className="item-content ml-3">
                                                        <h4 className="mb-none">Registrations dates and rights</h4>
                                                        <span className="small text-muted">Invite your program managers, they will have access to this interface</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center dropdown align-self-end mt-3 mt-md-0">
                                                    <span className="small text-muted mr-3 d-none">0/3</span>
                                                    <svg className="progress-circle-container is-small flex-shrink-0 mr-3" viewBox="0 0 32 32" data-percent={100} style={{ ["--percent" as any] : 100 }}>
                                                        <circle className="progress-circle progress-circle-bg" />
                                                        <circle className="progress-circle progress-circle-percent" />
                                                        <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                    </svg>
                                                    <button className="btn btn-lg btn-default dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        View
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Something else here
                                                        </a>
                                                        <div role="separator" className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">
                                                            Separated link
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
                                                        <h4 className="mb-none">Create participants types</h4>
                                                        <span className="small text-muted">Complete this if you need multiple type of participants</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center dropdown align-self-end mt-3 mt-md-0">
                                                    <span className="small text-muted mr-3 d-none">0/3</span>
                                                    <svg className="progress-circle-container is-small flex-shrink-0 mr-3 d-none" viewBox="0 0 32 32" data-percent={100} style={{ ["--percent" as any] : 100 }}>
                                                        <circle className="progress-circle progress-circle-bg" />
                                                        <circle className="progress-circle progress-circle-percent" />
                                                        <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                    </svg>
                                                    <button className="btn btn-lg btn-primary dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Add
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Something else here
                                                        </a>
                                                        <div role="separator" className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">
                                                            Separated link
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item is-static is-bordered resource mb-3">
                                            <div className="item-row flex-column flex-md-row">
                                                <div className="mr-5 d-flex flex-fill">
                                                    <div className="item-icon is-darker icon icon-questionnaire" />
                                                    <div className="item-content ml-3">
                                                        <h4 className="mb-none">Fill form questionnaires</h4>
                                                        <span className="small text-muted">Add questions to registration and submission forms</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center dropdown align-self-end mt-3 mt-md-0">
                                                    <span className="small text-muted mr-3 d-none">0/3</span>
                                                    <svg className="progress-circle-container is-small flex-shrink-0 mr-3 d-none" viewBox="0 0 32 32" data-percent={100} style={{ ["--percent" as any] : 100 }}>
                                                        <circle className="progress-circle progress-circle-bg" />
                                                        <circle className="progress-circle progress-circle-percent" />
                                                        <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                    </svg>
                                                    <button className="btn btn-lg btn-primary dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Add
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Something else here
                                                        </a>
                                                        <div role="separator" className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">
                                                            Separated link
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item is-static is-bordered resource mb-3">
                                            <div className="item-row flex-column flex-md-row">
                                                <div className="mr-5 d-flex flex-fill">
                                                    <div className="item-icon is-darker icon icon-information" />
                                                    <div className="item-content ml-3">
                                                        <h4 className="mb-none">Create a landing page</h4>
                                                        <span className="small text-muted">Create at least one public page and set it as the landing page</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center dropdown align-self-end mt-3 mt-md-0">
                                                    <span className="small text-muted mr-3 d-none">0/3</span>
                                                    <svg className="progress-circle-container is-small flex-shrink-0 mr-3 d-none" viewBox="0 0 32 32" data-percent={100} style={{ ["--percent" as any] : 100 }}>
                                                        <circle className="progress-circle progress-circle-bg" />
                                                        <circle className="progress-circle progress-circle-percent" />
                                                        <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                    </svg>
                                                    <button className="btn btn-lg btn-primary dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Add
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Something else here
                                                        </a>
                                                        <div role="separator" className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">
                                                            Separated link
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
                                        <h4 className="to-collapse" data-toggle="collapse" data-target="#desc-3" aria-expanded="false">
                                            <span>3. Content</span>
                                            <span className="icon icon-chevron-right ml-auto" />
                                        </h4>
                                        <div className="collapse" id="desc-3">
                                            <p className="small text-muted">Add at least a module, a capsule and a task to the learning course and objectives.</p>
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
                                                <span className="small text-muted">20%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-8">
                                        <div className="item is-static is-bordered resource mb-3">
                                            <div className="item-row flex-column flex-md-row">
                                                <div className="mr-5 d-flex flex-fill">
                                                    <div className="item-icon is-darker icon icon-learning" />
                                                    <div className="item-content ml-3">
                                                        <h4 className="mb-none">Add content and resources to the learning course</h4>
                                                        <span className="small text-muted">Add at least a module, a capsule and a task to the learning course</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center dropdown align-self-end mt-3 mt-md-0">
                                                    <span className="small text-muted mr-3">1/3</span>
                                                    <svg className="progress-circle-container is-small flex-shrink-0 mr-3" viewBox="0 0 32 32" data-percent={30} style={{ ["--percent" as any] : 30 }}>
                                                        <circle className="progress-circle progress-circle-bg" />
                                                        <circle className="progress-circle progress-circle-percent" />
                                                        <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                    </svg>
                                                    <button className="btn btn-lg btn-primary dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Add
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Something else here
                                                        </a>
                                                        <div role="separator" className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">
                                                            Separated link
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item is-static is-bordered resource mb-3">
                                            <div className="item-row flex-column flex-md-row">
                                                <div className="mr-5 d-flex flex-fill">
                                                    <div className="item-icon is-darker icon icon-content" />
                                                    <div className="item-content ml-3">
                                                        <h4 className="mb-none">Add content and resources to the project objective</h4>
                                                        <span className="small text-muted">Add at least a module, a capsule and a task to the objectives</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center dropdown align-self-end mt-3 mt-md-0">
                                                    <span className="small text-muted mr-3">1/3</span>
                                                    <svg className="progress-circle-container is-small flex-shrink-0 mr-3" viewBox="0 0 32 32" data-percent={30} style={{ ["--percent" as any] : 30 }}>
                                                        <circle className="progress-circle progress-circle-bg" />
                                                        <circle className="progress-circle progress-circle-percent" />
                                                        <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                    </svg>
                                                    <button className="btn btn-lg btn-primary dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Add
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Something else here
                                                        </a>
                                                        <div role="separator" className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">
                                                            Separated link
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
                                                        <h4 className="mb-none">Setup emails sent to participants</h4>
                                                        <span className="small text-muted">If needed, add new mails send at specific times during the program</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center dropdown align-self-end mt-3 mt-md-0">
                                                    <span className="small text-muted mr-3 d-none">0/3</span>
                                                    <svg className="progress-circle-container is-small flex-shrink-0 mr-3 d-none" viewBox="0 0 32 32" data-percent={100} style={{ ["--percent" as any] : 100 }}>
                                                        <circle className="progress-circle progress-circle-bg" />
                                                        <circle className="progress-circle progress-circle-percent" />
                                                        <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                    </svg>
                                                    <button className="btn btn-lg btn-primary dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Add
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Something else here
                                                        </a>
                                                        <div role="separator" className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">
                                                            Separated link
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
                                        <h4 className="to-collapse" data-toggle="collapse" data-target="#desc-4" aria-expanded="false">
                                            <span>4. Coaching</span>
                                            <span className="icon icon-chevron-right ml-auto" />
                                        </h4>
                                        <div className="collapse" id="desc-4">
                                            <p className="small text-muted">Set the experts’ space with a brief, the newsfeed and a library.</p>
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
                                                <span className="small text-muted">0%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-8">
                                        <div className="item is-static is-bordered resource mb-3">
                                            <div className="item-row flex-column flex-md-row">
                                                <div className="mr-5 d-flex flex-fill">
                                                    <div className="item-icon is-darker icon icon-summary" />
                                                    <div className="item-content ml-3">
                                                        <h4 className="mb-none">Add a brief for experts</h4>
                                                        <span className="small text-muted">Use this to give instructions on the expert dashboard</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center dropdown align-self-end mt-3 mt-md-0">
                                                    <span className="small text-muted mr-3 d-none">1/3</span>
                                                    <svg className="progress-circle-container is-small flex-shrink-0 mr-3 d-none" viewBox="0 0 32 32" data-percent={30} style={{ ["--percent" as any] : 30 }}>
                                                        <circle className="progress-circle progress-circle-bg" />
                                                        <circle className="progress-circle progress-circle-percent" />
                                                        <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                    </svg>
                                                    <button className="btn btn-lg btn-primary dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Edit
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Something else here
                                                        </a>
                                                        <div role="separator" className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">
                                                            Separated link
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item is-static is-bordered resource mb-3">
                                            <div className="item-row flex-column flex-md-row">
                                                <div className="mr-5 d-flex flex-fill">
                                                    <div className="item-icon is-darker icon icon-folder" />
                                                    <div className="item-content ml-3">
                                                        <h4 className="mb-none">Upload file and resources to the library</h4>
                                                        <span className="small text-muted">Add files and resources that will be available to experts</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center dropdown align-self-end mt-3 mt-md-0">
                                                    <span className="small text-muted mr-3 d-none">1/3</span>
                                                    <svg className="progress-circle-container is-small flex-shrink-0 mr-3 d-none" viewBox="0 0 32 32" data-percent={30} style={{ ["--percent" as any] : 30 }}>
                                                        <circle className="progress-circle progress-circle-bg" />
                                                        <circle className="progress-circle progress-circle-percent" />
                                                        <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                    </svg>
                                                    <button className="btn btn-lg btn-primary dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Add
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Something else here
                                                        </a>
                                                        <div role="separator" className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">
                                                            Separated link
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
                                                        <h4 className="mb-none">Invite experts</h4>
                                                        <span className="small text-muted">Invite your program juries, they will evaluate the project of the program</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center dropdown align-self-end mt-3 mt-md-0">
                                                    <span className="small text-muted mr-3 d-none">0/3</span>
                                                    <svg className="progress-circle-container is-small flex-shrink-0 mr-3 d-none" viewBox="0 0 32 32" data-percent={100} style={{ ["--percent" as any] : 100 }}>
                                                        <circle className="progress-circle progress-circle-bg" />
                                                        <circle className="progress-circle progress-circle-percent" />
                                                        <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                    </svg>
                                                    <button className="btn btn-lg btn-primary dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Invit
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Something else here
                                                        </a>
                                                        <div role="separator" className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">
                                                            Separated link
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
                                        <h4 className="to-collapse" data-toggle="collapse" data-target="#desc-5" aria-expanded="false">
                                            <span>5. Evaluations</span>
                                            <span className="icon icon-chevron-right ml-auto" />
                                        </h4>
                                        <div className="collapse" id="desc-5">
                                            <p className="small text-muted">Set dates and invite jury.</p>
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
                                                <span className="small text-muted">0%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-8">
                                        <div className="item is-static is-bordered resource mb-3">
                                            <div className="item-row flex-column flex-md-row">
                                                <div className="mr-5 d-flex flex-fill">
                                                    <div className="item-icon is-darker icon icon-evaluation" />
                                                    <div className="item-content ml-3">
                                                        <h4 className="mb-none">Evaluation dates and rights</h4>
                                                        <span className="small text-muted">Add public sessions and evaluation sessions</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center dropdown align-self-end mt-3 mt-md-0">
                                                    <span className="small text-muted mr-3 d-none">1/3</span>
                                                    <svg className="progress-circle-container is-small flex-shrink-0 mr-3 d-none" viewBox="0 0 32 32" data-percent={30} style={{ ["--percent" as any] : 30 }}>
                                                        <circle className="progress-circle progress-circle-bg" />
                                                        <circle className="progress-circle progress-circle-percent" />
                                                        <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                    </svg>
                                                    <button className="btn btn-lg btn-primary dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Edit
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Something else here
                                                        </a>
                                                        <div role="separator" className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">
                                                            Separated link
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item is-static is-bordered resource mb-3">
                                            <div className="item-row flex-column flex-md-row">
                                                <div className="mr-5 d-flex flex-fill">
                                                    <div className="item-icon is-darker icon icon-summary" />
                                                    <div className="item-content ml-3">
                                                        <h4 className="mb-none">Add a brief for jury members</h4>
                                                        <span className="small text-muted">Use this to give instructions on the jury dashboard</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center dropdown align-self-end mt-3 mt-md-0">
                                                    <span className="small text-muted mr-3 d-none">1/3</span>
                                                    <svg className="progress-circle-container is-small flex-shrink-0 mr-3 d-none" viewBox="0 0 32 32" data-percent={30} style={{ ["--percent" as any] : 30 }}>
                                                        <circle className="progress-circle progress-circle-bg" />
                                                        <circle className="progress-circle progress-circle-percent" />
                                                        <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                    </svg>
                                                    <button className="btn btn-lg btn-primary dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Edit
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Something else here
                                                        </a>
                                                        <div role="separator" className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">
                                                            Separated link
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
                                                        <h4 className="mb-none">Invite juries</h4>
                                                        <span className="small text-muted">Invite your program juries, they will evaluate the project of the program</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center dropdown align-self-end mt-3 mt-md-0">
                                                    <span className="small text-muted mr-3 d-none">0/3</span>
                                                    <svg className="progress-circle-container is-small flex-shrink-0 mr-3 d-none" viewBox="0 0 32 32" data-percent={100} style={{ ["--percent" as any] : 100 }}>
                                                        <circle className="progress-circle progress-circle-bg" />
                                                        <circle className="progress-circle progress-circle-percent" />
                                                        <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                    </svg>
                                                    <button className="btn btn-lg btn-primary dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Invit
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Something else here
                                                        </a>
                                                        <div role="separator" className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">
                                                            Separated link
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
                                        Show completed tasks
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
