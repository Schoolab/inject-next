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

export const AskAIPersona = () => {
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
                        label: "AskAI User Personas",
                        href: "",
                    },
                ]}
                title="Persona Generation Form"
            >
                <Section title="Generate Personas" collapsable collapsableId="Form">
                    <div className="card">
                        <div className="card-infos d-flex flex-column align-items-stretch gap-md">
                            <FormGroup id="Audience" label="Audience" hint="Describe here the main audience or segment to analyze">
                                <FormTextarea required id="Audience" rows={4} placeholder="Middle manager in large corporations undergoing digital transformation" />
                            </FormGroup>
                            <FormGroup id="Questions" label="Questions to exploreience" hint="Describe the context, goals, and exploration focus">
                                <FormTextarea required id="Questions" rows={4} placeholder="Understand the adoption of new digital tools, the decision-making process, and the main frustration during change management" />
                            </FormGroup>
                            <FormGroup id="Number" label="Number of personas">
                                <FormSelect
                                    id="Number"
                                    options={[
                                        {
                                            label: "Select a number",
                                            value: "",
                                            selected: true,
                                            disabled: true,
                                        },

                                        {
                                            label: "2",
                                            value: "2",
                                        },
                                        {
                                            label: "3",
                                            value: "3",
                                        },
                                        {
                                            label: "4",
                                            value: "4",
                                        },
                                        {
                                            label: "5",
                                            value: "5",
                                        },
                                        {
                                            label: "6",
                                            value: "6",
                                        },
                                    ]}
                                />
                            </FormGroup>
                            <div className="d-flex justify-content-end"></div>
                        </div>
                        <div className="card-links d-flex flex-column gap-xs">
                            <div className="d-flex gap-sm align-items-center justify-content-end text-muted small">
                                <span>0/6 personas generated</span>
                            </div>
                            <div className="card-actions">
                                <Button type="primary" label="Generate Personas" />
                            </div>
                        </div>
                    </div>
                </Section>

                <Section collapsable collapsableId="Personas">
                    <div className="row">
                        <div className="col-12 col-lg-6 mb-md">
                            <div className="card h-100">
                                <div className="card-infos flex-shrink-1 flex-grow-0">
                                    <div className="d-flex align-items-start gap-sm">
                                        <Avatar iconName="account" isOval />
                                        <div className="card-title flex-grow-1">
                                            <span className="h4 mb-none line-clamp-1 gap-2xs d-flex flex-direction align-items-center gap-2xs">
                                                <span>Firstname Lastname</span>
                                            </span>
                                            <ul className="text-muted small metas is-list mb-none">
                                                <li>Job</li>
                                                <li>Age</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-links is-scrollabe h-100" >
                                       <FormGroup label="Main citation">
                                            <FormTextarea id="f-1a" rows={4} placeholder="Not completed yet" defaultValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex."} readonly={true} fieldSizing={true} />
                                        </FormGroup>
                                        <FormGroup label="His/her obstacles/problems">
                                            <FormTextarea id="f-2a" rows={4} placeholder="Not completed yet" defaultValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex."} readonly={true} fieldSizing={true} />
                                        </FormGroup>
                                        <FormGroup label="His/her needs">
                                            <FormTextarea id="f-3a" rows={4} placeholder="Not completed yet" defaultValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex."} readonly={true} fieldSizing={true} />
                                        </FormGroup>
                                        <FormGroup label="The services he/she uses">
                                            <FormTextarea id="f-4a" rows={4} placeholder="Not completed yet" defaultValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex."} readonly={true} fieldSizing={true} />
                                        </FormGroup>
                                        <FormGroup label="Environmental and social awareness">
                                            <FormTextarea id="f-5a" rows={4} placeholder="Not completed yet" defaultValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex."} readonly={true} fieldSizing={true} />
                                        </FormGroup>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mb-md">
                            <div className="card h-100">
                                <div className="card-infos flex-shrink-1 flex-grow-0">
                                    <div className="d-flex align-items-start gap-sm">
                                        <Avatar iconName="account" isOval />
                                        <div className="card-title flex-grow-1">
                                            <span className="h4 mb-none line-clamp-1 gap-2xs d-flex flex-direction align-items-center gap-2xs">
                                                <span>Firstname Lastname</span>
                                            </span>
                                            <ul className="text-muted small metas is-list mb-none">
                                                <li>Job</li>
                                                <li>Age</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-links is-scrollabe" >
                                       <FormGroup label="Main citation">
                                            <FormTextarea id="f-1a" rows={4} placeholder="Not completed yet" defaultValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex."} readonly={true} fieldSizing={true} />
                                        </FormGroup>
                                        <FormGroup label="His/her obstacles/problems">
                                            <FormTextarea id="f-2a" rows={4} placeholder="Not completed yet" defaultValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex."} readonly={true} fieldSizing={true} />
                                        </FormGroup>
                                        <FormGroup label="His/her needs">
                                            <FormTextarea id="f-3a" rows={4} placeholder="Not completed yet" defaultValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex."} readonly={true} fieldSizing={true} />
                                        </FormGroup>
                                        <FormGroup label="The services he/she uses">
                                            <FormTextarea id="f-4a" rows={4} placeholder="Not completed yet" defaultValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex."} readonly={true} fieldSizing={true} />
                                        </FormGroup>
                                        <FormGroup label="Environmental and social awareness">
                                            <FormTextarea id="f-5a" rows={4} placeholder="Not completed yet" defaultValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dictum metus. Nullam eu dictum ex."} readonly={true} fieldSizing={true} />
                                        </FormGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            </AppContent>
        </Layout>
    );
};
