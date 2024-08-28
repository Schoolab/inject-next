import React from "react";
import { Layout } from "../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";

export const UserJury = () => {
    return (
        <Layout showShortcutbar={false}>
            <AppContent>
                <div className="row">
                    <div className="col-12">
                        <div className="application-section">
                            <h3 className="application-section--title">Activities</h3>
                            <div className="row">
                                <div className="col-lg-4 col-12 mb-5 d-flex align-items-stretch">
                                    <div className="bg-light rounded m-none p-7 flex-fill d-flex flex-row">
                                        <div className="flex-fill text-center">
                                            <p className="h1">
                                                4<small className="text-muted"> sessions</small>
                                            </p>
                                            <small>Evaluation</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12 mb-5 d-flex align-items-stretch">
                                    <div className="bg-light rounded m-none p-7 flex-fill d-flex flex-row">
                                        <div className="flex-fill text-center">
                                            <p className="h1">
                                                2<small className="text-muted"> /10</small>
                                            </p>
                                            <small>Participants evaluated</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12 mb-5 d-flex align-items-stretch">
                                    <div className="bg-light rounded m-none p-7 flex-fill d-flex flex-row">
                                        <div className="flex-fill text-center">
                                            <p className="h1">
                                                2<small className="text-muted"> /10</small>
                                            </p>
                                            <small>Participants evaluated</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="application-section">
                            <h3 className="application-section--title">Evaluation sessions</h3>
                            <div className="d-flex d-lg-inline-flex flex-column flex-lg-row mb-5">
                                <div className="mr-lg-3 mr-0 mb-3 mb-lg-0">
                                    <input type="search" className="form-control" id="exampleInputEmail1" aria-describedby="search" placeholder="Search ..." />
                                </div>
                                <div>
                                    <select className="custom-select small" defaultValue="">
                                        <option value="" className="small">
                                            Programs
                                        </option>
                                        <option value={1}>Program 1</option>
                                        <option value={2}>Program 2</option>
                                        <option value={3}>Program 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-12 mb-7 d-flex align-items-stretch ">
                                    <div className="item is-bordered m-none p-5 flex-fill d-flex position-relative">
                                        <div className="item-row flex-column align-items-center justify-content-between">
                                            <div className="d-flex w-100 flex-column flex-sm-row align-items-start mb-5">
                                                <div className="d-flex flex-fill border-bottom pb-5 mb-3 mb-sm-0">
                                                    <div className="mr-3">
                                                        <div className="icon icon--program">
                                                            <span>pr1</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="h4 mb-none">Program 1</div>
                                                        <ul className="list-inline list-dotted text-muted mb-none">
                                                            <li className="list-inline-item small">Ongoing</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="h5 text-center mb-5">Lorem Ipsum</p>
                                            <div className="mb-5 d-flex flex-column align-items-center">
                                                <svg className="progress-circle-container is-xl mb-3" viewBox="0 0 32 32" data-percent={100} style={{ ["--percent" as any] : 100 }}>
                                                    <circle className="progress-circle progress-circle-bg" />
                                                    <circle className="progress-circle progress-circle-percent" />
                                                    <text className="progress-circle-text" x={16} y={15}>
                                                        4/4
                                                    </text>
                                                    <text className="progress-circle-subtext" x={16} y={20}>
                                                        Particpants
                                                    </text>
                                                </svg>
                                                <div className="d-flex flex-column justify-content-center mb-5 text-center">
                                                    <span className="mb-2 h5">Ongoing</span>
                                                    <span className="mb-2 small">Due date</span>
                                                    <span className="icon icon-calendar-outline small">&nbsp;15/10/2021</span>
                                                </div>
                                            </div>
                                            <button className="btn btn-block btn-default stretched-link" >
                                                {" "}
                                                View session{" "}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12 mb-7 d-flex align-items-stretch ">
                                    <div className="item is-bordered m-none  p-5 flex-fill d-flex position-relative">
                                        <div className="item-row flex-column align-items-center justify-content-between">
                                            <div className="d-flex w-100 flex-column flex-sm-row align-items-start mb-5">
                                                <div className="d-flex flex-fill border-bottom pb-5 mb-3 mb-sm-0">
                                                    <div className="mr-3">
                                                        <div className="icon icon--program">
                                                            <span>pr2</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="h4 mb-none">Program 2</div>
                                                        <ul className="list-inline list-dotted text-muted mb-none">
                                                            <li className="list-inline-item small">Ongoing</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="h5 text-center mb-5">Lorem Ipsum</p>
                                            <div className="mb-5 d-flex flex-column align-items-center">
                                                <svg className="progress-circle-container is-xl mb-3" viewBox="0 0 32 32" data-percent={20} style={{ ["--percent" as any] : 20 }}>
                                                    <circle className="progress-circle progress-circle-bg" />
                                                    <circle className="progress-circle progress-circle-percent" />
                                                    <text className="progress-circle-text" x={16} y={15}>
                                                        1/4
                                                    </text>
                                                    <text className="progress-circle-subtext" x={16} y={20}>
                                                        Participatns
                                                    </text>
                                                </svg>
                                                <div className="d-flex flex-column justify-content-center mb-5 text-center">
                                                    <span className="mb-2 h5">Ongoing</span>
                                                    <span className="mb-2 small">Due date</span>
                                                    <span className="icon icon-calendar-outline small">&nbsp;15/10/2021</span>
                                                </div>
                                            </div>
                                            <button className="btn btn-block btn-default stretched-link">
                                                {" "}
                                                View session{" "}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12 mb-7 d-flex align-items-stretch ">
                                    <div className="item is-bordered m-none  p-5 flex-fill d-flex position-relative">
                                        <div className="item-row flex-column align-items-center justify-content-between">
                                            <div className="d-flex w-100 flex-column flex-sm-row align-items-start mb-5">
                                                <div className="d-flex flex-fill border-bottom pb-5 mb-3 mb-sm-0">
                                                    <div className="mr-3">
                                                        <div className="icon icon--program">
                                                            <span>pr3</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="h4 mb-none">Program 3</div>
                                                        <ul className="list-inline list-dotted text-muted mb-none">
                                                            <li className="list-inline-item small">Ongoing</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="h5 text-center mb-5">Lorem Ipsum</p>
                                            <div className="mb-5 d-flex flex-column align-items-center">
                                                <svg className="progress-circle-container is-xl mb-3" viewBox="0 0 32 32" data-percent={0} style={{ ["--percent" as any] : 0 }}>
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
                                            <button className="btn btn-block btn-default stretched-link" >
                                                {" "}
                                                View session{" "}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AppContent>
        </Layout>
    );
};
