import React from "react";
import { Icon } from "../Icon";
import { Notif } from "@/app/components/badges/notifs/Notif";

export interface NavTabItemProps {
    label: string;
    href: string;
    badge?: string;
    isActive?: boolean;
    icon?: string;
    tooltip?: string;

    addClass?: string;
}

export const NavTabItem = (
    {
        label = "Label",
        href = "#",
        isActive,
        icon,
        badge,
        tooltip,
        addClass,
        ...props
    }: NavTabItemProps
) => {
    let classTab = ["nav-link nav-item"];
    isActive && classTab.push('active');
    addClass && classTab.push(addClass);

    return (
        <a href={href} className={classTab.join(" ")} {...props}>
            {icon && tooltip && <Icon name={icon} size="xs" data-toggle="tooltip" data-placement="top" data-original-title={tooltip} data-boundary="window" />}
            { icon && !tooltip && <Icon name={icon} size="xs" />}
            <span>{label}</span>
            { badge && <Notif label={badge} status="highlight" /> }
        </a>
    );
};
