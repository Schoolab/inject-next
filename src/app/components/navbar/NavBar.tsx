import React from "react";
import { useEffect } from "react";
import { tooltips } from "../../../../public/utils/tooltips";
import { nestedDropdown } from "../../../../public/utils/nestedDropdown";
import { Button } from "@/app/components/buttons/Button";
import { Theme } from "@/app/components/Theme";
import { Avatar } from "@/app/components/avatars/Avatar";
import { DropdownMenu } from "@/app/components/dropdowns/DropdownMenu";
import { DropdownDivider } from "@/app/components/dropdowns/DropdownDivider";
import { DropdownItem } from "@/app/components/dropdowns/DropdownItem";
import { Role } from "@/app/components/badges/roles/Role";
import { DropdownNested } from "@/app/components/dropdowns/DropdownNested";
import { DropdownHeader } from "@/app/components/dropdowns/DropdownHeader";
import { EmptyState } from "@/app/content/empty-states/EmptyState";
import { Dropdown } from "@/app/components/dropdowns/Dropdown";
import { Logo } from "@/app/components/Logo";
import { Icon } from "@/app/components/icons/Icon";

export interface NavBarProps {
    /**
     * User is logged?
     */
    isLogged?: Boolean;
    /**
     * User is in the hub?
     */
    isHub?: Boolean;
    /**
     * Show Hub?
     */
    showAdmin?: Boolean;
    /**
     * Show admin?
     */
    showNotifs?: Boolean;
    /**
     * Show Notifs?
     */
    showMessages?: Boolean;
    /**
     * Show messages?
     */
    showIA?: Boolean;
    /**
     *theme add a Root css variables
     */
    theme?: "default" | "Inject" | "Schoolab" | "Moho" | "Raiselab";
}

export const Navbar = ({ isLogged = true, isHub = false, showAdmin = true, showNotifs = true, showMessages = true, showIA = true, theme = "Inject" }: NavBarProps) => {
    useEffect(() => {
        tooltips();
        nestedDropdown();
    }, []);
    let logoUrl = "img/inject-logo-dark.svg";
    let logoDarkUrl = "img/inject-logo-dark.svg";
    let logoLightUrl = "img/inject-logo-light.svg";

    switch (theme) {
        case "Schoolab":
            logoUrl = "img/schoolab-logo-light.svg";
            logoDarkUrl = "img/schoolab-logo-light.svg";
            logoLightUrl = "img/schoolab-logo-light.svg";
            break;
        case "Moho":
            logoUrl = "img/moho-logo-light.svg";
            logoDarkUrl = "img/moho-logo-light.svg";
            logoLightUrl = "img/moho-logo-light.svg";
            break;
        case "Raiselab":
            logoUrl = "img/raiselab-logo-light.svg";
            logoDarkUrl = "img/raiselab-logo-light.svg";
            logoLightUrl = "img/raiselab-logo-light.svg";
            break;
        case "Inject":
            logoUrl = "img/inject-logo-light.svg";
            logoDarkUrl = "img/inject-logo-light.svg";
            logoLightUrl = "img/inject-logo-light.svg";
            break;
        case "default":
            logoUrl = "img/inject-logo-dark.svg";
            logoDarkUrl = "img/inject-logo-dark.svg";
            logoLightUrl = "img/inject-logo-light.svg";
            break;
        default:
            logoUrl = "img/inject-logo-dark.svg";
            logoDarkUrl = "img/inject-logo-dark.svg";
            logoLightUrl = "img/inject-logo-light.svg";
            break;
    }
    return (
        <>
            {theme && theme !== "default" && <Theme themeName={theme} />}
            <div className="application-navbar">
                <div className="navbar-container">
                    <div className="navbar">
                        <div className="container-fluid">
                            <div className="flex-nowrap d-flex w-100 gap-xs">
                                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon">
                                        <span className="icon icon-menu" />
                                    </span>
                                </button>
                                <div className="navbar-brand">
                                    <a tabIndex={0} title="" data-toggle="tooltip" href="#" data-original-title="Organization Hub">
                                        <Logo alt={theme} logoThemeDefault={logoUrl} logoThemeLight={logoDarkUrl} logoThemeDark={logoLightUrl} logoStyle={{ maxWidth: 150, width: "100%" }} />
                                    </a>
                                </div>

                                <div className="navbar-options ml-lg-auto">
                                    {isHub ? (
                                        <div className="d-none d-lg-flex flex-fill">
                                            <div className="navbar-option">
                                                <Button label="Programs" iconStartName="program" isActive={true} showActive={false} addClass="navbar-main-btn" />
                                            </div>
                                            <div className="navbar-option">
                                                <Button label="Projects" iconStartName="project" showActive={false} addClass="navbar-main-btn" />
                                            </div>
                                            <div className="navbar-option">
                                                <Button label="Community" iconStartName="community" showActive={false} addClass="navbar-main-btn" />
                                            </div>
                                            <div className="navbar-option">
                                                <Button label="Events" iconStartName="calendar" showActive={false} addClass="navbar-main-btn" />
                                            </div>
                                            <div className="navbar-option">
                                                <Button label="Newsfeed" iconStartName="newsfeed" showActive={false} addClass="navbar-main-btn" />
                                            </div>
                                            <div className="navbar-option">
                                                <Button label="F.A.Q." iconStartName="faq" showActive={false} addClass="navbar-main-btn" />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="d-none d-lg-flex flex-fill">
                                            <div className="navbar-option dropdown">
                                                <a href="#" className="btn navbar-main-btn" data-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" style={{ maxWidth: 256 }}>
                                                    <span className="icon icon-school" aria-hidden="true" />
                                                    <span className="text-truncate">Impact Innovators</span>
                                                    <span className="icon icon-chevron-down" aria-hidden="true" />
                                                </a>
                                                <DropdownMenu style={{ maxWidth: 225 }}>
                                                    <DropdownHeader label="Switch program" />
                                                    <DropdownItem label="Impact Innovators" addClass="text-truncate" />
                                                    <DropdownItem label="Starter 2025" addClass="text-truncate" />
                                                    <DropdownItem label="Schoolab – Saint-Lazare" addClass="text-truncate" />
                                                    <DropdownDivider />
                                                    <DropdownItem label="My programs" badge="3" iconName="program" />
                                                </DropdownMenu>
                                            </div>
                                        </div>
                                    )}
                                    {isLogged ? (
                                        <div className="d-flex gap-xs align-items-center">
                                            <div className="navbar-option  d-none d-lg-flex">
                                                <Button label="My dashboard" type="default" isActive={false} iconStartName="account-circle" addClass="navbar-main-btn" />
                                            </div>
                                            {showAdmin && (
                                                <>
                                                    <div className="navbar-option d-none d-lg-flex">
                                                        <a href="#" aria-label="Admin" className="navbar-option--link">
                                                            <Icon name="admin" data-toggle="tooltip" data-original-title="Admin" />
                                                        </a>
                                                    </div>
                                                    <div className="nav-horizontal-divider d-none d-lg-block" />
                                                </>
                                            )}
                                            {showNotifs && (
                                                <Dropdown addClass="navbar-option d-none d-lg-flex">
                                                    <a href="#" role="button" aria-label="Notifications" className="navbar-option--link" data-toggle="dropdown">
                                                        <Icon name="notifications" dataToggle="tooltip" dataOriginalTitle="Notifications" />
                                                    </a>
                                                    <DropdownMenu direction="right" addClass="dropdown-menu-medium">
                                                        <EmptyState iconTitle="notifications-none" title="You've caught up!" text="There is no new notification yet." labelLink="Manage notifications" bordered={false} spacious={true} />
                                                    </DropdownMenu>
                                                </Dropdown>
                                            )}
                                            {showMessages && (
                                                <div className="navbar-option">
                                                    <a href="#" role="button" aria-label="Messages" className="navbar-option--link">
                                                        <Icon name="comment" dataToggle="tooltip" dataOriginalTitle="Messages" />
                                                    </a>
                                                </div>
                                            )}
                                            {showIA && (
                                                <div className="navbar-option">
                                                    <a href="#" role="button" aria-label="AI Agent" id="messagesSidebar" className="navbar-option--link" data-toggle="modal" data-target="#iaSidebar">
                                                        <svg className="sparkle" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M93.781 51.578C95 50.969 96 49.359 96 48c0-1.375-1-2.969-2.219-3.578 0 0-22.868-1.514-31.781-10.422-8.915-8.91-10.438-31.781-10.438-31.781C50.969 1 49.375 0 48 0s-2.969 1-3.594 2.219c0 0-1.5 22.87-10.406 31.781-8.908 8.913-31.781 10.422-31.781 10.422C1 45.031 0 46.625 0 48c0 1.359 1 2.969 2.219 3.578 0 0 22.873 1.51 31.781 10.422 8.906 8.911 10.406 31.781 10.406 31.781C45.031 95 46.625 96 48 96s2.969-1 3.562-2.219c0 0 1.523-22.871 10.438-31.781 8.913-8.908 31.781-10.422 31.781-10.422Z"
                                                                fill="#000"
                                                            />
                                                        </svg>
                                                        <svg className="sparkle" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M93.781 51.578C95 50.969 96 49.359 96 48c0-1.375-1-2.969-2.219-3.578 0 0-22.868-1.514-31.781-10.422-8.915-8.91-10.438-31.781-10.438-31.781C50.969 1 49.375 0 48 0s-2.969 1-3.594 2.219c0 0-1.5 22.87-10.406 31.781-8.908 8.913-31.781 10.422-31.781 10.422C1 45.031 0 46.625 0 48c0 1.359 1 2.969 2.219 3.578 0 0 22.873 1.51 31.781 10.422 8.906 8.911 10.406 31.781 10.406 31.781C45.031 95 46.625 96 48 96s2.969-1 3.562-2.219c0 0 1.523-22.871 10.438-31.781 8.913-8.908 31.781-10.422 31.781-10.422Z"
                                                                fill="#000"
                                                            />
                                                        </svg>
                                                        <svg className="sparkle" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M93.781 51.578C95 50.969 96 49.359 96 48c0-1.375-1-2.969-2.219-3.578 0 0-22.868-1.514-31.781-10.422-8.915-8.91-10.438-31.781-10.438-31.781C50.969 1 49.375 0 48 0s-2.969 1-3.594 2.219c0 0-1.5 22.87-10.406 31.781-8.908 8.913-31.781 10.422-31.781 10.422C1 45.031 0 46.625 0 48c0 1.359 1 2.969 2.219 3.578 0 0 22.873 1.51 31.781 10.422 8.906 8.911 10.406 31.781 10.406 31.781C45.031 95 46.625 96 48 96s2.969-1 3.562-2.219c0 0 1.523-22.871 10.438-31.781 8.913-8.908 31.781-10.422 31.781-10.422Z"
                                                                fill="#000"
                                                            />
                                                        </svg>
                                                    
                                                    
                                                 
                                                        <Icon name="ai" dataToggle="tooltip" dataOriginalTitle="AI Agent" />
                                                    </a>
                                                </div>
                                            )}

                                            <Dropdown addClass="navbar-option d-none d-lg-flex ml-8px">
                                                <a href="#" role="button" aria-label="Account" className="navbar-thumbnail" data-toggle="dropdown" data-boundary="viewport">
                                                    <Avatar data-toggle="tooltip" data-original-title="Account" />
                                                </a>
                                                <DropdownMenu direction="right" addClass="dropright">
                                                    <DropdownItem label="Profile" addClass="gap-xs">
                                                        <Avatar />
                                                        <div className="d-flex flex-column justify-content-center w-100">
                                                            <span className="d-flex align-items-center gap-2xs">
                                                                John Doe <Role status="admin" />
                                                            </span>
                                                            <span className="small text-muted mb-none">Head of Tests</span>
                                                        </div>
                                                    </DropdownItem>
                                                    <DropdownDivider />
                                                    <DropdownItem label="Profile" />
                                                    <DropdownItem label="Followings" />
                                                    <DropdownItem label="Events" />
                                                    <DropdownItem label="Surveys" />
                                                    <DropdownDivider />
                                                    <DropdownItem label="Settings" iconName="settings" />
                                                    <DropdownNested>
                                                        <DropdownItem label="Theme: Device" iconName="theme-dark" toggle={true} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                                        <DropdownMenu>
                                                            <DropdownItem label="Device theme" active={true} />
                                                            <DropdownItem label="Light theme" active={false} />
                                                            <DropdownItem label="Dark theme" active={false} />
                                                        </DropdownMenu>
                                                    </DropdownNested>
                                                    <DropdownItem label="Help center" iconName="help-center" target="_blank" rel="nofollow" href="https://www.notion.so/Help-Center-INSIDE-7e56175d45bc47e8947e7584f2e3837d" />
                                                    <DropdownDivider />
                                                    <DropdownItem label="Sign out" iconName="signout" type="danger" />
                                                </DropdownMenu>
                                            </Dropdown>
                                        </div>
                                    ) : (
                                        <div className="d-flex gap-xs align-items-center">
                                            <div className="navbar-option">
                                                <Button label="Create an account" type="primary" addClass="navbar-btn" />
                                            </div>
                                            <div className="navbar-option">
                                                <Button label="Log in" type="default" addClass="navbar-btn" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="collapse navbar-collapse pt-3 pt-lg-0" id="navbarNav">
                                <div className="navbar-nav pt-3 pt-lg-0">
                                    <div className="nav-item">
                                        <a className="nav-link" href="#">
                                            Programs Hub
                                        </a>
                                    </div>
                                    <div className="nav-divider" />
                                    <div className="nav-item dropdown ">
                                        <a href="#" className="nav-link d-flex gap-xs border rounded" data-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false">
                                            <span className="d-flex gap-xs flex-fill">
                                                <span className="icon icon-school" aria-hidden="true" />
                                                <span className="text-truncate" style={{ maxWidth: 256 }}>
                                                    Schoolab - Saint Lazare Schoolab - Saint Lazare
                                                </span>
                                            </span>

                                            <span className="icon icon-chevron-down" aria-hidden="true" />
                                        </a>

                                        <div className="dropdown-menu" style={{ maxWidth: `100%` }}>
                                            <h6 className="dropdown-header">Switch program</h6>
                                            <a className="dropdown-item active" href="#">
                                                <span className="text-truncate">Schoolab - Saint Lazare Schoolab - Saint Lazare</span>
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <span>Starter S20</span>
                                            </a>
                                            <div className="dropdown-divider" />
                                            <a className="dropdown-item" href="#">
                                                <span>My programs (3)</span>
                                                <span className="ml-3 icon icon-new-tab" aria-hidden="true" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="nav-item">
                                        <a className="nav-link" href="#">
                                            My space
                                        </a>
                                    </div>
                                    <div className="nav-item">
                                        <a className="nav-link" href="#">
                                            Admin
                                        </a>
                                    </div>
                                    <div className="nav-divider" />
                                    <div className="nav-item">
                                        <a className="nav-link" href="#">
                                            Notifications
                                        </a>
                                    </div>
                                    <div className="nav-item">
                                        <a className="nav-link" href="#">
                                            IA
                                        </a>
                                    </div>
                                    <div className="nav-item">
                                        <a className="nav-link" href="#">
                                            Profile
                                        </a>
                                    </div>
                                    <div className="nav-item">
                                        <a className="nav-link" href="#">
                                            Account settings
                                        </a>
                                    </div>
                                    <div className="nav-item">
                                        <a className="nav-link text-danger" href="#">
                                            Logout
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
