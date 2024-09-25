import React from "react";
import { Layout } from "../../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { CardEvent } from "@/app/components/cards/CardEvent";
import { Button } from "@/app/components/Button";

export const ProgramDashboardCarousel = () => {
    return (
        <Layout >
            <AppContent>
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="application-section">
                            <div className="carousel slide carousel-fade pointer-event mb-5" id="carousel" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div
                                            className="cover-container rounded"
                                            style={{
                                                backgroundImage: 'url("img/hero.png")',
                                                backgroundRepeat: "no-repeat",
                                                backgroundPosition: "center",
                                                backgroundSize: "cover",
                                            }}
                                        ></div>
                                    </div>
                                    <div className="carousel-item">
                                        <div
                                            className="cover-container rounded"
                                            style={{
                                                backgroundImage: 'url("img/hero-2.png")',
                                                backgroundRepeat: "no-repeat",
                                                backgroundPosition: "center",
                                                backgroundSize: "cover",
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon icon icon-chevron-left" aria-hidden="true" />
                                    <span className="sr-only">Précédent</span>
                                </a>
                                <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon icon icon-chevron-right" aria-hidden="true" />
                                    <span className="sr-only">Suivant</span>
                                </a>
                            </div>

                            <div className="h1 m-none mb-5">Program-1 dashboard</div>
                            <div className="m-none mb-5">At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus.</div>
                            <h4>shortcut</h4>
                            <a className="btn btn-lg btn-block btn-default" href="/program/75/managers">
                                Custom shortcut
                            </a>
                            <a className="btn btn-lg btn-block btn-default" href="/program/75/managers">
                                Custom shortcut
                            </a>
                        </div>
                        <div className="application-section">
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
                        </div>
                        <div className="application-section">
                            <h3 className="application-section--title"> Your Program Managers </h3>
                            <p>Program Managers are here to guide you during the program.</p>
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
                            <a className="btn btn-lg btn-block btn-default" href="/program/75/managers">
                                Show more
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="application-section is-highlighted">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <h3>
                                        <span className="icon icon-questionnaire is-24px mr-2" />A survey is waiting your response!
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
                        <div className="application-section d-flex flex-column gap-xs">
                            <h3 className="application-section--title"> Upcoming events </h3>
                            <CardEvent title="event.name" start={{ day: "8", month: "June", startTime: "10am", endTime: "11am" }} img="https://inject-prod.s3.amazonaws.com/images/efe8674b-e830-4988-b424-4bf588547b93/co1140x380.jpeg" location="InPerson" />
                            <CardEvent title="event.name" start={{ day: "8", month: "June", startTime: "10am", endTime: "11am" }} location="InPerson" />
                            <CardEvent title="event.name" start={{ day: "8", month: "June", startTime: "10am", endTime: "11am" }} location="InPerson" />
                            <Button extended={true} type="default" label="Show more" />
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
                                            <div className="card blogPostCard">
                                                <div className="card-infos d-flex flex-column align-items-stretch gap-md p-24px">
                                                    <div className="d-flex flex-grow-1 gap-sm">
                                                        <div className="thumbnail-relation m-auto">
                                                            <a href="#" className="thumbnail is-oval is-lg is-bordered">
                                                                <img src="https://inject-prod.s3.amazonaws.com/images/0ee71840-6d78-4784-acff-6f8d2722dbb7/sq150.jpeg" />
                                                            </a>
                                                        </div>
                                                        <div className="card-title flex-grow-1">
                                                            <a href="#" className="h4 mb-none line-clamp-1 d-flex align-items-center gap-2xs">
                                                                <span>Sarah Lamoureux</span>
                                                                <span className="badge badge-role is-manager z-2" data-toggle="tooltip" data-placement="top" data-original-title="Program Manager" data-boundary="window" />
                                                            </a>
                                                            <ul className="text-muted small metas is-list mb-none">
                                                                <li>
                                                                    <a href="#" className="text-muted text-decoration-none">
                                                                        Community Builder, Schoolab
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
                                                        <p>Bonjour à tous·tes,</p>
                                                        <p>Nous sommes heureux de vous accueillir au sein de Schoolab Saint-Lazare !</p>
                                                        <p>
                                                            Le système de réservation de salles de réunion est maintenant disponible, <a href="https://schoolab.skedda.com/register?i=277598&k=0tUkWBHX4UlHvcRlvn6Cx60VhMZD7EZl">cliquez sur ce lien pour activer vos accès</a>.
                                                        </p>
                                                        <p>Ensuite, pour y accéder il vous suffira de cliquer sur le petit 🏢 dans la barre de navigation de gauche, vous retrouverez le p...</p>
                                                        <a href="#">Read more -&gt;</a>
                                                    </div>
                                                    <div className="item is-bordered resource">
                                                        <div className="item-row p-sm">
                                                            <div className="item-row gap-xs">
                                                                <div className="item-icon icon icon-file-pdf-box text-danger" />
                                                                <div className="item-content">
                                                                    <a className="item-title h4 mb-none stretched-link text-truncate" href="#" target="_blank">
                                                                        stakeholdermap-model.pdf
                                                                    </a>
                                                                    <ul className="item-caption metas small is-list">
                                                                        <li>
                                                                            <span>PDF File</span>
                                                                        </li>
                                                                        <li>
                                                                            <span>120 KB</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="item-options">
                                                                <a className="btn btn-lg btn-transparent btn-icon z-1" href="#" target="_blank">
                                                                    <span className="icon icon-cloud-download is-24px" />
                                                                </a>
                                                            </div>
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
