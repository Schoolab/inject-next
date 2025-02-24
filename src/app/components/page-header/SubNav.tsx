import React from "react";
import { Dropdown } from "@/app/components/dropdowns/Dropdown";
import { DropdownMenu } from "@/app/components/dropdowns/DropdownMenu";
import { DropdownItem } from "@/app/components/dropdowns/DropdownItem";
import { Icon } from "@/app/components/icons/Icon";
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
