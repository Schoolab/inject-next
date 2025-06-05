import React from "react";
import { useEffect } from "react";
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";

import { Button } from "@/app/components/buttons/Button";

import { phasesToggle } from "../../../../../public/utils/phasesToggle";

import { ItemFolder } from "@/app/components/items/ItemFolder";

export const consultingMissionShardedFiles = () => {
    useEffect(() => {
        phasesToggle();
    }, []);
    return (
        <Layout theme="default" showShortcutbarAdmin={true} showShortcutbar={false} shortcutBarExpanded={false}>
            <AppContent
                sections="transparent"
                breadcrumb={[
                    {
                        label: "Consulting missions",
                        href: "",
                    },
                    {
                        label: "Missions",
                        href: "",
                    },
                    {
                        label: "Impact Innovators",
                    },
                ]}
                title="Impact Innovator"
                buttons={[
                    {
                        type: "default",
                        label: "Data",
                        link: "",
                        iconStartName: "plan-data",
                    },
                ]}
                subnav={[
                    {
                        label: "Details",
                        href: "",
                        
                    },
                    {
                        label: "shared files",
                        href: "",
                        isActive: true,
                    },
                ]}
            >
                <div className="application-section">
                    <p className="m-0">Upload files or links to stay aligned, explore shared Resources, and access key Deliverables from Schoolab.</p>
                    <div id="tables-folders" className="cq row-gap-xs ">
                        <div className="cq-12 cq-sm-6 cq-md-3">
                            <ItemFolder label="All" caption="120 files" icon="folder" active={true} />
                        </div>
                        <div className="cq-12 cq-sm-6 cq-md-3">
                            <ItemFolder label="Sharerd by me" caption="4 files" icon="folder" />
                        </div>
                        <div className="cq-12 cq-sm-6 cq-md-3">
                            <ItemFolder label="Resources" caption="4 files" icon="folder" />
                        </div>
                        <div className="cq-12 cq-sm-6 cq-md-3">
                            <ItemFolder label="Delivrables" caption="4 files" icon="folder" />
                        </div>
                    </div>
                    <div className="d-flex pt-md border-top">
                        <div className="d-flex ">
                            <form className="table-search d-flex flex-grow-1 flex-md-grow-0 flex-shrink-1">
                                <input name="search" autoComplete="off" type="search" id="search" className="form-control field-sizing flex-fill mw-100" aria-describedby="search" placeholder="Search..." defaultValue="" />
                            </form>
                            <a className="btn btn-lg btn-muted" href="#" role="button" data-reference="parent" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window">
                                <span className="icon icon-plus-circle" />
                                <span>Filter</span>
                            </a>
                        </div>
                        <div className="d-flex flex-fill justify-content-end gap-xs">
                            <Button type="default" iconStartName="notifications-off" />
                            <Button label="Add files" type="default" hasDropdown={true} iconStartName="plus-circle" />
                        </div>
                    </div>
                    <table className="table table-hover responsive w-100" id="doc-table-data-types" role="grid">
                        <caption className="sr-only">Data cells types table</caption>
                        <thead>
                            <tr>
                                <th id="checkbox" className="table-checkbox sorting_disabled" style={{ minWidth: 20 }}>
                                    <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                        <input type="checkbox" id="selectAll" className="custom-control-input selectAllBulkSelectors" name="select" />
                                        <label className="custom-control-label" htmlFor="selectAll" />
                                    </div>
                                </th>
                                <th id="large" className="sorting" style={{ minWidth: 320 }}>
                                    <div className="d-flex gap-2xs align-items-center">
                                        <span>File name</span>
                                    </div>
                                </th>
                                <th id="small" className="sorting" style={{ minWidth: 280 }}>
                                    <div className="d-flex gap-2xs align-items-center">
                                        <span>Uploaded by</span> <span className="text-muted icon is-2sm icon-information" data-toggle="tooltip" data-placement="top" data-title="Informations about the column" data-boundary="window"></span>
                                    </div>
                                </th>
                                <th id="multiple" className="sorting" style={{ minWidth: 280 }}>
                                    <div className="d-flex gap-2xs align-items-center">
                                        <span>Tags</span>
                                    </div>
                                </th>
                                <th id="empty" className="sorting_disabled" style={{ minWidth: 280 }}>
                                    <div className="d-flex gap-2xs align-items-center">
                                        <span>Category</span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr role="row">
                                <td className="table-checkbox">
                                    <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                        <input type="checkbox" id="15" className="bulkActionSelector custom-control-input" defaultValue="15" />
                                        <label className="custom-control-label" htmlFor="15" />
                                    </div>
                                </td>
                                <th>
                                    <div className="d-flex align-items-center flex-fill gap-0">
                                        <div className="d-flex align-items-start flex-fill gap-xs">
                                            <div className="item-icon icon icon-file-pdf-box text-danger" />
                                            <div className="d-flex flex-column flex-fill gap-0">
                                                <a href="#" className="is-primary font-weight-bold stretched-link" aria-labelledby="large">
                                                    filename.ext
                                                </a>
                                                <div className="text-muted small metas is-list mb-none">
                                                    <p>PDF File</p>
                                                    <p>0 KB</p>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Download file" data-boundary="window">
                                            <span className="icon icon-cloud-download" />
                                        </a>
                                        <div className="dropdown-container z-1" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Options">
                                            <a href="#" className="btn btn-lg btn-muted" role="button" data-toggle="dropdown" aria-expanded="false">
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
                                            <div className="thumbnail is-sm is-oval">
                                                <span className="icon icon-account" />
                                            </div>
                                            <div className="d-flex flex-fill gap-2xs">
                                                <a href="#" className="underlined-link stretched-link" aria-labelledby="small">
                                                    User Name
                                                </a>
                                                <span className="icon icon-new-tab text-muted" />
                                            </div>
                                        </div>
                                        <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                            <span className="icon icon-copy" />
                                        </a>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center flex-fill gap-0">
                                        <div className="d-flex align-items-start flex-fill gap-xs">
                                            <div id="tags" className="badges flex-nowrap" role="button" aria-labelledby="multiple" data-toggle="tooltip" data-placement="top" data-html="true" data-title='<ul class="list-unstyled m-none p-0"><li>Tag #1</li><li>Tag #2</li><li>Private</li><li>Tag #4</li><li>Tag #5</li></ul>' data-boundary="window">
                                                <div className="badge is-pill">
                                                    <span>Tag #1</span>
                                                </div>
                                                <div className="badge is-pill">
                                                    <span>Tag #2</span>
                                                </div>
                                                <div className="badge is-pill">
                                                    <span className="icon icon-visibility-off" />
                                                    <span>Private</span>
                                                </div>
                                            </div>
                                            <p className="small text-muted text-nowrap py-4px">+2 more</p>
                                            <a href="#" className="badge is-pill">
                                                <span className="icon icon-plus" />
                                            </a>
                                        </div>
                                        <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                            <span className="icon icon-copy" />
                                        </a>
                                    </div>
                                </td>
                                <td>Deliverable</td>
                            </tr>
                            <tr role="row">
                                <td className="table-checkbox">
                                    <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                        <input type="checkbox" id="15" className="bulkActionSelector custom-control-input" defaultValue="15" />
                                        <label className="custom-control-label" htmlFor="15" />
                                    </div>
                                </td>
                                <th>
                                    <div className="d-flex align-items-center flex-fill gap-0">
                                        <div className="d-flex align-items-start flex-fill gap-xs">
                                            <div className="item-icon icon icon-file-pdf-box text-danger" />
                                            <div className="d-flex flex-column flex-fill gap-0">
                                                <a href="#" className="is-primary font-weight-bold stretched-link" aria-labelledby="large">
                                                    filename.ext
                                                </a>
                                                <div className="text-muted small metas is-list mb-none">
                                                    <p>PDF File</p>
                                                    <p>0 KB</p>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Download file" data-boundary="window">
                                            <span className="icon icon-cloud-download" />
                                        </a>
                                        <div className="dropdown-container z-1" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Options">
                                            <a href="#" className="btn btn-lg btn-muted" role="button" data-toggle="dropdown" aria-expanded="false">
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
                                            <div className="thumbnail is-sm is-oval">
                                                <span className="icon icon-account" />
                                            </div>
                                            <div className="d-flex flex-fill gap-2xs">
                                                <a href="#" className="underlined-link stretched-link" aria-labelledby="small">
                                                    User Name
                                                </a>
                                                <span className="icon icon-new-tab text-muted" />
                                            </div>
                                        </div>
                                        <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                            <span className="icon icon-copy" />
                                        </a>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center flex-fill gap-0">
                                        <div className="d-flex align-items-start flex-fill gap-xs">
                                            <div id="tags" className="badges flex-nowrap" role="button" aria-labelledby="multiple" data-toggle="tooltip" data-placement="top" data-html="true" data-title='<ul class="list-unstyled m-none p-0"><li>Tag #1</li><li>Tag #2</li><li>Private</li><li>Tag #4</li><li>Tag #5</li></ul>' data-boundary="window">
                                                <div className="badge is-pill">
                                                    <span>Tag #1</span>
                                                </div>
                                                <div className="badge is-pill">
                                                    <span>Tag #2</span>
                                                </div>
                                                <div className="badge is-pill">
                                                    <span className="icon icon-visibility-off" />
                                                    <span>Private</span>
                                                </div>
                                            </div>
                                            <p className="small text-muted text-nowrap py-4px">+2 more</p>
                                            <a href="#" className="badge is-pill">
                                                <span className="icon icon-plus" />
                                            </a>
                                        </div>
                                        <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                            <span className="icon icon-copy" />
                                        </a>
                                    </div>
                                </td>
                                <td>Deliverable</td>
                            </tr>
                            <tr role="row">
                                <td className="table-checkbox">
                                    <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                        <input type="checkbox" id="15" className="bulkActionSelector custom-control-input" defaultValue="15" />
                                        <label className="custom-control-label" htmlFor="15" />
                                    </div>
                                </td>
                                <th>
                                    <div className="d-flex align-items-center flex-fill gap-0">
                                        <div className="d-flex align-items-start flex-fill gap-xs">
                                            <div className="item-icon icon icon-file-pdf-box text-danger" />
                                            <div className="d-flex flex-column flex-fill gap-0">
                                                <a href="#" className="is-primary font-weight-bold stretched-link" aria-labelledby="large">
                                                    filename.ext
                                                </a>
                                                <div className="text-muted small metas is-list mb-none">
                                                    <p>PDF File</p>
                                                    <p>0 KB</p>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Download file" data-boundary="window">
                                            <span className="icon icon-cloud-download" />
                                        </a>
                                        <div className="dropdown-container z-1" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Options">
                                            <a href="#" className="btn btn-lg btn-muted" role="button" data-toggle="dropdown" aria-expanded="false">
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
                                            <div className="thumbnail is-sm is-oval">
                                                <span className="icon icon-account" />
                                            </div>
                                            <div className="d-flex flex-fill gap-2xs">
                                                <a href="#" className="underlined-link stretched-link" aria-labelledby="small">
                                                    User Name
                                                </a>
                                                <span className="icon icon-new-tab text-muted" />
                                            </div>
                                        </div>
                                        <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                            <span className="icon icon-copy" />
                                        </a>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center flex-fill gap-0">
                                        <div className="d-flex align-items-start flex-fill gap-xs">
                                            <div id="tags" className="badges flex-nowrap" role="button" aria-labelledby="multiple" data-toggle="tooltip" data-placement="top" data-html="true" data-title='<ul class="list-unstyled m-none p-0"><li>Tag #1</li><li>Tag #2</li><li>Private</li><li>Tag #4</li><li>Tag #5</li></ul>' data-boundary="window">
                                                <div className="badge is-pill">
                                                    <span>Tag #1</span>
                                                </div>
                                                <div className="badge is-pill">
                                                    <span>Tag #2</span>
                                                </div>
                                                <div className="badge is-pill">
                                                    <span className="icon icon-visibility-off" />
                                                    <span>Private</span>
                                                </div>
                                            </div>
                                            <p className="small text-muted text-nowrap py-4px">+2 more</p>
                                            <a href="#" className="badge is-pill">
                                                <span className="icon icon-plus" />
                                            </a>
                                        </div>
                                        <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                            <span className="icon icon-copy" />
                                        </a>
                                    </div>
                                </td>
                                <td>Deliverable</td>
                            </tr>
                            <tr role="row">
                                <td className="table-checkbox">
                                    <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                        <input type="checkbox" id="15" className="bulkActionSelector custom-control-input" defaultValue="15" />
                                        <label className="custom-control-label" htmlFor="15" />
                                    </div>
                                </td>
                                <th>
                                    <div className="d-flex align-items-center flex-fill gap-0">
                                        <div className="d-flex align-items-start flex-fill gap-xs">
                                            <div className="item-icon icon icon-file-pdf-box text-danger" />
                                            <div className="d-flex flex-column flex-fill gap-0">
                                                <a href="#" className="is-primary font-weight-bold stretched-link" aria-labelledby="large">
                                                    filename.ext
                                                </a>
                                                <div className="text-muted small metas is-list mb-none">
                                                    <p>PDF File</p>
                                                    <p>0 KB</p>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Download file" data-boundary="window">
                                            <span className="icon icon-cloud-download" />
                                        </a>
                                        <div className="dropdown-container z-1" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Options">
                                            <a href="#" className="btn btn-lg btn-muted" role="button" data-toggle="dropdown" aria-expanded="false">
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
                                            <div className="thumbnail is-sm is-oval">
                                                <span className="icon icon-account" />
                                            </div>
                                            <div className="d-flex flex-fill gap-2xs">
                                                <a href="#" className="underlined-link stretched-link" aria-labelledby="small">
                                                    User Name
                                                </a>
                                                <span className="icon icon-new-tab text-muted" />
                                            </div>
                                        </div>
                                        <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                            <span className="icon icon-copy" />
                                        </a>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center flex-fill gap-0">
                                        <div className="d-flex align-items-start flex-fill gap-xs">
                                            <div id="tags" className="badges flex-nowrap" role="button" aria-labelledby="multiple" data-toggle="tooltip" data-placement="top" data-html="true" data-title='<ul class="list-unstyled m-none p-0"><li>Tag #1</li><li>Tag #2</li><li>Private</li><li>Tag #4</li><li>Tag #5</li></ul>' data-boundary="window">
                                                <div className="badge is-pill">
                                                    <span>Tag #1</span>
                                                </div>
                                                <div className="badge is-pill">
                                                    <span>Tag #2</span>
                                                </div>
                                                <div className="badge is-pill">
                                                    <span className="icon icon-visibility-off" />
                                                    <span>Private</span>
                                                </div>
                                            </div>
                                            <p className="small text-muted text-nowrap py-4px">+2 more</p>
                                            <a href="#" className="badge is-pill">
                                                <span className="icon icon-plus" />
                                            </a>
                                        </div>
                                        <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                            <span className="icon icon-copy" />
                                        </a>
                                    </div>
                                </td>
                                <td>Deliverable</td>
                            </tr>
                            <tr role="row">
                                <td className="table-checkbox">
                                    <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                        <input type="checkbox" id="15" className="bulkActionSelector custom-control-input" defaultValue="15" />
                                        <label className="custom-control-label" htmlFor="15" />
                                    </div>
                                </td>
                                <th>
                                    <div className="d-flex align-items-center flex-fill gap-0">
                                        <div className="d-flex align-items-start flex-fill gap-xs">
                                            <div className="item-icon icon icon-file-pdf-box text-danger" />
                                            <div className="d-flex flex-column flex-fill gap-0">
                                                <a href="#" className="is-primary font-weight-bold stretched-link" aria-labelledby="large">
                                                    filename.ext
                                                </a>
                                                <div className="text-muted small metas is-list mb-none">
                                                    <p>PDF File</p>
                                                    <p>0 KB</p>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Download file" data-boundary="window">
                                            <span className="icon icon-cloud-download" />
                                        </a>
                                        <div className="dropdown-container z-1" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Options">
                                            <a href="#" className="btn btn-lg btn-muted" role="button" data-toggle="dropdown" aria-expanded="false">
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
                                            <div className="thumbnail is-sm is-oval">
                                                <span className="icon icon-account" />
                                            </div>
                                            <div className="d-flex flex-fill gap-2xs">
                                                <a href="#" className="underlined-link stretched-link" aria-labelledby="small">
                                                    User Name
                                                </a>
                                                <span className="icon icon-new-tab text-muted" />
                                            </div>
                                        </div>
                                        <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                            <span className="icon icon-copy" />
                                        </a>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center flex-fill gap-0">
                                        <div className="d-flex align-items-start flex-fill gap-xs">
                                            <div id="tags" className="badges flex-nowrap" role="button" aria-labelledby="multiple" data-toggle="tooltip" data-placement="top" data-html="true" data-title='<ul class="list-unstyled m-none p-0"><li>Tag #1</li><li>Tag #2</li><li>Private</li><li>Tag #4</li><li>Tag #5</li></ul>' data-boundary="window">
                                                <div className="badge is-pill">
                                                    <span>Tag #1</span>
                                                </div>
                                                <div className="badge is-pill">
                                                    <span>Tag #2</span>
                                                </div>
                                                <div className="badge is-pill">
                                                    <span className="icon icon-visibility-off" />
                                                    <span>Private</span>
                                                </div>
                                            </div>
                                            <p className="small text-muted text-nowrap py-4px">+2 more</p>
                                            <a href="#" className="badge is-pill">
                                                <span className="icon icon-plus" />
                                            </a>
                                        </div>
                                        <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                            <span className="icon icon-copy" />
                                        </a>
                                    </div>
                                </td>
                                <td>Deliverable</td>
                            </tr>
                            <tr role="row">
                                <td className="table-checkbox">
                                    <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                        <input type="checkbox" id="15" className="bulkActionSelector custom-control-input" defaultValue="15" />
                                        <label className="custom-control-label" htmlFor="15" />
                                    </div>
                                </td>
                                <th>
                                    <div className="d-flex align-items-center flex-fill gap-0">
                                        <div className="d-flex align-items-start flex-fill gap-xs">
                                            <div className="item-icon icon icon-file-pdf-box text-danger" />
                                            <div className="d-flex flex-column flex-fill gap-0">
                                                <a href="#" className="is-primary font-weight-bold stretched-link" aria-labelledby="large">
                                                    filename.ext
                                                </a>
                                                <div className="text-muted small metas is-list mb-none">
                                                    <p>PDF File</p>
                                                    <p>0 KB</p>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Download file" data-boundary="window">
                                            <span className="icon icon-cloud-download" />
                                        </a>
                                        <div className="dropdown-container z-1" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Options">
                                            <a href="#" className="btn btn-lg btn-muted" role="button" data-toggle="dropdown" aria-expanded="false">
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
                                            <div className="thumbnail is-sm is-oval">
                                                <span className="icon icon-account" />
                                            </div>
                                            <div className="d-flex flex-fill gap-2xs">
                                                <a href="#" className="underlined-link stretched-link" aria-labelledby="small">
                                                    User Name
                                                </a>
                                                <span className="icon icon-new-tab text-muted" />
                                            </div>
                                        </div>
                                        <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                            <span className="icon icon-copy" />
                                        </a>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center flex-fill gap-0">
                                        <div className="d-flex align-items-start flex-fill gap-xs">
                                            <div id="tags" className="badges flex-nowrap" role="button" aria-labelledby="multiple" data-toggle="tooltip" data-placement="top" data-html="true" data-title='<ul class="list-unstyled m-none p-0"><li>Tag #1</li><li>Tag #2</li><li>Private</li><li>Tag #4</li><li>Tag #5</li></ul>' data-boundary="window">
                                                <div className="badge is-pill">
                                                    <span>Tag #1</span>
                                                </div>
                                                <div className="badge is-pill">
                                                    <span>Tag #2</span>
                                                </div>
                                                <div className="badge is-pill">
                                                    <span className="icon icon-visibility-off" />
                                                    <span>Private</span>
                                                </div>
                                            </div>
                                            <p className="small text-muted text-nowrap py-4px">+2 more</p>
                                            <a href="#" className="badge is-pill">
                                                <span className="icon icon-plus" />
                                            </a>
                                        </div>
                                        <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                            <span className="icon icon-copy" />
                                        </a>
                                    </div>
                                </td>
                                <td>Deliverable</td>
                            </tr>
                            <tr role="row">
                                <td className="table-checkbox">
                                    <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                        <input type="checkbox" id="15" className="bulkActionSelector custom-control-input" defaultValue="15" />
                                        <label className="custom-control-label" htmlFor="15" />
                                    </div>
                                </td>
                                <th>
                                    <div className="d-flex align-items-center flex-fill gap-0">
                                        <div className="d-flex align-items-start flex-fill gap-xs">
                                            <div className="item-icon icon icon-file-pdf-box text-danger" />
                                            <div className="d-flex flex-column flex-fill gap-0">
                                                <a href="#" className="is-primary font-weight-bold stretched-link" aria-labelledby="large">
                                                    filename.ext
                                                </a>
                                                <div className="text-muted small metas is-list mb-none">
                                                    <p>PDF File</p>
                                                    <p>0 KB</p>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Download file" data-boundary="window">
                                            <span className="icon icon-cloud-download" />
                                        </a>
                                        <div className="dropdown-container z-1" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Options">
                                            <a href="#" className="btn btn-lg btn-muted" role="button" data-toggle="dropdown" aria-expanded="false">
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
                                            <div className="thumbnail is-sm is-oval">
                                                <span className="icon icon-account" />
                                            </div>
                                            <div className="d-flex flex-fill gap-2xs">
                                                <a href="#" className="underlined-link stretched-link" aria-labelledby="small">
                                                    User Name
                                                </a>
                                                <span className="icon icon-new-tab text-muted" />
                                            </div>
                                        </div>
                                        <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                            <span className="icon icon-copy" />
                                        </a>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center flex-fill gap-0">
                                        <div className="d-flex align-items-start flex-fill gap-xs">
                                            <div id="tags" className="badges flex-nowrap" role="button" aria-labelledby="multiple" data-toggle="tooltip" data-placement="top" data-html="true" data-title='<ul class="list-unstyled m-none p-0"><li>Tag #1</li><li>Tag #2</li><li>Private</li><li>Tag #4</li><li>Tag #5</li></ul>' data-boundary="window">
                                                <div className="badge is-pill">
                                                    <span>Tag #1</span>
                                                </div>
                                                <div className="badge is-pill">
                                                    <span>Tag #2</span>
                                                </div>
                                                <div className="badge is-pill">
                                                    <span className="icon icon-visibility-off" />
                                                    <span>Private</span>
                                                </div>
                                            </div>
                                            <p className="small text-muted text-nowrap py-4px">+2 more</p>
                                            <a href="#" className="badge is-pill">
                                                <span className="icon icon-plus" />
                                            </a>
                                        </div>
                                        <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                            <span className="icon icon-copy" />
                                        </a>
                                    </div>
                                </td>
                                <td>Deliverable</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </AppContent>
        </Layout>
    );
};
