import React from "react";
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { CardEvent } from "@/app/components/cards/CardEvent";
import { Button } from "@/app/components/buttons/Button";
import { CardFeed } from "@/app/components/cards/CardFeed";
import { ItemResource } from "@/app/components/items/ItemResource";
import { Icon } from "@/app/components/icons/Icon";
import { Dropdown } from "@/app/components/dropdowns/Dropdown";
import { DropdownMenu } from "@/app/components/dropdowns/DropdownMenu";
import { DropdownItem } from "@/app/components/dropdowns/DropdownItem";
import { DropdownDivider } from "@/app/components/dropdowns/DropdownDivider";
import { Section } from "@/app/components/sections/Section";
import { CardParticipant } from "@/app/components/cards/CardParticipant";
import { ItemSetupTask } from "@/app/components/items/ItemSetupTask";
import { Stepper, StepType } from "@/app/components/stepper/Stepper";
import { Nps } from "@/app/components/nps/Nps";
import { DataList } from "@/app/content/data/DataList";
import { DataListItem } from "@/app/content/data/DataListItem";
import { FormFieldSet } from "@/app/forms/fieldset/FormFieldSet";
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

export const consultingMissionDetails = () => {
    return (
        <Layout theme="default" showShortcutbarAdmin={true} showShortcutbar={false} shortcutBarExpanded={false}>
            <AppContent
                sections="transparent"
                breadcrumb={[
                    {
                        label: "Consulting missions",
                        href: "",
                    },
                    {
                        label: "Missions",
                        href: "",
                    },
                    {
                        label: "Impact Innovators",
                    },
                ]}
                title="Impact Innovator"
                buttons={[
                    {
                        type: "default",
                        label: "Data",
                        link: "",
                        iconStartName: "plan-data",
                    },
                ]}
                subnav={[
                    {
                        label: "Details",
                        href: "",
                        isActive: true,
                    },
                    {
                        label: "shared files",
                        href: "",
                    },
                ]}
            >
                <Section>
                    <div className="cq">
                        <div className="cq-12 cq-lg-6 mb-md mb-lg-0">
                            <div className="card is-highlighted border rounded p-md d-flex flex-column gap-md h-100">
                                <div className="d-flex gap-xs">
                                    <div>
                                        <h4>Data Completion</h4>
                                        <p>Collecting mission data is essential for capitalizing on completed work and measuring business and ESG impact. These insights feed into our Knowledge Base, boosting consultants' capabilities with access to historical mission intelligence.</p>
                                    </div>
                                    <div>
                                        <svg className="progress-circle-container is-2xl mb-3" viewBox="0 0 32 32" data-percent={15} style={{ ["--percent" as any]: 15 }}>
                                            <circle className="progress-circle progress-circle-bg" />
                                            <circle className="progress-circle progress-circle-percent" />
                                            <text className="progress-circle-text" x={16} y={15}>
                                                20%
                                            </text>
                                            <text className="progress-circle-subtext" x={16} y={20}>
                                                Fields
                                            </text>
                                        </svg>
                                    </div>
                                </div>

                                <Button label="Complete data" type="default" iconStartName="plan-data" />
                            </div>
                        </div>
                        <div className="cq-12 cq-lg-6 mb-md mb-lg-0">
                            <div className="card border rounded p-md d-flex flex-column gap-md h-100 justify-content-between">
                                <div className="">
                                    <h4>Customers access</h4>
                                    <p>Share access with the client to deliverables, shared files, and satisfaction feedback tools.</p>
                                </div>
                                <div className="d-flex gap-xs">
                                    <Button addClass="flex-fill" label="Go to portal" type="default" iconStartName="new-tab" />
                                    <Button hasNumber="2" addClass="flex-fill" label="Customers access" type="default" iconStartName="account-plus" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section title="Mission phasses">
                    <Stepper steps={steps} />
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
                                    <Tag label="Open" iconName="status-filled" status="open" /> <Tag label="Public" iconName="visibility" status="open" />
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
                <Section title="Satisfaction">
                    <CardFeed avatar="https://inject-prod.s3.amazonaws.com/images/71446890-6864-4521-9548-8f5973075b3a/sq150.jpeg" author="Pierre Forestier" metas={[{ label: "Program Manager, Schoolab" }]} content={`<h4>Feedback.title</h4><p>As we’re reaching the end of our mission together, I wanted to thank you personally for the collaboration and the trust you’ve placed in us.</p><p class="p-0 small">NPS:</p>`} readMore={false} isFooterActions={false} isTitleActions={false}>
                        <Nps isDisabled={true}></Nps>
                    </CardFeed>
                </Section>
                <Section title="Verbatims">
                    <div className="cq">
                        <div className="cq-12 cq-lg-4">
                            <CardFeed avatar="https://inject-prod.s3.amazonaws.com/images/71446890-6864-4521-9548-8f5973075b3a/sq150.jpeg" author="Pierre Forestier" metas={[{ label: "Program Manager, Schoolab" }]} content={`<h4>Verbatim.title</h4><p>As we’re reaching the end of our mission together, I wanted to thank you personally for the collaboration and the trust you’ve placed in us.</p>`} readMore={false} isFooterActions={false} isTitleActions={false}></CardFeed>
                        </div>
                        <div className="cq-12 cq-lg-4">
                            <CardFeed avatar="https://inject-prod.s3.amazonaws.com/images/71446890-6864-4521-9548-8f5973075b3a/sq150.jpeg" author="Pierre Forestier" metas={[{ label: "Program Manager, Schoolab" }]} content={`<h4>Verbatim.title</h4><p>As we’re reaching the end of our mission together, I wanted to thank you personally for the collaboration and the trust you’ve placed in us.</p>`} readMore={false} isFooterActions={false} isTitleActions={false}></CardFeed>
                        </div>
                        <div className="cq-12 cq-lg-4">
                            <CardFeed avatar="https://inject-prod.s3.amazonaws.com/images/71446890-6864-4521-9548-8f5973075b3a/sq150.jpeg" author="Pierre Forestier" metas={[{ label: "Program Manager, Schoolab" }]} content={`<h4>Verbatim.title</h4><p>As we’re reaching the end of our mission together, I wanted to thank you personally for the collaboration and the trust you’ve placed in us.</p>`} readMore={false} isFooterActions={false} isTitleActions={false}></CardFeed>
                        </div>
                    </div>
                </Section>
            </AppContent>
        </Layout>
    );
};
