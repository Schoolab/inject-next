// TODO: DELETE (use Sidebar with props)

import React from "react";
import { Sidebar } from "./Sidebar";
export interface SidebarAdminProps {}

export const SidebarAdmin = ({}: SidebarAdminProps) => {
    const sections = [
        {
            label: "Schoolab",
            items: [
                {
                    label: "Overview",
                    href: "#",
                    icon: "chart-line",
                    active: true,
                },
                {
                    label: "Organization",
                    href: "#",
                    icon: "org",
                },
                {
                    label: "Programs",
                    href: "#",
                    icon: "program",
                },
                {
                    label: "Projects",
                    href: "#",
                    icon: "project",
                },
                {
                    label: "Users",
                    href: "#",
                    icon: "account",
                },
                {
                    label: "Coaching",
                    href: "#",
                    icon: "coaching",
                },
                {
                    label: "Events",
                    href: "#",
                    icon: "calendar",
                },
                {
                    label: "Toolbox",
                    href: "#",
                    icon: "toolbox",
                },
                {
                    label: "Tags",
                    href: "#",
                    icon: "tag",
                },
                {
                    label: "Logs",
                    href: "#",
                    icon: "console",
                },
                {
                    label: "Mails",
                    href: "#",
                    icon: "email",
                },
            ]
        },
        {
            label: "External",
            items: [
                {
                    label: "Overview",
                    href: "#",
                },
                {
                    label: "Programs",
                    href: "#",
                },
                {
                    label: "Settings",
                    href: "#",
                },
            ]
        }
    ];

    return (
        <Sidebar id="accordionManageNav" sections={sections} />
    );
};
