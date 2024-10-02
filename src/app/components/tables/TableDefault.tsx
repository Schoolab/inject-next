import React from "react";
import { useEffect } from "react";
import { tooltips } from "../../../../public/utils/tooltips";
import { TableElementFolders } from "./elements/TableElementFolders";
import { TableElementViews } from "./elements/TableElementViews";
import { TableElementFilters } from "./elements/TableElementFilters";
import { TableElementTypes } from "./elements/TableElementTypes";
import { FiltersDefault } from "../filters/FiltersDefault";
import { select } from "../../../../public/utils/select";
export interface TableDefaultProps {}


export const TableDefault = ({}: TableDefaultProps) => {
    useEffect(() => {
        tooltips();
    }, []);
    return (
        <div className="d-flex flex-column p-24px gap-16px">
            <TableElementFolders />
            <TableElementViews />
            <FiltersDefault />
            <TableElementTypes />
        </div>
    );
};
