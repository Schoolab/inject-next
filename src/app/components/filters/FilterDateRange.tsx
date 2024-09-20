import React from "react";
import { useEffect } from "react";
import { dateRange } from "../../../../public/utils/dateRange";
import { tooltips } from "../../../../public/utils/tooltips";
import { Theme } from "../Theme";
interface FilterDateRangeProps {}

export const FilterDateRange = ({}: FilterDateRangeProps) => {
    useEffect(() => {
        dateRange();
        tooltips();
    }, []);
    return (
        <>
            <Theme themeName="Moho"/>
            <div className="btn btn-lg btn-default custom-select small text-nowrap reportrange"  data-toggle="tooltip" data-placement="top" data-original-title="Sort by range dates" data-boundary="window">
                <i className="icon icon-calendar" />
                <input type="hidden" name="startDate" value="" />
                <input type="hidden" name="endDate" value="" />
            </div>
        </>
    );
};
