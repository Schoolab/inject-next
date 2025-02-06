import React from "react";
import { Dropdown } from "@/app/components/dropdown/Dropdown";
import { DropdownMenu } from "../dropdown/DropdownMenu";
import { DropdownItem } from "../dropdown/DropdownItem";
import { Icon } from "../Icon";
import { NavTabItem } from "./NavTabItem";
import { NavTabDropdown } from "./NavTabDropdown";

type ItemType = {
    label: string;
    href: string;
    badge?: string;
    isActive?: boolean;
    hasDropdown?: boolean;
    dropdownItems?: ItemType[];
    icon?: string;
    tooltip?: string;
    id?: string;
    dataToggle?: string;
    dataTarget?: string;
    role?: string;
    ariaControls?: string;
    ariaSelected?: boolean;
}

export interface NavTabProps {
    children?: React.ReactNode;
    items?: ItemType[] | undefined;

    addClass?: string;
}

export const NavTab = (
    {
        children,
        items = [
            {
                label: "Item",
                href: "#",
                isActive: true,
            },
            {
                label: "Item",
                href: "#",
            },
            {
                label: "Item",
                href: "#",
                badge: "3",
            },
            {
                label: "Item",
                href: "#",
                icon: "visibility-off",
                tooltip: "Only visible to managers",
            },
            {
                label: "Dropdown",
                href: "#",
                hasDropdown: true,
                dropdownItems: [
                    {
                        label: "sub item 1",
                        href: "#",
                    },
                    {
                        label: "sub item 1",
                        href: "#",
                    },
                ],
            },
        ],
        addClass,
        ...props
    }: NavTabProps
) => {
    let classTab = ["nav nav-tabs"];
    addClass && classTab.push(addClass);

    let listItems = items.map((item, index) => {
        if (item.hasDropdown && item.dropdownItems) {
            return (
                <NavTabDropdown
                    label={item.label}
                    href={item.href}
                    icon={item.icon}
                    badge={item.badge}
                    isActive={item.isActive}
                    tooltip={item.tooltip}
                    key={index}
                    dropdownItems={item.dropdownItems}
                    id={item.id}
                    dataToggle={item.dataToggle}
                    dataTarget={item.dataTarget}
                    role={item.role}
                    ariaControls={item.ariaControls}
                    ariaSelected={item.ariaSelected}
                />
            );
        } else {
            return (
                <NavTabItem 
                    label={item.label}
                    href={item.href}
                    icon={item.icon}
                    badge={item.badge}
                    isActive={item.isActive}
                    tooltip={item.tooltip}
                    key={index}
                    id={item.id}
                    dataToggle={item.dataToggle}
                    dataTarget={item.dataTarget}
                    role={item.role}
                    ariaControls={item.ariaControls}
                    ariaSelected={item.ariaSelected}
                />
            );
        }
    });
    
    return (
            <nav className={classTab.join(" ")} {...props}>
                {listItems && listItems}
                {children}
            </nav>
    );
};
