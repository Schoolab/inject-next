import React from "react";
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { useEffect } from "react";
import { Button } from "@/app/components/buttons/Button";
import { ItemsGroup } from "@/app/components/items-group/ItemsGroup";
import { ItemsGroupHeader } from "@/app/components/items-group/ItemsGroupHeader";
import { ItemQuestionnaire } from "@/app/components/items/ItemQuestionnaire";
import { ItemCondition } from "@/app/components/items/ItemCondition";
import { Section } from "@/app/components/sections/Section";
import { EmptyState } from "@/app/content/empty-states/EmptyState";
import { ItemForm } from "@/app/components/items/parts/ItemForm";
import { groupCheckbox } from "../../../../../public/utils/groupCheckbox";

export const SessionJuryFields = () => {
    useEffect(() => {
        groupCheckbox();
    
    }, []);
    return (
        <Layout sideBar="Manage">
            <AppContent
                sections="transparent"
                breadcrumb={[
                    {
                        label: "Impact Innovators",
                        href: "#",
                    },
                    {
                        label: "Manage",
                        href: "#",
                    },
                    {
                        label: "Jury",
                        href: "#",
                    },
                    {
                        label: "Session",
                    },
                    {
                        label: "Session fields",
                    },
                ]}
                title="Session fields"
            >
                <div className="row">
                    <div className="col-12">

                        <Section title="Participants" subtitle="List of all fields concerning participants" collapsable isOpen={true} collapsableId="participants">




                            <div className="item-group checkbox-group">
                                <div className="item-group-header">
                                    <div className="custom-control custom-checkbox flex-fill">
                                        <input id="main-1" className="custom-control-input checkbox-main" type="checkbox" name="option" />
                                        <label className="custom-control-label text-nowrap d-flex column-gap-xs" htmlFor="main-1" aria-describedby="main-1">
                                            <div className="d-flex flex-column w-100 gap-none">
                                                <p className="h4">Fields</p>
                                                <ul className="metas is-list small">
                                                    <li>6 fields</li>
                                                    <li><span className="checkbox-count">0</span> fields selected</li>
                                                </ul>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className="d-flex flex-column gap-2xs">


                                    <div className="item is-bordered is-small">
                                        <div className="item-row">
                                            <div className="custom-control custom-checkbox flex-fill">
                                                <input id="child-1a" className="custom-control-input checkbox-child" type="checkbox" name="option" />
                                                <label className="custom-control-label text-nowrap d-flex column-gap-xs" htmlFor="child-1a" aria-describedby="child-1a">
                                                    <div className="item-icon">
                                                        <div className="icon icon-form-textbox"></div>
                                                    </div>
                                                    <div className="item-content ml-3 py-1 d-flex">
                                                        <div className="item-title h4 mb-0 stretched-link flex-fill">Lorem Ipsum <span className="text-danger">*</span></div>
                                                        <ul className="item-caption metas small is-list">
                                                            <li>Short text</li>
                                                            <li>Mandatory</li>
                                                        </ul>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="item is-bordered is-small">
                                        <div className="item-row">
                                            <div className="custom-control custom-checkbox flex-fill">
                                                <input id="child-1b" className="custom-control-input checkbox-child" type="checkbox" name="option" />
                                                <label className="custom-control-label text-nowrap d-flex column-gap-xs" htmlFor="child-1b" aria-describedby="child-1b">
                                                    <div className="item-icon">
                                                        <div className="icon icon-form-textarea"></div>
                                                    </div>
                                                    <div className="item-content ml-3 py-1 d-flex">
                                                        <div className="item-title h4 mb-0 stretched-link flex-fill">Lorem Ipsum  </div>
                                                        <ul className="item-caption metas small is-list">
                                                            <li>Long text</li>
                                                        </ul>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="item is-bordered is-small">
                                        <div className="item-row">
                                            <div className="custom-control custom-checkbox flex-fill">
                                                <input id="child-1c" className="custom-control-input checkbox-child" type="checkbox" name="option" />
                                                <label className="custom-control-label text-nowrap d-flex column-gap-xs" htmlFor="child-1c" aria-describedby="child-1c">
                                                    <div className="item-icon">
                                                        <div className="icon icon-form-select"></div>
                                                    </div>
                                                    <div className="item-content ml-3 py-1 d-flex">
                                                        <div className="item-title h4 mb-0 stretched-link flex-fill">Lorem Ipsum </div>
                                                        <ul className="item-caption metas small is-list">
                                                            <li>Select list</li>
                                                        </ul>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="item is-bordered is-small">
                                        <div className="item-row">
                                            <div className="custom-control custom-checkbox flex-fill ">
                                                <input id="child-1d" className="custom-control-input checkbox-child" type="checkbox" name="option" />
                                                <label className="custom-control-label text-nowrap d-flex column-gap-xs" htmlFor="child-1d" aria-describedby="child-1d">
                                                    <div className="item-icon">
                                                        <div className="icon icon-form-radiobox-marked"></div>
                                                    </div>
                                                    <div className="item-content ml-3 py-1 d-flex">
                                                        <div className="item-title h4 mb-0 stretched-link flex-fill">Lorem Ipsum</div>
                                                        <ul className="item-caption metas small is-list">
                                                            <li>Unique choice</li>
                                                        </ul>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                     <div className="item is-bordered is-small">
                                        <div className="item-row">
                                            <div className="custom-control custom-checkbox flex-fill ">
                                                <input id="child-1e" className="custom-control-input checkbox-child" type="checkbox" name="option" />
                                                <label className="custom-control-label text-nowrap d-flex column-gap-xs" htmlFor="child-1e" aria-describedby="child-1e">
                                                    <div className="item-icon">
                                                        <div className="icon icon-form-checklist"></div>
                                                    </div>
                                                    <div className="item-content ml-3 py-1 d-flex">
                                                        <div className="item-title h4 mb-0 stretched-link flex-fill">Lorem Ipsum</div>
                                                        <ul className="item-caption metas small is-list">
                                                            <li>Check list</li>
                                                        </ul>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                        <div className="item is-bordered is-small">
                                        <div className="item-row">
                                            <div className="custom-control custom-checkbox flex-fill ">
                                                <input id="child-1f" className="custom-control-input checkbox-child" type="checkbox" name="option" />
                                                <label className="custom-control-label text-nowrap d-flex column-gap-xs" htmlFor="child-1f" aria-describedby="child-1f">
                                                    <div className="item-icon">
                                                        <div className="icon icon-link"></div>
                                                    </div>
                                                    <div className="item-content ml-3 py-1 d-flex">
                                                        <div className="item-title h4 mb-0 stretched-link flex-fill">Lorem Ipsum</div>
                                                        <ul className="item-caption metas small is-list">
                                                            <li>Upload file</li>
                                                        </ul>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Section>
                        <Section title="Projects" subtitle="List of all fields concerning projects" collapsable isOpen={true} collapsableId="projects">
                            <EmptyState title="There’s no fields yet" text="All fields will be listed here" iconTitle="questionnaire"  spacious={true} />
                        </Section>
                        <Section title="Experts" subtitle="List of all fields concerning experts" collapsable isOpen={false} collapsableId="experts">
                            <EmptyState title="There’s no fields yet" text="All fields will be listed here" iconTitle="questionnaire"  spacious={true} />
                        </Section>
                        <Section title="Jury" subtitle="List of all fields concerning jury" collapsable isOpen={false} collapsableId="jury">
                            <EmptyState title="There’s no fields yet" text="All fields will be listed here" iconTitle="questionnaire" spacious={true} />
                        </Section>
                    </div>
                </div>
            </AppContent>
        </Layout>
    );
};
