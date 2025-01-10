import React from "react";

interface AsideIAChatProps {}

export const AsideIAChat = ({}: AsideIAChatProps) => {
    return (
        <aside className="application-aside is-small">
            <div className="aside-content-container">
                <div className="aside-header">
                    <h3 className="aside-title line-clamp-1">
                        <span className="text-truncate">chat List</span>
                    </h3>
                    <div className="aside-actions gap-xs">
                         <button className="btn btn-default btn-sm text-ai" role="button">
                            <span className="icon icon-ai"></span><span>New chat</span>
                         </button>
                        <button className="btn btn-transparent border-0 p-2xs text-muted close-aside" type="button" data-dismiss="aside" aria-label="Close">
                            <span className="icon icon-close is-24px" aria-hidden="true" />
                        </button>
                    </div>
                </div>
                <div className="aside-body d-flex flex-column gap-md">
                    <input className="form-control form-control-md searchControl mb-3" placeholder="Search" title="Type in a name" type="search" />
                    <ul className="nav nav-main flex-column">
                        <li className="nav-item ">
                            <span className="nav-title">Today</span>
                        </li>
                        <li className="nav-item d-flex justify-content-between align-items-center ">
                            <a href="#" className="nav-link d-flex line-clamp-1 flex-fill">
                                <span className="nav-link--label d-flex align-items-center gap-xs active">
                                    <img src="img/mistral.svg" />
                                    <span className="text-truncate">What is a design system ?</span>
                                </span>
                            </a>
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
                        </li>
                        <li className="nav-item d-flex justify-content-between align-items-center ">
                            <a href="#" className="nav-link d-flex line-clamp-1 flex-fill">
                                <span className="nav-link--label d-flex align-items-center gap-xs">
                                    <img src="img/InjectIA.svg" />
                                    <span className="text-truncate">My second question very long with description</span>
                                </span>
                            </a>
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
                        </li>
                        <li className="nav-item d-flex justify-content-between align-items-center ">
                            <a href="#" className="nav-link d-flex line-clamp-1 flex-fill">
                                <span className="nav-link--label d-flex align-items-center gap-xs">
                                    <img src="img/OpenIA.svg" />
                                    <span className="text-truncate">My third question</span>
                                </span>
                            </a>
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
                        </li>
                    </ul>
                    <ul className="nav nav-main flex-column">
                        <li className="nav-item ">
                            <span className="nav-title">Yesterday</span>
                        </li>
                        <li className="nav-item d-flex justify-content-between align-items-center ">
                            <a href="#" className="nav-link d-flex line-clamp-1 flex-fill">
                                <span className="nav-link--label d-flex align-items-center gap-xs">
                                    <img src="img/mistral.svg" />
                                    <span className="text-truncate">My first question</span>
                                </span>
                            </a>
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
                        </li>
                        <li className="nav-item d-flex justify-content-between align-items-center ">
                            <a href="#" className="nav-link d-flex line-clamp-1 flex-fill">
                                <span className="nav-link--label d-flex align-items-center gap-xs">
                                    <img src="img/InjectIA.svg" />
                                    <span className="text-truncate">My second question very long with description</span>
                                </span>
                            </a>
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
                        </li>
                        <li className="nav-item d-flex justify-content-between align-items-center ">
                            <a href="#" className="nav-link d-flex line-clamp-1 flex-fill">
                                <span className="nav-link--label d-flex align-items-center gap-xs">
                                    <img src="img/OpenIA.svg" />
                                    <span className="text-truncate">My third question</span>
                                </span>
                            </a>
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
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
};
