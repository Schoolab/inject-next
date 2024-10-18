import React from "react";
export interface FiltersViewHub {}

export const FiltersViewHub = ({}: FiltersViewHub) => {
    return (
        <div id="tables-views" className="d-flex flex-column flex-lg-row gap-xs pb-16px border-bottom flex-wrap">
            <form name="views" className="dataTableFilter">
                <div className="d-flex btn-group btn-group-lg btn-group-toggle btn-filter-radios" data-toggle="buttons" data-col={0}>
                    <label className="btn btn-default btn-lg active">
                        <input type="radio" className="btn-check" name="resourcesMainFilters[related]" id="resourcesMainFilters_related_0" defaultValue="_default" autoComplete="off" required defaultChecked />
                        All
                    </label>
                    <label className="btn btn-default btn-lg">
                        <input type="radio" className="btn-check" name="resourcesMainFilters[related]" id="resourcesMainFilters_related_1" defaultValue="draft" autoComplete="off" required />
                        Students
                    </label>
                    <label className="btn btn-default btn-lg">
                        <input type="radio" className="btn-check" name="resourcesMainFilters[related]" id="resourcesMainFilters_related_1" defaultValue="draft" autoComplete="off" required />
                        Startups
                    </label>
                    <label className="btn btn-default btn-lg">
                        <input type="radio" className="btn-check" name="resourcesMainFilters[related]" id="resourcesMainFilters_related_1" defaultValue="draft" autoComplete="off" required />
                        Corporate
                    </label>
     
                </div>
            </form>
            <form name="views" className="dataTableFilter">
                <div className="d-flex btn-group btn-group-lg btn-group-toggle btn-filter-radios" data-toggle="buttons" data-col={0}>
                    <label className="btn btn-default btn-lg active">
                        <input type="radio" className="btn-check" name="resourcesMainFilters[related]" id="resourcesMainFilters_related_0" defaultValue="_default" autoComplete="off" required defaultChecked />
                        All
                    </label>
                    <label className="btn btn-default btn-lg">
                        <input type="radio" className="btn-check" name="resourcesMainFilters[related]" id="resourcesMainFilters_related_1" defaultValue="draft" autoComplete="off" required />
                        Plastic
                    </label>
                    <label className="btn btn-default btn-lg">
                        <input type="radio" className="btn-check" name="resourcesMainFilters[related]" id="resourcesMainFilters_related_1" defaultValue="draft" autoComplete="off" required />
                        Food
                    </label>
                    <label className="btn btn-default btn-lg">
                        <input type="radio" className="btn-check" name="resourcesMainFilters[related]" id="resourcesMainFilters_related_1" defaultValue="draft" autoComplete="off" required />
                        DEI
                    </label>
                </div>
            </form>
            <form name="views" className="dataTableFilter">
                <div className="d-flex btn-group btn-group-lg btn-group-toggle btn-filter-radios" data-toggle="buttons" data-col={0}>
                    <label className="btn btn-default btn-lg active">
                        <input type="radio" className="btn-check" name="resourcesMainFilters[related]" id="resourcesMainFilters_related_0" defaultValue="_default" autoComplete="off" required defaultChecked />
                        All
                    </label>
                    <label className="btn btn-default btn-lg">
                        <input type="radio" className="btn-check" name="resourcesMainFilters[related]" id="resourcesMainFilters_related_1" defaultValue="draft" autoComplete="off" required />
                        Participant
                    </label>
                    <label className="btn btn-default btn-lg">
                        <input type="radio" className="btn-check" name="resourcesMainFilters[related]" id="resourcesMainFilters_related_1" defaultValue="draft" autoComplete="off" required />
                        Expert
                    </label>
                    <label className="btn btn-default btn-lg">
                        <input type="radio" className="btn-check" name="resourcesMainFilters[related]" id="resourcesMainFilters_related_1" defaultValue="draft" autoComplete="off" required />
                        Jury
                    </label>
                    <label className="btn btn-default btn-lg">
                        <input type="radio" className="btn-check" name="resourcesMainFilters[related]" id="resourcesMainFilters_related_1" defaultValue="draft" autoComplete="off" required />
                        Manager
                    </label>
                </div>
            </form>
      
        </div>
    );
};
