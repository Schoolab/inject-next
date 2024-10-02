import React from "react";
export interface TableElementViewsProps {}

export const TableElementViews = ({}: TableElementViewsProps) => {
    return (
        <div id="tables-views" className="d-flex align-items-lg-start justify-content-between gap-xs pb-16px border-bottom">
            <form name="views" className="dataTableFilter">
                <select name="filters" id="filter-select" className="custom-select field-sizing d-md-none">
                    <option value="_default">
                        All {"{"}items{"}"}
                    </option>
                    <option value="draft">Draft</option>
                    <option value="pending">Pending review</option>
                    <option value="rejected">Rejected</option>
                    <option value="accepted">Accepted</option>
                </select>
                <div className="d-none d-md-flex btn-group btn-group-lg btn-group-toggle btn-filter-radios" data-toggle="buttons" data-col={0}>
                    <label className="btn btn-default btn-lg active">
                        <input type="radio" className="btn-check" name="resourcesMainFilters[related]" id="resourcesMainFilters_related_0" defaultValue="_default" autoComplete="off" required defaultChecked />
                        All {"{"}items{"}"}
                    </label>
                    <label className="btn btn-default btn-lg">
                        <input type="radio" className="btn-check" name="resourcesMainFilters[related]" id="resourcesMainFilters_related_1" defaultValue="draft" autoComplete="off" required />
                        Draft
                    </label>
                    <label className="btn btn-default btn-lg">
                        <input type="radio" className="btn-check" name="resourcesMainFilters[related]" id="resourcesMainFilters_related_2" defaultValue="pending" autoComplete="off" required />
                        Pending review
                    </label>
                    <label className="btn btn-default btn-lg">
                        <input type="radio" className="btn-check" name="resourcesMainFilters[related]" id="resourcesMainFilters_related_3" defaultValue="rejected" autoComplete="off" required />
                        Rejected
                    </label>
                    <label className="btn btn-default btn-lg">
                        <input type="radio" className="btn-check" name="resourcesMainFilters[related]" id="resourcesMainFilters_related_4" defaultValue="accepted" autoComplete="off" required />
                        Accepted
                    </label>
                </div>
            </form>
            {/* <a href="#" className="btn btn-lg btn-muted">
                <span className="icon icon-plus-circle" />
                <span>Add view</span>
            </a> */}
        </div>
    );
};
