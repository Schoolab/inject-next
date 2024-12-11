import React from "react";

export interface SidebarManageProps {}

export const SidebarManage = ({}: SidebarManageProps) => {
    return (
        <aside className="application-sidebar d-none d-lg-block" id="leftMainSidebar">
            <div className="sidebar overflow-auto">
                <div id="accordionManageNav" className="d-flex flex-column flex-fill gap-xl px-24px pt-24px pb-32px accordion">
                    <ul className="nav nav-main flex-column">
                        <li className="nav-item">
                            <a id="headingSetup" href="#" className="nav-link active" type="button" data-toggle="collapse" data-target="#collapseSetup" aria-expanded="true" aria-controls="collapseSetup">
                                <span className="nav-link--icon icon icon-school" aria-hidden="true" />
                                <span className="nav-link--label">Program</span>
                            </a>
                            <ul id="collapseSetup" className="collapse show" aria-labelledby="headingSetup" data-parent="#accordionManageNav">
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">🚀 Getting Started</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Basic info</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Registration rules</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Managers</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Public page</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Program page</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Hooks</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Segment</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a id="headingRegistrations" href="#" className="nav-link" type="button" data-toggle="collapse" data-target="#collapseParticipants" aria-expanded="false" aria-controls="collapseParticipants">
                                <span className="nav-link--icon icon icon-account-group" aria-hidden="true" />
                                <span className="nav-link--label">Participants</span>
                            </a>
                            <ul id="collapseParticipants" className="collapse" aria-labelledby="headingParticipants" data-parent="#accordionManageNav">
                                
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Application form</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link ">
                                        <span className="nav-link--label">Registration list</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Types</span>
                                    </a>
                                </li>
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
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Certificates</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a id="headingRegistrations" href="#" className="nav-link" type="button" data-toggle="collapse" data-target="#collapseProjects" aria-expanded="false" aria-controls="collapseProjects">
                                <span className="nav-link--icon icon icon-clipboard-text" aria-hidden="true" />
                                <span className="nav-link--label">Projects</span>
                            </a>
                            <ul id="collapseProjects" className="collapse" aria-labelledby="headingProjects" data-parent="#accordionManageNav">
                                <li>
                                    <a href="#" className="nav-link ">
                                        <span className="nav-link--label">Configuration</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Application form</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Registration list</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Types</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">List</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a id="headingRegistrations" href="#" className="nav-link" type="button" data-toggle="collapse" data-target="#collapseEvaluations" aria-expanded="false" aria-controls="collapseEvaluations">
                                <span className="nav-link--icon icon icon-gavel" aria-hidden="true" />
                                <span className="nav-link--label">Evaluations</span>
                            </a>
                            <ul id="collapseEvaluations" className="collapse" aria-labelledby="headingEvaluations" data-parent="#accordionManageNav">
                                <li>
                                    <a href="#" className="nav-link ">
                                        <span className="nav-link--label">Juries applications form</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Juries registration list</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Juries list</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Juries votes</span>
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
                            <a id="headingLearning" href="#" className="nav-link" type="button" data-toggle="collapse" data-target="#collapseCoaching" aria-expanded="false" aria-controls="collapseCoaching">
                                <span className="nav-link--icon icon icon-account-supervisor-circle" aria-hidden="true" />
                                <span className="nav-link--label">Coaching</span>
                            </a>
                            <ul id="collapseCoaching" className="collapse" aria-labelledby="headingCoaching" data-parent="#accordionManageNav">
                                <li>
                                    <a href="#" className="nav-link ">
                                        <span className="nav-link--label">Experts configuration</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link ">
                                        <span className="nav-link--label">Experts application form</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Experts registration list</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Experts list</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Experts types</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Delivrables</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Coaching session</span>
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
                            <a id="headingLearning" href="#" className="nav-link" type="button" data-toggle="collapse" data-target="#collapseObjectives" aria-expanded="false" aria-controls="collapseObjectives">
                                <span className="nav-link--icon icon icon-bullseye-arrow" aria-hidden="true" />
                                <span className="nav-link--label">Objectives</span>
                            </a>
                            <ul id="collapseObjectives" className="collapse" aria-labelledby="headingObjectives" data-parent="#accordionManageNav">
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Configuration</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Milestones</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Delivrables</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Progression</span>
                                    </a>
                                </li>
                         
                         
                            </ul>
                        </li>
                    
                        <li className="nav-item">
                            <a id="headingLearning" href="#" className="nav-link" type="button" data-toggle="collapse" data-target="#collapseLearning" aria-expanded="false" aria-controls="collapseLearning">
                                <span className="nav-link--icon icon icon-library" aria-hidden="true" />
                                <span className="nav-link--label">Learning</span>
                            </a>
                            <ul id="collapseLearning" className="collapse" aria-labelledby="headingLearning" data-parent="#accordionManageNav">
                                <li>
                                    <a href="#" className="nav-link ">
                                        <span className="nav-link--label">Configuration</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link ">
                                        <span className="nav-link--label">Content</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Delivrables</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Progression</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a id="headingContent" href="#" className="nav-link" type="button" data-toggle="collapse" data-target="#collapseContent" aria-expanded="false" aria-controls="collapseContent">
                                <span className="nav-link--icon icon icon-book-open-blank-variant" />
                                <span className="nav-link--label">Library</span>
                            </a>
                            <ul id="collapseContent" className="collapse" aria-labelledby="headingContent" data-parent="#accordionManageNav">
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Ressources</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span className="nav-link--label">Folders</span>
                                    </a>
                                </li>
                      
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a id="headingSurveys" href="#" className="nav-link" type="button" data-toggle="collapse" data-target="#collapseSurveys" aria-expanded="false" aria-controls="collapseSurveys">
                                <span className="nav-link--icon icon icon-format-list-checks" aria-hidden="true" />
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
                    </ul>
                    <ul className="nav nav-main flex-column">
                        <li className="nav-item ">
                            <span className="nav-title">Engagement</span>
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
                            <span className="nav-title">Analytics</span>
                        </li>
               
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
                            <a id="headingData" href="#" className="nav-link" type="button" data-toggle="collapse" data-target="#collapseData" aria-expanded="false" aria-controls="collapseData">
                                <span className="nav-link--icon icon icon-chart-donut" />
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
                    
                </div>
            </div>
        </aside>
    );
};
