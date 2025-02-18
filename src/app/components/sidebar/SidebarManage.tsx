import React from "react";
import { Sidebar } from "./Sidebar";

export interface SidebarManageProps {}

export const SidebarManage = ({}: SidebarManageProps) => {
    const sections = [
        {
            items: [
                {
                    id: "program",
                    label: "Program",
                    icon: "program",
                    href: "#",
                    items: [
                        {
                            label: "🚀 Getting Started",
                            href: "#",
                            active: true,
                        },
                        {
                            label: "Configuration",
                            href: "#",
                        },
                        {
                            label: "Managers list",
                            href: "#",
                        },
                        {
                            label: "Registration rules",
                            href: "#",
                        },
                        {
                            label: "Public page",
                            href: "#",
                        },
                        {
                            label: "Program page",
                            href: "#",
                        },
                        {
                            label: "Hooks",
                            href: "#",
                        },
                    ],
                },
                {
                    id: "participants",
                    label: "Participants",
                    icon: "community",
                    href: "#",
                    items: [
                        {
                            label: "List",
                            href: "#",
                        },
                        {
                            label: "Applicants",
                            href: "#",
                        },
                        {
                            label: "Signatures",
                            href: "#",
                        },
                        {
                            label: "Certificates",
                            href: "#",
                        },
                        {
                            label: "Types",
                            href: "#",
                        },
                        {
                            label: "Application form",
                            href: "#",
                        },
                    ],
                },
                {
                    id: "projects",
                    label: "Projects",
                    icon: "project",
                    href: "#",
                    items: [
                        {
                            label: "List",
                            href: "#",
                        },
                        {
                            label: "Applications",
                            href: "#",
                        },
                        {
                            label: "Types",
                            href: "#",
                        },
                        {
                            label: "Application form",
                            href: "#",
                        },
                        {
                            label: "Configuration",
                            href: "#",
                        },
                    ],
                },
                {
                    id: "juries",
                    label: "Juries",
                    icon: "evaluation",
                    href: "#",
                    items: [
                        {
                            label: "List",
                            href: "#",
                        },
                        {
                            label: "Applicants",
                            href: "#",
                        },
                        {
                            label: "Votes",
                            href: "#",
                        },
                        {
                            label: "Public votes",
                            href: "#",
                        },
                        {
                            label: "Applications form",
                            href: "#",
                        },
                    ],
                },
                {
                    id: "experts",
                    label: "Experts",
                    icon: "coaching",
                    href: "#",
                    items: [
                        {
                            label: "Meetings",
                            href: "#",
                        },
                        {
                            label: "List",
                            href: "#",
                        },
                        {
                            label: "Applicants",
                            href: "#",
                        },
                        {
                            label: "Newsfeed",
                            href: "#",
                        },
                        {
                            label: "Library",
                            href: "#",
                        },
                        {
                            label: "Types",
                            href: "#",
                        },
                        {
                            label: "Application form",
                            href: "#",
                        },
                        {
                            label: "Configuration",
                            href: "#",
                        },
                    ],
                },
                {
                    id: "learning",
                    label: "Learning",
                    icon: "learning",
                    href: "#",
                    items: [
                        {
                            label: "Progression",
                            href: "#",
                        },
                        {
                            label: "Delivrables",
                            href: "#",
                        },
                        {
                            label: "Courses",
                            href: "#",
                        },
                        {
                            label: "Configuration",
                            href: "#",
                        },
                    ],
                },
                {
                    id: "objectives",
                    label: "Objectives",
                    icon: "objective",
                    href: "#",
                    items: [
                        {
                            label: "Progression",
                            href: "#",
                        },
                        {
                            label: "Delivrables",
                            href: "#",
                        },
                        {
                            label: "Milestones",
                            href: "#",
                        },
                        {
                            label: "Configuration",
                            href: "#",
                        },
                    ],
                },
                {
                    id: "surveys",
                    label: "Surveys",
                    icon: "questionnaire",
                    href: "#",
                    items: [
                        {
                            label: "Campaigns",
                            href: "#",
                        },
                        {
                            label: "Delivrables",
                            href: "#",
                        },
                    ],
                },
                {
                    id: "library",
                    label: "Library",
                    icon: "folder",
                    href: "#",
                    items: [
                        {
                            label: "Ressources",
                            href: "#",
                        },
                        {
                            label: "Folders",
                            href: "#",
                        },
                    ],
                },
            ],
        },
        {
            label: "Engagement",
            items: [
                {
                    id: "events",
                    label: "Events",
                    icon: "calendar",
                    href: "#",
                    items: [
                        {
                            label: "List",
                            href: "#",
                        },
                        {
                            label: "Signatures",
                            href: "#",
                        },
                        
                    ]
                },
                {
                    id: "mails",
                    label: "Mails",
                    icon: "email",
                    href: "#",
                    items: [
                        {
                            label: "Campaigns",
                            href: "#",
                        },
                        {
                            label: "Notifications",
                            href: "#",
                        },
                        {
                            label: "Templates",
                            href: "#",
                        },
                        {
                            label: "Segments",
                            href: "#",
                        },
                        {
                            label: "Activities",
                            href: "#",
                        },
                    ]
                },
                {
                    id: "social",
                    label: "Social",
                    icon: "comment",
                    href: "#",
                    items: [
                        {
                            label: "Newsfeed",
                            href: "#",
                        },
                        {
                            label: "Comments",
                            href: "#",
                        },
                        {
                            label: "Messages",
                            href: "#",
                        },
                    ]
                }
            ],
        },
        {
            label: "Analytics",
            items: [
                {
                    id: "insights",
                    label: "Insights",
                    icon: "chart-line",
                    href: "#",
                    items: [
                        {
                            label: "Overview",
                            href: "#",
                        },
                        {
                            label: "Engagement",
                            href: "#",
                        },
                        {
                            label: "Participants",
                            href: "#",
                        },
                        {
                            label: "Projects",
                            href: "#",
                        },
                        {
                            label: "Juries",
                            href: "#",
                        },
                        {
                            label: "Experts",
                            href: "#",
                        },
                        {
                            label: "Events",
                            href: "#",
                        },
                        {
                            label: "Mails",
                            href: "#",
                        },
                    ],
                },
                {
                    id: "data",
                    label: "Data",
                    icon: "plan-data",
                    href: "#",
                    items: [
                        {
                            label: "Program",
                            href: "#",
                        },
                        {
                            label: "Projects",
                            href: "#",
                        },
                        {
                            label: "Segments",
                            href: "#",
                        },
                        {
                            label: "Tags",
                            href: "#",
                        },
                        {
                            label: "Exports",
                            href: "#",
                        },
                    ],
                },
            ],
        },
    ];
    return (
        <Sidebar id="accordionManageNav" sections={sections} />
    );
};
