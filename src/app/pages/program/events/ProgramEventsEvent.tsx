import React from "react";
import { useEffect } from "react";
import { Layout } from "../../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { AsideEvent } from "@/app/components/asides/AsideEvent";
import { aside } from "../../../../../public/utils/aside";

export const ProgramEventsEvent = () => {
    useEffect(() => {
        aside();
    }, []);
    return (
        <Layout >
            <AppContent showSubnav={false} sections="separated" isAsside={true}>
                <div className="d-flex align-items-start">
                    <div className="container-lg container-fluid">
                        <div className="row justify-content-center flex-grow-1">
                            <div className="col-12 col-xl-8 ">
                                <div className="application-section">
                                    <div className="mb-5">
                                        <a href="/program/147/events/417">
                                            <picture>
                                                <source media="(max-width:576px)" srcSet="https://inject-prod.s3.amazonaws.com/images/efe8674b-e830-4988-b424-4bf588547b93/co576x192.jpeg" />
                                                <source media="(max-width:768px)" srcSet="https://inject-prod.s3.amazonaws.com/images/efe8674b-e830-4988-b424-4bf588547b93/co768x256.jpeg" />
                                                <source media="(max-width:1140px)" srcSet="https://inject-prod.s3.amazonaws.com/images/efe8674b-e830-4988-b424-4bf588547b93/co1140x380.jpeg" />
                                                <img className="img-fluid d-block" src="https://inject-prod.s3.amazonaws.com/images/efe8674b-e830-4988-b424-4bf588547b93/co1140x380.jpeg" alt="" width={1140} height={380} />
                                            </picture>
                                        </a>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <span className="text-date">Mar Thu 30, 2023 at 09:30</span>
                                        <h2 className="d-flex mb-2">Tradeshow</h2>
                                        <ul className="list-inline text-muted">
                                            <li className="list-inline-item">
                                                <span className="icon icon-map-marker" />
                                                <span>Offline</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="alert alert-info d-flex align-items-left align-items-lg-center flex-column flex-lg-row">
                                        <div className="flex-fill mb-5 mb-lg-0 mr-0 mr-lg-5">
                                            <p className="m-none font-weight-bold">You can manage this event</p>
                                            <p>As a Program Manager of this program you have access to the event manager.</p>
                                        </div>
                                        <div className="flex-lg-shrink-1">
                                            <a className="btn btn-lg btn-block btn-white" href="/event/417/manage">
                                                Manage
                                            </a>
                                        </div>
                                    </div>
                                    <div className="mt-7">
                                        <a className="btn btn-default btn-lg btn-block" href="#challengeEventAddToCalendar" data-toggle="modal">
                                        <span className="icon icon-calendar"></span> Add to calendar
                                        </a>
                                    </div>
                                    <div className="mt-7">
                                        <h4>
                                            <span> Location: venue address </span>
                                        </h4>
                                        <p>This event takes place offline. Here is the information to attend to the event.</p>
                                        <div className="list-group list-group-flush list-group-metas">
                                            <div className="list-group-item">
                                                <span className="icon icon-map-marker" />
                                                <div className="list-group-item--content">
                                                    <span> 15 rue de Milan 75009 Paris </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="eventActionsContainer">
                                        <a className="btn btn-lg btn-block btn-primary mt-5 eventAction" data-url="/api/event/417/attendees/register">
                                            Register to access the event
                                        </a>
                                    </div>
                                    <div className="my-5">
                                        <h4>Attendance sheet responsibles</h4>
                                        <div className="item is-bordered">
                                            <div className="item-row">
                                                <div className="item-row">
                                                    <a href="#" className="userProfileModale userProfileModale-301" data-url="/user/600a4bc4/profile-modal" data-toggle="modal" data-target="#loadingContentModal">
                                                        <div className="thumbnail-relation">
                                                            <div className="thumbnail is-oval " title="" data-toggle="tooltip" data-original-title="Tradeshow">
                                                                <img src="https://inject-prod.s3.amazonaws.com/images/674bedeb-2b63-4956-a012-08ab39477915/sq150.jpeg" />
                                                            </div>
                                                            <span className="flag-icon flag-icon-fr" />
                                                        </div>
                                                    </a>
                                                    <div className="item-content ml-4 py-1">
                                                        <a href="#" className="item-title h4 font-weight-normal mb-none userProfileModale userProfileModale-301" data-url="/user/600a4bc4/profile-modal" data-toggle="modal" data-target="#loadingContentModal">
                                                            {" "}
                                                            Guillaume Larieu{" "}
                                                            <ul className="metas is-list ">
                                                                <li> Head of Students programs Schoolab </li>
                                                                <li> FR </li>
                                                            </ul>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="item-options dropdown">
                                                    <a className="btn btn-lg btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <span className="icon icon-options" />
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="/user/u/600a4bc4">
                                                            Show profile
                                                        </a>
                                                        <a className="dropdown-item" data-toggle="modal" data-target="#modalOpenThread" data-user-id="600a4bc4" href="#">
                                                            Send a message
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item is-bordered">
                                            <div className="item-row">
                                                <div className="item-row">
                                                    <a href="#" className="userProfileModale userProfileModale-673" data-url="/user/ae5b9801/profile-modal" data-toggle="modal" data-target="#loadingContentModal">
                                                        <div className="thumbnail-relation">
                                                            <div className="thumbnail is-oval " title="" data-toggle="tooltip" data-original-title="Tradeshow">
                                                                <img src="https://inject-prod.s3.amazonaws.com/images/f02c3ef7-941c-4420-b515-c7a752313d4a/sq150.jpeg" />
                                                            </div>
                                                            <span className="flag-icon flag-icon-fr" />
                                                        </div>
                                                    </a>
                                                    <div className="item-content ml-4 py-1">
                                                        <a href="#" className="item-title h4 font-weight-normal mb-none userProfileModale userProfileModale-673" data-url="/user/ae5b9801/profile-modal" data-toggle="modal" data-target="#loadingContentModal">
                                                            {" "}
                                                            Louis Boutet{" "}
                                                            <ul className="metas is-list ">
                                                                <li> Program Manager Schoolab </li>
                                                                <li> Paris, FR </li>
                                                            </ul>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="item-options dropdown">
                                                    <a className="btn btn-lg btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <span className="icon icon-options" />
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="/user/u/ae5b9801">
                                                            Show profile
                                                        </a>
                                                        <a className="dropdown-item" data-toggle="modal" data-target="#modalOpenThread" data-user-id="ae5b9801" href="#">
                                                            Send a message
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    
                                    <div className="aside-buttons-bottom d-flex flex-column flex-lg-row">
                                        <button id="btn-quiz" className="btn btn-default btn-lg dropdown mr-lg-3 mb-3 mr-0 active">
                                            <span className="icon icon-comment mr-2" />
                                            Chat
                                        </button>
                                        <button id="btn-quiz" className="btn btn-default btn-lg dropdown mr-lg-3 mb-3 mr-0">
                                            <span className="icon icon-cloud-download mr-2" />
                                            Resources
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-xl-4">
                                <div className="application-section">
                                    <h3 className="application-section--title"> Upcoming events </h3>
                                    <div className="item is-bordered">
                                        <div className="item-cover is-3by1">
                                            <a href="/program/147/events/417">
                                                <picture>
                                                    <source media="(max-width:576px)" srcSet="https://inject-prod.s3.amazonaws.com/images/efe8674b-e830-4988-b424-4bf588547b93/co576x192.jpeg" />
                                                    <source media="(max-width:768px)" srcSet="https://inject-prod.s3.amazonaws.com/images/efe8674b-e830-4988-b424-4bf588547b93/co768x256.jpeg" />
                                                    <source media="(max-width:1140px)" srcSet="https://inject-prod.s3.amazonaws.com/images/efe8674b-e830-4988-b424-4bf588547b93/co1140x380.jpeg" />
                                                    <img className="img-fluid d-block" src="https://inject-prod.s3.amazonaws.com/images/efe8674b-e830-4988-b424-4bf588547b93/co1140x380.jpeg" alt="" width={1140} height={380} />
                                                </picture>
                                            </a>
                                        </div>
                                        <div className="item-row">
                                            <div className="thumbnail is-date" title="30/03/2023">
                                                <span className="month">Mar</span>
                                                <span className="day">30</span>
                                            </div>
                                            <div className="item-content ml-4 py-1">
                                                <a className="item-title h4 mb-none stretched-link" href="/program/147/events/417">
                                                    {" "}
                                                    Tradeshow{" "}
                                                </a>
                                                <ul className="item-caption metas small is-list">
                                                    <li>09:30</li>
                                                    <li>Adresse</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item is-bordered">
                                        <div className="item-row">
                                            <div className="thumbnail is-date" title="30/03/2023">
                                                <span className="month">Mar</span>
                                                <span className="day">30</span>
                                            </div>
                                            <div className="item-content ml-4 py-1">
                                                <a className="item-title h4 mb-none stretched-link" href="/program/147/events/417">
                                                    {" "}
                                                    Tradeshow{" "}
                                                </a>
                                                <ul className="item-caption metas small is-list">
                                                    <li>09:30</li>
                                                    <li>Adresse</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item is-bordered">
                                        <div className="item-row">
                                            <div className="thumbnail is-date" title="30/03/2023">
                                                <span className="month">Mar</span>
                                                <span className="day">30</span>
                                            </div>
                                            <div className="item-content ml-4 py-1">
                                                <a className="item-title h4 mb-none stretched-link" href="/program/147/events/417">
                                                    {" "}
                                                    Tradeshow{" "}
                                                </a>
                                                <ul className="item-caption metas small is-list">
                                                    <li>09:30</li>
                                                    <li>Adresse</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="btn btn-lg btn-block btn-default" href="/program/75/managers">
                                        {" "}
                                        Show more{" "}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aside-buttons no-subnav">
                        <button className="btn btn-lg btn-default mb-3 active" data-toggle="tooltip" data-original-title="Chat">
                            <span className="icon icon-comment" />
                        </button>
                        <button className="btn  btn-lg btn-default mb-3" data-toggle="tooltip" data-original-title="Resources">
                            <span className="icon icon-cloud-download" />
                        </button>
                    </div>
                </div>
            </AppContent>
            <AsideEvent />
        </Layout>
    );
};
