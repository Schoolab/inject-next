// TODO: DELETE

import React from "react";
export interface MessageLongProps {}

export const MessageLong = ({}: MessageLongProps) => {
    return (
        <div className="message p-0 align-items-end">
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
    );
};
