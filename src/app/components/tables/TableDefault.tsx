import React from "react";
import { useEffect } from "react";
import { tooltips } from "../../../../public/utils/tooltips";
import { tableheader } from "../../../../public/utils/tableheader";
import { TableElementFolders } from "@/app/components/tables/elements/TableElementFolders";
import { TableElementViews } from "@/app/components/tables/elements/TableElementViews";
import { TableElementFilters } from "@/app/components/tables/elements/TableElementFilters";
import { TableElementTypes } from "@/app/components/tables/elements/TableElementTypes";
import { FiltersDefault } from "@/app/components/filters/FiltersDefault";
import { select } from "../../../../public/utils/select";
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
export interface TableDefaultProps {}


export const TableDefault = ({}: TableDefaultProps) => {
    useEffect(() => {
        tooltips();
        tableheader();
    }, []);
    return (
        <Layout sideBar="Manage">
            <AppContent showStepper={true} sections="separated" showSubnav={true}>
                <div className="d-flex flex-column p-24px gap-16px">
                    <TableElementFolders />
                    <TableElementViews />
                    <FiltersDefault />
                    <TableElementTypes />
                </div>
            </AppContent>
        </Layout>
    );
};
