import React from "react";
import { useEffect } from "react";
import { tooltips } from "../../../public/utils/tooltips";
import { Button } from "./Button";
import { Theme } from "./Theme";
export interface NavBarProps {
    /**
     * User is logged ?
     */
    isLogged?: Boolean;
    /**
     *theme add a Root css variables
     */
    theme?: "default" | "Schoolab" | "Moho" | "Raiselab";
}

export const Navbar = ({ isLogged = true, theme }: NavBarProps) => {
    useEffect(() => {
        tooltips();
    }, []);
    let logoUrl = "img/inject-logo-dark.svg";
    switch (theme) {
        case "Schoolab":
            logoUrl = "img/schoolab-logo-light.svg";
            break;
        case "Moho":
            logoUrl = "img/moho-logo-light.svg";
            break;
        case "Raiselab":
            logoUrl = "img/raiselab-logo-light.svg";
            break;
        case "default":
            logoUrl = "img/inject-logo-dark.svg";
            break;
        default:
            logoUrl = "img/inject-logo-dark.svg";
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
                                <div className="navbar-option d-none d-lg-flex">
                                    <a href="#" className="btn navbar-main-btn ">
                                        <span className="icon icon-arrow-left" aria-hidden="true" />
                                    </a>
                                </div>
                                <div className="navbar-brand">
                                    <a tabIndex={1} title="" data-toggle="tooltip" href="#" data-original-title="schoolab home">
                                        <img className="img-fluid d-block" src={logoUrl} style={{ maxWidth: 150, width: "100%" }} />
                                    </a>
                                </div>

                                <div className="navbar-options ml-lg-auto">
                                    <div className="d-none d-lg-flex flex-fill">
                                        <div className="navbar-option dropdown">
                                            <a href="#" className="btn navbar-main-btn border" data-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" style={{ maxWidth: 256 }}>
                                                <span className="icon icon-school" aria-hidden="true" />
                                                <span className="text-truncate">Schoolab - Saint Lazare Schoolab - Saint Lazare</span>
                                                <span className="icon icon-chevron-down" aria-hidden="true" />
                                            </a>

                                            <div className="dropdown-menu" style={{ maxWidth: 225 }}>
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
                                    </div>
                                    {isLogged ? (
                                        <div className="d-flex gap-xs align-items-center">
                                            <div className="navbar-option  d-none d-lg-flex">
                                                <Button label="My space" type="default" isActive={false} addClass="navbar-main-btn" />
                                            </div>
                                            <div className="navbar-option d-none d-lg-flex">
                                                <a className="navbar-option--link" href="#">
                                                    <span
                                                        className="d-flex position-relative"
                                                        style={{
                                                            width: "2.25rem",
                                                            height: "2.25rem",
                                                            padding: ".375rem",
                                                        }}
                                                        data-toggle="tooltip"
                                                        data-original-title="Admin"
                                                    >
                                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M13.9642 9.55192L17.3598 9.5643C18.2736 9.56763 18.7305 9.5693 18.9736 9.75834C19.1853 9.92299 19.3103 10.1736 19.3153 10.4433C19.3211 10.7529 19.0504 11.1244 18.5089 11.8673L12.6659 19.8843C11.8141 21.053 11.3882 21.6373 11.0231 21.711C10.7076 21.7747 10.3855 21.6734 10.1716 21.4431C9.92406 21.1767 9.94602 20.4652 9.98995 19.0424L10.103 15.3794C10.1189 14.8661 10.1268 14.6095 10.0319 14.413C9.94846 14.2402 9.81113 14.0995 9.63961 14.011C9.44461 13.9104 9.18531 13.9094 8.6667 13.9075L5.27102 13.8952C4.35723 13.8918 3.90033 13.8902 3.65726 13.7011C3.44556 13.5365 3.32053 13.2859 3.31552 13.0162C3.30976 12.7066 3.58049 12.3351 4.12194 11.5922L9.96497 3.5752C10.8167 2.40651 11.2426 1.82217 11.6078 1.74845C11.9233 1.68474 12.2453 1.78606 12.4592 2.01634C12.7068 2.28282 12.6848 2.99424 12.6409 4.41709L12.5278 8.08004C12.512 8.59336 12.5041 8.85001 12.5989 9.04644C12.6824 9.21923 12.8197 9.35996 12.9913 9.44847C13.1863 9.54909 13.4456 9.55003 13.9642 9.55192Z"
                                                                fill="currentColor"
                                                            />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="nav-horizontal-divider d-none d-lg-block" />
                                            <div className="navbar-option dropdown d-none d-lg-flex">
                                                <a className="navbar-option--link" data-toggle="dropdown" role="button" href="#">
                                                    <span className="icon icon-notifications has-dot" title="" data-toggle="tooltip" data-content="" data-original-title="Notifications" />
                                                </a>
                                               
                                            </div>
                                            <div className="navbar-option">
                                                <a className="navbar-option--link" href="#" data-toggle="modal" data-target="#messagesModal">
                                                    <span className="icon icon-comment" title="" data-toggle="tooltip" data-original-title="Messages" />
                                                </a>
                                            </div>
                                            <div className="navbar-option dropdown d-none d-lg-flex ml-8px">
                                                <a className="navbar-thumbnail" data-toggle="dropdown" role="button" href="#">
                                                    <div className="thumbnail is-md is-oval" title="" data-toggle="tooltip" data-original-title="Account">
                                                        <img alt="Account" src="img/thumbnails/john-doe.webp" />
                                                    </div>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item d-flex">
                                                        <div className="thumbnail is-lg is-oval">
                                                            <img alt="John Doe" src="img/thumbnails/john-doe.webp" />
                                                        </div>
                                                        <div className="d-flex flex-column justify-content-center ml-4">
                                                            <h4 className="mb-none">John Doe</h4>
                                                            <span className="small text-muted mb-none">Head of Tests</span>
                                                        </div>
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <a className="dropdown-item" href="#">
                                                        Profile
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        Invitations
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        History
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <a className="dropdown-item" href="#">
                                                        Settings
                                                    </a>
                                                    <a className="dropdown-item" target="_blank" rel="nofollow" href="https://www.notion.so/Help-Center-INSIDE-7e56175d45bc47e8947e7584f2e3837d">
                                                        Help Center
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <a className="dropdown-item is-danger" href="#">
                                                        Log out
                                                    </a>
                                                </div>
                                            </div>
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
                                                <span className="text-truncate" style={{ maxWidth: 256 }}>Schoolab - Saint Lazare Schoolab - Saint Lazare</span>
                                            </span>
                                            
                                            <span className="icon icon-chevron-down" aria-hidden="true" />
                                        </a>

                                        <div className="dropdown-menu">
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
