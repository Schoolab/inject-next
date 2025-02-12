import React from "react";
import { Layout } from "../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { FormInput } from "@/app/components/forms/FormInput";
import { Icon } from "@/app/components/Icon";
import { Section } from "@/app/components/Section";
import { FormGroup } from "@/app/components/forms/FormGroup";
import { FormInputWrapper } from "@/app/components/forms/FormInputWrapper";
import { CardProject } from "@/app/components/cards/CardProject";

export const ApplicationOverview = () => {
    return (
        <Layout showShortcutbar={true} shortcutBarExpanded={true}>
            <AppContent
                breadcrumb={[
                    {
                        label: "Impact Innovators",
                        href: "./?path=/story/pages-program-dashboard--overview",
                    },
                    {
                        label: "Application",
                    },
                ]}
                title="Application"
                buttons={[
                    {
                        type: "default",
                        label: "Public page",
                        link: "./?path=/story/pages-program-landing--inject",
                        iconStartName: "public-page",
                    },
                ]}
            >
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 d-flex flex-column gap-md">
                        <div className="application-section">
                            <div className="d-flex flex-column flex-md-row  align-items-center flex-wrap flex-xl-nowrap gap-md">
                                <div className="card-image-container">
                                    <div className="card-image" style={{ backgroundImage: 'url("img/program-innovators.png")', backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}></div>
                                </div>
                                <div className="d-flex flex-column align-items-center  align-items-md-start gap-xs flex-fill">
                                    <div className="d-flex flex-column align-items-center align-items-md-start align-items-lg-center align-items-xl-start gap-0">
                                        <div className="d-flex align-items-center gap-2xs">
                                            <div className="h2  text-center text-xl-left d-flex align-items-center gap-2xs">
                                                <span>Impact Innovators</span>
                                            </div>
                                        </div>

                                        <ul className="text-muted small metas is-list mb-none">
                                            <li
                                                className="list-inline-item"
                                                data-toggle="tooltip"
                                                data-placement="bottom"
                                                data-original-title="<ul class='list-unstyled d-flex flex-column gap-2xs m-none'><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/2216e7ab-c701-4503-83a2-ae7b91afb15d/sq150.jpeg'></div><span>Alexandra Jolly</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/3155b942-7535-4b0b-8ded-97eb42a92e1b/sq150.jpeg'></div><span>Emma Salvarelli</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/41c42fb1-35bd-4a31-bf08-3b2267df4b95/sq150.jpeg'></div><span>Pierre Lemeteil</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/47fed806-ad38-46a0-9fd5-feec0e62189e/sq150.jpeg'></div><span>Terence Irving</span></li><li><span>+ 4 more</span></li></ul>"
                                                data-html="true"
                                                data-boundary="window"
                                            >
                                                <a href="/program/71/project/2903/users">
                                                    <small className="text-muted">8 members</small>
                                                </a>
                                            </li>
                                            <li
                                                className="list-inline-item"
                                                data-toggle="tooltip"
                                                data-placement="bottom"
                                                data-original-title="<ul class='list-unstyled d-flex flex-column gap-2xs m-none'><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/2216e7ab-c701-4503-83a2-ae7b91afb15d/sq150.jpeg'></div><span>Alexandra Jolly</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/3155b942-7535-4b0b-8ded-97eb42a92e1b/sq150.jpeg'></div><span>Emma Salvarelli</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/41c42fb1-35bd-4a31-bf08-3b2267df4b95/sq150.jpeg'></div><span>Pierre Lemeteil</span></li></ul>"
                                                data-html="true"
                                                data-boundary="window"
                                            >
                                                <a href="/program/71/project/2903/mentors">
                                                    <small className="text-muted">3 managers</small>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="d-block bg-highlight rounded">
                                <div className="d-flex align-items-center flex-fill text-muted p-md" data-toggle="collapse" data-target="#Aboutprogram" aria-expanded="false">
                                    <div className="d-flex align-items-center gap-xs flex-grow-1">
                                        <Icon name="information" size="sm" />
                                        <span className="font-weight-bold">About the program</span>
                                    </div>
                                    <Icon name="chevron-right" size="sm" />
                                </div>
                                <div className="collapse px-md pb-md" id="Aboutprogram">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est, at elementum felis diam eget massa.</p>
                                    <p>Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est.</p>
                                </div>
                            </div>
                        </div>

                        <Section collapsable={true} collapsableId="Application" title="Impact Innovators application" subtitle="You can find here the details of your application">
                            <FormGroup id="1" label="Question 1">
                                <FormInputWrapper>
                                    <FormInput id="1" defaultValue="Lorem ipsum" readonly={true} />
                                </FormInputWrapper>
                            </FormGroup>
                            <FormGroup id="2" label="Question 2 ">
                                <FormInputWrapper>
                                    <FormInput id="2" defaultValue="Lorem ipsum" readonly={true} />
                                </FormInputWrapper>
                            </FormGroup>
                            <FormGroup id="3" label="Question 3">
                                <FormInputWrapper>
                                    <FormInput id="3" defaultValue="Lorem ipsum" readonly={true} />
                                </FormInputWrapper>
                            </FormGroup>
                        </Section>

                        <Section collapsable={true} collapsableId="Projects" title="Projects application" subtitle="You can find your projects application">
                            <div className="cards-list">
                                <div className="card">
                                    <div className="card-infos is-linked d-flex align-items-start gap-sm">
                                        <div className="thumbnail-relation m-auto">
                                            <span className="icon icon--letter is-40px">
                                                <span>P</span>
                                            </span>
                                        </div>
                                        <div className="card-title flex-grow-1">
                                            <a href="#" className="h4 mb-none stretched-link d-flex flex-wrap column-gap-2xs">
                                                <span className="line-clamp-1"> Project 24 </span>
                                            </a>

                                            <ul className="text-muted small metas is-list mb-none">
                                                <li>
                                                    <span>Created on July 12, 2024</span>
                                                </li>
                                                <li>
                                                    <span>By John Doe</span>
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
                                    <div className="card-links">
                                        <div className="d-flex align-items-center justify-content-between text-muted mb-3">
                                            <span className="small font-weight-bold text-truncate mr-2">Application status</span>
                                            <div className="badges">
                                                <div className="badge is-pill is-draft">
                                                    <span className="icon icon-status-bordered"></span>
                                                    <span>Submitted</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-actions">
                                            <a className="btn btn-lg btn-primary btn-block" href="#">
                                                <span>Complete</span>
                                            </a>
                                            <a className="btn btn-lg btn-default btn-block" href="#">
                                                <span>Delete application</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-infos is-linked d-flex align-items-start gap-sm">
                                        <div className="thumbnail-relation m-auto">
                                            <span className="icon icon--letter is-40px">
                                                <span>P</span>
                                            </span>
                                        </div>
                                        <div className="card-title flex-grow-1">
                                            <a href="#" className="h4 mb-none stretched-link d-flex flex-wrap column-gap-2xs">
                                                <span className="line-clamp-1"> Project 24</span>
                                            </a>

                                            <ul className="text-muted small metas is-list mb-none">
                                                <li>
                                                    <span>Created on July 12, 2024</span>
                                                </li>
                                                <li>
                                                    <span>By John Doe</span>
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
                                                <span>Application</span>
                                            </a>
                                            <span className="icon icon-chevron-right is-sm" />
                                        </div>
                                    </div>
                                    <div className="card-links">
                                        <div className="d-flex align-items-center justify-content-between text-muted">
                                            <span className="small font-weight-bold text-truncate mr-2">Application status</span>
                                            <div className="badges">
                                                <div className="badge is-pill is-progress">
                                                    <span className="icon icon-status-dashed"></span>
                                                    <span>In review</span>
                                                </div>
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
                                        </div>
                                        <div className="card-title flex-grow-1">
                                            <a href="#" className="h4 mb-none stretched-link d-flex flex-wrap column-gap-2xs">
                                                <span className="line-clamp-1"> Project 24</span>
                                            </a>

                                            <ul className="text-muted small metas is-list mb-none">
                                                <li>
                                                    <span>Created on July 12, 2024</span>
                                                </li>
                                                <li>
                                                    <span>By John Doe</span>
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
                                                <span>Application</span>
                                            </a>
                                            <span className="icon icon-chevron-right is-sm" />
                                        </div>
                                    </div>
                                    <div className="card-links">
                                        <div className="d-flex align-items-center justify-content-between text-muted mb-3">
                                            <span className="small font-weight-bold text-truncate mr-2">Application status</span>
                                            <div className="badges">
                                                <div className="badge is-pill is-closed">
                                                    <span className="icon icon-minus-circle"></span>
                                                    <span>Rejected</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-actions">
                                            <a className="btn btn-lg btn-default btn-block" href="#">
                                                <span>Delete application</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-infos is-linked d-flex align-items-start gap-sm">
                                        <div className="thumbnail-relation m-auto">
                                            <span className="icon icon--letter is-40px">
                                                <span>P</span>
                                            </span>
                                        </div>
                                        <div className="card-title flex-grow-1">
                                            <a href="#" className="h4 mb-none stretched-link d-flex flex-wrap column-gap-2xs">
                                                <span className="line-clamp-1"> Project 24</span>
                                            </a>

                                            <ul className="text-muted small metas is-list mb-none">
                                                <li>
                                                    <span>Created on July 12, 2024</span>
                                                </li>
                                                <li>
                                                    <span>By John Doe</span>
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
                                                <span>Application</span>
                                            </a>
                                            <span className="icon icon-chevron-right is-sm" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Section>
                    </div>
                </div>
            </AppContent>
        </Layout>
    );
};
