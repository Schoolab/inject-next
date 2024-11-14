import React from "react";
import { Card } from "./Card";
import { CardInfos } from "./CardInfos";

interface CardUserProps {}

export const CardUser = ({}: CardUserProps) => {
    return (
        <>
            <Card>
                <CardInfos addClass="is-linked d-flex align-items-start gap-sm">
                    <a href="/user/u/53825949">
                        <div className="thumbnail is-oval " title="" data-toggle="tooltip" data-original-title="La piscine 2022 overview">
                            <img src="https://inject-prod.s3.amazonaws.com/images/731305ed-0603-4910-9e93-65dd89ef302a/sq150.jpeg" />
                        </div>
                    </a>
                    <div className="card-title ml-4 py-1 flex-grow-1">
                        <a href="/user/u/53825949" className="h4 font-weight-normal mb-none stretched-link">
                            Sarah Mecheneau
                        </a>
                        <ul className="metas is-list small">
                            <li> Business Developer / Program Manager - Programmes étudiants internationaux Schoolab </li>
                            <li> FR </li>
                        </ul>
                    </div>
                    <div className="dropdown z-1">
                        <a className="btn btn-lg btn-transparent btn-icon z-1" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="icon icon-options" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="/user/u/53825949">
                                Show profile
                            </a>
                            <a className="dropdown-item" data-toggle="modal" data-target="#modalOpenThread" data-user-id={2286} href="#">
                                Send a message
                            </a>
                        </div>
                    </div>
                </CardInfos>
                <div className="card-targets">
                    <div className="card-target to-collapse is-collapsed d-block" data-toggle="collapse" data-target="#form-122" aria-expanded="false">
                        <div className="d-flex align-items-center flex-fill">
                            <div className="d-flex align-items-center gap-2xs flex-grow-1">
                                <span className="icon icon-clipboard-text is-sm" />
                                <span>Application</span>
                            </div>
                            <span className="icon icon-chevron-right is-sm" />
                        </div>
                        <div className="collapse bg-highlight rounded-sm p-md mb-2xs mt-md" id="form-122">
                            <div className="form-group">
                                <label className="font-weight-bold" htmlFor="q1">
                                    À quel problème répondez-vous ?
                                </label>
                                <textarea readOnly id="q1" name="translations_wrapper[lang_en][name]" data-q1="name" aria-describedby="q1_help" className="form-control" placeholder="e.g. What is you school name?" defaultValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est, at elementum felis diam eget massa."} />
                                <small id="q1_help" className="form-text text-muted">
                                    Hint text
                                </small>
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bold" htmlFor="q1">
                                    Quelle est votre proposition de valeur / solution ?
                                </label>
                                <textarea readOnly id="q1" name="translations_wrapper[lang_en][name]" data-q1="name" aria-describedby="q1_help" className="form-control" placeholder="e.g. What is you school name?" defaultValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est, at elementum felis diam eget massa."} />
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bold" htmlFor="q1">
                                    Un pitch deck a nous partager ?
                                </label>
                                <div className="d-flex flex-column gap-xs">
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
            </Card>
        </>
    );
};
