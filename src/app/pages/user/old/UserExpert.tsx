import React from "react";
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";

export const UserExpert = () => {
    return (
        <Layout showShortcutbar={false}>
            <AppContent>
                <div className="row">
                    <div className="col-12">
                        <div className="application-section">
                            <h3 className="application-section--title">Activities</h3>
                            <div className="row">
                                <div className=" col-lg-4  col-12 mb-5 d-flex align-items-stretch">
                                    <div className="bg-light rounded m-none p-7 flex-fill d-flex flex-row">
                                        <div className="flex-fill text-center">
                                            <p className="h1">
                                                3<small className="text-muted"> sessions</small>
                                            </p>
                                            <small>Coaching</small>
                                        </div>
                                    </div>
                                </div>
                                <div className=" col-lg-4  col-12 mb-5 d-flex align-items-stretch">
                                    <div className="bg-light rounded m-none p-7 flex-fill d-flex flex-row">
                                        <div className="flex-fill text-center">
                                            <p className="h1">
                                                35<small className="text-muted"> hours</small>
                                            </p>
                                            <small>Total time </small>
                                        </div>
                                    </div>
                                </div>
                                <div className=" col-lg-4  col-12 mb-5 d-flex align-items-stretch">
                                    <div className="bg-light rounded m-none p-7 flex-fill d-flex flex-row">
                                        <div className="flex-fill text-center">
                                            <p className="h1">
                                                5<small className="text-muted"> projects</small>
                                            </p>
                                            <small>Mentored</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="application-section">
                            <h3 className="application-section--title">Coaching sessions</h3>
                            <div className="card m-none p-5 mb-5">
                                <div className="d-flex d-lg-inline-flex flex-column flex-lg-row mb-5">
                                    <div className="reloadChallenges btn-group btn-group-toggle btn-filter-radios mr-lg-3 mr-0  mb-4 mb-lg-0" data-toggle="buttons">
                                        <label className="btn btn-default btn-lg active">
                                            <input type="radio" name="" id="Past" defaultValue="Past" defaultChecked />
                                            Past
                                        </label>
                                        <label className="btn btn-default btn-lg">
                                            <input type="radio" name="" defaultValue="Upcoming" id="Upcoming" />
                                            Upcoming{" "}
                                        </label>
                                        <label className="btn btn-default btn-lg">
                                            <input type="radio" name="" defaultValue="All" id="All" />
                                            All{" "}
                                        </label>
                                    </div>
                                    <div className="mb-3 mb-lg-0">
                                        <input type="search" className="form-control" id="exampleInputEmail1" aria-describedby="search" placeholder="Search ..." />
                                    </div>
                                </div>
                                <table id="sg-datatables-coaching_event_datatable" className="table dataTable no-footer dtr-inline mb-5" cellSpacing={0} width="100%" role="grid" aria-describedby="sg-datatables-coaching_event_datatable_info" style={{ width: "100%" }}>
                                    <thead>
                                        <tr role="row">
                                            <th className="sorting_desc" tabIndex={0} aria-controls="sg-datatables-coaching_event_datatable" rowSpan={1} colSpan={1} style={{ width: "35%" }} aria-sort="descending" aria-label="Date: activate to sort column ascending">
                                                Coaching session
                                            </th>
                                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: "35%" }} aria-label="Duration">
                                                Program
                                            </th>
                                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: "15%" }} aria-label="Note for PM">
                                                Note for PM
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="sg-datatables-coaching_event_datatable" rowSpan={1} colSpan={1} style={{ width: "15%" }} aria-label="Team note: activate to sort column ascending">
                                                Team note
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr role="row" className="odd">
                                            <td className="sorting_1" tabIndex={0}>
                                                <div className="d-flex flex-fill  mb-3 mb-sm-0">
                                                    <div className="mr-3">
                                                        <div className="thumbnail is-session" title="30/11/2023">
                                                            <span className="date">30 NOV</span>
                                                            <span className="hour">18h30</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p className="mb-none">Project Name</p>
                                                        <ul className="list-inline list-dotted text-muted mb-none">
                                                            <li className="list-inline-item small">Member</li>
                                                            <li className="list-inline-item small">Member</li>
                                                            <li className="list-inline-item small">Member</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <p className="mb-none">Program Name</p>
                                                    <small className="text-muted">Ongoing</small>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="text-muted" data-toggle="tooltip" data-placement="left" title="Programmes Managers Note">
                                                    <a className="btn btn-default btn-xs py-3 px-4" href="#">
                                                        <span className="icon icon-note-text-outline text-muted" />
                                                    </a>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="text-muted" data-toggle="tooltip" data-placement="left" title="Team Note">
                                                    <a className="btn btn-default btn-xs py-3 px-4" href="#">
                                                        <span className="icon icon-note-text-outline text-muted" />
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr role="row" className="even">
                                            <td className="sorting_1" tabIndex={0}>
                                                <div className="d-flex flex-fill  mb-3 mb-sm-0">
                                                    <div className="mr-3">
                                                        <div className="thumbnail is-session" title="30/11/2023">
                                                            <span className="date">30 NOV</span>
                                                            <span className="hour">18h30</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p className="mb-none">Project Name</p>
                                                        <ul className="list-inline list-dotted text-muted mb-none">
                                                            <li className="list-inline-item small">Member</li>
                                                            <li className="list-inline-item small">Member</li>
                                                            <li className="list-inline-item small">Member</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <p className="mb-none">Program Name</p>
                                                    <small className="text-muted">Ongoing</small>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="text-muted" data-toggle="tooltip" data-placement="left" title="Programmes Managers Note">
                                                    <a className="btn btn-default btn-xs py-3 px-4" href="#">
                                                        <span className="icon icon-note-text-outline text-muted" />
                                                    </a>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="text-muted" data-toggle="tooltip" data-placement="left" title="Team Note">
                                                    <a className="btn btn-default btn-xs py-3 px-4" href="#">
                                                        <span className="icon icon-note-text-outline text-muted" />
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="d-flex">
                                    <div className="dataTables_info flex-fill" id="sg-datatables-user_datatable_info" role="status" aria-live="polite">
                                        Showing 1 to 36 of 36 entries
                                    </div>
                                    <div className="dataTables_paginate paging_simple_numbers" id="sg-datatables-user_datatable_paginate">
                                        <ul className="pagination">
                                            <li className="paginate_button page-item previous disabled" id="sg-datatables-user_datatable_previous">
                                                <a href="#" aria-controls="sg-datatables-user_datatable" data-dt-idx={0} tabIndex={0} className="page-link">
                                                    Previous
                                                </a>
                                            </li>
                                            <li className="paginate_button page-item active">
                                                <a href="#" aria-controls="sg-datatables-user_datatable" data-dt-idx={1} tabIndex={0} className="page-link">
                                                    1
                                                </a>
                                            </li>
                                            <li className="paginate_button page-item next disabled" id="sg-datatables-user_datatable_next">
                                                <a href="#" aria-controls="sg-datatables-user_datatable" data-dt-idx={2} tabIndex={0} className="page-link">
                                                    Next
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="application-section">
                            <h3 className="application-section--title">Mentored projects</h3>
                            <div className="d-flex d-lg-inline-flex flex-column flex-lg-row mb-5">
                                <div className="mr-lg-3 mr-0 mb-3 mb-lg-0">
                                    <input type="search" className="form-control" id="exampleInputEmail1" aria-describedby="search" placeholder="Search ..." />
                                </div>
                                <div>
                                    <select className="custom-select small" defaultValue="" >
                                        <option className="small" value="" >
                                            Programs
                                        </option>
                                        <option value={1}>Program 1</option>
                                        <option value={2}>Program 2</option>
                                        <option value={3}>Program 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row items">
                                <div className="col-12 col-md-6 col-lg-4 mb-3">
                                    <div className="item is-bordered is-static h-100">
                                        <div className="item-cover cursorLink" data-toggle="modal" data-target="#loadingContentModal" data-url="/challenge/application/604/preview?f=gp">
                                            <picture>
                                                <source media="(max-width:576px)" srcSet="https://inject-demo.s3.amazonaws.com/images/c17572e7-fb1e-48ac-b80d-bd77c815ed02/co576x192.jpeg" />
                                                <source media="(max-width:768px)" srcSet="https://inject-demo.s3.amazonaws.com/images/c17572e7-fb1e-48ac-b80d-bd77c815ed02/co768x256.jpeg" />
                                                <source media="(max-width:951px)" srcSet="https://inject-demo.s3.amazonaws.com/images/c17572e7-fb1e-48ac-b80d-bd77c815ed02/co951x600.jpeg" />
                                                <source media="(max-width:1140px)" srcSet="https://inject-demo.s3.amazonaws.com/images/c17572e7-fb1e-48ac-b80d-bd77c815ed02/co1140x380.jpeg" />
                                                <img className="img-fluid d-block" src="https://inject-demo.s3.amazonaws.com/images/c17572e7-fb1e-48ac-b80d-bd77c815ed02/co1140x380.jpeg" alt="" width={1140} height={380} />
                                            </picture>
                                        </div>
                                        <div className="item-row position-relative">
                                            <div className="item-content py-1">
                                                <h3 className="item-title mb-none">Equality for all</h3>
                                                <ul className="list-inline list-dotted text-muted mb-none">
                                                    <li className="list-inline-item small">Organization</li>
                                                    <li className="list-inline-item small">Program</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item-row mt-2">
                                            <ul className="metas is-list">
                                                <li>
                                                    <div className="thumbnail-stack mr-2">
                                                        <div className="thumbnail is-oval is-xs">
                                                            <img src="https://inject-demo.s3.amazonaws.com/images/268a3d8e-cabc-4d2b-b524-9310d1aadf53/sq150.jpeg" />
                                                        </div>
                                                    </div>
                                                    <small className="text-muted">1 member(s)</small>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="item-actions mt-2 pb-0">
                                            <a className="btn btn-lg btn-block btn-default" href="#" data-toggle="modal" data-target="#modalOpenThread" data-application-id={604}>
                                                Chat &amp; Video
                                            </a>
                                            <a className="btn btn-lg btn-block btn-default" href="#" data-toggle="modal" data-target="#modalOpenThread" data-application-id={604}>
                                                Project overview
                                            </a>
                                        </div>
                                        <div className="item-row mt-2">
                                            <ul className="item-caption metas small is-list">
                                                <li>
                                                    <span className="icon icon-time">&nbsp;1h30</span>
                                                </li>
                                                <li>2 sessions</li>
                                            </ul>
                                        </div>
                                        <div className="item-actions mt-auto">
                                            <a className="btn btn-block btn-primary btn-lg btn-icon" href="/program/53/expert/coaching-session/create">
                                                <span className="icon icon-plus-circle" />
                                                <span>Add a coaching</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 mb-3">
                                    <div className="item is-bordered is-static h-100">
                                        <div className="item-cover cursorLink" data-toggle="modal" data-target="#loadingContentModal" data-url="/challenge/application/612/preview?f=gp">
                                            <picture>
                                                <source media="(max-width:576px)" srcSet="https://inject-demo.s3.amazonaws.com/images/7241300b-a008-4101-b202-7f65d47c7382/co576x192.jpeg" />
                                                <source media="(max-width:768px)" srcSet="https://inject-demo.s3.amazonaws.com/images/7241300b-a008-4101-b202-7f65d47c7382/co768x256.jpeg" />
                                                <source media="(max-width:951px)" srcSet="https://inject-demo.s3.amazonaws.com/images/7241300b-a008-4101-b202-7f65d47c7382/co951x600.jpeg" />
                                                <source media="(max-width:1140px)" srcSet="https://inject-demo.s3.amazonaws.com/images/7241300b-a008-4101-b202-7f65d47c7382/co1140x380.jpeg" />
                                                <img className="img-fluid d-block" src="https://inject-demo.s3.amazonaws.com/images/7241300b-a008-4101-b202-7f65d47c7382/co1140x380.jpeg" alt="" width={1140} height={380} />
                                            </picture>
                                        </div>
                                        <div className="item-row position-relative">
                                            <div className="item-content py-1">
                                                <h3 className="item-title mb-none">Wind turbine</h3>
                                                <ul className="list-inline list-dotted text-muted mb-none">
                                                    <li className="list-inline-item small">Organization</li>
                                                    <li className="list-inline-item small">Program</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item-row mt-2">
                                            <ul className="metas is-list">
                                                <li>
                                                    <div className="thumbnail-stack mr-2">
                                                        <div className="thumbnail is-oval is-xs">
                                                            <img src="https://inject-demo-uploadable.s3.amazonaws.com/images/638a553c-5c54-4658-a1cb-38c973d3041a.jpeg" />
                                                        </div>
                                                        <div className="thumbnail is-oval is-xs">
                                                            <img src="https://inject-demo.s3.amazonaws.com/images/f957b838-3051-4c87-a298-5e72e7e9762c/sq150.jpeg" />
                                                        </div>
                                                    </div>
                                                    <small className="text-muted">2 member(s)</small>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="item-actions mt-2 pb-0">
                                            <a className="btn btn-lg btn-block btn-default" href="#" data-toggle="modal" data-target="#modalOpenThread" data-application-id={604}>
                                                Chat &amp; Video
                                            </a>
                                            <a className="btn btn-lg btn-block btn-default" href="#" data-toggle="modal" data-target="#modalOpenThread" data-application-id={604}>
                                                Project overview
                                            </a>
                                        </div>
                                        <div className="item-row mt-2">
                                            <ul className="item-caption metas small is-list">
                                                <li>
                                                    <span className="icon icon-time">&nbsp;1h30</span>
                                                </li>
                                                <li>2 sessions</li>
                                            </ul>
                                        </div>
                                        <div className="item-actions mt-auto">
                                            <a className="btn btn-block btn-primary btn-lg btn-icon" href="/program/53/expert/coaching-session/create">
                                                <span className="icon icon-plus-circle" />
                                                <span>Add a coaching</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 mb-3">
                                    <div className="item is-bordered is-static h-100">
                                        <div className="item-cover cursorLink" data-toggle="modal" data-target="#loadingContentModal" data-url="/challenge/application/612/preview?f=gp">
                                            <picture>
                                                <source media="(max-width:576px)" srcSet="https://inject-demo.s3.amazonaws.com/images/645a913c-6fa9-483c-8c0c-152fefc15cf5/co576x192.jpeg" />
                                                <source media="(max-width:768px)" srcSet="https://inject-demo.s3.amazonaws.com/images/645a913c-6fa9-483c-8c0c-152fefc15cf5/co768x256.jpeg" />
                                                <source media="(max-width:951px)" srcSet="https://inject-demo.s3.amazonaws.com/images/645a913c-6fa9-483c-8c0c-152fefc15cf5/co951x600.jpeg" />
                                                <source media="(max-width:1140px)" srcSet="https://inject-demo.s3.amazonaws.com/images/645a913c-6fa9-483c-8c0c-152fefc15cf5/co1140x380.jpeg" />
                                                <img className="img-fluid d-block" src="https://inject-demo.s3.amazonaws.com/images/645a913c-6fa9-483c-8c0c-152fefc15cf5/co1140x380.jpeg" alt="" width={1140} height={380} />
                                            </picture>
                                        </div>
                                        <div className="item-row position-relative">
                                            <div className="item-content py-1">
                                                <h3 className="item-title mb-none">One world</h3>
                                                <ul className="list-inline list-dotted text-muted mb-none">
                                                    <li className="list-inline-item small">Organization</li>
                                                    <li className="list-inline-item small">Program</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item-row mt-2">
                                            <ul className="metas is-list">
                                                <li>
                                                    <div className="thumbnail-stack mr-2">
                                                        <div className="thumbnail is-oval is-xs">
                                                            <img src="https://inject-demo-uploadable.s3.amazonaws.com/images/638a553c-5c54-4658-a1cb-38c973d3041a.jpeg" />
                                                        </div>
                                                        <div className="thumbnail is-oval is-xs">
                                                            <img src="https://inject-demo.s3.amazonaws.com/images/f957b838-3051-4c87-a298-5e72e7e9762c/sq150.jpeg" />
                                                        </div>
                                                    </div>
                                                    <small className="text-muted">2 member(s)</small>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="item-actions mt-2 pb-0">
                                            <a className="btn btn-lg btn-block btn-default" href="#" data-toggle="modal" data-target="#modalOpenThread" data-application-id={604}>
                                                Chat &amp; Video
                                            </a>
                                            <a className="btn btn-lg btn-block btn-default" href="#" data-toggle="modal" data-target="#modalOpenThread" data-application-id={604}>
                                                Project overview
                                            </a>
                                        </div>
                                        <div className="item-row mt-2">
                                            <ul className="item-caption metas small is-list">
                                                <li>
                                                    <span className="icon icon-time">&nbsp;1h30</span>
                                                </li>
                                                <li>2 sessions</li>
                                            </ul>
                                        </div>
                                        <div className="item-actions mt-auto">
                                            <a className="btn btn-block btn-primary btn-lg btn-icon" href="/program/53/expert/coaching-session/create">
                                                <span className="icon icon-plus-circle" />
                                                <span>Add a coaching</span>
                                            </a>
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
                </div>
            </AppContent>
        </Layout>
    );
};
