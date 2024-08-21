import React from "react";

export interface BreadcrumbProps {}

export const Breadcrumb = ({}: BreadcrumbProps) => {
    return (
        <nav className="breadcrumb-container" aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="#" className="icon icon-school" />
                </li>
                <li className="breadcrumb-item">
                    <a href="#">Item</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    Item
                </li>
            </ol>
        </nav>
    );
};
