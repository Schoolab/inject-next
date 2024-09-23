import React from "react";
import { useEffect } from "react";
import { dateRange } from "../../../../public/utils/dateRange";
import { tooltips } from "../../../../public/utils/tooltips";
interface FilterDateRangeProps {}

export const FilterDateRange = ({}: FilterDateRangeProps) => {
    useEffect(() => {
        dateRange();
        tooltips();
    }, []);
    return (
        <div className="btn btn-lg btn-default custom-select small text-nowrap reportrange">
            <i className="icon icon-calendar" />
            <input type="hidden" name="startDate" value="" />
            <input type="hidden" name="endDate" value="" />
        </div>
    );
};
