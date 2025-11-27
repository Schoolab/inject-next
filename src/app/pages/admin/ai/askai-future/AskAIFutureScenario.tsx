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
import { phasesToggle } from "../../../../../../public/utils/phasesToggle";
import { EmptyState } from "@/app/content/empty-states/EmptyState";

import { CardAskAI } from "@/app/components/cards/CardAskAI";
import { ItemResource } from "@/app/components/items/ItemResource";
import { ProgressBar } from "@/app/components/progress/bar/ProgressBar";
import { FormGroup } from "@/app/forms/group/FormGroup";
import { FormTextarea } from "@/app/forms/textarea/FormTextarea";
import { FormSelect } from "@/app/forms/select/FormSelect";
import { FormInput } from "@/app/forms/input/FormInput";

export const AskAIFutureScenario = () => {
    useEffect(() => {
        phasesToggle();
    }, []);
    return (
        <Layout theme="default" showShortcutbarAdmin={true} showShortcutbar={false} shortcutBarExpanded={false}>
            <AppContent
                sections="separated"
                showSubnav={false}
                backLink="#"
                buttons={[
                    {
                        type: "default",
                        label: "Export",
                        hasDropdown: true,
                    },
                ]}
                breadcrumb={[
                    {
                        label: "Missions",
                        href: "",
                    },
                    {
                        label: "AskAI canva",
                    },
                    {
                        label: "AskAI Future scenario",
                        href: "",
                    },
                ]}
                title="Future scenario"
            >
                <Section title="Generate future scenario" collapsable collapsableId="Form">
                    <div className="card">
                        <div className="card-infos d-flex flex-column align-items-stretch gap-md">
                            <FormGroup id="Future-Year" label="Future Year">
                                <FormInput required id="Future-Year" placeholder="2050" />
                            </FormGroup>
                            <FormGroup id="Industry" label="Industry">
                                <FormInput required id="Industry" placeholder="e.g. Dairy farming" />
                            </FormGroup>
                            <FormGroup id="Sector" label="Sector">
                                <FormInput required id="Sector" placeholder="e.g. Dairy production" />
                            </FormGroup>

                            <div className="d-flex justify-content-end"></div>
                        </div>
                        <div className="card-links d-flex flex-column gap-xs">
                            <div className="card-actions">
                                <Button type="primary" label="Generate Future scenario" />
                            </div>
                        </div>
                    </div>
                </Section>

                <Section collapsable collapsableId="Future_scenarios">
                    <div className="row">
                        <div className="col-12 mb-md">
                            <div className="card h-100">
                                <div className="card-infos d-flex flex-column gap-md align-items-stretch">
                                    <div className="d-flex flex-column flex-lg-row gap-md  justify-content-between w-100">
                                        <h3 className="mb-none line-clamp-1 flex-fill order-2 order-lg-1">Scenario_Title_1</h3>
                                        <div className="d-flex gap-xs order-1 order-lg-2 justify-content-end">
                                            <a href="#" className="btn btn-default btn-sm" role="button">
                                                <span className="icon icon-reload"></span>
                                                <span>Re-generate</span>
                                            </a>
                                            <a href="#" className="btn btn-default btn-sm" role="button">
                                                <span className="icon icon-pencil"></span>
                                                <span>edit</span>
                                            </a>
                                            <a href="#" className="btn btn-default btn-sm" role="button">
                                                <span className="icon icon-download"></span>
                                                <span>Export</span>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-column">
                                        <div className="h5 font-italic bg-light rounded p-md mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <div className="d-flex gap-2xs mb-3">
                                            <span className="icon icon-questionnaire text-primary"></span>
                                            <h4 className="mb-0">How did we get there?</h4>
                                        </div>

                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                        <ul>
                                            <li>Nullam eu dictum ex</li>
                                            <li>consectetur adipiscing elit</li>
                                            <li>Phasellus a dictum metus</li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                        <div className="row">
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="bg-success-light rounded p-md d-flex gap-xs">
                                                    <span className="icon is-2sm icon-thumb-up"></span>
                                                    <div className="flex-fill">
                                                        <h4>Optimistic case</h4>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="bg-light rounded p-md d-flex gap-xs">
                                                    <span className="icon text-body is-2sm icon-impact-equitable"></span>
                                                    <div className="flex-fill">
                                                        <h4>Balanced case</h4>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="bg-danger-light rounded p-md d-flex gap-xs">
                                                    <span className="icon is-2sm icon-alert"></span>
                                                    <div className="flex-fill">
                                                        <h4>Pessimistic case</h4>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <div className="d-flex gap-2xs mb-3">
                                            <span className="icon icon-ecosystem-corporate text-primary"></span>
                                            <h4>Impact on the economy</h4>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-arrow-up-circle text-success"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-arrow-up-circle text-success"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-impact-not-obvious"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-impact-not-obvious"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-arrow-down-circle text-danger"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-arrow-down-circle text-danger"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <div className="d-flex gap-2xs mb-3">
                                            <span className="icon icon-vertical-dei text-primary"></span>
                                            <h4>Impact on individuals</h4>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-arrow-up-circle text-success"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-arrow-up-circle text-success"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-impact-not-obvious"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-impact-not-obvious"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-arrow-down-circle text-danger"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-arrow-down-circle text-danger"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <div className="d-flex gap-2xs mb-3">
                                            <span className="icon icon-org text-primary"></span>
                                            <h4>Impacts on the organisation </h4>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-arrow-up-circle text-success"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-arrow-up-circle text-success"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-impact-not-obvious"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-impact-not-obvious"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-arrow-down-circle text-danger"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-arrow-down-circle text-danger"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-links d-flex flex-column gap-xs">
                                    <div className="card-actions">
                                        <Button type="primary" label="Select & continue to “Opportunities and threats”" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mb-md">
                            <div className="card h-100">
                                <div className="card-infos d-flex flex-column gap-md align-items-stretch">
                                    <div className="d-flex flex-column flex-lg-row gap-md  justify-content-between w-100">
                                        <h3 className="mb-none line-clamp-1 flex-fill order-2 order-lg-1">Scenario_Title_2</h3>
                                        <div className="d-flex gap-xs order-1 order-lg-2 justify-content-end">
                                            <a href="#" className="btn btn-default btn-sm" role="button">
                                                <span className="icon icon-reload"></span>
                                                <span>Re-generate</span>
                                            </a>
                                            <a href="#" className="btn btn-default btn-sm" role="button">
                                                <span className="icon icon-pencil"></span>
                                                <span>edit</span>
                                            </a>
                                            <a href="#" className="btn btn-default btn-sm" role="button">
                                                <span className="icon icon-download"></span>
                                                <span>Export</span>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-column">
                                        <div className="h5 font-italic bg-light rounded p-md mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <div className="d-flex gap-2xs mb-3">
                                            <span className="icon icon-questionnaire text-primary"></span>
                                            <h4 className="mb-0">How did we get there?</h4>
                                        </div>

                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                        <ul>
                                            <li>Nullam eu dictum ex</li>
                                            <li>consectetur adipiscing elit</li>
                                            <li>Phasellus a dictum metus</li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                        <div className="row">
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="bg-success-light rounded p-md d-flex gap-xs">
                                                    <span className="icon is-2sm icon-thumb-up"></span>
                                                    <div className="flex-fill">
                                                        <h4>Optimistic case</h4>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="bg-light rounded p-md d-flex gap-xs">
                                                    <span className="icon text-body is-2sm icon-impact-equitable"></span>
                                                    <div className="flex-fill">
                                                        <h4>Balanced case</h4>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="bg-danger-light rounded p-md d-flex gap-xs">
                                                    <span className="icon is-2sm icon-alert"></span>
                                                    <div className="flex-fill">
                                                        <h4>Pessimistic case</h4>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <div className="d-flex gap-2xs mb-3">
                                            <span className="icon icon-ecosystem-corporate text-primary"></span>
                                            <h4>Impact on the economy</h4>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-arrow-up-circle text-success"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-arrow-up-circle text-success"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-impact-not-obvious"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-impact-not-obvious"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-arrow-down-circle text-danger"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-arrow-down-circle text-danger"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <div className="d-flex gap-2xs mb-3">
                                            <span className="icon icon-vertical-dei text-primary"></span>
                                            <h4>Impact on individuals</h4>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-arrow-up-circle text-success"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-arrow-up-circle text-success"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-impact-not-obvious"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-impact-not-obvious"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-arrow-down-circle text-danger"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-arrow-down-circle text-danger"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <div className="d-flex gap-2xs mb-3">
                                            <span className="icon icon-org text-primary"></span>
                                            <h4>Impacts on the organisation </h4>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-arrow-up-circle text-success"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-arrow-up-circle text-success"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-impact-not-obvious"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-impact-not-obvious"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-arrow-down-circle text-danger"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-arrow-down-circle text-danger"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-links d-flex flex-column gap-xs">
                                    <div className="card-actions">
                                        <Button type="primary" label="Select & continue to “Opportunities and threats”" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mb-md">
                            <div className="card h-100">
                                <div className="card-infos d-flex flex-column gap-md align-items-stretch">
                                    <div className="d-flex flex-column flex-lg-row gap-md  justify-content-between w-100">
                                        <h3 className="mb-none line-clamp-1 flex-fill order-2 order-lg-1">Scenario_Title_3</h3>
                                        <div className="d-flex gap-xs order-1 order-lg-2 justify-content-end">
                                            <a href="#" className="btn btn-default btn-sm" role="button">
                                                <span className="icon icon-reload"></span>
                                                <span>Re-generate</span>
                                            </a>
                                            <a href="#" className="btn btn-default btn-sm" role="button">
                                                <span className="icon icon-pencil"></span>
                                                <span>edit</span>
                                            </a>
                                            <a href="#" className="btn btn-default btn-sm" role="button">
                                                <span className="icon icon-download"></span>
                                                <span>Export</span>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-column">
                                        <div className="h5 font-italic bg-light rounded p-md mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <div className="d-flex gap-2xs mb-3">
                                            <span className="icon icon-questionnaire text-primary"></span>
                                            <h4 className="mb-0">How did we get there?</h4>
                                        </div>

                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                        <ul>
                                            <li>Nullam eu dictum ex</li>
                                            <li>consectetur adipiscing elit</li>
                                            <li>Phasellus a dictum metus</li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                        <div className="row">
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="bg-success-light rounded p-md d-flex gap-xs">
                                                    <span className="icon is-2sm icon-thumb-up"></span>
                                                    <div className="flex-fill">
                                                        <h4>Optimistic case</h4>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="bg-light rounded p-md d-flex gap-xs">
                                                    <span className="icon text-body is-2sm icon-impact-equitable"></span>
                                                    <div className="flex-fill">
                                                        <h4>Balanced case</h4>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="bg-danger-light rounded p-md d-flex gap-xs">
                                                    <span className="icon is-2sm icon-alert"></span>
                                                    <div className="flex-fill">
                                                        <h4>Pessimistic case</h4>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <div className="d-flex gap-2xs mb-3">
                                            <span className="icon icon-ecosystem-corporate text-primary"></span>
                                            <h4>Impact on the economy</h4>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-arrow-up-circle text-success"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-arrow-up-circle text-success"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-impact-not-obvious"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-impact-not-obvious"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-arrow-down-circle text-danger"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-arrow-down-circle text-danger"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <div className="d-flex gap-2xs mb-3">
                                            <span className="icon icon-vertical-dei text-primary"></span>
                                            <h4>Impact on individuals</h4>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-arrow-up-circle text-success"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-arrow-up-circle text-success"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-impact-not-obvious"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-impact-not-obvious"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-arrow-down-circle text-danger"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-arrow-down-circle text-danger"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <div className="d-flex gap-2xs mb-3">
                                            <span className="icon icon-org text-primary"></span>
                                            <h4>Impacts on the organisation </h4>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-arrow-up-circle text-success"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-arrow-up-circle text-success"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-impact-not-obvious"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-impact-not-obvious"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-arrow-down-circle text-danger"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                                <div className="d-flex gap-xs align-items-start">
                                                    <span className="pt-2 icon is-xs icon-arrow-down-circle text-danger"></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-links d-flex flex-column gap-xs">
                                    <div className="card-actions">
                                        <Button type="primary" label="Select & continue to “Opportunities and threats”" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mb-md">
                            <div className="card h-100">
                                <div className="card-infos d-flex flex-column gap-md align-items-stretch">
                                    <div className="d-flex flex-column flex-lg-row gap-md  justify-content-between w-100">
                                        <h3 className="mb-none line-clamp-1 flex-fill order-2 order-lg-1">Opportunities and threats</h3>
                                        <div className="d-flex gap-xs order-1 order-lg-2 justify-content-end">
                                            <a href="#" className="btn btn-default btn-sm" role="button">
                                                <span className="icon icon-reload"></span>
                                                <span>Re-generate</span>
                                            </a>
                                            <a href="#" className="btn btn-default btn-sm" role="button">
                                                <span className="icon icon-ai"></span>
                                                <span>Enrich</span>
                                            </a>
                                            <a href="#" className="btn btn-default btn-sm" role="button">
                                                <span className="icon icon-pencil"></span>
                                                <span>edit</span>
                                            </a>
                                            <a href="#" className="btn btn-default btn-sm" role="button">
                                                <span className="icon icon-download"></span>
                                                <span>Export</span>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-column">
                                        <div className="d-flex gap-2xs mb-3">
                                            <span className="icon icon-lightbulb text-primary"></span>
                                            <h4>Opportunities</h4>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="bg-light rounded p-md">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                    <ul>
                                                        <li>Nullam eu dictum ex</li>
                                                        <li>consectetur adipiscing elit</li>
                                                        <li>Phasellus a dictum metus</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="bg-light rounded p-md">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                    <ul>
                                                        <li>Nullam eu dictum ex</li>
                                                        <li>consectetur adipiscing elit</li>
                                                        <li>Phasellus a dictum metus</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="bg-light rounded p-md">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                    <ul>
                                                        <li>Nullam eu dictum ex</li>
                                                        <li>consectetur adipiscing elit</li>
                                                        <li>Phasellus a dictum metus</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <div className="d-flex gap-2xs mb-3">
                                            <span className="icon icon-notifications-active text-primary"></span>
                                            <h4>Threats</h4>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="bg-light rounded p-md">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                    <ul>
                                                        <li>Nullam eu dictum ex</li>
                                                        <li>consectetur adipiscing elit</li>
                                                        <li>Phasellus a dictum metus</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="bg-light rounded p-md">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                    <ul>
                                                        <li>Nullam eu dictum ex</li>
                                                        <li>consectetur adipiscing elit</li>
                                                        <li>Phasellus a dictum metus</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-4 mb-md">
                                                <div className="bg-light rounded p-md">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                    <ul>
                                                        <li>Nullam eu dictum ex</li>
                                                        <li>consectetur adipiscing elit</li>
                                                        <li>Phasellus a dictum metus</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-links d-flex flex-column gap-xs">
                                    <div className="card-actions">
                                        <Button type="primary" label="Continue to roadmap & pitch" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mb-md">
                            <div className="card h-100">
                                <div className="card-infos d-flex flex-column gap-md align-items-stretch">
                                    <div className="d-flex flex-column flex-lg-row gap-md  justify-content-between w-100">
                                        <h3 className="mb-none line-clamp-1 flex-fill order-2 order-lg-1">Today’s roadmap</h3>
                                        <div className="d-flex gap-xs order-1 order-lg-2 justify-content-end">
                                            <a href="#" className="btn btn-default btn-sm" role="button">
                                                <span className="icon icon-reload"></span>
                                                <span>Re-generate</span>
                                            </a>
                                            <a href="#" className="btn btn-default btn-sm" role="button">
                                                <span className="icon icon-pencil"></span>
                                                <span>edit</span>
                                            </a>
                                            <a href="#" className="btn btn-default btn-sm" role="button">
                                                <span className="icon icon-download"></span>
                                                <span>Export</span>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-column">
                                        <div className="d-flex gap-2xs mb-3">
                                            <h4>What activities are set to launch ?</h4>
                                        </div>
                                        <div className="bg-light rounded p-md">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                            <ul>
                                                <li>Nullam eu dictum ex</li>
                                                <li>consectetur adipiscing elit</li>
                                                <li>Phasellus a dictum metus</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <div className="d-flex gap-2xs mb-3">
                                            <h4>What kind of skills should be the focus?</h4>
                                        </div>
                                        <div className="bg-light rounded p-md">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                            <ul>
                                                <li>Nullam eu dictum ex</li>
                                                <li>consectetur adipiscing elit</li>
                                                <li>Phasellus a dictum metus</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <div className="d-flex gap-2xs mb-3">
                                            <h4>What sacrifices have to be faced?</h4>
                                        </div>
                                        <div className="bg-light rounded p-md">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                            <ul>
                                                <li>Nullam eu dictum ex</li>
                                                <li>consectetur adipiscing elit</li>
                                                <li>Phasellus a dictum metus</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <div className="d-flex gap-2xs mb-3">
                                            <h4>What is the value base for this new scenario?</h4>
                                        </div>
                                        <div className="bg-light rounded p-md">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                            <ul>
                                                <li>Nullam eu dictum ex</li>
                                                <li>consectetur adipiscing elit</li>
                                                <li>Phasellus a dictum metus</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-links d-flex flex-column gap-xs">
                                    <div className="card-actions">
                                        <Button type="primary" label="Continue to Pitch presentation" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mb-md">
                            <div className="card h-100">
                                <div className="card-infos d-flex flex-column gap-md align-items-stretch">
                                    <div className="d-flex flex-column flex-lg-row gap-md  justify-content-between w-100">
                                        <h3 className="mb-none line-clamp-1 flex-fill order-2 order-lg-1">Pitch presentation</h3>
                                        <div className="d-flex gap-xs order-1 order-lg-2 justify-content-end">
                                            <a href="#" className="btn btn-default btn-sm" role="button">
                                                <span className="icon icon-reload"></span>
                                                <span>Re-generate</span>
                                            </a>
                                            <a href="#" className="btn btn-default btn-sm" role="button">
                                                <span className="icon icon-pencil"></span>
                                                <span>edit</span>
                                            </a>
                                            <a href="#" className="btn btn-default btn-sm" role="button">
                                                <span className="icon icon-download"></span>
                                                <span>Export</span>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-column">
                                        <div className="row">
                                            <div className="col-12 col-lg-6 mb-md">
                                                <div className="d-flex gap-2xs mb-3">
                                                    <h4>In a world in which…</h4>
                                                </div>
                                                <div className="bg-light rounded p-md">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                    <ul>
                                                        <li>Nullam eu dictum ex</li>
                                                        <li>consectetur adipiscing elit</li>
                                                        <li>Phasellus a dictum metus</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-6 mb-md">
                                                <div className="d-flex gap-2xs mb-3">
                                                    <h4>We decided to…</h4>
                                                </div>
                                                <div className="bg-light rounded p-md">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                                    <ul>
                                                        <li>Nullam eu dictum ex</li>
                                                        <li>consectetur adipiscing elit</li>
                                                        <li>Phasellus a dictum metus</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-column">
                                        <div className="d-flex gap-2xs mb-3">
                                            <h4>The concept</h4>
                                        </div>

                                        <div className="bg-light rounded p-md">
                                            <p className="h4">Title_concept_1</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex</p>
                                            <ul>
                                                <li>Nullam eu dictum ex</li>
                                                <li>consectetur adipiscing elit</li>
                                                <li>Phasellus a dictum metus</li>
                                            </ul>

                                            <div className="d-flex gap-xl flex-column flex-lg-row align-items-center justify-content-center mt-5">
                                                <img className="w-100 h-auto rounded" src="img/hero-4.png" style={{ maxWidth: "450px" }}></img>
                                                <img className="w-100 h-auto rounded" src="img/hero-3.png" style={{ maxWidth: "450px" }}></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            </AppContent>
        </Layout>
    );
};
