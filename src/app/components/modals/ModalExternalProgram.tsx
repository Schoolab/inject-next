import React from "react";
import { Alert } from "../Alert";
export interface ModalExternalProgramProps {}

export const ModalExternalProgram = ({}: ModalExternalProgramProps) => {
    return (
        <div className="application-modals modal show" id="userProfileModale-874c0f53" tabIndex={-1} role="dialog" style={{ zIndex: 1040, display: "block" }} aria-modal="true">
            <div className="modal-dialog modal-dialog-centered " role="document">
                <div className="modal-content">
                    <div className="modal-header border-bottom">
                        <div className="modal-title d-flex flex-column align-items-start gap-0">
                            <h3 className=" line-clamp-1">
                                <span className="text-truncate">Le Perqo - Saison 4</span>
                            </h3>
                            <p className="d-flex gap-2xs icon icon-domain small text-muted">External</p>
                        </div>
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
                    <div className="modal-body">
                        <div className="d-flex flex-column gap-md">
                            <div className="d-flex flex-column gap-xs">
                                <div className="card-banner">
                                    <div className="card-image">
                                        <picture>
                                            <img src="https://inject-prod.s3.amazonaws.com/images/7f6cbff1-3152-4eed-98f9-9711818af6a7/co1800x1200.jpeg" alt="" />
                                        </picture>
                                    </div>
                                    <div className="card-external">
                                        <div className="small">External: </div>
                                        <div className="small font-weight-bold text-truncate mx-2">Le Perqo</div>
                                        <span className="small icon icon-new-tab text-muted" />
                                    </div>
                                </div>
                                <div className="card-title d-flex align-items-center gap-2xs mb-none">
                                    <div className="h3 mb-none line-clamp-1">Le Perqo - Saison 4</div>
                                </div>
                                <div className="d-flex justify-content-between align-items-end flex-nowrap gap-0">
                                    <div className="d-flex align-items-center flex-wrap flex-lg-nowrap flex-shrink-1 gap-xs overflow-hidden">
                                        <div className="badges flex-nowrap">
                                            <a className="badge is-pill" href="#">
                                                Student
                                            </a>
                                            <a className="badge is-pill" href="#">
                                                DEI
                                            </a>
                                        </div>
                                    </div>
                                    <div className="badge is-pill is-open">
                                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx={6} cy={6} r={6} fill="currentColor" />
                                        </svg>
                                        <span>Open</span>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column">
                                <h4>About the program</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est, at elem entum felis diam eget massa.</p>
                            </div>
                            <Alert type="info" icon="information" text="This program is on an external organization and has its own website. Click on the button to learn more!" />
                        </div>
                    </div>
                    <div className="modal-footer border-top">
                        <a className="btn btn-lg btn-block btn-primary" href="#">
                            <span className="icon icon-new-tab mr-3" />
                            <span>Open program website</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
