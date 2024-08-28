import React from "react";
import { Layout } from "../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";

export const ManageDashboard = () => {
    return (
        <Layout  sideBar="Manage">
            <AppContent showSubnav={false}>
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <h1>Hello, Firstname 👋</h1>
                            <div className="d-flex flex-column align-items-end">
                                <span className="text-muted small mb-2"> Program managers</span>
                                <div className="thumbnail-stack">
                                    <div className="thumbnail is-oval is-sm">
                                        <img src="https://inject-intrap.s3.amazonaws.com/images/d5b965a6-9324-45d3-aac3-613e623d95d1/sq150.jpeg" />
                                    </div>
                                    <div className="thumbnail is-oval is-sm">
                                        <img src="https://inject-intrap.s3.amazonaws.com/images/e3af9c9d-3c0f-4fbd-a728-ce925a201011/sq150.jpeg" />
                                    </div>
                                    <div className="thumbnail is-oval is-sm">
                                        <img src="https://inject-intrap.s3.amazonaws.com/images/e3af9c9d-3c0f-4fbd-a728-ce925a201011/sq150.jpeg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="application-section is-highlighted">
                            <div className="row justify-content-center">
                                <div className="col-12 col-lg-8 d-flex flex-column flex-lg-row justify-content-center align-items-center py-lg-8 py-5">
                                    <div className="mr-lg-8 mr-0 order-2 order-lg-1">
                                        <h2>Getting started with your program setup</h2>
                                        <p>Before starting sharing your program to participants you have some tasks to complete. First of all you need to finish to setup your program, the registrations, forms and the program’s learning and objectives content.</p>
                                        <button className="btn btn-primary btn-lg text-decoration-none text-nowrap" role="button">
                                            Start the program setup
                                        </button>
                                    </div>
                                    <div className="order-1 order-lg-2 mb-5 mb-lg-0">
                                        <svg className="progress-circle-container is-2xl mb-3" viewBox="0 0 32 32" data-percent={15} style={{ ["--percent" as any]: 15 }}>
                                            <circle className="progress-circle progress-circle-bg" />
                                            <circle className="progress-circle progress-circle-percent" />
                                            <text className="progress-circle-text" x={16} y={15}>
                                                3/15
                                            </text>
                                            <text className="progress-circle-subtext" x={16} y={20}>
                                                Tasks
                                            </text>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="application-section">
                            <h3 className="application-section--title" data-toggle="collapse" data-target="#dailyDigest" aria-expanded="true">
                                <span className="application-section--title-content">Daily digest</span>
                                <span className="icon icon-chevron-right ml-auto" />
                            </h3>
                            <div className="collapse show" id="dailyDigest">
                                <div className="alert alert-warning d-flex align-items-left">
                                    <div className="flex-lg-shrink-1 mr-3 d-flex align-items-center">
                                        <span className="icon is-sm icon-alert"></span>
                                    </div>
                                    <div className="flex-fill ">
                                        <p>
                                            {" "}
                                            Reminder: don’t forget to{" "}
                                            <a href="#" className="alert-link">
                                                publish the program
                                            </a>{" "}
                                            to participants when you’re ready! The program will appear on the lists of available programs and be accessible to the public. Program’s current visibility: <span className="font-weight-bold">Admins only</span> (draft).
                                        </p>
                                    </div>
                                </div>
                                <div className="items row card-row">
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="item is-bordered is-static h-100">
                                            <div className="item-row">
                                                <div className="item-content">
                                                    <h4 className="to-collapse mb-none " data-toggle="collapse" data-target="#desc-1" aria-expanded="true">
                                                        <span>Applicants to review</span>
                                                        <span className="icon icon-chevron-right ml-auto" />
                                                    </h4>
                                                    <div className="collapse" id="desc-1">
                                                        <p className="small text-muted">New participants are waiting for validation. Until validation they don’t have access to their learning course if available.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-row">
                                                <div className="item-content bg-light rounded p-5 h-100 d-flex flex-column justify-content-center">
                                                    <div className="d-flex align-items-center">
                                                        <span className="h2 mb-none">16</span>
                                                    </div>
                                                    <span className="text-muted small">waiting for validation</span>
                                                </div>
                                            </div>
                                            <div className="mt-auto">
                                                <a className="btn btn-default btn-lg btn-block btn-icon text-decoration-none text-nowrap" href="#" role="button">
                                                    View registration
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="item is-bordered is-static h-100">
                                            <div className="item-row">
                                                <div className="item-content">
                                                    <h4 className="to-collapse mb-none " data-toggle="collapse" data-target="#desc-2" aria-expanded="true">
                                                        <span>Projects to review</span>
                                                        <span className="icon icon-chevron-right ml-auto" />
                                                    </h4>
                                                    <div className="collapse" id="desc-2">
                                                        <p className="small text-muted">New projects are waiting for approval. Until approval project team don’t have access to their project objectives if available.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-row">
                                                <div className="item-content bg-light rounded p-5 h-100 d-flex flex-column justify-content-center">
                                                    <div className="d-flex align-items-center">
                                                        <span className="h2 mb-none">23</span>
                                                    </div>
                                                    <span className="text-muted small">waiting for approval</span>
                                                </div>
                                            </div>
                                            <div className="mt-auto">
                                                <a className="btn btn-default btn-lg btn-block btn-icon text-decoration-none text-nowrap" href="#" role="button">
                                                    View registration
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="item is-bordered is-static h-100">
                                            <div className="item-row">
                                                <div className="item-content">
                                                    <h4 className="to-collapse mb-none " data-toggle="collapse" data-target="#desc-3" aria-expanded="true">
                                                        <span>Some applicants may be stuck</span>
                                                        <span className="icon icon-chevron-right ml-auto" />
                                                    </h4>
                                                    <div className="collapse" id="desc-3">
                                                        <p className="small text-muted">These users have not updated their registration in more than 2 days, they may need help. Contact them to help them.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-row">
                                                <div className="item-content bg-light rounded p-5 h-100 d-flex flex-column justify-content-center">
                                                    <div className="d-flex align-items-center">
                                                        <span className="h2 mb-none">4</span>
                                                        <span className="ml-3 icon is-sm icon-alert text-warning" />
                                                    </div>
                                                    <span className="text-muted small">ongoing registrations (&gt; 2 days)</span>
                                                </div>
                                            </div>
                                            <div className="mt-auto">
                                                <a className="btn btn-default btn-lg btn-block btn-icon text-decoration-none text-nowrap" href="#" role="button">
                                                    View particpants
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="item is-bordered is-static h-100">
                                            <div className="item-row">
                                                <div className="item-content">
                                                    <h4 className="to-collapse mb-none " data-toggle="collapse" data-target="#desc-4" aria-expanded="true">
                                                        <span>Registration pipeline</span>
                                                        <span className="icon icon-chevron-right ml-auto" />
                                                    </h4>
                                                    <div className="collapse" id="desc-4">
                                                        <p className="small text-muted">Here’s is the state of the registration right now. You can see were people are stuck during the registration in a blink.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-row">
                                                <div className="item-content bg-light rounded p-5 h-100 d-flex flex-column justify-content-center">
                                                    <div className="d-flex align-items-center">
                                                        <span className="h2 mb-none">72</span>
                                                    </div>
                                                    <span className="text-muted small">total registrations</span>
                                                    <div className="progress progress--custom my-3">
                                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: "40%" }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                                                        <div className="progress-bar bg-info" role="progressbar" style={{ width: "30%" }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: "15%" }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100} />
                                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: "10%" }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                                                        <div className="progress-bar bg-secondary" role="progressbar" style={{ width: "5%" }} aria-valuenow={5} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    <div className="d-flex flex-wrap">
                                                        <div className="small text-mutted mr-3 ">
                                                            <span className="icon icon-circle text-success mr-1" />
                                                            <span>42 done</span>
                                                        </div>
                                                        <div className="small text-mutted mr-3 ">
                                                            <span className="icon icon-circle text-info mr-1" />
                                                            <span>16 waiting</span>
                                                        </div>
                                                        <div className="small text-mutted mr-3 ">
                                                            <span className="icon icon-circle text-success mr-1" />
                                                            <span>9 ongoing</span>
                                                        </div>
                                                        <div className="small text-mutted mr-3 ">
                                                            <span className="icon icon-circle text-warning mr-1" />
                                                            <span>4 stuck</span>
                                                        </div>
                                                        <div className="small text-mutted mr-3 ">
                                                            <span className="icon icon-circle text-secondary mr-1" />
                                                            <span>5 not started (invited)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="item is-bordered is-static h-100">
                                            <div className="item-row">
                                                <div className="item-content">
                                                    <h4 className="to-collapse mb-none " data-toggle="collapse" data-target="#desc-5" aria-expanded="true">
                                                        <span>Emails address not verified</span>
                                                        <span className="icon icon-chevron-right ml-auto" />
                                                    </h4>
                                                    <div className="collapse" id="desc-5">
                                                        <p className="small text-muted">These users have not confirmed their emails. To be sure they receive the program’s emails help them confirm their email address.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-row">
                                                <div className="item-content bg-light rounded p-5 h-100 d-flex flex-column justify-content-center">
                                                    <div className="d-flex align-items-center">
                                                        <span className="h2 mb-none">13</span>
                                                        <span className="ml-3 icon is-sm icon-alert text-warning" />
                                                    </div>
                                                    <span className="text-muted small">ongoing registrations (&gt; 2 days)</span>
                                                </div>
                                            </div>
                                            <div className="mt-auto">
                                                <a className="btn btn-default btn-lg btn-block btn-icon text-decoration-none text-nowrap" href="#" role="button">
                                                    View particpants
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="item is-bordered is-static h-100">
                                            <div className="item-row">
                                                <div className="item-content">
                                                    <h4 className="to-collapse mb-none " data-toggle="collapse" data-target="#desc-6" aria-expanded="true">
                                                        <span>Never signed in</span>
                                                        <span className="icon icon-chevron-right ml-auto" />
                                                    </h4>
                                                    <div className="collapse" id="desc-6">
                                                        <p className="small text-muted">Some users have not used their account since their application validation. You may want to contact them to help them.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-row">
                                                <div className="item-content bg-light rounded p-5 h-100 d-flex flex-column justify-content-center">
                                                    <div className="d-flex align-items-center">
                                                        <span className="h2 mb-none">3</span>
                                                    </div>
                                                    <span className="text-muted small">never signed in (validation + 7 days)</span>
                                                </div>
                                            </div>
                                            <div className="mt-auto">
                                                <a className="btn btn-default btn-lg btn-block btn-icon text-decoration-none text-nowrap" href="#" role="button">
                                                    View particpants
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="item is-bordered is-static h-100">
                                            <div className="item-row">
                                                <div className="item-content">
                                                    <h4 className="to-collapse mb-none " data-toggle="collapse" data-target="#desc-7" aria-expanded="true">
                                                        <span>Projects without experts</span>
                                                        <span className="icon icon-chevron-right ml-auto" />
                                                    </h4>
                                                    <div className="collapse" id="desc-7">
                                                        <p className="small text-muted">It seems you have some projects without any experts assigned to them. You may want to check if this is an oversight.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-row">
                                                <div className="item-content bg-light rounded p-5 h-100 d-flex flex-column justify-content-center">
                                                    <div className="d-flex align-items-center">
                                                        <span className="h2 mb-none">1</span>
                                                    </div>
                                                    <span className="text-muted small">projects without experts</span>
                                                </div>
                                            </div>
                                            <div className="mt-auto">
                                                <a className="btn btn-default btn-lg btn-block btn-icon text-decoration-none text-nowrap" href="#" role="button">
                                                    View projects
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="item is-bordered is-static h-100">
                                            <div className="item-row">
                                                <div className="item-content">
                                                    <h4 className="to-collapse mb-none " data-toggle="collapse" data-target="#desc-8" aria-expanded="true">
                                                        <span>Mail opening rates</span>
                                                        <span className="icon icon-chevron-right ml-auto" />
                                                    </h4>
                                                    <div className="collapse" id="desc-8">
                                                        <p className="small text-muted">This is the rate of mail opening from your last mail campaign sent to the program participants.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-row ">
                                                <div className="item-content bg-light rounded p-5 h-100 d-flex flex-column justify-content-center">
                                                    <div className="d-flex align-items-center">
                                                        <span className="h2 mb-none">42%</span>
                                                    </div>
                                                    <span className="text-muted small">openend</span>
                                                </div>
                                                <div className="item-content bg-light rounded p-5 h-100 d-flex flex-column justify-content-center ml-3">
                                                    <div className="d-flex align-items-center">
                                                        <span className="h2 mb-none">12%</span>
                                                    </div>
                                                    <span className="text-muted small">clicked</span>
                                                </div>
                                            </div>
                                            <div className="mt-auto">
                                                <a className="btn btn-default btn-lg btn-block btn-icon text-decoration-none text-nowrap" href="#" role="button">
                                                    View mails
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="application-section">
                            <h3 className="application-section--title" data-toggle="collapse" data-target="#keyInsight" aria-expanded="true">
                                <span className="application-section--title-content">Key insight</span>
                                <span className="icon icon-chevron-right ml-auto" />
                            </h3>
                            <div className="collapse show" id="keyInsight">
                                <div className="row">
                                    <div className="col-6 col-lg-4 mb-5">
                                        <div className="btn-tile statCard bg-light rounded" data-url="/program/141/participants-stat-ajax">
                                            <a className="text-muted" href="#">
                                                <h5 className="card-title text-muted">
                                                    Total applicants&nbsp;
                                                    <i className="icon icon-chevron-right" />
                                                </h5>
                                            </a>
                                            <div className="d-flex justify-content-left align-items-center w-100">
                                                <div>
                                                    <div className="statLoader spinner-border spinner-border-sm mr-3 d-none" />
                                                    <div className="statCardValue h2">5</div>
                                                    <div className="statCardEvolution h4" />
                                                    <div className="statCardExtra h6" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-lg-4 mb-5">
                                        <div className="btn-tile statCard bg-light rounded" data-url="/program/141/mentors-stat-ajax">
                                            <a className="text-muted" href="#">
                                                <h5 className="card-title text-muted">
                                                    Total participants&nbsp;
                                                    <i className="icon icon-chevron-right" />
                                                </h5>
                                            </a>
                                            <div className="d-flex justify-content-left align-items-center w-100">
                                                <div>
                                                    <div className="statLoader spinner-border spinner-border-sm mr-3 d-none" />
                                                    <div className="statCardValue h2">6</div>
                                                    <div className="statCardEvolution h4" />
                                                    <div className="statCardExtra h6" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-lg-4 mb-5">
                                        <div className="btn-tile statCard bg-light rounded" data-url="/program/141/juries-stat-ajax">
                                            <a className="text-muted" href="#">
                                                <h5 className="card-title text-muted">
                                                    Courses completions&nbsp;
                                                    <i className="icon icon-chevron-right" />
                                                </h5>
                                            </a>
                                            <div className="d-flex justify-content-left align-items-center w-100">
                                                <div>
                                                    <div className="statLoader spinner-border spinner-border-sm mr-3 d-none" />
                                                    <div className="statCardValue h2">0%</div>
                                                    <div className="statCardEvolution h4" />
                                                    <div className="statCardExtra h6" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-lg-4 mb-5">
                                        <div className="btn-tile statCard bg-light rounded" data-url="/program/141/admins-stat-ajax">
                                            <a className="text-muted" href="#">
                                                <h5 className="card-title text-muted">
                                                    Mail delivred&nbsp;
                                                    <i className="icon icon-chevron-right" />
                                                </h5>
                                            </a>
                                            <div className="d-flex justify-content-left align-items-center w-100">
                                                <div>
                                                    <div className="statLoader spinner-border spinner-border-sm mr-3 d-none" />
                                                    <div className="statCardValue h2">5</div>
                                                    <div className="statCardEvolution h4" />
                                                    <div className="statCardExtra h6" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-lg-4 mb-5">
                                        <div className="btn-tile statCard bg-light rounded" data-url="/program/141/projects-stat-ajax">
                                            <a className="text-muted" href="#">
                                                <h5 className="card-title text-muted">
                                                    Projects&nbsp;
                                                    <i className="icon icon-chevron-right" />
                                                </h5>
                                            </a>
                                            <div className="d-flex justify-content-left align-items-center w-100">
                                                <div>
                                                    <div className="statLoader spinner-border spinner-border-sm mr-3 d-none" />
                                                    <div className="statCardValue h2">0</div>
                                                    <div className="statCardEvolution h4" />
                                                    <div className="statCardExtra h6" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-lg-4 mb-5">
                                        <div className="btn-tile statCard bg-light rounded" data-url="/program/141/project-followers-stat-ajax">
                                            <a className="text-muted" href="#">
                                                <h5 className="card-title text-muted">
                                                    Followers&nbsp;
                                                    <i className="icon icon-chevron-right" />
                                                </h5>
                                            </a>
                                            <div className="d-flex justify-content-left align-items-center w-100">
                                                <div>
                                                    <div className="statLoader spinner-border spinner-border-sm mr-3 d-none" />
                                                    <div className="statCardValue h2">0</div>
                                                    <div className="statCardEvolution h4" />
                                                    <div className="statCardExtra h6" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="btn btn-default btn-lg btn-block btn-icon text-decoration-none text-nowrap" href="#" role="button">
                                    Show more
                                </a>
                            </div>
                        </div>
                        <div className="application-section">
                            <h3 className="application-section--title" data-toggle="collapse" data-target="#lastReleaseNotes" aria-expanded="true">
                                <span className="application-section--title-content">Last release notes</span>
                                <span className="icon icon-chevron-right ml-auto" />
                            </h3>
                            <div className="collapse show" id="lastReleaseNotes">
                                <p>Find here all the release notes from the Schoolab team about Inject.</p>
                                <div className="items row card-row">
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="item is-bordered is-static h-100">
                                            <div className="item-row">
                                                <div className="item-content flex-row align-items-center">
                                                    <div className="text-primary small flex-fill d-flex gap-2xs">
                                                        <span className="icon icon-release " />
                                                        <span>Today</span>
                                                    </div>
                                                    <span className="text-primary icon icon-new-box is-sm" />
                                                </div>
                                            </div>
                                            <div className="item-row">
                                                <div className="item-content">
                                                    <h4>Les recherches avancées redéfinissent l'expérience utilisateur !</h4>
                                                    <p className="line-clamp-3">Découvrez comment notre nouvelle fonctionnalité de recherche avancée transforme la manière dont vous trouvez l'information, vous permettant de gagner du temps et d'aller droit au but.</p>
                                                </div>
                                            </div>
                                            <div className="mt-auto">
                                                <a className="btn btn-default btn-lg btn-block btn-icon text-decoration-none text-nowrap" href="#" role="button">
                                                    Read more
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="item is-bordered is-static h-100">
                                            <div className="item-row">
                                                <div className="item-content flex-row align-items-center">
                                                    <div className="small flex-fill d-flex gap-2xs">
                                                        <span className="icon icon-release" />
                                                        <span>Last week</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-row">
                                                <div className="item-content">
                                                    <h4>L’interface de gestion réinventée</h4>
                                                    <p className="line-clamp-3">Explorez notre interface de gestion repensée qui simplifie la gestion de votre compte tout en vous offrant un contrôle plus précis sur vos actions.</p>
                                                </div>
                                            </div>
                                            <div className="mt-auto">
                                                <a className="btn btn-default btn-lg btn-block btn-icon text-decoration-none text-nowrap" href="#" role="button">
                                                    Read more
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="item is-bordered is-static h-100">
                                            <div className="item-row">
                                                <div className="item-content flex-row align-items-center">
                                                    <div className="small flex-fill d-flex gap-2xs">
                                                        <span className="icon icon-release " />
                                                        <span>Oct 11, 2023</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-row">
                                                <div className="item-content">
                                                    <h4>Dites adieu aux formulaires complexes : voici ce qui change !</h4>
                                                    <p className="line-clamp-3">Remplir des formulaires ne sera plus une corvée pour les participants ! Découvrez comment nos améliorations vous permettent de saisir des données plus rapidement et facilement.</p>
                                                </div>
                                            </div>
                                            <div className="mt-auto">
                                                <a className="btn btn-default btn-lg btn-block btn-icon text-decoration-none text-nowrap" href="#" role="button">
                                                    Read more
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="btn btn-default btn-lg btn-block btn-icon text-decoration-none text-nowrap" href="#" role="button">
                                    Show more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </AppContent>
        </Layout>
    );
};
