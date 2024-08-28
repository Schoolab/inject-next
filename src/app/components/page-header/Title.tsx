import React from "react";

export interface TitleProps {
    /**
   * Custom class
   */
    addClass?: string;
}

export const Title = ({addClass}: TitleProps) => {
    let classTab = ["application-title"];
    addClass && classTab.push(addClass);
    return (
        <div className={classTab.join(" ")}>
            <div className="d-lg-none flex-grow-1">
                <div className="d-flex justify-content-between mb-3">
                    <a className="btn btn-sm btn-default mr-5" data-toggle="tooltip" data-original-title="Back" href="#">
                        <span className="icon icon-arrow-left" />
                    </a>
                    <div className="d-flex align-items-center gap-xs">
                        <small className="text-muted">1&nbsp;on&nbsp;6</small>
                        <a className="btn btn-sm btn-default" data-toggle="tooltip" data-original-title="previous" href="#">
                            <span className="icon icon-chevron-left" />
                        </a>
                        <a className="btn btn-sm btn-default" data-toggle="tooltip" data-original-title="Next" href="#">
                            <span className="icon icon-chevron-right" />
                        </a>
                    </div>
                </div>
                <div className="dropdown">
                    <div className="h2 m-none dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="titleDropdown">
                        Title Mobile
                    </div>               
                    <div className="dropdown-menu" aria-labelledby="titleDropdown">
                        <a className="dropdown-item" href="#">
                            Engagement
                        </a>
                        <a className="dropdown-item" href="#">
                            Participants
                        </a>
                        <a className="dropdown-item" href="#">
                            Projets
                        </a>
                        <a className="dropdown-item" href="#">
                            Experts
                        </a>
                        <a className="dropdown-item" href="#">
                            Evaluations
                        </a>
                        <a className="dropdown-item" href="#">
                            Contenu
                        </a>
                        <a className="dropdown-item" href="#">
                            Paramètres
                        </a>
                    </div>
                </div>
            </div>
            <div className="d-none d-lg-block flex-grow-1">
                <div className="d-flex">
                    <div className="flex-grow-1">
                        <div className="d-flex gap-xs">
                            <a className="btn btn-sm btn-default" data-toggle="tooltip" data-original-title="Back" href="#">
                                <span className="icon icon-arrow-left" />
                            </a>
                            <div className="h2 m-none">Title Desktop</div>
                        </div>        
                    </div>
                    <div className="d-flex align-items-center gap-xs">
                        <small className="text-muted">1&nbsp;of&nbsp;6</small>
                        <a className="btn btn-sm btn-default" data-toggle="tooltip" data-original-title="previous" href="#">
                            <span className="icon icon-chevron-left" />
                        </a>
                        <a className="btn btn-sm btn-default" data-toggle="tooltip" data-original-title="Next" href="#">
                            <span className="icon icon-chevron-right" />
                        </a>
                    </div>
                </div>
            </div>
            <a className="btn btn-sm btn-default" href="#">
                <span>If button</span>
            </a>
            <a className="btn btn-sm btn-default" href="#">
                <span>If button</span>
            </a>
        </div>
    );
};
