import React from "react";
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";

export const UserMyDashboard = () => {
    return (
        <Layout showShortcutbar={false}>
            <AppContent>
                <div className="row">
                    <div className="col-12 col-lg-6 col-xl-8 ">
                        <div className="application-section">
                            <h3 className="application-section--title">Activities</h3>
                            <div className="row">
                                <div className="col-xl-6 col-lg-12 col-xl-6 col-12 mb-5 d-flex align-items-stretch">
                                    <div className="bg-light rounded m-none p-7 flex-fill d-flex flex-row">
                                        <div className="flex-fill text-center">
                                            <p className="h1">
                                                4<small className="text-muted"> programs</small>
                                            </p>
                                            <small>Total nb </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-12 col-xl-6 col-12 mb-5 d-flex align-items-stretch">
                                    <div className="bg-light rounded m-none p-7 flex-fill d-flex flex-row">
                                        <div className="flex-fill text-center">
                                            <p className="h1">
                                                2<small className="text-muted"> projects</small>
                                            </p>
                                            <small>Total nb</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="application-section">
                            <h3 className="application-section--title">Programs activities</h3>
                            <div className="card m-none p-5 mb-5">
                                <small className="text-uppercase text-muted mb-3 flex-fill">Schoolab</small>
                                <div className="d-flex flex-column flex-sm-row align-items-start mb-5">
                                    <div className="d-flex flex-fill  mb-3 mb-sm-0">
                                        <div className="mr-3">
                                            <div className="icon icon--program">
                                                <span>pr1</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="h4 mb-none">Program 1</div>
                                            <ul className="list-inline list-dotted text-muted mb-none">
                                                <li className="list-inline-item small">Ongoing</li>
                                                <li className="list-inline-item small">25 members</li>
                                                <li className="list-inline-item small">25 projects</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <span className="icon icon-time small text-muted mb-sm-0 mb-3">&nbsp;Registration open until 00/00/0000</span>
                                </div>
                                <div className="mb-5 d-flex justify-content-center">
                                    <ul className="list-stepper">
                                        <li className="list-stepper-item">
                                            <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={100} style={{ ["--percent" as any]: 100 }}>
                                                <circle className="progress-circle progress-circle-bg" />
                                                <circle className="progress-circle progress-circle-percent" />
                                                <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                            </svg>
                                            <div className="pl-3">
                                                <p className="m-none">Application creation</p>
                                            </div>
                                        </li>
                                        <li className="list-stepper-item is-progress">
                                            <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={50} style={{ ["--percent" as any]: 50 }}>
                                                <circle className="progress-circle progress-circle-bg" />
                                                <circle className="progress-circle progress-circle-percent" />
                                                <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                            </svg>
                                            <div className="pl-3">
                                                <p className="m-none">
                                                    <strong>Application submission</strong>
                                                </p>
                                                <p className="m-none small text-muted">5 days left</p>
                                            </div>
                                        </li>
                                        <li className="list-stepper-item is-progress">
                                            <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={0} style={{ ["--percent" as any]: 0 }}>
                                                <circle className="progress-circle progress-circle-bg" />
                                                <circle className="progress-circle progress-circle-percent" />
                                                <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                            </svg>
                                            <div className="pl-3">
                                                <p className="m-none">Application accepted</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="d-flex flex-column flex-md-row flex-lg-column flex-xl-row">
                                    <div className="flex-fill btn-group mr-0 mr-xl-3 mb-5 mb-xl-0">
                                        <a className="btn btn-default btn-block" href="#">
                                            <span>View application</span>
                                        </a>
                                        <a type="button" className="btn btn-default dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="sr-only" />
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="#" data-url="#" data-toggle="modal">
                                                <span>Delete my participation</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div data-toggle="tooltip" data-placement="top" data-original-title="The program dashboard will be accessible once your application is accepted." className="d-flex flex-fill">
                                        <button className="flex-fill btn btn-default  mb-5 mb-xl-0" disabled>
                                            <span>Program dashboard</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card m-none p-5 mb-5">
                                <small className="text-uppercase text-muted mb-3 flex-fill">Schoolab</small>
                                <div className="d-flex flex-column flex-sm-row align-items-start mb-5">
                                    <div className="d-flex flex-fill  mb-3 mb-sm-0">
                                        <div className="mr-3">
                                            <div className="icon icon--program">
                                                <span>pr1</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="h4 mb-none">Program 1</div>
                                            <ul className="list-inline list-dotted text-muted mb-none">
                                                <li className="list-inline-item small">Ongoing</li>
                                                <li className="list-inline-item small">25 members</li>
                                                <li className="list-inline-item small">25 projects</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <span className="icon icon-time small text-muted mb-sm-0 mb-3">&nbsp;In progress until 00/00/0000</span>
                                </div>
                                <div className="mb-5">
                                    <div className="d-flex justify-content-between mb-3">
                                        <span className="small text-muted">Courses</span>
                                        <span className="small text-muted"> In progress</span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="progress flex-fill mr-3" style={{ height: 5 }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: "20%" }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <span className="small text-muted">20%</span>
                                    </div>
                                </div>
                                <div className="d-flex flex-column flex-md-row flex-lg-column flex-xl-row">
                                    <a className="flex-fill  btn-default btn mr-0 mr-md-3 mr-lg-0 mr-xl-3 mb-5 mb-md-0 mb-lg-5 mb-xl-0" href="#">
                                        <span>Learning courses</span>
                                    </a>
                                    <a className="flex-fill btn-default btn mb-5 mb-xl-0" href="#">
                                        <span>Program dashboard</span>
                                    </a>
                                </div>
                            </div>
                            <div className="card m-none p-5 mb-5">
                                <small className="text-uppercase text-muted mb-3 flex-fill">Schoolab</small>
                                <div className="d-flex flex-column flex-sm-row align-items-start mb-5">
                                    <div className="d-flex flex-fill  mb-3 mb-sm-0">
                                        <div className="mr-3">
                                            <div className="icon icon--program">
                                                <span>pr1</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="h4 mb-none">Program 1</div>
                                            <ul className="list-inline list-dotted text-muted mb-none">
                                                <li className="list-inline-item small">Ongoing</li>
                                                <li className="list-inline-item small">25 members</li>
                                                <li className="list-inline-item small">25 projects</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <span className="icon icon-time small text-muted mb-sm-0 mb-3">&nbsp;Registration closed</span>
                                </div>
                                <div className="d-flex flex-column flex-md-row flex-lg-column flex-xl-row">
                                    <a className="flex-fill btn-default btn mb-5 mb-xl-0" href="#">
                                        <span>Program dashboard</span>
                                    </a>
                                </div>
                            </div>
                            <div className="card m-none p-5 mb-5">
                                <small className="text-uppercase text-muted mb-3 flex-fill">Schoolab</small>
                                <div className="d-flex flex-column flex-sm-row align-items-start mb-5">
                                    <div className="d-flex flex-fill  mb-3 mb-sm-0">
                                        <div className="mr-3">
                                            <div className="icon icon--program">
                                                <span>pr1</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="h4 mb-none">Program 1</div>
                                            <ul className="list-inline list-dotted text-muted mb-none">
                                                <li className="list-inline-item small">Ongoing</li>
                                                <li className="list-inline-item small">25 members</li>
                                                <li className="list-inline-item small">25 projects</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <span className="icon icon-time small text-muted mb-sm-0 mb-3">&nbsp;closed</span>
                                </div>
                                <div className="d-flex flex-column flex-md-row flex-lg-column flex-xl-row">
                                    <a className="flex-fill  btn-default btn mr-0 mr-md-3 mr-lg-0 mr-xl-3 mb-5 mb-md-0 mb-lg-5 mb-xl-0" href="#">
                                        <span>Expert space</span>
                                    </a>
                                    <a className="flex-fill  btn-default btn mr-0 mr-md-3 mr-lg-0 mr-xl-3 mb-5 mb-md-0 mb-lg-5 mb-xl-0" href="#">
                                        <span>Jury space</span>
                                    </a>
                                    <a className="flex-fill  btn-default btn mr-0 mr-md-3 mr-lg-0 mr-xl-3 mb-5 mb-md-0 mb-lg-5 mb-xl-0" href="#">
                                        <span>Manage</span>
                                    </a>
                                    <a className="flex-fill btn-default btn mb-5 mb-xl-0" href="#">
                                        <span>Program dashboard</span>
                                    </a>
                                </div>
                            </div>
                            <div className="mb-5">
                                <a className="btn btn-default btn-block" href="#">
                                    View all programs
                                </a>
                            </div>
                        </div>
                        <div className="application-section">
                            <h4 className="application-section--title">Projects activities</h4>
                            <div className="card m-none p-5 mb-5">
                                <small className="text-uppercase text-muted mb-3 flex-fill">Schoolab</small>
                                <div className="d-flex flex-column flex-sm-row align-items-start mb-5">
                                    <div className="d-flex flex-fill  mb-3 mb-sm-0">
                                        <div className="mr-3">
                                            <div className="thumbnail is-lg">
                                                <div className="icon icon--letter is-sm">
                                                    <span className="py-1 ">m</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="h4 mb-none">My project</div>
                                            <ul className="list-inline list-dotted text-muted mb-none">
                                                <li className="list-inline-item small">Program 1</li>
                                                <li className="list-inline-item small">Ongoing</li>
                                                <li className="list-inline-item small">3 members</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-5 d-flex justify-content-center">
                                    <ul className="list-stepper">
                                        <li className="list-stepper-item">
                                            <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={100} style={{ ["--percent" as any]: 100 }}>
                                                <circle className="progress-circle progress-circle-bg" />
                                                <circle className="progress-circle progress-circle-percent" />
                                                <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                            </svg>
                                            <div className="pl-3">
                                                <p className="m-none">Project creation</p>
                                            </div>
                                        </li>
                                        <li className="list-stepper-item is-progress">
                                            <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={50} style={{ ["--percent" as any]: 50 }}>
                                                <circle className="progress-circle progress-circle-bg" />
                                                <circle className="progress-circle progress-circle-percent" />
                                                <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                            </svg>
                                            <div className="pl-3">
                                                <p className="m-none">
                                                    <strong>Project submission</strong>
                                                </p>
                                                <p className="m-none small text-muted">5 days left</p>
                                            </div>
                                        </li>
                                        <li className="list-stepper-item is-progress">
                                            <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={0} style={{ ["--percent" as any]: 0 }}>
                                                <circle className="progress-circle progress-circle-bg" />
                                                <circle className="progress-circle progress-circle-percent" />
                                                <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                            </svg>
                                            <div className="pl-3">
                                                <p className="m-none">Project accepted</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="d-flex flex-column flex-md-row flex-lg-column flex-xl-row">
                                    <div className="flex-fill btn-group mr-0 mr-md-3 mr-lg-0 mr-xl-3 mb-5 mb-md-0 mb-lg-5 mb-xl-0">
                                        <a className="btn btn-default btn-block" href="#">
                                            <span>View application</span>
                                        </a>
                                        <a type="button" className="btn btn-default dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="sr-only" />
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="#" data-url="#" data-toggle="modal">
                                                <span>Delete my participation</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div data-toggle="tooltip" data-placement="top" data-original-title="The project overview will be accessible once your application is accepted." className="d-flex flex-fill">
                                        <button className="flex-fill btn btn-default  mb-5 mb-xl-0" disabled>
                                            <span>Project overview</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card m-none p-5 mb-5">
                                <small className="text-uppercase text-muted mb-3 flex-fill">Schoolab</small>
                                <div className="d-flex flex-column flex-sm-row align-items-start mb-5">
                                    <div className="d-flex flex-fill  mb-3 mb-sm-0">
                                        <div className="mr-3">
                                            <div className="thumbnail is-lg">
                                                <div className="icon icon--letter is-sm">
                                                    <span className="py-1 ">m</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="h4 mb-none">My project</div>
                                            <ul className="list-inline list-dotted text-muted mb-none">
                                                <li className="list-inline-item small">Program 1</li>
                                                <li className="list-inline-item small">Ongoing</li>
                                                <li className="list-inline-item small">3 members</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-5 d-flex justify-content-center">
                                    <ul className="list-stepper">
                                        <li className="list-stepper-item">
                                            <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={100} style={{ ["--percent" as any]: 100 }}>
                                                <circle className="progress-circle progress-circle-bg" />
                                                <circle className="progress-circle progress-circle-percent" />
                                                <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                            </svg>
                                            <div className="pl-3">
                                                <p className="m-none">Team application</p>
                                            </div>
                                        </li>
                                        <li className="list-stepper-item is-progress">
                                            <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={50} style={{ ["--percent" as any]: 50 }}>
                                                <circle className="progress-circle progress-circle-bg" />
                                                <circle className="progress-circle progress-circle-percent" />
                                                <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                            </svg>
                                            <div className="pl-3">
                                                <p className="m-none">
                                                    <strong>Team submission</strong>
                                                </p>
                                                <p className="m-none small text-muted">5 days left</p>
                                            </div>
                                        </li>
                                        <li className="list-stepper-item is-progress">
                                            <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={0} style={{ ["--percent" as any]: 0 }}>
                                                <circle className="progress-circle progress-circle-bg" />
                                                <circle className="progress-circle progress-circle-percent" />
                                                <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                            </svg>
                                            <div className="pl-3">
                                                <p className="m-none">Team accepted</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="d-flex flex-column flex-md-row flex-lg-column flex-xl-row">
                                    <div className="flex-fill btn-group mr-0 mr-xl-3 mb-5 mb-xl-0">
                                        <a className="btn btn-default btn-block" href="#">
                                            <span>View application</span>
                                        </a>
                                        <a type="button" className="btn btn-default dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="sr-only" />
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="#" data-url="#" data-toggle="modal">
                                                <span>Delete my participation</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div data-toggle="tooltip" data-placement="top" data-original-title="The project overview will be accessible once your application is accepted." className="d-flex flex-fill">
                                        <button className="flex-fill btn btn-default  mb-5 mb-xl-0" disabled>
                                            <span>Project overview</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card m-none p-5 mb-5">
                                <small className="text-uppercase text-muted mb-3 flex-fill">Schoolab</small>
                                <div className="d-flex flex-column flex-sm-row align-items-start mb-5">
                                    <div className="d-flex flex-fill  mb-3 mb-sm-0">
                                        <div className="mr-3">
                                            <div className="thumbnail is-lg">
                                                <div className="icon icon--letter is-sm">
                                                    <span className="py-1 ">m</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="h4 mb-none">My project</div>
                                            <ul className="list-inline list-dotted text-muted mb-none">
                                                <li className="list-inline-item small">Program 1</li>
                                                <li className="list-inline-item small">Ongoing</li>
                                                <li className="list-inline-item small">3 members</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <div className="d-flex justify-content-between mb-3">
                                        <span className="small text-muted">Objectives</span>
                                        <span className="small text-muted"> In progress</span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="progress flex-fill mr-3" style={{ height: 5 }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: "20%" }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <span className="small text-muted">1/5</span>
                                    </div>
                                </div>
                                <div className="d-flex flex-column flex-md-row flex-lg-column flex-xl-row">
                                    <a className="flex-fill  btn-default btn mr-0 mr-md-3 mr-lg-0 mr-xl-3 mb-5 mb-md-0 mb-lg-5 mb-xl-0" href="#">
                                        <span>View objectives</span>
                                    </a>
                                    <a className="flex-fill btn-default btn mb-5 mb-xl-0" href="#">
                                        <span>Project overview</span>
                                    </a>
                                </div>
                            </div>
                            <div className="card m-none p-5 mb-5">
                                <small className="text-uppercase text-muted mb-3 flex-fill">Schoolab</small>
                                <div className="d-flex flex-column flex-sm-row align-items-start mb-5">
                                    <div className="d-flex flex-fill  mb-3 mb-sm-0">
                                        <div className="mr-3">
                                            <div className="thumbnail is-lg">
                                                <div className="icon icon--letter is-sm">
                                                    <span className="py-1 ">m</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="h4 mb-none">My project</div>
                                            <ul className="list-inline list-dotted text-muted mb-none">
                                                <li className="list-inline-item small">Program 1</li>
                                                <li className="list-inline-item small">Ongoing</li>
                                                <li className="list-inline-item small">3 members</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-column flex-md-row flex-lg-column flex-xl-row">
                                    <a className="flex-fill btn-default btn mb-5 mb-xl-0" href="#">
                                        <span>Project overview</span>
                                    </a>
                                </div>
                            </div>
                            <div className="mb-5">
                                <a className="btn btn-default btn-block" href="#">
                                    View all projects
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-4">
                        <div className="application-section">
                            <h3 className="application-section--title">My profile</h3>
                            <div className="card p-5 m-none">
                                <div className="d-flex justify-content-end">
                                    <a className="text-muted " href="#">
                                        <span className="icon is-sm icon-square-edit-outline" />
                                    </a>
                                </div>
                                <div className="d-flex flex-column align-items-center">
                                    <div className="thumbnail-relation">
                                        <div className="thumbnail is-oval is-2xl is-bordered mb-3">
                                            <img src="https://inject-demo.s3.amazonaws.com/images/f4f7b6e8-5fe7-43a3-acf9-e4e383f3e60f/sq150.png" />
                                        </div>
                                        <span className="flag-icon flag-icon-fr" />
                                    </div>
                                    <div className="align-self-start">
                                        <h2 className="m-none">Jean User</h2>
                                        <p className="m-none text-muted">Software engineer</p>
                                        <ul className="list-inline text-muted w-100 small">
                                            <li className="list-inline-item">
                                                <span className="icon icon-map-marker">Paris, FR</span>
                                            </li>
                                            <li className="list-inline-item">
                                                <span className="icon icon-time">Rejoint Jun 11, 2020</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <h4>About Jean</h4>
                                <p>Jean Expert is a seasoned innovation expert with extensive experience in low-code development. With a background in software engineering and a passion for streamlining processes and increasing efficiency, Jean has become a leading voice in the low-code community.</p>
                                <h4>Skills</h4>
                                <div className="badges mb-3">
                                    <a className="badge is-pill" href="#">
                                        Data
                                    </a>
                                    <a className="badge is-pill" href="#">
                                        Low code
                                    </a>
                                    <a className="badge is-pill" href="#">
                                        No code
                                    </a>
                                </div>
                                <h4>Interest</h4>
                                <div className="badges mb-3">
                                    <a className="badge is-pill" href="#">
                                        Wind Surf
                                    </a>
                                </div>
                                <div className="mb-5">
                                    <a className="btn btn-default btn-block" href="#">
                                        Edit your profile
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AppContent>
        </Layout>
    );
};
