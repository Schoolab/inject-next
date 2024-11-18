import React from "react";
import { useEffect } from "react";
import { Layout } from "../../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { AsideEditPage } from "@/app/components/asides/AsideEditPage";
import { aside } from "../../../../../public/utils/aside";
import { SectionContent } from "../../sections/SectionContent";
import { SectionNumber } from "../../sections/SectionNumber";
import { SectionTimeline } from "../../sections/SectionTimeline";
import { EditableBlock } from "@/app/components/EditableBlock";
import { AddableBlock } from "@/app/components/AddableBlock";
import { SectionContent2col } from "../../sections/SectionContent2col";
import { SectionHero } from "../../sections/SectionHero";
import { Button } from "@/app/components/Button";

export const ManagePagesEdit = () => {
    useEffect(() => {
        aside();
    }, []);
    return (
        <Layout shortcutBarExpanded={false}>
            <AppContent showSubnav={false} layout="full" sections="transparent" isAsside={true}>

                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
                </style>

                <div className="d-flex align-items-start">
                    <div className="container-fluid">
                        <AddableBlock />

                        <EditableBlock>
                            <SectionHero addClass="is-md" style={{ backgroundColor: "var(--bg-brand-hero)", color: "var(--fg-brand-hero)"}} />
                        </EditableBlock>

                        <AddableBlock />
                        
                        <EditableBlock>
                            <SectionContent />
                        </EditableBlock>

                        <AddableBlock />

                        <EditableBlock>
                            <SectionNumber style={{ backgroundColor: "#F5F5F5" }} />
                        </EditableBlock>

                        <AddableBlock />

                        <EditableBlock>
                            <SectionTimeline />
                        </EditableBlock>

                        <AddableBlock />

                        <EditableBlock>
                            <SectionContent
                                title="Our vision"
                                columns={[{label: "20 years", caption: "of experience in design thinking and lean startup"}, {label: "700+", caption: "accelerated startups"}]}
                                mediaSide="right"
                                mediaUrl="https://cdn.prod.website-files.com/65b38407b9116a925100865b/6628f048b36b0b9ab9b95153_Se%CC%81bastien%20Bazin%20Accor_Elodie%20Arnould%20RaiseLab_Club%20Magellan%202023_compresse%CC%81e.jpg"
                            />
                        </EditableBlock>

                        <AddableBlock />

                        <EditableBlock>
                            <SectionContent2col
                                title="What we do"
                                mediaUrl="https://www.theschoolab.com/wp-content/uploads/2022/06/Homepage-header-diversity-scaled.jpg"
                                style={{ backgroundColor: "var(--bg-brand-tertiary)", color: "var(--fg-brand-tertiary)" }}
                            />
                        </EditableBlock>

                        <AddableBlock />    
                    </div>
                
                    <div className="aside-buttons no-subnav d-lg-none">
                        <Button type="default" label="Edit content" iconStartName="pencil" showActive={false} data-toggle="tooltip" data-original-title="Edit" />
                    </div>
                </div>

            </AppContent>

            <AsideEditPage />
        </Layout>
    );
};
