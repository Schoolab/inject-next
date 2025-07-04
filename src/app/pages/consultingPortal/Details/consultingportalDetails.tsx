import React from "react";

import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { Title } from "@/app/components/page-header/Title";
import { SubNav } from "@/app/components/page-header/SubNav";
import { Stepper, StepType } from "@/app/components/stepper/Stepper";
import { CardFeed } from "@/app/components/cards/CardFeed";
import { Section } from "@/app/components/sections/Section";
import { Nps } from "@/app/components/nps/Nps";
import { DataList } from "@/app/content/data/DataList";
import { DataListItem } from "@/app/content/data/DataListItem";
import { FormFieldSet } from "@/app/forms/fieldset/FormFieldSet";
import { Button } from "@/app/components/buttons/Button";
import { Icon } from "@/app/components/icons/Icon";
import { Badges } from "@/app/components/badges/Badges";
import { Tag } from "@/app/components/badges/tags/Tag";
import { Avatar } from "@/app/components/avatars/Avatar";
import { Stack } from "@/app/components/avatars/Stack";
import { FormGroup } from "@/app/forms/group/FormGroup";
import { FormTextarea } from "@/app/forms/textarea/FormTextarea";
import { StatCard } from "@/app/components/stat-cards/StatCard";
import { CardAskAI } from "@/app/components/cards/CardAskAI";

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

export const consultingportalDetails = () => {
    return (
        <Layout showShortcutbar={false}>
            <AppContent
                showBreadcrumb={false}
                sections="transparent"
                title="Consulting portal"
                buttons={[
                    {
                        type: "default",
                        label: "Manage access",
                        link: "",
                        iconStartName: "account-plus",
                        hasNumber: "3",
                    },
                ]}
                subnav={[
                    {
                        label: "Details",
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

                            <DataListItem label="Timeline">
                                <dd>
                                    <span>Feb 12, 2025 - March 12, 2025 </span>
                                </dd>
                            </DataListItem>

                            <DataListItem label="Visibility">
                                <dd className="d-flex flex-row gap-2xs">
                                    <Tag label="All visitors" status="default" iconName="eye" />
                                </dd>
                            </DataListItem>
                            <DataListItem label="Sales">
                                <dd>
                                    <Button type="muted" addClass="btn-link" size="xs">
                                        <Avatar size="xs" image="img/avatar-emma.jpeg" />
                                        <span>Camille</span>
                                    </Button>
                                </dd>
                            </DataListItem>
                            <DataListItem label="Mission director">
                                <dd>
                                    <Button type="muted" addClass="btn-link" size="xs">
                                        <Avatar size="xs" image="img/avatar-terence.jpeg" />
                                        <span>Terence Irving</span>
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
                            <DataListItem label="Customer contact">
                                <dd>
                                    <Button type="muted" addClass="btn-link" size="xs">
                                        <Avatar size="xs" image="img/avatar-emma.jpeg" />
                                        <span>Emma</span>
                                    </Button>
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
                <Section title="Expertises and methodology used">
                    <div className="bg-highlight p-md rounded">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </Section>
                <Section title="Results and impacts (business and ESG)">
                    <div className="bg-highlight p-md rounded">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </Section>
                {/* <Section title="Mission KPI">
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
                </Section> */}
            </AppContent>
        </Layout>
    );
};
