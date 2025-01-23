import React from "react";
import { Icon } from "../Icon";

type ItemType = {
    label: string;
    href?: string;
}
export interface BreadcrumbProps {
    homeIcon?: string;
    homeLink?: string;
    items?: ItemType[];
}

export const Breadcrumb = (
    {
        homeIcon = "program",
        homeLink = "#",
        items = [
            {
                label: "Impact Innovators",
                href: "#",
            },
            {
                label: "Item",
                href: "#",
            },
            {
                label: "Item",
            },
        ],
    }: BreadcrumbProps
) => {
    let listItems = items.map((item, index) => (
        item.href ? (
            <li key={index} className="breadcrumb-item">
                <a href={item.href}>{item.label}</a>
            </li>
        ) : (
            <li key={index} className="breadcrumb-item active" aria-current="page">
                <span>{item.label}</span>
            </li>
        )
    ));

    return (
        <nav className="breadcrumb-container" aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href={homeLink}>
                        <Icon name={homeIcon} />
                    </a>
                </li>
                {listItems}
            </ol>
        </nav>
    );
};
