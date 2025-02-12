import React from "react";
import { useEffect } from "react";
import { tooltips } from "../../../../public/utils/tooltips";
import { tableheader } from "../../../../public/utils/tableheader";
import { select } from "../../../../public/utils/select";

import { Folders } from "@/app/content/folders/Folders";
import { Views } from "@/app/content/views/Views";
import { Filters } from "@/app/content/filters/Filters";
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { EmptyState } from "@/app/components/EmptyState";

export interface ManageTableEmptyProps {}

export const ManageTableEmpty = ({}: ManageTableEmptyProps) => {
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
                    <EmptyState
                      iconTitle="table"
                      title="No results found"
                      text="Sorry, there are no matching results. Please check back later."
                      labelBtn="Add {{item}}"
                      iconBtn="plus-circle"
                      labelLink="Learn more about {{item}}"
                      spacious={true}
                    />
                </div>
            </AppContent>
        </Layout>
    );
};
