import React from "react";
import { Layout } from "../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";

export const ProjectOverview = () => {
    return (
        <Layout shortcutBarExpanded={true}>
            <AppContent>
                <div className="row">
                    <div className="col-12 col-lg-6 col-xl-4 ">
                        <div className="application-section">
                            <div
                                className="cover-container rounded mb-5"
                                style={{
                                    backgroundImage: 'url("img/hero-3.png")',
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                }}
                            />
                            <div className="h1 m-none mb-5">Welcome to My-project overview </div>
                            <div className="m-none mb-5">At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus.</div>
                            <ul className="list-inline list-dotted">
                                <li className="list-inline-item">
                                    <ul className="metas is-list">
                                        <li>
                                            <div className="thumbnail-stack mr-2">
                                                <div className="thumbnail is-oval is-xs">
                                                    <img src="https://inject-intrap.s3.amazonaws.com/images/ade60d22-593c-49cd-a53e-a89b8557a94f/sq150.jpeg" />
                                                </div>
                                            </div>
                                            <a href="/program/71/project/2903/users">
                                                <small className="text-muted">1 member</small>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="list-inline-item">
                                    <ul className="metas is-list">
                                        <li>
                                            <div className="thumbnail-stack mr-2">
                                                <div className="thumbnail is-oval is-xs">
                                                    <img src="https://inject-intrap.s3.amazonaws.com/images/d5b965a6-9324-45d3-aac3-613e623d95d1/sq150.jpeg" />
                                                </div>
                                                <div className="thumbnail is-oval is-xs">
                                                    <img src="https://inject-intrap.s3.amazonaws.com/images/e3af9c9d-3c0f-4fbd-a728-ce925a201011/sq150.jpeg" />
                                                </div>
                                            </div>
                                            <a href="/program/71/project/2903/mentors">
                                                <small className="text-muted">2 Experts</small>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <button className="btn btn-default btn-lg btn-block btn-icon text-decoration-none"  role="button">
                                <span className="icon icon-settings" />
                                <span>Settings</span>
                            </button>
                            <button className="btn btn-default btn-lg btn-block dropdown-toggle d-none d-lg-block" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span>Chat &amp; Video</span>
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item text-decoration-none" href="#" target="_blank">
                                    <span className="icon icon-comment-text-multiple-outline mr-3" />
                                    <span>Team Chat</span>
                                </a>
                                <a className="dropdown-item text-decoration-none" href="#" target="_blank">
                                    <span className="icon icon-video mr-3" />
                                    <span>Team video</span>
                                </a>
                            </div>
                        </div>
                        <div className="application-section">
                            <h3 className="application-section--title"> Your project experts </h3>
                            <p>Project experts are here to guide you during your project.</p>
                            <div className="item is-bordered">
                                <div className="item-row">
                                    <div className="item-row">
                                        <a href="/user/u/0d3e2b04">
                                            <div className="thumbnail is-oval " title="" data-toggle="tooltip" data-original-title="La piscine 2022 overview">
                                                <img src="https://inject-prod.s3.amazonaws.com/images/c5268f41-f646-4fe1-b783-315029757ad2/sq150.png" />
                                            </div>
                                        </a>
                                        <div className="item-content ml-4 py-1">
                                            <a href="/user/u/0d3e2b04" className="item-title h4 font-weight-normal mb-none stretched-link">
                                                Marine Martinez
                                            </a>
                                            <ul className="metas is-list ">
                                                <li> Startup Manager Schoolab </li>
                                                <li> Paris, FR </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="item-options dropdown">
                                        <a className="btn btn-lg btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="icon icon-options" />
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="/user/u/0d3e2b04">
                                                Show profile
                                            </a>
                                            <a className="dropdown-item" data-toggle="modal" data-target="#modalOpenThread" data-user-id={320} href="#">
                                                Send a message
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item is-bordered">
                                <div className="item-row">
                                    <div className="item-row">
                                        <a href="/user/u/158c2ec5">
                                            <div className="thumbnail is-oval " title="" data-toggle="tooltip" data-original-title="La piscine 2022 overview">
                                                <img src="https://inject-prod.s3.amazonaws.com/images/71446890-6864-4521-9548-8f5973075b3a/sq150.jpeg" />
                                            </div>
                                        </a>
                                        <div className="item-content ml-4 py-1">
                                            <a href="/user/u/158c2ec5" className="item-title h4 font-weight-normal mb-none stretched-link">
                                                Pierre Forestier
                                            </a>
                                            <ul className="metas is-list ">
                                                <li> Startup Manager Schoolab </li>
                                                <li> Paris, FR </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="item-options dropdown">
                                        <a className="btn btn-lg btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="icon icon-options" />
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="/user/u/158c2ec5">
                                                Show profile
                                            </a>
                                            <a className="dropdown-item" data-toggle="modal" data-target="#modalOpenThread" data-user-id={1782} href="#">
                                                Send a message
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="application-section">
                            <h3 className="application-section--title"> Project files </h3>
                            <div className="item is-bordered resource mb-3">
                                <div className="item-row">
                                    <div className="item-row cursorLink triggerResource" data-toggle="modal" data-url="/resource/880f7e98-a5fe-4c9e-a7e1-765afd718d6d/load?browse=0" data-target="#resourceLoadingModal">
                                        <div className="item-icon icon icon-file-pdf-box text-danger" />
                                        <div className="item-content ml-3">
                                            <a className="item-title h5 mb-none stretched-link" href="#">
                                                Lorem-ipsum_FR.pdf
                                            </a>
                                            <ul className="item-caption metas small is-list">
                                                <li>application/pdf</li>
                                                <li>
                                                    <span className="icon icon-time">&nbsp;15/10/2021 11:07</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="item-options">
                                        <a className="btn btn-lg btn-transparent btn-icon" href="/resource/880f7e98-a5fe-4c9e-a7e1-765afd718d6d/download">
                                            <span className="icon icon-cloud-download" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item is-bordered resource mb-3">
                                <div className="item-row">
                                    <div className="item-row cursorLink triggerResource" data-toggle="modal" data-url="/resource/880f7e98-a5fe-4c9e-a7e1-765afd718d6d/load?browse=0" data-target="#resourceLoadingModal">
                                        <div className="item-icon icon icon-file-pdf-box text-danger" />
                                        <div className="item-content ml-3">
                                            <a className="item-title h5 mb-none stretched-link" href="#">
                                                Lorem-ipsum_FR.pdf
                                            </a>
                                            <ul className="item-caption metas small is-list">
                                                <li>application/pdf</li>
                                                <li>
                                                    <span className="icon icon-time">&nbsp;15/10/2021 11:07</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="item-options">
                                        <a className="btn btn-lg btn-transparent btn-icon" href="/resource/880f7e98-a5fe-4c9e-a7e1-765afd718d6d/download">
                                            <span className="icon icon-cloud-download" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item is-bordered resource mb-3">
                                <div className="item-row">
                                    <div className="item-row cursorLink triggerResource" data-toggle="modal" data-url="/resource/880f7e98-a5fe-4c9e-a7e1-765afd718d6d/load?browse=0" data-target="#resourceLoadingModal">
                                        <div className="item-icon icon icon-file-pdf-box text-danger" />
                                        <div className="item-content ml-3">
                                            <a className="item-title h5 mb-none stretched-link" href="#">
                                                Lorem-ipsum_FR.pdf
                                            </a>
                                            <ul className="item-caption metas small is-list">
                                                <li>application/pdf</li>
                                                <li>
                                                    <span className="icon icon-time">&nbsp;15/10/2021 11:07</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="item-options">
                                        <a className="btn btn-lg btn-transparent btn-icon" href="/resource/880f7e98-a5fe-4c9e-a7e1-765afd718d6d/download">
                                            <span className="icon icon-cloud-download" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <a className="btn btn-lg btn-block btn-default" href="#">
                                {" "}
                                View all 5 shared files{" "}
                            </a>
                        </div>
                        <div className="application-section">
                            <h4 className="application-section--title"> Project files </h4>
                            <div className="card m-none mb-3 d-flex flex-column text-center align-items-center p-3">
                                <span className="icon icon-notifications-none is-md" />
                                <span className="text-muted small">
                                    {" "}
                                    No shared files to display<span></span>
                                </span>
                            </div>
                            <button className="btn btn-lg btn-block btn-default" >
                                {" "}
                                Go to shared files{" "}
                            </button>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-8">
                        <div className="application-section">
                            <h3 className="application-section--title">Project progression</h3>
                            <div className="row">
                                <div className="col-xl-6 col-lg-12 col-md-6 col-12 mb-5 d-flex align-items-stretch">
                                    <div className="card m-none p-7 flex-fill d-flex flex-row">
                                        <div className="flex-fill text-center">
                                            <p className="h1 ">
                                                15<small className="text-muted"> %</small>
                                            </p>
                                            <small>Project progression</small>
                                        </div>
                                        <div className="flex-fill text-center">
                                            <p className="h1">
                                                160<small className="text-muted"> days</small>
                                            </p>
                                            <small>End of program</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-12 col-md-6 col-12 mb-5 d-flex align-items-stretch">
                                    <div className="card m-none p-7 flex-fill d-flex flex-row">
                                        <div className="flex-fill text-center">
                                            <p className="h1 ">
                                                1<small className="text-muted"> /5</small>
                                            </p>
                                            <small>Objectives</small>
                                        </div>
                                        <div className="flex-fill text-center">
                                            <p className="h1">
                                                3<small className="text-muted"> /9</small>
                                            </p>
                                            <small>Tasks</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="application-section">
                            <h3 className="application-section--title">Project objectives</h3>
                            <ul className="list-inline">
                                <li className="list-inline-item mb-3 mb-lg-0">
                                    <button className="btn btn-default  text-decoration-none"  role="button">
                                        <span>View all</span>
                                    </button>
                                </li>
                                <li className="list-inline-item  mb-3 mb-lg-0">
                                    <button className="btn btn-default bg-transparent text-decoration-none"  role="button">
                                        <span>Todo</span>
                                    </button>
                                </li>
                                <li className="list-inline-item  mb-3 mb-lg-0">
                                    <button className="btn btn-default bg-transparent text-decoration-none"  role="button">
                                        <span>Done</span>
                                    </button>
                                </li>
                                <li className="list-inline-item mb-3 mb-lg-0">
                                    <button className="btn btn-default bg-transparent text-decoration-none"  role="button">
                                        <span>Locked</span>
                                    </button>
                                </li>
                            </ul>
                            <div className="row">
                                <div className="col-xl-4 col-lg-12 col-md-4 col-12 mb-7 d-flex align-items-stretch ">
                                    <div className="item is-bordered m-none p-5 flex-fill d-flex position-relative">
                                        <div className="item-row flex-column align-items-center justify-content-between">
                                            <p className="h5 text-center mb-5">Sign 1st major account</p>
                                            <div className="mb-5 d-flex flex-column align-items-center">
                                                <svg className="progress-circle-container is-xl mb-3" viewBox="0 0 32 32" data-percent={100} style={{ ["--percent" as any] : 100 }}>
                                                    <circle className="progress-circle progress-circle-bg" />
                                                    <circle className="progress-circle progress-circle-percent" />
                                                    <text className="progress-circle-text" x={16} y={15}>
                                                        4/4
                                                    </text>
                                                    <text className="progress-circle-subtext" x={16} y={20}>
                                                        Tasks
                                                    </text>
                                                </svg>
                                                <div className="d-flex flex-column justify-content-center mb-5 text-center">
                                                    <span className="mb-2 small">Due date</span>
                                                    <span className="icon icon-calendar-outline small">&nbsp;15/10/2021</span>
                                                </div>
                                            </div>
                                            <a className="btn btn-lg btn-block btn-default stretched-link" href="#">
                                                {" "}
                                                View tasks{" "}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-12 col-md-4 col-12 mb-7 d-flex align-items-stretch ">
                                    <div className="item is-bordered m-none  p-5 flex-fill d-flex position-relative">
                                        <div className="item-row flex-column align-items-center justify-content-between">
                                            <p className="h5 text-center mb-5">Releasing MVP</p>
                                            <div className="mb-5 d-flex flex-column align-items-center">
                                                <svg className="progress-circle-container is-xl mb-3" viewBox="0 0 32 32" data-percent={20} style={{ ["--percent" as any] : 20 }}>
                                                    <circle className="progress-circle progress-circle-bg" />
                                                    <circle className="progress-circle progress-circle-percent" />
                                                    <text className="progress-circle-text" x={16} y={15}>
                                                        1/4
                                                    </text>
                                                    <text className="progress-circle-subtext" x={16} y={20}>
                                                        Tasks
                                                    </text>
                                                </svg>
                                                <div className="d-flex flex-column justify-content-center mb-5 text-center">
                                                    <span className="mb-2 small">Due date</span>
                                                    <span className="icon icon-calendar-outline small">&nbsp;15/10/2021</span>
                                                </div>
                                            </div>
                                            <a className="btn btn-lg btn-block btn-default stretched-link" href="#">
                                                {" "}
                                                View tasks{" "}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-12 col-md-4 col-12 mb-7 d-flex align-items-stretch ">
                                    <div className="item is-bordered m-none  p-5 flex-fill d-flex position-relative">
                                        <div className="item-row flex-column align-items-center justify-content-between">
                                            <p className="h5 text-center mb-5">Generating 30 leads</p>
                                            <div className="mb-5 d-flex flex-column align-items-center">
                                                <svg className="progress-circle-container is-xl mb-3" viewBox="0 0 32 32" data-percent={0} style={{ ["--percent" as any] : 0 }}>
                                                    <circle className="progress-circle progress-circle-bg" />
                                                    <circle className="progress-circle progress-circle-percent" />
                                                    <text className="progress-circle-text" x={16} y={15}>
                                                        0/4
                                                    </text>
                                                    <text className="progress-circle-subtext" x={16} y={20}>
                                                        Tasks
                                                    </text>
                                                </svg>
                                                <div className="d-flex flex-column justify-content-center mb-5 text-center">
                                                    <span className="mb-2 small">Due date</span>
                                                    <span className="icon icon-calendar-outline small">&nbsp;15/10/2021</span>
                                                </div>
                                            </div>
                                            <a className="btn btn-lg btn-block btn-default stretched-link" href="#">
                                                {" "}
                                                View tasks{" "}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-12 col-md-4 col-12 mb-7 d-flex align-items-stretch ">
                                    <div className="item is-bordered m-none  p-5 flex-fill d-flex position-relative">
                                        <div className="item-row flex-column align-items-center justify-content-between">
                                            <p className="h5 text-center mb-5">Recruitment of work experience students</p>
                                            <div className="mb-5 d-flex flex-column align-items-center">
                                                <svg className="progress-circle-container is-xl mb-3" viewBox="0 0 32 32" data-percent={0} style={{ ["--percent" as any] : 0 }}>
                                                    <circle className="progress-circle progress-circle-bg" />
                                                    <circle className="progress-circle progress-circle-percent" />
                                                    <text className="progress-circle-text" x={16} y={15}>
                                                        0/4
                                                    </text>
                                                    <text className="progress-circle-subtext" x={16} y={20}>
                                                        Tasks
                                                    </text>
                                                </svg>
                                                <div className="d-flex flex-column justify-content-center mb-5 text-center">
                                                    <span className="mb-2 small">Due date</span>
                                                    <span className="icon icon-calendar-outline small">&nbsp;15/10/2021</span>
                                                </div>
                                            </div>
                                            <button className="btn btn-block btn-default" disabled>
                                                {" "}
                                                View tasks{" "}
                                            </button>
                                        </div>
                                        <div className="overlay rounded d-flex justify-content-center align-items-center flex-column text-center p-7">
                                            <span className="text-white icon icon-lock is-md mb-3" />
                                            <p className="text-white small"> Finish previous taks to unlock this one</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-12 col-md-4 col-12 mb-7 d-flex align-items-stretch ">
                                    <div className="item is-bordered m-none  p-5 flex-fill d-flex position-relative">
                                        <div className="item-row flex-column align-items-center justify-content-between ">
                                            <p className="h5 text-center mb-5">Lorem Ipsum</p>
                                            <div className="mb-5 d-flex flex-column align-items-center">
                                                <svg className="progress-circle-container is-xl mb-3" viewBox="0 0 32 32" data-percent={0} style={{ ["--percent" as any] : 0 }}>
                                                    <circle className="progress-circle progress-circle-bg" />
                                                    <circle className="progress-circle progress-circle-percent" />
                                                    <text className="progress-circle-text" x={16} y={15}>
                                                        0/4
                                                    </text>
                                                    <text className="progress-circle-subtext" x={16} y={20}>
                                                        Tasks
                                                    </text>
                                                </svg>
                                                <div className="d-flex flex-column justify-content-center mb-5 text-center">
                                                    <span className="mb-2 small">Due date</span>
                                                    <span className="icon icon-calendar-outline small">&nbsp;15/10/2021</span>
                                                </div>
                                            </div>
                                            <button className="btn btn-block btn-default" disabled>
                                                {" "}
                                                View tasks{" "}
                                            </button>
                                        </div>
                                        <div className="overlay rounded d-flex justify-content-center align-items-center flex-column text-center p-7">
                                            <span className="text-white icon icon-lock is-md mb-3" />
                                            <p className="text-white small"> Finish previous taks to unlock this one</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="application-section">
                            <h3 className="application-section--title">
                                <span>Project newsfeed</span>
                            </h3>
                            <div id="challenge-blogposts-container">
                                <a className="message mb-5 startMessageButton" href="/program/75/manage/updates/new-update">
                                    <span className="thumbnail is-oval is-lg" data-toggle="tooltip" title="" data-original-title="John Doe">
                                        <div className="thumbnail is-oval">
                                            <span className="icon icon-account" />
                                        </div>
                                    </span>
                                    <div className="message-body">
                                        <div className="message-list">
                                            <div className="message-row">
                                                <input type="text" className="form-control message-content bg-white cursorLink" readOnly placeholder="Start a new post..." />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <div className="blogPostsWall" data-url="/program/75/workspace/updates/wall?preview=3">
                                    <div className="card m-none p-5 wallLoader d-none">
                                        <div className="pb-0 pt-3 pt-sm-5">
                                            <div className="item is-wide is-static">
                                                <h4 className="text-center w-100 mb-3">Loading...</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cardsContainer d-flex flex-column gap-md">
                                        <div className="card blogPostCard">
                                            <div className="card-infos d-flex flex-column align-items-stretch gap-md p-24px">
                                                <div className="d-flex flex-grow-1 gap-sm">
                                                    <div className="thumbnail-relation m-auto">
                                                        <a href="#" className="thumbnail is-oval is-lg is-bordered">
                                                            <img src="https://inject-prod.s3.amazonaws.com/images/71446890-6864-4521-9548-8f5973075b3a/sq150.jpeg" />
                                                        </a>
                                                    </div>
                                                    <div className="card-title flex-grow-1">
                                                        <a href="#" className="h4 mb-none line-clamp-1 d-flex align-items-center gap-2xs">
                                                            <span>Pierre Forestier</span>
                                                            <span className="badge badge-role is-manager z-2" data-toggle="tooltip" data-placement="top" data-original-title="Program Manager" data-boundary="window" />
                                                        </a>
                                                        <ul className="text-muted small metas is-list mb-none">
                                                            <li>
                                                                <a href="#" className="text-muted text-decoration-none">
                                                                    Program Manager, Schoolab
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <span>May 13</span>
                                                            </li>
                                                            <li>
                                                                <span>3:39 PM</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="dropdown z-2">
                                                        <a className="btn btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <span className="icon is-20px icon-options" />
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a className="dropdown-item" href="#">
                                                                <span>Open post</span>
                                                            </a>
                                                            <div className="dropdown-divider" />
                                                            <a className="dropdown-item" href="#">
                                                                <span className="dropdown-item--label">Open profile</span>
                                                                <span className="dropdown-item--shortcut icon icon-new-tab" />
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                <span className="dropdown-item--label">Open program</span>
                                                                <span className="dropdown-item--shortcut icon icon-new-tab" />
                                                            </a>
                                                            <div className="dropdown-divider" />
                                                            <a className="dropdown-item" href="#">
                                                                <span>Edit</span>
                                                            </a>
                                                            <a className="dropdown-item is-danger" href="#">
                                                                <span>Delete</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column gap-md">
                                                    <p>Hello,</p>
                                                    <p>Un petit message pour vous souhaiter la bienvenue parmi le programme d'incubation "La Piscine". Je serais ton interlocuteur privilégié pour ce programme, n'hésitez surtout pas à me solliciter sur slack ou par mail : pierre.forestier@theschoolab.com.&nbsp;</p>
                                                    <p>Et pour rappel, ce programme va te permettre de te lancer rapidement, valide...</p>
                                                    <a href="#">Read more -&gt;</a>
                                                </div>
                                                <div className="gallery">
                                                    <div className="gallery-photo embed-responsive embed-responsive-16by9">
                                                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/6cheowg6Rmk?si=Zi-3gDOnCZoEyk9m" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between flex-nowrap">
                                                    <div className="d-flex gap-xs flex-fill">
                                                        <a href="#" className="btn btn-secondary active">
                                                            <span className="icon icon-thumb-up" />
                                                            <span>9</span>
                                                        </a>
                                                        <a href="#" className="btn btn-secondary">
                                                            <span className="icon icon-comment" />
                                                            <span>4</span>
                                                        </a>
                                                    </div>
                                                    <a href="#" className="btn btn-secondary" data-toggle="tooltip" data-placement="top" data-original-title="Click to copy link" data-boundary="window">
                                                        <span className="icon icon-share" />
                                                        <span>Copy link</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pagerContainer mt-5 d-none">
                                        <button className="btn btn-lg btn-block btn-default pagerLoadMoreButton">
                                            Load more
                                            <span className="icon icon-loading icon-spin ml-1 d-none buttonLoader" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <a id="challenge-blogposts-page-btn" className="btn btn-lg btn-block btn-default mt-3 d-none" href="/program/75/updates">
                                Show more
                            </a>
                        </div>
                    </div>
                </div>
            </AppContent>
        </Layout>
    );
};
