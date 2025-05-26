import React from "react";
import { Icon } from "@/app/components/icons/Icon";

export interface ShortcutBarProps {
    /**
     * User is logged ?
     */
    isExpanded?: Boolean;
}

export const AdminShortcutBar = ({ isExpanded }: ShortcutBarProps) => {
    let classTab = ["application-shortcutbar"];
    isExpanded && classTab.push("shortcutbar-expanded");

    return (
        <div className={classTab.join(" ")}>
            <div className="shortcutbar-container flex-fill" aria-label="Shortcut Bar">
                <div className="d-flex flex-row flex-lg-column">
              
                    <div className="shortcutbar-option">
                        <a className="shortcutbar-option--link" href="#" data-toggle="tooltip" data-placement="top" data-original-title="Home" data-boundary="window">
                            <span className="icon icon-home" aria-hidden="true" />
                            <div className="shortcutbar-option--label">Home</div>
                        </a>
                        <div className="shortcutbar-option--label">Home</div>
                    </div> 
                    <div className="shortcutbar-option">
                        <a className="shortcutbar-option--link" href="#" data-toggle="tooltip" data-placement="top" data-original-title="Consulting missions" data-boundary="window">
                            <span className="icon icon-ecosystem-corporate" aria-hidden="true" />
                            <div className="shortcutbar-option--label">Consulting missions</div>
                        </a>
                        <div className="shortcutbar-option--label">Consulting missions</div>
                    </div>
                    <div className="shortcutbar-option">
                        <a className="shortcutbar-option--link" href="#" data-toggle="tooltip" data-placement="top" data-original-title="Innovation programs" data-boundary="window">
                            <span className="icon icon-lightbulb" aria-hidden="true" />
                            <div className="shortcutbar-option--label">Innovation programs</div>
                        </a>
                        <div className="shortcutbar-option--label">Innovation programs</div>
                    </div>
                    <div className="shortcutbar-option">
                        <a className="shortcutbar-option--link" href="#" data-toggle="tooltip" data-placement="top" data-original-title="Customers" data-boundary="window">
                            <span className="icon icon-org" aria-hidden="true" />
                            <div className="shortcutbar-option--label">Customers</div>
                        </a>
                        <div className="shortcutbar-option--label">Customers</div>
                    </div>
                    <div className="shortcutbar-option">
                        <a className="shortcutbar-option--link" href="#" data-toggle="tooltip" data-placement="top" data-original-title="Users" data-boundary="window">
                            <span className="icon icon-account" aria-hidden="true" />
                            <div className="shortcutbar-option--label">Users</div>
                        </a>
                        <div className="shortcutbar-option--label">Users</div>
                    </div>
                    <div className="shortcutbar-option">
                        <a className="shortcutbar-option--link" href="#" data-toggle="tooltip" data-placement="top" data-original-title="Events" data-boundary="window">
                            <span className="icon icon-calendar" aria-hidden="true" />
                            <div className="shortcutbar-option--label">Events</div>
                        </a>
                        <div className="shortcutbar-option--label">Events</div>
                    </div>
                    <div className="shortcutbar-option">
                        <a className="shortcutbar-option--link" href="#" data-toggle="tooltip" data-placement="top" data-original-title="Emails" data-boundary="window">
                            <span className="icon icon-email" aria-hidden="true" />
                            <div className="shortcutbar-option--label">Emails</div>
                        </a>
                        <div className="shortcutbar-option--label">Emails</div>
                    </div>
                    <div className="shortcutbar-option">
                        <a className="shortcutbar-option--link" href="#" data-toggle="tooltip" data-placement="top" data-original-title="Logs" data-boundary="window">
                            <span className="icon icon-console" aria-hidden="true" />
                            <div className="shortcutbar-option--label">Logs</div>
                        </a>
                        <div className="shortcutbar-option--label">Logs</div>
                    </div>
                    <div className="shortcutbar-option">
                        <a className="shortcutbar-option--link" href="#" data-toggle="tooltip" data-placement="top" data-original-title="Settings" data-boundary="window">
                            <span className="icon icon-settings" aria-hidden="true" />
                            <div className="shortcutbar-option--label">Settings</div>
                        </a>
                        <div className="shortcutbar-option--label">Settings</div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};
