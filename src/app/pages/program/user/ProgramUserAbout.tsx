import React from "react";
import { Layout } from "../../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";

export const ProgramUserAbout = () => {
    return (
        <Layout shortcutBarExpanded={true}>
            <AppContent>
                <div className="row">
                    <div className="col-12 col-lg-6 col-xl-8 ">
                        <div className="application-section">
                            <div className="d-flex align-items-center mb-5">
                                <div className="thumbnail-relation">
                                    <div className="thumbnail is-oval is-2xl is-bordered mb-3">
                                        <img src="https://inject-demo.s3.amazonaws.com/images/f4f7b6e8-5fe7-43a3-acf9-e4e383f3e60f/sq150.png" />
                                    </div>
                                    <span className="flag-icon flag-icon-fr" />
                                </div>
                                <div className="ml-5">
                                    <h2 className="m-none">Jean Expert</h2>
                                    <p className="m-none text-muted">Software engineer</p>
                                    <ul className="list-inline text-muted w-100 small">
                                        <li className="list-inline-item">
                                            <span className="icon icon-map-marker">Paris, FR</span>
                                        </li>
                                        <li className="list-inline-item">
                                            <span className="icon icon-time">Rejoint Jun 11, 2020</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mb-5">
                                <a className="btn btn-primary mr-3" href="#" data-toggle="modal" data-target="#modalOpenThread" data-user-id="874c0f53">
                                    Chat et Visio
                                </a>
                                <a className="btn btn-default" href="mailto:jean-expert@schoolab.tools">
                                    Email
                                </a>
                            </div>
                            <h4>About Jean</h4>
                            <p>Jean Expert is a seasoned innovation expert with extensive experience in low-code development. With a background in software engineering and a passion for streamlining processes and increasing efficiency, Jean has become a leading voice in the low-code community.</p>
                            <h4>Skills</h4>
                            <div className="badges mb-3">
                                <a className="badge is-pill" href="#">
                                    Data
                                </a>
                                <a className="badge is-pill" href="#">
                                    Low code
                                </a>
                                <a className="badge is-pill" href="#">
                                    No code
                                </a>
                            </div>
                            <h4>Interest</h4>
                            <div className="badges mb-3">
                                <a className="badge is-pill" href="#">
                                    Wind Surf
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-4 ">
                        <div className="application-section">
                            <h3 className="application-section--title">Users with same skills</h3>
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
                            </div>{" "}
                            <a className="btn btn-lg btn-block btn-default" href="/program/75/managers">
                                {" "}
                                Show more{" "}
                            </a>
                        </div>
                    </div>
                </div>
            </AppContent>
        </Layout>
    );
};
