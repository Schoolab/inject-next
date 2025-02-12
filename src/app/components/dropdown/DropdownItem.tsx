import React, { ReactNode } from "react";
import { Icon } from "../Icon";
import { Notif } from "../badges/notifs/Notif";

interface DropdownItemProps {
    children?: ReactNode;
    type?: "interactive" | "danger" | "ai";
    iconName?: string;
    label: string;
    caption?: string;
    toggle?: boolean;
    newTab?: boolean;
    outbound?: boolean;
    showActive?: boolean;
    active?: boolean;
    disabled?: boolean;
    href?: string;
    target?: string;
    rel?: string;
    addClass?: string;
    badge?: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const DropdownItem = ({ children, type, addClass, outbound, showActive = false, active, disabled, label, iconName, caption, toggle, newTab, href = "#", target, rel, badge, ...props }: DropdownItemProps) => {
    let classTab = ["dropdown-item"];
    type && classTab.push(`is-${type}`);
    active && classTab.push("active");
    disabled && classTab.push("disabled");
    addClass && classTab.push(addClass);

    return (
        <a className={classTab.join(" ")} href={href} target={target} {...props}>
            {showActive && active !== undefined && (showActive ? <Icon name="check" addClass="dropdown-item--icon" /> : <Icon name="" addClass="dropdown-item--icon" />)}
            {children ? children : (
                <>
                    {iconName && <Icon name={iconName} addClass="dropdown-item--icon" />}
                    <div className="dropdown-item--label">
                        <span className="d-flex">{label} { badge && <Notif label={badge} status="highlight" addClass="ml-auto" />}</span>
                        {caption && <span className="caption">{caption}</span>}
                    </div>           
                    {outbound && <Icon name="arrow-top-right" addClass="dropdown-item--shortcut" />}
                </>
            )}

            {newTab && <Icon name="new-tab" />}
            {toggle && <Icon name="chevron-right" addClass="dropdown-item--toggle" />}
        </a>
    );
};
