import React from "react";
import { useEffect } from "react";
import { Button } from "../Button";
import { tooltips } from "../../../../public/utils/tooltips";
export interface ModalParticipantTabProps {}

export const ModalParticipantTab = ({}: ModalParticipantTabProps) => {
    useEffect(() => {
        tooltips();
    }, []);
    return (
        <div className="application-modals modal show overflow-y-scroll" tabIndex={-1} role="dialog" style={{ zIndex: 1040, display: "block" }} aria-modal="true">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document" style={{ maxWidth: "800px!important" }}>
                <div className="modal-content">
                    <div className="modal-header border-bottom">
                        <h3 className="modal-title line-clamp-1">
                            <span className="text-truncate">Pierre Lemeteil</span>
                        </h3>
                        <nav className="modal-nav nav nav-tabs">
                            <a href="#" className=" nav-link nav-item active" id="info-tab" data-toggle="tab" data-target="#info" type="button" role="tab" aria-controls="info" aria-selected="true">
                                <span>About</span>
                            </a>
                            <a href="#" className=" nav-link nav-item" id="responses-tab" data-toggle="tab" data-target="#responses" type="button" role="tab" aria-controls="responses" aria-selected="false">
                                <span>Responses</span>
                            </a>
                            <a href="#" className=" nav-link nav-item" id="participations-tab" data-toggle="tab" data-target="#data" type="button" role="tab" aria-controls="data" aria-selected="false">
                                <span>Participations</span>
                            </a>
                        </nav>
                        <div className="modal-pagination d-flex align-items-center ml-auto gap-xs">
                            <small className="pagination-label text-muted">1&nbsp;of&nbsp;6</small>
                            <Button type="default" size="sm" iconStartName="chevron-left" data-toggle="tooltip" data-original-title="Previous" />
                            <Button type="default" size="sm" iconStartName="chevron-right" data-toggle="tooltip" data-original-title="Next" />
                        </div>
                        <div className="modal-actions">
                            <a className="btn btn-transparent border-0 p-2xs text-muted" data-toggle="tooltip" data-original-title="Open full page" href="#">
                                <span className="icon icon-new-tab is-24px" />
                            </a>
                            <button className="btn btn-transparent border-0 p-2xs text-muted" type="button" data-dismiss="modal" aria-label="Close">
                                <span className="icon icon-close is-24px" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                    <div className="tab-content modal-body" id="projectTabsContent">
                        <div id="info" role="tabpanel" aria-labelledby="info-tab" className="tab-pane fade active show">
                            <div className="d-flex flex-column gap-md">
                                <div className="d-flex flex-column flex-md-row align-items-center flex-wrap flex-md-nowrap gap-md">
                                    <a href="#" className="thumbnail is-oval is-2xl is-bordered mb-3">
                                        <img src="https://inject-prod.s3.amazonaws.com/images/41c42fb1-35bd-4a31-bf08-3b2267df4b95/sq150.jpeg" />
                                    </a>
                                    <div className="d-flex flex-column align-items-center align-items-md-start gap-xs flex-fill">
                                        <div className="d-flex flex-column align-items-center align-items-md-start gap-0">
                                            <div className="d-flex align-items-center gap-2xs">
                                                <a href="#" className="h3 d-flex align-items-center gap-2xs">
                                                    <span>Pierre Lemeteil</span>
                                                    {/* <span className="badge badge-role is-admin" data-toggle="tooltip" data-placement="top" data-original-title="Admin" data-boundary="window"></span> */}
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
                                        {/* <a href="#" className="btn btn-lg btn-primary">
                                    <span className="icon icon-bookmark-outline" />
                                    <span>Follow</span>
                                </a> */}
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
                                        <div className="dropdown">
                                            <a className="btn btn-transparent btn-lg btn-icon position-relative z-1" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                            Pierre also has deep expertise in e-commerce and optimizing mobile purchasing funnels. He has proven his ability to develop innovative strategies to enhance the online shopping experience, focusing on leveraging mobile technologies to ease consumer access to products and services. This skill enables him to tailor shopping journeys to the specific needs of mobile users, optimizing interfaces for touchscreen displays and simplifying payment processes to
                                            maximize conversions.
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
                            </div>
                        </div>
                        <div id="responses" role="tabpanel" aria-labelledby="responses-tab" className="tab-pane fade">
                            <div className="d-flex flex-column gap-md">
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
                        <div id="data" role="tabpanel" aria-labelledby="participations-tab" className="tab-pane fade">
                            <div className="d-flex flex-column gap-md">
                                <div className="cards">
                                    <div className="card">
                                        <div className="card-infos is-linked d-flex align-items-start gap-sm">
                                            <span className="icon icon--letter is-40px">
                                                <span>P</span>
                                            </span>
                                            <div className="card-title flex-grow-1">
                                                <a href="#" className="h4 mb-none line-clamp-1 d-flex align-items-center gap-2xs">
                                                    <span>Project Name</span>
                                                </a>
                                                <ul className="metas is-list small">
                                                    <li
                                                        className="list-inline-item z-1"
                                                        data-toggle="tooltip"
                                                        data-placement="bottom"
                                                        data-original-title="<ul class='list-unstyled d-flex flex-column gap-2xs m-none'><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/2216e7ab-c701-4503-83a2-ae7b91afb15d/sq150.jpeg'></div><span>Alexandra Jolly</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/3155b942-7535-4b0b-8ded-97eb42a92e1b/sq150.jpeg'></div><span>Emma Salvarelli</span></li>"
                                                        data-html="true"
                                                        data-boundary="window"
                                                    >
                                                        <ul className="metas is-list">
                                                            <li>
                                                                <div className="thumbnail-stack">
                                                                    <div className="thumbnail is-oval is-xs">
                                                                        <img src="https://inject-intrap.s3.amazonaws.com/images/d5b965a6-9324-45d3-aac3-613e623d95d1/sq150.jpeg" />
                                                                    </div>
                                                                    <div className="thumbnail is-oval is-xs">
                                                                        <img src="https://inject-intrap.s3.amazonaws.com/images/e3af9c9d-3c0f-4fbd-a728-ce925a201011/sq150.jpeg" />
                                                                    </div>
                                                                </div>
                                                                <a href="/program/71/project/2903/mentors">
                                                                    <small className="text-muted">2 Members</small>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>Created on 16th July 2024</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-targets">
                                            <div className="card-target-wrapper">
                                                <div className="card-target to-collapse is-collapsed d-block" data-toggle="collapse" data-target="#collapseContent" aria-expanded="false">
                                                    <div className="d-flex align-items-center flex-fill">
                                                        <div className="d-flex align-items-center gap-2xs flex-grow-1">
                                                            <span className="icon icon-clipboard-text is-sm"></span>
                                                            <span>Application</span>
                                                        </div>
                                                        <span className="icon icon-chevron-right is-sm"></span>
                                                    </div>
                                                </div>
                                                <div className="collapse px-md pb-md" id="collapseContent">
                                                    <div className="bg-highlight rounded p-md">Application Form</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-infos is-linked d-flex align-items-start gap-sm">
                                            <span className="icon icon--letter is-40px">
                                                <span>S</span>
                                            </span>
                                            <div className="card-title flex-grow-1">
                                                <a href="#" className="h4 mb-none line-clamp-1 d-flex align-items-center gap-2xs">
                                                    <span>Second Project Name</span>
                                                </a>
                                                <ul className="metas is-list small">
                                                    <li
                                                        className="list-inline-item z-1"
                                                        data-toggle="tooltip"
                                                        data-placement="bottom"
                                                        data-original-title="<ul class='list-unstyled d-flex flex-column gap-2xs m-none'><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/2216e7ab-c701-4503-83a2-ae7b91afb15d/sq150.jpeg'></div><span>Alexandra Jolly</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/3155b942-7535-4b0b-8ded-97eb42a92e1b/sq150.jpeg'></div><span>Emma Salvarelli</span></li>"
                                                        data-html="true"
                                                        data-boundary="window"
                                                    >
                                                        <ul className="metas is-list">
                                                            <li>
                                                                <div className="thumbnail-stack">
                                                                    <div className="thumbnail is-oval is-xs">
                                                                        <img src="https://inject-intrap.s3.amazonaws.com/images/d5b965a6-9324-45d3-aac3-613e623d95d1/sq150.jpeg" />
                                                                    </div>
                                                                    <div className="thumbnail is-oval is-xs">
                                                                        <img src="https://inject-intrap.s3.amazonaws.com/images/e3af9c9d-3c0f-4fbd-a728-ce925a201011/sq150.jpeg" />
                                                                    </div>
                                                                </div>
                                                                <a href="/program/71/project/2903/mentors">
                                                                    <small className="text-muted">2 Members</small>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>Created on 16th July 2024</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-targets">
                                            <div className="card-target-wrapper">
                                                <div className="card-target to-collapse is-collapsed d-block" data-toggle="collapse" data-target="#collapseContent2" aria-expanded="false">
                                                    <div className="d-flex align-items-center flex-fill">
                                                        <div className="d-flex align-items-center gap-2xs flex-grow-1">
                                                            <span className="icon icon-clipboard-text is-sm"></span>
                                                            <span>Application</span>
                                                        </div>
                                                        <span className="icon icon-chevron-right is-sm"></span>
                                                    </div>
                                                </div>
                                                <div className="collapse px-md pb-md" id="collapseContent2">
                                                    <div className="bg-highlight rounded p-md">Application Form</div>
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
                            <a className="btn btn-lg btn-block btn-default" href="#">
                                <span>Open full page</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
