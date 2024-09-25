import React from "react";
export interface ModalProjectProps {}

export const ModalProject = ({}: ModalProjectProps) => {
    return (
        <div className="application-modals modal show overflow-y-scroll" tabIndex={-1} role="dialog" style={{ zIndex: 1040, display: "block" }} aria-modal="true">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document" style={{ maxWidth: "800px!important" }}>
                <div className="modal-content">
                    <div className="modal-header border-bottom">
                        <h3 className="modal-title line-clamp-1">
                            <span className="text-truncate">ACME</span>
                            {/* <span class="badge badge-role is-admin" data-toggle="tooltip" data-placement="top" data-original-title="Admin" data-boundary="window"></span> */}
                        </h3>
                        <div className="modal-pagination d-flex align-items-center ml-auto gap-xs">
                            <small className="pagination-label text-muted">1&nbsp;of&nbsp;803</small>
                            <a className="btn btn-sm btn-default disabled" data-toggle="tooltip" data-original-title="Previous" href="#">
                                <span className="icon icon-chevron-left" />
                            </a>
                            <a className="btn btn-sm btn-default" data-toggle="tooltip" data-original-title="Next" href="#">
                                <span className="icon icon-chevron-right" />
                            </a>
                        </div>
                        <div className="modal-actions">
                            {/* <a class="btn btn-transparent border-0 p-2xs text-muted" data-toggle="tooltip" data-original-title="Open in new tab" href="#">
                  <span class="icon icon-new-tab is-24px"></span>
              </a> */}
                            <button className="btn btn-transparent border-0 p-2xs text-muted" type="button" data-dismiss="modal" aria-label="Close">
                                <span className="icon icon-close is-24px" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                    <div className="modal-body d-flex flex-column gap-md">
                        <div className="d-flex flex-column flex-md-row align-items-center flex-wrap flex-md-nowrap gap-md">
                            <div className="d-flex flex-shrink-0" style={{ width: 144, height: 96 }}>
                                {/* <div class="card-image">
                              <picture>
                                  <img src="https://inject-prod.s3.amazonaws.com/challenge/cover/pink_co900x600.png" alt="">
                              </picture>
                          </div> */}
                                <div className="card-image bg-highlight">
                                    <span className="icon icon--letter is-40px position-absolute top-50 start-50 translate-middle">
                                        <span>A</span>
                                    </span>
                                </div>
                            </div>
                            <div className="d-flex flex-column align-items-center align-items-md-start gap-xs flex-fill">
                                <div className="d-flex flex-column align-items-center align-items-md-start gap-0">
                                    <div className="d-flex align-items-center gap-2xs">
                                        {/* <span class="icon icon-pin is-24px z-2" data-toggle="tooltip" data-placement="top" data-original-title="Pinned projects are visible on the organization Hub" data-boundary="window"></span> */}
                                        <a href="#" className="h3 line-clamp-1 d-flex align-items-center gap-2xs">
                                            <span>ACME</span>
                                        </a>
                                    </div>
                                    <ul className="text-muted small metas is-list mb-none">
                                        <li
                                            data-toggle="tooltip"
                                            data-placement="bottom"
                                            data-original-title="<ul class='list-unstyled d-flex flex-column gap-2xs m-none'><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/2216e7ab-c701-4503-83a2-ae7b91afb15d/sq150.jpeg'></div><span>Alexandra Jolly</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/3155b942-7535-4b0b-8ded-97eb42a92e1b/sq150.jpeg'></div><span>Emma Salvarelli</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/41c42fb1-35bd-4a31-bf08-3b2267df4b95/sq150.jpeg'></div><span>Pierre Lemeteil</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/47fed806-ad38-46a0-9fd5-feec0e62189e/sq150.jpeg'></div><span>Terence Irving</span></li><li><span>+ 4 more</span></li></ul>"
                                            data-html="true"
                                            data-boundary="window"
                                        >
                                            <div className="d-flex gap-2xs">
                                                <span className="icon icon-members is-xs" />
                                                <span className="text-nowrap">8 members</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex gap-2xs">
                                                <span className="icon icon-bookmark" />
                                                <span>200 followers</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <a href="#" className="badge is-pill">
                                    <span className="icon icon-program" />
                                    <span>
                                        {"{"}program.name{"}"}
                                    </span>
                                </a>
                            </div>
                            <div className="d-flex gap-xs">
                                <a href="#" className="btn btn-lg btn-primary">
                                    <span className="icon icon-bookmark-outline" />
                                    <span>Follow</span>
                                </a>
                                <div className="dropdown">
                                    <a className="btn btn-default btn-lg dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="icon icon-email" />
                                        <span>Contact</span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#">
                                            <span className="dropdown-item--label">Open project space</span>
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">
                                            <span className="dropdown-item--icon icon icon-comment" />
                                            <span className="dropdown-item--label">Open Chat</span>
                                            <span className="dropdown-item--shortcut icon icon-new-tab" />
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <span className="dropdown-item--icon icon icon-video" />
                                            <span className="dropdown-item--label">Open Video</span>
                                            <span className="dropdown-item--shortcut icon icon-new-tab" />
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <span className="dropdown-item--icon icon icon-email" />
                                            <span className="dropdown-item--label">Send an email</span>
                                            <span className="dropdown-item--shortcut icon icon-new-tab" />
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <span className="dropdown-item--icon icon icon-calendar" />
                                            <span className="dropdown-item--label">Book a coaching</span>
                                            <span className="dropdown-item--shortcut icon icon-new-tab" />
                                        </a>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <a className="btn btn-transparent btn-lg btn-icon position-relative z-1" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="icon is-20px icon-options" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#">
                                            <span>Edit profile</span>
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <span>Manage tags</span>
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <span>Manage data</span>
                                        </a>
                                        <a className="dropdown-item is-danger" href="#">
                                            <span>Disable this project</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-column gap-md">
                            <div className="d-flex flex-column">
                                <h4>Learn more</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est, at elementum felis diam eget massa.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est, at elementum felis diam eget massa.</p>
                            </div>
                            <div className="badges small">
                                <a href="#" className="badge is-pill">
                                    <span>Community</span>
                                </a>
                                <a href="#" className="badge is-pill">
                                    <span>SaaS</span>
                                </a>
                                <a href="#" className="badge is-pill">
                                    <span>Impact</span>
                                </a>
                                <a href="#" className="badge is-pill">
                                    <span>Social</span>
                                </a>
                                <a href="#" className="badge is-pill">
                                    <span className="icon icon-visibility-off" />
                                    <span>private tag</span>
                                </a>
                                <a href="#" className="badge is-pill">
                                    <span className="icon icon-visibility-off" />
                                    <span>private tag</span>
                                </a>
                            </div>
                        </div>
                        <div className="bg-white rounded border p-md pb-24px d-flex flex-column">
                            <div className="d-flex align-items-center justify-content-between text-muted mb-3">
                                <span className="small font-weight-bold text-truncate mr-2">
                                    {"{"}vote_session.name{"}"}
                                </span>
                                <span className="small">
                                    Upvotes{" "}
                                    <span className="font-weight-bold text-primary">
                                        <span className="icon icon-thumb-up" /> 19
                                    </span>
                                </span>
                            </div>
                            <div className="card-actions">
                                <a className="btn btn-lg btn-primary btn-block" href="#">
                                    <span className="icon icon-thumb-up is-sm mr-2" />
                                    <span>Upvote</span>
                                </a>
                                <a className="btn btn-lg btn-default btn-block" href="#">
                                    <span className="icon icon-bookmark-outline is-sm mr-2" />
                                    <span>Follow</span>
                                </a>
                            </div>
                        </div>
                        <div className="d-flex flex-column gap-md">
                            <div className="d-flex flex-column gap-2xs">
                                <h4>Responses</h4>
                                <div className="d-flex flex-column gap-xs" id="deliverables">
                                    <div className="card mb-5">
                                        <div className="card-header position-relative">
                                            <div className="d-flex align-items-center gap-xs">
                                                <div className="d-none">
                                                    <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={100} style={{ ["--percent" as any]: 100 }}>
                                                        <circle className="progress-circle progress-circle-bg" />
                                                        <circle className="progress-circle progress-circle-percent" />
                                                        <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                    </svg>
                                                </div>
                                                <div className="d-flex flex-column gap-0 w-100">
                                                    <a href="#" className="h4 stretched-link" id="deliverable1Header" type="button" data-toggle="collapse" data-target="#delivrable1" aria-expanded="false" aria-controls="delivrable1">
                                                        <span>
                                                            {"{"}application.questionnaire.name{"}"}
                                                        </span>
                                                    </a>
                                                    <ul className="text-muted small metas is-list m-none">
                                                        <li>3 fields evaluated</li>
                                                        <li>3 fields completed by the participant</li>
                                                    </ul>
                                                </div>
                                                <span className="icon icon-chevron-right ml-auto" />
                                            </div>
                                        </div>
                                        <div className="card-body collapse" id="delivrable1" aria-labelledby="deliverable1Header" data-parent="#deliverables">
                                            <p>(ici il y aura un rappel des consignes données aux participant·e·s)</p>
                                            <div className="form-group">
                                                <label className="font-weight-bold" htmlFor="q1">
                                                    À quel problème répondez-vous ?
                                                </label>
                                                <textarea disabled id="q1" name="translations_wrapper[lang_en][name]" data-q1="name" aria-describedby="q1_help" className="form-control" value="" placeholder="e.g. What is you school name?" defaultValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est, at elementum felis diam eget massa."} />
                                                <small id="q1_help" className="form-text text-muted">
                                                    Hint text
                                                </small>
                                            </div>
                                            <div className="form-group">
                                                <label className="font-weight-bold" htmlFor="q1">
                                                    Quelle est votre proposition de valeur / solution ?
                                                </label>
                                                <textarea disabled id="q1" name="translations_wrapper[lang_en][name]" data-q1="name" aria-describedby="q1_help" className="form-control" value="" placeholder="e.g. What is you school name?" defaultValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est, at elementum felis diam eget massa."} />
                                            </div>
                                            <div className="form-group">
                                                <label className="font-weight-bold" htmlFor="q1">
                                                    Un pitch deck a nous partager ?
                                                </label>
                                                <div className="d-flex flex-column gap-xs">
                                                    <div className="item is-bordered gap-0 resource">
                                                        <div className="item-cover">
                                                            <a href="#">
                                                                <picture>
                                                                    <img src="../img/pitch-deck-tidycards.png" alt="" />
                                                                </picture>
                                                            </a>
                                                        </div>
                                                        <div className="item-row p-sm">
                                                            <div className="item-row gap-xs">
                                                                <div className="item-icon icon icon-file-pdf-box text-danger" />
                                                                <div className="item-content">
                                                                    <a className="item-title h4 mb-none stretched-link text-truncate" href="#" target="_blank">
                                                                        pitch-deck-tidycards.pdf
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
                                                                <a className="btn btn-lg btn-transparent btn-icon z-2" href="https://schoolab.skedda.com/register?i=277598&k=0tUkWBHX4UlHvcRlvn6Cx60VhMZD7EZl" target="_blank" data-toggle="tooltip" data-placement="top" data-original-title="Download" data-html="true" data-boundary="window">
                                                                    <span className="icon icon-cloud-download" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item is-bordered gap-0 resource">
                                                        <div className="item-row p-sm">
                                                            <div className="item-row gap-xs">
                                                                <div className="item-icon icon icon-file-pdf-box text-danger" />
                                                                <div className="item-content">
                                                                    <a className="item-title h4 mb-none stretched-link text-truncate" href="#" target="_blank">
                                                                        pitch-deck-tidycards.pdf
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
                                                                <a className="btn btn-lg btn-transparent btn-icon z-2" href="https://schoolab.skedda.com/register?i=277598&k=0tUkWBHX4UlHvcRlvn6Cx60VhMZD7EZl" target="_blank" data-toggle="tooltip" data-placement="top" data-original-title="Download" data-html="true" data-boundary="window">
                                                                    <span className="icon icon-cloud-download" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="font-weight-bold" htmlFor="q1">
                                                    Quelles sont les catégories de votre projet ?
                                                </label>
                                                <div className="badges w-100 m-none">
                                                    <div className="badge is-pill">tag</div>
                                                    <div className="badge is-pill">tag</div>
                                                    <div className="badge is-pill">tag</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="modal-footer border-top">
                        <div className="d-flex flex-fill" data-toggle="tooltip" data-placement="top" data-original-title="This page is not available or is private." data-html="true" data-boundary="window">
                            <a className="btn btn-lg btn-block btn-default disabled" href="#">
                                <span className="icon icon-lock" />
                                <span>Open full page</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
