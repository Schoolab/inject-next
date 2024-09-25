import React from "react";

import { Layout } from "../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";

export const JurySessionUsers = () => {
    return (
        <Layout shortcutBarExpanded={true}>
            <AppContent isAsside={true}>
                <>
                    <div className="application-section">
                        <h3 className="application-section--title">About this jury session</h3>
                        <p>During the idea evaluation session, use the platform to find key information and rate each project.</p>
                        <p>
                            The projects are evaluated according to 6 weighted criteria, and an overall average is automatically calculated for each project to determine the winners. Feel free to use the "feedback" field to give your feedback to the project team members when the results are published.
                            <br />
                            Thank you very much for helping us to choose the best projects.
                        </p>
                        <p>Have a good evaluation session!</p>
                    </div>
                    <div className="application-section">
                        <div className="d-flex d-lg-inline-flex flex-column flex-lg-row mb-5">
                            <div className="mr-lg-3 mr-0 mb-3 mb-lg-0">
                                <input type="search" className="form-control" id="exampleInputEmail1" aria-describedby="search" placeholder="Search ..." />
                            </div>
                            <div className="mb-lg-0">
                                <select className="custom-select">
                                    <option selected>Sort by average note</option>
                                    <option value={1}>ascending average note</option>
                                    <option value={2}>descending average note</option>
                                </select>
                            </div>
                        </div>
                        <div className="row card-row">
                            <div className="col-12 col-lg-4">
                                <div className="card h-100">
                                    <div className="card-infos is-linked d-flex flex-column gap-md pt-32px">
                                        <div className="thumbnail-relation m-auto">
                                            <div className="thumbnail is-oval is-2xl is-bordered">
                                                <img src="https://inject-prod.s3.amazonaws.com/images/3155b942-7535-4b0b-8ded-97eb42a92e1b/sq150.jpeg" />
                                            </div>
                                        </div>
                                        <div className="card-title text-center mb-md">
                                            <a href="#" className="h3 mb-none stretched-link line-clamp-1">
                                                Emma Salvarelli
                                            </a>
                                            <p className="text-muted small mb-none">Paris, FR</p>
                                            <div className="badges mt-16px">
                                                <a className="badge is-pill">Data</a>
                                                <a className="badge is-pill" href="#">
                                                    Digital marketing
                                                </a>
                                            </div>
                                        </div>
                                        <div className="dropdown position-absolute" style={{ top: ".75rem", right: ".75rem" }}>
                                            <a className="btn btn-transparent btn-icon position-relative z-1" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="icon is-20px icon-options" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">
                                                    Show profile
                                                </a>
                                                <a className="dropdown-item" data-toggle="modal" data-target="#modalOpenThread" data-user-id={320} href="#">
                                                    Send a message
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-links">
                                        <div className="d-flex align-items-center justify-content-between text-muted mb-3">
                                            <span className="small font-weight-bold text-truncate mr-2">
                                                {"{"}evaluation_session.name{"}"}
                                            </span>
                                            <span className="small text-nowrap">
                                                Average{" "}
                                                <span className="font-weight-bold text-yellow">
                                                    <span className="icon icon-rating" /> 4.8
                                                </span>
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <div className="progress flex-fill mr-3" style={{ height: 5 }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: "33%" }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={33} />
                                            </div>
                                            <span className="small text-muted">2/8</span>
                                        </div>
                                        <div className="card-actions">
                                            <a className="btn btn-lg btn-primary btn-block" href="#">
                                                <span className="icon icon-rating is-sm mr-2" /> Evaluate{" "}
                                            </a>
                                            <a className="btn btn-lg btn-default btn-block" href="#">
                                                {" "}
                                                Participations{" "}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="card h-100">
                                    <div className="card-infos is-linked d-flex flex-column gap-md pt-32px">
                                        <div className="thumbnail-relation m-auto">
                                            <div className="thumbnail is-oval is-2xl is-bordered">
                                                <img src="https://inject-prod.s3.amazonaws.com/images/3155b942-7535-4b0b-8ded-97eb42a92e1b/sq150.jpeg" />
                                            </div>
                                        </div>
                                        <div className="card-title text-center mb-md">
                                            <a href="#" className="h3 mb-none stretched-link line-clamp-1">
                                                Emma Salvarelli
                                            </a>
                                            <p className="text-muted small mb-none">Paris, FR</p>
                                            <div className="badges mt-16px">
                                                <a className="badge is-pill">Data</a>
                                                <a className="badge is-pill" href="#">
                                                    Digital marketing
                                                </a>
                                            </div>
                                        </div>
                                        <div className="dropdown position-absolute" style={{ top: ".75rem", right: ".75rem" }}>
                                            <a className="btn btn-transparent btn-icon position-relative z-1" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="icon is-20px icon-options" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">
                                                    Show profile
                                                </a>
                                                <a className="dropdown-item" data-toggle="modal" data-target="#modalOpenThread" data-user-id={320} href="#">
                                                    Send a message
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-links">
                                        <div className="d-flex align-items-center justify-content-between text-muted mb-3">
                                            <span className="small font-weight-bold text-truncate mr-2">
                                                {"{"}evaluation_session.name{"}"}
                                            </span>
                                            <span className="small text-nowrap">
                                                Average{" "}
                                                <span className="font-weight-bold text-yellow">
                                                    <span className="icon icon-rating" /> 4.8
                                                </span>
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <div className="progress flex-fill mr-3" style={{ height: 5 }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: "33%" }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={33} />
                                            </div>
                                            <span className="small text-muted">2/8</span>
                                        </div>
                                        <div className="card-actions">
                                            <a className="btn btn-lg btn-primary btn-block" href="#">
                                                <span className="icon icon-rating is-sm mr-2" /> Evaluate{" "}
                                            </a>
                                            <a className="btn btn-lg btn-default btn-block" href="#">
                                                {" "}
                                                Participations{" "}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="card h-100">
                                    <div className="card-infos is-linked d-flex flex-column gap-md pt-32px">
                                        <div className="thumbnail-relation m-auto">
                                            <div className="thumbnail is-oval is-2xl is-bordered">
                                                <img src="https://inject-prod.s3.amazonaws.com/images/3155b942-7535-4b0b-8ded-97eb42a92e1b/sq150.jpeg" />
                                            </div>
                                        </div>
                                        <div className="card-title text-center mb-md">
                                            <a href="#" className="h3 mb-none stretched-link line-clamp-1">
                                                Emma Salvarelli
                                            </a>
                                            <p className="text-muted small mb-none">Paris, FR</p>
                                            <div className="badges mt-16px">
                                                <a className="badge is-pill">Data</a>
                                                <a className="badge is-pill" href="#">
                                                    Digital marketing
                                                </a>
                                            </div>
                                        </div>
                                        <div className="dropdown position-absolute" style={{ top: ".75rem", right: ".75rem" }}>
                                            <a className="btn btn-transparent btn-icon position-relative z-1" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="icon is-20px icon-options" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">
                                                    Show profile
                                                </a>
                                                <a className="dropdown-item" data-toggle="modal" data-target="#modalOpenThread" data-user-id={320} href="#">
                                                    Send a message
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-links">
                                        <div className="d-flex align-items-center justify-content-between text-muted mb-3">
                                            <span className="small font-weight-bold text-truncate mr-2">
                                                {"{"}evaluation_session.name{"}"}
                                            </span>
                                            <span className="small text-nowrap">
                                                Average{" "}
                                                <span className="font-weight-bold text-yellow">
                                                    <span className="icon icon-rating" /> 4.8
                                                </span>
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <div className="progress flex-fill mr-3" style={{ height: 5 }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: "33%" }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={33} />
                                            </div>
                                            <span className="small text-muted">2/8</span>
                                        </div>
                                        <div className="card-actions">
                                            <a className="btn btn-lg btn-primary btn-block" href="#">
                                                <span className="icon icon-rating is-sm mr-2" /> Evaluate{" "}
                                            </a>
                                            <a className="btn btn-lg btn-default btn-block" href="#">
                                                {" "}
                                                Participations{" "}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="card h-100">
                                    <div className="card-infos is-linked d-flex flex-column gap-md pt-32px">
                                        <div className="thumbnail-relation m-auto">
                                            <div className="thumbnail is-oval is-2xl is-bordered">
                                                <img src="https://inject-prod.s3.amazonaws.com/images/3155b942-7535-4b0b-8ded-97eb42a92e1b/sq150.jpeg" />
                                            </div>
                                        </div>
                                        <div className="card-title text-center mb-md">
                                            <a href="#" className="h3 mb-none stretched-link line-clamp-1">
                                                Emma Salvarelli
                                            </a>
                                            <p className="text-muted small mb-none">Paris, FR</p>
                                            <div className="badges mt-16px">
                                                <a className="badge is-pill">Data</a>
                                                <a className="badge is-pill" href="#">
                                                    Digital marketing
                                                </a>
                                            </div>
                                        </div>
                                        <div className="dropdown position-absolute" style={{ top: ".75rem", right: ".75rem" }}>
                                            <a className="btn btn-transparent btn-icon position-relative z-1" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="icon is-20px icon-options" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">
                                                    Show profile
                                                </a>
                                                <a className="dropdown-item" data-toggle="modal" data-target="#modalOpenThread" data-user-id={320} href="#">
                                                    Send a message
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-links">
                                        <div className="d-flex align-items-center justify-content-between text-muted mb-3">
                                            <span className="small font-weight-bold text-truncate mr-2">
                                                {"{"}evaluation_session.name{"}"}
                                            </span>
                                            <span className="small text-nowrap">
                                                Average{" "}
                                                <span className="font-weight-bold text-yellow">
                                                    <span className="icon icon-rating" /> 4.8
                                                </span>
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <div className="progress flex-fill mr-3" style={{ height: 5 }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: "33%" }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={33} />
                                            </div>
                                            <span className="small text-muted">2/8</span>
                                        </div>
                                        <div className="card-actions">
                                            <a className="btn btn-lg btn-primary btn-block" href="#">
                                                <span className="icon icon-rating is-sm mr-2" /> Evaluate{" "}
                                            </a>
                                            <a className="btn btn-lg btn-default btn-block" href="#">
                                                {" "}
                                                Participations{" "}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="card h-100">
                                    <div className="card-infos is-linked d-flex flex-column gap-md pt-32px">
                                        <div className="thumbnail-relation m-auto">
                                            <div className="thumbnail is-oval is-2xl is-bordered">
                                                <img src="https://inject-prod.s3.amazonaws.com/images/3155b942-7535-4b0b-8ded-97eb42a92e1b/sq150.jpeg" />
                                            </div>
                                        </div>
                                        <div className="card-title text-center mb-md">
                                            <a href="#" className="h3 mb-none stretched-link line-clamp-1">
                                                Emma Salvarelli
                                            </a>
                                            <p className="text-muted small mb-none">Paris, FR</p>
                                            <div className="badges mt-16px">
                                                <a className="badge is-pill">Data</a>
                                                <a className="badge is-pill" href="#">
                                                    Digital marketing
                                                </a>
                                            </div>
                                        </div>
                                        <div className="dropdown position-absolute" style={{ top: ".75rem", right: ".75rem" }}>
                                            <a className="btn btn-transparent btn-icon position-relative z-1" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="icon is-20px icon-options" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">
                                                    Show profile
                                                </a>
                                                <a className="dropdown-item" data-toggle="modal" data-target="#modalOpenThread" data-user-id={320} href="#">
                                                    Send a message
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-links">
                                        <div className="d-flex align-items-center justify-content-between text-muted mb-3">
                                            <span className="small font-weight-bold text-truncate mr-2">
                                                {"{"}evaluation_session.name{"}"}
                                            </span>
                                            <span className="small text-nowrap">
                                                Average{" "}
                                                <span className="font-weight-bold text-yellow">
                                                    <span className="icon icon-rating" /> 4.8
                                                </span>
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <div className="progress flex-fill mr-3" style={{ height: 5 }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: "33%" }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={33} />
                                            </div>
                                            <span className="small text-muted">2/8</span>
                                        </div>
                                        <div className="card-actions">
                                            <a className="btn btn-lg btn-primary btn-block" href="#">
                                                <span className="icon icon-rating is-sm mr-2" /> Evaluate{" "}
                                            </a>
                                            <a className="btn btn-lg btn-default btn-block" href="#">
                                                {" "}
                                                Participations{" "}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </AppContent>
        </Layout>
    );
};
