import React from "react";

export interface SidebarAdminProps {}

export const SidebarAdmin = ({}: SidebarAdminProps) => {
    return (
        <aside className="application-sidebar d-none d-lg-block" id="leftMainSidebar">
            <div className="sidebar overflow-auto">
                <div id="accordionManageNav" className="d-flex flex-column flex-fill gap-xl px-24px pt-24px pb-32px accordion">
                    <ul className="nav nav-main flex-column">
                        <li className="nav-item ">
                            <span className="nav-title">Schoolab</span>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <span className="nav-link--icon icon icon-chart-line" />
                                <span className="nav-link--label">Overview</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className=" nav-link active">
                                <span className="nav-link--icon icon icon-org" />
                                <span className="nav-link--label">Organization</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className=" nav-link">
                                <span className="nav-link--icon icon icon-school" />
                                <span className="nav-link--label">Programs</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className=" nav-link">
                                <span className="nav-link--icon icon icon-clipboard-text" />
                                <span className="nav-link--label">Projects</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className=" nav-link">
                                <span className="nav-link--icon icon icon-account" />
                                <span className="nav-link--label">Users</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className=" nav-link">
                                <span className="nav-link--icon icon icon-account-supervisor-circle" />
                                <span className="nav-link--label">Coaching</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className=" nav-link">
                                <span className="nav-link--icon icon icon-calendar" />
                                <span className="nav-link--label">Events</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className=" nav-link">
                                <span className="nav-link--icon icon icon-toolbox" />
                                <span className="nav-link--label">Toolbox</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className=" nav-link">
                                <span className="nav-link--icon icon icon-tag" />
                                <span className="nav-link--label">Tags</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className=" nav-link">
                                <span className="nav-link--icon icon icon-console" />
                                <span className="nav-link--label">Logs</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className=" nav-link">
                                <span className="nav-link--icon icon icon-email" />
                                <span className="nav-link--label">Mails</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="nav nav-main flex-column">
                        <li className="nav-item ">
                            <span className="nav-title">External</span>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <span className="nav-link--label">Overview</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <span className="nav-link--label">Programs</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <span className="nav-link--label">Settings</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
};
