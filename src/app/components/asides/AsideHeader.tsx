import React, { CSSProperties, useState } from "react";
import { Icon } from "@/app/components/icons/Icon";
import { NavTab } from "@/app/components/nav-tabs/NavTab";
import { Button, ButtonProps } from "@/app/components/buttons/Button";
import { Pagination, PaginationProps } from "@/app/components/pagination/Pagination";

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
    buttons?: ButtonProps[];
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
    buttons,
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

            { pagination && <Pagination className="aside-pagination" {...pagination} /> }

            {(showNewTab || showClose || buttons) && (
                <div className="aside-actions">
                    {buttons && buttons.map((button, index) => (
                        <Button key={index} {...button} />
                    ))}
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
                            addClass="border-0 p-2xs text-muted close-aside"
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