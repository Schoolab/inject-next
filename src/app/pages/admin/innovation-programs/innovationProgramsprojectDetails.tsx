import React from "react";
import { useEffect } from "react";
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";

import { Button } from "@/app/components/buttons/Button";
import { CardFeed } from "@/app/components/cards/CardFeed";

import { Icon } from "@/app/components/icons/Icon";

import { Section } from "@/app/components/sections/Section";

import { Nps } from "@/app/components/nps/Nps";
import { DataList } from "@/app/content/data/DataList";
import { DataListItem } from "@/app/content/data/DataListItem";

import { Badges } from "@/app/components/badges/Badges";
import { Tag } from "@/app/components/badges/tags/Tag";
import { Avatar } from "@/app/components/avatars/Avatar";
import { Stack } from "@/app/components/avatars/Stack";
import { phasesToggle } from "../../../../../public/utils/phasesToggle";
import { EmptyState } from "@/app/content/empty-states/EmptyState";

import { CardAskAI } from "@/app/components/cards/CardAskAI";
import { ItemResource } from "@/app/components/items/ItemResource";
import { ProgressBar } from "@/app/components/progress/bar/ProgressBar";

export const innovationProgramsprojectDetails = () => {
    useEffect(() => {
        phasesToggle();
    }, []);
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
                    <div className="d-flex flex-column flex-md-row  align-items-center flex-wrap flex-xl-nowrap gap-md">
                        <div className="card-image-container">
                            <div
                                className="card-image"
                                style={{
                                    backgroundImage: 'url("img/hero-3.png")',
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                }}
                            ></div>
                        </div>
                        <div className="d-flex flex-column align-items-center align-items-md-start gap-xs flex-fill">
                            <div className="d-flex flex-column align-items-center align-items-md-start align-items-lg-center align-items-xl-start gap-0">
                                <div className="d-flex align-items-center gap-2xs">
                                    <div className="h2  text-center text-xl-left d-flex align-items-center gap-2xs">
                                        <span>Project Name</span>
                                    </div>
                                </div>
                                <ul className="text-muted small metas is-list mb-none">
                                    <li className="list-inline-item" data-toggle="tooltip" data-placement="bottom" data-original-title="<ul class='list-unstyled d-flex flex-column gap-2xs m-none'><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/2216e7ab-c701-4503-83a2-ae7b91afb15d/sq150.jpeg'></div><span>Alexandra Jolly</span></li>" data-html="true" data-boundary="window">
                                        <a href="/program/71/project/2903/users">
                                            <small className="text-muted">1 member</small>
                                        </a>
                                    </li>
                                    <li
                                        className="list-inline-item"
                                        data-toggle="tooltip"
                                        data-placement="bottom"
                                        data-original-title="<ul class='list-unstyled d-flex flex-column gap-2xs m-none'><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/2216e7ab-c701-4503-83a2-ae7b91afb15d/sq150.jpeg'></div><span>Alexandra Jolly</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/3155b942-7535-4b0b-8ded-97eb42a92e1b/sq150.jpeg'></div><span>Emma Salvarelli</span></li>"
                                        data-html="true"
                                        data-boundary="window"
                                    >
                                        <a href="/program/71/project/2903/mentors">
                                            <small className="text-muted">2 experts</small>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="d-flex gap-xs">
                            <div className="dropdown">
                                <a className="btn btn-default btn-lg dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span>Contact</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" href="#">
                                        <span className="icon icon-comment-text-multiple-outline" />
                                        <span className="dropdown-item--label">Team Chat</span>
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <span className="icon icon-video" />
                                        <span className="dropdown-item--label">Team video</span>
                                    </a>
                                </div>
                            </div>
                            <div className="dropdown">
                                <a className="btn btn-transparent btn-lg btn-icon position-relative z-1" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="icon is-20px icon-options" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" href="#">
                                        <span>Setting 1</span>
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <span>Setting 2</span>
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <span>Setting 3</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section>
                    <div className="row">
                        <div className="col-12">
                            <div className="card is-highlighted p-md d-flex flex-column gap-md h-100 justify-content-between">
                                <div className="flex-fill">
                                    <h4>Data Completion</h4>
                                    <p>Collecting mission data is essential for capitalizing on completed work and measuring business and ESG impact. These insights feed into our Knowledge Base, boosting consultants' capabilities with access to historical mission intelligence.</p>
                                </div>
                                <div className="d-flex flex-column gap-2xs">
                                    <div className="small text-muted d-flex">
                                        <span className="flex-fill">Fields</span>
                                        <span>In progress</span>
                                    </div>
                                    <ProgressBar percentage={25} label="Steps" text="5/20" inline={true} />
                                </div>
                                <div className="d-flex gap-xs">
                                    <Button addClass="flex-fill" label="Complete data" type="default" iconStartName="plan-data" />
                                </div>
                            </div>
                        </div>
                    </div>
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
                            <DataListItem label="Visibility ">
                                <dd className="d-flex flex-row gap-2xs">
                                    <Tag label="All visitors" status="default" iconName="eye" />
                                </dd>
                            </DataListItem>

                            <DataListItem label="Sales">
                                <dd>
                                    <Button type="muted" addClass="btn-link" size="xs">
                                        <Avatar size="xs" image="img/avatar-terence.jpeg" />
                                        <span>Terence Irving</span>
                                    </Button>
                                </dd>
                            </DataListItem>
                            <DataListItem label="Mission director">
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
                            <DataListItem label="Experts">
                                <dd className="d-flex flex-row gap-2xs">
                                    <Button type="muted" addClass="btn-link" size="xs">
                                        <Stack>
                                            <Avatar size="xs" image="img/avatar-nora.jpeg" />
                                            <Avatar size="xs" image="img/avatar-marine.jpeg" />
                                            <Avatar size="xs" image="img/avatar-john.jpeg" />
                                        </Stack>
                                        <span>16</span>
                                    </Button>
                                </dd>
                            </DataListItem>
                            <DataListItem label="Juries">
                                <dd className="d-flex flex-row gap-2xs">
                                    <Button type="muted" addClass="btn-link" size="xs">
                                        <Stack>
                                            <Avatar size="xs" image="img/avatar-nora.jpeg" />
                                            <Avatar size="xs" image="img/avatar-marine.jpeg" />
                                            <Avatar size="xs" image="img/avatar-john.jpeg" />
                                        </Stack>
                                        <span>6</span>
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
                <Section title="Application">
                    <div className="d-flex flex-column gap-xs">
                        <div className="d-flex justify-content-between align-items-end">
                            <span className="label">Lorem ipsum</span>
                        </div>
                        <div className="bg-highlight p-md rounded">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div className="d-flex flex-column gap-xs">
                        <div className="d-flex justify-content-between align-items-end">
                            <span className="label">Lorem ipsum</span>
                        </div>
                        <div className="bg-highlight p-md rounded">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <ItemResource icon={{ name: "image" }} img="img/program-innovators.png" cover={false} resource={{ name: "my-cover.png", type: "PNG Image" }} />
                    </div>
                    <div className="d-flex flex-column gap-xs">
                        <div className="d-flex justify-content-between align-items-end">
                            <span className="label">Lorem ipsum</span>
                        </div>
                        <div className="bg-highlight p-md rounded">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </Section>
                <Section title="Deliverables">
                    <div className="d-flex flex-column gap-xs">
                        <div className="d-flex justify-content-between align-items-end">
                            <span className="label">Lorem ipsum</span>
                        </div>
                        <div className="bg-highlight p-md rounded">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div className="d-flex flex-column gap-xs">
                        <div className="d-flex justify-content-between align-items-end">
                            <span className="label">Lorem ipsum</span>
                        </div>
                        <div className="bg-highlight p-md rounded">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div className="d-flex flex-column gap-xs">
                        <div className="d-flex justify-content-between align-items-end">
                            <span className="label">Lorem ipsum</span>
                        </div>
                        <div className="bg-highlight p-md rounded">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </Section>
            </AppContent>
        </Layout>
    );
};
