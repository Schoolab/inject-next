import React from "react";
import { TableElementViews } from "@/app/components/tables/elements/TableElementViews";
import { TableElementFilters } from "@/app/components/tables/elements/TableElementFilters";
import { TableElementSkewed } from "@/app/components/tables/elements/TableElementSkewed";

export interface TableProgressionProps {}


export const TableProgression = ({}: TableProgressionProps) => {
    return (
        <div className="d-flex flex-column p-24px gap-16px">
            <TableElementViews />
            <TableElementFilters />
            <TableElementSkewed />
        </div>
    );
};
