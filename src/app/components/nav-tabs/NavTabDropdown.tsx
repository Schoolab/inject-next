import React from "react";
import { Icon } from "../Icon";
import { Dropdown } from "../dropdown/Dropdown";
import { DropdownMenu } from "../dropdown/DropdownMenu";
import { DropdownItem } from "../dropdown/DropdownItem";
import { Notif } from "@/app/components/badges/notifs/Notif";

type ItemType = {
    label: string;
    href: string;
    isActive?: boolean;
    icon?: string;
}

export interface NavTabDropdownProps {
    label: string;
    href: string;
    badge?: string;
    isActive?: boolean;
    dropdownItems: ItemType[];
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

export const NavTabDropdown = (
    {
        label = "Label",
        href = "#",
        isActive,
        dropdownItems,
        icon,
        badge,
        tooltip,
        addClass,
        id,
        dataToggle = "dropdown",
        dataTarget,
        role,
        ariaControls,
        ariaSelected,
        ...props
    }: NavTabDropdownProps
) => {
    let classDropdown = ["nav-item"];
    addClass && classDropdown.push(addClass);

    let classLink = ["nav-link dropdown-toggle"];
    isActive && classLink.push('active');

    return (
        <Dropdown addClass={classDropdown.join(" ")} {...props}>
            <a 
                href={href}
                onClick={(e) => e.preventDefault()}
                className={classLink.join(" ")} 
                id={id}
                data-toggle={dataToggle}
                data-target={dataTarget}
                role={role}
                aria-controls={ariaControls}
                aria-selected={ariaSelected}
                data-boundary="window" 
                aria-expanded="false" 
                aria-haspopup="true"
            >
                {icon && tooltip && <Icon name={icon} size="xs" data-toggle="tooltip" data-placement="top" data-original-title={tooltip} data-boundary="window" />}
                { icon && !tooltip && <Icon name={icon} size="xs" />}
                <span>{label}</span>
                { badge && <Notif label={badge} status="highlight" /> }
            </a>
            <DropdownMenu>
                {dropdownItems.map((dropdownItem, dropdownIndex) => (
                    <DropdownItem label={dropdownItem.label} iconName={dropdownItem.icon} href={dropdownItem.href} key={dropdownIndex} active={dropdownItem.isActive ?? false} />
                ))}
            </DropdownMenu>
        </Dropdown>
    );
};
