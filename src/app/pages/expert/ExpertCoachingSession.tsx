import React from "react";
import { useEffect } from "react";
import { Layout } from "../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { AsideExpertSession } from "@/app/components/asides/AsideExpertSession";
import { aside } from "../../../../public/utils/aside";

export const ExpertCoachingSession = () => {
    useEffect(() => {
        aside();
    }, []);
    return (
        <Layout>
            <AppContent sections="separated" showSubnav={false} isAsside={true}>
                <div className="d-flex align-items-start">
                    <div className="container-lg container-fluid">
                        <div className="row justify-content-center flex-grow-1">
                            <div className="col-12 col-xl-10">
                                <div className="application-section">
                                    <div className="mb-5">
                                        <div className="embed-responsive mb-3 embed-responsive-16by9">
                                            <iframe className="mediaIframe" src="https://www.youtube.com/embed/__dLEqC_Eqs" width="100%" height="100%" frameBorder={0} marginHeight={0} marginWidth={0} scrolling="no" allow="fullscreen;autoplay" />
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <span className="text-date">Mar Thu 30, 2023 at 09:30</span>
                                        <h2 className="d-flex mb-2">Session de coaching We Are Comète / Julien MULAC</h2>
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
                                            Add to calendar
                                        </a>
                                    </div>
                                    <div className="mt-7">
                                        <h4>Détails</h4>
                                        <div className="ck-content">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et est malesuada, vulputate nunc ut, consequat lacus. Maecenas risus nulla, imperdiet sed dictum nec, luctus eget ante. Donec rhoncus vel est vel tempor. Fusce mattis erat quis condimentum aliquam. In tempor, libero nec ornare convallis, metus tellus lobortis dui, vel luctus quam justo eget metus. In porta lobortis nisi. Vivamus sit amet massa rhoncus, congue ipsum ut, hendrerit justo.
                                                Donec sit amet congue sem. Suspendisse vel nisl interdum, iaculis nulla in, lacinia purus.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-7">
                                        <h4>
                                            <span> Location: venue address </span>
                                        </h4>
                                        <p>This event takes place offline. Here is the information to attend to the event.</p>
                                        <div className="list-group list-group-flush list-group-metas">
                                            <div className="list-group-item">
                                                <span className="list-group-item--icon icon icon-at" />
                                                <div className="list-group-item--content">
                                                    <span>www.google.fr</span>
                                                </div>
                                            </div>
                                            <div className="list-group-item">
                                                <span className="list-group-item--icon icon icon-form-textbox-password" />
                                                <div className="list-group-item--content">
                                                    <span>Mot de passe: azerty</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="eventActionsContainer">
                                        <a className="btn btn-lg btn-block btn-primary mt-5 eventAction" data-url="/api/event/417/attendees/register">
                                            Register to access the event
                                        </a>
                                    </div>
                                    <div className="mt-5">
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
                                    <div className="aside-buttons-bottom d-flex flex-column flex-lg-row mt-7">
                                        <button id="btn-comment" className="btn btn-default btn-lg dropdown mr-lg-3 mb-3 mr-0">
                                            <span className="icon icon-format-list-bulleted mr-2" />
                                            Notes
                                        </button>
                                        <button id="btn-quiz" className="btn btn-default btn-lg dropdown mr-lg-3 mb-3 mr-0">
                                            <span className="icon icon-cloud-download mr-2" />
                                            Ressources
                                        </button>
                                  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aside-buttons no-subnav">
                            <button className="btn btn-lg btn-default mb-3 active" data-toggle="tooltip" data-original-title="Chat">
                                <span className="icon icon-format-list-bulleted" />
                            </button>
                            <button className="btn  btn-lg btn-default mb-3" data-toggle="tooltip" data-original-title="Resources">
                                <span className="icon icon-cloud-download" />
                            </button>
                        </div>
                </div>
            </AppContent>
            <AsideExpertSession />
        </Layout>
    );
};
