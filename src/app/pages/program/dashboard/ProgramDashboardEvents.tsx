import React from "react";
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";

export const ProgramDashboardEvents = () => {
    return (
        <Layout shortcutBarExpanded={true}>
            <AppContent
                sections="transparent"
                breadcrumb={[
                    {
                        label: "Impact Innovators",
                        href: "./?path=/story/pages-program-dashboard--overview",
                    },
                    {
                        label: "Dashboard",
                        href: "./?path=/story/pages-program-dashboard--overview"
                    },
                    {
                        label: "Events"
                    }
                ]}
                title="Dashboard"
                buttons={[
                    {
                        type: "default",
                        label: "Public page",
                        link: "./?path=/story/pages-program-landing--inject",
                        iconStartName: "public-page",
                    }
                ]}
                subnav={[
                    {
                        label: "Overview",
                        href: "./?path=/story/pages-program-dashboard--overview",
                    },
                    {
                        label: "Events",
                        href: "./?path=/story/pages-program-dashboard--events",
                        isActive: true,
                    },
                    {
                        label: "Library",
                        href: "./?path=/story/pages-program-dashboard--library",
                    },
                    {
                        label: "Projects",
                        href: "./?path=/story/pages-program-dashboard--projects",
                    },
                    {
                        label: "Participants",
                        href: "./?path=/story/pages-program-dashboard--participants",
                    },
                    {
                        label: "Experts",
                        href: "./?path=/story/pages-program-dashboard--experts",
                    },
                    {
                        label: "Surveys",
                        href: "./?path=/story/pages-program-dashboard--surveys",
                    },
                    {
                        label: "F.A.Q.",
                        href: "./?path=/story/pages-program-dashboard--faq",
                    },
                ]}
            >
                <div className="application-section">
                    <div className="row mb-8">
                        <div className="col-12 d-flex d-lg-inline-flex flex-column flex-lg-row ">
                            <div className="mr-lg-3 mr-0 mb-3 mb-lg-0">
                                <input type="search" className="form-control" id="exampleInputEmail1" aria-describedby="search" placeholder="Search ..." />
                            </div>
                            <div className="mr-lg-3 mr-0 mb-3 mb-lg-0">
                                <select className="custom-select small">
                                    <option className="small" selected>
                                        Period
                                    </option>
                                    <option value={1}>Period 1</option>
                                    <option value={2}> Period 2</option>
                                    <option value={3}> Period 3</option>
                                </select>
                            </div>
                            <div className="mr-lg-3 mr-0 mb-3 mb-lg-0">
                                <select className="custom-select">
                                    <option selected>Sort by...</option>
                                    <option value={1}>Sort 1</option>
                                    <option value={2}>Sort 2</option>
                                    <option value={3}>Sort 3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-6 mb-md">
                            <div className="card h-100">
                                <div className="card-infos is-linked">
                                    <div className="card-banner">
                                        <div className="card-image is-3by1">
                                            <picture>
                                                <source media="(max-width:576px)" srcSet="https://inject-prod.s3.amazonaws.com/images/efe8674b-e830-4988-b424-4bf588547b93/co576x192.jpeg" />
                                                <source media="(max-width:768px)" srcSet="https://inject-prod.s3.amazonaws.com/images/efe8674b-e830-4988-b424-4bf588547b93/co768x256.jpeg" />
                                                <source media="(max-width:1140px)" srcSet="https://inject-prod.s3.amazonaws.com/images/efe8674b-e830-4988-b424-4bf588547b93/co1140x380.jpeg" />
                                                <img src="https://inject-prod.s3.amazonaws.com/images/efe8674b-e830-4988-b424-4bf588547b93/co1140x380.jpeg" alt="" />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-sm">
                                        <div className="thumbnail is-date is-lg">
                                            <span className="month">June</span>
                                            <span className="day">8</span>
                                        </div>
                                        <div className="d-flex flex-column flex-fill gap-0">
                                            <div className="card-title d-flex align-items-center gap-2xs mb-none p-2xs">
                                                <span className="icon icon-pin is-24px z-2" data-toggle="tooltip" data-placement="top" data-original-title="Pinned events are visible on the organization Hub" data-boundary="window" />
                                                <a href="#" className="h4 mb-none stretched-link line-clamp-1">
                                                    {"{"}event.name{"}"}
                                                </a>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-end flex-wrap gap-xs">
                                                <div className="badge is-pill">
                                                    <span className="icon icon-map-marker" />
                                                    <span>In person</span>
                                                </div>
                                                <div className="badge is-pill is-draft">
                                                    <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="currentColor" />
                                                    </svg>
                                                    <span>June 18 at 6 PM</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mb-md">
                            <div className="card h-100">
                                <div className="card-infos is-linked">
                                    <div className="card-banner">
                                        <div className="card-image is-3by1">
                                            <picture>
                                                <source media="(max-width:576px)" srcSet="https://inject-prod.s3.amazonaws.com/images/efe8674b-e830-4988-b424-4bf588547b93/co576x192.jpeg" />
                                                <source media="(max-width:768px)" srcSet="https://inject-prod.s3.amazonaws.com/images/efe8674b-e830-4988-b424-4bf588547b93/co768x256.jpeg" />
                                                <source media="(max-width:1140px)" srcSet="https://inject-prod.s3.amazonaws.com/images/efe8674b-e830-4988-b424-4bf588547b93/co1140x380.jpeg" />
                                                <img src="https://inject-prod.s3.amazonaws.com/images/efe8674b-e830-4988-b424-4bf588547b93/co1140x380.jpeg" alt="" />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-sm">
                                        <div className="thumbnail is-date is-lg">
                                            <span className="month">June</span>
                                            <span className="day">8</span>
                                        </div>
                                        <div className="d-flex flex-column flex-fill gap-0">
                                            <div className="card-title d-flex align-items-center gap-2xs mb-none p-2xs">
                                                <span className="icon icon-pin is-24px z-2" data-toggle="tooltip" data-placement="top" data-original-title="Pinned events are visible on the organization Hub" data-boundary="window" />
                                                <a href="#" className="h4 mb-none stretched-link line-clamp-1">
                                                    {"{"}event.name{"}"}
                                                </a>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-end flex-wrap gap-xs">
                                                <div className="badge is-pill">
                                                    <span className="icon icon-map-marker" />
                                                    <span>In person</span>
                                                </div>
                                                <div className="badge is-pill is-draft">
                                                    <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="currentColor" />
                                                    </svg>
                                                    <span>June 18 at 6 PM</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mb-md">
                            <div className="card h-100">
                                <div className="card-infos is-linked">
                                    <div className="card-banner">
                                        <div className="card-image is-3by1">
                                            <picture>
                                                <source media="(max-width:576px)" srcSet="https://inject-prod.s3.amazonaws.com/images/efe8674b-e830-4988-b424-4bf588547b93/co576x192.jpeg" />
                                                <source media="(max-width:768px)" srcSet="https://inject-prod.s3.amazonaws.com/images/efe8674b-e830-4988-b424-4bf588547b93/co768x256.jpeg" />
                                                <source media="(max-width:1140px)" srcSet="https://inject-prod.s3.amazonaws.com/images/efe8674b-e830-4988-b424-4bf588547b93/co1140x380.jpeg" />
                                                <img src="https://inject-prod.s3.amazonaws.com/images/efe8674b-e830-4988-b424-4bf588547b93/co1140x380.jpeg" alt="" />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-sm">
                                        <div className="thumbnail is-date is-lg">
                                            <span className="month">June</span>
                                            <span className="day">8</span>
                                        </div>
                                        <div className="d-flex flex-column flex-fill gap-0">
                                            <div className="card-title d-flex align-items-center gap-2xs mb-none p-2xs">
                                                <span className="icon icon-pin is-24px z-2" data-toggle="tooltip" data-placement="top" data-original-title="Pinned events are visible on the organization Hub" data-boundary="window" />
                                                <a href="#" className="h4 mb-none stretched-link line-clamp-1">
                                                    {"{"}event.name{"}"}
                                                </a>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-end flex-wrap gap-xs">
                                                <div className="badge is-pill">
                                                    <span className="icon icon-map-marker" />
                                                    <span>In person</span>
                                                </div>
                                                <div className="badge is-pill is-draft">
                                                    <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="currentColor" />
                                                    </svg>
                                                    <span>June 18 at 6 PM</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mb-md">
                            <div className="card h-100">
                                <div className="card-infos is-linked">
                                    <div className="card-banner">
                                        <div className="card-image is-3by1">
                                            <picture>
                                                <source media="(max-width:576px)" srcSet="https://inject-prod.s3.amazonaws.com/images/efe8674b-e830-4988-b424-4bf588547b93/co576x192.jpeg" />
                                                <source media="(max-width:768px)" srcSet="https://inject-prod.s3.amazonaws.com/images/efe8674b-e830-4988-b424-4bf588547b93/co768x256.jpeg" />
                                                <source media="(max-width:1140px)" srcSet="https://inject-prod.s3.amazonaws.com/images/efe8674b-e830-4988-b424-4bf588547b93/co1140x380.jpeg" />
                                                <img src="https://inject-prod.s3.amazonaws.com/images/efe8674b-e830-4988-b424-4bf588547b93/co1140x380.jpeg" alt="" />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-sm">
                                        <div className="thumbnail is-date is-lg">
                                            <span className="month">June</span>
                                            <span className="day">8</span>
                                        </div>
                                        <div className="d-flex flex-column flex-fill gap-0">
                                            <div className="card-title d-flex align-items-center gap-2xs mb-none p-2xs">
                                                <span className="icon icon-pin is-24px z-2" data-toggle="tooltip" data-placement="top" data-original-title="Pinned events are visible on the organization Hub" data-boundary="window" />
                                                <a href="#" className="h4 mb-none stretched-link line-clamp-1">
                                                    {"{"}event.name{"}"}
                                                </a>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-end flex-wrap gap-xs">
                                                <div className="badge is-pill">
                                                    <span className="icon icon-map-marker" />
                                                    <span>In person</span>
                                                </div>
                                                <div className="badge is-pill is-draft">
                                                    <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="currentColor" />
                                                    </svg>
                                                    <span>June 18 at 6 PM</span>
                                                </div>
                                            </div>
                                        </div>
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
