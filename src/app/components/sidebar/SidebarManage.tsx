import React from "react";

export interface SidebarManageProps {}

export const SidebarManage = ({}: SidebarManageProps) => {
    return (
        <aside className="application-sidebar d-none d-lg-block" id="leftMainSidebar">
            <div className="sidebar overflow-auto">
                <div id="accordionManageNav" className="d-flex flex-column flex-fill gap-xl px-24px pt-24px pb-32px accordion">
                    <ul className="nav nav-main flex-column">
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <span className="nav-link--icon icon icon-view-dashboard" aria-hidden="true" />
                                <span className="nav-link--label">Dashboard</span>
                                <span className="badge badge-notification is-interactive" aria-label="New feature">
                                    NEW
                                </span>
                            </a>
                        </li>
                        <li className="nav-item" data-toggle="tooltip" data-placement="right" tabIndex={0} data-original-title="<p class='m-2px font-weight-bold'>Access locked.</p><p class='small'>Ask your organization manager for access.</p>" data-html="true" data-boundary="window">
                            <span className="nav-link disabled">
                                <span className="nav-link--icon icon icon-chart-line" aria-hidden="true" />
                                <span className="nav-link--label">Insight</span>
                                <span className="nav-link--icon icon icon-lock" aria-hidden="true" />
                            </span>
                        </li>
                        <li className="nav-item">
                            <a id="headingProgram" href="#" className="nav-link active" type="button" data-toggle="collapse" data-target="#collapseProgram" aria-expanded="true" aria-controls="collapseProgram">
                                <span className="nav-link--icon icon icon-school" aria-hidden="true" />
                                <span className="nav-link--label">Program</span>
                                <span className="badge badge-notification is-accent" aria-label="2 notifications in this group">
                                    2
                                </span>
                            </a>
                            <ul id="collapseProgram" className="collapse show" aria-labelledby="headingProgram" data-parent="#accordionManageNav">
                                <li>
                                    <a href="#" className=" nav-link active" aria-current="page">
                                        <span className="nav-link--icon" aria-hidden="true">
                                            🚀
                                        </span>
                                        <span className="nav-link--label">Getting started</span>
                                        <span className="badge badge-notification is-accent" aria-label="2 notifications">
                                            2
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Features</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Details</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Managers</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Tags</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Hooks</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Data</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Exports</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link" data-toggle="tooltip" data-placement="right" data-original-title="<p class='m-2px font-weight-bold'>Open in new tab.</p><p class='small'>This link will open in a new tab.</p>" data-html="true" data-boundary="window">
                                        <span className="nav-link--label">Google Drive</span>
                                        <span className="icon icon-arrow-top-right is-12px my-4px text-muted" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link" data-toggle="tooltip" data-placement="right" data-original-title="<p class='m-2px font-weight-bold'>Open in new tab.</p><p class='small'>This link will open in a new tab.</p>" data-html="true" data-boundary="window">
                                        <span className="nav-link--label">Pipedrive</span>
                                        <span className="icon icon-arrow-top-right is-12px my-4px text-muted" />
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="nav nav-main flex-column">
                        <li className="nav-item ">
                            <span className="nav-title">Daily Basis</span>
                        </li>
                        <li className="nav-item">
                            <a id="headingParticipants" href="#" className="nav-link" type="button" data-toggle="collapse" data-target="#collapseParticipants" aria-expanded="false" aria-controls="collapseParticipants">
                                <span className="nav-link--icon icon icon-account" />
                                <span className="nav-link--label">Participants</span>
                                <span className="badge badge-notification is-accent" aria-label="More than 9 notifications in this group">
                                    9+
                                </span>
                            </a>
                            <ul id="collapseParticipants" className="collapse" aria-labelledby="headingParticipants" data-parent="#accordionManageNav">
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">List</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Types</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Registrations</span>
                                        <span className="badge badge-notification is-accent" aria-label="More than 9 notifications">
                                            9+
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Deliverables</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Certificates</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a id="headingProjects" href="#" className="nav-link" type="button" data-toggle="collapse" data-target="#collapseProjects" aria-expanded="false" aria-controls="collapseProjects">
                                <span className="nav-link--icon icon icon-clipboard-text" />
                                <span className="nav-link--label">Projects</span>
                                <span className="badge badge-notification is-accent" aria-label="3 notifications in this group">
                                    3
                                </span>
                            </a>
                            <ul id="collapseProjects" className="collapse" aria-labelledby="headingProjects" data-parent="#accordionManageNav">
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">List</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Applications</span>
                                        <span className="badge badge-notification is-accent" aria-label="3 notifications">
                                            3
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Deliverables</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a id="headingSurveys" href="#" className="nav-link" type="button" data-toggle="collapse" data-target="#collapseSurveys" aria-expanded="false" aria-controls="collapseSurveys">
                                <span className="nav-link--icon icon icon-questionnaire" />
                                <span className="nav-link--label">Surveys</span>
                            </a>
                            <ul id="collapseSurveys" className="collapse" aria-labelledby="headingSurveys" data-parent="#accordionManageNav">
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Campaigns</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Deliverables</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a id="headingCoaching" href="#" className="nav-link" type="button" data-toggle="collapse" data-target="#collapseCoaching" aria-expanded="false" aria-controls="collapseCoaching">
                                <span className="nav-link--icon icon icon-account-supervisor-circle" />
                                <span className="nav-link--label">Coaching</span>
                            </a>
                            <ul id="collapseCoaching" className="collapse" aria-labelledby="headingCoaching" data-parent="#accordionManageNav">
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Sessions</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Library</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Newsfeed</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Experts &amp; Coaches</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a id="headingEvaluations" href="#" className="nav-link" type="button" data-toggle="collapse" data-target="#collapseEvaluations" aria-expanded="false" aria-controls="collapseEvaluations">
                                <span className="nav-link--icon icon icon-gavel" />
                                <span className="nav-link--label">Evaluations</span>
                            </a>
                            <ul id="collapseEvaluations" className="collapse" aria-labelledby="headingEvaluations" data-parent="#accordionManageNav">
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Sessions</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Public votes</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Jury members</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a id="headingFAQ" href="#" className="nav-link" type="button" data-toggle="collapse" data-target="#collapseFAQ" aria-expanded="false" aria-controls="collapseFAQ">
                                <span className="nav-link--icon icon icon-faq" />
                                <span className="nav-link--label">F.A.Q.</span>
                                <span className="badge badge-notification is-interactive">NEW</span>
                                <span className="badge badge-notification is-accent" aria-label="4 notifications">
                                    4
                                </span>
                            </a>
                            <ul id="collapseFAQ" className="collapse" aria-labelledby="headingFAQ" data-parent="#accordionManageNav">
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Questions</span>
                                        <span className="badge badge-notification is-accent" aria-label="4 notifications">
                                            4
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Responses</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a id="headingEvents" href="#" className="nav-link" type="button" data-toggle="collapse" data-target="#collapseEvents" aria-expanded="false" aria-controls="collapseEvents">
                                <span className="nav-link--icon icon icon-calendar" />
                                <span className="nav-link--label">Events</span>
                            </a>
                            <ul id="collapseEvents" className="collapse" aria-labelledby="headingEvents" data-parent="#accordionManageNav">
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">List</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Venues</span>
                                        <span className="badge badge-notification is-interactive">NEW</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Signatures</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a id="headingSocial" href="#" className="nav-link" type="button" data-toggle="collapse" data-target="#collapseSocial" aria-expanded="false" aria-controls="collapseSocial">
                                <span className="nav-link--icon icon icon-comment" />
                                <span className="nav-link--label">Social</span>
                            </a>
                            <ul id="collapseSocial" className="collapse" aria-labelledby="headingSocial" data-parent="#accordionManageNav">
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Newsfeed</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Comments</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Messages</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="nav nav-main flex-column flex-fill">
                        <li className="nav-item ">
                            <span className="nav-title">Foundations</span>
                        </li>
                        <li className="nav-item">
                            <a id="headingLearning" href="#" className="nav-link" type="button" data-toggle="collapse" data-target="#collapseLearning" aria-expanded="false" aria-controls="collapseLearning">
                                <span className="nav-link--icon icon icon-learning" />
                                <span className="nav-link--label">Learning</span>
                            </a>
                            <ul id="collapseLearning" className="collapse" aria-labelledby="headingLearning" data-parent="#accordionManageNav">
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Courses</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Progression</span>
                                        <span className="badge badge-notification is-interactive">NEW</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a id="headingObjectives" href="#" className="nav-link" type="button" data-toggle="collapse" data-target="#collapseObjectives" aria-expanded="false" aria-controls="collapseObjectives">
                                <span className="nav-link--icon icon icon-objective" />
                                <span className="nav-link--label">Objectives</span>
                            </a>
                            <ul id="collapseObjectives" className="collapse" aria-labelledby="headingObjectives" data-parent="#accordionManageNav">
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Milestones</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Deliverables</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Progression</span>
                                        <span className="badge badge-notification is-interactive">NEW</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a id="headingLibrary" href="#" className="nav-link" type="button" data-toggle="collapse" data-target="#collapseLibrary" aria-expanded="false" aria-controls="collapseLibrary">
                                <span className="nav-link--icon icon icon-folder" />
                                <span className="nav-link--label">Library</span>
                            </a>
                            <ul id="collapseLibrary" className="collapse" aria-labelledby="headingLibrary" data-parent="#accordionManageNav">
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Resources</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Folders</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Tags</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a id="headingContent" href="#" className="nav-link" type="button" data-toggle="collapse" data-target="#collapseContent" aria-expanded="false" aria-controls="collapseContent">
                                <span className="nav-link--icon icon icon-book-open-variant" />
                                <span className="nav-link--label">Content</span>
                            </a>
                            <ul id="collapseContent" className="collapse" aria-labelledby="headingContent" data-parent="#accordionManageNav">
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Public pages</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Participants pages</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a id="headingMails" href="#" className="nav-link" type="button" data-toggle="collapse" data-target="#collapseMails" aria-expanded="false" aria-controls="collapseMails">
                                <span className="nav-link--icon icon icon-email" />
                                <span className="nav-link--label">Mails</span>
                            </a>
                            <ul id="collapseMails" className="collapse" aria-labelledby="headingMails" data-parent="#accordionManageNav">
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Campaigns</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Notifications</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Templates</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Segments</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Activities</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="nav nav-main flex-column">
                        <li className="nav-item">
                            <a href="#" className="nav-link" data-toggle="tooltip" data-placement="right" data-original-title="<p class='m-2px font-weight-bold'>Open in new tab.</p><p class='small'>This link will open in a new tab.</p>" data-html="true" data-boundary="window">
                                <span className="nav-link--icon icon icon-lifebuoy" />
                                <span className="nav-link--label">Help center</span>
                                <span className="icon icon-arrow-top-right is-12px my-4px text-muted" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link" data-toggle="tooltip" data-placement="right" data-original-title="<p class='m-2px font-weight-bold'>Open in new tab.</p><p class='small'>This link will open in a new tab.</p>" data-html="true" data-boundary="window">
                                <span className="nav-link--icon icon icon-alert-decagram" />
                                <span className="nav-link--label">Release notes</span>
                                <span className="icon icon-arrow-top-right is-12px my-4px text-muted" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
};
