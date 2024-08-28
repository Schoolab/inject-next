import React from "react";
import { Layout } from "../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";

export const ProgramsHubEvents = () => {
    return (
        <Layout showShortcutbar={false}>
            <AppContent>
                <div className="application-section">
                    <div className="row">
                        <div className="col-12 d-flex d-lg-inline-flex flex-column flex-lg-row mb-md">
                            <div className="reloadChallenges btn-group btn-group-toggle btn-filter-radios mr-lg-3 mr-0  mb-4 mb-lg-0" data-toggle="buttons">
                                <label className="btn btn-default btn-lg text-nowrap active">
                                    <input type="radio" name="showprograms" id="all-events" defaultValue="all-events" defaultChecked />
                                    All
                                </label>
                                <label className="btn btn-default btn-lg text-nowrap">
                                    <input type="radio" name="showprograms" defaultValue="my-events" id="my-events" />
                                    My Events{" "}
                                </label>
                            </div>
                            <div className="reloadChallenges btn-group btn-group-toggle btn-filter-radios mr-lg-3 mr-0  mb-4 mb-lg-0" data-toggle="buttons">
                                <label className="btn btn-default btn-lg text-nowrap">
                                    <input type="radio" name="showprograms" id="all-period" defaultValue="all-period" defaultChecked />
                                    All
                                </label>
                                <label className="btn btn-default btn-lg text-nowrap active">
                                    <input type="radio" name="tocome" defaultValue="Plastic" id="tocome" />
                                    To come
                                </label>
                                <label className="btn btn-default btn-lg text-nowrap">
                                    <input type="radio" name="showprograms" defaultValue="Past" id="Past" />
                                    Past{" "}
                                </label>
                            </div>
                            <div className="mr-lg-3 mr-0 mb-3 mb-lg-0">
                                <select defaultValue="" className="custom-select" >
                                    <option value="">Sort by...</option>
                                    <option value={1}>Sort 1</option>
                                    <option value={2}>Sort 2</option>
                                    <option value={3}>Sort 3</option>
                                </select>
                            </div>
                            <div className="mr-lg-3 mr-0 mb-3 mb-lg-0">
                                <input type="search" className="form-control" id="exampleInputEmail1" aria-describedby="search" placeholder="Search ..." />
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mb-md">
                            <div className="card">
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
                                                    <span className="icon icon-location" />
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
                            <div className="card">
                                <div className="card-infos is-linked">
                                    <div className="card-banner">
                                        <div className="card-image is-3by1">
                                            <picture>
                                                <img src="../img/placeholder-events-pink.png" alt="" />
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
                                                    <span className="icon icon-location" />
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
                            <div className="card">
                                <div className="card-infos is-linked">
                                    <div className="card-banner">
                                        <div className="card-image is-3by1">
                                            <picture>
                                                <img src="../img/placeholder-events-green.png" alt="" />
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
                                                    <span className="icon icon-location" />
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
                            <div className="card">
                                <div className="card-infos is-linked">
                                    <div className="card-banner">
                                        <div className="card-image is-3by1">
                                            <picture>
                                                <img src="../img/placeholder-events-orange.png" alt="" />
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
                                                    <span className="icon icon-location" />
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
