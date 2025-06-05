import React from "react";
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { CardEvent } from "@/app/components/cards/CardEvent";
import { Button } from "@/app/components/buttons/Button";
import { CardFeed } from "@/app/components/cards/CardFeed";

import { Icon } from "@/app/components/icons/Icon";

import { Section } from "@/app/components/sections/Section";

import { DataList } from "@/app/content/data/DataList";
import { DataListItem } from "@/app/content/data/DataListItem";

import { Badges } from "@/app/components/badges/Badges";
import { Tag } from "@/app/components/badges/tags/Tag";
import { Avatar } from "@/app/components/avatars/Avatar";
import { Stack } from "@/app/components/avatars/Stack";

import { StatCard } from "@/app/components/stat-cards/StatCard";
import { CardAskAI } from "@/app/components/cards/CardAskAI";
import { Stepper, StepType } from "@/app/components/stepper/Stepper";

const steps: StepType[] = [
    {
        title: "Initiation",
        description: "Completed",
        status: "completed",
        link: "",
        current: false,
    },
    {
        title: "Diagnostic",
        description: "In progress",
        status: "in-progress",
        current: true,
    },
    {
        title: "Delivery",
        description: "Not completed",
        status: "not-completed",
        current: false,
    },
    {
        title: "Closing",
        description: "Not completed",
        status: "not-completed",
        current: false,
    },
];

export const SponsorSpaceOverview = () => {
    return (
        <Layout theme="default" shortcutBarExpanded={true}>
            <AppContent
                sections="transparent"
                breadcrumb={[
                    {
                        label: "Impact Innovators",
                        href: "./?path=/story/pages-program-dashboard--overview",
                    },
                    {
                        label: "Sponsor space",
                        href: "./?path=/story/pages-program-dashboard--overview",
                    },
                    {
                        label: "Overview",
                    },
                ]}
                title="Sponsor space"
                subnav={[
                    {
                        label: "Overview",
                        href: "",
                        isActive: true,
                    },
                    {
                        label: "Shared files",
                        href: "",
                    },
                    {
                        label: "Satisfaction",
                        href: "",
                    },
                    {
                        label: "Projects",
                        href: "",
                    },
                    {
                        label: "Members",
                        href: "",
                    },
                ]}
            >
                <Section addClass="gap-2xl">
                    <Stepper steps={steps} />
                    <CardFeed
                        avatar="https://inject-prod.s3.amazonaws.com/images/71446890-6864-4521-9548-8f5973075b3a/sq150.jpeg"
                        author="Pierre Forestier"
                        metas={[{ label: "Program Manager, Schoolab" }]}
                        content={`
                                                <p>As we’re reaching the end of our mission together, I wanted to thank you personally for the collaboration and the trust you’ve placed in us.</p>
                                                <ul><li>You’ll find all the key deliverables and documents available in the Shared Files section of this space.</li>
                                                <li>We’d love to hear your thoughts — please take a moment to share your feedback in the Satisfaction tab.</li></ul>
                                                <p>Your insights help us grow and continue to improve how we support our partners.</p>
                                                <p>It’s been a real pleasure working with you — and I hope we get to collaborate again in the future!</p>
                                                <p>Warm regards</p>
                                            `}
                        readMore={false}
                        isFooterActions={false}
                        isTitleActions={false}
                    ></CardFeed>
                </Section>
                <Section title="Mission report">
                    <CardAskAI />
                </Section>
                <Section title="Summary" subtitle="All you need to know about this mission">
                    <div className="bg-highlight p-md rounded">
                        <DataList>
                            <DataListItem label="Name">
                                <dd>
                                    <Button type="muted" addClass="btn-link" size="xs">
                                        <span>Impact Innovators</span>
                                    </Button>
                                </dd>
                            </DataListItem>
                            <DataListItem label="Customer">
                                <dd>
                                    <Button type="muted" addClass="btn-link" size="xs">
                                        <span>Schoolab</span>
                                    </Button>
                                </dd>
                            </DataListItem>
                            <DataListItem label="Business line">
                                <dd>
                                    <span>Real Estate and construction</span>
                                </dd>
                            </DataListItem>
                            <DataListItem label="Timeline">
                                <dd>
                                    <span>Feb 12, 2025 - March 12, 2025 </span>
                                </dd>
                            </DataListItem>
                            <DataListItem label="Pipedrive ID" tooltip="You can find an item’s system ID in two places: the URL after opening an item in Pipedrive or in the list view by adding the ID column.">
                                <dd className="d-flex flex-row gap-none">
                                    <Button type="muted" addClass="btn-link" size="xs">
                                        <span className="text-muted">#</span>
                                        <span>42986</span>
                                        <Icon name="new-tab" addClass="text-muted" />
                                    </Button>
                                </dd>
                            </DataListItem>
                            <DataListItem label="Budget">
                                <dd>
                                    <Button type="muted" addClass="btn-link" size="xs">
                                        <span>100k</span>
                                        <Icon name="new-tab" addClass="text-muted" />
                                    </Button>
                                </dd>
                            </DataListItem>
                            <DataListItem label="Status ">
                                <dd className="d-flex flex-row gap-2xs">
                                    <Tag label="Diagnostic" iconName="status-dashed" status="progress" /> <Tag label="Public" iconName="visibility" status="open" />
                                </dd>
                            </DataListItem>

                            <DataListItem label="Owners">
                                <dd>
                                    <Button type="muted" addClass="btn-link" size="xs">
                                        <Avatar size="xs" image="img/avatar-terence.jpeg" />
                                        <span>Terence Irving</span>
                                    </Button>
                                </dd>
                                <dd>
                                    <Button type="muted" addClass="btn-link" size="xs">
                                        <Avatar size="xs" image="img/avatar-alexandra.jpeg" />
                                        <span>Alexandra Jolly</span>
                                    </Button>
                                </dd>
                            </DataListItem>
                            <DataListItem label="Managers">
                                <dd className="d-flex flex-row gap-2xs">
                                    <Button type="muted" addClass="btn-link" size="xs">
                                        <Stack>
                                            <Avatar size="xs" image="img/avatar-pierre.jpeg" />
                                            <Avatar size="xs" image="img/avatar-emma.jpeg" />
                                            <Avatar size="xs" image="img/avatar-julien.jpeg" />
                                        </Stack>
                                        <span>5</span>
                                    </Button>
                                </dd>
                            </DataListItem>
                            <DataListItem label="Participants">
                                <dd className="d-flex flex-row gap-2xs">
                                    <Button type="muted" addClass="btn-link" size="xs">
                                        <Stack>
                                            <Avatar size="xs" image="img/avatar-nora.jpeg" />
                                            <Avatar size="xs" image="img/avatar-marine.jpeg" />
                                            <Avatar size="xs" image="img/avatar-john.jpeg" />
                                        </Stack>
                                        <span>803</span>
                                    </Button>
                                </dd>
                            </DataListItem>
                            <DataListItem label="projects">
                                <dd className="d-flex flex-row gap-2xs">
                                    <Button type="muted" addClass="btn-link" size="xs">
                                        <Stack>
                                            <div className="icon icon--letter is-xs">
                                                <span aria-hidden="true">A</span>
                                            </div>
                                            <div className="icon icon--letter is-xs">
                                                <span aria-hidden="true">S</span>
                                            </div>
                                            <div className="icon icon--letter is-xs">
                                                <span aria-hidden="true">H</span>
                                            </div>
                                        </Stack>
                                        <span>12</span>
                                    </Button>
                                </dd>
                            </DataListItem>
                            <DataListItem label="Used case ">
                                <dd>
                                    <Badges>
                                        <Tag label="workshop" />
                                    </Badges>
                                </dd>
                            </DataListItem>

                            <DataListItem label="Methodologies ">
                                <dd>
                                    <Badges>
                                        <Tag label="Consulting" />
                                        <Tag label="Design Thinking" />
                                    </Badges>
                                </dd>
                            </DataListItem>
                            <DataListItem label="Tags">
                                <dd>
                                    <Badges>
                                        <Tag link="#" isPill={false}>
                                            <div aria-hidden="true" className="icon icon--sdg is-sdg-7 is-16px">
                                                <span>7</span>
                                            </div>
                                            <span>Affordable and clean energy</span>
                                        </Tag>
                                        <Tag link="#" label="Impact native" iconName="impact-native" isPill={false} />
                                        <Tag link="#" label="DEI" iconName="vertical-dei" isPill={false} />
                                        <Tag link="#" label="Corporate" iconName="ecosystem-corporate" />
                                        <Tag link="#" label="Strategic" />
                                        <Tag link="#" label="Innovation" />
                                    </Badges>
                                </dd>
                            </DataListItem>
                            <DataListItem label="Links">
                                <dd>
                                    <div className="d-flex flex-row flex-wrap gap-3xs">
                                        <Button type="muted" addClass="btn-link" size="xs">
                                            <Icon name="brand-drive" addClass="text-muted" />
                                            <span>Drive</span>
                                            <Icon name="new-tab" addClass="text-muted" />
                                        </Button>
                                        <Button type="muted" addClass="btn-link" size="xs">
                                            <Icon name="brand-dropbox" addClass="text-muted" />
                                            <span>Dropbox</span>
                                            <Icon name="new-tab" addClass="text-muted" />
                                        </Button>
                                        <Button type="muted" addClass="btn-link" size="xs">
                                            <Icon name="brand-notion" addClass="text-muted" />
                                            <span>Notion</span>
                                            <Icon name="new-tab" addClass="text-muted" />
                                        </Button>
                                        <Button type="muted" addClass="btn-link" size="xs">
                                            <Icon name="brand-slack" addClass="text-muted" />
                                            <span>Slack</span>
                                            <Icon name="new-tab" addClass="text-muted" />
                                        </Button>
                                        <Button type="muted" addClass="btn-link" size="xs">
                                            <Icon name="brand-figma" addClass="text-muted" />
                                            <span>Figma</span>
                                            <Icon name="new-tab" addClass="text-muted" />
                                        </Button>
                                    </div>
                                </dd>
                            </DataListItem>
                        </DataList>
                    </div>
                </Section>
                <Section title="Context and Challenges">
                    <div className="bg-highlight p-md rounded">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </Section>
                <Section title="Mission KPI">
                    <div className="cq row-gap-md">
                        <div className="cq-xs-6 cq-sm-4">
                            <StatCard number={3896} variation={-209} caption="Sessions" link="#" />
                        </div>
                        <div className="cq-xs-6 cq-sm-4">
                            <StatCard number={5651} variation={+23} caption="Participants" link="#" />
                        </div>
                        <div className="cq-xs-6 cq-sm-4">
                            <StatCard number={10} isPercentage={true} variation={2} caption="Courses completions" link="#" />
                        </div>
                        <div className="cq-xs-6 cq-sm-4">
                            <StatCard number={103} variation={34} caption="Mail delivered" link="#" />
                        </div>
                        <div className="cq-xs-6 cq-sm-4">
                            <StatCard number={0} variation={0} caption="Projects" link="#" />
                        </div>
                        <div className="cq-xs-6 cq-sm-4">
                            <StatCard number={0} variation={0} caption="Followers" link="#" />
                        </div>
                    </div>
                </Section>
            </AppContent>
        </Layout>
    );
};
