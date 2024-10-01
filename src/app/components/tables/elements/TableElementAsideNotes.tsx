import React from "react";
import { useEffect } from "react";
import { types } from "../../../../../public/utils/tables/types";
import { tooltips } from "../../../../../public/utils/tooltips";
export interface TableElementTypesProps {}

export const TableElementAsideNotes = ({}: TableElementTypesProps) => {
    useEffect(() => {
        types();
        tooltips();
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
                                        <p aria-labelledby="large">2 Notes</p>
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
                                        <p aria-labelledby="small">2 Notes</p>
                                        <a href="#" className="btn btn-xs btn-muted aside-btn" data-toggle="tooltip" data-placement="top" data-html="true" data-title="Edit notes">
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
                                        <p aria-labelledby="large">2 Notes</p>
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
                                        <p aria-labelledby="small">2 Notes</p>
                                        <a href="#" className="btn btn-xs btn-muted aside-btn" data-toggle="tooltip" data-placement="top" data-html="true" data-title="Edit notes">
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
                                        <p aria-labelledby="large">2 Notes</p>
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
                                        <p aria-labelledby="small">2 Notes</p>
                                        <a href="#" className="btn btn-xs btn-muted aside-btn" data-toggle="tooltip" data-placement="top" data-html="true" data-title="Edit notes">
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
                                        <p aria-labelledby="large">2 Notes</p>
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
                                        <p aria-labelledby="small">2 Notes</p>
                                        <a href="#" className="btn btn-xs btn-muted aside-btn" data-toggle="tooltip" data-placement="top" data-html="true" data-title="Edit notes">
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
                </tbody>
            </table>
        </div>
    );
};
