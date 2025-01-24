import React from "react";
import { Layout } from "../../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";

export const UserManager = () => {
    return (
        <Layout showShortcutbar={false}>
            <AppContent>
                <div className="row">
                    <div className="col-12">
                        <div className="application-section">
                            <h3 className="application-section--title">Activities</h3>
                            <div className="row">
                                <div className="col-xl-3 col-lg-6 col-md-6 col-12 mb-5 d-flex align-items-stretch">
                                    <div className="bg-light rounded m-none p-7 flex-fill d-flex flex-row">
                                        <div className="flex-fill text-center">
                                            <p className="h1">
                                                4<small className="text-muted"> programs</small>
                                            </p>
                                            <small>Upcoming</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 col-12 mb-5 d-flex align-items-stretch">
                                    <div className="bg-light rounded m-none p-7 flex-fill d-flex flex-row">
                                        <div className="flex-fill text-center">
                                            <p className="h1">
                                                4<small className="text-muted"> programs</small>
                                            </p>
                                            <small>Upcoming</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 col-12 mb-5 d-flex align-items-stretch">
                                    <div className="bg-light rounded m-none p-7 flex-fill d-flex flex-row">
                                        <div className="flex-fill text-center">
                                            <p className="h1">
                                                2<small className="text-muted"> programs</small>
                                            </p>
                                            <small>Ongoing</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 col-12 mb-5 d-flex align-items-stretch">
                                    <div className="bg-light rounded m-none p-7 flex-fill d-flex flex-row">
                                        <div className="flex-fill text-center">
                                            <p className="h1">
                                                4<small className="text-muted"> programs</small>
                                            </p>
                                            <small>Closed </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="application-section">
                            <h3 className="application-section--title">Programs</h3>
                            <div className="d-flex d-lg-inline-flex flex-column flex-lg-row mb-5">
                                <div className="mr-lg-3 mr-0 mb-3 mb-lg-0">
                                    <input type="search" className="form-control" id="exampleInputEmail1" aria-describedby="search" placeholder="Search ..." />
                                </div>
                                <div>
                                    <select className="custom-select small" defaultValue="">
                                        <option value="" className="small">
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
                                    <span className="icon icon-time small text-muted mb-sm-0 mb-3">&nbsp;closed</span>
                                </div>
                                <div className="d-flex flex-column flex-md-row">
                                    <a className="flex-fill  btn-default btn mr-0 mr-md-3 mb-5 mb-md-0" href="#">
                                        <span>Manage</span>
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
                                                <span>pr2</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="h4 mb-none">Program 2</div>
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
                                        <span>Manage</span>
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
                                                <span>pr3</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="h4 mb-none">Program 3</div>
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
                                        <span>Manage</span>
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
                                                <span>pr4</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="h4 mb-none">Program 4</div>
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
                                        <span>Manage</span>
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
                                                <span>pr5</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="h4 mb-none">Program 5 </div>
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
                                        <span>Manage</span>
                                    </a>
                                    <a className="flex-fill btn-default btn mb-5 mb-md-0" href="#">
                                        <span>Program dashboard</span>
                                    </a>
                                </div>
                            </div>
                            <div className="mb-5">
                                <a className="btn btn-default btn-block" href="#">
                                    View all
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </AppContent>
        </Layout>
    );
};
