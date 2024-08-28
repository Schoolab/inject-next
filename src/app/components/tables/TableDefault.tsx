import React from "react";
import { TableElementFolders } from "./elements/TableElementFolders";
import { TableElementViews } from "./elements/TableElementViews";
import { TableElementFilters } from "./elements/TableElementFilters";
import { TableElementTypes } from "./elements/TableElementTypes";

export interface TableDefaultProps {}


export const TableDefault = ({}: TableDefaultProps) => {
    return (
        <div className="d-flex flex-column p-24px gap-16px">
            <TableElementFolders />
            <TableElementViews />
            <TableElementFilters />
            <TableElementTypes />
        </div>
    );
};
