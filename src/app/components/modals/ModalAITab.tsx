import React from "react";
import { useEffect } from "react";
import { Button } from "@/app/components/buttons/Button";
import { tooltips } from "../../../../public/utils/tooltips";
export interface ModalAITabProps {}

export const ModalAITab = ({}: ModalAITabProps) => {
    useEffect(() => {
        tooltips();
    }, []);
    return (
        <div className="modal fade is-right " id="iaSidebar" aria-modal="true" role="dialog">
            <div className="modal-dialog modal-dialog-vertical" role="document">
                <div className="modal-content scrollable">
                    <div className="modal-header border-bottom">
                        <h3 className="modal-title line-clamp-1">
                            <span className="text-truncate">AI Agent</span>
                        </h3>
                        <nav className="modal-nav nav nav-tabs">
                            <a href="#" className=" nav-link nav-item active" id="chat-tab" data-toggle="tab" data-target="#chat" type="button" role="tab" aria-controls="chat" aria-selected="true">
                                <span>Chat</span>
                            </a>
                            <a href="#" className=" nav-link nav-item" id="history-tab" data-toggle="tab" data-target="#history" type="button" role="tab" aria-controls="responses" aria-selected="false">
                                <span>History</span>
                            </a>
                        </nav>

                        <div className="modal-actions">
                            <button className="btn btn-default btn-sm text-ai" role="button">
                                <span className="icon icon-ai"></span><span>New chat</span>
                            </button>
                            <button className="btn btn-transparent border-0 p-2xs text-muted" type="button" data-dismiss="modal" aria-label="Close">
                                <span className="icon icon-close is-24px" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                    <div className="tab-content h-100">
                        <div id="chat" role="tabpanel" aria-labelledby="info-tab" className="h-100 tab-pane fade active show">
                            <div className="modal-body have-sticky-footer">
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
                                <div className="message align-items-end">
                                    <a href="#" className="thumbnail is-oval is-md">
                                        <img src="img/thumbnails/mistral.png" />
                                    </a>
                                    <div className="message-body">
                                        <div className="message-row">
                                            <ul className="metas is-list small">
                                                <li>
                                                    <a href="#" className="text-muted d-flex align-items-center gap-2xs">
                                                        <span>Mistral IA_</span>
                                                        {/* <span className="badge badge-role is-expert z-2" data-toggle="tooltip" data-placement="top" data-original-title="Expert" data-boundary="window" /> */}
                                                    </a>
                                                </li>
                                                <li>
                                                    <span>June 18, 2024</span>
                                                </li>
                                                <li>
                                                    <span>3:41 PM</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="message-row align-items-end">
                                            <div className="message-content gap-md">
                                                <p>A design system is a set of interconnected standards used to manage design on a large scale. Here are some key components</p>
                                                <ul>
                                                    <li>Design Guidelines: Rules and principles that guide the creation of consistent and high-quality products.</li>
                                                    <li>Reusable Components: Standardized and reusable user interface elements (like buttons, forms, etc.) that streamline development.</li>
                                                    <li>Design Patterns: Proven solutions to common design problems.</li>
                                                    <li>Documentation: Instructions and standards for using the components and design principles.</li>
                                                </ul>
                                                <p>The goal is to ensure visual and functional consistency across all products and experiences of a brand, while optimizing development time and simplifying maintenance.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="message align-items-end">
                                    <a href="#" className="thumbnail is-oval is-md">
                                        <img src="img/thumbnails/mistral.png" />
                                    </a>
                                    <div className="message-body">
                                        <div className="message-row">
                                            <ul className="metas is-list small">
                                                <li>
                                                    <a href="#" className="text-muted d-flex align-items-center gap-2xs">
                                                        <span>Mistral IA_</span>
                                                        {/* <span className="badge badge-role is-expert z-2" data-toggle="tooltip" data-placement="top" data-original-title="Expert" data-boundary="window" /> */}
                                                    </a>
                                                </li>
                                                <li>
                                                    <span>June 18, 2024</span>
                                                </li>
                                                <li>
                                                    <span>3:41 PM</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="message-row align-items-end">
                                            <div className="message-content gap-md">
                                                <p>A design system is a set of interconnected standards used to manage design on a large scale. Here are some key components</p>
                                                <ul>
                                                    <li>Design Guidelines: Rules and principles that guide the creation of consistent and high-quality products.</li>
                                                    <li>Reusable Components: Standardized and reusable user interface elements (like buttons, forms, etc.) that streamline development.</li>
                                                    <li>Design Patterns: Proven solutions to common design problems.</li>
                                                    <li>Documentation: Instructions and standards for using the components and design principles.</li>
                                                </ul>
                                                <p>The goal is to ensure visual and functional consistency across all products and experiences of a brand, while optimizing development time and simplifying maintenance.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                                    <span>3:45 PM</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="message-row align-items-end">
                                            <div className="message-content gap-md">
                                                <p>Could you develop what are Design patterns ?</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="message align-items-end">
                                    <a href="#" className="thumbnail is-oval is-md">
                                        <img src="img/thumbnails/mistral.png" />
                                    </a>
                                    <div className="message-body">
                                        <div className="message-row">
                                            <ul className="metas is-list small">
                                                <li>
                                                    <a href="#" className="text-muted d-flex align-items-center gap-2xs">
                                                        <span>Mistral IA_</span>
                                                        {/* <span className="badge badge-role is-expert z-2" data-toggle="tooltip" data-placement="top" data-original-title="Expert" data-boundary="window" /> */}
                                                    </a>
                                                </li>
                                                <li>
                                                    <span>June 18, 2024</span>
                                                </li>
                                                <li>
                                                    <span>3:46 PM</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="message-row align-items-end">
                                            <div className="message-content gap-md">
                                                <div className="loading-bubble">
                                                    <div className="spinner">
                                                        <div className="bounce1"></div>
                                                        <div className="bounce2"></div>
                                                        <div className="bounce3"></div>
                                                    </div>
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
                            <div className="modal-footer border-top">
                                <div className="d-flex gap-xs ml-auto">
                                    <a className="btn btn-lg btn-default" href="#">
                                        New Chat
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
