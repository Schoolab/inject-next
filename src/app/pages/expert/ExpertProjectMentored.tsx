import React from "react";
import { Layout } from "../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";

export const ExpertProjectMentored = () => {
    return (
        <Layout shortcutBarExpanded={true}>
            <AppContent >
                <div className="application-section">
                    <div className="row card-row">
                        <div className="col-12">
                            <div className="d-flex flex-column flex-lg-row align-items-lg-start justify-content-lg-between ">
                                <div className="d-flex flex-column flex-lg-row scroll-h mr-lg-8 mr-0">
                                    <div className="mr-lg-3 mr-0 mb-3 mb-lg-0">
                                        <form name="mentored" method="post">
                                            <button className="btn btn-lg btn-block btn-default text-nowrap customSwitch" data-switch="applicationsFilters_mentored" type="button" style={{ fontWeight: 400 }}>
                                                Mentored projects
                                            </button>
                                            <input type="checkbox" name="applicationsFilters[mentored]" id="applicationsFilters_mentored" defaultValue={1} className=" d-none" />
                                        </form>
                                    </div>
                                    <div className="mr-lg-3 mr-0 mb-3 mb-lg-0">
                                        <form name="isFollow" method="post">
                                            <button className="btn btn-lg btn-block btn-default text-nowrap customSwitch" data-switch="applicationsFilters_isFollow" type="button" style={{ fontWeight: 400 }}>
                                                Followed
                                            </button>
                                            <input type="checkbox" name="applicationsFilters[isFollow]" id="applicationsFilters_isFollow" defaultValue={1} className=" d-none" />
                                        </form>
                                    </div>
                                </div>
                                <div className="d-flex flex-column flex-lg-row">
                                    <div className="mr-lg-3 mr-0 mb-5 mb-lg-0 searchContainer">
                                        <form className="customSearch">
                                            <input name="search" autoComplete="off" type="search" id="search" className="form-control" style={{ minWidth: 150, width: "100%" }} aria-describedby="search" placeholder="Search..." defaultValue="" />
                                        </form>
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
                                                <span className="icon icon-account-multiple is-xs" />
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
                                        <span className="small font-weight-bold text-truncate mr-2"># coaching sessions</span>
                                        <span className="small">
                                            Total hours{" "}
                                            <span className="font-weight-bold">
                                                <span className="icon icon--clock" /> 1h30
                                            </span>
                                        </span>
                                    </div>
                                    <div className="card-actions">
                                        <a className="btn btn-lg btn-primary btn-block" href="#">
                                            <span className="icon icon-plus-circle is-sm mr-2" />
                                            <span>Add session</span>
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
                                                <span className="icon icon-account-multiple is-xs" />
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
                                        <span className="small font-weight-bold text-truncate mr-2"># coaching sessions</span>
                                        <span className="small">
                                            Total hours{" "}
                                            <span className="font-weight-bold">
                                                <span className="icon icon--clock" /> 1h30
                                            </span>
                                        </span>
                                    </div>
                                    <div className="card-actions">
                                        <a className="btn btn-lg btn-primary btn-block" href="#">
                                            <span className="icon icon-plus-circle is-sm mr-2" />
                                            <span>Add session</span>
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
                                                <span className="icon icon-account-multiple is-xs" />
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
                                        <span className="small font-weight-bold text-truncate mr-2"># coaching sessions</span>
                                        <span className="small">
                                            Total hours{" "}
                                            <span className="font-weight-bold">
                                                <span className="icon icon--clock" /> 1h30
                                            </span>
                                        </span>
                                    </div>
                                    <div className="card-actions">
                                        <a className="btn btn-lg btn-primary btn-block" href="#">
                                            <span className="icon icon-plus-circle is-sm mr-2" />
                                            <span>Add session</span>
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
                                                <span className="icon icon-account-multiple is-xs" />
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
                                        <span className="small font-weight-bold text-truncate mr-2"># coaching sessions</span>
                                        <span className="small">
                                            Total hours{" "}
                                            <span className="font-weight-bold">
                                                <span className="icon icon--clock" /> 1h30
                                            </span>
                                        </span>
                                    </div>
                                    <div className="card-actions">
                                        <a className="btn btn-lg btn-primary btn-block" href="#">
                                            <span className="icon icon-plus-circle is-sm mr-2" />
                                            <span>Add session</span>
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
            </AppContent>
        </Layout>
    );
};
