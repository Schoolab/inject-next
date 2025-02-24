import React from "react";

import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";

export const JurySessionProjects = () => {
    return (
        <Layout shortcutBarExpanded={true}>
            <AppContent isAsside={true}>
                <>
         
                    <div className="application-section">
                        <h3 className="application-section--title">About this jury session</h3>
                        <p>During the idea evaluation session, use the platform to find key information and rate each project.</p>
                        <p>
                            The projects are evaluated according to 6 weighted criteria, and an overall average is automatically calculated for each project to determine the winners. Feel free to use the "feedback" field to give your feedback to the project team members when the results are published.
                            <br /> Thank you very much for helping us to choose the best projects.
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
                                    <div className="card-infos is-linked">
                                        <div className="card-banner">
                                            <div className="card-image">
                                                <picture>
                                                    <img src="https://inject-demo.s3.amazonaws.com/images/c17572e7-fb1e-48ac-b80d-bd77c815ed02/co1140x380.jpeg" alt="" />
                                                </picture>
                                            </div>
                                        </div>
                                        <div className="card-title d-flex align-items-center gap-2xs mb-none">
                                            <a href="#" className="h3 mb-none stretched-link line-clamp-1">
                                                Equality for all
                                            </a>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-end flex-nowrap gap-0">
                                            <div className="d-flex align-items-center flex-wrap flex-lg-nowrap flex-shrink-1 gap-xs overflow-hidden">
                                                <div className="d-flex gap-2xs text-muted small">
                                                    <span className="icon icon-members is-xs" />
                                                    <span className="text-nowrap">2 members</span>
                                                </div>
                                                <div className="badges flex-nowrap">
                                                    <div className="badge is-pill">2words tag</div>
                                                    <div className="badge is-pill">2words tag</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-links">
                                        <div className="d-flex align-items-center justify-content-between text-muted mb-3">
                                            <span className="small font-weight-bold text-truncate mr-2">
                                                {"{"}evaluation_session.name{"}"}
                                            </span>
                                            <span className="small">
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
                                                <span className="icon icon-rating is-sm mr-2" />
                                                <span>Evaluate</span>
                                            </a>
                                            <a className="btn btn-lg btn-default btn-block" href="#">
                                                <span className="icon icon-bookmark-outline is-sm mr-2" />
                                                <span>Follow</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="card h-100">
                                    <div className="card-infos is-linked">
                                        <div className="card-banner">
                                            <div className="card-image">
                                                <picture>
                                                    <img src="https://inject-demo.s3.amazonaws.com/images/7241300b-a008-4101-b202-7f65d47c7382/co1140x380.jpeg" alt="" />
                                                </picture>
                                            </div>
                                        </div>
                                        <div className="card-title d-flex align-items-center gap-2xs mb-none">
                                            <a href="#" className="h3 mb-none stretched-link line-clamp-1">
                                                Wind turbine
                                            </a>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-end flex-nowrap gap-0">
                                            <div className="d-flex align-items-center flex-wrap flex-lg-nowrap flex-shrink-1 gap-xs overflow-hidden">
                                                <div className="d-flex gap-2xs text-muted small">
                                                    <span className="icon icon-members is-xs" />
                                                    <span className="text-nowrap">2 members</span>
                                                </div>
                                                <div className="badges flex-nowrap">
                                                    <div className="badge is-pill">2words tag</div>
                                                    <div className="badge is-pill">2words tag</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-links">
                                        <div className="d-flex align-items-center justify-content-between text-muted mb-3">
                                            <span className="small font-weight-bold text-truncate mr-2">
                                                {"{"}evaluation_session.name{"}"}
                                            </span>
                                            <span className="small">
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
                                                <span className="icon icon-rating is-sm mr-2" />
                                                <span>Evaluate</span>
                                            </a>
                                            <a className="btn btn-lg btn-default btn-block" href="#">
                                                <span className="icon icon-bookmark-outline is-sm mr-2" />
                                                <span>Follow</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="card h-100">
                                    <div className="card-infos is-linked">
                                        <div className="card-banner">
                                            <div className="card-image">
                                                <picture>
                                                    <img src="https://inject-demo.s3.amazonaws.com/images/645a913c-6fa9-483c-8c0c-152fefc15cf5/co1140x380.jpeg" alt="" />
                                                </picture>
                                            </div>
                                        </div>
                                        <div className="card-title d-flex align-items-center gap-2xs mb-none">
                                            <a href="#" className="h3 mb-none stretched-link line-clamp-1">
                                                One world
                                            </a>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-end flex-nowrap gap-0">
                                            <div className="d-flex align-items-center flex-wrap flex-lg-nowrap flex-shrink-1 gap-xs overflow-hidden">
                                                <div className="d-flex gap-2xs text-muted small">
                                                    <span className="icon icon-members is-xs" />
                                                    <span className="text-nowrap">2 members</span>
                                                </div>
                                                <div className="badges flex-nowrap">
                                                    <div className="badge is-pill">2words tag</div>
                                                    <div className="badge is-pill">2words tag</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-links">
                                        <div className="d-flex align-items-center justify-content-between text-muted mb-3">
                                            <span className="small font-weight-bold text-truncate mr-2">
                                                {"{"}evaluation_session.name{"}"}
                                            </span>
                                            <span className="small">
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
                                                <span className="icon icon-rating is-sm mr-2" />
                                                <span>Evaluate</span>
                                            </a>
                                            <a className="btn btn-lg btn-default btn-block" href="#">
                                                <span className="icon icon-bookmark-outline is-sm mr-2" />
                                                <span>Follow</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="card h-100">
                                    <div className="card-infos is-linked">
                                        <div className="card-banner">
                                            <div className="card-image">
                                                <picture>
                                                    <img src="https://inject-demo.s3.amazonaws.com/images/36864d1d-f673-4bda-98f7-d76995c9cea1/co1140x380.jpeg" alt="" />
                                                </picture>
                                            </div>
                                        </div>
                                        <div className="card-title d-flex align-items-center gap-2xs mb-none">
                                            <a href="#" className="h3 mb-none stretched-link line-clamp-1">
                                                Orange book
                                            </a>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-end flex-nowrap gap-0">
                                            <div className="d-flex align-items-center flex-wrap flex-lg-nowrap flex-shrink-1 gap-xs overflow-hidden">
                                                <div className="d-flex gap-2xs text-muted small">
                                                    <span className="icon icon-members is-xs" />
                                                    <span className="text-nowrap">2 members</span>
                                                </div>
                                                <div className="badges flex-nowrap">
                                                    <div className="badge is-pill">2words tag</div>
                                                    <div className="badge is-pill">2words tag</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-links">
                                        <div className="d-flex align-items-center justify-content-between text-muted mb-3">
                                            <span className="small font-weight-bold text-truncate mr-2">
                                                {"{"}evaluation_session.name{"}"}
                                            </span>
                                            <span className="small">
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
                                                <span className="icon icon-rating is-sm mr-2" />
                                                <span>Evaluate</span>
                                            </a>
                                            <a className="btn btn-lg btn-default btn-block" href="#">
                                                <span className="icon icon-bookmark-outline is-sm mr-2" />
                                                <span>Follow</span>
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
