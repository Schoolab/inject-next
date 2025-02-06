import React, { CSSProperties, useState } from "react";
import { Icon } from "../Icon";
import { NavTab } from "@/app/components/nav-tabs/NavTab";
import { Button } from "@/app/components/Button";
import { Pagination, PaginationProps } from "@/app/components/Pagination";

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

interface AsideHeaderProps {
    title?: string;
    tabs?: ItemType[];
    pagination?: PaginationProps;
    showNewTab?: boolean;
    showClose?: boolean;
    addClass?: string;
    style?: CSSProperties;
}

export const AsideHeader = ({
    title,
    tabs,
    addClass,
    style,
    pagination,
    showNewTab = false,
    showClose = true,
    ...props
}: AsideHeaderProps) => {
    let classTab = ["aside-header"];
    addClass && classTab.push(addClass);

    return (
        <header className={classTab.join(" ")} style={style} {...props}>

            { title && <h3 className="aside-title line-clamp-1">
                <span className="text-truncate">{title}</span>
            </h3> }

            { tabs && <NavTab addClass="aside-nav" items={tabs} /> }

            { pagination && <Pagination {...pagination} /> }

            {(showNewTab || showClose) && (
                <div className="aside-actions">
                    {showNewTab && (
                        <Button
                            type="transparent"
                            size="sm"
                            addClass="border-0 p-2xs text-muted"
                            data-toggle="tooltip"
                            data-original-title="Open in new tab"
                            link="#"
                        >
                            <Icon name="new-tab" size="sm" />
                        </Button>
                    )}
                    {showClose && (
                        <Button
                            type="transparent"
                            size="sm"
                            addClass="border-0 p-2xs text-muted"
                            data-toggle="tooltip"
                            data-original-title="Close"
                            link="#"
                        >
                            <Icon name="close" size="sm" />
                        </Button>
                    )}
                </div>
            )}

        </header>
    );
};