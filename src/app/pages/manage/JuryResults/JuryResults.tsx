import React from "react";
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { useEffect } from "react";
import { Section } from "@/app/components/sections/Section";
import { EmptyState } from "@/app/content/empty-states/EmptyState";

import { skewed } from "../../../../../public/utils/tables/skewed";

export const JuryResults = () => {
    useEffect(() => {
        skewed();
        return () => {
            // Cleanup
        };
    }, []);
    return (
        <Layout sideBar="Manage">
            <AppContent
                sections="transparent"
                breadcrumb={[
                    {
                        label: "Impact Innovators",
                        href: "#",
                    },
                    {
                        label: "Manage",
                        href: "#",
                    },
                    {
                        label: "Jury",
                        href: "#",
                    },
                    {
                        label: "Session",
                    },
                    {
                        label: "Results",
                    },
                ]}
                title="Results"
            >
                <div className="row">
                    <div className="col-12">
                        <table className="table table-striped table-vertical table-skewed responsive w-100" id="doc-table-data-skewed" role="grid">
                            <thead>
                                <tr>
                                    <th scope="col" style={{ minWidth: 320, maxWidth: 320, width: 320 }}>
                                        Name
                                    </th>
                                    <th scope="col" style={{ minWidth: 32, maxWidth: 32, width: 32 }}>
                                        <div className="th-skewed-container">
                                            <div className="th-skewed d-flex align-items-center gap-xs">
                                                <p className="font-weight-bold text-truncate flex-fill">Rank</p>
                                            </div>
                                        </div>
                                    </th>
                                    <th scope="col" style={{ minWidth: 32, maxWidth: 32, width: 32 }}>
                                        <div className="th-skewed-container">
                                            <div className="th-skewed d-flex align-items-center gap-xs">
                                                <p className="font-weight-bold text-truncate flex-fill">Average</p>
                                            </div>
                                        </div>
                                    </th>
                                    <th scope="col" style={{ minWidth: 32, maxWidth: 32, width: 32 }}>
                                        <div className="th-skewed-container">
                                            <div className="th-skewed d-flex align-items-center gap-xs">
                                                <p className="font-weight-bold text-truncate flex-fill">Criteria 1</p>
                                            </div>
                                        </div>
                                    </th>
                                    <th scope="col" style={{ minWidth: 32, maxWidth: 32, width: 32 }}>
                                        <div className="th-skewed-container">
                                            <div className="th-skewed d-flex align-items-center gap-xs">
                                                <p className="font-weight-bold text-truncate flex-fill">Criteria 2</p>
                                            </div>
                                        </div>
                                    </th>
                                    <th scope="col" style={{ minWidth: 32, maxWidth: 32, width: 32 }}>
                                        <div className="th-skewed-container">
                                            <div className="th-skewed d-flex align-items-center gap-xs">
                                                <p className="font-weight-bold text-truncate flex-fill">Criteria 3</p>
                                            </div>
                                        </div>
                                    </th>
                                    <th scope="col" style={{ minWidth: 32, maxWidth: 32, width: 32 }}>
                                        <div className="th-skewed-container">
                                            <div className="th-skewed d-flex align-items-center gap-xs">
                                                <p className="font-weight-bold text-truncate flex-fill">Criteria 4</p>
                                            </div>
                                        </div>
                                    </th>
                                    <th style={{ width: "100%", padding: "0 124px" }} />
                                </tr>
                            </thead>
                            <tbody>
                                <tr role="row" className="table-active">
                                    <th scope="row" data-content="Schoolab">
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start flex-fill gap-xs">
                                                <div aria-hidden="true" className="icon icon--letter is-sm">
                                                    <span aria-hidden="true">P</span>
                                                </div>
                                                <div className="d-flex flex-fill gap-2xs">
                                                    <a href="#" className="underlined-link stretched-link">
                                                        Project Name
                                                    </a>
                                                    <span className="icon icon-new-tab text-muted" />
                                                </div>
                                            </div>
                                            <div className="show-on-hover z-1">
                                                <a href="#" className="btn btn-lg btn-muted my-n8px" role="button" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Copy line to clipboard">
                                                    <span className="icon icon-copy" />
                                                </a>
                                            </div>
                                            <div className="dropdown-container z-1" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Options">
                                                <a href="#" className="btn btn-lg btn-muted my-n8px" role="button" data-toggle="dropdown" aria-expanded="false">
                                                    <span className="icon icon-options" />
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a href="#" className="dropdown-item">
                                                        Data
                                                    </a>
                                                    <a href="#" className="dropdown-item">
                                                        Manage
                                                    </a>
                                                    <a href="#" className="dropdown-item">
                                                        Workspace
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <a href="#" className="dropdown-item">
                                                        <span className="dropdown-item--icon icon icon-arrow-up" />
                                                        <span className="dropdown-item--label">Up</span>
                                                    </a>
                                                    <a href="#" className="dropdown-item">
                                                        <span className="dropdown-item--icon icon icon-arrow-down" />
                                                        <span className="dropdown-item--label">Down</span>
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <a href="#" className="dropdown-item">
                                                        <span className="dropdown-item--icon icon icon-pencil" />
                                                        <span className="dropdown-item--label">Edit</span>
                                                    </a>
                                                    <a href="#" className="dropdown-item">
                                                        <span className="dropdown-item--icon icon icon-copy" />
                                                        <span className="dropdown-item--label">Duplicate</span>
                                                    </a>
                                                    <a href="#" className="dropdown-item is-danger">
                                                        <span className="dropdown-item--icon icon icon-delete" />
                                                        <span className="dropdown-item--label">Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </th>
                                    <td>
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start flex-fill gap-xs">
                                                <div className="d-flex flex-fill gap-2xs">
                                                    <p className="font-weight-bold justify-content-center d-flex align-items-center gap-2xs" style={{ width: "2rem" }}>
                                                        <span className="icon is-sm icon-medal" style={{ color: "gold" }}></span> 1
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start justify-content-center flex-fill gap-xs">7</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start justify-content-center flex-fill gap-xs">6</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start justify-content-center flex-fill gap-xs">7</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start justify-content-center flex-fill gap-xs">8</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start justify-content-center flex-fill gap-xs">7</div>
                                        </div>
                                    </td>

                                    <td style={{ width: "100%", padding: "0 124px" }} />
                                </tr>
                                <tr role="row" className="table-active">
                                    <th scope="row" data-content="Schoolab">
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start flex-fill gap-xs">
                                                <div aria-hidden="true" className="icon icon--letter is-sm">
                                                    <span aria-hidden="true">P</span>
                                                </div>
                                                <div className="d-flex flex-fill gap-2xs">
                                                    <a href="#" className="underlined-link stretched-link">
                                                        Project Name
                                                    </a>
                                                    <span className="icon icon-new-tab text-muted" />
                                                </div>
                                            </div>
                                            <div className="show-on-hover z-1">
                                                <a href="#" className="btn btn-lg btn-muted my-n8px" role="button" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Copy line to clipboard">
                                                    <span className="icon icon-copy" />
                                                </a>
                                            </div>
                                            <div className="dropdown-container z-1" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Options">
                                                <a href="#" className="btn btn-lg btn-muted my-n8px" role="button" data-toggle="dropdown" aria-expanded="false">
                                                    <span className="icon icon-options" />
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a href="#" className="dropdown-item">
                                                        Data
                                                    </a>
                                                    <a href="#" className="dropdown-item">
                                                        Manage
                                                    </a>
                                                    <a href="#" className="dropdown-item">
                                                        Workspace
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <a href="#" className="dropdown-item">
                                                        <span className="dropdown-item--icon icon icon-arrow-up" />
                                                        <span className="dropdown-item--label">Up</span>
                                                    </a>
                                                    <a href="#" className="dropdown-item">
                                                        <span className="dropdown-item--icon icon icon-arrow-down" />
                                                        <span className="dropdown-item--label">Down</span>
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <a href="#" className="dropdown-item">
                                                        <span className="dropdown-item--icon icon icon-pencil" />
                                                        <span className="dropdown-item--label">Edit</span>
                                                    </a>
                                                    <a href="#" className="dropdown-item">
                                                        <span className="dropdown-item--icon icon icon-copy" />
                                                        <span className="dropdown-item--label">Duplicate</span>
                                                    </a>
                                                    <a href="#" className="dropdown-item is-danger">
                                                        <span className="dropdown-item--icon icon icon-delete" />
                                                        <span className="dropdown-item--label">Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </th>
                                    <td>
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start flex-fill gap-xs">
                                                <div className="d-flex flex-fill gap-2xs">
                                                    <p className="font-weight-bold justify-content-center d-flex align-items-center gap-2xs" style={{ width: "2rem" }}>
                                                        <span className="icon is-sm icon-medal" style={{ color: "silver" }}></span> 2
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start justify-content-center flex-fill gap-xs">7</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start justify-content-center flex-fill gap-xs">6</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start justify-content-center flex-fill gap-xs">7</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start justify-content-center flex-fill gap-xs">8</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start justify-content-center flex-fill gap-xs">7</div>
                                        </div>
                                    </td>

                                    <td style={{ width: "100%", padding: "0 124px" }} />
                                </tr>
                                 <tr role="row" className="table-active">
                                    <th scope="row" data-content="Schoolab">
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start flex-fill gap-xs">
                                                <div aria-hidden="true" className="icon icon--letter is-sm">
                                                    <span aria-hidden="true">P</span>
                                                </div>
                                                <div className="d-flex flex-fill gap-2xs">
                                                    <a href="#" className="underlined-link stretched-link">
                                                        Project Name
                                                    </a>
                                                    <span className="icon icon-new-tab text-muted" />
                                                </div>
                                            </div>
                                            <div className="show-on-hover z-1">
                                                <a href="#" className="btn btn-lg btn-muted my-n8px" role="button" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Copy line to clipboard">
                                                    <span className="icon icon-copy" />
                                                </a>
                                            </div>
                                            <div className="dropdown-container z-1" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Options">
                                                <a href="#" className="btn btn-lg btn-muted my-n8px" role="button" data-toggle="dropdown" aria-expanded="false">
                                                    <span className="icon icon-options" />
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a href="#" className="dropdown-item">
                                                        Data
                                                    </a>
                                                    <a href="#" className="dropdown-item">
                                                        Manage
                                                    </a>
                                                    <a href="#" className="dropdown-item">
                                                        Workspace
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <a href="#" className="dropdown-item">
                                                        <span className="dropdown-item--icon icon icon-arrow-up" />
                                                        <span className="dropdown-item--label">Up</span>
                                                    </a>
                                                    <a href="#" className="dropdown-item">
                                                        <span className="dropdown-item--icon icon icon-arrow-down" />
                                                        <span className="dropdown-item--label">Down</span>
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <a href="#" className="dropdown-item">
                                                        <span className="dropdown-item--icon icon icon-pencil" />
                                                        <span className="dropdown-item--label">Edit</span>
                                                    </a>
                                                    <a href="#" className="dropdown-item">
                                                        <span className="dropdown-item--icon icon icon-copy" />
                                                        <span className="dropdown-item--label">Duplicate</span>
                                                    </a>
                                                    <a href="#" className="dropdown-item is-danger">
                                                        <span className="dropdown-item--icon icon icon-delete" />
                                                        <span className="dropdown-item--label">Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </th>
                                    <td>
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start flex-fill gap-xs">
                                                <div className="d-flex flex-fill gap-2xs">
                                                    <p className="font-weight-bold justify-content-center d-flex align-items-center gap-2xs" style={{ width: "2rem" }}>
                                                        <span className="icon is-sm icon-medal" style={{color: "bronze"}}></span> 3
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start justify-content-center flex-fill gap-xs">
                                                7
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start justify-content-center flex-fill gap-xs">
                                                6
                                            </div>
                                        </div>
                                    </td>
                                           <td>
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start justify-content-center flex-fill gap-xs">
                                                7
                                            </div>
                                        </div>
                                    </td>
                                                 <td>
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start justify-content-center flex-fill gap-xs">
                                                8
                                            </div>
                                        </div>
                                    </td>
                                                 <td>
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start justify-content-center flex-fill gap-xs">
                                                7
                                            </div>
                                        </div>
                                    </td>
                                    
                                    <td style={{ width: "100%", padding: "0 124px" }} />
                                </tr>
                                   <tr role="row" className="table-active">
                                    <th scope="row" data-content="Schoolab">
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start flex-fill gap-xs">
                                                <div aria-hidden="true" className="icon icon--letter is-sm">
                                                    <span aria-hidden="true">P</span>
                                                </div>
                                                <div className="d-flex flex-fill gap-2xs">
                                                    <a href="#" className="underlined-link stretched-link">
                                                        Project Name
                                                    </a>
                                                    <span className="icon icon-new-tab text-muted" />
                                                </div>
                                            </div>
                                            <div className="show-on-hover z-1">
                                                <a href="#" className="btn btn-lg btn-muted my-n8px" role="button" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Copy line to clipboard">
                                                    <span className="icon icon-copy" />
                                                </a>
                                            </div>
                                            <div className="dropdown-container z-1" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Options">
                                                <a href="#" className="btn btn-lg btn-muted my-n8px" role="button" data-toggle="dropdown" aria-expanded="false">
                                                    <span className="icon icon-options" />
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a href="#" className="dropdown-item">
                                                        Data
                                                    </a>
                                                    <a href="#" className="dropdown-item">
                                                        Manage
                                                    </a>
                                                    <a href="#" className="dropdown-item">
                                                        Workspace
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <a href="#" className="dropdown-item">
                                                        <span className="dropdown-item--icon icon icon-arrow-up" />
                                                        <span className="dropdown-item--label">Up</span>
                                                    </a>
                                                    <a href="#" className="dropdown-item">
                                                        <span className="dropdown-item--icon icon icon-arrow-down" />
                                                        <span className="dropdown-item--label">Down</span>
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <a href="#" className="dropdown-item">
                                                        <span className="dropdown-item--icon icon icon-pencil" />
                                                        <span className="dropdown-item--label">Edit</span>
                                                    </a>
                                                    <a href="#" className="dropdown-item">
                                                        <span className="dropdown-item--icon icon icon-copy" />
                                                        <span className="dropdown-item--label">Duplicate</span>
                                                    </a>
                                                    <a href="#" className="dropdown-item is-danger">
                                                        <span className="dropdown-item--icon icon icon-delete" />
                                                        <span className="dropdown-item--label">Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </th>
                                    <td>
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start flex-fill gap-xs">
                                                <div className="d-flex flex-fill gap-2xs">
                                                    <p className="font-weight-bold justify-content-center d-flex align-items-center gap-2xs" style={{ width: "2rem" }}>
                                                       4
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start justify-content-center flex-fill gap-xs">
                                                7
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start justify-content-center flex-fill gap-xs">
                                                6
                                            </div>
                                        </div>
                                    </td>
                                           <td>
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start justify-content-center flex-fill gap-xs">
                                                7
                                            </div>
                                        </div>
                                    </td>
                                                 <td>
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start justify-content-center flex-fill gap-xs">
                                                8
                                            </div>
                                        </div>
                                    </td>
                                                 <td>
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start justify-content-center flex-fill gap-xs">
                                                7
                                            </div>
                                        </div>
                                    </td>
                                    
                                    <td style={{ width: "100%", padding: "0 124px" }} />
                                </tr>
                                    <tr role="row" className="table-active">
                                    <th scope="row" data-content="Schoolab">
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start flex-fill gap-xs">
                                                <div aria-hidden="true" className="icon icon--letter is-sm">
                                                    <span aria-hidden="true">P</span>
                                                </div>
                                                <div className="d-flex flex-fill gap-2xs">
                                                    <a href="#" className="underlined-link stretched-link">
                                                        Project Name
                                                    </a>
                                                    <span className="icon icon-new-tab text-muted" />
                                                </div>
                                            </div>
                                            <div className="show-on-hover z-1">
                                                <a href="#" className="btn btn-lg btn-muted my-n8px" role="button" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Copy line to clipboard">
                                                    <span className="icon icon-copy" />
                                                </a>
                                            </div>
                                            <div className="dropdown-container z-1" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Options">
                                                <a href="#" className="btn btn-lg btn-muted my-n8px" role="button" data-toggle="dropdown" aria-expanded="false">
                                                    <span className="icon icon-options" />
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a href="#" className="dropdown-item">
                                                        Data
                                                    </a>
                                                    <a href="#" className="dropdown-item">
                                                        Manage
                                                    </a>
                                                    <a href="#" className="dropdown-item">
                                                        Workspace
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <a href="#" className="dropdown-item">
                                                        <span className="dropdown-item--icon icon icon-arrow-up" />
                                                        <span className="dropdown-item--label">Up</span>
                                                    </a>
                                                    <a href="#" className="dropdown-item">
                                                        <span className="dropdown-item--icon icon icon-arrow-down" />
                                                        <span className="dropdown-item--label">Down</span>
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <a href="#" className="dropdown-item">
                                                        <span className="dropdown-item--icon icon icon-pencil" />
                                                        <span className="dropdown-item--label">Edit</span>
                                                    </a>
                                                    <a href="#" className="dropdown-item">
                                                        <span className="dropdown-item--icon icon icon-copy" />
                                                        <span className="dropdown-item--label">Duplicate</span>
                                                    </a>
                                                    <a href="#" className="dropdown-item is-danger">
                                                        <span className="dropdown-item--icon icon icon-delete" />
                                                        <span className="dropdown-item--label">Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </th>
                                    <td>
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start flex-fill gap-xs">
                                                <div className="d-flex flex-fill gap-2xs">
                                                    <p className="font-weight-bold justify-content-center d-flex align-items-center gap-2xs" style={{ width: "2rem" }}>
                                                       5
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start justify-content-center flex-fill gap-xs">
                                                7
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start justify-content-center flex-fill gap-xs">
                                                6
                                            </div>
                                        </div>
                                    </td>
                                           <td>
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start justify-content-center flex-fill gap-xs">
                                                7
                                            </div>
                                        </div>
                                    </td>
                                                 <td>
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start justify-content-center flex-fill gap-xs">
                                                8
                                            </div>
                                        </div>
                                    </td>
                                                 <td>
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start justify-content-center flex-fill gap-xs">
                                                7
                                            </div>
                                        </div>
                                    </td>
                                    
                                    <td style={{ width: "100%", padding: "0 124px" }} />
                                </tr>
                                    <tr role="row" className="table-active">
                                    <th scope="row" data-content="Schoolab">
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start flex-fill gap-xs">
                                                <div aria-hidden="true" className="icon icon--letter is-sm">
                                                    <span aria-hidden="true">P</span>
                                                </div>
                                                <div className="d-flex flex-fill gap-2xs">
                                                    <a href="#" className="underlined-link stretched-link">
                                                        Project Name
                                                    </a>
                                                    <span className="icon icon-new-tab text-muted" />
                                                </div>
                                            </div>
                                            <div className="show-on-hover z-1">
                                                <a href="#" className="btn btn-lg btn-muted my-n8px" role="button" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Copy line to clipboard">
                                                    <span className="icon icon-copy" />
                                                </a>
                                            </div>
                                            <div className="dropdown-container z-1" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Options">
                                                <a href="#" className="btn btn-lg btn-muted my-n8px" role="button" data-toggle="dropdown" aria-expanded="false">
                                                    <span className="icon icon-options" />
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a href="#" className="dropdown-item">
                                                        Data
                                                    </a>
                                                    <a href="#" className="dropdown-item">
                                                        Manage
                                                    </a>
                                                    <a href="#" className="dropdown-item">
                                                        Workspace
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <a href="#" className="dropdown-item">
                                                        <span className="dropdown-item--icon icon icon-arrow-up" />
                                                        <span className="dropdown-item--label">Up</span>
                                                    </a>
                                                    <a href="#" className="dropdown-item">
                                                        <span className="dropdown-item--icon icon icon-arrow-down" />
                                                        <span className="dropdown-item--label">Down</span>
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <a href="#" className="dropdown-item">
                                                        <span className="dropdown-item--icon icon icon-pencil" />
                                                        <span className="dropdown-item--label">Edit</span>
                                                    </a>
                                                    <a href="#" className="dropdown-item">
                                                        <span className="dropdown-item--icon icon icon-copy" />
                                                        <span className="dropdown-item--label">Duplicate</span>
                                                    </a>
                                                    <a href="#" className="dropdown-item is-danger">
                                                        <span className="dropdown-item--icon icon icon-delete" />
                                                        <span className="dropdown-item--label">Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </th>
                                    <td>
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start flex-fill gap-xs">
                                                <div className="d-flex flex-fill gap-2xs">
                                                    <p className="font-weight-bold justify-content-center d-flex align-items-center gap-2xs" style={{ width: "2rem" }}>
                                                       6
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start justify-content-center flex-fill gap-xs">
                                                7
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start justify-content-center flex-fill gap-xs">
                                                6
                                            </div>
                                        </div>
                                    </td>
                                           <td>
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start justify-content-center flex-fill gap-xs">
                                                7
                                            </div>
                                        </div>
                                    </td>
                                                 <td>
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start justify-content-center flex-fill gap-xs">
                                                8
                                            </div>
                                        </div>
                                    </td>
                                                 <td>
                                        <div className="d-flex align-items-center flex-fill gap-0">
                                            <div className="d-flex align-items-start justify-content-center flex-fill gap-xs">
                                                7
                                            </div>
                                        </div>
                                    </td>
                                    
                                    <td style={{ width: "100%", padding: "0 124px" }} />
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </AppContent>
        </Layout>
    );
};
