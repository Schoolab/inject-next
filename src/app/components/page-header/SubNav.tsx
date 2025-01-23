import React from "react";
import { Dropdown } from "@/app/components/dropdown/Dropdown";
import { DropdownMenu } from "../dropdown/DropdownMenu";
import { DropdownItem } from "../dropdown/DropdownItem";
import { Icon } from "../Icon";
import { NavTab } from "../nav-tabs/NavTab";

type ItemType = {
    label: string;
    href: string;
    badge?: string;
    isActive?: boolean;
    dropdownItems?: ItemType[];
    icon?: string;
    tooltip?: string;
}

export interface SubNavProps {
    items?: ItemType[];
}

export const SubNav = (
    {
        items,
    }: SubNavProps
) => {

    return (
        <div className="application-subnav border-bottom">
            <NavTab
                items={items}
                addClass="w-100"
            />
        </div>
    );
};
