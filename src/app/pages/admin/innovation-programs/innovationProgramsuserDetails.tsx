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

export const innovationProgramsuserDetails = () => {
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
                        label: "Members",
                        href: "",
                    },
                    {
                        label: "User name",
                    },
                    {
                        label: "Details",
                    },
                ]}
                title="User name"
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
                        label: "Participations",
                        href: "",
                    },
                ]}
            >
                <Section>
                    <div className="d-flex flex-column flex-md-row  align-items-center flex-wrap flex-xl-nowrap gap-md">
                        <Avatar image="img/thumbnails/pierre.jpg" iconName="account" isOval size="2xl" />
                        <div className="d-flex flex-column align-items-center align-items-md-start gap-xs flex-fill">
                            <div className="d-flex flex-column align-items-center align-items-md-start align-items-lg-center align-items-xl-start gap-0">
                                <div className="d-flex align-items-center gap-2xs">
                                    <div className="h2  text-center text-xl-left d-flex align-items-center gap-2xs">
                                        <span>User name</span>
                                    </div>
                                </div>
                                <ul className="text-muted small metas is-list mb-none">
                                    <li className="list-inline-item">
                                        <small className="text-muted">Bordeaux, FR</small>
                                    </li>
                                    <li>
                                        <small className="text-muted">Joined Oct 10, 2018</small>
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
                                        <span className="dropdown-item--label">Open Chat</span>
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <span className="icon icon-calendar" />
                                        <span className="dropdown-item--label">Book a meeting</span>
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

                <Section title="Summary" subtitle="All you need to know about this user">
                    <div className="bg-highlight p-md rounded">
                        <DataList>
                            <DataListItem label="Name">
                                <dd>
                                    <span>User name</span>
                                </dd>
                            </DataListItem>
                            <DataListItem label="Email">
                                <dd>
                                    <span>email@schoolab.com</span>
                                </dd>
                            </DataListItem>
                            <DataListItem label="Job">
                                <dd>
                                    <span>Partner & Chief Technology Officer - Schoolab</span>
                                </dd>
                            </DataListItem>
                            <DataListItem label="location">
                                <dd>
                                    <span>City, Country </span>
                                </dd>
                            </DataListItem>
                            <DataListItem label="Skills ">
                                <dd>
                                    <Badges>
                                        <Tag label="mobile" />
                                        <Tag label="Design thinking" />
                                        <Tag label="Data" />
                                        <Tag label="Agile" />
                                        <Tag label="Product" />
                                        <Tag label="Digital" />
                                    </Badges>
                                </dd>
                            </DataListItem>
                            <hr></hr>
                            <h4 className="nav-title flex-fill mb-none">Custom fields</h4>
                            <DataListItem label="Coach type">
                                <dd>
                                    <span>-</span>
                                </dd>
                            </DataListItem>

                            <hr></hr>
                            <DataListItem label="Visibility ">
                                <dd className="d-flex flex-row gap-2xs">
                                    <Tag label="Public" addClass="is-open" status="default" iconName="eye" />
                                </dd>
                            </DataListItem>
                            <DataListItem label="Type ">
                                <dd>
                                    <Badges>
                                        <Tag label="Corporate" />
                                    </Badges>
                                </dd>
                            </DataListItem>
                        </DataList>
                    </div>
                </Section>
                <Section title="About">
                    <div className="d-flex flex-column gap-xs">
                        <div className="bg-highlight p-md rounded">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </Section>
            </AppContent>
        </Layout>
    );
};
