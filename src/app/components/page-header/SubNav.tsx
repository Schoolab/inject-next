import React from "react";
import { Dropdown } from "@/app/components/dropdown/Dropdown";
import { DropdownMenu } from "@/app/components/dropdown/DropdownMenu";
import { DropdownItem } from "@/app/components/dropdown/DropdownItem";
import { Icon } from "@/app/components/Icon";
import { NavTab } from "@/app/components/nav-tabs/NavTab";

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
