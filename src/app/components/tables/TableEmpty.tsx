import React from "react";
import { TableElementViews } from "./elements/TableElementViews";
import { TableElementFilters } from "./elements/TableElementFilters";
import { TableElementEmpty } from "./elements/TableElementEmpty";

export interface TableEmptyProps {}


export const TableEmpty = ({}: TableEmptyProps) => {
    return (
        <div className="d-flex flex-column p-24px gap-16px">
            <TableElementViews />
            <TableElementFilters />
            <TableElementEmpty />
        </div>
    );
};
