import React from "react";

interface AsideNotesProps {}

export const AsideNotes = ({}: AsideNotesProps) => {
    return (
        <aside className="application-aside is-large">
            <div className="aside-content-container">
                <div className="aside-header">
                    <h3 className="aside-title line-clamp-1">
                        <span className="text-truncate">Notes</span>
                    </h3>
                    <div className="aside-actions">
                        <button className="btn btn-transparent border-0 p-2xs text-muted close-aside" type="button" data-dismiss="aside" aria-label="Close">
                            <span className="icon icon-close is-24px" aria-hidden="true" />
                        </button>
                    </div>
                </div>
                <div className="aside-body p-0">
                    <div className="overflow-hidden h-100 tab-pane fade show active" id="chat" role="tabpanel">
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
            <div className="aside-content-container d-none">
                <div className="aside-header">
                    <h3 className="aside-title line-clamp-1">
                        <span className="text-truncate">Resources</span>
                        <ul className="list-inline list-dotted text-muted mb-none">
                            <li className="list-inline-item small">3 resources</li>
                        </ul>
                    </h3>
                    <div className="aside-actions">
                        <button className="btn btn-transparent border-0 p-2xs text-muted close-aside" type="button" data-dismiss="aside" aria-label="Close">
                            <span className="icon icon-close is-24px" aria-hidden="true" />
                        </button>
                    </div>
                </div>
                <div className="aside-body">
                    <div className="d-flex flex-column gap-xs">
                        <div className="item is-bordered resource">
                            <div className="item-row p-sm">
                                <div className="item-row gap-xs">
                                    <div className="item-icon icon icon-file-pdf-box text-danger" />
                                    <div className="item-content">
                                        <a className="item-title h4 mb-none stretched-link text-truncate" href="#" target="_blank">
                                            stakeholdermap-model.pdf
                                        </a>
                                        <ul className="item-caption metas small is-list">
                                            <li>
                                                <span>PDF File</span>
                                            </li>
                                            <li>
                                                <span>120 KB</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="item-options">
                                    <a className="btn btn-lg btn-transparent btn-icon z-1" href="#" target="_blank">
                                        <span className="icon icon-cloud-download" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="item is-bordered resource">
                            <div className="item-row p-sm">
                                <div className="item-row gap-xs">
                                    <div className="item-icon icon icon-file-pdf-box text-danger" />
                                    <div className="item-content">
                                        <a className="item-title h4 mb-none stretched-link text-truncate" href="#" target="_blank">
                                            stakeholdermap-model.pdf
                                        </a>
                                        <ul className="item-caption metas small is-list">
                                            <li>
                                                <span>PDF File</span>
                                            </li>
                                            <li>
                                                <span>120 KB</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="item-options">
                                    <a className="btn btn-lg btn-transparent btn-icon z-1" href="#" target="_blank">
                                        <span className="icon icon-cloud-download" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="item is-bordered resource">
                            <div className="item-row p-sm">
                                <div className="item-row gap-xs">
                                    <div className="item-icon icon icon-file-pdf-box text-danger" />
                                    <div className="item-content">
                                        <a className="item-title h4 mb-none stretched-link text-truncate" href="#" target="_blank">
                                            stakeholdermap-model.pdf
                                        </a>
                                        <ul className="item-caption metas small is-list">
                                            <li>
                                                <span>PDF File</span>
                                            </li>
                                            <li>
                                                <span>120 KB</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="item-options">
                                    <a className="btn btn-lg btn-transparent btn-icon z-1" href="#" target="_blank">
                                        <span className="icon icon-cloud-download" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aside-footer">
                    <div className="d-flex gap-xs ml-auto">
                        <button className="btn btn-lg btn-default close-aside">Cancel</button>
                    </div>
                </div>
            </div>
        </aside>
    );
};
