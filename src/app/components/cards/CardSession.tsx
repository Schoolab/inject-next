import React from "react";

interface CardSessionProps {}

export const CardSession = ({}: CardSessionProps) => {
    return (
        <div className="container py-8 d-flex flex-column row-gap-2xl">
            <div className="row justify-content-start row-gap-md">
                <h3 className="col-12">Default</h3>
                <div className="col-12 col-md-6 col-xl-4">
                    <div className="card">
                        <div className="card-infos is-linked d-flex align-items-start gap-sm">
                            <div className="thumbnail-relation m-auto">
                                <span className="icon icon--letter is-40px">
                                    <span>P</span>
                                </span>
                                <div className="thumbnail is-oval is-sm is-bordered is-top">
                                    <img src="https://inject-prod.s3.amazonaws.com/images/41c42fb1-35bd-4a31-bf08-3b2267df4b95/sq150.jpeg" />
                                </div>
                            </div>
                            <div className="card-title flex-grow-1">
                                <a href="#" className="h4 mb-none stretched-link d-flex flex-wrap column-gap-2xs">
                                    <span className="line-clamp-1"> Project 24 / expert.name</span>
                                </a>
                                <div className="text-muted small line-clamp-1" >
                                        <span>FirstName LastName</span>
                                        <span> · </span>
                                        <span>FirstName LastName</span>
                                        <span> · </span>
                                        <span>FirstName LastName</span>
                                        <span> · </span>
                                        <span>FirstName LastName </span>
                                 </div>
                                <ul className="text-muted small metas is-list mb-none">
                                    <li>
                                        <span>July 12, 2024</span>
                                    </li>
                                    <li>
                                        <span>4:30 PM</span>
                                    </li>
                                </ul>
                                
                            </div>
                            <div className="dropdown">
                                <a className="btn btn-transparent btn-icon position-relative z-1" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="icon is-20px icon-options" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-left">
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
                <div className="col-12 col-md-6 col-xl-4">
                    <div className="card">
                        <div className="card-infos is-linked d-flex align-items-start gap-sm">
                            <div className="thumbnail-relation m-auto">
                                <div className="thumbnail is-oval is-lg is-bordered">
                                    <img src="https://inject-prod.s3.amazonaws.com/images/41c42fb1-35bd-4a31-bf08-3b2267df4b95/sq150.jpeg" />
                                </div>
                                <span className="icon icon--letter is-24px is-top">
                                    <span>P</span>
                                </span>
                            </div>
                            <div className="card-title flex-grow-1">
                                <a href="#" className="h4 mb-none stretched-link line-clamp-1 d-flex flex-wrap column-gap-2xs">
                                    <span className="line-clamp-1">expert.name / Project 24</span>
                                </a>
                                <ul className="text-muted small metas is-list mb-none">
                                    <li>
                                        <span>July 12, 2024</span>
                                    </li>
                                    <li>
                                        <span>4:30 PM</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="dropdown">
                                <a className="btn btn-transparent btn-icon position-relative z-1" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="icon is-20px icon-options" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-left">
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
            </div>
            <div className="row justify-content-start row-gap-md">
                <h3 className="col-12">Links</h3>
                <div className="col-12 col-md-6 col-xl-4">
                    <div className="card">
                        <div className="card-infos is-linked d-flex align-items-start gap-sm">
                            <div className="thumbnail-relation m-auto">
                                <span className="icon icon--letter is-40px">
                                    <span>P</span>
                                </span>
                            </div>
                            <div className="card-title flex-grow-1">
                                <a href="#" className="h4 mb-none stretched-link line-clamp-1 d-flex flex-wrap column-gap-2xs">
                                    <span className="line-clamp-1">Project 24</span>
                                </a>
                                <ul className="text-muted small metas is-list mb-none">
                                    <li>
                                        <span>July 12, 2024</span>
                                    </li>
                                    <li>
                                        <span>4:30 PM</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="dropdown">
                                <a className="btn btn-transparent btn-icon position-relative z-1" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="icon is-20px icon-options" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-left">
                                    <a className="dropdown-item" href="#">
                                        Show profile
                                    </a>
                                    <a className="dropdown-item" data-toggle="modal" data-target="#modalOpenThread" data-user-id={320} href="#">
                                        Send a message
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card-targets">
                            <div className="card-target">
                                <a href="#" className="stretched-link d-flex align-items-center">
                                    <span className="icon icon-file-document-box is-sm" />
                                    <span>Access to session notes</span>
                                </a>
                                <span className="icon icon-chevron-right is-sm" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-xl-4">
                    <div className="card">
                        <div className="card-infos is-linked d-flex align-items-start gap-sm">
                            <div className="thumbnail-relation m-auto">
                                <div className="thumbnail is-oval is-lg is-bordered">
                                    <img src="https://inject-prod.s3.amazonaws.com/images/41c42fb1-35bd-4a31-bf08-3b2267df4b95/sq150.jpeg" />
                                </div>
                            </div>
                            <div className="card-title flex-grow-1">
                                <a href="#" className="h4 mb-none stretched-link line-clamp-1 d-flex flex-wrap column-gap-2xs">
                                    <span>
                                        {"{"}expert.name{"}"}
                                    </span>
                                </a>
                                <ul className="text-muted small metas is-list mb-none">
                                    <li>
                                        <span>July 1, 2024</span>
                                    </li>
                                    <li>
                                        <span>9 AM (30min)</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="dropdown">
                                <a className="btn btn-transparent btn-icon position-relative z-1" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="icon is-20px icon-options" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-left">
                                    <a className="dropdown-item" href="#">
                                        Show profile
                                    </a>
                                    <a className="dropdown-item" data-toggle="modal" data-target="#modalOpenThread" data-user-id={320} href="#">
                                        Send a message
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card-targets">
                            <div className="card-target">
                                <a href="#" className="stretched-link d-flex align-items-center">
                                    <span className="icon icon-file-document-box is-sm" />
                                    <span>Access to session notes</span>
                                </a>
                                <span className="icon icon-chevron-right is-sm" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
