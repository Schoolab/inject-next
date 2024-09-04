import React from "react";
export interface MessageChatProps {}

export const MessageChat = ({}: MessageChatProps) => {
    return (
        <>
            <div className="message is-left is-bottom is-hover">
                <a className="thumbnail is-oval is-md" href="#" title="" data-toggle="tooltip" data-original-title="Pierre Lemeteil">
                    <img src="https://inject-prod.s3.amazonaws.com/images/41c42fb1-35bd-4a31-bf08-3b2267df4b95/sq150.jpeg" />
                </a>
                <div className="message-body">
                    <div className="message-row small">
                        <a href="#" className="text-muted d-flex align-items-center gap-2xs">
                            <span>Pierre Lemeteil</span>
                            <span className="badge badge-role is-admin z-2" data-toggle="tooltip" data-placement="top" data-original-title="Admin" data-boundary="window" />
                        </a>
                    </div>
                    <div className="message-list">
                        <div className="message-row">
                            <div className="message-content" title="Mar 31, 2020 @ 20:11">
                                <p className="mb-0">Hey there! ✋</p>
                            </div>
                            <div className="message-options dropdown">
                                <a className="btn btn-sm btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="icon icon-options" />
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#editCommentModal">
                                        Edit
                                    </a>
                                    <a className="dropdown-item is-danger" href="#" data-toggle="modal" data-target="#deleteCommentModal">
                                        Delete
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="message-row">
                            <div className="message-content" title="Mar 31, 2020 @ 20:11">
                                <p className="mb-0">I was gonna be productive… Laundry, cleaning, but...</p>
                            </div>
                            <div className="message-options dropdown">
                                <a className="btn btn-sm btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="icon icon-options" />
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#editCommentModal">
                                        Edit
                                    </a>
                                    <a className="dropdown-item is-danger" href="#" data-toggle="modal" data-target="#deleteCommentModal">
                                        Delete
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="message-row">
                            <div className="message-content" title="Mar 31, 2020 @ 20:11">
                                <p className="mb-0">I’m getting powered donuts</p>
                            </div>
                            <div className="message-options dropdown">
                                <a className="btn btn-sm btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="icon icon-options" />
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#editCommentModal">
                                        Edit
                                    </a>
                                    <a className="dropdown-item is-danger" href="#" data-toggle="modal" data-target="#deleteCommentModal">
                                        Delete
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="message-row">
                            <div className="message-content" title="Mar 31, 2020 @ 20:11">
                                <p className="mb-0">powdered*</p>
                            </div>
                            <div className="message-options dropdown">
                                <a className="btn btn-sm btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="icon icon-options" />
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#editCommentModal">
                                        Edit
                                    </a>
                                    <a className="dropdown-item is-danger" href="#" data-toggle="modal" data-target="#deleteCommentModal">
                                        Delete
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="message is-right is-bottom is-hover">
                <div className="message-body">
                    <div className="message-list">
                        <div className="message-row">
                            <div className="message-content bg-primary text-white" title="Mar 31, 2020 @ 20:11">
                                <p className="mb-0">Donuts do have powers 🤣</p>
                            </div>
                            <div className="message-options dropdown">
                                <a className="btn btn-sm btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="icon icon-options" />
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#editCommentModal">
                                        Edit
                                    </a>
                                    <a className="dropdown-item is-danger" href="#" data-toggle="modal" data-target="#deleteCommentModal">
                                        Delete
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="message-row">
                        <span className="small text-muted">Seen</span>
                    </div>
                </div>
            </div>
        </>
    );
};
