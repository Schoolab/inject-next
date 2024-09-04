import React from "react";

interface PageAsideDefaultProps {}

export const PageAsideDefault = ({}: PageAsideDefaultProps) => {
    return (
        <div className="application-ui">
            <div className="application-container">
                <main className="application-content">
                    <div id="appMainContainer" className="container-fluid mb-lg-0 py-7"></div>
                </main>

                <aside className="application-aside">
                    <div className="aside-content-container">
                        <div className="aside-header">
                            <h3 className="aside-title line-clamp-1">
                                <span className="text-truncate">Title</span>
                            </h3>
                            <div className="aside-pagination d-flex align-items-center ml-auto gap-xs">
                                <small className="pagination-label text-muted">1&nbsp;of&nbsp;6</small>
                                <a className="btn btn-sm btn-default" data-toggle="tooltip" data-original-title="Previous" href="#">
                                    <span className="icon icon-chevron-left" />
                                </a>
                                <a className="btn btn-sm btn-default" data-toggle="tooltip" data-original-title="Next" href="#">
                                    <span className="icon icon-chevron-right" />
                                </a>
                            </div>
                            <div className="aside-actions">
                                <a className="btn btn-transparent border-0 p-2xs text-muted" data-toggle="tooltip" data-original-title="Open in new tab" href="#">
                                    <span className="icon icon-new-tab is-24px" />
                                </a>
                                <button className="btn btn-transparent border-0 p-2xs text-muted close-aside" type="button" data-dismiss="aside" aria-label="Close">
                                    <span className="icon icon-close is-24px" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                        <div className="aside-body">
                            <p>Content here</p>
                        </div>
                        <div className="aside-footer">
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
                </aside>
            </div>
        </div>
    );
};
