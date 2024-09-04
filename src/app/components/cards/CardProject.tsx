import React from "react";

interface CardProjectProps {}

export const CardProject = ({}: CardProjectProps) => {
    return (
        <div className="container py-8 d-flex flex-column row-gap-2xl">
            <div className="row justify-content-start row-gap-md">
                <h3 className="col-12">Default</h3>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card h-100">
                        <div className="card-infos is-linked">
                            <div className="card-banner">
                                <div className="card-image">
                                    <picture>
                                        <img src="https://inject-prod.s3.amazonaws.com/challenge/cover/pink_co900x600.png" alt="" />
                                    </picture>
                                </div>
                            </div>
                            <div className="card-title d-flex align-items-center gap-2xs mb-none">
                                <span className="icon icon-pin is-24px z-2" data-toggle="tooltip" data-placement="top" data-original-title="Pinned projects are visible on the organization Hub" data-boundary="window" />
                                <a href="#" className="h3 mb-none stretched-link line-clamp-1">
                                    TidyCards
                                </a>
                            </div>
                            <div className="d-flex justify-content-between align-items-end flex-nowrap gap-0">
                                <div className="d-flex align-items-center flex-wrap flex-lg-nowrap flex-shrink-1 gap-xs overflow-hidden">
                                    <div className="d-flex gap-2xs text-muted small z-2" data-toggle="tooltip" data-placement="top" data-original-title="<ul class='list-unstyled d-flex flex-column gap-2xs m-none'><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/2216e7ab-c701-4503-83a2-ae7b91afb15d/sq150.jpeg'></div><span>Alexandra Jolly</span></li></ul>" data-html="true" data-boundary="window">
                                        <span className="icon icon-members is-xs" />
                                        <span className="text-nowrap">1 member</span>
                                    </div>
                                    <div className="badges flex-nowrap">
                                        <div className="badge is-pill">Community</div>
                                        <div className="badge is-pill">Content</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card h-100">
                        <div className="card-infos is-linked">
                            <div className="card-banner">
                                <div className="card-image bg-highlight">
                                    <span className="icon icon--letter is-64px position-absolute top-50 start-50 translate-middle">
                                        <span>P</span>
                                    </span>
                                </div>
                            </div>
                            <div className="card-title d-flex align-items-center gap-2xs mb-none">
                                <span className="icon icon-pin is-24px z-2" data-toggle="tooltip" data-placement="top" data-original-title="Pinned projects are visible on the organization Hub" data-boundary="window" />
                                <a href="#" className="h3 mb-none stretched-link line-clamp-1">
                                    Project 24
                                </a>
                            </div>
                            <div className="d-flex justify-content-between align-items-end flex-nowrap gap-0">
                                <div className="d-flex align-items-center flex-wrap flex-lg-nowrap flex-shrink-1 gap-xs overflow-hidden">
                                    <div
                                        className="d-flex gap-2xs text-muted small z-2"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        data-original-title="<ul class='list-unstyled d-flex flex-column gap-2xs m-none'><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/2216e7ab-c701-4503-83a2-ae7b91afb15d/sq150.jpeg'></div><span>Alexandra Jolly</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/47fed806-ad38-46a0-9fd5-feec0e62189e/sq150.jpeg'></div><span>Terence Irving</span></li></ul>"
                                        data-html="true"
                                        data-boundary="window"
                                    >
                                        <span className="icon icon-members is-xs" />
                                        <span className="text-nowrap">2 members</span>
                                    </div>
                                    <div className="badges flex-nowrap">
                                        <div className="badge is-pill">Impact</div>
                                        <div className="badge is-pill">DEI</div>
                                        <span className="text-muted small text-nowrap">+2</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card h-100">
                        <div className="card-infos is-linked">
                            <div className="card-banner">
                                <div className="card-image bg-highlight">
                                    <span className="icon icon--letter is-64px position-absolute top-50 start-50 translate-middle">
                                        <span>A</span>
                                    </span>
                                </div>
                            </div>
                            <div className="card-title d-flex align-items-center gap-2xs mb-none">
                                <span className="icon icon-pin is-24px z-2" data-toggle="tooltip" data-placement="top" data-original-title="Pinned projects are visible on the organization Hub" data-boundary="window" />
                                <a href="#" className="h3 mb-none stretched-link line-clamp-1">
                                    ACME
                                </a>
                            </div>
                            <div className="d-flex justify-content-between align-items-end flex-nowrap gap-0">
                                <div className="d-flex align-items-center flex-wrap flex-lg-nowrap flex-shrink-1 gap-xs overflow-hidden">
                                    <div
                                        className="d-flex gap-2xs text-muted small z-2"
                                        data-toggle="tooltip"
                                        data-placement="bottom"
                                        data-original-title="<ul class='list-unstyled d-flex flex-column gap-2xs m-none'><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/2216e7ab-c701-4503-83a2-ae7b91afb15d/sq150.jpeg'></div><span>Alexandra Jolly</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/3155b942-7535-4b0b-8ded-97eb42a92e1b/sq150.jpeg'></div><span>Emma Salvarelli</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/41c42fb1-35bd-4a31-bf08-3b2267df4b95/sq150.jpeg'></div><span>Pierre Lemeteil</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/47fed806-ad38-46a0-9fd5-feec0e62189e/sq150.jpeg'></div><span>Terence Irving</span></li><li><span>+ 4 more</span></li></ul>"
                                        data-html="true"
                                        data-boundary="window"
                                    >
                                        <span className="icon icon-members is-xs" />
                                        <span className="text-nowrap">8 members</span>
                                    </div>
                                    <div className="badges flex-nowrap">
                                        <div className="badge is-pill">Community</div>
                                        <div className="badge is-pill">SaaS</div>
                                        <span className="text-muted small text-nowrap">+4</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-start row-gap-md">
                <h3 className="col-12">Links</h3>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card h-100">
                        <div className="card-infos is-linked">
                            <div className="card-banner">
                                <div className="card-image">
                                    <picture>
                                        <img src="https://inject-prod.s3.amazonaws.com/challenge/cover/pink_co900x600.png" alt="" />
                                    </picture>
                                </div>
                            </div>
                            <div className="card-title d-flex align-items-center gap-2xs mb-none">
                                <a href="#" className="h3 mb-none stretched-link line-clamp-1">
                                    TidyCards
                                </a>
                            </div>
                            <div className="d-flex justify-content-between align-items-end flex-nowrap gap-0">
                                <div className="d-flex align-items-center flex-wrap flex-lg-nowrap flex-shrink-1 gap-xs overflow-hidden">
                                    <div className="d-flex gap-2xs text-muted small">
                                        <span className="icon icon-members is-xs" />
                                        <span className="text-nowrap">1 member</span>
                                    </div>
                                    <div className="badges flex-nowrap">
                                        <div className="badge is-pill">Community</div>
                                        <div className="badge is-pill">Content</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-targets">
                            <div className="card-target">
                                <a href="#" className="stretched-link d-flex align-items-center">
                                    <span className="icon icon-settings is-sm" />
                                    <span>Manage project</span>
                                </a>
                                <span className="icon icon-chevron-right is-sm" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-start row-gap-md">
                <h3 className="col-12">Actions</h3>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card h-100">
                        <div className="card-infos is-linked">
                            <div className="card-banner">
                                <div className="card-image">
                                    <picture>
                                        <img src="https://inject-prod.s3.amazonaws.com/challenge/cover/pink_co900x600.png" alt="" />
                                    </picture>
                                </div>
                            </div>
                            <div className="card-title d-flex align-items-center gap-2xs mb-none">
                                <a href="#" className="h3 mb-none stretched-link line-clamp-1">
                                    TidyCards
                                </a>
                            </div>
                            <div className="d-flex justify-content-between align-items-end flex-nowrap gap-0">
                                <div className="d-flex align-items-center flex-wrap flex-lg-nowrap flex-shrink-1 gap-xs overflow-hidden">
                                    <div className="d-flex gap-2xs text-muted small">
                                        <span className="icon icon-members is-xs" />
                                        <span className="text-nowrap">1 member</span>
                                    </div>
                                    <div className="badges flex-nowrap">
                                        <div className="badge is-pill">Community</div>
                                        <div className="badge is-pill">Content</div>
                                    </div>
                                </div>
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
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card h-100">
                        <div className="card-infos is-linked">
                            <div className="card-banner">
                                <div className="card-image">
                                    <picture>
                                        <img src="https://inject-prod.s3.amazonaws.com/challenge/cover/pink_co900x600.png" alt="" />
                                    </picture>
                                </div>
                            </div>
                            <div className="card-title d-flex align-items-center gap-2xs mb-none">
                                <a href="#" className="h3 mb-none stretched-link line-clamp-1">
                                    TidyCards
                                </a>
                            </div>
                            <div className="d-flex justify-content-between align-items-end flex-nowrap gap-0">
                                <div className="d-flex align-items-center flex-wrap flex-lg-nowrap flex-shrink-1 gap-xs overflow-hidden">
                                    <div className="d-flex gap-2xs text-muted small">
                                        <span className="icon icon-members is-xs" />
                                        <span className="text-nowrap">1 member</span>
                                    </div>
                                    <div className="badges flex-nowrap">
                                        <div className="badge is-pill">Community</div>
                                        <div className="badge is-pill">Content</div>
                                    </div>
                                </div>
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
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card h-100">
                        <div className="card-infos is-linked">
                            <div className="card-banner">
                                <div className="card-image">
                                    <picture>
                                        <img src="https://inject-prod.s3.amazonaws.com/challenge/cover/pink_co900x600.png" alt="" />
                                    </picture>
                                </div>
                                <div className="card-external">
                                    <div className="icon icon-program is-16px ml-n6px" />
                                    <div className="small font-weight-bold text-truncate mx-2">CPi Concept</div>
                                </div>
                            </div>
                            <div className="card-title d-flex align-items-center gap-2xs mb-none">
                                <a href="#" className="h3 mb-none stretched-link line-clamp-1">
                                    TidyCards
                                </a>
                            </div>
                            <div className="d-flex justify-content-between align-items-end flex-nowrap gap-0">
                                <div className="d-flex align-items-center flex-wrap flex-lg-nowrap flex-shrink-1 gap-xs overflow-hidden">
                                    <div className="d-flex gap-2xs text-muted small">
                                        <span className="icon icon-members is-xs" />
                                        <span className="text-nowrap">1 member</span>
                                    </div>
                                    <div className="badges flex-nowrap">
                                        <div className="badge is-pill">Community</div>
                                        <div className="badge is-pill">Content</div>
                                    </div>
                                </div>
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
                                    <span className="icon icon-bookmark is-sm mr-2" />
                                    <span>Following</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
