import React from "react";
import { Button } from "@/app/components/buttons/Button";

export interface ModalModelProps {}

export const ModalModel = ({}: ModalModelProps) => {
    return (
        <div className="application-modals modal show" tabIndex={-1} role="dialog" style={{ zIndex: 1040, display: "block" }} aria-modal="true">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document" style={{ maxWidth: "800px!important" }}>
                <div className="modal-content">
                    <div className="modal-header border-bottom">
                        <h3 className="modal-title line-clamp-1">
                            <span className="text-truncate">Title</span>
                        </h3>
                        <nav className="modal-nav nav nav-tabs">
                            <a href="#" className=" nav-link nav-item active" id="info-tab" data-toggle="tab" data-target="#info" type="button" role="tab" aria-controls="info" aria-selected="true">
                                <span>About</span>
                            </a>
                            <a href="#" className=" nav-link nav-item" id="responses-tab" data-toggle="tab" data-target="#responses" type="button" role="tab" aria-controls="responses" aria-selected="false">
                                <span>Responses</span>
                            </a>
                            <a href="#" className=" nav-link nav-item" id="data-tab" data-toggle="tab" data-target="#data" type="button" role="tab" aria-controls="data" aria-selected="false">
                                <span className="icon icon-visibility-off ml-n4px" data-toggle="tooltip" data-placement="top" data-original-title="Accessible only to admins" data-boundary="window" />
                                <span>Data</span>
                            </a>
                        </nav>
                        <div className="modal-pagination d-flex align-items-center ml-auto gap-xs">
                            <small className="pagination-label text-muted">1&nbsp;of&nbsp;6</small>
                            <Button type="default" size="sm" iconStartName="chevron-left" data-toggle="tooltip" data-original-title="Previous" />
                            <Button type="default" size="sm" iconStartName="chevron-right" data-toggle="tooltip" data-original-title="Next" />
                        </div>
                        <div className="modal-actions">
                            <a className="btn btn-transparent border-0 p-2xs text-muted" data-toggle="tooltip" data-original-title="Open full page" href="#">
                                <span className="icon icon-new-tab is-24px" />
                            </a>
                            <button className="btn btn-transparent border-0 p-2xs text-muted" type="button" data-dismiss="modal" aria-label="Close">
                                <span className="icon icon-close is-24px" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                    <div className="tab-content modal-body" id="projectTabsContent">
                        <div id="info" role="tabpanel" aria-labelledby="info-tab" className="tab-pane h-100 fade active show">
                            <div className="d-flex flex-column gap-md">
                                <p>Content here...</p>
                            </div>
                        </div>
                        <div id="responses" role="tabpanel" aria-labelledby="responses-tab" className="tab-pane h-100 fade">
                            <div className="d-flex flex-column gap-md">
                                <p>Content here...</p>
                            </div>
                        </div>
                        <div id="data" role="tabpanel" aria-labelledby="data-tab" className="tab-pane h-100 fade">
                            <div className="d-flex flex-column gap-md">
                                <p>Content here...</p>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer border-top">
                        <div className="dropdown">
                            <a className="btn btn-default btn-lg dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span>Options</span>
                            </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">
                                    <span className="dropdown-item--label">Open</span>
                                    <span className="dropdown-item--shortcut icon icon-new-tab" />
                                </a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#">
                                    <span>Edit</span>
                                </a>
                                <a className="dropdown-item is-danger" href="#">
                                    <span>Delete</span>
                                </a>
                            </div>
                        </div>
                        <div className="d-flex gap-xs ml-auto">
                            <a className="btn btn-lg btn-default" href="#">
                                Discard changes
                            </a>
                            <a className="btn btn-lg btn-primary" href="#">
                                Save
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
