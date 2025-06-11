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

export const consultingMissionAskAICanva = () => {
    useEffect(() => {
        phasesToggle();
    }, []);
    return (
        <Layout theme="default" showShortcutbarAdmin={true} showShortcutbar={false} shortcutBarExpanded={false}>
            <AppContent
                sections="transparent"
                showSubnav={false}
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
                        label: "AskAI canva",
                    },
                ]}
                title="AskAI canva"
            >
                <Section>
                    <div className="row">
                        <div className="col-12  mb-md">
                            <p className="text-muted text-center">Empower your innovation process with our comprehensive suite of AI-powered tools. From user personas to AI transformation simulations, we help you navigate your digital evolution journey.</p>
                        </div>
                        <div className="col-12 col-lg-4 mb-md">
                            <div className="card  p-md d-flex flex-column gap-md h-100 justify-content-between">
                                <div className="flex-fill">
                                    <h4 className="d-flex gap-2xs align-items-center">
                                        <span className="icon is-sm icon-account"></span> User Personas
                                    </h4>
                                    <p>Generate detailed user personas powered by AI to better understand your target audience. </p>
                                    <p>Create comprehensive user profiles with behaviors, pain points, and motivations. </p>
                                </div>
                                <div className="d-flex gap-xs">
                                    <Button addClass="flex-fill" label="Get started" type="default" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 mb-md">
                            <div className="card  p-md d-flex flex-column gap-md h-100 justify-content-between">
                                <div className="flex-fill">
                                    <h4 className="d-flex gap-2xs align-items-center">
                                        <span className="icon is-sm icon-language"></span>Future Scenarios
                                    </h4>
                                    <p>Explore possible futures for your industry with AI-powered scenario generation. </p>
                                    <p>Understand trends, opportunities, and potential challenges that lie ahead.</p>
                                </div>
                                <div className="d-flex gap-xs">
                                    <Button addClass="flex-fill" label="Get started" type="default" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 mb-md">
                            <div className="card  p-md d-flex flex-column gap-md h-100 justify-content-between">
                                <div className="flex-fill">
                                    <h4 className="d-flex gap-2xs align-items-center">
                                        <span className="icon is-sm icon-lightbulb"></span> How Might We
                                    </h4>
                                    <p>Transform problems into opportunities with our How Might We statement generator. </p>
                                    <p>Reframe challenges into actionable innovation opportunities. </p>
                                </div>
                                <div className="d-flex gap-xs">
                                    <Button addClass="flex-fill" label="Get started" type="default" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
                
            </AppContent>
        </Layout>
    );
};
