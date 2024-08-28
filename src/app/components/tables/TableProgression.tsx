import React from "react";
import { TableElementViews } from "./elements/TableElementViews";
import { TableElementFilters } from "./elements/TableElementFilters";
import { TableElementSkewed } from "./elements/TableElementSkewed";

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
