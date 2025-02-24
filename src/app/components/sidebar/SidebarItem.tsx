import React, { CSSProperties, useEffect } from "react";
import { Notif } from "../badges/notifs/Notif";
import { Icon } from "../icons/Icon";
import { tooltips } from "../../../../public/utils/tooltips";

export interface SidebarItemProps {
    id?: string;
    label: string;
    href: string;
    icon?: string;
    active?: boolean;
    locked?: boolean;
    newFeature?: boolean;
    notif?: number;
    badge?: number;
    newTab?: boolean;
    items?: SidebarItemProps[];
    parent?: string;
    addClass?: string;
    style?: CSSProperties;
    children?: React.ReactNode;
    dataToggle?: string;
    dataTarget?: string;
    ariaExpanded?: string;
    ariaControls?: string;
}

export const SidebarLink = ({
    id,
    label = "Label",
    href = "#",
    icon,
    active,
    locked,
    newFeature,
    notif = 0,
    badge = 0,
    newTab,
    items,
    parent,
    addClass,
    style,
    children,
    dataToggle,
    dataTarget,
    ariaExpanded,
    ariaControls,
    ...props
}: SidebarItemProps) => {
    let classLink = ["nav-link"];
    active && classLink.push("active");
    locked && classLink.push("disabled");

    return (
        <a id={id} href={href} className={classLink.join(" ")} data-toggle={dataToggle} data-target={dataTarget} aria-expanded={ariaExpanded === "true"} aria-controls={ariaControls}>
            {icon && <Icon name={icon} addClass="nav-link--icon" aria-label={label} />}
            <span className="nav-link--label">{label}</span>
            {locked && <Icon name="lock" addClass="nav-link--icon" aria-label="Locked feature" />}
            {newFeature && <Notif status="interactive" label="NEW" aria-label="New feature" />}
            {notif > 0 && <Notif status="accent" label={notif.toString()} aria-label={`${notif} notifications`} />}
            {badge > 0 && <Notif status="highlight" label={badge.toString()} aria-label={`${badge} elements`} />}
            {newTab && <Icon name="new-tab" size="2xs" addClass="my-4px text-muted" aria-label="New tab" />}
        </a>
    );
}

export const SidebarItem = ({
    id,
    label = "Label",
    href = "#",
    icon,
    active,
    locked,
    newFeature,
    notif = 0,
    badge = 0,
    newTab,
    items,
    parent,
    addClass,
    style,
    children,
    ...props
}: SidebarItemProps) => {
    let classTab = ["nav-item"];
    addClass && classTab.push(addClass);

    let classLink = ["nav-link"];
    const isAnyItemActive = items?.some(item => item.active);
    const isActive = active || isAnyItemActive;
    isActive && classLink.push("active");

    const tooltipProps = locked ? {
        'data-toggle': 'tooltip',
        'data-placement': 'right',
        'tabIndex': 0,
        'data-original-title': "<p class='m-2px font-weight-bold'>Access locked.</p><p class='small'>Ask your organization manager for access.</p>",
        'data-html': 'true',
        'data-boundary': 'window'
    } : {};

    useEffect(() => {
        tooltips();
    }, []);

    return (
        <li className={classTab.join(" ")} style={style} {...props} {...tooltipProps}>
            <SidebarLink
                id={`heading-${id}`}
                label={label}
                href={href}
                icon={icon}
                active={isActive}
                locked={locked}
                newFeature={newFeature}
                notif={notif}
                badge={badge}
                newTab={newTab}
                addClass={addClass}
                style={style}
                children={children}
                {...(items && {
                    'dataToggle': 'collapse',
                    'dataTarget': `#${id}`,
                    'ariaExpanded': isActive ? 'true' : 'false',
                    'ariaControls': id
                })}
            />
            {items && (
                <ul id={id} className={`collapse ${isActive ? 'show' : ''}`} aria-labelledby={`heading-${id}`} data-parent={`#${parent}`}>
                    {items.map((item, index) => (
                        <li key={index}>
                            <SidebarLink {...item} />
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};