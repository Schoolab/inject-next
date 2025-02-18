import type { Meta, StoryObj } from '@storybook/react';
import { SidebarDefault } from '@/app/components/sidebar/SidebarDefault';

const meta = {
  title: 'Components/Sidebar/Default',
  component: SidebarDefault,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ["autodocs"],
  argTypes: {
    sections: { control: "object" },
  },
  args: {
    sections: [
      {
        label: "Section",
        items: [
          {
            label: "Item",
            href: "#",
          },
          {
            label: "Item",
            href: "#",
          },
          {
            label: "Item",
            href: "#",
          },
          {
            label: "Item",
            href: "#",
          },
          {
            id: "itemWithItems",
            label: "Item",
            href: "#",
            items: [
              {
                label: "Item",
                href: "#",
                active: true,
              },
              {
                label: "Item",
                href: "#",
              },
              {
                label: "Item",
                href: "#",
              },
            ],
          },
        ],
      },
    ],
  },
} satisfies Meta<typeof SidebarDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};

export const Manage: Story = {
  args: {
    id: "manageNav",
    sections: [
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
  ]
  }
};

export const Admin: Story = {
  args: {
    id: "adminNav",
    sections: [
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
      ]
  }
};

export const StudyManage: Story = {
  args: {
    id: "studyNav",
    sections: [
      {
        items: [
          {
            label: "Dashboard",
            href: "#",
            icon: "dashboard",
            newFeature: true,
          },
          {
            label: "Insights",
            href: "#",
            icon: "chart-line",
            locked: true,
          },
          {
            id: "program",
            label: "Program",
            href: "#",
            icon: "program",
            notif: "2",
            items: [
              {
                label: "🚀 Getting Started",
                href: "#",
                notif: "2",
                active: true,
              },
              {
                label: "Features",
                href: "#",
              },
              {
                label: "Details",
                href: "#",
              },
              {
                label: "Managers",
                href: "#",
              },
              {
                label: "Tags",
                href: "#",
              },
              {
                label: "Hooks",
                href: "#",
              },
              {
                label: "Data",
                href: "#",
              },
              {
                label: "Exports",
                href: "#",
              },
              {
                label: "Google Drive",
                href: "#",
                newTab: true,
              },
              {
                label: "Pipedrive",
                href: "#",
                newTab: true,
              },
              {
                label: "Salesforce",
                href: "#",
                newTab: true,
              },
              
            ],
          },
        ]
      },
      {
        label: "Daily Basis",
        items: [
          {
            id: "participants",
            label: "Participants",
            href: "#",
            icon: "account",
            notif: "9+",
            items: [
              {
                label: "List",
                href: "#",
              },
              {
                label: "Types",
                href: "#",
              },
              {
                label: "Registrations",
                href: "#",
                notif: "9+",
              },
              {
                label: "Deliverables",
                href: "#",
              },
              {
                label: "Certificates",
                href: "#",
              },
            ]
          },
          {
            id: "projects",
            label: "Projects",
            href: "#",
            icon: "project",
            notif: "3",
            items: [
              {
                label: "List",
                href: "#",
              },
              {
                label: "Applications",
                href: "#",
                notif: "3",
              },
              {
                label: "Deliverables",
                href: "#",
              },
            ]
          },
          {
            id: "surveys",
            label: "Surveys",
            href: "#",
            icon: "questionnaire",
            items: [
              {
                label: "Campaigns",
                href: "#",
              },
              {
                label: "Delivrables",
                href: "#",
              },
            ]
          },
          {
            id: "coaching",
            label: "Coaching",
            href: "#",
            icon: "coaching",
            items: [
              {
                label: "Meetings",
                href: "#",
              },
              {
                label: "Library",
                href: "#",
              },
              {
                label: "Newsfeed",
                href: "#",
              },
              {
                label: "Experts & Coaches",
                href: "#",
              }
            ]
          },
          {
            id: "evaluations",
            label: "Evaluations",
            href: "#",
            icon: "evaluation",
            items: [
              {
                label: "Sessions",
                href: "#",
              },
              {
                label: "Public votes",
                href: "#",
              },
              {
                label: "Jury members",
                href: "#",
              },
            ]
          },
          {
            id: "faq",
            label: "F.A.Q.",
            href: "#",
            icon: "faq",
            notif: "4",
            newFeature: true,
            items: [
              {
                label: "Questions",
                href: "#",
                notif: "4",
              },
              {
                label: "Responses",
                href: "#",
              },
            ]
          },
          {
            id: "events",
            label: "Events",
            href: "#",
            icon: "calendar",
            items: [
              {
                label: "List",
                href: "#",
              },
              {
                label: "Venues",
                href: "#",
                newFeature: true,
              },
              {
                label: "Signatures",
                href: "#",
              },
            ]
          },
          {
            id: "newsfeed",
            label: "Newsfeed",
            href: "#",
            icon: "newsfeed",
            items: [
              {
                label: "Posts",
                href: "#",
              },
              {
                label: "Comments",
                href: "#",
              },
            ]
          },
          {
            id: "announcements",
            label: "Announcements",
            href: "#",
            icon: "impact-push",
          }
        ]
      },
      {
        addClass: "flex-fill",
        label: "Foundations",
        items: [
          {
            id: "learning",
            label: "Learning",
            href: "#",
            icon: "learning",
            items: [
              {
                label: "Courses",
                href: "#",
              },
              {
                label: "Progression",
                href: "#",
                newFeature: true,
              },
              
            ],
          },
          {
            id: "objectives",
            label: "Objectives",
            href: "#",
            icon: "objective",
            items: [
              {
                label: "Milestones",
                href: "#",
              },
              {
                label: "Deliverables",
                href: "#",
              },
              {
                label: "Progression",
                href: "#",
                newFeature: true,
              },
            ]
          },
          {
            id: "library",
            label: "Library",
            href: "#",
            icon: "folder",
            items: [
              {
                label: "Ressources",
                href: "#",
              },
              {
                label: "Folders",
                href: "#",
              },
              {
                label: "Tags",
                href: "#",
              },
            ]
          },
          {
            id: "content",
            label: "Content",
            href: "#",
            icon: "content",
            items: [
              {
                label: "Public pages",
                href: "#",
              },
              {
                label: "Participants pages",
                href: "#",
              },
              {
                label: "Files library",
                href: "#",
                newFeature: true,
              },
            ]
          },
          {
            id: "mails",
            label: "Mails",
            href: "#",
            icon: "email",
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
          }
        ]
      },
      {
        items: [
          {
            label: "Help center",
            href: "#",
            icon: "help-center",
            newTab: true,
          },
          {
            label: "Release notes",
            href: "#",
            icon: "release",
            newTab: true,
          },
          
        ]
      }
    ]
  }
};

export const StudyAdmin: Story = {
  args: {
    id: "studyAdminNav",
    sections: [
        {
            items: [
                {
                    label: "Overview",
                    href: "#",
                    icon: "chart-line",
                },
                {
                    id: "organization",
                    label: "Organization",
                    href: "#",
                    icon: "settings",
                    items: [
                      {
                        label: "Details",
                        href: "#",
                      },
                      {
                        label: "Appearance",
                        href: "#",
                      },
                      {
                        label: "Features",
                        href: "#",
                      },
                      {
                        label: "Legals",
                        href: "#",
                      },
                      {
                        label: "Registration & access",
                        href: "#",
                      },
                      {
                        label: "Hooks",
                        href: "#",
                      },
                    ]
                },
                {
                    id: "external",
                    label: "External",
                    href: "#",
                    icon: "org",
                    items: [
                      {
                        label: "Overview",
                        href: "#",
                      },
                      {
                        label: "Programs",
                        href: "#",
                        badge: "136",
                      },
                      {
                        label: "Servers",
                        href: "#",
                        badge: "9",
                      },
                      {
                        label: "Clients",
                        href: "#",
                        badge: "23",
                      },
                    ]
                },
            ]
        },
        {
            label: "Daily basis",
            items: [
                {
                    label: "Users",
                    href: "#",
                    icon: "account",
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
                    label: "Surveys",
                    href: "#",
                    icon: "questionnaire",
                },
                {
                    label: "Coaching",
                    href: "#",
                    icon: "coaching",
                },
                {
                    label: "Evaluations",
                    href: "#",
                    icon: "evaluation",
                },
                {
                    label: "F.A.Q.",
                    href: "#",
                    icon: "faq",
                },
                {
                    label: "Events",
                    href: "#",
                    icon: "calendar",
                },
                {
                    label: "Newsfeed",
                    href: "#",
                    icon: "newsfeed",
                },
                {
                    label: "Announcements",
                    href: "#",
                    icon: "impact-push",
                }
            ]
        },
        {
            label: "Content",
            items: [
                {
                    label: "AI agent",
                    href: "#",
                    icon: "ai",
                },
                {
                    label: "Tabs",
                    href: "#",
                    icon: "tab",
                },
                {
                    label: "Fields",
                    href: "#",
                    icon: "form-fields",
                },
                {
                    label: "Toolbox",
                    href: "#",
                    icon: "toolbox",
                },
                {
                    label: "Mails",
                    href: "#",
                    icon: "email",
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
            ]
        }
    ],
  }
};