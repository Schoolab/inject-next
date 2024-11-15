import React from "react";
import { useEffect } from "react";
import { Layout } from "../../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { AsideEditPage } from "@/app/components/asides/AsideEditPage";
import { aside } from "../../../../../public/utils/aside";
import { Avatar } from "@/app/components/avatars/Avatar";
import { Icon } from "@/app/components/Icon";
import { SectionContent } from "./sections/SectionContent";
import { SectionNumber } from "./sections/SectionNumber";
import { SectionTimeline } from "./sections/SectionTimeline";
import { EditableBlock } from "@/app/components/EditableBlock";
import { AddableBlock } from "@/app/components/AddableBlock";
import { SectionTwoColContent } from "./sections/SectionTwoColContent";
import { SectionHero } from "./sections/SectionHero";
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
                        <SectionContent title="Our vision" imageSide="right" imageUrl="https://www.theschoolab.com/wp-content/uploads/2024/09/465ECB00-FA3D-4965-8B62-A9EA66F90A1D_1_105_c.jpeg" />
                    </EditableBlock>

                    <AddableBlock />

                    <EditableBlock>
                        <SectionTwoColContent title="What we do" style={{ backgroundColor: "var(--bg-brand-tertiary)", color: "var(--fg-brand-tertiary)" }} />
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
