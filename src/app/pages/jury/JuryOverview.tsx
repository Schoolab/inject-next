import React from "react";

import { Layout } from "../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";

export const JuryOverview = () => {
    return (
        <Layout shortcutBarExpanded={true}>
            <AppContent>
                <div className="row">
                    <div className="col-12 col-lg-6 col-xl-8">
                        <div className="application-section">
                            <div className="d-flex flex-column flex-md-row flex-lg-column flex-xl-row align-items-center flex-wrap flex-xl-nowrap gap-md">
                                <div className="card-image-container">
                                    <div className="card-image bg-highlight">
                                        <span className="icon icon-gavel is-40px position-absolute top-50 start-50 translate-middle"></span>
                                    </div>
                                </div>
                                <div className="d-flex flex-column align-items-center align-items-md-start align-items-lg-center align-items-xl-start gap-xs flex-fill">
                                    <div className="d-flex flex-column align-items-center align-items-md-start align-items-lg-center align-items-xl-start gap-0">
                                        <div className="d-flex align-items-center gap-2xs">
                                            <div className="h2  text-center text-xl-left d-flex align-items-center gap-2xs">
                                                <span>Welcome to the Juries space!</span>
                                            </div>
                                        </div>
                                        <ul className="list-inline list-dotted">
                                            <li
                                                className="list-inline-item"
                                                data-toggle="tooltip"
                                                data-placement="bottom"
                                                data-original-title="<ul class='list-unstyled d-flex flex-column gap-2xs m-none'><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/2216e7ab-c701-4503-83a2-ae7b91afb15d/sq150.jpeg'></div><span>Alexandra Jolly</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/3155b942-7535-4b0b-8ded-97eb42a92e1b/sq150.jpeg'></div><span>Emma Salvarelli</span></li>"
                                                data-html="true"
                                                data-boundary="window"
                                            >
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
                                                            <small className="text-muted">2 Juries</small>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="d-flex gap-xs">
                                    <div className="dropdown">
                                        <a className="btn btn-transparent btn-lg btn-icon position-relative z-1" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="icon is-20px icon-options" />
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="#">
                                                <span>Setting 1</span>
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <span>Setting 2</span>
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <span>Setting 3</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="to-collapse is-collapsed d-block border-top mt-5 pt-5" data-toggle="collapse" data-target="#Aboutproject" aria-expanded="false">
                                <div className="d-flex align-items-center flex-fill">
                                    <div className="d-flex align-items-center gap-2xs flex-grow-1">
                                        <span className="icon icon-clipboard-text is-sm" />
                                        <span>Brief</span>
                                    </div>
                                    <span className="icon icon-chevron-right is-sm" />
                                </div>
                                <div className="collapse bg-highlight rounded-sm p-md mb-2xs mt-md" id="Aboutproject">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est, at elementum felis diam eget massa.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est, at elementum felis diam eget massa.</p>
                                </div>
                            </div>
                        </div>

                        <div className="application-section">
                            <h3 className="application-section--title">Evaluations sessions</h3>
                            <div className="row">
                                <div className="col-xl-4 col-lg-12 col-md-4 col-12 mb-7 d-flex align-items-stretch ">
                                    <div className="item is-bordered m-none  p-5 flex-fill d-flex position-relative">
                                        <div className="item-row flex-column align-items-center justify-content-between">
                                            <p className="h5 text-center mb-5">Selection comittee</p>
                                            <div className="mb-5 d-flex flex-column align-items-center">
                                                <svg className="progress-circle-container is-xl mb-3" viewBox="0 0 32 32" data-percent={20} style={{ ["--percent" as any]: 20 }}>
                                                    <circle className="progress-circle progress-circle-bg" />
                                                    <circle className="progress-circle progress-circle-percent" />
                                                    <text className="progress-circle-text" x={16} y={15}>
                                                        1/4
                                                    </text>
                                                    <text className="progress-circle-subtext" x={16} y={20}>
                                                        Participants
                                                    </text>
                                                </svg>
                                                <div className="d-flex flex-column justify-content-center mb-5 text-center">
                                                    <span className="mb-2 h5">Ongoing</span>
                                                    <span className="mb-2 small">Due date</span>
                                                    <span className="icon icon-calendar-outline small">&nbsp;15/10/2021</span>
                                                </div>
                                            </div>
                                            <button className="btn btn-block btn-default stretched-link"> View session </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-12 col-md-4 col-12 mb-7 d-flex align-items-stretch ">
                                    <div className="item is-bordered m-none  p-5 flex-fill d-flex position-relative">
                                        <div className="item-row flex-column align-items-center justify-content-between">
                                            <p className="h5 text-center mb-5">Lorem ipsum dolor sit amet, consectetur</p>
                                            <div className="mb-5 d-flex flex-column align-items-center">
                                                <svg className="progress-circle-container is-xl mb-3" viewBox="0 0 32 32" data-percent={0} style={{ ["--percent" as any]: 0 }}>
                                                    <circle className="progress-circle progress-circle-bg" />
                                                    <circle className="progress-circle progress-circle-percent" />
                                                    <text className="progress-circle-text" x={16} y={15}>
                                                        0/4
                                                    </text>
                                                    <text className="progress-circle-subtext" x={16} y={20}>
                                                        Projects
                                                    </text>
                                                </svg>
                                                <div className="d-flex flex-column justify-content-center mb-5 text-center">
                                                    <span className="mb-2 h5">Ongoing</span>
                                                    <span className="mb-2 small">Due date</span>
                                                    <span className="icon icon-calendar-outline small">&nbsp;15/10/2021</span>
                                                </div>
                                            </div>
                                            <button className="btn btn-block btn-default stretched-link"> View session </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-12 col-md-4 col-12 mb-7 d-flex align-items-stretch ">
                                    <div className="item is-bordered m-none p-5 flex-fill d-flex position-relative">
                                        <div className="item-row flex-column align-items-center justify-content-between">
                                            <p className="h5 text-center mb-5">Lorem ipsum dolor sit amet, consectetur</p>
                                            <div className="mb-5 d-flex flex-column align-items-center">
                                                <svg className="mb-5" width={80} height={82} viewBox="0 0 80 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M41 78C61.4345 78 78 61.4345 78 41C78 20.5655 61.4345 4 41 4" stroke="#E5E5E5" strokeWidth={4} />
                                                    <path d="M41 78C20.5655 78 4 61.4345 4 41C4 20.5655 20.5655 4 41 4" stroke="#E5E5E5" strokeWidth={4} strokeDasharray="8 8" />
                                                    <rect x="34.7363" y="32.12" width="21.46" height="3.7" transform="rotate(45 34.7363 32.12)" fill="#E5E5E5" />
                                                    <rect x="49.9109" y="34.7363" width="21.46" height="3.7" transform="rotate(135 49.9109 34.7363)" fill="#E5E5E5" />
                                                </svg>
                                                <div className="d-flex flex-column justify-content-center mb-5 text-center">
                                                    <span className="mb-2 h5">Finished</span>
                                                    <span className="mb-2 small">Due date</span>
                                                    <span className="icon icon-calendar-outline small">&nbsp;15/10/2021</span>
                                                </div>
                                            </div>
                                            <button className="btn btn-block btn-default stretched-link"> View session </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="btn btn-lg btn-block btn-default" href="/program/75/managers">
                                {" "}
                                View more{" "}
                            </a>
                        </div>
                        <div className="application-section">
                            <div className="d-flex flex-lg-row flex-column align-items-start">
                                <h3 className="application-section--title flex-fill"> Evaluations sessions</h3>
                            </div>
                            <div className="bg-white border rounded px-40px py-40px d-flex flex-column align-items-center gap-0px text-center">
                                <div className="d-flex pb-16px">
                                    <span className="icon icon-gavel is-24px" />
                                </div>
                                <div className="d-flex flex-column gap-2xs">
                                    <p className="font-weight-bold">No sessions</p>
                                    <p className="small text-muted">Your evaluations sessions will be listed here.</p>
                                </div>
                            </div>
                        </div>
                        <div className="application-section">
                            <h3 className="application-section--title">
                                <span>Juries newsfeed</span>
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
                                                            {/* <span className="badge badge-role is-manager z-2" data-toggle="tooltip" data-placement="top" data-original-title="Program Manager" data-boundary="window" /> */}
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
                    <div className="col-12 col-lg-6 col-xl-4">
                        <div className="application-section">
                            <h3 className="application-section--title">Progression</h3>
                            <div className="d-flex gap-xs flex-wrap align-items-stretch align-content-stretch">
                                <div className="bg-light rounded p-5 d-flex flex-column flex-fill-0">
                                    <small className=" text-nowrap">Evluation Session</small>
                                    <span className="h1 mb-0 text-nowrap ">
                                        3
                                    </span>
                                </div>
                                <div className="bg-light rounded p-5 d-flex flex-column flex-fill-0">
                                    <small className="text-nowrap">End of program</small>
                                    <span className="h1 mb-0 text-nowrap ">
                                        160<small className="text-muted"> days</small>
                                    </span>
                                </div>
                                <div className="bg-light rounded p-5 d-flex flex-column flex-fill-0">
                                    <small className="text-nowrap">Participants Evaluated</small>
                                    <span className="h1 mb-0 text-nowrap ">
                                        10<small className="text-muted"> /50</small>
                                    </span>
                                </div>
                                <div className="bg-light rounded p-5 d-flex flex-column flex-fill-0">
                                    <small className="text-nowrap">Projects Evaluated</small>
                                    <span className="h1 mb-0 text-nowrap ">
                                        5<small className="text-muted"> /10</small>
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="application-section">
                            <h3 className="application-section--title"> Juries </h3>

                            <div className="items">
                                <div className="item is-bordered">
                                    <div className="item-row">
                                        <div className="item-row">
                                            <a href="/user/u/0d3e2b04">
                                                <div className="thumbnail is-oval " title="" data-toggle="tooltip" data-original-title="La piscine 2022 overview">
                                                    <img src="https://inject-prod.s3.amazonaws.com/images/78d42906-72f6-4820-86b8-892d1cd377ce/sq150.png" width={150} height={150} className=" rounded-circle" />
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
                                <div className="item is-bordered">
                                    <div className="item-row">
                                        <div className="item-row">
                                            <a href="/user/u/53825949">
                                                <div className="thumbnail is-oval " title="" data-toggle="tooltip" data-original-title="La piscine 2022 overview">
                                                    <img src="https://inject-prod.s3.amazonaws.com/images/731305ed-0603-4910-9e93-65dd89ef302a/sq150.jpeg" />
                                                </div>
                                            </a>
                                            <div className="item-content ml-4 py-1">
                                                <a href="/user/u/53825949" className="item-title h4 font-weight-normal mb-none stretched-link">
                                                    Sarah Mecheneau
                                                </a>
                                                <ul className="metas is-list ">
                                                    <li> Business Developer / Program Manager - Programmes étudiants internationaux Schoolab </li>
                                                    <li> FR </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item-options dropdown">
                                            <a className="btn btn-lg btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                    </div>
                                </div>
                            </div>

                            <a className="btn btn-lg btn-block btn-default" href="/program/75/managers">
                                Show more
                            </a>
                        </div>
                    </div>
                </div>
            </AppContent>
        </Layout>
    );
};
