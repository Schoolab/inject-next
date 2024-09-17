import React from "react";
import { useEffect } from "react";
import { types } from "../../../../../public/utils/tables/types";

export interface TableElementTypesProps {}

export const TableElementTypes = ({}: TableElementTypesProps) => {
    useEffect(() => {
        types();
    }, []);
    return (
        <div>
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
                            Large
                        </th>
                        <th id="small" className="sorting" style={{ minWidth: 280 }}>
                            Small
                        </th>
                        <th id="multiple" className="sorting" style={{ minWidth: 280 }}>
                            Multiple
                        </th>
                        <th id="no-data" className="sorting_disabled" style={{ minWidth: 280 }}>
                            No data
                        </th>
                        <th id="empty" className="sorting_disabled" style={{ minWidth: 280 }}>
                            Empty
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr role="row">
                        <td className="table-checkbox">
                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                <input type="checkbox" id="1" className="bulkActionSelector custom-control-input" defaultValue="1" />
                                <label className="custom-control-label" htmlFor="1" />
                            </div>
                        </td>
                        <th>
                            <div className="d-flex align-items-center flex-fill gap-0">
                                <div className="d-flex align-items-start flex-fill gap-xs">
                                    <div className="text-muted">
                                        <div aria-hidden="true" className="icon is-24px">
                                            👋
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column flex-fill gap-0">
                                        <p className="font-weight-bold" aria-labelledby="large">
                                            Title with icon
                                        </p>
                                        <div className="text-muted small metas is-list mb-none">
                                            <p>Meta</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                    <span className="icon icon-copy" />
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
                                    <div className="text-muted">
                                        <div aria-hidden="true" className="icon is-24px">
                                            👋
                                        </div>
                                    </div>
                                    <div className="d-flex flex-fill gap-2xs">
                                        <p className="font-weight-bold" aria-labelledby="small">
                                            Title with icon
                                        </p>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                    <span className="icon icon-copy" />
                                </a>
                            </div>
                        </td>
                        <td>–</td>
                        <td>–</td>
                        <td />
                    </tr>
                    <tr role="row">
                        <td className="table-checkbox">
                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                <input type="checkbox" id="2" className="bulkActionSelector custom-control-input" defaultValue="2" />
                                <label className="custom-control-label" htmlFor="2" />
                            </div>
                        </td>
                        <th>
                            <div className="d-flex align-items-center flex-fill gap-0">
                                <div className="d-flex align-items-start flex-fill gap-xs">
                                    <div className="d-flex flex-column flex-fill gap-0">
                                        <p className="font-weight-bold" aria-labelledby="large">
                                            Title
                                        </p>
                                        <div className="text-muted small metas is-list mb-none">
                                            <p>Meta</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                    <span className="icon icon-copy" />
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
                                    <div className="d-flex flex-fill gap-2xs">
                                        <p className="font-weight-bold" aria-labelledby="small">
                                            Title
                                        </p>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                    <span className="icon icon-copy" />
                                </a>
                            </div>
                        </td>
                        <td>–</td>
                        <td>–</td>
                        <td />
                    </tr>
                    <tr role="row">
                        <td className="table-checkbox">
                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                <input type="checkbox" id="3" className="bulkActionSelector custom-control-input" defaultValue="3" />
                                <label className="custom-control-label" htmlFor="3" />
                            </div>
                        </td>
                        <th>
                            <div className="d-flex align-items-center flex-fill gap-0">
                                <div className="d-flex align-items-start flex-fill gap-xs">
                                    <div className="text-muted">
                                        <div aria-hidden="true" className="icon is-24px icon-file-document-box" />
                                    </div>
                                    <div className="d-flex flex-column flex-fill gap-0">
                                        <p aria-labelledby="large">Text with icon</p>
                                        <div className="text-muted small metas is-list mb-none">
                                            <p>Meta</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                    <span className="icon icon-copy" />
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
                                    <div className="text-muted">
                                        <div aria-hidden="true" className="icon is-24px icon-file-document-box" />
                                    </div>
                                    <div className="d-flex flex-fill gap-2xs">
                                        <p aria-labelledby="small">Text with icon</p>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                    <span className="icon icon-copy" />
                                </a>
                            </div>
                        </td>
                        <td>–</td>
                        <td>–</td>
                        <td />
                    </tr>
                    <tr role="row">
                        <td className="table-checkbox">
                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                <input type="checkbox" id="4" className="bulkActionSelector custom-control-input" defaultValue="4" />
                                <label className="custom-control-label" htmlFor="4" />
                            </div>
                        </td>
                        <th>
                            <div className="d-flex align-items-center flex-fill gap-0">
                                <div className="d-flex align-items-start flex-fill gap-xs">
                                    <div className="d-flex flex-column flex-fill gap-0">
                                        <p aria-labelledby="large">Text</p>
                                        <div className="text-muted small metas is-list mb-none">
                                            <p>Meta</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                    <span className="icon icon-copy" />
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
                                    <div className="d-flex flex-fill gap-2xs">
                                        <p aria-labelledby="small">Text</p>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                    <span className="icon icon-copy" />
                                </a>
                            </div>
                        </td>
                        <td>–</td>
                        <td>–</td>
                        <td />
                    </tr>
                    <tr role="row">
                        <td className="table-checkbox">
                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                <input type="checkbox" id="5" className="bulkActionSelector custom-control-input" defaultValue="5" />
                                <label className="custom-control-label" htmlFor="5" />
                            </div>
                        </td>
                        <th>
                            <div className="d-flex align-items-center flex-fill gap-0">
                                <div className="d-flex align-items-start flex-fill gap-xs">
                                    <a
                                        aria-labelledby="large"
                                        href="#"
                                        className="btn btn-secondary align-self-start"
                                        role="button"
                                        data-toggle="tooltip"
                                        data-placement="right"
                                        data-html="true"
                                        data-title="<p class='small text-muted'>Click to open full content in a modal</p><p>Here goes a long content inside a tooltip to show when needed.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus officia facere ullam inventore? Facere alias labore tenetur itaque cumque! Necessitatibus tempora earum aliquid? Tenetur nostrum fugit sunt, cum tempore voluptates!</p>"
                                    >
                                        <span className="icon icon-text" />
                                    </a>
                                    <div className="d-flex flex-column flex-fill gap-0">
                                        <p aria-labelledby="large">Label</p>
                                        <div className="text-muted small metas is-list mb-none">
                                            <p>Meta</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                    <span className="icon icon-copy" />
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
                                <div className="d-flex align-items-center flex-fill gap-xs">
                                    <a
                                        aria-labelledby="small"
                                        href="#"
                                        className="btn btn-sm btn-secondary align-self-start"
                                        role="button"
                                        data-toggle="tooltip"
                                        data-placement="right"
                                        data-html="true"
                                        data-title="<p class='small text-muted'>Click to open full content in a modal</p><p>Here goes a long content inside a tooltip to show when needed.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus officia facere ullam inventore? Facere alias labore tenetur itaque cumque! Necessitatibus tempora earum aliquid? Tenetur nostrum fugit sunt, cum tempore voluptates!</p>"
                                    >
                                        <span className="icon icon-text" />
                                    </a>
                                    <div className="d-flex flex-fill gap-2xs">
                                        <p aria-labelledby="small">Label</p>
                                        <a href="#" className="btn btn-xs btn-muted" data-toggle="tooltip" data-placement="top" data-html="true" data-title="Edit notes">
                                            <span className="icon icon-pencil" />
                                        </a>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                    <span className="icon icon-copy" />
                                </a>
                            </div>
                        </td>
                        <td>–</td>
                        <td>–</td>
                        <td />
                    </tr>
                    <tr role="row" className="table-active">
                        <td className="table-checkbox">
                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                <input type="checkbox" id="6" className="bulkActionSelector custom-control-input" defaultValue="6" defaultChecked />
                                <label className="custom-control-label" htmlFor="6" />
                            </div>
                        </td>
                        <th>
                            <div className="d-flex align-items-center flex-fill gap-0">
                                <div className="d-flex align-items-start flex-fill gap-xs">
                                    <div className="text-muted">
                                        <div aria-hidden="true" className="icon is-24px icon-file-document-box" />
                                    </div>
                                    <div className="d-flex flex-column flex-fill gap-0">
                                        <a href="#" className="is-primary font-weight-bold stretched-link" aria-labelledby="large">
                                            Link with icon
                                        </a>
                                        <div className="text-muted small metas is-list mb-none">
                                            <p>Meta</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                    <span className="icon icon-copy" />
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
                                    <div className="text-muted">
                                        <div aria-hidden="true" className="icon is-24px icon-file-document-box" />
                                    </div>
                                    <div className="d-flex flex-fill gap-2xs">
                                        <a href="#" className="underlined-link stretched-link" aria-labelledby="small">
                                            Link with icon
                                        </a>
                                        <span className="icon icon-new-tab text-muted" />
                                    </div>
                                </div>
                                <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                    <span className="icon icon-copy" />
                                </a>
                            </div>
                        </td>
                        <td>–</td>
                        <td>–</td>
                        <td />
                    </tr>
                    <tr role="row">
                        <td className="table-checkbox">
                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                <input type="checkbox" id="7" className="bulkActionSelector custom-control-input" defaultValue="7" />
                                <label className="custom-control-label" htmlFor="7" />
                            </div>
                        </td>
                        <th>
                            <div className="d-flex align-items-center flex-fill gap-0">
                                <div className="d-flex align-items-start flex-fill gap-xs">
                                    <div className="d-flex flex-column flex-fill gap-0">
                                        <a href="#" className="is-primary font-weight-bold stretched-link" aria-labelledby="large">
                                            Link
                                        </a>
                                        <div className="text-muted small metas is-list mb-none">
                                            <p>Meta</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                    <span className="icon icon-copy" />
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
                                    <div className="d-flex flex-fill gap-2xs">
                                        <a href="#" className="underlined-link stretched-link" aria-labelledby="small">
                                            Link
                                        </a>
                                        <span className="icon icon-new-tab text-muted" />
                                    </div>
                                </div>
                                <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                    <span className="icon icon-copy" />
                                </a>
                            </div>
                        </td>
                        <td>–</td>
                        <td>–</td>
                        <td />
                    </tr>
                    <tr role="row">
                        <td className="table-checkbox">
                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                <input type="checkbox" id="8" className="bulkActionSelector custom-control-input" defaultValue="8" />
                                <label className="custom-control-label" htmlFor="8" />
                            </div>
                        </td>
                        <th>
                            <div className="d-flex align-items-center flex-fill gap-0">
                                <div className="d-flex align-items-start flex-fill gap-xs">
                                    <div className="text-muted">
                                        <div aria-hidden="true" className="icon is-24px icon-time" />
                                    </div>
                                    <div className="d-flex flex-column flex-fill gap-0">
                                        <p aria-labelledby="large">July 12, 2024 at 2:00 PM</p>
                                        <div className="text-muted small metas is-list mb-none">
                                            <p>
                                                <span>by</span> <a href="#">User Name</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                    <span className="icon icon-copy" />
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
                                    <div className="text-muted">
                                        <div aria-hidden="true" className="icon is-24px icon-time" />
                                    </div>
                                    <div className="d-flex flex-fill gap-2xs">
                                        <p aria-labelledby="small">July 12, 2024 at 2:00 PM</p>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                    <span className="icon icon-copy" />
                                </a>
                            </div>
                        </td>
                        <td>–</td>
                        <td>–</td>
                        <td />
                    </tr>
                    <tr role="row">
                        <td className="table-checkbox">
                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                <input type="checkbox" id="9" className="bulkActionSelector custom-control-input" defaultValue="9" />
                                <label className="custom-control-label" htmlFor="9" />
                            </div>
                        </td>
                        <th>
                            <div className="d-flex align-items-center flex-fill gap-0">
                                <div className="d-flex align-items-start flex-fill gap-xs">
                                    <div className="d-flex flex-column flex-fill gap-0">
                                        <p aria-labelledby="large">July 12, 2024 at 2:00 PM</p>
                                        <div className="text-muted small metas is-list mb-none">
                                            <p>
                                                <span>by</span> <a href="#">User Name</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                    <span className="icon icon-copy" />
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
                                    <div className="d-flex flex-fill gap-2xs">
                                        <p aria-labelledby="small">July 12, 2024 at 2:00 PM</p>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                    <span className="icon icon-copy" />
                                </a>
                            </div>
                        </td>
                        <td>–</td>
                        <td>–</td>
                        <td />
                    </tr>
                    <tr role="row">
                        <td className="table-checkbox">
                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                <input type="checkbox" id="10" className="bulkActionSelector custom-control-input" defaultValue="10" />
                                <label className="custom-control-label" htmlFor="10" />
                            </div>
                        </td>
                        <th>
                            <div className="d-flex align-items-center flex-fill gap-0">
                                <div className="d-flex align-items-start flex-fill gap-xs">
                                    <svg className="progress-circle-container is-lg" viewBox="0 0 32 32" data-percent={25} style={{ ["--percent" as any]: 25 }}>
                                        <circle className="progress-circle progress-circle-bg" />
                                        <circle className="progress-circle progress-circle-percent" />
                                        <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                        {/* <text class="progress-circle-text" x="16" y="20">567/756</text> */}
                                    </svg>
                                    <div className="d-flex flex-column flex-fill gap-0">
                                        <p aria-labelledby="large">1/4</p>
                                        <div className="text-muted small metas is-list mb-none">
                                            <p>Meta</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                    <span className="icon icon-copy" />
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
                                    <svg className="progress-circle-container is-sm" viewBox="0 0 32 32" data-percent={25} style={{ ["--percent" as any]: 25 }}>
                                        <circle className="progress-circle progress-circle-bg" />
                                        <circle className="progress-circle progress-circle-percent" />
                                        <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                        {/* <text class="progress-circle-text" x="16" y="20">567/756</text> */}
                                    </svg>
                                    <div className="d-flex flex-fill gap-2xs">
                                        <p aria-labelledby="small">1/4</p>
                                        <a href="#" className="btn btn-xs btn-muted" data-toggle="tooltip" data-placement="top" data-html="true" data-title="Edit scores">
                                            <span className="icon icon-pencil" />
                                        </a>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                    <span className="icon icon-copy" />
                                </a>
                            </div>
                        </td>
                        <td>–</td>
                        <td>–</td>
                        <td />
                    </tr>
                    <tr role="row">
                        <td className="table-checkbox">
                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                <input type="checkbox" id="10" className="bulkActionSelector custom-control-input" defaultValue="10" />
                                <label className="custom-control-label" htmlFor="10" />
                            </div>
                        </td>
                        <th>–</th>
                        <td>
                            <div className="d-flex align-items-center flex-fill gap-0">
                                <div className="d-flex align-items-start flex-fill gap-xs">
                                    <div className="dropdown">
                                        <a className="badge is-pill is-open dropdown-toggle" data-toggle="dropdown" role="button" href="#">
                                            <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="6" cy={6} r={6} fill="currentColor" />
                                            </svg>
                                            <span>Open</span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-left">
                                            <a className="dropdown-item active">Open</a>
                                            <a className="dropdown-item">In progress</a>
                                            <a className="dropdown-item">Closed</a>
                                            <a className="dropdown-item">Done</a>
                                            <a className="dropdown-item">Draft</a>
                                        </div>
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
                                    <div id="tags" className="badges flex-nowrap" role="button" aria-labelledby="multiple"  data-toggle="tooltip" data-placement="top" data-html="true" data-title='<ul class="list-unstyled m-none p-0"><li>Tag #1</li><li>Tag #2</li><li>Private</li><li>Tag #4</li><li>Tag #5</li></ul>' data-boundary="window">
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
                        <td>–</td>
                        <td />
                    </tr>
                    <tr role="row">
                        <td className="table-checkbox">
                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                <input type="checkbox" id="11" className="bulkActionSelector custom-control-input" defaultValue="11" />
                                <label className="custom-control-label" htmlFor="11" />
                            </div>
                        </td>
                        <th>
                            <div className="d-flex align-items-center flex-fill gap-0">
                                <div className="d-flex align-items-start flex-fill gap-xs">
                                    <div className="thumbnail is-lg">
                                        <img alt="Org Name thumbnail" src="img/placeholder-thumbnail-logo.png" />
                                    </div>
                                    <div className="d-flex flex-column flex-fill gap-0">
                                        <a href="#" className="is-primary font-weight-bold stretched-link" aria-labelledby="large">
                                            Org Name
                                        </a>
                                        <div className="text-muted small metas is-list mb-none">
                                            <p>domain.tld</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                    <span className="icon icon-copy" />
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
                                    <div className="thumbnail is-sm">
                                        <img alt="Org Name thumbnail" src="img/placeholder-thumbnail-logo.png" />
                                    </div>
                                    <div className="d-flex flex-fill gap-2xs">
                                        <a href="#" className="underlined-link stretched-link" aria-labelledby="small">
                                            Org Name
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
                                    <div aria-labelledby="multiple" role="button" className="thumbnail-stack" data-toggle="tooltip" data-placement="top" data-html="true" data-title='<ul class="list-unstyled m-none p-0"><li>Org Name</li><li>Org Name</li><li>Org Name</li><li>Org Name</li><li>Org Name</li></ul>' data-boundary="window">
                                        <a href="#" className="thumbnail is-sm">
                                            <img alt="Org Name thumbnail" src="img/placeholder-thumbnail-logo.png" />
                                        </a>
                                        <a href="#" className="thumbnail is-sm">
                                            <img alt="Org Name thumbnail" src="img/placeholder-thumbnail-logo.png" />
                                        </a>
                                        <a href="#" className="thumbnail is-sm">
                                            <img alt="Org Name thumbnail" src="img/placeholder-thumbnail-logo.png" />
                                        </a>
                                    </div>
                                    <p className="small text-muted text-nowrap py-4px">+2 more</p>
                                </div>
                                <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                    <span className="icon icon-copy" />
                                </a>
                            </div>
                        </td>
                        <td>–</td>
                        <td />
                    </tr>
                    <tr role="row">
                        <td className="table-checkbox">
                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                <input type="checkbox" id="12" className="bulkActionSelector custom-control-input" defaultValue="12" />
                                <label className="custom-control-label" htmlFor="12" />
                            </div>
                        </td>
                        <th>
                            <div className="d-flex align-items-center flex-fill gap-0">
                                <div className="d-flex align-items-start flex-fill gap-xs">
                                    <div aria-hidden="true" className="icon icon--program is-lg">
                                        <span aria-hidden="true">PN</span>
                                    </div>
                                    <div className="d-flex flex-column flex-fill gap-0">
                                        <a href="#" className="is-primary font-weight-bold stretched-link" aria-labelledby="large">
                                            Program Name
                                        </a>
                                        <div className="text-muted small metas is-list mb-none">
                                            <p>Org Name</p>
                                            <p>23 programs</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                    <span className="icon icon-copy" />
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
                                    <div aria-hidden="true" className="icon icon--program is-sm">
                                        <span aria-hidden="true">PN</span>
                                    </div>
                                    <div className="d-flex flex-fill gap-2xs">
                                        <a href="#" className="underlined-link stretched-link" aria-labelledby="small">
                                            Program Name
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
                                    <div aria-labelledby="multiple" className="thumbnail-stack" data-toggle="tooltip" data-placement="top" data-html="true" data-title='<ul class="list-unstyled m-none p-0"><li>Program Name</li><li>Program Name</li><li>Program Name</li><li>Program Name</li><li>Program Name</li></ul>' data-boundary="window">
                                        <div aria-hidden="true" className="icon icon--program is-sm">
                                            <span aria-hidden="true">PN</span>
                                        </div>
                                        <div aria-hidden="true" className="icon icon--program is-sm">
                                            <span aria-hidden="true">PN</span>
                                        </div>
                                        <div aria-hidden="true" className="icon icon--program is-sm">
                                            <span aria-hidden="true">PN</span>
                                        </div>
                                    </div>
                                    <p className="small text-muted text-nowrap py-4px">+2 more</p>
                                </div>
                                <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                    <span className="icon icon-copy" />
                                </a>
                            </div>
                        </td>
                        <td>–</td>
                        <td />
                    </tr>
                    <tr role="row">
                        <td className="table-checkbox">
                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                <input type="checkbox" id="13" className="bulkActionSelector custom-control-input" defaultValue="13" />
                                <label className="custom-control-label" htmlFor="13" />
                            </div>
                        </td>
                        <th>
                            <div className="d-flex align-items-center flex-fill gap-0">
                                <div className="d-flex align-items-start flex-fill gap-xs">
                                    <div aria-hidden="true" className="icon icon--letter is-lg">
                                        <span aria-hidden="true">P</span>
                                    </div>
                                    <div className="d-flex flex-column flex-fill gap-0">
                                        <a href="#" className="is-primary font-weight-bold stretched-link" aria-labelledby="large">
                                            Project Name
                                        </a>
                                        <div className="text-muted small metas is-list mb-none">
                                            <p>2 members</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                    <span className="icon icon-copy" />
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
                                    <div aria-hidden="true" className="icon icon--letter is-sm">
                                        <span aria-hidden="true">P</span>
                                    </div>
                                    <div className="d-flex flex-fill gap-2xs">
                                        <a href="#" className="underlined-link stretched-link" aria-labelledby="small">
                                            Project Name
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
                                    <div aria-labelledby="multiple" className="thumbnail-stack" data-toggle="tooltip" data-placement="top" data-html="true" data-title='<ul class="list-unstyled m-none p-0"><li>Project Name</li><li>Project Name</li><li>Project Name</li><li>Project Name</li><li>Project Name</li></ul>' data-boundary="window">
                                        <div aria-hidden="true" className="icon icon--letter is-sm">
                                            <span aria-hidden="true">P</span>
                                        </div>
                                        <div aria-hidden="true" className="icon icon--letter is-sm">
                                            <span aria-hidden="true">P</span>
                                        </div>
                                        <div aria-hidden="true" className="icon icon--letter is-sm">
                                            <span aria-hidden="true">P</span>
                                        </div>
                                    </div>
                                    <p className="small text-muted text-nowrap py-4px">+2 more</p>
                                </div>
                                <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                    <span className="icon icon-copy" />
                                </a>
                            </div>
                        </td>
                        <td>–</td>
                        <td />
                    </tr>
                    <tr role="row">
                        <td className="table-checkbox">
                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                <input type="checkbox" id="14" className="bulkActionSelector custom-control-input" defaultValue="14" />
                                <label className="custom-control-label" htmlFor="14" />
                            </div>
                        </td>
                        <th>
                            <div className="d-flex align-items-center flex-fill gap-0">
                                <div className="d-flex align-items-start flex-fill gap-xs">
                                    <div className="thumbnail is-lg is-oval">
                                        <span className="icon icon-account" />
                                    </div>
                                    <div className="d-flex flex-column flex-fill gap-0">
                                        <a href="#" className="is-primary font-weight-bold stretched-link" aria-labelledby="large">
                                            User Name
                                        </a>
                                        <div className="text-muted small metas is-list mb-none">
                                            <p>name@domain.tld</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                    <span className="icon icon-copy" />
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
                                    <div aria-labelledby="multiple" className="thumbnail-stack" data-toggle="tooltip" data-placement="top" data-html="true" data-title='<ul class="list-unstyled m-none p-0"><li>User Name</li><li>User Name</li><li>User Name</li><li>User Name</li><li>User Name</li></ul>' data-boundary="window">
                                        <a href="#" className="thumbnail is-sm is-oval">
                                            <span className="icon icon-account" />
                                        </a>
                                        <a href="#" className="thumbnail is-sm is-oval">
                                            <span className="icon icon-account" />
                                        </a>
                                        <a href="#" className="thumbnail is-sm is-oval">
                                            <span className="icon icon-account" />
                                        </a>
                                    </div>
                                    <p className="small text-muted text-nowrap py-4px">+2 more</p>
                                </div>
                                <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                    <span className="icon icon-copy" />
                                </a>
                            </div>
                        </td>
                        <td>–</td>
                        <td />
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
                                    <div aria-hidden="true" className="icon icon-file-pdf-box is-24px text-danger" />
                                    <div className="d-flex flex-fill gap-2xs">
                                        <a href="#" className="underlined-link stretched-link" aria-labelledby="small">
                                            filename.ext
                                        </a>
                                        <span className="icon icon-new-tab text-muted" />
                                    </div>
                                </div>
                                <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Download file" data-boundary="window">
                                    <span className="icon icon-cloud-download" />
                                </a>
                            </div>
                        </td>
                        <td>
                            <div className="d-flex align-items-center flex-fill gap-0">
                                <div className="d-flex align-items-start flex-fill gap-xs">
                                    <div aria-labelledby="multiple" className="thumbnail-stack" data-toggle="tooltip" data-placement="top" data-html="true" data-title='<ul class="list-unstyled m-none p-0"><li>filename.ext</li><li>filename.ext</li><li>filename.ext</li><li>filename.ext</li><li>filename.ext</li></ul>' data-boundary="window">
                                        <div className="border rounded-sm bg-white icon icon-file-pdf-box is-24px text-danger" />
                                        <div className="border rounded-sm bg-white icon icon-file-pdf-box is-24px text-danger" />
                                        <div className="border rounded-sm bg-white icon icon-file-pdf-box is-24px text-danger" />
                                    </div>
                                    <p className="small text-muted text-nowrap py-4px">+2 more</p>
                                </div>
                                <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Download files" data-boundary="window">
                                    <span className="icon icon-cloud-download" />
                                </a>
                            </div>
                        </td>
                        <td>–</td>
                        <td />
                    </tr>
                    <tr role="row">
                        <td className="table-checkbox">
                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                <input type="checkbox" id="16" className="bulkActionSelector custom-control-input" defaultValue="16" />
                                <label className="custom-control-label" htmlFor="16" />
                            </div>
                        </td>
                        <th>
                            <div className="d-flex align-items-center flex-fill gap-0">
                                <div className="d-flex align-items-start flex-fill gap-xs">
                                    <div className="thumbnail is-date is-lg">
                                        <span className="month">July</span>
                                        <span className="day">12</span>
                                    </div>
                                    <div className="d-flex flex-column flex-fill gap-0">
                                        <a href="#" className="is-primary font-weight-bold stretched-link" aria-labelledby="large">
                                            Event Name
                                        </a>
                                        <div className="text-muted small metas is-list mb-none">
                                            <p>July 12, 2024</p>
                                            <p>4:30 PM</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                    <span className="icon icon-copy" />
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
                                    <div className="thumbnail is-date is-sm">
                                        <span className="month">July</span>
                                        <span className="day">12</span>
                                    </div>
                                    <div className="d-flex flex-fill gap-2xs">
                                        <a href="#" className="underlined-link stretched-link" aria-labelledby="small">
                                            Event Name
                                        </a>
                                        <span className="icon icon-new-tab text-muted" />
                                    </div>
                                </div>
                                <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                    <span className="icon icon-copy" />
                                </a>
                            </div>
                        </td>
                        <td>–</td>
                        <td>–</td>
                        <td />
                    </tr>
                    <tr role="row">
                        <td className="table-checkbox">
                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                <input type="checkbox" id="17" className="bulkActionSelector custom-control-input" defaultValue="17" />
                                <label className="custom-control-label" htmlFor="17" />
                            </div>
                        </td>
                        <th>
                            <div className="d-flex align-items-center flex-fill gap-0">
                                <div className="d-flex align-items-start flex-fill gap-xs">
                                    <div className="thumbnail-relation m-auto">
                                        <div className="thumbnail is-lg is-oval">
                                            <span className="icon icon-account" />
                                        </div>
                                        <div aria-hidden="true" className="icon icon--letter is-24px is-top">
                                            <span>P</span>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column flex-fill gap-0">
                                        <a href="#" className="is-primary font-weight-bold stretched-link" aria-labelledby="large">
                                            Mentor / Project
                                        </a>
                                        <div className="text-muted small metas is-list mb-none">
                                            <p>July 12, 2024</p>
                                            <p>4:30 PM</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                    <span className="icon icon-copy" />
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
                                            Mentor / Project
                                        </a>
                                        <span className="icon icon-new-tab text-muted" />
                                    </div>
                                </div>
                                <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                    <span className="icon icon-copy" />
                                </a>
                            </div>
                        </td>
                        <td>–</td>
                        <td>–</td>
                        <td />
                    </tr>
                    <tr role="row">
                        <td className="table-checkbox">
                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                <input type="checkbox" id="18" className="bulkActionSelector custom-control-input" defaultValue="18" />
                                <label className="custom-control-label" htmlFor="18" />
                            </div>
                        </td>
                        <th>
                            <div className="d-flex align-items-center flex-fill gap-0">
                                <div className="d-flex align-items-start flex-fill gap-xs">
                                    <div className="thumbnail-relation m-auto">
                                        <div aria-hidden="true" className="icon icon--letter is-40px">
                                            <span>P</span>
                                        </div>
                                        <div className="thumbnail is-sm is-oval is-top">
                                            <span className="icon icon-account" />
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column flex-fill gap-0">
                                        <a href="#" className="is-primary font-weight-bold stretched-link" aria-labelledby="large">
                                            Project / Mentor
                                        </a>
                                        <div className="text-muted small metas is-list mb-none">
                                            <p>July 12, 2024</p>
                                            <p>4:30 PM</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                    <span className="icon icon-copy" />
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
                                    <div aria-hidden="true" className="icon icon--letter is-24px is-top">
                                        <span>P</span>
                                    </div>
                                    <div className="d-flex flex-fill gap-2xs">
                                        <a href="#" className="underlined-link stretched-link" aria-labelledby="small">
                                            Project / Mentor
                                        </a>
                                        <span className="icon icon-new-tab text-muted" />
                                    </div>
                                </div>
                                <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                    <span className="icon icon-copy" />
                                </a>
                            </div>
                        </td>
                        <td>–</td>
                        <td>–</td>
                        <td />
                    </tr>
                    <tr role="row">
                        <td className="table-checkbox">
                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                <input type="checkbox" id="19" className="bulkActionSelector custom-control-input" defaultValue="19" />
                                <label className="custom-control-label" htmlFor="19" />
                            </div>
                        </td>
                        <th>
                            <div className="d-flex align-items-center flex-fill gap-0">
                                <div className="d-flex align-items-start flex-fill gap-xs">
                                    <div aria-hidden="true" className="icon icon--sdg is-sdg-1 is-40px">
                                        <span>1</span>
                                    </div>
                                    <div className="d-flex flex-column flex-fill gap-0">
                                        <a href="#" className="is-primary font-weight-bold stretched-link" aria-labelledby="large">
                                            Goal Name
                                        </a>
                                        <div className="text-muted small metas is-list mb-none">
                                            <p>12 programs</p>
                                            <p>3 projects</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                    <span className="icon icon-copy" />
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
                                    <div aria-hidden="true" className="icon icon--sdg is-sdg-1 is-24px">
                                        <span>1</span>
                                    </div>
                                    <div className="d-flex flex-fill gap-2xs">
                                        <a href="#" className="underlined-link stretched-link" aria-labelledby="small">
                                            Goal Name
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
                                    <div aria-labelledby="multiple" className="thumbnail-stack" data-toggle="tooltip" data-placement="top" data-html="true" data-title='<ul class="list-unstyled m-none p-0"><li>Goal Name</li><li>Goal Name</li><li>Goal Name</li><li>Goal Name</li><li>Goal Name</li></ul>' data-boundary="window">
                                        <div aria-hidden="true" className="icon icon--sdg is-sdg-1 is-24px is-top">
                                            <span>1</span>
                                        </div>
                                        <div aria-hidden="true" className="icon icon--sdg is-sdg-2 is-24px is-top">
                                            <span>2</span>
                                        </div>
                                        <div aria-hidden="true" className="icon icon--sdg is-sdg-3 is-24px is-top">
                                            <span>3</span>
                                        </div>
                                    </div>
                                    <p className="small text-muted text-nowrap py-4px">+2 more</p>
                                </div>
                                <a href="#" className="btn btn-lg btn-muted show-on-hover z-1" role="button" data-toggle="tooltip" data-placement="top" data-title="Copy to clipboard" data-boundary="window">
                                    <span className="icon icon-copy" />
                                </a>
                            </div>
                        </td>
                        <td>–</td>
                        <td />
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
