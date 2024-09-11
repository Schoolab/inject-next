import React from "react";

export interface SidebarManageProps {}

export const SidebarManage = ({}: SidebarManageProps) => {
    return (
        <aside className="application-sidebar d-none d-lg-block" id="leftMainSidebar">
            <div className="sidebar overflow-auto">
                <div id="accordionManageNav" className="d-flex flex-column flex-fill gap-xl px-24px pt-24px pb-32px accordion">
                    <ul className="nav nav-main flex-column">
                        <li className="nav-item">
                            <a id="headingInsight" href="#" className="nav-link" type="button" data-toggle="collapse" data-target="#collapseInsight" aria-expanded="false" aria-controls="collapseInsight">
                                <span className="nav-link--icon icon icon-chart-line" aria-hidden="true" />
                                <span className="nav-link--label">Insight</span>
                            </a>
                            <ul id="collapseInsight" className="collapse" aria-labelledby="headingInsight" data-parent="#accordionManageNav">
                                <li>
                                    <a href="#" className="nav-link ">
                                        <span className="nav-link--label">Overview</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Engagement</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Participants</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Projects</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Learning Course</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Objectives</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Experts</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Evaluations</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Mails</span>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a id="headingSetup" href="#" className="nav-link active" type="button" data-toggle="collapse" data-target="#collapseSetup" aria-expanded="true" aria-controls="collapseSetup">
                                <span className="nav-link--icon icon icon-cog" aria-hidden="true" />
                                <span className="nav-link--label">Setup</span>
                            </a>
                            <ul id="collapseSetup" className="collapse show" aria-labelledby="headingSetup" data-parent="#accordionManageNav">
                                <li>
                                    <a href="#" className="nav-link active">
                                        <span className="nav-link--label">Program</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Registration</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Application forms</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Projects</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Objectives</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Learning Course</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Experts</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Hooks</span>
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
                            <a id="headingRegistrations" href="#" className="nav-link" type="button" data-toggle="collapse" data-target="#collapseRegistrations" aria-expanded="false" aria-controls="collapseRegistrations">
                                <span className="nav-link--icon icon icon-project" aria-hidden="true" />
                                <span className="nav-link--label">Registrations</span>
                            </a>
                            <ul id="collapseRegistrations" className="collapse" aria-labelledby="headingRegistrations" data-parent="#accordionManageNav">
                                <li>
                                    <a href="#" className="nav-link ">
                                        <span className="nav-link--label">Participants</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Projects</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Experts</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Juries</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a id="headingLearning" href="#" className="nav-link" type="button" data-toggle="collapse" data-target="#collapseLearning" aria-expanded="false" aria-controls="collapseLearning">
                                <span className="nav-link--icon icon icon-learning" aria-hidden="true" />
                                <span className="nav-link--label">Learning</span>
                            </a>
                            <ul id="collapseLearning" className="collapse" aria-labelledby="headingLearning" data-parent="#accordionManageNav">
                                <li>
                                    <a href="#" className="nav-link ">
                                        <span className="nav-link--label">Course</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Delivrables</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a id="headingObjectives" href="#" className="nav-link" type="button" data-toggle="collapse" data-target="#collapseObjectives" aria-expanded="false" aria-controls="collapseObjectives">
                                <span className="nav-link--icon icon icon-objective" aria-hidden="true" />
                                <span className="nav-link--label">Objectives</span>
                            </a>
                            <ul id="collapseObjectives" className="collapse" aria-labelledby="headingObjectives" data-parent="#accordionManageNav">
                                <li>
                                    <a href="#" className="nav-link ">
                                        <span className="nav-link--label">Milestones</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Delivrables</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a id="headingSurveys" href="#" className="nav-link" type="button" data-toggle="collapse" data-target="#collapseSurveys" aria-expanded="false" aria-controls="collapseSurveys">
                                <span className="nav-link--icon icon icon-questionnaire" aria-hidden="true" />
                                <span className="nav-link--label">Surveys</span>
                            </a>
                            <ul id="collapseSurveys" className="collapse" aria-labelledby="headingSurveys" data-parent="#accordionManageNav">
                                <li>
                                    <a href="#" className="nav-link ">
                                        <span className="nav-link--label">Campaigns</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Delivrables</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a id="headingVotes" href="#" className="nav-link" type="button" data-toggle="collapse" data-target="#collapseVotes" aria-expanded="false" aria-controls="collapseVotes">
                                <span className="nav-link--icon icon icon-evaluation" aria-hidden="true" />
                                <span className="nav-link--label">Votes</span>
                            </a>
                            <ul id="collapseVotes" className="collapse" aria-labelledby="headingVotes" data-parent="#accordionManageNav">
                                <li>
                                    <a href="#" className="nav-link ">
                                        <span className="nav-link--label">Jury votes</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Public votes</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a id="headingCoaching" href="#" className="nav-link" type="button" data-toggle="collapse" data-target="#collapseCoaching" aria-expanded="false" aria-controls="collapseCoaching">
                                <span className="nav-link--icon icon icon-coaching" />
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
                                        <span className="nav-link--label">Signatures</span>
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
                            <a id="headingParticipants" href="#" className="nav-link" type="button" data-toggle="collapse" data-target="#collapseParticipants" aria-expanded="false" aria-controls="collapseParticipants">
                                <span className="nav-link--icon icon icon-account" />
                                <span className="nav-link--label">Participants</span>
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
                                        <span className="nav-link--label">Signatures</span>
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
                            <a id="headingStaff" href="#" className="nav-link" type="button" data-toggle="collapse" data-target="#collapseStaff" aria-expanded="false" aria-controls="collapseStaff">
                                <span className="nav-link--icon icon icon-community" />
                                <span className="nav-link--label">Staff</span>
                            </a>
                            <ul id="collapseStaff" className="collapse" aria-labelledby="headingStaff" data-parent="#accordionManageNav">
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Managers</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Experts</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Juries</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Types</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a id="headingContent" href="#" className="nav-link" type="button" data-toggle="collapse" data-target="#collapseContent" aria-expanded="false" aria-controls="collapseContent">
                                <span className="nav-link--icon icon icon-content" />
                                <span className="nav-link--label">Content</span>
                            </a>
                            <ul id="collapseContent" className="collapse" aria-labelledby="headingContent" data-parent="#accordionManageNav">
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Library</span>
                                    </a>
                                </li>
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
                            <a id="headingData" href="#" className="nav-link" type="button" data-toggle="collapse" data-target="#collapseData" aria-expanded="false" aria-controls="collapseData">
                                <span className="nav-link--icon icon icon-plan-data" />
                                <span className="nav-link--label">Data</span>
                            </a>
                            <ul id="collapseData" className="collapse" aria-labelledby="headingData" data-parent="#accordionManageNav">
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Program</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Projects</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Tags</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Exports</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="nav nav-main flex-column">
                        <li className="nav-item">
                            <a href="#" className="nav-link" data-toggle="tooltip" data-placement="right" data-original-title="<p class='m-2px font-weight-bold'>Open in new tab.</p><p class='small'>This link will open in a new tab.</p>" data-html="true" data-boundary="window">
                                <span className="nav-link--icon icon icon-help-center" />
                                <span className="nav-link--label">Help center</span>
                                <span className="icon icon-new-tab is-12px my-4px text-muted" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link" data-toggle="tooltip" data-placement="right" data-original-title="<p class='m-2px font-weight-bold'>Open in new tab.</p><p class='small'>This link will open in a new tab.</p>" data-html="true" data-boundary="window">
                                <span className="nav-link--icon icon icon-release" />
                                <span className="nav-link--label">Release notes</span>
                                <span className="icon icon-new-tab is-12px my-4px text-muted" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
};
