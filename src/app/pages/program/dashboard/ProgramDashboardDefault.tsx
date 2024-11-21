import React from "react";
import { Layout } from "../../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { CardEvent } from "@/app/components/cards/CardEvent";
import { Button } from "@/app/components/Button";
import { CardFeed } from "@/app/components/cards/CardFeed";
import { ItemResource } from "@/app/components/items/ItemResource";

export const ProgramDashboardDefault = () => {
    return (
        <Layout shortcutBarExpanded={true} theme="Moho">
            <AppContent>
                <div className="row">
                    <div className="col-12 col-lg-6 col-xl-8">
                        <div className="application-section">
                            <div className="d-flex flex-column flex-md-row flex-lg-column flex-xl-row align-items-center flex-wrap flex-xl-nowrap gap-md">
                                <div className="card-image-container">
                                    <div
                                        className="card-image"
                                        style={{
                                            backgroundImage: 'url("img/hero.png")',
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: "center",
                                            backgroundSize: "cover",
                                        }}
                                    ></div>
                                </div>
                                <div className="d-flex flex-column align-items-center align-items-md-start align-items-lg-center align-items-xl-start gap-xs flex-fill">
                                    <div className="d-flex flex-column align-items-center align-items-md-start align-items-lg-center align-items-xl-start gap-0">
                                        <div className="d-flex align-items-center gap-2xs">
                                            <div className="h2  text-center text-xl-left d-flex align-items-center gap-2xs">
                                                <span>Program name</span>
                                            </div>
                                        </div>

                                        <ul className="list-inline list-dotted">
                                            <li
                                                className="list-inline-item"
                                                data-toggle="tooltip"
                                                data-placement="bottom"
                                                data-original-title="<ul class='list-unstyled d-flex flex-column gap-2xs m-none'><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/2216e7ab-c701-4503-83a2-ae7b91afb15d/sq150.jpeg'></div><span>Alexandra Jolly</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/3155b942-7535-4b0b-8ded-97eb42a92e1b/sq150.jpeg'></div><span>Emma Salvarelli</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/41c42fb1-35bd-4a31-bf08-3b2267df4b95/sq150.jpeg'></div><span>Pierre Lemeteil</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/47fed806-ad38-46a0-9fd5-feec0e62189e/sq150.jpeg'></div><span>Terence Irving</span></li><li><span>+ 4 more</span></li></ul>"
                                                data-html="true"
                                                data-boundary="window"
                                            >
                                                <ul className="metas is-list">
                                                    <li>
                                                        <div className="thumbnail-stack mr-2">
                                                            <div className="thumbnail is-oval is-xs">
                                                                <img src="https://inject-intrap.s3.amazonaws.com/images/ade60d22-593c-49cd-a53e-a89b8557a94f/sq150.jpeg" />
                                                            </div>
                                                            <div className="thumbnail is-oval is-xs">
                                                                <img src="https://inject-intrap.s3.amazonaws.com/images/ade60d22-593c-49cd-a53e-a89b8557a94f/sq150.jpeg" />
                                                            </div>
                                                            <div className="thumbnail is-oval is-xs">
                                                                <img src="https://inject-intrap.s3.amazonaws.com/images/ade60d22-593c-49cd-a53e-a89b8557a94f/sq150.jpeg" />
                                                            </div>
                                                        </div>
                                                        <a href="/program/71/project/2903/users">
                                                            <small className="text-muted">8 members</small>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                className="list-inline-item"
                                                data-toggle="tooltip"
                                                data-placement="bottom"
                                                data-original-title="<ul class='list-unstyled d-flex flex-column gap-2xs m-none'><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/2216e7ab-c701-4503-83a2-ae7b91afb15d/sq150.jpeg'></div><span>Alexandra Jolly</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/3155b942-7535-4b0b-8ded-97eb42a92e1b/sq150.jpeg'></div><span>Emma Salvarelli</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/41c42fb1-35bd-4a31-bf08-3b2267df4b95/sq150.jpeg'></div><span>Pierre Lemeteil</span></li></ul>"
                                                data-html="true"
                                                data-boundary="window"
                                            >
                                                <ul className="metas is-list">
                                                    <li>
                                                        <div className="thumbnail-stack mr-2">
                                                            <div className="thumbnail is-oval is-xs">
                                                                <img src="https://inject-intrap.s3.amazonaws.com/images/e3af9c9d-3c0f-4fbd-a728-ce925a201011/sq150.jpeg" />
                                                            </div>
                                                            <div className="thumbnail is-oval is-xs">
                                                                <img src="https://inject-intrap.s3.amazonaws.com/images/d5b965a6-9324-45d3-aac3-613e623d95d1/sq150.jpeg" />
                                                            </div>
                                                            <div className="thumbnail is-oval is-xs">
                                                                <img src="https://inject-intrap.s3.amazonaws.com/images/e3af9c9d-3c0f-4fbd-a728-ce925a201011/sq150.jpeg" />
                                                            </div>
                                                        </div>
                                                        <a href="/program/71/project/2903/mentors">
                                                            <small className="text-muted">3 Managers</small>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="d-flex gap-xs">
                                    <div className="dropdown">
                                        <a className="btn btn-default btn-lg dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span>Shortcuts</span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="#">
                                                <span className="dropdown-item--label">Custom shortcut</span>
                                                <span className="dropdown-item--shortcut icon icon-new-tab" />
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <span className="dropdown-item--label">Custom shortcut</span>
                                                <span className="dropdown-item--shortcut icon icon-new-tab" />
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <span className="dropdown-item--label">Custom shortcut</span>
                                                <span className="dropdown-item--shortcut icon icon-new-tab" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <a className="btn btn-transparent btn-lg btn-icon position-relative z-1" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="icon is-20px icon-options" />
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="#">
                                                <span>My submission</span>
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
                            <div className="to-collapse is-collapsed d-block border-top mt-5 pt-5" data-toggle="collapse" data-target="#Aboutprogram" aria-expanded="false">
                                <div className="d-flex align-items-center flex-fill">
                                    <div className="d-flex align-items-center gap-2xs flex-grow-1">
                                        <span className="icon icon-clipboard-text is-sm" />
                                        <span>About the program</span>
                                    </div>
                                    <span className="icon icon-chevron-right is-sm" />
                                </div>
                                <div className="collapse bg-highlight rounded-sm p-md mb-2xs mt-md" id="Aboutprogram">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est, at elementum felis diam eget massa.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est, at elementum felis diam eget massa.</p>
                                </div>
                            </div>
                        </div>
                        <div className="application-section is-highlighted">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <h3>
                                        <span className="icon icon-format-list-checks is-24px mr-2" />A survey is waiting your response!
                                    </h3>
                                    <p>We need you to help us improve the CPI Concept program by responding to a survey. It will only take you a couple minutes.</p>
                                    <div className="mt-5 d-flex">
                                        <a className="btn btn-lg flex-fill btn-primary mr-3 text-nowrap" href="#">
                                            Respond to survey
                                        </a>
                                        <a className="btn btn-lg flex-fill btn-default text-nowrap" href="#">
                                            See all surveys
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="application-section">
                            <h3 className="application-section--title"> Newsfeed</h3>
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
                                                <input type="text" className="form-control message-content bg-white cursorLink" placeholder="Start a new post..." />
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
                                    <div className="cardsContainer">
                                        <div className="cardsContainer">
                                            <CardFeed
                                                avatar="https://inject-prod.s3.amazonaws.com/images/0ee71840-6d78-4784-acff-6f8d2722dbb7/sq150.jpeg"
                                                author="Sarah Lamoureux"
                                                role="manager"
                                                metas={[
                                                    { label: "Community Builder, Schoolab" },
                                                ]}
                                                content={`
                                                    <p>Bonjour à tous·tes,</p>
                                                    <p>Nous sommes heureux de vous accueillir au sein de Schoolab Saint-Lazare !</p>
                                                    <p>Le système de réservation de salles de réunion est maintenant disponible, <a href="https://schoolab.skedda.com/register?i=277598&k=0tUkWBHX4UlHvcRlvn6Cx60VhMZD7EZl">cliquez sur ce lien pour activer vos accès</a>.</p>
                                                    <p>Ensuite, pour y accéder il vous suffira de cliquer sur le petit 🏢 dans la barre de navigation de gauche, vous retrouverez le p...</p>
                                                `}
                                                readMore={true}
                                                liked={true}
                                                likes={9}
                                                comments={4}
                                                copyLink={true}
                                            >
                                                <ItemResource
                                                    isSmall={false}
                                                    action="download"
                                                    icon={{
                                                        addClass: "text-danger",
                                                        name: "file-pdf-box",
                                                    }}
                                                    resource={{
                                                        details: "120 KB",
                                                        name: "stakeholdermap-model.pdf",
                                                        type: "PDF File",
                                                    }}
                                                />
                                            </CardFeed>
                                            <CardFeed 
                                                avatar="https://inject-prod.s3.amazonaws.com/images/71446890-6864-4521-9548-8f5973075b3a/sq150.jpeg"
                                                author="Pierre Forestier"
                                                role="manager"
                                                metas={[
                                                    { label: "Program Manager, Schoolab" },
                                                ]}
                                                content={`
                                                    <p>Hello,</p>
                                                    <p>Un petit message pour vous souhaiter la bienvenue parmi le programme d'incubation "La Piscine". Je serais ton interlocuteur privilégié pour ce programme, n'hésitez surtout pas à me solliciter sur slack ou par mail : pierre.forestier@theschoolab.com.&nbsp;</p>
                                                    <p>Et pour rappel, ce programme va te permettre de te lancer rapidement, valide...</p>
                                                `}
                                                readMore={true}
                                                liked={true}
                                                likes={9}
                                                comments={4}
                                                copyLink={true}
                                            >
                                                <div className="gallery">
                                                    <div className="gallery-photo embed-responsive embed-responsive-16by9">
                                                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/6cheowg6Rmk?si=Zi-3gDOnCZoEyk9m" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                                                    </div>
                                                </div>
                                            </CardFeed>
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
                            <div className="cards">
                                <div className="card h-100">
                                    <div className="card-infos is-linked d-flex align-items-start gap-xs">
                                        <span className="card-icon icon icon-library"></span>

                                        <div className="card-title flex-grow-1">
                                            <a href="#" className="h4 mb-none stretched-link d-flex flex-wrap column-gap-2xs">
                                                <span className="line-clamp-1"> Learning Courses</span>
                                            </a>

                                            <ul className="text-muted small metas is-list mb-none">
                                                <li>
                                                    <div className="d-flex align-items-center gap-xs">
                                                        <svg className="progress-circle-container is-sm" viewBox="0 0 32 32" data-percent={25} style={{ ["--percent" as any]: 25 }}>
                                                            <circle className="progress-circle progress-circle-bg" />
                                                            <circle className="progress-circle progress-circle-percent" />
                                                            <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                            {/* <text class="progress-circle-text" x="16" y="20">567/756</text> */}
                                                        </svg>
                                                        <div className="d-flex flex-fill gap-2xs">
                                                            <span className="small">1/4</span>
                                                            <span className="small">Lessons</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="card h-100">
                                    <div className="card-infos is-linked d-flex align-items-start gap-xs">
                                        <span className="card-icon icon icon-bullseye-arrow"></span>

                                        <div className="card-title flex-grow-1">
                                            <a href="#" className="h4 mb-none stretched-link d-flex flex-wrap column-gap-2xs">
                                                <span className="line-clamp-1">Objectives</span>
                                            </a>

                                            <ul className="text-muted small metas is-list mb-none">
                                                <li>
                                                    <div className="d-flex align-items-center gap-xs">
                                                        <svg className="progress-circle-container is-sm" viewBox="0 0 32 32" data-percent={25} style={{ ["--percent" as any]: 66 }}>
                                                            <circle className="progress-circle progress-circle-bg" />
                                                            <circle className="progress-circle progress-circle-percent" />
                                                            <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                            {/* <text class="progress-circle-text" x="16" y="20">567/756</text> */}
                                                        </svg>
                                                        <div className="d-flex flex-fill gap-2xs">
                                                            <span className="small">4/6</span>
                                                            <span className="small">Tasks</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span>Until July 12, 2024</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="application-section d-flex flex-column gap-xs">
                            <h3 className="application-section--title"> Upcoming events </h3>
                            <CardEvent title="event.name" start={{ day: "8", month: "June", startTime: "10am", endTime: "11am" }} img="https://inject-prod.s3.amazonaws.com/images/efe8674b-e830-4988-b424-4bf588547b93/co1140x380.jpeg" location="InPerson" />
                            <CardEvent title="event.name" start={{ day: "8", month: "June", startTime: "10am", endTime: "11am" }} location="InPerson" />
                            <CardEvent title="event.name" start={{ day: "8", month: "June", startTime: "10am", endTime: "11am" }} location="InPerson" />
                            <Button extended={true} type="default" label="Show more" />
                        </div>
                        <div className="application-section">
                            <h3 className="application-section--title"> Your Program Managers </h3>
                            <p>Program Managers are here to guide you during the program.</p>
                            <div className="items">
                                <div className="item is-bordered">
                                    <div className="item-row">
                                        <div className="item-row">
                                            <a href="/user/u/0d3e2b04">
                                                <div className="thumbnail is-oval " title="" data-toggle="tooltip" data-original-title="La piscine 2022 overview">
                                                    <img src="https://inject-prod.s3.amazonaws.com/images/78d42906-72f6-4820-86b8-892d1cd377ce/sq150.png" />
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
                        <div className="application-section">
                            <h3 className="application-section--title"> Ressources </h3>
                            <div className="items">
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
                            </div>

                            <a className="btn btn-lg btn-block btn-default" href="#">
                                {" "}
                                View all 5 shared files{" "}
                            </a>
                        </div>

                        {/* <div className="application-section">
                            <div className="mb-7">
                                <div className="d-flex align-items-center mb-7">
                                    <div className="icon icon-learning  icon--letter is-sm mr-2 " />
                                    <a href="#" className="item-title h3 mb-none">
                                        Learning courses
                                    </a>
                                </div>
                                <p>consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue</p>
                            </div>
                            <div>
                                <div className="mb-7">
                                    <div className="d-flex justify-content-between mb-3">
                                        <span className="small text-muted">Courses</span>
                                        <span className="small text-muted">In progress</span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="progress flex-fill mr-3" style={{ height: 5 }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: "33%" }} aria-valuenow={33} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <span className="small text-muted">33%</span>
                                    </div>
                                </div>
                                <div className="mb-7">
                                    <div className="d-flex justify-content-between mb-3">
                                        <span className="small text-muted">Certificates</span>
                                        <span className="small text-muted">Not started</span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="progress flex-fill mr-3" style={{ height: 5 }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: "0%" }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <span className="small text-muted">0%</span>
                                    </div>
                                </div>
                                <button className="btn btn-lg btn-block btn-default stretched-link">View learning courses</button>
                            </div>
                        </div>
                        <div className="application-section">
                            <div className="mb-7">
                                <div className="d-flex align-items-center mb-2">
                                    <div className="icon icon--letter is-sm mr-2 ">
                                        <span>m</span>
                                    </div>
                                    <a href="/program/75/project/2232/details" className="item-title h3 mb-none">
                                        My-project
                                    </a>
                                </div>
                                <ul className="item-caption metas small is-list mb-5">
                                    <li>Created on 05/09/2022</li>
                                    <li>By John Doe</li>
                                </ul>
                                <p>consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue</p>
                            </div>
                            <div>
                                <div className="mb-7">
                                    <div className="d-flex justify-content-between mb-3">
                                        <span className="small text-muted">Objectives</span>
                                        <span className="small text-muted">In progress</span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="progress flex-fill mr-3" style={{ height: 5 }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: "33%" }} aria-valuenow={33} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <span className="small text-muted">33%</span>
                                    </div>
                                </div>
                                <button className="btn btn-lg btn-block btn-default stretched-link">View project overview</button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </AppContent>
        </Layout>
    );
};
