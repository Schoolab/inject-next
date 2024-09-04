import React from "react";

export interface SidebarManageOldProps {}

export const SidebarManageOld = ({}: SidebarManageOldProps) => {
    return (
        <aside className="application-sidebar d-none d-lg-block" id="leftMainSidebar">
            <div className="sidebar overflow-auto">
                <div className="d-flex flex-column flex-fill gap-xl px-24px pt-24px pb-32px">
                    <ul className="nav nav-main flex-column">
                        <li className="nav-item ">
                            <span className="nav-title">Essentials</span>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link active">
                                <span className="nav-link--column">
                                    <span className="nav-link--label">Dashboard</span>
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className=" nav-link">
                                <span className="nav-link--column">
                                    <span className="nav-link--label">Insight</span>
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className=" nav-link">
                                <span className="nav-link--column">
                                    <span className="nav-link--label">Setup</span>
                                </span>
                                <span className="badge badge-notification is-accent">2</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="nav nav-main flex-column">
                        <li className="nav-item ">
                            <span className="nav-title">Daily Basis</span>
                        </li>
                        <li className="nav-item">
                            <a href="#" className=" nav-link">
                                <span className="nav-link--column">
                                    <span className="nav-link--label">Registrations</span>
                                </span>
                                <span className="badge badge-notification is-accent">9+</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className=" nav-link">
                                <span className="nav-link--column">
                                    <span className="nav-link--label">Applications</span>
                                </span>
                                <span className="badge badge-notification is-accent">3</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className=" nav-link">
                                <span className="nav-link--column">
                                    <span className="nav-link--label">Learning</span>
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className=" nav-link">
                                <span className="nav-link--column">
                                    <span className="nav-link--label">Objectives</span>
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className=" nav-link">
                                <span className="nav-link--column">
                                    <span className="nav-link--label">Surveys</span>
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className=" nav-link">
                                <span className="nav-link--column">
                                    <span className="nav-link--label">Votes</span>
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className=" nav-link">
                                <span className="nav-link--column">
                                    <span className="nav-link--label">Coaching</span>
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className=" nav-link">
                                <span className="nav-link--column">
                                    <span className="nav-link--label">Events</span>
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className=" nav-link">
                                <span className="nav-link--column">
                                    <span className="nav-link--label">Mails</span>
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className=" nav-link">
                                <span className="nav-link--column">
                                    <span className="nav-link--label">Social</span>
                                </span>
                            </a>
                        </li>
                    </ul>
                    <ul className="nav nav-main flex-column flex-fill">
                        <li className="nav-item ">
                            <span className="nav-title">Foundations</span>
                        </li>
                        <li className="nav-item">
                            <a href="#" className=" nav-link">
                                <span className="nav-link--column">
                                    <span className="nav-link--label">Participants</span>
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className=" nav-link">
                                <span className="nav-link--column">
                                    <span className="nav-link--label">Staff</span>
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className=" nav-link">
                                <span className="nav-link--column">
                                    <span className="nav-link--label">Projects</span>
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className=" nav-link">
                                <span className="nav-link--column">
                                    <span className="nav-link--label">Content</span>
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className=" nav-link">
                                <span className="nav-link--column">
                                    <span className="nav-link--label">Data</span>
                                </span>
                            </a>
                        </li>
                    </ul>
                    <ul className="nav nav-main flex-column">
                        <li className="nav-item">
                            <a href="#" className=" nav-link">
                                <span className="nav-link--icon icon icon-help-center" />
                                <span className="nav-link--label">Help center</span>
                                <span className="icon icon-new-tab is-12px my-4px text-muted" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className=" nav-link">
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
