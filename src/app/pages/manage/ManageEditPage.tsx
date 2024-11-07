import React from "react";
import { useEffect } from "react";
import { Layout } from "../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { AsidePage } from "@/app/components/asides/AsidePage";
import { aside } from "../../../../public/utils/aside";

export const ManageEditPage = () => {
    useEffect(() => {
        aside();
    }, []);
    return (
        <Layout shortcutBarExpanded={false}>
            <AppContent showSubnav={false} sections="transparent" isAsside={true}>
                <p>Page builder here...</p>
            </AppContent>
            <AsidePage />
        </Layout>
    );
};
