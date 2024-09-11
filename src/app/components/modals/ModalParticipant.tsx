import React from "react";
export interface ModalParticipantProps {}

export const ModalParticipant = ({}: ModalParticipantProps) => {
    return (
        <div className="application-modals modal show overflow-y-scroll" tabIndex={-1} role="dialog" style={{ zIndex: 1040, display: "block" }} aria-modal="true">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document" style={{ maxWidth: "800px!important" }}>
                <div className="modal-content">
                    <div className="modal-header border-bottom">
                        <h3 className="modal-title line-clamp-1">
                            <span className="text-truncate">Pierre Lemeteil</span>
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
                            <a href="#" className="thumbnail is-oval is-2xl is-bordered mb-3">
                                <img src="https://inject-prod.s3.amazonaws.com/images/41c42fb1-35bd-4a31-bf08-3b2267df4b95/sq150.jpeg" />
                            </a>
                            <div className="d-flex flex-column align-items-center align-items-md-start gap-xs flex-fill">
                                <div className="d-flex flex-column align-items-center align-items-md-start gap-0">
                                    <div className="d-flex align-items-center gap-2xs">
                                        <a href="#" className="h3 d-flex align-items-center gap-2xs">
                                            <span>Pierre Lemeteil</span>
                                            {/* <span class="badge badge-role is-admin" data-toggle="tooltip" data-placement="top" data-original-title="Admin" data-boundary="window"></span> */}
                                        </a>
                                    </div>
                                    <ul className="d-flex flex-column flex-sm-row align-items-center align-items-sm-start text-muted small metas is-list mb-none">
                                        <li>
                                            <div className="d-flex gap-2xs">
                                                <span className="text-nowrap">Bordeaux, FR</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex gap-2xs">
                                                <span>200 followers</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex gap-2xs">
                                                <span>Joined Oct 10, 2018</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="d-flex align-items-center align-items-md-start badges small">
                                    <div className="badge is-pill">
                                        <span>Chief Digital Officer</span>
                                    </div>
                                    <a href="#" className="badge is-pill">
                                        <span className="icon icon-work" />
                                        <span>Schoolab</span>
                                    </a>
                                </div>
                            </div>
                            <div className="d-flex gap-xs align-items-center">
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
                                            <span className="dropdown-item--label">Open profile</span>
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
                                            <span className="dropdown-item--icon icon icon-calendar-plus" />
                                            <span className="dropdown-item--label">Book a meeting</span>
                                            <span className="dropdown-item--shortcut icon icon-new-tab" />
                                        </a>
                                    </div>
                                </div>
                                <div className="dropdown z-2">
                                    <a className="btn btn-transparent btn-lg btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="icon is-20px icon-options" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item is-interactive" href="#">
                                            <span className="dropdown-item--icon icon icon-key" />
                                            <span className="dropdown-item--label">Login as Pierre</span>
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">
                                            <span>Edit profile</span>
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <span>Manage roles</span>
                                        </a>
                                        <a className="dropdown-item is-danger" href="#">
                                            <span>Disable this user</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-column gap-md">
                            <div className="d-flex flex-column">
                                <h4>Learn more</h4>
                                <p>Seasoned professional currently serving as the Chief Digital Officer at SL Group, encompassing Schoolab, RaiseLab, and MoHo. His career spans roles that include Digital Director at Schoolab for nearly 5 years and positions focused on digital innovation and product development at other companies.</p>
                                <p>He has a robust educational background with a certification from Stanford University's Graduate School of Business in Innovation and Entrepreneurship, has a degree in engineering, master of science and computer engineering from SUPINFO.</p>
                                <p>
                                    Pierre also has deep expertise in e-commerce and optimizing mobile purchasing funnels. He has proven his ability to develop innovative strategies to enhance the online shopping experience, focusing on leveraging mobile technologies to ease consumer access to products and services. This skill enables him to tailor shopping journeys to the specific needs of mobile users, optimizing interfaces for touchscreen displays and simplifying payment processes to maximize
                                    conversions.
                                </p>
                                <p>Pierre is skilled in areas such as iPhone development and has a strong track record in leading digital transformation and innovation projects.</p>
                            </div>
                            <div className="d-flex flex-column">
                                <h4>Expertises</h4>
                                <div className="badges small">
                                    <a href="#" className="badge is-pill">
                                        <span>Digital</span>
                                    </a>
                                    <a href="#" className="badge is-pill">
                                        <span>SaaS</span>
                                    </a>
                                    <a href="#" className="badge is-pill">
                                        <span>Agile</span>
                                    </a>
                                    <a href="#" className="badge is-pill">
                                        <span>Design Thinking</span>
                                    </a>
                                    <a href="#" className="badge is-pill">
                                        <span>Mobile</span>
                                    </a>
                                    <a href="#" className="badge is-pill">
                                        <span>Product</span>
                                    </a>
                                    <a href="#" className="badge is-pill">
                                        <span>Operations</span>
                                    </a>
                                    <a href="#" className="badge is-pill">
                                        <span>Data</span>
                                    </a>
                                </div>
                            </div>
                            <div className="d-flex flex-column">
                                <h4>Interests</h4>
                                <div className="badges small">
                                    <a href="#" className="badge is-pill">
                                        <span>Biking</span>
                                    </a>
                                </div>
                            </div>
                            <div className="d-flex flex-column">
                                <h4>Links</h4>
                                <ul className="list-unstyled mb-none">
                                    <li>
                                        <a href="https://www.linkedin.com/in/pierrelemeteil/">
                                            <span className="icon icon-linkedin text-muted" />
                                            <span>Linkedin</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="d-flex flex-column gap-2xs">
                            <h4>Responses</h4>
                            <div className="accordion d-flex flex-column gap-xs" id="deliverables">
                                <div className="card mb-5">
                                    <div className="card-header position-relative" id="deliverable1Header" data-toggle="collapse" data-target="#delivrable1" aria-expanded="false" aria-controls="delivrable1">
                                        <div className="d-flex align-items-center gap-xs">
                                            <div className="d-none">
                                                <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={100} style={{ ["--percent" as any]: 100 }}>
                                                    <circle className="progress-circle progress-circle-bg" />
                                                    <circle className="progress-circle progress-circle-percent" />
                                                    <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                </svg>
                                            </div>
                                            <div className="d-flex flex-column gap-0 w-100">
                                                <a href="#" className="h4 stretched-link" id="deliverable1Header"  data-toggle="collapse" data-target="#delivrable1" aria-expanded="false" aria-controls="delivrable1">
                                                    <span>
                                                        {"{"}registration.questionnaire.name{"}"}
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
                                            <textarea disabled id="q1" name="translations_wrapper[lang_en][name]" data-q1="name" aria-describedby="q1_help" className="form-control" placeholder="e.g. What is you school name?" defaultValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est, at elementum felis diam eget massa."} />
                                            <small id="q1_help" className="form-text text-muted">
                                                Hint text
                                            </small>
                                        </div>
                                        <div className="form-group">
                                            <label className="font-weight-bold" htmlFor="q1">
                                                Quelle est votre proposition de valeur / solution ?
                                            </label>
                                            <textarea disabled id="q1" name="translations_wrapper[lang_en][name]" data-q1="name" aria-describedby="q1_help" className="form-control" placeholder="e.g. What is you school name?" defaultValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est, at elementum felis diam eget massa."} />
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
