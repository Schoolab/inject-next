import React from "react";
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { Button } from "@/app/components/buttons/Button";
import { CardFeed } from "@/app/components/cards/CardFeed";

export const ExpertOverview = () => {
    return (
        <Layout shortcutBarExpanded={true}>
            <AppContent>
                <div className="row ">
                    <div className="col-12 col-lg-6 col-xl-8 ">
                        <div className="application-section">
                            <div className="d-flex flex-lg-row flex-column align-items-start">
                                <h3 className="application-section--title flex-fill"> Coaching sessions </h3>
                                <Button size="sm" iconStartName="plus-circle" type="default" label="Add Session" />
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
                        {/* <div className="application-section">
                            <h3 className="application-section--title">Coaching sessions</h3>
                            <div className="dataTableContainer  loaded mb-3">
                                <div className="mb-3 title-filter-block">
                                    <div className="level">
                                        <div className="level-left">
                                            <div className="level-item">
                                                <form name="status" method="post" title="Tous" data-col={11} className="dataTableFilter">
                                                    <div className="dropdown bootstrap-select dataTableFilter fit-width">
                                                        <select id="event_main_filters_status" name="event_main_filters[status]" title="Tous" data-col={11} className="dataTableFilter form-control" tabIndex={-98}>
                                                            <option className="bs-title-option" value="" />
                                                            <option value="all">Tous</option>
                                                            <option value="upcoming">A venir</option>
                                                            <option value="finished">Passés</option>
                                                        </select>
                                                        <div className="dropdown-menu " role="combobox">
                                                            <div className="inner show" role="listbox" aria-expanded="false" tabIndex={-1}>
                                                                <ul className="dropdown-menu inner show" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="level-right">
                                            <div className="level-item">
                                                <div className="level-item">
                                                    <a className="btn btn-primary btn-icon" href="/program/53/expert/coaching-session/create">
                                                        <span className="icon icon-plus-circle" />
                                                        <span>Add a coaching</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="sg-datatables-coaching_event_datatable_wrapper" className="overflow-hidden dataTables_wrapper dt-bootstrap4 no-footer">
                                    <div className="row">
                                        <div className="col-sm-12 ">
                                            <table id="sg-datatables-coaching_event_datatable" className="table dataTable no-footer dtr-inline" cellSpacing={0} width="100%" role="grid" aria-describedby="sg-datatables-coaching_event_datatable_info" style={{ width: "100%" }}>
                                                <thead>
                                                    <tr role="row">
                                                        <th className="sorting_desc" tabIndex={0} aria-controls="sg-datatables-coaching_event_datatable" rowSpan={1} colSpan={1} style={{ width: 129 }} aria-sort="descending" aria-label="Date: activer pour trier la colonne par ordre croissant">
                                                            Session
                                                        </th>
                                                        <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: 59 }} aria-label="Durée">
                                                            Duration
                                                        </th>
                                                        <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: 21 }} aria-label="" />
                                                        <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: 329 }} aria-label="Note pour les PM">
                                                            Note for PM
                                                        </th>
                                                        <th className="sorting" tabIndex={0} aria-controls="sg-datatables-coaching_event_datatable" rowSpan={1} colSpan={1} style={{ width: 147 }} aria-label="Feedback équipe: activer pour trier la colonne par ordre croissant">
                                                            Team note
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr role="row" className="odd">
                                                        <td className="sorting_1" tabIndex={0}>
                                                            <div className="d-flex align-items-center">
                                                                <div className="thumbnail is-session" title="30/11/2023">
                                                                    <span className="date">30 NOV</span>
                                                                    <span className="hour">18h30</span>
                                                                </div>
                                                                <div className="item-content ml-4 py-1">
                                                                    <a href="#" className="item-title h4 font-weight-normal mb-none">
                                                                        Project Name
                                                                    </a>
                                                                    <p className="metas small  d-inline-block text-truncate" style={{ maxWidth: 200 }}>
                                                                        <span>FirstName LastName</span>
                                                                        <span>, </span>
                                                                        <span>FirstName LastName</span>
                                                                        <span>, </span>
                                                                        <span>FirstName LastName</span>
                                                                        <span>, </span>
                                                                        <span>FirstName LastName </span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>30 min</td>
                                                        <td>
                                                            <span className="icon icon-flag text-success" />
                                                        </td>
                                                        <td>
                                                            <a className="btn btn-default btn-xs py-3 px-4" href="/program/53/coaching-session/32/edit/posts">
                                                                <span className="icon icon-note-text-outline text-muted" />
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a className="btn btn-default btn-xs py-3 px-4" href="/program/53/coaching-session/32/edit/posts">
                                                                <span className="icon icon-note-text-outline text-muted" />
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div id="sg-datatables-coaching_event_datatable_processing" className="dataTables_processing" style={{ display: "none" }}>
                                                <div className="card">
                                                    <div className="card-body text-center">
                                                        <div className="spinner-border spinner-border-sm mr-3 text-center" role="status">
                                                            <span className="sr-only">Loading…</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row" />
                                    <div className="row">
                                        <div className="col-sm-12 col-md-7" />
                                    </div>
                                </div>
                            </div>
                            <a className="btn btn-lg btn-block btn-default" href="#">
                                {" "}
                                View all{" "}
                            </a>
                        </div> */}

                        <div className="application-section">
                            <h3 className="application-section--title">
                                <span>Expert newsfeed</span>
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
                        <div className="application-section">
                            <h3 className="application-section--title"> Expert learning </h3>
                            <div className="d-flex flex-column gap-xs">
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
                                                <span className="icon icon-cloud-download" />
                                            </a>
                                        </div>
                                    </div>
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
                                                <span className="icon icon-cloud-download" />
                                            </a>
                                        </div>
                                    </div>
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
                                                <span className="icon icon-cloud-download" />
                                            </a>
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
                    <div className="col-12 col-lg-6 col-xl-4">
                        <div className="application-section">
                            <h3 className="application-section--title">Welcome to the Expert space!</h3>
                            <p>The entire team is delighted to welcome you to this new edition of the Impact program.</p>
                            <p>This innovation program would not be the same without your expertise and the quality of support that students are lucky to have at your side.On this platform, you will find a space for communication with your teams as well as the events and highlights of the program. </p>
                            <p>You will also find a link to the Schoolab team and the necessary support.We are always looking for your feedback and comments to improve the experience and make your space on Inject even easier, more enjoyable and more optimal! </p>
                            <p>Enjoy the program!</p>
                        </div>
                        <div className="application-section">
                            <h4 className="application-section--title">Activities</h4>
                            <div className="row">
                                <div className="col-xl-6 col-lg-12 col-md-6 col-12 mb-5 d-flex align-items-stretch">
                                    <div className="bg-light rounded m-0 p-7 flex-fill d-flex flex-row">
                                        <div className="flex-fill text-center">
                                            <p className="h1">
                                                2<small className="text-muted"> sessions</small>
                                            </p>
                                            <small>Coaching</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-12 col-md-6 col-12 mb-5 d-flex align-items-stretch">
                                    <div className="bg-light rounded m-0 p-7 flex-fill d-flex flex-row">
                                        <div className="flex-fill text-center">
                                            <p className="h1">
                                                1<small className="text-muted"> heure</small>
                                            </p>
                                            <small>Temps total</small>
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
