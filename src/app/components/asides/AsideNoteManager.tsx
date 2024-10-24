import React from "react";

interface AsideNoteManagerProps {}

export const AsideNoteManager = ({}: AsideNoteManagerProps) => {
    return (
        <aside className="application-aside is-small">
            <div className="aside-content-container ">
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
                        <button className="btn btn-lg btn-primary close-aside">
                            <span className="icon icon-plus-circle"></span>
                            <span>Add resources</span>
                             </button>
                    </div>
                </div>
            </div>
            <div className="aside-content-container d-none">
                <div className="aside-header">
                    <h3 className="aside-title line-clamp-1">
                        <span className="text-truncate">Note Managers</span>
                    </h3>
                    <div className="aside-actions">
                        <button className="btn btn-transparent border-0 p-2xs text-muted close-aside" type="button" data-dismiss="aside" aria-label="Fermer">
                            <span className="icon icon-close is-24px" aria-hidden="true" />
                        </button>
                    </div>
                </div>
                <div className="aside-body">
                    <form name="event" method="post" action="/rest/event/coaching/4700/update-feedbacks" autoComplete="off">
                        <div className="hidePast">
                            <div className="form-group">
                                <label className="active checkbox-custom font-weight-bold" htmlFor="event_icon">
                                    Flag
                                </label>
                                <div>
                                    <div className="dropdown bootstrap-select form-control">
                                        <select id="event_icon" name="event[icon]" className="form-control" tabIndex={-98}>
                                            <option value="" />
                                            <option value="icon-flag-success" data-icon="icon-flag text-success" selected />
                                            <option value="icon-flag-warning" data-icon="icon-flag text-warning" />
                                            <option value="icon-flag-danger" data-icon="icon-flag text-danger" />
                                        </select>
                                        <button type="button" className="btn btn-lg dropdown-toggle btn-default" data-toggle="dropdown" role="button" data-id="event_icon" title="" aria-expanded="false">
                                            <div className="filter-option">
                                                <div className="filter-option-inner">
                                                    <div className="filter-option-inner-inner">
                                                        <i className="icon icon-flag text-success" />
                                                        &nbsp;
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                        <div
                                            className="dropdown-menu"
                                            role="combobox"
                                            style={{
                                                maxHeight: "531.375px",
                                                overflow: "hidden",
                                                minHeight: 126,
                                            }}
                                        >
                                            <div
                                                className="inner show"
                                                role="listbox"
                                                aria-expanded="false"
                                                tabIndex={-1}
                                                style={{
                                                    maxHeight: "515.375px",
                                                    overflowY: "auto",
                                                    minHeight: 110,
                                                }}
                                            >
                                                <ul className="dropdown-menu inner show">
                                                    <li>
                                                        <a role="option" className="dropdown-item" aria-disabled="false" tabIndex={0} aria-selected="false">
                                                            <span className="text" />
                                                        </a>
                                                    </li>
                                                    <li className="selected active">
                                                        <a role="option" className="dropdown-item selected active" aria-disabled="false" tabIndex={0} aria-selected="true">
                                                            <span className="icon icon-flag text-success" />
                                                            &nbsp;
                                                            <span className="text" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a role="option" className="dropdown-item" aria-disabled="false" tabIndex={0} aria-selected="false">
                                                            <span className="icon icon-flag text-warning" />
                                                            &nbsp;
                                                            <span className="text" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a role="option" className="dropdown-item" aria-disabled="false" tabIndex={0} aria-selected="false">
                                                            <span className="icon icon-flag text-danger" />
                                                            &nbsp;
                                                            <span className="text" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <small id="event_icon_help" className="form-text text-muted">
                                    Use the Flag to help them visually identify if the coaching went well or if there are any issues.
                                </small>
                            </div>
                            <div className="form-group">
                                <label className="active checkbox-custom font-weight-bold" htmlFor="event_adminNote">
                                    Notes for the Program Managers
                                </label>
                                <textarea
                                    id="event_adminNote"
                                    name="event[adminNote]"
                                    className="autoSaveField form-control"
                                    data-save-url="/rest/event/4700/note-save"
                                    aria-describedby="event_adminNote_help"
                                    rows={4}
                                    style={{
                                        overflow: "hidden",
                                        overflowWrap: "break-word",
                                        resize: "none",
                                        height: 100,
                                    }}
                                    defaultValue={"Attention il est en retard sur ce projet"}
                                />
                                <small id="event_adminNote_help" className="form-text text-muted">
                                    This confidential note allows you to share information with Program Managers. Use the Flag to help them visually identify if the coaching went well or if there are any issues.
                                </small>
                            </div>
                        </div>
                        <input type="hidden" id="event__token" name="event[_token]" defaultValue="01b7eab0c82a1ad714444d729.-IrhMgbYWqbAVvFj8kqEyDmPNJ-pkzxpb2aBn1dCZAk.neS4dEK_LvSPBccHkDzhrHbpXNPu9gpEK1Tgrh0uSUGr8Jt_Z6kr74wzkg" />
                    </form>
                </div>
                <div className="aside-footer">
                    <div className="d-flex gap-xs ml-auto">
                        <button className="btn btn-primary btn-lg mb-3 mr-0">Save</button>
                    </div>
                </div>
            </div>
        </aside>
    );
};
