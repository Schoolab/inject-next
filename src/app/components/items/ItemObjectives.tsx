import React from "react";
export interface ItemObjectivesProps {}

export const ItemObjectives = ({}: ItemObjectivesProps) => {
    return (
        <div className="container py-8">
            <div className="row">
                <div className="col-12 d-flex flex-column gap-2xl">
                    <div>
                        <h3>Default</h3>
                        <div className="item is-small is-bordered gap-0px">
                            <div className="item-row gap-xs pb-8px">
                                <div className="d-flex p-3xs text-muted">
                                    <span className="emoji is-20px">👀</span>
                                </div>
                                <div className="item-content d-flex flex-column align-items-start justify-content-center overflow-hidden">
                                    <a href="#" className="item-title stretched-link line-clamp-1">
                                        <span>Présentation Preliminary Design Review</span>
                                    </a>
                                    <span className="small text-muted">3 tasks</span>
                                </div>
                                <div className="badge is-pill is-muted">
                                    <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="currentColor" />
                                    </svg>
                                    <span>Nov 30 – Dec 7</span>
                                </div>
                                <div className="d-flex align-items-center gap-xs dropdown">
                                    <div className="dropdown-container">
                                        <a className="btn btn-transparent btn-icon z-1" data-toggle="dropdown" aria-expanded="false" data-boundary="window" href="#">
                                            <span className="icon icon-options" data-toggle="tooltip" data-placement="top" data-original-title="Drag to move. Click for options." data-boundary="window" />
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <h6 className="dropdown-header">Position</h6>
                                            <a className="dropdown-item">
                                                <span className="dropdown-item--label">Send to top</span>
                                            </a>
                                            <a className="dropdown-item">
                                                <span className="dropdown-item--label">Move up</span>
                                            </a>
                                            <a className="dropdown-item">
                                                <span className="dropdown-item--label">Move down</span>
                                            </a>
                                            <a className="dropdown-item">
                                                <span className="dropdown-item--label">Send to bottom</span>
                                            </a>
                                            <div className="dropdown-divider" />
                                            <h6 className="dropdown-header">Actions</h6>
                                            <a className="dropdown-item" data-toggle="collapse" data-target="#question1">
                                                <span className="dropdown-item--label">Edit</span>
                                            </a>
                                            <a className="dropdown-item is-danger">
                                                <span className="dropdown-item--label">Delete</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item is-small is-bordered gap-0px">
                            <div className="item-row gap-xs pb-8px">
                                <div className="d-flex p-3xs text-muted">
                                    <span className="icon icon-objective is-20px" />
                                </div>
                                <div className="item-content d-flex flex-column align-items-start justify-content-center overflow-hidden">
                                    <a href="#" className="item-title stretched-link line-clamp-1">
                                        Name
                                    </a>
                                </div>
                                <div className="badge is-pill is-muted">
                                    <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="currentColor" />
                                    </svg>
                                    <span>May 21</span>
                                </div>
                                <div className="d-flex align-items-center gap-xs dropdown">
                                    <div className="dropdown-container">
                                        <a className="btn btn-transparent btn-icon z-1" data-toggle="dropdown" aria-expanded="false" data-boundary="window" href="#">
                                            <span className="icon icon-options" data-toggle="tooltip" data-placement="top" data-original-title="Drag to move. Click for options." data-boundary="window" />
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <h6 className="dropdown-header">Position</h6>
                                            <a className="dropdown-item">
                                                <span className="dropdown-item--label">Send to top</span>
                                            </a>
                                            <a className="dropdown-item">
                                                <span className="dropdown-item--label">Move up</span>
                                            </a>
                                            <a className="dropdown-item">
                                                <span className="dropdown-item--label">Move down</span>
                                            </a>
                                            <a className="dropdown-item">
                                                <span className="dropdown-item--label">Send to bottom</span>
                                            </a>
                                            <div className="dropdown-divider" />
                                            <h6 className="dropdown-header">Actions</h6>
                                            <a className="dropdown-item" data-toggle="collapse" data-target="#question1">
                                                <span className="dropdown-item--label">Edit</span>
                                            </a>
                                            <a className="dropdown-item is-danger">
                                                <span className="dropdown-item--label">Delete</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>Milestones</h3>
                        <div className="grid-container overflow-y-visible">
                            <div className="grid-cards gap-md">
                                <div className="item-group">
                                    <div className="item-group-header">
                                        <h4 className="nav-title flex-fill mb-none">1. Milestone name</h4>
                                        <div className="badge is-pill is-muted">
                                            <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="currentColor" />
                                            </svg>
                                            <span>May 21</span>
                                        </div>
                                        <span className="badge badge-notification is-highlight">0</span>
                                        <div className="dropdown-container">
                                            <a className="btn btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="icon icon-options" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <h6 className="dropdown-header">Position</h6>
                                                <a className="dropdown-item">
                                                    <span className="dropdown-item--label">Send to top</span>
                                                </a>
                                                <a className="dropdown-item">
                                                    <span className="dropdown-item--label">Move up</span>
                                                </a>
                                                <a className="dropdown-item">
                                                    <span className="dropdown-item--label">Move down</span>
                                                </a>
                                                <a className="dropdown-item">
                                                    <span className="dropdown-item--label">Send to bottom</span>
                                                </a>
                                                <div className="dropdown-divider" />
                                                <h6 className="dropdown-header">Actions</h6>
                                                <a className="dropdown-item">
                                                    <span className="dropdown-item--label">Edit</span>
                                                </a>
                                                <a className="dropdown-item">
                                                    <span className="dropdown-item--label">Manage</span>
                                                    <div className="dropdown-item--icon icon icon-new-tab" />
                                                </a>
                                                <a className="dropdown-item is-danger">
                                                    <span className="dropdown-item--label">Delete</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-sm btn-default btn-muted text-nowrap align-self-start" role="button">
                                        <span className="icon icon-plus-circle" />
                                        <span>Add objective</span>
                                    </button>
                                </div>
                                <div className="item-group">
                                    <div className="item-group-header">
                                        <h4 className="nav-title flex-fill mb-none">2. Milestone name</h4>
                                        <span className="badge badge-notification is-highlight">0</span>
                                        <div className="dropdown-container">
                                            <a className="btn btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="icon icon-options" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <h6 className="dropdown-header">Position</h6>
                                                <a className="dropdown-item">
                                                    <span className="dropdown-item--label">Send to top</span>
                                                </a>
                                                <a className="dropdown-item">
                                                    <span className="dropdown-item--label">Move up</span>
                                                </a>
                                                <a className="dropdown-item">
                                                    <span className="dropdown-item--label">Move down</span>
                                                </a>
                                                <a className="dropdown-item">
                                                    <span className="dropdown-item--label">Send to bottom</span>
                                                </a>
                                                <div className="dropdown-divider" />
                                                <h6 className="dropdown-header">Actions</h6>
                                                <a className="dropdown-item">
                                                    <span className="dropdown-item--label">Edit</span>
                                                </a>
                                                <a className="dropdown-item">
                                                    <span className="dropdown-item--label">Manage</span>
                                                    <div className="dropdown-item--icon icon icon-new-tab" />
                                                </a>
                                                <a className="dropdown-item is-danger">
                                                    <span className="dropdown-item--label">Delete</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-sm btn-default btn-muted text-nowrap align-self-start" role="button">
                                        <span className="icon icon-plus-circle" />
                                        <span>Add objective</span>
                                    </button>
                                </div>
                                <button className="btn btn-sm btn-default btn-muted text-nowrap align-self-start" role="button">
                                    <span className="icon icon-plus-circle" />
                                    <span>Add milestone</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
