import React from "react";
import { Card } from "./Card";
import { CardInfos } from "./CardInfos";
import { CardBanner } from "./CardBanner";
import { CardImage } from "./CardImage";

interface CardModelProps {
    /**
     * Does the card have an image url
     */
    img?: string;
}

export const CardModel = ({img}: CardModelProps) => {
    return (
        <Card addClass="h-100">
            <CardInfos addClass="is-linked">
                {img && (
                    <CardBanner>
                        <CardImage src={img} />
                        <div className="card-external">
                            <div className="small">External: </div>
                            <div className="small font-weight-bold text-truncate mx-2">
                                {"{"}
                                {"{"}Organization name with a super long text{"}"}
                                {"}"}
                            </div>
                            <span className="small icon icon-new-tab text-muted" />
                        </div>
                    </CardBanner>
                )}
                <div className="card-title">
                    <a href="/program/142/details" className="h3 mb-none stretched-link line-clamp-1">
                        {"{"}
                        {"{"}Program name with a super super super super super super superlong text{"}"}
                        {"}"}
                    </a>
                </div>
                <div className="d-flex justify-content-between align-items-end flex-nowrap gap-0">
                    <div className="d-flex align-items-center flex-wrap flex-lg-nowrap flex-shrink-1 gap-xs overflow-hidden">
                        <div className="d-flex gap-2xs text-muted small">
                            <span className="icon icon-community is-xs" />
                            <span className="text-nowrap">100 members</span>
                        </div>
                        <div className="badges flex-nowrap">
                            <a className="badge is-pill" href="#">
                                Student
                            </a>
                            <a className="badge is-pill" href="#">
                                Startups
                            </a>
                            <a className="badge is-pill" href="#">
                                Corporate
                            </a>
                            <a className="badge is-pill" href="#">
                                Plastic
                            </a>
                            <a className="badge is-pill" href="#">
                                Food
                            </a>
                            <a className="badge is-pill" href="#">
                                DEI
                            </a>
                            <span className="text-muted small text-nowrap">+2</span>
                        </div>
                    </div>
                    <div className="badge is-pill is-open">
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={6} cy={6} r={6} fill="currentColor" />
                        </svg>
                        <span>Open</span>
                    </div>
                </div>
            </CardInfos>
            <div className="card-targets">
                <div className="card-target">
                    <a href="#" className="stretched-link d-flex align-items-center">
                        <span className="icon icon-public-page is-sm" />
                        <span>Public page</span>
                    </a>
                    <span className="icon icon-chevron-right is-sm" />
                </div>
                <div className="card-target">
                    <a href="#" className="stretched-link d-flex align-items-center">
                        <span className="icon icon--letter is-sm">
                            <span>m</span>
                        </span>
                        <span>Open project overview</span>
                    </a>
                    <span className="icon icon-chevron-right is-sm" />
                </div>
                <div className="card-target">
                    <a href="#" className="stretched-link d-flex align-items-center">
                        <span className="icon icon-coaching is-sm" />
                        <span>Open experts overview</span>
                    </a>
                    <span className="icon icon-chevron-right is-sm" />
                </div>
                <div className="card-target">
                    <a href="#" className="stretched-link d-flex align-items-center">
                        <span className="icon icon-evaluation is-sm" />
                        <span>Open jury overview</span>
                    </a>
                    <span className="icon icon-chevron-right is-sm" />
                </div>
                <div className="card-target">
                    <a href="#" className="stretched-link d-flex align-items-center">
                        <span className="icon icon-settings is-sm" />
                        <span>Manage program</span>
                    </a>
                    <span className="icon icon-chevron-right is-sm" />
                </div>
                <div className="card-target">
                    <a href="#" className="stretched-link d-flex align-items-center">
                        <span className="icon icon-settings is-sm" />
                        <span>Manage project</span>
                    </a>
                    <span className="icon icon-chevron-right is-sm" />
                </div>
            </div>
            <div className="card-links">
                <div className="d-flex align-items-center justify-content-between text-muted mb-3">
                    <span className="small font-weight-bold text-truncate mr-2">Join the program</span>
                    <span className="small">
                        Canditates
                        <span className="font-weight-bold">
                            <span className="icon icon-account" /> 48
                        </span>
                    </span>
                </div>
                <div className="card-actions">
                    <a className="btn btn-lg btn-primary btn-block" href="#">
                        <span>Join</span>
                    </a>
                    <a className="btn btn-lg btn-default btn-block" href="#">
                        <span>Learn more</span>
                    </a>
                </div>
            </div>
            <div className="card-links">
                <div className="d-flex align-items-center justify-content-between text-muted mb-3">
                    <span className="small font-weight-bold text-truncate mr-2">Support this project</span>
                    <span className="small">
                        Followers{" "}
                        <span className="font-weight-bold">
                            <span className="icon icon-bookmark" /> 200
                        </span>
                    </span>
                </div>
                <div className="card-actions">
                    <a className="btn btn-lg btn-primary btn-block" href="#">
                        <span className="icon icon-bookmark-outline is-sm mr-2" />
                        <span>Follow</span>
                    </a>
                    <a className="btn btn-lg btn-default btn-block" href="#">
                        <span>Learn more</span>
                    </a>
                </div>
            </div>
            <div className="card-links">
                <div className="d-flex align-items-center justify-content-between text-muted mb-3">
                    <span className="small font-weight-bold text-truncate mr-2">Support this project</span>
                    <span className="small">
                        Followers{" "}
                        <span className="font-weight-bold">
                            <span className="icon icon-bookmark" /> 200
                        </span>
                    </span>
                </div>
                <div className="card-actions">
                    <a className="btn btn-lg btn-default btn-block" href="#">
                        <span className="icon icon-bookmark is-sm mr-2" />
                        <span>Following</span>
                    </a>
                    <a className="btn btn-lg btn-default btn-block" href="#">
                        {" "}
                        Learn more{" "}
                    </a>
                </div>
            </div>
            <div className="card-links">
                <div className="d-flex align-items-center justify-content-between text-muted mb-3">
                    <span className="small font-weight-bold text-truncate mr-2">Join this project</span>
                    <span className="small">
                        Canditates{" "}
                        <span className="font-weight-bold">
                            <span className="icon icon-account" /> 48
                        </span>
                    </span>
                </div>
                <div className="card-actions">
                    <a className="btn btn-lg btn-primary btn-block" href="#">
                        <span className="icon icon-plus-circle is-sm mr-2" />
                        <span>Join</span>
                    </a>
                    <a className="btn btn-lg btn-default btn-block" href="#">
                        <span className="icon icon-bookmark-outline is-sm mr-2" />
                        <span>Follow</span>
                    </a>
                </div>
            </div>
            <div className="card-links">
                <div className="d-flex align-items-center justify-content-between text-muted mb-3">
                    <span className="small font-weight-bold text-truncate mr-2">
                        {"{"}evaluation_session.name{"}"}
                    </span>
                    <span className="small">
                        Average{" "}
                        <span className="font-weight-bold text-yellow">
                            <span className="icon icon-rating" /> 4.8
                        </span>
                    </span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="progress flex-fill mr-3" style={{ height: 5 }}>
                        <div className="progress-bar" role="progressbar" style={{ width: "33%" }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={33} />
                    </div>
                    <span className="small text-muted">2/8</span>
                </div>
                <div className="card-actions">
                    <a className="btn btn-lg btn-primary btn-block" href="#">
                        <span className="icon icon-rating is-sm mr-2" />
                        <span>Evaluate</span>
                    </a>
                    <a className="btn btn-lg btn-default btn-block" href="#">
                        <span className="icon icon-bookmark-outline is-sm mr-2" />
                        <span>Follow</span>
                    </a>
                </div>
            </div>
            <div className="card-links">
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
            <div className="card-links">
                <div className="d-flex align-items-center justify-content-between text-muted mb-3">
                    <span className="small font-weight-bold text-truncate mr-2"># coaching sessions</span>
                    <span className="small">
                        Total hours{" "}
                        <span className="font-weight-bold">
                            <span className="icon icon--clock" /> 1h30
                        </span>
                    </span>
                </div>
                <div className="card-actions">
                    <a className="btn btn-lg btn-primary btn-block" href="#">
                        <span className="icon icon-plus-circle is-sm mr-2" />
                        <span>Add session</span>
                    </a>
                    <a className="btn btn-lg btn-default btn-block" href="#">
                        <span>Follow</span>
                    </a>
                </div>
            </div>
        </Card>
    );
};
