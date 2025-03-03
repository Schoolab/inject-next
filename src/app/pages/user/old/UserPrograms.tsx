import React from "react";
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";

export const UserPrograms = () => {
    return (
        <Layout showShortcutbar={false}>
            <AppContent>
                <div className="row">
                    <div className="col-12 application-section">
                        <div className="application-section">
                            <div className="d-flex d-lg-inline-flex flex-column flex-lg-row mb-5">
                                <div className="mr-lg-3 mr-0 mb-3 mb-lg-0">
                                    <input type="search" className="form-control" id="exampleInputEmail1" aria-describedby="search" placeholder="Search ..." />
                                </div>
                                <div>
                                    <select defaultValue="" className="custom-select small">
                                        <option value="" className="small" >
                                            Organizations
                                        </option>
                                        <option value={1}>Schoolab</option>
                                        <option value={2}>Raiselab</option>
                                        <option value={3}>Moho</option>
                                    </select>
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
                                    <span className="icon icon-time small text-muted mb-sm-0 mb-3">&nbsp;Registration open until 00/00/0000</span>
                                </div>
                                <div className="mb-5 d-flex justify-content-center">
                                    <ul className="list-stepper">
                                        <li className="list-stepper-item">
                                            <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={100} style={{ ["--percent" as any] : 100 }}>
                                                <circle className="progress-circle progress-circle-bg" />
                                                <circle className="progress-circle progress-circle-percent" />
                                                <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                            </svg>
                                            <div className="pl-3">
                                                <p className="m-none">Application creation</p>
                                            </div>
                                        </li>
                                        <li className="list-stepper-item is-progress">
                                            <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={50} style={{ ["--percent" as any] : 50 }}>
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
                                            <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={0} style={{ ["--percent" as any] : 0 }}>
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
                                <div className="d-flex flex-column flex-md-row">
                                    <div className="flex-fill btn-group mr-0 mr-md-3 mb-5 mb-md-0">
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
                                        <button className="flex-fill btn btn-default  mb-5 mb-md-0" disabled>
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
                                <div className="d-flex flex-column flex-md-row">
                                    <a className="flex-fill  btn-default btn mr-0 mr-md-3 mb-5 mb-md-0" href="#">
                                        <span>Learning courses</span>
                                    </a>
                                    <a className="flex-fill btn-default btn mb-5 mb-md-0" href="#">
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
                                <div className="d-flex flex-column flex-md-row">
                                    <a className="flex-fill btn-default btn mb-5 mb-md-0" href="#">
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
                                <div className="d-flex flex-column flex-md-row">
                                    <a className="flex-fill  btn-default btn mr-0 mr-md-3 mb-5 mb-md-0" href="#">
                                        <span>Expert space</span>
                                    </a>
                                    <a className="flex-fill  btn-default btn mr-0 mr-md-3 mb-5 mb-md-0" href="#">
                                        <span>Jury space</span>
                                    </a>
                                    <a className="flex-fill  btn-default btn mr-0 mr-md-3 mb-5 mb-md-0" href="#">
                                        <span>Manage</span>
                                    </a>
                                    <a className="flex-fill btn-default btn mb-5 mb-md-0" href="#">
                                        <span>Program dashboard</span>
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
