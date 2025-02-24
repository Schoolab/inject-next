import React from "react";
import { useEffect } from "react";
import { tooltips } from "../../../../../../public/utils/tooltips";
import { tableheader } from "../../../../../../public/utils/tableheader";
import { select } from "../../../../../../public/utils/select";

import { Folders } from "@/app/content/folders/Folders";
import { Views } from "@/app/content/views/Views";
import { Filters } from "@/app/content/filters/Filters";
import { TableSkewed } from "@/app/content/tables/TableSkewed";
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";

export interface ManageProgressProps {}

export const ManageProgress = ({}: ManageProgressProps) => {
    useEffect(() => {
        tooltips();
        tableheader();
    }, []);
    return (
        <Layout sideBar="Manage">
            <AppContent showStepper={true} sections="separated" showSubnav={true}>
                <div id="mainTable" className="application-section gap-16px dataTableContainer">
                    <Views addClass="pb-16px border-bottom" />
                    <Filters />
                    <TableSkewed />
                </div>
            </AppContent>
        </Layout>
    );
};
