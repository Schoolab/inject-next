import React from "react";
import { Icon } from "@/app/components/icons/Icon";
import { Notif } from "@/app/components/badges/notifs/Notif";

export interface NavTabItemProps {
    label: string;
    href: string;
    badge?: string;
    isActive?: boolean;
    icon?: string;
    tooltip?: string;
    addClass?: string;
    id?: string;
    dataToggle?: string;
    dataTarget?: string;
    role?: string;
    ariaControls?: string;
    ariaSelected?: boolean;
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
        id,
        dataToggle,
        dataTarget,
        role,
        ariaControls,
        ariaSelected,
        ...props
    }: NavTabItemProps
) => {
    let classTab = ["nav-link nav-item"];
    isActive && classTab.push('active');
    addClass && classTab.push(addClass);

    return (
        <a 
            href={href} 
            onClick={(e) => e.preventDefault()}
            className={classTab.join(" ")} 
            id={id}
            data-toggle={dataToggle}
            data-target={dataTarget}
            role={role}
            aria-controls={ariaControls}
            aria-selected={ariaSelected}
            {...props}
        >
            {icon && tooltip && <Icon name={icon} size="xs" data-toggle="tooltip" data-placement="top" data-original-title={tooltip} data-boundary="window" />}
            { icon && !tooltip && <Icon name={icon} size="xs" />}
            <span>{label}</span>
            { badge && <Notif label={badge} status="highlight" /> }
        </a>
    );
};
