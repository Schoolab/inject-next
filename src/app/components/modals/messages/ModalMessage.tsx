import React from "react";
import { useEffect } from "react";
import { Button } from "@/app/components/buttons/Button";
import { tooltips } from "../../../../../public/utils/tooltips";
import { EmptyState } from "@/app/content/empty-states/EmptyState";
import { Notif } from "../../badges/notifs/Notif";
export interface ModalMessageProps {
    isShow?: Boolean;
    emptyState?: Boolean;
    loading?: Boolean;
}

export const ModalMessage = ({ isShow = false, emptyState = false, loading = false }: ModalMessageProps) => {
    useEffect(() => {
        tooltips();
    }, []);
    let classTabModal = ["modal fade is-right"];
    isShow && classTabModal.push("show d-block");
    return (
        <div className={classTabModal.join(" ")} id="iaSidebar" aria-modal="true" role="dialog">
            <div className="modal-dialog modal-dialog-vertical" role="document">
                <div className="modal-content scrollable">
                    <div className="modal-header border-bottom">
                       
                       
                        <h3 className="modal-title line-clamp-1 d-flex align-items-center gap-2xs">
                            <button id="chat-return" className="modal-action btn btn-default btn-sm d-flex"><span className="icon icon-arrow-left"></span></button>
                            <span className="text-truncate">Pierre Lemeteil</span>
                        </h3>
                        <div className="modal-actions">
                            <button className="btn btn-default btn-sm" role="button">
                                <span className="icon icon-headphones"></span>
                               
                            </button>
                            <button className="btn btn-transparent border-0 p-2xs text-muted" type="button" data-dismiss="modal" aria-label="Close">
                                <span className="icon icon-close is-24px" aria-hidden="true" />
                            </button>
                        </div>
                    </div>

                    <div className="tab-content h-100">
                        <div id="chat" role="tabpanel" aria-labelledby="info-tab" className="h-100 tab-pane fade active show">
                    
                             
                         
                       
                            
                                    <div className="modal-body have-sticky-footer">
                                        <div className="message-wrapper">
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
                                                            <p>What is a design system ?</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                     
                 
                                <div className="modal-footer border-top is-sticky">
                                    <div className="w-100 message-composer-row">
                                        <textarea className="message-composer-input form-control" required placeholder="Type your question here..." autoComplete="off" defaultValue={""} />
                                        <button className="btn btn-transparent btn-icon message-composer-action">
                                            <span className="icon icon-send" />
                                        </button>
                                    </div>
                                </div>
                       
                        </div>
                        <div id="history" role="tabpanel" aria-labelledby="history-tab" className="h-100 tab-pane fade">
                            {emptyState ? (
                                <>
                                    <EmptyState addClass="h-100" bordered={false} title="No history" iconTitle="format-list-bulleted" text="Your chat list will be listed here" />
                                </>
                            ) : loading ? (
                                <>
                                    <div className="h-100 d-flex justify-content-center align-items-center small text-muted py-3 flex-column gap-xs">
                                        <div className="spinner-border spinner-border-sm mr-3 text-primary" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                        Loading...
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="modal-body have-sticky-footer">
                                        <div className="d-flex flex-column gap-md">
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
                                </>
                            )}
                            {loading ? (
                                <div className="modal-footer border-top">
                                    <div className="d-flex gap-xs ml-auto">
                                        <a className="btn btn-lg btn-default disabled" href="#">
                                            New Chat
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                <div className="modal-footer border-top">
                                    <div className="d-flex gap-xs ml-auto">
                                        <a className="btn btn-lg btn-default" href="#">
                                            New Chat
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
