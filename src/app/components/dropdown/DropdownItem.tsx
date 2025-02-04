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
    outbound?: boolean;
    active?: boolean;
    href?: string;
    target?: string;
    rel?: string;
    addClass?: string;
    badge?: string;
}

export const DropdownItem = ({ children, type, addClass, outbound, active, label, iconName, caption, toggle, href = "#", target, rel, badge, ...props }: DropdownItemProps) => {
    let classTab = ["dropdown-item"];
    type && classTab.push(`is-${type}`);
    active && classTab.push("active");
    addClass && classTab.push(addClass);
    return (
        <a className={classTab.join(" ")} href={href} target={target} {...props}>
            {active !== undefined && (active ? <Icon name="check" addClass="dropdown-item--icon" /> : <Icon name="" addClass="dropdown-item--icon" />)}
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

            {toggle && <Icon name="chevron-right" addClass="dropdown-item--toggle" />}
        </a>
    );
};
