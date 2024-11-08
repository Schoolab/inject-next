import React from "react";
import { useEffect } from "react";
import { Layout } from "../../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { AsideEditPage } from "@/app/components/asides/AsideEditPage";
import { aside } from "../../../../../public/utils/aside";
import { EmptyState } from "@/app/components/EmptyState";

export const ManagePagesEditEmpty = () => {
    useEffect(() => {
        aside();
    }, []);
    return (
        <Layout shortcutBarExpanded={false}>
            <AppContent showSubnav={false} layout="full" sections="transparent" isAsside={true}>
                <EmptyState title="No sections" text="Your page’s sections will be listed here." iconTitle="section" labelBtn="Add section" labelLink="Learn more about sections" bordered={false} spacious={true} />
            </AppContent>
            <AsideEditPage />
        </Layout>
    );
};
