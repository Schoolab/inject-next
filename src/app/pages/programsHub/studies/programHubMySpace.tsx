import React from "react";
import { Layout } from "../../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { Button } from "@/app/components/Button";
import { CardEvent } from "@/app/components/cards/CardEvent";
import { FiltersHub } from "@/app/components/filters/FiltersHub";

export const programHubMySpace = () => {
    return (
        <Layout shortcutBarExpanded={false} showShortcutbar={false}>
            <AppContent showSubnav={false} showTitle={false} showBreadcrumb={false} sections="cards">
                <div className="row ">
                    <div className="col-12 col-lg-6 col-xl-8 ">
                        <div className="application-section">
                            <h3 className="application-section--title">
                                <span>Programs (3)</span>
                            </h3>
                            <div className="items row card-row">
                                <div className="col-12 d-flex flex-column gap-md">
                                    <FiltersHub />
                                </div>

                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                    <div className="card h-100">
                                        <div className="card-infos is-linked">
                                            <div className="card-banner">
                                                <div className="card-image">
                                                    <picture>
                                                        <img src="https://inject-prod.s3.amazonaws.com/challenge/cover/pink_co900x600.png" alt="" />
                                                    </picture>
                                                </div>
                                                <div className="card-external">
                                                    <div className="small">External: </div>
                                                    <div className="small font-weight-bold text-truncate mx-2">
                                                        {"{"}
                                                        {"{"}Organization name {"}"}
                                                        {"}"}
                                                    </div>
                                                    <div className="small icon icon-new-tab" />
                                                </div>
                                            </div>
                                            <div className="card-title">
                                                <a href="/program/142/details" className="h3 mb-none stretched-link line-clamp-1">
                                                    {" "}
                                                    {"{"}
                                                    {"{"}Program name{"}"}
                                                    {"}"}
                                                </a>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2xs">
                                                <div className="d-flex align-items-center flex-wrap">
                                                    <div className="badges mr-3">
                                                        <div className="badge is-pill">Food</div>
                                                        <a className="badge is-pill" href="#">
                                                            Plastic
                                                        </a>
                                                        <a className="badge is-pill" href="#">
                                                            DEI
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="badges">
                                                    <div className="badge is-pill is-open">
                                                        <span className="icon icon-status-filled"></span>
                                                        <span>Open</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-targets">
                                            <div className="card-target">
                                                <a href="#" className="stretched-link d-flex align-items-center">
                                                    <span className="icon icon-information is-sm mr-2" />
                                                    Public page{" "}
                                                </a>
                                                <span className="icon icon-chevron-right is-sm" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                    <div className="card h-100">
                                        <div className="card-infos is-linked">
                                            <div className="card-banner">
                                                <div className="card-image">
                                                    <picture>
                                                        <img src="https://inject-prod.s3.amazonaws.com/images/f5e0a581-76e3-413a-a462-88dc98361172/co1800x1200.png" alt="" />
                                                    </picture>
                                                </div>
                                                <div className="card-external">
                                                    <div className="small">External: </div>
                                                    <div className="small font-weight-bold text-truncate mx-2">
                                                        {"{"}
                                                        {"{"}Organization name{"}"}
                                                        {"}"}
                                                    </div>
                                                    <div className="small icon icon-new-tab" />
                                                </div>
                                            </div>
                                            <div className="card-title">
                                                <a href="/program/142/details" className="h3 mb-none stretched-link line-clamp-1">
                                                    {" "}
                                                    {"{"}
                                                    {"{"}Program name{"}"}
                                                    {"}"}
                                                </a>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2xs">
                                                <div className="d-flex align-items-center flex-wrap">
                                                    <div className="badges mr-3">
                                                        <div className="badge is-pill">Food</div>
                                                        <a className="badge is-pill" href="#">
                                                            Plastic
                                                        </a>
                                                        <a className="badge is-pill" href="#">
                                                            DEI
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="badges">
                                                    <div className="badge is-pill is-open">
                                                        <span className="icon icon-status-filled"></span>
                                                        <span>Open</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-links">
                                            <div className="d-flex align-items-center justify-content-between text-muted mb-3">
                                                <span className="small font-weight-bold">Join the program</span>
                                                <span className="small">
                                                    Canditates{" "}
                                                    <span className="font-weight-bold">
                                                        <span className="icon icon-account" /> 48
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="card-actions">
                                                <a className="btn btn-lg btn-primary btn-block" href="#">
                                                    {" "}
                                                    Join{" "}
                                                </a>
                                                <a className="btn btn-lg btn-default btn-block" href="#">
                                                    {" "}
                                                    Learn more{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                    <div className="card h-100">
                                        <div className="card-infos is-linked">
                                            <div className="card-banner">
                                                <div className="card-image">
                                                    <picture>
                                                        <img src="https://inject-prod.s3.amazonaws.com/images/b9751cfd-f746-4963-af9e-23f335a5792f/co1920x640.png" alt="" />
                                                    </picture>
                                                </div>
                                                <div className="card-external">
                                                    <div className="small">External: </div>
                                                    <div className="small font-weight-bold text-truncate mx-2">
                                                        {"{"}
                                                        {"{"}Organization name{"}"}
                                                        {"}"}
                                                    </div>
                                                    <div className="small icon icon-new-tab" />
                                                </div>
                                            </div>
                                            <div className="card-title">
                                                <a href="/program/142/details" className="h3 mb-none stretched-link line-clamp-1">
                                                    {" "}
                                                    {"{"}
                                                    {"{"}Program name{"}"}
                                                    {"}"}
                                                </a>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2xs">
                                                <div className="d-flex align-items-center flex-wrap">
                                                    <div className="badges mr-3">
                                                        <div className="badge is-pill">Food</div>
                                                        <a className="badge is-pill" href="#">
                                                            Plastic
                                                        </a>
                                                        <a className="badge is-pill" href="#">
                                                            DEI
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="badges">
                                                    <div className="badge is-pill is-progress">
                                                        <span className="icon icon-status-dashed"></span>
                                                        <span>In progress</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-targets">
                                            <div className="card-target">
                                                <a href="#" className="stretched-link d-flex align-items-center">
                                                    <span className="icon icon-settings is-sm mr-2" />
                                                    Manage program{" "}
                                                </a>
                                                <span className="icon icon-chevron-right is-sm" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                    <div className="card h-100">
                                        <div className="card-infos is-linked">
                                            <div className="card-banner">
                                                <div className="card-image">
                                                    <picture>
                                                        <img src="https://inject-prod.s3.amazonaws.com/images/d5623bc5-fafa-49f4-8f9c-763d1f12fe44/co1920x640.png" alt="" />
                                                    </picture>
                                                </div>
                                                <div className="card-external">
                                                    <div className="small">External: </div>
                                                    <div className="small font-weight-bold text-truncate mx-2">
                                                        {"{"}
                                                        {"{"}Organization name with a super long text{"}"}
                                                        {"}"}
                                                    </div>
                                                    <div className="small icon icon-new-tab" />
                                                </div>
                                            </div>
                                            <div className="card-title">
                                                <a href="/program/142/details" className="h3 mb-none stretched-link line-clamp-1">
                                                    {" "}
                                                    {"{"}
                                                    {"{"}Program name{"}"}
                                                    {"}"}
                                                </a>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2xs">
                                                <div className="mr-3 mb-3">
                                                    <span className="text-muted small text-nowrap">No category...</span>
                                                </div>
                                                <div className="badges">
                                                    <div className="badge is-pill is-closed">
                                                        <span className="icon icon-minus-circle" />
                                                        <span>Closed</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                    <div className="card h-100">
                                        <div className="card-infos is-linked">
                                            <div className="card-banner">
                                                <div className="card-image">
                                                    <picture>
                                                        <img src="https://inject-prod.s3.amazonaws.com/images/bc84f5cc-c5be-45ac-a0f8-f2ad3b7efa91/co1800x1200.jpeg" alt="" />
                                                    </picture>
                                                </div>
                                                <div className="card-external">
                                                    <div className="small">External: </div>
                                                    <div className="small font-weight-bold text-truncate mx-2">
                                                        {"{"}
                                                        {"{"}Organization name with a super long text{"}"}
                                                        {"}"}
                                                    </div>
                                                    <div className="small icon icon-new-tab" />
                                                </div>
                                            </div>
                                            <div className="card-title">
                                                <a href="/program/142/details" className="h3 mb-none stretched-link line-clamp-1">
                                                    {" "}
                                                    {"{"}
                                                    {"{"}Program name{"}"}
                                                    {"}"}
                                                </a>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2xs">
                                                <div className="d-flex align-items-center flex-wrap">
                                                    <div className="badges mr-3">
                                                        <div className="badge is-pill">Food</div>
                                                    </div>
                                                </div>
                                                <div className="badges">
                                                    <div className="badge is-pill is-draft">
                                                        <span className="icon icon-status-bordered"></span>
                                                        <span>Draft</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="application-section">
                            <div className="d-flex flex-lg-row flex-column align-items-start">
                                <h3 className="application-section--title flex-fill"> Coaching sessions </h3>
                                <Button size="sm" iconStartName="plus-circle" type="default" label="Add Session" />
                            </div>
                            <div className="d-flex gap-xs flex-wrap align-items-stretch align-content-stretch">
                                <div className="bg-light rounded p-5 d-flex flex-column flex-fill-0">
                                    <small className=" text-nowrap">Coaching</small>
                                    <span className="h1 mb-0 text-nowrap ">
                                        2<small className="text-muted"> sessions</small>
                                    </span>
                                </div>
                                <div className="bg-light rounded p-5 d-flex flex-column flex-fill-0">
                                    <small className="text-nowrap">Total time</small>
                                    <span className="h1 mb-0 text-nowrap ">
                                        1<small className="text-muted"> hour</small>
                                    </span>
                                </div>
                            </div>
                            <div className="cards-list">
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
                                            <div className="text-muted small line-clamp-1">
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
                                            <div className="text-muted small line-clamp-1">
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

                            <a className="btn btn-lg btn-block btn-default" href="#">
                                {" "}
                                View all{" "}
                            </a>
                        </div>
                        <div className="application-section">
                            <div className="d-flex flex-lg-row flex-column align-items-start">
                                <h3 className="application-section--title flex-fill"> Coaching sessions </h3>
                            </div>

                            <div className="bg-white border rounded px-40px py-40px d-flex flex-column align-items-center gap-0px text-center">
                                <div className="d-flex pb-16px">
                                    <span className="icon icon-account-supervisor-circle is-24px" />
                                </div>
                                <div className="d-flex flex-column gap-2xs">
                                    <p className="font-weight-bold">No sessions</p>
                                    <p className="small text-muted">Your coaching sessions will be listed here.</p>
                                </div>
                                <div className="d-flex pt-32px">
                                    <a href="#" className="btn btn-lg btn-default">
                                        <span className="icon icon-plus-circle" />
                                        <span>Add Session</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="application-section">
                            <h3 className="application-section--title">
                                <span>Expert newsfeed</span>
                            </h3>
                            <div id="challenge-blogposts-container">
                                <a className="message mb-3 startMessageButton" href="/program/75/manage/updates/new-update">
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
                                                    <div className="dropdown">
                                                        <a className="btn btn-transparent btn-icon position-relative z-1" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                                    {/* <a href="#" className="btn btn-secondary" data-toggle="tooltip" data-placement="top" data-original-title="Click to copy link" data-boundary="window">
                                                        <span className="icon icon-share" />
                                                        <span>Copy link</span>
                                                    </a> */}
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
                        <div className="application-section">
                            <h3 className="application-section--title">
                                <span>Mentored projects</span>
                            </h3>
                            <p>You can perform ad hoc coaching sessions and also mentor projects to help them reach their objectives.</p>
                            <div className="row card-row">
                                <div className="col-12 col-md-6 col-lg-12 col-xl-6 mb-3">
                                    <div className="card">
                                        <div className="card-infos is-linked">
                                            <div className="card-banner">
                                                <div className="card-image">
                                                    <picture>
                                                        <img src="https://inject-demo.s3.amazonaws.com/images/c17572e7-fb1e-48ac-b80d-bd77c815ed02/co1140x380.jpeg" alt="" />
                                                    </picture>
                                                </div>
                                            </div>
                                            <div className="card-title d-flex align-items-center gap-2xs mb-none">
                                                <a href="#" className="h3 mb-none stretched-link line-clamp-1">
                                                    Equality for all
                                                </a>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-end flex-nowrap gap-0">
                                                <div className="d-flex align-items-center flex-wrap flex-lg-nowrap flex-shrink-1 gap-xs overflow-hidden">
                                                    <div className="d-flex gap-2xs text-muted small">
                                                        <span className="icon icon-members is-xs" />
                                                        <span className="text-nowrap">2 members</span>
                                                    </div>
                                                    <div className="badges flex-nowrap">
                                                        <div className="badge is-pill">2words tag</div>
                                                        <div className="badge is-pill">2words tag</div>
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
                                                    <span className="icon icon-bookmark-outline is-sm mr-2" />
                                                    <span>Follow</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-12 col-xl-6 mb-3">
                                    <div className="card">
                                        <div className="card-infos is-linked">
                                            <div className="card-banner">
                                                <div className="card-image">
                                                    <picture>
                                                        <img src="https://inject-demo.s3.amazonaws.com/images/7241300b-a008-4101-b202-7f65d47c7382/co1140x380.jpeg" alt="" />
                                                    </picture>
                                                </div>
                                            </div>
                                            <div className="card-title d-flex align-items-center gap-2xs mb-none">
                                                <a href="#" className="h3 mb-none stretched-link line-clamp-1">
                                                    Wind turbine
                                                </a>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-end flex-nowrap gap-0">
                                                <div className="d-flex align-items-center flex-wrap flex-lg-nowrap flex-shrink-1 gap-xs overflow-hidden">
                                                    <div className="d-flex gap-2xs text-muted small">
                                                        <span className="icon icon-members is-xs" />
                                                        <span className="text-nowrap">2 members</span>
                                                    </div>
                                                    <div className="badges flex-nowrap">
                                                        <div className="badge is-pill">2words tag</div>
                                                        <div className="badge is-pill">2words tag</div>
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
                                                    <span className="icon icon-bookmark-outline is-sm mr-2" />
                                                    <span>Follow</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="btn btn-lg btn-block btn-default" href="#">
                                {" "}
                                View all{" "}
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-4">
                        <div className="application-section">
                            <h3 className="application-section--title">Activities</h3>
                            <div className="cards">
                                <div className="card pt-2">
                                <div className="card-external"><div className="icon icon-program is-16px ml-n6px"></div><div className="small font-weight-bold text-truncate mx-2">Program Name</div></div>
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

                                            <ul className="text-muted small metas is-list mb-none">
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
                                                <li>
                                                    <span>July 12, 2024</span>
                                                </li>
                                                <li>
                                                    <span>4:30 PM</span>
                                                </li>
                                                   <li>
                                                    <span>4:30 PM</span>
                                                </li>
                                            </ul>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="application-section">
                            <h3 className="application-section--title">Activities</h3>
                            <div className="d-flex gap-xs flex-wrap align-items-stretch align-content-stretch">
                                <div className="bg-light rounded p-5 d-flex flex-column flex-fill-0">
                                    <small className=" text-nowrap">Coaching</small>
                                    <span className="h1 mb-0 text-nowrap ">
                                        2<small className="text-muted"> sessions</small>
                                    </span>
                                </div>
                                <div className="bg-light rounded p-5 d-flex flex-column flex-fill-0">
                                    <small className="text-nowrap">Total time</small>
                                    <span className="h1 mb-0 text-nowrap ">
                                        1<small className="text-muted"> hour</small>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="application-section d-flex flex-column">
                            <h3 className="application-section--title">My Upcoming events </h3>
                            <CardEvent title="event.name" start={{ day: "8", month: "June", startTime: "10am", endTime: "11am" }} img="https://inject-prod.s3.amazonaws.com/images/efe8674b-e830-4988-b424-4bf588547b93/co1140x380.jpeg" location="InPerson" />
                            <CardEvent title="event.name" start={{ day: "8", month: "June", startTime: "10am", endTime: "11am" }} location="InPerson" />
                            <CardEvent title="event.name" start={{ day: "8", month: "June", startTime: "10am", endTime: "11am" }} location="InPerson" />
                        </div>
                    </div>
                </div>
            </AppContent>
        </Layout>
    );
};
