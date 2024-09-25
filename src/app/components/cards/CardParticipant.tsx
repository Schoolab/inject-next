import React from "react";

interface CardParticipantProps {}

export const CardParticipant = ({}: CardParticipantProps) => {
    return (
        <>
            <div className="container py-8 d-flex flex-column row-gap-2xl">
                <div className="row justify-content-start row-gap-md">
                    <h3 className="col-12">Default</h3>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card">
                            <div className="card-infos is-linked d-flex align-items-start gap-sm">
                                <div className="thumbnail-relation m-auto">
                                    <div className="thumbnail is-oval is-lg is-bordered">
                                        <img src="https://inject-prod.s3.amazonaws.com/images/41c42fb1-35bd-4a31-bf08-3b2267df4b95/sq150.jpeg" />
                                    </div>
                                </div>
                                <div className="card-title flex-grow-1">
                                    <a href="#" className="h4 mb-none stretched-link line-clamp-1 d-flex align-items-center gap-2xs">
                                        <span>Pierre Lemeteil</span>
                                        {/* <span className="badge badge-role is-admin z-2" data-toggle="tooltip" data-placement="top" data-original-title="Admin" data-boundary="window" /> */}
                                    </a>
                                    <p className="text-muted small mb-none">Bordeaux, FR</p>
                                    <div className="badges mt-8px">
                                        <a className="badge is-pill">Design Thinking</a>
                                        <a className="badge is-pill" href="#">
                                            Product
                                        </a>
                                        <span className="text-muted small text-nowrap">+2</span>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <a className="btn btn-transparent btn-icon position-relative z-1" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="icon is-20px icon-options" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#">
                                            Show profile
                                        </a>
                                        <a className="dropdown-item" data-toggle="modal" data-target="#modalOpenThread" data-user-id={320} href="#">
                                            Send a message
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-infos is-linked d-flex align-items-start gap-sm">
                                <div className="thumbnail-relation m-auto">
                                    <div className="thumbnail is-oval is-lg is-bordered">
                                        <img src="https://inject-prod.s3.amazonaws.com/images/47fed806-ad38-46a0-9fd5-feec0e62189e/sq150.jpeg" />
                                    </div>
                                </div>
                                <div className="card-title flex-grow-1">
                                    <a href="#" className="h4 mb-none stretched-link line-clamp-1">
                                        Terence Irving
                                    </a>
                                    <p className="text-muted small mb-none">Réunion, FR</p>
                                    <div className="badges mt-8px">
                                        <a className="badge is-pill">UX/UI design</a>
                                        <a className="badge is-pill" href="#">
                                            Product Design
                                        </a>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <a className="btn btn-transparent btn-icon position-relative z-1" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="icon is-20px icon-options" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#">
                                            Show profile
                                        </a>
                                        <a className="dropdown-item" data-toggle="modal" data-target="#modalOpenThread" data-user-id={320} href="#">
                                            Send a message
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100">
                            <div className="card-infos is-linked d-flex flex-column gap-md pt-32px">
                                <div className="thumbnail-relation m-auto">
                                    <div className="thumbnail is-oval is-2xl is-bordered">
                                        <img src="https://inject-prod.s3.amazonaws.com/images/2216e7ab-c701-4503-83a2-ae7b91afb15d/sq150.jpeg" />
                                    </div>
                                </div>
                                <div className="card-title text-center mb-md">
                                    <a href="#" className="h3 mb-none stretched-link line-clamp-1">
                                        Alexandra Jolly
                                    </a>
                                    <p className="text-muted small mb-none">Paris, FR</p>
                                    <div className="badges mt-16px">
                                        <a className="badge is-pill">UI/UX Design</a>
                                        <a className="badge is-pill" href="#">
                                            Product Design
                                        </a>
                                    </div>
                                </div>
                                <div className="dropdown position-absolute" style={{ top: ".75rem", right: ".75rem" }}>
                                    <a className="btn btn-transparent btn-icon position-relative z-1" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="icon is-20px icon-options" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#">
                                            Show profile
                                        </a>
                                        <a className="dropdown-item" data-toggle="modal" data-target="#modalOpenThread" data-user-id={320} href="#">
                                            Send a message
                                        </a>
                                    </div>
                                </div>
                                <div className="card-actions z-2">
                                    <a href="#" className="btn btn-default btn-lg btn-block">
                                        <span className="icon icon-comment" />
                                        <span>Message</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-8 d-flex flex-column row-gap-2xl">
                <div className="row justify-content-start row-gap-md">
                    <h3 className="col-12">Actions</h3>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100">
                            <div className="card-infos is-linked d-flex flex-column gap-md pt-32px">
                                <div className="thumbnail-relation m-auto">
                                    <div className="thumbnail is-oval is-2xl is-bordered">
                                        <img src="https://inject-prod.s3.amazonaws.com/images/3155b942-7535-4b0b-8ded-97eb42a92e1b/sq150.jpeg" />
                                    </div>
                                </div>
                                <div className="card-title text-center mb-md">
                                    <a href="#" className="h3 mb-none stretched-link line-clamp-1">
                                        Emma Salvarelli
                                    </a>
                                    <p className="text-muted small mb-none">Paris, FR</p>
                                    <div className="badges mt-16px">
                                        <a className="badge is-pill">Data</a>
                                        <a className="badge is-pill" href="#">
                                            Digital marketing
                                        </a>
                                    </div>
                                </div>
                                <div className="dropdown position-absolute" style={{ top: ".75rem", right: ".75rem" }}>
                                    <a className="btn btn-transparent btn-icon position-relative z-1" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="icon is-20px icon-options" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#">
                                            Show profile
                                        </a>
                                        <a className="dropdown-item" data-toggle="modal" data-target="#modalOpenThread" data-user-id={320} href="#">
                                            Send a message
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-links">
                                <div className="d-flex align-items-center justify-content-between text-muted mb-3">
                                    <span className="small font-weight-bold text-truncate mr-2">
                                        {"{"}evaluation_session.name{"}"}
                                    </span>
                                    <span className="small text-nowrap">
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
                                        <span className="icon icon-rating is-sm mr-2" /> Evaluate{" "}
                                    </a>
                                    <a className="btn btn-lg btn-default btn-block" href="#">
                                        {" "}
                                        Participations{" "}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
