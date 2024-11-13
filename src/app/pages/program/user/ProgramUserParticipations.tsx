import React from "react";
import { Layout } from "../../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";

export const ProgramUserParticipations = () => {
    return (
        <Layout shortcutBarExpanded={true}>
            <AppContent>
                <div className="application-section">
                    <div className="row card-row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card h-100">
                                <div className="card-infos is-linked">
                                    <div className="card-banner">
                                        <div className="card-image">
                                            <picture>
                                                <img src="https://inject-prod.s3.amazonaws.com/images/f5e0a581-76e3-413a-a462-88dc98361172/co1800x1200.png" alt="" />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="card-title">
                                        <a href="/program/142/details" className="h3 mb-none stretched-link line-clamp-1">
                                            {" "}
                                            {"{"}
                                            {"{"}Program name{"}"}
                                            {"}"}
                                        </a>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2xs">
                                        <div className="d-flex align-items- center flex-wrap">
                                            <div className="badges mr-3">
                                                <div className="badge is-pill">Food</div>
                                                <a className="badge is-pill" href="#">
                                                    Plastic
                                                </a>
                                                <a className="badge is-pill" href="#">
                                                    DEI
                                                </a>
                                            </div>
                                        </div>
                                        <div className="badges">
                                            <div className="badge is-pill is-open">
                                                <span className="icon icon-status-filled"></span>
                                                <span>Open</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-targets">
                                    <div className="card-target">
                                        <a href="#" className="stretched-link d-flex align-items-center">
                                            <span className="icon icon-project is-sm" />
                                            <span>Application</span>
                                        </a>
                                        <span className="icon icon-chevron-right is-sm" />
                                    </div>
                                    <div className="card-target">
                                        <a href="#" className="stretched-link d-flex align-items-center">
                                            <span className="icon icon--letter is-sm">
                                                <span>m</span>
                                            </span>
                                            <span>My Project</span>
                                        </a>
                                        <span className="icon icon-chevron-right is-sm" />
                                    </div>
                                    <div className="card-target">
                                        <a href="#" className="stretched-link d-flex align-items-center">
                                            <span className="icon icon--letter is-sm">
                                                <span>s</span>
                                            </span>
                                            <span>Second Project</span>
                                        </a>
                                        <span className="icon icon-chevron-right is-sm" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card h-100">
                                <div className="card-infos is-linked">
                                    <div className="card-banner">
                                        <div className="card-image">
                                            <picture>
                                                <img src="https://inject-prod.s3.amazonaws.com/images/b9751cfd-f746-4963-af9e-23f335a5792f/co1920x640.png" alt="" />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="card-title">
                                        <a href="/program/142/details" className="h3 mb-none stretched-link line-clamp-1">
                                            {" "}
                                            {"{"}
                                            {"{"}Program name{"}"}
                                            {"}"}
                                        </a>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2xs">
                                        <div className="d-flex align-items-center flex-wrap">
                                            <div className="badges mr-3">
                                                <div className="badge is-pill">Food</div>
                                                <a className="badge is-pill" href="#">
                                                    Plastic
                                                </a>
                                                <a className="badge is-pill" href="#">
                                                    DEI
                                                </a>
                                            </div>
                                        </div>
                                        <div className="badges">
                                            <div className="badge is-pill is-progress">
                                                <span className="icon icon-status-dashed"></span>
                                                <span>In progress</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-targets">
                                    <div className="card-target">
                                        <a href="#" className="stretched-link d-flex align-items-center">
                                            <span className="icon icon-project is-sm" />
                                            <span>Application</span>
                                        </a>
                                        <span className="icon icon-chevron-right is-sm" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card h-100">
                                <div className="card-infos is-linked">
                                    <div className="card-banner">
                                        <div className="card-image">
                                            <picture>
                                                <img src="https://inject-prod.s3.amazonaws.com/images/d5623bc5-fafa-49f4-8f9c-763d1f12fe44/co1920x640.png" alt="" />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="card-title">
                                        <a href="/program/142/details" className="h3 mb-none stretched-link line-clamp-1">
                                            {" "}
                                            {"{"}
                                            {"{"}Program name{"}"}
                                            {"}"}
                                        </a>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2xs">
                                        <div className="mr-3 mb-3">
                                            <span className="text-muted small text-nowrap"></span>
                                        </div>
                                        <div className="badges">
                                            <div className="badge is-pill is-closed">
                                                <span className="icon icon-minus-circle" />
                                                <span>Closed</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-targets">
                                    <div className="card-target">
                                        <a href="#" className="stretched-link d-flex align-items-center">
                                            <span className="icon icon-project is-sm" />
                                            <span>Application</span>
                                        </a>
                                        <span className="icon icon-chevron-right is-sm" />
                                    </div>
                                    <div className="card-target">
                                        <a href="#" className="stretched-link d-flex align-items-center">
                                            <span className="icon icon--letter is-sm">
                                                <span>m</span>
                                            </span>
                                            <span>My Project</span>
                                        </a>
                                        <span className="icon icon-chevron-right is-sm" />
                                    </div>                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card h-100">
                                <div className="card-infos is-linked">
                                    <div className="card-banner">
                                        <div className="card-image">
                                            <picture>
                                                <img src="https://inject-prod.s3.amazonaws.com/images/bc84f5cc-c5be-45ac-a0f8-f2ad3b7efa91/co1800x1200.jpeg" alt="" />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="card-title">
                                        <a href="/program/142/details" className="h3 mb-none stretched-link line-clamp-1">
                                            {" "}
                                            {"{"}
                                            {"{"}Program name{"}"}
                                            {"}"}
                                        </a>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2xs">
                                        <div className="d-flex align-items-center flex-wrap">
                                            <div className="badges mr-3">
                                                <div className="badge is-pill">Food</div>
                                            </div>
                                        </div>
                                        <div className="badges">
                                            <div className="badge is-pill is-draft">
                                                <span className="icon icon-status-bordered"></span>
                                                <span>Draft</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-targets">
                                    <div className="card-target">
                                        <a href="#" className="stretched-link d-flex align-items-center">
                                            <span className="icon icon-project is-sm " />
                                            <span>Application</span>
                                        </a>
                                        <span className="icon icon-chevron-right is-sm" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AppContent>
        </Layout>
    );
};
