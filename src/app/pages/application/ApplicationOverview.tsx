import React from "react";
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { FormInput } from "@/app/forms/FormInput";
import { Icon } from "@/app/components/Icon";
import { Section } from "@/app/components/Section";
import { FormGroup } from "@/app/forms/FormGroup";
import { FormInputWrapper } from "@/app/forms/FormInputWrapper";
import { Alert } from "@/app/components/Alert";
import { FormSelect } from "@/app/forms/FormSelect";
import { EmptyState } from "@/app/content/EmptyState";

export const ApplicationOverview = () => {
    return (
        <Layout showShortcutbar={true} shortcutBarExpanded={true}>
            <AppContent
                sections="separated"
                breadcrumb={[
                    {
                        label: "Impact Innovators",
                        href: "./?path=/story/pages-program-dashboard--overview",
                    },
                    {
                        label: "Application",
                    },
                ]}
                buttons={[
                    {
                        label: "actions",
                        hasDropdown: true,
                        type: "default",
                    },
                ]}
                title="Application"
            >
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 d-flex flex-column gap-md">
                        <div className="application-section">
                            <div className="card">
                                <div className="card-infos gap-sm d-flex flex-column align-items-stretch">
                                    <div className=" d-flex flex-column flex-md-row  align-items-center flex-wrap flex-xl-nowrap gap-md">
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
                                                <span className="font-weight-bold">About</span>
                                            </div>
                                            <Icon name="chevron-right" size="sm" />
                                        </div>
                                        <div className="collapse px-md pb-md" id="Aboutprogram">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est, at elementum felis diam eget massa.</p>
                                            <p>Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-links">
                                    <div className="d-flex align-items-center justify-content-between text-muted">
                                        <span className="small font-weight-bold text-truncate mr-2">Registration status</span>
                                        <div className="badges">
                                            <div className="badge is-pill is-draft">
                                                <span className="icon icon-status-bordered"></span>
                                                <span>Draft</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-links">
                                    <div className="d-flex align-items-center justify-content-between text-muted">
                                        <span className="small font-weight-bold text-truncate mr-2">Registration status</span>
                                        <div className="badges">
                                            <div className="badge is-pill is-draft">
                                                <span className="icon icon-status-bordered"></span>
                                                <span>Submitted</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-links">
                                    <div className="d-flex align-items-center justify-content-between text-muted">
                                        <span className="small font-weight-bold text-truncate mr-2">Registration status</span>
                                        <div className="badges">
                                            <div className="badge is-pill is-progress">
                                                <span className="icon icon-status-dashed"></span>
                                                <span>In review</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-links">
                                    <div className="d-flex align-items-center justify-content-between text-muted">
                                        <span className="small font-weight-bold text-truncate mr-2">Registration status</span>
                                        <div className="badges">
                                            <div className="badge is-pill is-closed">
                                                <span className="icon icon-minus-circle"></span>
                                                <span>Rejected</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-links">
                                    <div className="d-flex align-items-center justify-content-between text-muted">
                                        <span className="small font-weight-bold text-truncate mr-2">Registration status</span>
                                        <div className="badges">
                                            <div className="badge is-pill is-open">
                                                <span className="icon icon-status-filled"></span>
                                                <span>Accepted</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Section collapsable={true} collapsableId="noApplication" title="Impact Innovators application">
                            <EmptyState iconTitle="form-checklist" text="This program does not have a participant application form" title="No application form" />
                        </Section>
                        <Section collapsable={true} collapsableId="Application" title="Impact Innovators application" subtitle="Thank you for your registration. ">
                            <Alert buttonLabel="" icon="information" text="Here is the information you provided in your application. We will get back to you by email to inform you of the selection." title="" type="info" />
                            <div className="card">
                                <div className="card-infos gap-sm d-flex flex-column align-items-stretch">
                                    <FormGroup id="0" label="Type">
                                        <FormSelect
                                            id="user-case"
                                            options={[
                                                {
                                                    label: "Type 1",
                                                    value: "1",
                                                },
                                                {
                                                    label: "Type 2",
                                                    value: "2",
                                                },
                                                {
                                                    label: "Type 3",
                                                    value: "3",
                                                },
                                            ]}
                                        />
                                        {/* <FormInputWrapper>
                                            <FormInput id="0" defaultValue="Type 1" readonly={true} />
                                        </FormInputWrapper> */}
                                    </FormGroup>

                                    <FormGroup id="1" label="Question 1">
                                        <FormInputWrapper>
                                            <FormInput id="1" defaultValue="Lorem ipsum" />
                                        </FormInputWrapper>
                                    </FormGroup>
                                    <FormGroup id="2" label="Question 2 ">
                                        <FormInputWrapper>
                                            <FormInput id="2" defaultValue="Lorem ipsum" />
                                        </FormInputWrapper>
                                    </FormGroup>
                                    <FormGroup id="3" label="Question 3">
                                        <FormInputWrapper>
                                            <FormInput id="3" defaultValue="Lorem ipsum" />
                                        </FormInputWrapper>
                                    </FormGroup>
                                </div>
                                <div className="card-links">
                                    <div className="d-flex align-items-center justify-content-between text-muted mb-3">
                                        <span className="small font-weight-bold text-truncate mr-2">Application status</span>
                                        <div className="badges">
                                            <div className="badge is-pill is-draft">
                                                <span className="icon icon-status-bordered"></span>
                                                <span>Draft</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-actions">
                                        <a className="btn btn-lg btn-primary btn-block" href="#">
                                            <span>Update</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-infos gap-sm d-flex flex-column align-items-stretch">
                                    <FormGroup id="0" label="Type">
                                        {/* <FormSelect
                                            disabled={true}
                                            id="user-case"
                                            options={[
                                                {
                                                    label: "Type 1",
                                                    value: "1",
                                                },
                                                {
                                                    label: "Type 2",
                                                    value: "2",
                                                },
                                                {
                                                    label: "Type 3",
                                                    value: "3",
                                                },
                                            ]}
                                        /> */}
                                        <FormInputWrapper>
                                            <FormInput id="0" defaultValue="Type 1" readonly={true} />
                                        </FormInputWrapper>
                                    </FormGroup>

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
                                </div>
                                <div className="card-links">
                                    <div className="d-flex align-items-center justify-content-between text-muted">
                                        <span className="small font-weight-bold text-truncate mr-2">Application status</span>
                                        <div className="badges">
                                            <div className="badge is-pill is-draft">
                                                <span className="icon icon-status-bordered"></span>
                                                <span>Submitted</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-infos gap-sm d-flex flex-column align-items-stretch">
                                    <FormGroup id="0" label="Type">
                                        {/* <FormSelect
                                            disabled={true}
                                            id="user-case"
                                            options={[
                                                {
                                                    label: "Type 1",
                                                    value: "1",
                                                },
                                                {
                                                    label: "Type 2",
                                                    value: "2",
                                                },
                                                {
                                                    label: "Type 3",
                                                    value: "3",
                                                },
                                            ]}
                                        /> */}
                                        <FormInputWrapper>
                                            <FormInput id="0" defaultValue="Type 1" readonly={true} />
                                        </FormInputWrapper>
                                    </FormGroup>

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
                                <div className="card-infos gap-sm d-flex flex-column align-items-stretch">
                                    <FormGroup id="0" label="Type">
                                        {/* <FormSelect
                                            disabled={true}
                                            id="user-case"
                                            options={[
                                                {
                                                    label: "Type 1",
                                                    value: "1",
                                                },
                                                {
                                                    label: "Type 2",
                                                    value: "2",
                                                },
                                                {
                                                    label: "Type 3",
                                                    value: "3",
                                                },
                                            ]}
                                        /> */}
                                        <FormInputWrapper>
                                            <FormInput id="0" defaultValue="Type 1" readonly={true} />
                                        </FormInputWrapper>
                                    </FormGroup>

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
                                </div>
                                <div className="card-links">
                                    <div className="d-flex align-items-center justify-content-between text-muted">
                                        <span className="small font-weight-bold text-truncate mr-2">Application status</span>
                                        <div className="badges">
                                            <div className="badge is-pill is-closed">
                                                <span className="icon icon-minus-circle"></span>
                                                <span>Rejected</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-infos gap-sm d-flex flex-column align-items-stretch">
                                    <FormGroup id="0" label="Type">
                                        {/* <FormSelect
                                            disabled={true}
                                            id="user-case"
                                            options={[
                                                {
                                                    label: "Type 1",
                                                    value: "1",
                                                },
                                                {
                                                    label: "Type 2",
                                                    value: "2",
                                                },
                                                {
                                                    label: "Type 3",
                                                    value: "3",
                                                },
                                            ]}
                                        /> */}
                                        <FormInputWrapper>
                                            <FormInput id="0" defaultValue="Type 1" readonly={true} />
                                        </FormInputWrapper>
                                    </FormGroup>

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
                                </div>
                                <div className="card-links">
                                    <div className="d-flex align-items-center justify-content-between text-muted">
                                        <span className="small font-weight-bold text-truncate mr-2">Registration status</span>
                                        <div className="badges">
                                            <div className="badge is-pill is-open">
                                                <span className="icon icon-status-filled"></span>
                                                <span>Accepted</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </Section>

                        <Section collapsable={true} collapsableId="Projects" title="Projects application" subtitle="You can find your projects application">
                            <div className="cards-list">
                                <div className="card">
                                    <div className="card-infos is-linked d-flex align-items-start gap-sm">
                                        <span className="icon icon--letter is-40px">
                                            <span>P</span>
                                        </span>
                                        <div className="card-title flex-grow-1">
                                            <a href="#" className="h4 mb-none line-clamp-1 d-flex align-items-center gap-2xs">
                                                <span>Project Name</span>
                                            </a>
                                            <ul className="metas is-list small">
                                                <li
                                                    className="list-inline-item z-1"
                                                    data-toggle="tooltip"
                                                    data-placement="bottom"
                                                    data-original-title="<ul class='list-unstyled d-flex flex-column gap-2xs m-none'><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/2216e7ab-c701-4503-83a2-ae7b91afb15d/sq150.jpeg'></div><span>Alexandra Jolly</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/3155b942-7535-4b0b-8ded-97eb42a92e1b/sq150.jpeg'></div><span>Emma Salvarelli</span></li>"
                                                    data-html="true"
                                                    data-boundary="window"
                                                >
                                                    <ul className="metas is-list">
                                                        <li>
                                                            <div className="thumbnail-stack">
                                                                <div className="thumbnail is-oval is-xs">
                                                                    <img src="https://inject-intrap.s3.amazonaws.com/images/d5b965a6-9324-45d3-aac3-613e623d95d1/sq150.jpeg" />
                                                                </div>
                                                                <div className="thumbnail is-oval is-xs">
                                                                    <img src="https://inject-intrap.s3.amazonaws.com/images/e3af9c9d-3c0f-4fbd-a728-ce925a201011/sq150.jpeg" />
                                                                </div>
                                                            </div>
                                                            <a href="/program/71/project/2903/mentors">
                                                                <small className="text-muted">2 Members</small>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>Created on 16th July 2024</li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <a className="btn btn-transparent btn-icon position-relative z-1" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="icon is-20px icon-options" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">
                                                    Open application page
                                                </a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item is-danger" href="#">
                                                    <span className="icon icon-delete dropdown-item--icon"></span>
                                                    <div className="dropdown-item--label">
                                                        <span className="d-flex">Delete</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-targets">
                                        <div className="card-target-wrapper">
                                            <div className="card-target to-collapse is-collapsed d-block" data-toggle="collapse" data-target="#collapseContent0" aria-expanded="false">
                                                <div className="d-flex align-items-center flex-fill">
                                                    <div className="d-flex align-items-center gap-2xs flex-grow-1">
                                                        <span className="icon icon-clipboard-text is-sm"></span>
                                                        <span>Application</span>
                                                    </div>
                                                    <span className="icon icon-chevron-right is-sm"></span>
                                                </div>
                                            </div>
                                            <div className="collapse px-md pb-md" id="collapseContent0">
                                                <div className="bg-highlight rounded p-md">Application Form</div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="card-links">
                                        <div className="d-flex align-items-center justify-content-between text-muted mb-3">
                                            <span className="small font-weight-bold text-truncate mr-2">Application status</span>
                                            <div className="badges">
                                                <div className="badge is-pill is-draft">
                                                    <span className="icon icon-status-bordered"></span>
                                                    <span>Draft</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-actions">
                                            <a className="btn btn-lg btn-primary btn-block" href="#">
                                                <span>Complete</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-infos is-linked d-flex align-items-start gap-sm">
                                        <span className="icon icon--letter is-40px">
                                            <span>P</span>
                                        </span>
                                        <div className="card-title flex-grow-1">
                                            <a href="#" className="h4 mb-none line-clamp-1 d-flex align-items-center gap-2xs">
                                                <span>Project Name</span>
                                            </a>
                                            <ul className="metas is-list small">
                                                <li
                                                    className="list-inline-item z-1"
                                                    data-toggle="tooltip"
                                                    data-placement="bottom"
                                                    data-original-title="<ul class='list-unstyled d-flex flex-column gap-2xs m-none'><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/2216e7ab-c701-4503-83a2-ae7b91afb15d/sq150.jpeg'></div><span>Alexandra Jolly</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/3155b942-7535-4b0b-8ded-97eb42a92e1b/sq150.jpeg'></div><span>Emma Salvarelli</span></li>"
                                                    data-html="true"
                                                    data-boundary="window"
                                                >
                                                    <ul className="metas is-list">
                                                        <li>
                                                            <div className="thumbnail-stack">
                                                                <div className="thumbnail is-oval is-xs">
                                                                    <img src="https://inject-intrap.s3.amazonaws.com/images/d5b965a6-9324-45d3-aac3-613e623d95d1/sq150.jpeg" />
                                                                </div>
                                                                <div className="thumbnail is-oval is-xs">
                                                                    <img src="https://inject-intrap.s3.amazonaws.com/images/e3af9c9d-3c0f-4fbd-a728-ce925a201011/sq150.jpeg" />
                                                                </div>
                                                            </div>
                                                            <a href="/program/71/project/2903/mentors">
                                                                <small className="text-muted">2 Members</small>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>Created on 16th July 2024</li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <a className="btn btn-transparent btn-icon position-relative z-1" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="icon is-20px icon-options" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">
                                                    Open application page
                                                </a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item is-danger" href="#">
                                                    <span className="icon icon-delete dropdown-item--icon"></span>
                                                    <div className="dropdown-item--label">
                                                        <span className="d-flex">Delete</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-targets">
                                        <div className="card-target-wrapper">
                                            <div className="card-target to-collapse is-collapsed d-block" data-toggle="collapse" data-target="#collapseContent1" aria-expanded="false">
                                                <div className="d-flex align-items-center flex-fill">
                                                    <div className="d-flex align-items-center gap-2xs flex-grow-1">
                                                        <span className="icon icon-clipboard-text is-sm"></span>
                                                        <span>Application</span>
                                                    </div>
                                                    <span className="icon icon-chevron-right is-sm"></span>
                                                </div>
                                            </div>
                                            <div className="collapse px-md pb-md" id="collapseContent1">
                                                <div className="bg-highlight rounded p-md">Application Form</div>
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
                                            <a className="btn btn-lg btn-default btn-block" href="#">
                                                
                                                <span>Open application page</span>
                                                <span className="icon icon-new-tab"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-infos is-linked d-flex align-items-start gap-sm">
                                        <span className="icon icon--letter is-40px">
                                            <span>P</span>
                                        </span>
                                        <div className="card-title flex-grow-1">
                                            <a href="#" className="h4 mb-none line-clamp-1 d-flex align-items-center gap-2xs">
                                                <span>Project Name</span>
                                            </a>
                                            <ul className="metas is-list small">
                                                <li
                                                    className="list-inline-item z-1"
                                                    data-toggle="tooltip"
                                                    data-placement="bottom"
                                                    data-original-title="<ul class='list-unstyled d-flex flex-column gap-2xs m-none'><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/2216e7ab-c701-4503-83a2-ae7b91afb15d/sq150.jpeg'></div><span>Alexandra Jolly</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/3155b942-7535-4b0b-8ded-97eb42a92e1b/sq150.jpeg'></div><span>Emma Salvarelli</span></li>"
                                                    data-html="true"
                                                    data-boundary="window"
                                                >
                                                    <ul className="metas is-list">
                                                        <li>
                                                            <div className="thumbnail-stack">
                                                                <div className="thumbnail is-oval is-xs">
                                                                    <img src="https://inject-intrap.s3.amazonaws.com/images/d5b965a6-9324-45d3-aac3-613e623d95d1/sq150.jpeg" />
                                                                </div>
                                                                <div className="thumbnail is-oval is-xs">
                                                                    <img src="https://inject-intrap.s3.amazonaws.com/images/e3af9c9d-3c0f-4fbd-a728-ce925a201011/sq150.jpeg" />
                                                                </div>
                                                            </div>
                                                            <a href="/program/71/project/2903/mentors">
                                                                <small className="text-muted">2 Members</small>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>Created on 16th July 2024</li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <a className="btn btn-transparent btn-icon position-relative z-1" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="icon is-20px icon-options" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">
                                                    Open application page
                                                </a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item is-danger" href="#">
                                                    <span className="icon icon-delete dropdown-item--icon"></span>
                                                    <div className="dropdown-item--label">
                                                        <span className="d-flex">Delete</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-targets">
                                        <div className="card-target-wrapper">
                                            <div className="card-target to-collapse is-collapsed d-block" data-toggle="collapse" data-target="#collapseContent1a" aria-expanded="false">
                                                <div className="d-flex align-items-center flex-fill">
                                                    <div className="d-flex align-items-center gap-2xs flex-grow-1">
                                                        <span className="icon icon-clipboard-text is-sm"></span>
                                                        <span>Application</span>
                                                    </div>
                                                    <span className="icon icon-chevron-right is-sm"></span>
                                                </div>
                                            </div>
                                            <div className="collapse px-md pb-md" id="collapseContent1a">
                                                <div className="bg-highlight rounded p-md">Application Form</div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="card-links">
                                        <div className="d-flex align-items-center justify-content-between text-muted mb-3">
                                            <span className="small font-weight-bold text-truncate mr-2">Application status</span>
                                            <div className="badges">
                                                <div className="badge is-pill is-progress">
                                                    <span className="icon icon-status-dashed"></span>
                                                    <span>In review</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-actions">
                                            <a className="btn btn-lg btn-default btn-block" href="#">
                                                
                                                <span>Open application page</span>
                                                <span className="icon icon-new-tab"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-infos is-linked d-flex align-items-start gap-sm">
                                        <span className="icon icon--letter is-40px">
                                            <span>P</span>
                                        </span>
                                        <div className="card-title flex-grow-1">
                                            <a href="#" className="h4 mb-none line-clamp-1 d-flex align-items-center gap-2xs">
                                                <span>Project Name</span>
                                            </a>
                                            <ul className="metas is-list small">
                                                <li
                                                    className="list-inline-item z-1"
                                                    data-toggle="tooltip"
                                                    data-placement="bottom"
                                                    data-original-title="<ul class='list-unstyled d-flex flex-column gap-2xs m-none'><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/2216e7ab-c701-4503-83a2-ae7b91afb15d/sq150.jpeg'></div><span>Alexandra Jolly</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/3155b942-7535-4b0b-8ded-97eb42a92e1b/sq150.jpeg'></div><span>Emma Salvarelli</span></li>"
                                                    data-html="true"
                                                    data-boundary="window"
                                                >
                                                    <ul className="metas is-list">
                                                        <li>
                                                            <div className="thumbnail-stack">
                                                                <div className="thumbnail is-oval is-xs">
                                                                    <img src="https://inject-intrap.s3.amazonaws.com/images/d5b965a6-9324-45d3-aac3-613e623d95d1/sq150.jpeg" />
                                                                </div>
                                                                <div className="thumbnail is-oval is-xs">
                                                                    <img src="https://inject-intrap.s3.amazonaws.com/images/e3af9c9d-3c0f-4fbd-a728-ce925a201011/sq150.jpeg" />
                                                                </div>
                                                            </div>
                                                            <a href="/program/71/project/2903/mentors">
                                                                <small className="text-muted">2 Members</small>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>Created on 16th July 2024</li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <a className="btn btn-transparent btn-icon position-relative z-1" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="icon is-20px icon-options" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">
                                                    Open application page
                                                </a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item is-danger" href="#">
                                                    <span className="icon icon-delete dropdown-item--icon"></span>
                                                    <div className="dropdown-item--label">
                                                        <span className="d-flex">Delete</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-targets">
                                        <div className="card-target-wrapper">
                                            <div className="card-target to-collapse is-collapsed d-block" data-toggle="collapse" data-target="#collapseContent2" aria-expanded="false">
                                                <div className="d-flex align-items-center flex-fill">
                                                    <div className="d-flex align-items-center gap-2xs flex-grow-1">
                                                        <span className="icon icon-clipboard-text is-sm"></span>
                                                        <span>Application</span>
                                                    </div>
                                                    <span className="icon icon-chevron-right is-sm"></span>
                                                </div>
                                            </div>
                                            <div className="collapse px-md pb-md" id="collapseContent2">
                                                <div className="bg-highlight rounded p-md">Application Form</div>
                                            </div>
                                            
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
                                        <span className="icon icon--letter is-40px">
                                            <span>P</span>
                                        </span>
                                        <div className="card-title flex-grow-1">
                                            <a href="#" className="h4 mb-none line-clamp-1 d-flex align-items-center gap-2xs">
                                                <span>Project Name</span>
                                            </a>
                                            <ul className="metas is-list small">
                                                <li
                                                    className="list-inline-item z-1"
                                                    data-toggle="tooltip"
                                                    data-placement="bottom"
                                                    data-original-title="<ul class='list-unstyled d-flex flex-column gap-2xs m-none'><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/2216e7ab-c701-4503-83a2-ae7b91afb15d/sq150.jpeg'></div><span>Alexandra Jolly</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/3155b942-7535-4b0b-8ded-97eb42a92e1b/sq150.jpeg'></div><span>Emma Salvarelli</span></li>"
                                                    data-html="true"
                                                    data-boundary="window"
                                                >
                                                    <ul className="metas is-list">
                                                        <li>
                                                            <div className="thumbnail-stack">
                                                                <div className="thumbnail is-oval is-xs">
                                                                    <img src="https://inject-intrap.s3.amazonaws.com/images/d5b965a6-9324-45d3-aac3-613e623d95d1/sq150.jpeg" />
                                                                </div>
                                                                <div className="thumbnail is-oval is-xs">
                                                                    <img src="https://inject-intrap.s3.amazonaws.com/images/e3af9c9d-3c0f-4fbd-a728-ce925a201011/sq150.jpeg" />
                                                                </div>
                                                            </div>
                                                            <a href="/program/71/project/2903/mentors">
                                                                <small className="text-muted">2 Members</small>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>Created on 16th July 2024</li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <a className="btn btn-transparent btn-icon position-relative z-1" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="icon is-20px icon-options" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">
                                                    Open application page
                                                </a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item is-danger" href="#">
                                                    <span className="icon icon-delete dropdown-item--icon"></span>
                                                    <div className="dropdown-item--label">
                                                        <span className="d-flex">Delete</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-targets">
                                        <div className="card-target-wrapper">
                                            <div className="card-target to-collapse is-collapsed d-block" data-toggle="collapse" data-target="#collapseContent3" aria-expanded="false">
                                                <div className="d-flex align-items-center flex-fill">
                                                    <div className="d-flex align-items-center gap-2xs flex-grow-1">
                                                        <span className="icon icon-clipboard-text is-sm"></span>
                                                        <span>Application</span>
                                                    </div>
                                                    <span className="icon icon-chevron-right is-sm"></span>
                                                </div>
                                            </div>
                                            <div className="collapse px-md pb-md" id="collapseContent3">
                                                <div className="bg-highlight rounded p-md">Application Form</div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="card-links">
                                        <div className="d-flex align-items-center justify-content-between text-muted mb-3">
                                            <span className="small font-weight-bold text-truncate mr-2">Registration status</span>
                                            <div className="badges">
                                                <div className="badge is-pill is-open">
                                                    <span className="icon icon-status-filled"></span>
                                                    <span>Accepted</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-actions">
                                            <a className="btn btn-lg btn-default btn-block" href="#">
                                                
                                                <span>Open application page</span>
                                                <span className="icon icon-new-tab"></span>
                                            </a>
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
