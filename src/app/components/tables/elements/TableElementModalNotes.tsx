import React from "react";
import { useEffect } from "react";
import { types } from "../../../../../public/utils/tables/types";
import { tooltips } from "../../../../../public/utils/tooltips";
export interface TableElementTypesProps {}

export const TableElementModalNotes = ({}: TableElementTypesProps) => {
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
                                        <a href="#" className="btn btn-xs btn-muted aside-btn" data-toggle="modal" data-target="#exampleModal">
                                            <span className="icon icon-pencil" />
                                        </a>
                                        <div className="modal" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" style={{ zIndex: 1040 }} aria-hidden="true" role="dialog">
                                            <div className="modal-dialog modal-dialog-centered modal-lg" style={{ maxWidth: "800px!important" }}>
                                                <div className="modal-content">
                                                    <div className="modal-header border-bottom">
                                                        <h3 className="modal-title line-clamp-1">
                                                            <span className="text-truncate">Notes</span>
                                                        </h3>
                                                        <div className="modal-actions">
                                                            <button className="btn btn-transparent border-0 p-2xs text-muted" type="button" data-dismiss="modal" aria-label="Close">
                                                                <span className="icon icon-close is-24px" aria-hidden="true" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="modal-body d-flex flex-column gap-md">
                                                        <div className="messages-module-container standaloneMainThreadContainer">
                                                            <div className="messages-module-content">
                                                                <div className="message align-items-end">
                                                                    <a href="#" className="thumbnail is-oval is-md">
                                                                        <img src="https://inject-prod.s3.amazonaws.com/images/41c42fb1-35bd-4a31-bf08-3b2267df4b95/sq150.jpeg" />
                                                                    </a>
                                                                    <div className="message-body">
                                                                        <div className="message-row">
                                                                            <ul className="metas is-list small">
                                                                                <li>
                                                                                    <a href="#" className="text-muted d-flex align-items-center gap-2xs">
                                                                                        <span>Pierre Lemeteil</span>
                                                                                        {/* <span className="badge badge-role is-admin z-2" data-toggle="tooltip" data-placement="top" data-original-title="Admin" data-boundary="window" /> */}
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <span>June 18, 2024</span>
                                                                                </li>
                                                                                <li>
                                                                                    <span>3:40 PM</span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="message-row align-items-end">
                                                                            <div className="message-content gap-md">
                                                                                <p>A short response</p>
                                                                            </div>
                                                                            <div className="message-options dropdown">
                                                                                <a className="btn btn-sm btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <span className="icon icon-options" />
                                                                                </a>
                                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                                    <a href="#" className="dropdown-item update-comment" data-url="/rest/comment/924/edit-modal">
                                                                                        Edit
                                                                                    </a>
                                                                                    <a href="#" className="dropdown-item is-danger delete-comment" data-url="/rest/comment/924/delete">
                                                                                        Delete
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="message align-items-end">
                                                                    <a href="#" className="thumbnail is-oval is-md">
                                                                        <img src="https://inject-prod.s3.amazonaws.com/images/182d9560-bae6-432f-a316-0065b826fe3b/sq150.jpeg" />
                                                                    </a>
                                                                    <div className="message-body">
                                                                        <div className="message-row">
                                                                            <ul className="metas is-list small">
                                                                                <li>
                                                                                    <a href="#" className="text-muted d-flex align-items-center gap-2xs">
                                                                                        <span>Sasha Lehmann</span>
                                                                                        {/* <span className="badge badge-role is-expert z-2" data-toggle="tooltip" data-placement="top" data-original-title="Expert" data-boundary="window" /> */}
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <span>June 18, 2024</span>
                                                                                </li>
                                                                                <li>
                                                                                    <span>3:40 PM</span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="message-row align-items-end">
                                                                            <div className="message-content gap-md">
                                                                                <p>Le chemin critique est la séquence d'activités la plus longue qui détermine la durée minimale du projet. Il est déterminé en analysant les dépendances entre les tâches et en calculant leur durée.</p>
                                                                                <p>Tout retard sur une tâche du chemin critique retarde l'ensemble du projet. Par exemple, dans la construction d'une maison, le chemin critique pourrait inclure la pose des fondations, l'érection des murs, la pose de la toiture, etc. Si l'une de ces tâches est retardée, la date d'achèvement de la maison sera également repoussée.</p>
                                                                            </div>
                                                                            <div className="message-options dropdown">
                                                                                <a className="btn btn-sm btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <span className="icon icon-options" />
                                                                                </a>
                                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                                    <a href="#" className="dropdown-item update-comment" data-url="/rest/comment/924/edit-modal">
                                                                                        Edit
                                                                                    </a>
                                                                                    <a href="#" className="dropdown-item is-danger delete-comment" data-url="/rest/comment/924/delete">
                                                                                        Delete
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="w-100 standaloneThreadForm" data-mark-as-read-url="/mark-as-read/60">
                                                                <form className="w-100 message-composer is-sticky mt-auto" name="message_light" method="post" action="/messages/conversation/60" data-disable-on-submit={1}>
                                                                    <div className="w-100 message-composer-row">
                                                                        <textarea className="message-composer-input form-control" required placeholder="Write a note…" autoComplete="off" defaultValue={""} />
                                                                        <button className="btn btn-transparent btn-icon message-composer-action is-disabled">
                                                                            <span className="icon icon-send" />
                                                                        </button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
                                        <a href="#" className="btn btn-xs btn-muted aside-btn" data-toggle="modal" data-target="#exampleModal2">
                                            <span className="icon icon-pencil" />
                                        </a>
                                        <div className="modal" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel" style={{ zIndex: 1040 }} aria-hidden="true" role="dialog">
                                            <div className="modal-dialog modal-dialog-centered modal-lg" style={{ maxWidth: "800px!important" }}>
                                                <div className="modal-content">
                                                    <div className="modal-header border-bottom">
                                                        <h3 className="modal-title line-clamp-1">
                                                            <span className="text-truncate">Notes</span>
                                                        </h3>
                                                        <div className="modal-actions">
                                                            <button className="btn btn-transparent border-0 p-2xs text-muted" type="button" data-dismiss="modal" aria-label="Close">
                                                                <span className="icon icon-close is-24px" aria-hidden="true" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="modal-body d-flex flex-column gap-md">
                                                        <div className="messages-module-container standaloneMainThreadContainer">
                                                            <div className="messages-module-content">
                                                                <div className="message align-items-end">
                                                                    <a href="#" className="thumbnail is-oval is-md">
                                                                        <img src="https://inject-prod.s3.amazonaws.com/images/41c42fb1-35bd-4a31-bf08-3b2267df4b95/sq150.jpeg" />
                                                                    </a>
                                                                    <div className="message-body">
                                                                        <div className="message-row">
                                                                            <ul className="metas is-list small">
                                                                                <li>
                                                                                    <a href="#" className="text-muted d-flex align-items-center gap-2xs">
                                                                                        <span>Pierre Lemeteil</span>
                                                                                        {/* <span className="badge badge-role is-admin z-2" data-toggle="tooltip" data-placement="top" data-original-title="Admin" data-boundary="window" /> */}
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <span>June 18, 2024</span>
                                                                                </li>
                                                                                <li>
                                                                                    <span>3:40 PM</span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="message-row align-items-end">
                                                                            <div className="message-content gap-md">
                                                                                <p>A short response</p>
                                                                            </div>
                                                                            <div className="message-options dropdown">
                                                                                <a className="btn btn-sm btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <span className="icon icon-options" />
                                                                                </a>
                                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                                    <a href="#" className="dropdown-item update-comment" data-url="/rest/comment/924/edit-modal">
                                                                                        Edit
                                                                                    </a>
                                                                                    <a href="#" className="dropdown-item is-danger delete-comment" data-url="/rest/comment/924/delete">
                                                                                        Delete
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="message align-items-end">
                                                                    <a href="#" className="thumbnail is-oval is-md">
                                                                        <img src="https://inject-prod.s3.amazonaws.com/images/182d9560-bae6-432f-a316-0065b826fe3b/sq150.jpeg" />
                                                                    </a>
                                                                    <div className="message-body">
                                                                        <div className="message-row">
                                                                            <ul className="metas is-list small">
                                                                                <li>
                                                                                    <a href="#" className="text-muted d-flex align-items-center gap-2xs">
                                                                                        <span>Sasha Lehmann</span>
                                                                                        {/* <span className="badge badge-role is-expert z-2" data-toggle="tooltip" data-placement="top" data-original-title="Expert" data-boundary="window" /> */}
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <span>June 18, 2024</span>
                                                                                </li>
                                                                                <li>
                                                                                    <span>3:40 PM</span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="message-row align-items-end">
                                                                            <div className="message-content gap-md">
                                                                                <p>Le chemin critique est la séquence d'activités la plus longue qui détermine la durée minimale du projet. Il est déterminé en analysant les dépendances entre les tâches et en calculant leur durée.</p>
                                                                                <p>Tout retard sur une tâche du chemin critique retarde l'ensemble du projet. Par exemple, dans la construction d'une maison, le chemin critique pourrait inclure la pose des fondations, l'érection des murs, la pose de la toiture, etc. Si l'une de ces tâches est retardée, la date d'achèvement de la maison sera également repoussée.</p>
                                                                            </div>
                                                                            <div className="message-options dropdown">
                                                                                <a className="btn btn-sm btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <span className="icon icon-options" />
                                                                                </a>
                                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                                    <a href="#" className="dropdown-item update-comment" data-url="/rest/comment/924/edit-modal">
                                                                                        Edit
                                                                                    </a>
                                                                                    <a href="#" className="dropdown-item is-danger delete-comment" data-url="/rest/comment/924/delete">
                                                                                        Delete
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="w-100 standaloneThreadForm" data-mark-as-read-url="/mark-as-read/60">
                                                                <form className="w-100 message-composer is-sticky mt-auto" name="message_light" method="post" action="/messages/conversation/60" data-disable-on-submit={1}>
                                                                    <div className="w-100 message-composer-row">
                                                                        <textarea className="message-composer-input form-control" required placeholder="Write a note…" autoComplete="off" defaultValue={""} />
                                                                        <button className="btn btn-transparent btn-icon message-composer-action is-disabled">
                                                                            <span className="icon icon-send" />
                                                                        </button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
                                        <a href="#" className="btn btn-xs btn-muted aside-btn" data-toggle="modal" data-target="#exampleModal3">
                                            <span className="icon icon-pencil" />
                                        </a>
                                        <div className="modal" id="exampleModal3" tabIndex={-1} aria-labelledby="exampleModalLabel" style={{ zIndex: 1040 }} aria-hidden="true" role="dialog">
                                            <div className="modal-dialog modal-dialog-centered modal-lg" style={{ maxWidth: "800px!important" }}>
                                                <div className="modal-content">
                                                    <div className="modal-header border-bottom">
                                                        <h3 className="modal-title line-clamp-1">
                                                            <span className="text-truncate">Notes</span>
                                                        </h3>
                                                        <div className="modal-actions">
                                                            <button className="btn btn-transparent border-0 p-2xs text-muted" type="button" data-dismiss="modal" aria-label="Close">
                                                                <span className="icon icon-close is-24px" aria-hidden="true" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="modal-body d-flex flex-column gap-md">
                                                        <div className="messages-module-container standaloneMainThreadContainer">
                                                            <div className="messages-module-content">
                                                                <div className="message align-items-end">
                                                                    <a href="#" className="thumbnail is-oval is-md">
                                                                        <img src="https://inject-prod.s3.amazonaws.com/images/41c42fb1-35bd-4a31-bf08-3b2267df4b95/sq150.jpeg" />
                                                                    </a>
                                                                    <div className="message-body">
                                                                        <div className="message-row">
                                                                            <ul className="metas is-list small">
                                                                                <li>
                                                                                    <a href="#" className="text-muted d-flex align-items-center gap-2xs">
                                                                                        <span>Pierre Lemeteil</span>
                                                                                        {/* <span className="badge badge-role is-admin z-2" data-toggle="tooltip" data-placement="top" data-original-title="Admin" data-boundary="window" /> */}
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <span>June 18, 2024</span>
                                                                                </li>
                                                                                <li>
                                                                                    <span>3:40 PM</span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="message-row align-items-end">
                                                                            <div className="message-content gap-md">
                                                                                <p>A short response</p>
                                                                            </div>
                                                                            <div className="message-options dropdown">
                                                                                <a className="btn btn-sm btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <span className="icon icon-options" />
                                                                                </a>
                                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                                    <a href="#" className="dropdown-item update-comment" data-url="/rest/comment/924/edit-modal">
                                                                                        Edit
                                                                                    </a>
                                                                                    <a href="#" className="dropdown-item is-danger delete-comment" data-url="/rest/comment/924/delete">
                                                                                        Delete
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="message align-items-end">
                                                                    <a href="#" className="thumbnail is-oval is-md">
                                                                        <img src="https://inject-prod.s3.amazonaws.com/images/182d9560-bae6-432f-a316-0065b826fe3b/sq150.jpeg" />
                                                                    </a>
                                                                    <div className="message-body">
                                                                        <div className="message-row">
                                                                            <ul className="metas is-list small">
                                                                                <li>
                                                                                    <a href="#" className="text-muted d-flex align-items-center gap-2xs">
                                                                                        <span>Sasha Lehmann</span>
                                                                                        {/* <span className="badge badge-role is-expert z-2" data-toggle="tooltip" data-placement="top" data-original-title="Expert" data-boundary="window" /> */}
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <span>June 18, 2024</span>
                                                                                </li>
                                                                                <li>
                                                                                    <span>3:40 PM</span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="message-row align-items-end">
                                                                            <div className="message-content gap-md">
                                                                                <p>Le chemin critique est la séquence d'activités la plus longue qui détermine la durée minimale du projet. Il est déterminé en analysant les dépendances entre les tâches et en calculant leur durée.</p>
                                                                                <p>Tout retard sur une tâche du chemin critique retarde l'ensemble du projet. Par exemple, dans la construction d'une maison, le chemin critique pourrait inclure la pose des fondations, l'érection des murs, la pose de la toiture, etc. Si l'une de ces tâches est retardée, la date d'achèvement de la maison sera également repoussée.</p>
                                                                            </div>
                                                                            <div className="message-options dropdown">
                                                                                <a className="btn btn-sm btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <span className="icon icon-options" />
                                                                                </a>
                                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                                    <a href="#" className="dropdown-item update-comment" data-url="/rest/comment/924/edit-modal">
                                                                                        Edit
                                                                                    </a>
                                                                                    <a href="#" className="dropdown-item is-danger delete-comment" data-url="/rest/comment/924/delete">
                                                                                        Delete
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="w-100 standaloneThreadForm" data-mark-as-read-url="/mark-as-read/60">
                                                                <form className="w-100 message-composer is-sticky mt-auto" name="message_light" method="post" action="/messages/conversation/60" data-disable-on-submit={1}>
                                                                    <div className="w-100 message-composer-row">
                                                                        <textarea className="message-composer-input form-control" required placeholder="Write a note…" autoComplete="off" defaultValue={""} />
                                                                        <button className="btn btn-transparent btn-icon message-composer-action is-disabled">
                                                                            <span className="icon icon-send" />
                                                                        </button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
                                        <a href="#" className="btn btn-xs btn-muted aside-btn" data-toggle="modal" data-target="#exampleModal4">
                                            <span className="icon icon-pencil" />
                                        </a>
                                        <div className="modal" id="exampleModal4" tabIndex={-1} aria-labelledby="exampleModalLabel" style={{ zIndex: 1040 }} aria-hidden="true" role="dialog">
                                            <div className="modal-dialog modal-dialog-centered modal-lg" style={{ maxWidth: "800px!important" }}>
                                                <div className="modal-content">
                                                    <div className="modal-header border-bottom">
                                                        <h3 className="modal-title line-clamp-1">
                                                            <span className="text-truncate">Notes</span>
                                                        </h3>
                                                        <div className="modal-actions">
                                                            <button className="btn btn-transparent border-0 p-2xs text-muted" type="button" data-dismiss="modal" aria-label="Close">
                                                                <span className="icon icon-close is-24px" aria-hidden="true" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="modal-body d-flex flex-column gap-md">
                                                        <div className="messages-module-container standaloneMainThreadContainer">
                                                            <div className="messages-module-content">
                                                                <div className="message align-items-end">
                                                                    <a href="#" className="thumbnail is-oval is-md">
                                                                        <img src="https://inject-prod.s3.amazonaws.com/images/41c42fb1-35bd-4a31-bf08-3b2267df4b95/sq150.jpeg" />
                                                                    </a>
                                                                    <div className="message-body">
                                                                        <div className="message-row">
                                                                            <ul className="metas is-list small">
                                                                                <li>
                                                                                    <a href="#" className="text-muted d-flex align-items-center gap-2xs">
                                                                                        <span>Pierre Lemeteil</span>
                                                                                        {/* <span className="badge badge-role is-admin z-2" data-toggle="tooltip" data-placement="top" data-original-title="Admin" data-boundary="window" /> */}
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <span>June 18, 2024</span>
                                                                                </li>
                                                                                <li>
                                                                                    <span>3:40 PM</span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="message-row align-items-end">
                                                                            <div className="message-content gap-md">
                                                                                <p>A short response</p>
                                                                            </div>
                                                                            <div className="message-options dropdown">
                                                                                <a className="btn btn-sm btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <span className="icon icon-options" />
                                                                                </a>
                                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                                    <a href="#" className="dropdown-item update-comment" data-url="/rest/comment/924/edit-modal">
                                                                                        Edit
                                                                                    </a>
                                                                                    <a href="#" className="dropdown-item is-danger delete-comment" data-url="/rest/comment/924/delete">
                                                                                        Delete
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="message align-items-end">
                                                                    <a href="#" className="thumbnail is-oval is-md">
                                                                        <img src="https://inject-prod.s3.amazonaws.com/images/182d9560-bae6-432f-a316-0065b826fe3b/sq150.jpeg" />
                                                                    </a>
                                                                    <div className="message-body">
                                                                        <div className="message-row">
                                                                            <ul className="metas is-list small">
                                                                                <li>
                                                                                    <a href="#" className="text-muted d-flex align-items-center gap-2xs">
                                                                                        <span>Sasha Lehmann</span>
                                                                                        {/* <span className="badge badge-role is-expert z-2" data-toggle="tooltip" data-placement="top" data-original-title="Expert" data-boundary="window" /> */}
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <span>June 18, 2024</span>
                                                                                </li>
                                                                                <li>
                                                                                    <span>3:40 PM</span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="message-row align-items-end">
                                                                            <div className="message-content gap-md">
                                                                                <p>Le chemin critique est la séquence d'activités la plus longue qui détermine la durée minimale du projet. Il est déterminé en analysant les dépendances entre les tâches et en calculant leur durée.</p>
                                                                                <p>Tout retard sur une tâche du chemin critique retarde l'ensemble du projet. Par exemple, dans la construction d'une maison, le chemin critique pourrait inclure la pose des fondations, l'érection des murs, la pose de la toiture, etc. Si l'une de ces tâches est retardée, la date d'achèvement de la maison sera également repoussée.</p>
                                                                            </div>
                                                                            <div className="message-options dropdown">
                                                                                <a className="btn btn-sm btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <span className="icon icon-options" />
                                                                                </a>
                                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                                    <a href="#" className="dropdown-item update-comment" data-url="/rest/comment/924/edit-modal">
                                                                                        Edit
                                                                                    </a>
                                                                                    <a href="#" className="dropdown-item is-danger delete-comment" data-url="/rest/comment/924/delete">
                                                                                        Delete
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="w-100 standaloneThreadForm" data-mark-as-read-url="/mark-as-read/60">
                                                                <form className="w-100 message-composer is-sticky mt-auto" name="message_light" method="post" action="/messages/conversation/60" data-disable-on-submit={1}>
                                                                    <div className="w-100 message-composer-row">
                                                                        <textarea className="message-composer-input form-control" required placeholder="Write a note…" autoComplete="off" defaultValue={""} />
                                                                        <button className="btn btn-transparent btn-icon message-composer-action is-disabled">
                                                                            <span className="icon icon-send" />
                                                                        </button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
