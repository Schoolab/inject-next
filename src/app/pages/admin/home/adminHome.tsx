import React from "react";
import { useEffect } from "react";

import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { types } from "../../../../../public/utils/tables/types";
import { tooltips } from "../../../../../public/utils/tooltips";
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
import { StatCard } from "@/app/components/stat-cards/StatCard";
import { Progress } from "@/app/components/progress/Progress";

export const adminHome = () => {
    useEffect(() => {
        types();
        tooltips();
    }, []);
    return (
        <Layout theme="default" hub={true} showShortcutbarAdmin={true} showShortcutbar={false} shortcutBarExpanded={true}>
            <AppContent
                sections="transparent"
                breadcrumb={[
                    {
                        label: "Home",
                        href: "",
                    },
                ]}
                title="Home"
                showSubnav={false}
            >
                {/* <Section>
                    <div className="row">
                        <div className="col-12">
                            <div className="w-100 message-composer-row align-items-center ">
                                <span className="icon icon-search is-sm ml-md text-muted"></span>
                                <textarea className="message-composer-input form-control pl-0" id="message_light_body" name="message_light[body]" placeholder="Search…"></textarea>
                               
                            </div>
                        </div>
                    </div>
                </Section> */}
                <Section>
                    <CardAskAI />
                </Section>
                <Section title="Initiatives">
                    <div className="row">
                        <div className="col-12 col-lg-6 mb-md">
                            <div className="card is-linked p-md d-flex flex-column gap-md h-100 justify-content-between">
                                <div className="flex-fill d-flex">
                                    <h4 className="d-flex flex-fill gap-2xs align-items-center">
                                        <span className="icon is-sm icon-work"></span> Consulting missions<span className="z-2 icon is-xs text-muted icon-information" data-toggle="tooltip" data-placement="top" data-boundary="window" data-original-title="A Consulting Mission is a client project led by a Schoolab consultant, with a shared portal to exchange deliverables, measure impact, and gather client feedback."></span>
                                    </h4>
                                    <Button link="#" addClass="stretched-link" size="sm" label="View mission" type="default" />
                                </div>
                                <StatCard link="#" number="22" caption="Ongoing missions"></StatCard>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mb-md">
                            <div className="card is-linked p-md d-flex flex-column gap-md h-100 justify-content-between">
                                <div className="flex-fill d-flex">
                                    <h4 className="d-flex flex-fill gap-2xs align-items-center">
                                        <span className="icon is-sm icon-lightbulb"></span>Innovation programs<span className="z-2 icon is-xs text-muted icon-information" data-toggle="tooltip" data-placement="top" data-boundary="window" data-original-title="An Innovation Program enables participants, experts, and juries to collaborate via Inject on innovation challenges, training, and project follow-ups."></span>
                                    </h4>
                                    <Button link="#" addClass="stretched-link" size="sm" label="View programs" type="default" />
                                </div>
                                <StatCard link="#" number="22" caption="Ongoing programs"></StatCard>
                            </div>
                        </div>
                    </div>

                    <div className="card p-md d-flex flex-column gap-md mb-md">
                        <h4 className="d-flex flex-fill gap-2xs align-items-center">Initiative by phases </h4>

                        <div className="d-flex gap-xs flex-column flex-sm-row">
                            <StatCard link="#" number="22" caption="Ongoing programs"></StatCard>
                            <StatCard link="#" number="22" caption="Ongoing programs"></StatCard>
                            <StatCard link="#" number="22" caption="Ongoing programs"></StatCard>
                            <StatCard link="#" number="22" caption="Ongoing programs"></StatCard>
                        </div>
                    </div>
                </Section>
                <Section title="My Initiatives">
                    <div className="row">
                        <div className="col-12 mb-md">
                            <div className="card is-highlighted p-md d-flex flex-column h-100 justify-content-between">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex align-items-center gap-2xs flex-fill">
                                        <span className="icon icon-alert is-sm"></span>
                                        <h4>My initiatives with missing data</h4>
                                    </div>
                                    <Button link="#" size="sm" label="View All My Initiatives" type="default" />
                                </div>
                             
                                <p>The following initiatives require attention for missing data and experience report completion:</p>

                                <div className="items">
                                    <div className="item is-linked is-bordered">
                                        <div className="item-row">
                                            <div className="item-row align-items-center">
                                                <div className="icon icon--program">
                                                    <span>IN</span>
                                                </div>
                                                <div className="item-content">
                                                    <a href="#" className="item-title stretched-link">
                                                        Initiative.name
                                                    </a>
                                                    <ul className="list-inline list-dotted text-muted mb-none">
                                                        <li className="list-inline-item small">Customer</li>
                                                        <li className="list-inline-item small">start date</li>
                                                    </ul>
                                                </div>
                                                <div className="d-flex gap-2xs align-items-center">
                                                    <Progress percentage={30} size="sm" />
                                                    <span className="text-muted small">33% Data</span>
                                                </div>
                                                <div className="d-flex gap-2xs align-items-center">
                                                    <Progress percentage={30} size="sm" />
                                                    <span className="text-muted small">1/3 ER</span>
                                                </div>
                                                <Button link="#" addClass="stretched-link" size="sm" label="Complete" type="brand-primary" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item is-linked is-bordered">
                                        <div className="item-row">
                                            <div className="item-row align-items-center">
                                                <div className="icon icon--program">
                                                    <span>IN</span>
                                                </div>
                                                <div className="item-content">
                                                    <a href="#" className="item-title stretched-link">
                                                        Initiative.name
                                                    </a>
                                                    <ul className="list-inline list-dotted text-muted mb-none">
                                                        <li className="list-inline-item small">Customer</li>
                                                        <li className="list-inline-item small">start date</li>
                                                    </ul>
                                                </div>
                                                <div className="d-flex gap-2xs align-items-center">
                                                    <Progress percentage={30} size="sm" />
                                                    <span className="text-muted small">33% Data</span>
                                                </div>
                                                <div className="d-flex gap-2xs align-items-center">
                                                    <Progress percentage={30} size="sm" />
                                                    <span className="text-muted small">1/3 ER</span>
                                                </div>
                                                <Button link="#" addClass="stretched-link" size="sm" label="Complete" type="brand-primary" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item is-linked is-bordered">
                                        <div className="item-row">
                                            <div className="item-row align-items-center">
                                                <div className="icon icon--program">
                                                    <span>IN</span>
                                                </div>
                                                <div className="item-content">
                                                    <a href="#" className="item-title stretched-link">
                                                        Initiative.name
                                                    </a>
                                                    <ul className="list-inline list-dotted text-muted mb-none">
                                                        <li className="list-inline-item small">Customer</li>
                                                        <li className="list-inline-item small">start date</li>
                                                    </ul>
                                                </div>
                                                <div className="d-flex gap-2xs align-items-center">
                                                    <Progress percentage={30} size="sm" />
                                                    <span className="text-muted small">33% Data</span>
                                                </div>
                                                <div className="d-flex gap-2xs align-items-center">
                                                    <Progress percentage={30} size="sm" />
                                                    <span className="text-muted small">1/3 ER</span>
                                                </div>
                                                <Button link="#" addClass="stretched-link" size="sm" label="Complete" type="brand-primary" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="d-flex gap-xs">
                                    <Button addClass="flex-fill" label="View all" type="default" />
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-lg-6 mb-md">
                            <div className="d-flex align-items-center mb-md">
                                <h4 className="flex-fill ">My last created initiatives</h4>
                                <Button link="#" size="sm" label="View all" type="default" />
                            </div>
                            <div className="items">
                                <div className="item is-linked is-bordered">
                                    <div className="item-row">
                                        <div className="item-row align-items-center">
                                            <div className="icon icon--program">
                                                <span>IN</span>
                                            </div>
                                            <div className="item-content">
                                                <a href="#" className="item-title stretched-link">
                                                    Initiative.name
                                                </a>
                                                <ul className="list-inline list-dotted text-muted mb-none">
                                                    <li className="list-inline-item small">Customer</li>
                                                    <li className="list-inline-item small">start date</li>
                                                </ul>
                                            </div>
                                            <div className="d-flex gap-2xs align-items-center">
                                                <Progress percentage={30} size="sm" />
                                                <span className="text-muted small">33% Data</span>
                                            </div>
                                            <div className="d-flex gap-2xs align-items-center">
                                                <Progress percentage={30} size="sm" />
                                                <span className="text-muted small">1/3 ER</span>
                                            </div>
                                        </div>
                                        <div className="item-options">
                                            <a href="#" className="btn btn-lg btn-muted" role="button" data-toggle="dropdown" aria-expanded="false">
                                                <span className="icon icon-options" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a href="#" className="dropdown-item">
                                                    Manage
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    Workspace
                                                </a>
                                                <div className="dropdown-divider" />
                                                <a href="#" className="dropdown-item">
                                                    <span className="dropdown-item--icon icon icon-pencil" />
                                                    <span className="dropdown-item--label">Edit</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item is-linked is-bordered">
                                    <div className="item-row">
                                        <div className="item-row align-items-center">
                                            <div className="icon icon--program">
                                                <span>IN</span>
                                            </div>
                                            <div className="item-content">
                                                <a href="#" className="item-title stretched-link">
                                                    Initiative.name
                                                </a>
                                                <ul className="list-inline list-dotted text-muted mb-none">
                                                    <li className="list-inline-item small">Customer</li>
                                                    <li className="list-inline-item small">start date</li>
                                                </ul>
                                            </div>
                                            <div className="d-flex gap-2xs align-items-center">
                                                <Progress percentage={30} size="sm" />
                                                <span className="text-muted small">33% Data</span>
                                            </div>
                                            <div className="d-flex gap-2xs align-items-center">
                                                <Progress percentage={30} size="sm" />
                                                <span className="text-muted small">1/3 ER</span>
                                            </div>
                                        </div>
                                        <div className="item-options">
                                            <a href="#" className="btn btn-lg btn-muted" role="button" data-toggle="dropdown" aria-expanded="false">
                                                <span className="icon icon-options" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a href="#" className="dropdown-item">
                                                    Manage
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    Workspace
                                                </a>
                                                <div className="dropdown-divider" />
                                                <a href="#" className="dropdown-item">
                                                    <span className="dropdown-item--icon icon icon-pencil" />
                                                    <span className="dropdown-item--label">Edit</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item is-linked is-bordered">
                                    <div className="item-row">
                                        <div className="item-row align-items-center">
                                            <div className="icon icon--program">
                                                <span>IN</span>
                                            </div>
                                            <div className="item-content">
                                                <a href="#" className="item-title stretched-link">
                                                    Initiative.name
                                                </a>
                                                <ul className="list-inline list-dotted text-muted mb-none">
                                                    <li className="list-inline-item small">Customer</li>
                                                    <li className="list-inline-item small">start date</li>
                                                </ul>
                                            </div>
                                            <div className="d-flex gap-2xs align-items-center">
                                                <Progress percentage={30} size="sm" />
                                                <span className="text-muted small">33% Data</span>
                                            </div>
                                            <div className="d-flex gap-2xs align-items-center">
                                                <Progress percentage={30} size="sm" />
                                                <span className="text-muted small">1/3 ER</span>
                                            </div>
                                        </div>
                                        <div className="item-options">
                                            <a href="#" className="btn btn-lg btn-muted" role="button" data-toggle="dropdown" aria-expanded="false">
                                                <span className="icon icon-options" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a href="#" className="dropdown-item">
                                                    Manage
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    Workspace
                                                </a>
                                                <div className="dropdown-divider" />
                                                <a href="#" className="dropdown-item">
                                                    <span className="dropdown-item--icon icon icon-pencil" />
                                                    <span className="dropdown-item--label">Edit</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mb-md">
                            <div className="d-flex align-items-center mb-md">
                                <h4 className="flex-fill ">My last closed initiatives</h4>
                                <Button link="#" size="sm" label="View all" type="default" />
                            </div>
                            <div className="items">
                                <div className="item is-linked is-bordered">
                                    <div className="item-row">
                                        <div className="item-row align-items-center">
                                            <div className="icon icon--program">
                                                <span>IN</span>
                                            </div>
                                            <div className="item-content">
                                                <a href="#" className="item-title stretched-link">
                                                    Initiative.name
                                                </a>
                                                <ul className="list-inline list-dotted text-muted mb-none">
                                                    <li className="list-inline-item small">Customer</li>
                                                    <li className="list-inline-item small">start date</li>
                                                </ul>
                                            </div>
                                            <div className="d-flex gap-2xs align-items-center">
                                                <Progress percentage={30} size="sm" />
                                                <span className="text-muted small">33% Data</span>
                                            </div>
                                            <div className="d-flex gap-2xs align-items-center">
                                                <Progress percentage={30} size="sm" />
                                                <span className="text-muted small">1/3 ER</span>
                                            </div>
                                        </div>
                                        <div className="item-options">
                                            <a href="#" className="btn btn-lg btn-muted" role="button" data-toggle="dropdown" aria-expanded="false">
                                                <span className="icon icon-options" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a href="#" className="dropdown-item">
                                                    Manage
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    Workspace
                                                </a>
                                                <div className="dropdown-divider" />
                                                <a href="#" className="dropdown-item">
                                                    <span className="dropdown-item--icon icon icon-pencil" />
                                                    <span className="dropdown-item--label">Edit</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item is-linked is-bordered">
                                    <div className="item-row">
                                        <div className="item-row align-items-center">
                                            <div className="icon icon--program">
                                                <span>IN</span>
                                            </div>
                                            <div className="item-content">
                                                <a href="#" className="item-title stretched-link">
                                                    Initiative.name
                                                </a>
                                                <ul className="list-inline list-dotted text-muted mb-none">
                                                    <li className="list-inline-item small">Customer</li>
                                                    <li className="list-inline-item small">start date</li>
                                                </ul>
                                            </div>
                                            <div className="d-flex gap-2xs align-items-center">
                                                <Progress percentage={30} size="sm" />
                                                <span className="text-muted small">33% Data</span>
                                            </div>
                                            <div className="d-flex gap-2xs align-items-center">
                                                <Progress percentage={30} size="sm" />
                                                <span className="text-muted small">1/3 ER</span>
                                            </div>
                                        </div>
                                        <div className="item-options">
                                            <a href="#" className="btn btn-lg btn-muted" role="button" data-toggle="dropdown" aria-expanded="false">
                                                <span className="icon icon-options" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a href="#" className="dropdown-item">
                                                    Manage
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    Workspace
                                                </a>
                                                <div className="dropdown-divider" />
                                                <a href="#" className="dropdown-item">
                                                    <span className="dropdown-item--icon icon icon-pencil" />
                                                    <span className="dropdown-item--label">Edit</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item is-linked is-bordered">
                                    <div className="item-row">
                                        <div className="item-row align-items-center">
                                            <div className="icon icon--program">
                                                <span>IN</span>
                                            </div>
                                            <div className="item-content">
                                                <a href="#" className="item-title stretched-link">
                                                    Initiative.name
                                                </a>
                                                <ul className="list-inline list-dotted text-muted mb-none">
                                                    <li className="list-inline-item small">Customer</li>
                                                    <li className="list-inline-item small">start date</li>
                                                </ul>
                                            </div>
                                            <div className="d-flex gap-2xs align-items-center">
                                                <Progress percentage={30} size="sm" />
                                                <span className="text-muted small">33% Data</span>
                                            </div>
                                            <div className="d-flex gap-2xs align-items-center">
                                                <Progress percentage={30} size="sm" />
                                                <span className="text-muted small">1/3 ER</span>
                                            </div>
                                        </div>
                                        <div className="item-options">
                                            <a href="#" className="btn btn-lg btn-muted" role="button" data-toggle="dropdown" aria-expanded="false">
                                                <span className="icon icon-options" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a href="#" className="dropdown-item">
                                                    Manage
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    Workspace
                                                </a>
                                                <div className="dropdown-divider" />
                                                <a href="#" className="dropdown-item">
                                                    <span className="dropdown-item--icon icon icon-pencil" />
                                                    <span className="dropdown-item--label">Edit</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col-12 col-lg-6 mb-md">
                            <div className="card p-md d-flex flex-column gap-md">
                                <div className="d-flex align-items-center">
                                    <h4 className="flex-fill ">Last initiatives created</h4>
                                    <Button link="#" size="sm" label="View all" type="default" />
                                </div>

                                <div className="">
                                    <table className="table table-hover responsive w-100" id="doc-table-data-types" role="grid">
                                        <caption className="sr-only">Data cells types table</caption>
                                        <thead>
                                            <tr>
                                                <th id="checkbox" className="table-checkbox sorting_disabled" style={{ minWidth: 20 }}>
                                                    <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                                        <input type="checkbox" id="selectAll" className="custom-control-input selectAllBulkSelectors" name="select" />
                                                        <label className="custom-control-label" htmlFor="selectAll" />
                                                    </div>
                                                </th>
                                                <th id="large" className="sorting" style={{ minWidth: 320 }}>
                                                    <div className="d-flex gap-2xs align-items-center">
                                                        <span>Name</span>
                                                    </div>
                                                </th>
                                                <th id="small" className="sorting" style={{ minWidth: 280 }}>
                                                    <div className="d-flex gap-2xs align-items-center">
                                                        <span>Start</span>
                                                    </div>
                                                </th>
                                                <th id="multiple" className="sorting" style={{ minWidth: 280 }}>
                                                    <div className="d-flex gap-2xs align-items-center">
                                                        <span>End</span>
                                                    </div>
                                                </th>
                                                <th id="empty" className="sorting_disabled" style={{ minWidth: 280 }}>
                                                    <div className="d-flex gap-2xs align-items-center">
                                                        <span>Data completion</span>
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr role="row">
                                                <td className="table-checkbox">
                                                    <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                                        <input type="checkbox" id="15" className="bulkActionSelector custom-control-input" defaultValue="15" />
                                                        <label className="custom-control-label" htmlFor="15" />
                                                    </div>
                                                </td>
                                                <th>
                                                    <div className="d-flex align-items-center flex-fill gap-0">
                                                        <div className="d-flex align-items-start flex-fill gap-xs">
                                                            <div aria-hidden="true" className="icon icon--program is-lg">
                                                                <span aria-hidden="true">PN</span>
                                                            </div>
                                                            <div className="d-flex flex-column flex-fill gap-0">
                                                                <a href="#" className="is-primary font-weight-bold stretched-link" aria-labelledby="large">
                                                                    Program Name
                                                                </a>
                                                                <div className="text-muted small metas is-list mb-none">
                                                                    <p>Org Name</p>
                                                                    <p>23 programs</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="dropdown-container z-1" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Options">
                                                            <a href="#" className="btn btn-lg btn-muted" role="button" data-toggle="dropdown" aria-expanded="false">
                                                                <span className="icon icon-options" />
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <a href="#" className="dropdown-item">
                                                                    Data
                                                                </a>
                                                                <a href="#" className="dropdown-item">
                                                                    Manage
                                                                </a>
                                                                <a href="#" className="dropdown-item">
                                                                    Workspace
                                                                </a>
                                                                <div className="dropdown-divider" />
                                                                <a href="#" className="dropdown-item">
                                                                    <span className="dropdown-item--icon icon icon-pencil" />
                                                                    <span className="dropdown-item--label">Edit</span>
                                                                </a>
                                                                <a href="#" className="dropdown-item">
                                                                    <span className="dropdown-item--icon icon icon-copy" />
                                                                    <span className="dropdown-item--label">Duplicate</span>
                                                                </a>
                                                                <a href="#" className="dropdown-item is-danger">
                                                                    <span className="dropdown-item--icon icon icon-delete" />
                                                                    <span className="dropdown-item--label">Delete</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td>
                                                    <div className="d-flex align-items-center flex-fill gap-0">
                                                        <div className="d-flex align-items-start flex-fill gap-xs">
                                                            <div className="d-flex flex-fill gap-2xs">
                                                                <p aria-labelledby="small">July 12, 2024 at 2:00 PM</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center flex-fill gap-0">
                                                        <div className="d-flex align-items-start flex-fill gap-xs">
                                                            <div className="d-flex flex-fill gap-2xs">
                                                                <p aria-labelledby="small">July 12, 2024 at 2:00 PM</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center flex-fill gap-0">
                                                        <div className="d-flex align-items-start flex-fill gap-xs">
                                                            <svg className="progress-circle-container is-sm" viewBox="0 0 32 32" data-percent="25" style={{ ["--percent" as any]: "25" }}>
                                                                <circle className="progress-circle progress-circle-bg"></circle>
                                                                <circle className="progress-circle progress-circle-percent"></circle>
                                                                <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z"></path>
                                                            </svg>
                                                            <div className="d-flex flex-fill gap-2xs">
                                                                <p aria-labelledby="small">25%</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr role="row">
                                                <td className="table-checkbox">
                                                    <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                                        <input type="checkbox" id="15" className="bulkActionSelector custom-control-input" defaultValue="15" />
                                                        <label className="custom-control-label" htmlFor="15" />
                                                    </div>
                                                </td>
                                                <th>
                                                    <div className="d-flex align-items-center flex-fill gap-0">
                                                        <div className="d-flex align-items-start flex-fill gap-xs">
                                                            <div aria-hidden="true" className="icon icon--program is-lg">
                                                                <span aria-hidden="true">PN</span>
                                                            </div>
                                                            <div className="d-flex flex-column flex-fill gap-0">
                                                                <a href="#" className="is-primary font-weight-bold stretched-link" aria-labelledby="large">
                                                                    Program Name
                                                                </a>
                                                                <div className="text-muted small metas is-list mb-none">
                                                                    <p>Org Name</p>
                                                                    <p>23 programs</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="dropdown-container z-1" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Options">
                                                            <a href="#" className="btn btn-lg btn-muted" role="button" data-toggle="dropdown" aria-expanded="false">
                                                                <span className="icon icon-options" />
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <a href="#" className="dropdown-item">
                                                                    {" "}
                                                                    Data{" "}
                                                                </a>
                                                                <a href="#" className="dropdown-item">
                                                                    {" "}
                                                                    Manage{" "}
                                                                </a>
                                                                <a href="#" className="dropdown-item">
                                                                    {" "}
                                                                    Workspace{" "}
                                                                </a>
                                                                <div className="dropdown-divider" />
                                                                <a href="#" className="dropdown-item">
                                                                    <span className="dropdown-item--icon icon icon-pencil" />
                                                                    <span className="dropdown-item--label">Edit</span>
                                                                </a>
                                                                <a href="#" className="dropdown-item">
                                                                    <span className="dropdown-item--icon icon icon-copy" />
                                                                    <span className="dropdown-item--label">Duplicate</span>
                                                                </a>
                                                                <a href="#" className="dropdown-item is-danger">
                                                                    <span className="dropdown-item--icon icon icon-delete" />
                                                                    <span className="dropdown-item--label">Delete</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td>
                                                    <div className="d-flex align-items-center flex-fill gap-0">
                                                        <div className="d-flex align-items-start flex-fill gap-xs">
                                                            <div className="d-flex flex-fill gap-2xs">
                                                                <p aria-labelledby="small">July 12, 2024 at 2:00 PM</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center flex-fill gap-0">
                                                        <div className="d-flex align-items-start flex-fill gap-xs">
                                                            <div className="d-flex flex-fill gap-2xs">
                                                                <p aria-labelledby="small">July 12, 2024 at 2:00 PM</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center flex-fill gap-0">
                                                        <div className="d-flex align-items-start flex-fill gap-xs">
                                                            <svg className="progress-circle-container is-sm" viewBox="0 0 32 32" data-percent="25" style={{ ["--percent" as any]: "25" }}>
                                                                <circle className="progress-circle progress-circle-bg"></circle>
                                                                <circle className="progress-circle progress-circle-percent"></circle>
                                                                <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z"></path>
                                                            </svg>
                                                            <div className="d-flex flex-fill gap-2xs">
                                                                <p aria-labelledby="small">25%</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr role="row">
                                                <td className="table-checkbox">
                                                    <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                                        <input type="checkbox" id="15" className="bulkActionSelector custom-control-input" defaultValue="15" />
                                                        <label className="custom-control-label" htmlFor="15" />
                                                    </div>
                                                </td>
                                                <th>
                                                    <div className="d-flex align-items-center flex-fill gap-0">
                                                        <div className="d-flex align-items-start flex-fill gap-xs">
                                                            <div aria-hidden="true" className="icon icon--program is-lg">
                                                                <span aria-hidden="true">PN</span>
                                                            </div>
                                                            <div className="d-flex flex-column flex-fill gap-0">
                                                                <a href="#" className="is-primary font-weight-bold stretched-link" aria-labelledby="large">
                                                                    Program Name
                                                                </a>
                                                                <div className="text-muted small metas is-list mb-none">
                                                                    <p>Org Name</p>
                                                                    <p>23 programs</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="dropdown-container z-1" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Options">
                                                            <a href="#" className="btn btn-lg btn-muted" role="button" data-toggle="dropdown" aria-expanded="false">
                                                                <span className="icon icon-options" />
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <a href="#" className="dropdown-item">
                                                                    {" "}
                                                                    Data{" "}
                                                                </a>
                                                                <a href="#" className="dropdown-item">
                                                                    {" "}
                                                                    Manage{" "}
                                                                </a>
                                                                <a href="#" className="dropdown-item">
                                                                    {" "}
                                                                    Workspace{" "}
                                                                </a>
                                                                <div className="dropdown-divider" />
                                                                <a href="#" className="dropdown-item">
                                                                    <span className="dropdown-item--icon icon icon-pencil" />
                                                                    <span className="dropdown-item--label">Edit</span>
                                                                </a>
                                                                <a href="#" className="dropdown-item">
                                                                    <span className="dropdown-item--icon icon icon-copy" />
                                                                    <span className="dropdown-item--label">Duplicate</span>
                                                                </a>
                                                                <a href="#" className="dropdown-item is-danger">
                                                                    <span className="dropdown-item--icon icon icon-delete" />
                                                                    <span className="dropdown-item--label">Delete</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td>
                                                    <div className="d-flex align-items-center flex-fill gap-0">
                                                        <div className="d-flex align-items-start flex-fill gap-xs">
                                                            <div className="d-flex flex-fill gap-2xs">
                                                                <p aria-labelledby="small">July 12, 2024 at 2:00 PM</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center flex-fill gap-0">
                                                        <div className="d-flex align-items-start flex-fill gap-xs">
                                                            <div className="d-flex flex-fill gap-2xs">
                                                                <p aria-labelledby="small">July 12, 2024 at 2:00 PM</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center flex-fill gap-0">
                                                        <div className="d-flex align-items-start flex-fill gap-xs">
                                                            <svg className="progress-circle-container is-sm" viewBox="0 0 32 32" data-percent="25" style={{ ["--percent" as any]: "25" }}>
                                                                <circle className="progress-circle progress-circle-bg"></circle>
                                                                <circle className="progress-circle progress-circle-percent"></circle>
                                                                <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z"></path>
                                                            </svg>
                                                            <div className="d-flex flex-fill gap-2xs">
                                                                <p aria-labelledby="small">25%</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mb-md">
                            <div className="card p-md d-flex flex-column gap-md">
                                <div className="d-flex align-items-center">
                                    <h4 className="flex-fill ">My initiatives </h4>
                                    <Button link="#" size="sm" label="View all" type="default" />
                                </div>

                                <div className="">
                                    <table className="table table-hover responsive w-100" id="doc-table-data-types-bis" role="grid">
                                        <caption className="sr-only">Data cells types table</caption>
                                        <thead>
                                            <tr>
                                                <th id="checkbox" className="table-checkbox sorting_disabled" style={{ minWidth: 20 }}>
                                                    <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                                        <input type="checkbox" id="selectAll" className="custom-control-input selectAllBulkSelectors" name="select" />
                                                        <label className="custom-control-label" htmlFor="selectAll" />
                                                    </div>
                                                </th>
                                                <th id="large" className="sorting" style={{ minWidth: 320 }}>
                                                    <div className="d-flex gap-2xs align-items-center">
                                                        <span>Name</span>
                                                    </div>
                                                </th>
                                                <th id="small" className="sorting" style={{ minWidth: 280 }}>
                                                    <div className="d-flex gap-2xs align-items-center">
                                                        <span>Start</span>
                                                    </div>
                                                </th>
                                                <th id="multiple" className="sorting" style={{ minWidth: 280 }}>
                                                    <div className="d-flex gap-2xs align-items-center">
                                                        <span>End</span>
                                                    </div>
                                                </th>
                                                <th id="empty" className="sorting_disabled" style={{ minWidth: 280 }}>
                                                    <div className="d-flex gap-2xs align-items-center">
                                                        <span>Data completion</span>
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr role="row">
                                                <td className="table-checkbox">
                                                    <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                                        <input type="checkbox" id="15" className="bulkActionSelector custom-control-input" defaultValue="15" />
                                                        <label className="custom-control-label" htmlFor="15" />
                                                    </div>
                                                </td>
                                                <th>
                                                    <div className="d-flex align-items-center flex-fill gap-0">
                                                        <div className="d-flex align-items-start flex-fill gap-xs">
                                                            <div aria-hidden="true" className="icon icon--program is-lg">
                                                                <span aria-hidden="true">PN</span>
                                                            </div>
                                                            <div className="d-flex flex-column flex-fill gap-0">
                                                                <a href="#" className="is-primary font-weight-bold stretched-link" aria-labelledby="large">
                                                                    Program Name
                                                                </a>
                                                                <div className="text-muted small metas is-list mb-none">
                                                                    <p>Org Name</p>
                                                                    <p>23 programs</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="dropdown-container z-1" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Options">
                                                            <a href="#" className="btn btn-lg btn-muted" role="button" data-toggle="dropdown" aria-expanded="false">
                                                                <span className="icon icon-options" />
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <a href="#" className="dropdown-item">
                                                                    {" "}
                                                                    Data{" "}
                                                                </a>
                                                                <a href="#" className="dropdown-item">
                                                                    {" "}
                                                                    Manage{" "}
                                                                </a>
                                                                <a href="#" className="dropdown-item">
                                                                    {" "}
                                                                    Workspace{" "}
                                                                </a>
                                                                <div className="dropdown-divider" />
                                                                <a href="#" className="dropdown-item">
                                                                    <span className="dropdown-item--icon icon icon-pencil" />
                                                                    <span className="dropdown-item--label">Edit</span>
                                                                </a>
                                                                <a href="#" className="dropdown-item">
                                                                    <span className="dropdown-item--icon icon icon-copy" />
                                                                    <span className="dropdown-item--label">Duplicate</span>
                                                                </a>
                                                                <a href="#" className="dropdown-item is-danger">
                                                                    <span className="dropdown-item--icon icon icon-delete" />
                                                                    <span className="dropdown-item--label">Delete</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td>
                                                    <div className="d-flex align-items-center flex-fill gap-0">
                                                        <div className="d-flex align-items-start flex-fill gap-xs">
                                                            <div className="d-flex flex-fill gap-2xs">
                                                                <p aria-labelledby="small">July 12, 2024 at 2:00 PM</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center flex-fill gap-0">
                                                        <div className="d-flex align-items-start flex-fill gap-xs">
                                                            <div className="d-flex flex-fill gap-2xs">
                                                                <p aria-labelledby="small">July 12, 2024 at 2:00 PM</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center flex-fill gap-0">
                                                        <div className="d-flex align-items-start flex-fill gap-xs">
                                                            <svg className="progress-circle-container is-sm" viewBox="0 0 32 32" data-percent="25" style={{ ["--percent" as any]: "25" }}>
                                                                <circle className="progress-circle progress-circle-bg"></circle>
                                                                <circle className="progress-circle progress-circle-percent"></circle>
                                                                <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z"></path>
                                                            </svg>
                                                            <div className="d-flex flex-fill gap-2xs">
                                                                <p aria-labelledby="small">25%</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr role="row">
                                                <td className="table-checkbox">
                                                    <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                                        <input type="checkbox" id="15" className="bulkActionSelector custom-control-input" defaultValue="15" />
                                                        <label className="custom-control-label" htmlFor="15" />
                                                    </div>
                                                </td>
                                                <th>
                                                    <div className="d-flex align-items-center flex-fill gap-0">
                                                        <div className="d-flex align-items-start flex-fill gap-xs">
                                                            <div aria-hidden="true" className="icon icon--program is-lg">
                                                                <span aria-hidden="true">PN</span>
                                                            </div>
                                                            <div className="d-flex flex-column flex-fill gap-0">
                                                                <a href="#" className="is-primary font-weight-bold stretched-link" aria-labelledby="large">
                                                                    Program Name
                                                                </a>
                                                                <div className="text-muted small metas is-list mb-none">
                                                                    <p>Org Name</p>
                                                                    <p>23 programs</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="dropdown-container z-1" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Options">
                                                            <a href="#" className="btn btn-lg btn-muted" role="button" data-toggle="dropdown" aria-expanded="false">
                                                                <span className="icon icon-options" />
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <a href="#" className="dropdown-item">
                                                                    {" "}
                                                                    Data{" "}
                                                                </a>
                                                                <a href="#" className="dropdown-item">
                                                                    {" "}
                                                                    Manage{" "}
                                                                </a>
                                                                <a href="#" className="dropdown-item">
                                                                    {" "}
                                                                    Workspace{" "}
                                                                </a>
                                                                <div className="dropdown-divider" />
                                                                <a href="#" className="dropdown-item">
                                                                    <span className="dropdown-item--icon icon icon-pencil" />
                                                                    <span className="dropdown-item--label">Edit</span>
                                                                </a>
                                                                <a href="#" className="dropdown-item">
                                                                    <span className="dropdown-item--icon icon icon-copy" />
                                                                    <span className="dropdown-item--label">Duplicate</span>
                                                                </a>
                                                                <a href="#" className="dropdown-item is-danger">
                                                                    <span className="dropdown-item--icon icon icon-delete" />
                                                                    <span className="dropdown-item--label">Delete</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td>
                                                    <div className="d-flex align-items-center flex-fill gap-0">
                                                        <div className="d-flex align-items-start flex-fill gap-xs">
                                                            <div className="d-flex flex-fill gap-2xs">
                                                                <p aria-labelledby="small">July 12, 2024 at 2:00 PM</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center flex-fill gap-0">
                                                        <div className="d-flex align-items-start flex-fill gap-xs">
                                                            <div className="d-flex flex-fill gap-2xs">
                                                                <p aria-labelledby="small">July 12, 2024 at 2:00 PM</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center flex-fill gap-0">
                                                        <div className="d-flex align-items-start flex-fill gap-xs">
                                                            <svg className="progress-circle-container is-sm" viewBox="0 0 32 32" data-percent="25" style={{ ["--percent" as any]: "25" }}>
                                                                <circle className="progress-circle progress-circle-bg"></circle>
                                                                <circle className="progress-circle progress-circle-percent"></circle>
                                                                <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z"></path>
                                                            </svg>
                                                            <div className="d-flex flex-fill gap-2xs">
                                                                <p aria-labelledby="small">25%</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr role="row">
                                                <td className="table-checkbox">
                                                    <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                                        <input type="checkbox" id="15" className="bulkActionSelector custom-control-input" defaultValue="15" />
                                                        <label className="custom-control-label" htmlFor="15" />
                                                    </div>
                                                </td>
                                                <th>
                                                    <div className="d-flex align-items-center flex-fill gap-0">
                                                        <div className="d-flex align-items-start flex-fill gap-xs">
                                                            <div aria-hidden="true" className="icon icon--program is-lg">
                                                                <span aria-hidden="true">PN</span>
                                                            </div>
                                                            <div className="d-flex flex-column flex-fill gap-0">
                                                                <a href="#" className="is-primary font-weight-bold stretched-link" aria-labelledby="large">
                                                                    Program Name
                                                                </a>
                                                                <div className="text-muted small metas is-list mb-none">
                                                                    <p>Org Name</p>
                                                                    <p>23 programs</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="dropdown-container z-1" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Options">
                                                            <a href="#" className="btn btn-lg btn-muted" role="button" data-toggle="dropdown" aria-expanded="false">
                                                                <span className="icon icon-options" />
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <a href="#" className="dropdown-item">
                                                                    {" "}
                                                                    Data{" "}
                                                                </a>
                                                                <a href="#" className="dropdown-item">
                                                                    {" "}
                                                                    Manage{" "}
                                                                </a>
                                                                <a href="#" className="dropdown-item">
                                                                    {" "}
                                                                    Workspace{" "}
                                                                </a>
                                                                <div className="dropdown-divider" />
                                                                <a href="#" className="dropdown-item">
                                                                    <span className="dropdown-item--icon icon icon-pencil" />
                                                                    <span className="dropdown-item--label">Edit</span>
                                                                </a>
                                                                <a href="#" className="dropdown-item">
                                                                    <span className="dropdown-item--icon icon icon-copy" />
                                                                    <span className="dropdown-item--label">Duplicate</span>
                                                                </a>
                                                                <a href="#" className="dropdown-item is-danger">
                                                                    <span className="dropdown-item--icon icon icon-delete" />
                                                                    <span className="dropdown-item--label">Delete</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td>
                                                    <div className="d-flex align-items-center flex-fill gap-0">
                                                        <div className="d-flex align-items-start flex-fill gap-xs">
                                                            <div className="d-flex flex-fill gap-2xs">
                                                                <p aria-labelledby="small">July 12, 2024 at 2:00 PM</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center flex-fill gap-0">
                                                        <div className="d-flex align-items-start flex-fill gap-xs">
                                                            <div className="d-flex flex-fill gap-2xs">
                                                                <p aria-labelledby="small">July 12, 2024 at 2:00 PM</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center flex-fill gap-0">
                                                        <div className="d-flex align-items-start flex-fill gap-xs">
                                                            <svg className="progress-circle-container is-sm" viewBox="0 0 32 32" data-percent="25" style={{ ["--percent" as any]: "25" }}>
                                                                <circle className="progress-circle progress-circle-bg"></circle>
                                                                <circle className="progress-circle progress-circle-percent"></circle>
                                                                <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z"></path>
                                                            </svg>
                                                            <div className="d-flex flex-fill gap-2xs">
                                                                <p aria-labelledby="small">25%</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </Section>
                <Section title="Feedbacks">
                    <div className="cq">
            
                        <div className="cq-12 cq-lg-6">
                            <CardFeed
                                from="Initiative.name"
                                
                                author="User.name"
                                metas={[{ label: "Program Manager, Schoolab" }]}
                                content={`<h4>Feedback.title</h4><p>As we’re reaching the end of our mission together, I wanted to thank you personally for the collaboration and the trust you’ve placed in us.</p><p class="p-0 small">NPS:</p>`}
                                readMore={false}
                                isFooterActions={false}
                                isTitleActions={false}
                            >
                                <Nps isDisabled={true}></Nps>
                            </CardFeed>
                        </div>
                        <div className="cq-12 cq-lg-6">
                            <CardFeed
                                from="Initiative.name"
                                author="User.name"
                                metas={[{ label: "Program Manager, Schoolab" }]}
                                content={`<h4>Feedback.title</h4><p>As we’re reaching the end of our mission together, I wanted to thank you personally for the collaboration and the trust you’ve placed in us.</p><p class="p-0 small">NPS:</p>`}
                                readMore={false}
                                isFooterActions={false}
                                isTitleActions={false}
                            >
                                <Nps isDisabled={true}></Nps>
                            </CardFeed>
                        </div>
                    </div>
                </Section>
                <Section title="Verbatims">
                    <div className="cq">
                        <div className="cq-12 cq-lg-4">
                            <CardFeed from="Initiative.name" author="User.name" metas={[{ label: "Program Manager, Schoolab" }]} content={`<h4>Verbatim.title</h4><p>As we’re reaching the end of our mission together, I wanted to thank you personally for the collaboration and the trust you’ve placed in us.</p>`} readMore={false} isFooterActions={false} isTitleActions={false}></CardFeed>
                        </div>
                        <div className="cq-12 cq-lg-4">
                            <CardFeed from="Initiative.name" author="User.name" metas={[{ label: "Program Manager, Schoolab" }]} content={`<h4>Verbatim.title</h4><p>As we’re reaching the end of our mission together, I wanted to thank you personally for the collaboration and the trust you’ve placed in us.</p>`} readMore={false} isFooterActions={false} isTitleActions={false}></CardFeed>
                        </div>
                        <div className="cq-12 cq-lg-4">
                            <CardFeed from="Initiative.name" author="User.name" metas={[{ label: "Program Manager, Schoolab" }]} content={`<h4>Verbatim.title</h4><p>As we’re reaching the end of our mission together, I wanted to thank you personally for the collaboration and the trust you’ve placed in us.</p>`} readMore={false} isFooterActions={false} isTitleActions={false}></CardFeed>
                        </div>
                    </div>
                </Section>
            </AppContent>
        </Layout>
    );
};
