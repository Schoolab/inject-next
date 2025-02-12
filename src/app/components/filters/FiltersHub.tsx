import React from "react";
import { useEffect } from "react";
import { FilterDateRange } from "@/app/components/filters/FilterDateRange";
import { searchControl } from "../../../../public/utils/searchControl";
import { tooltips } from "../../../../public/utils/tooltips";
import { dataFilters } from "../../../../public/utils/dataFilters";

interface FiltersDefaultProps {}

export const FiltersHub = ({}: FiltersDefaultProps) => {
    useEffect(() => {
        searchControl();
        tooltips();
        // dataFilters();
    }, []);
    return (
        <div className="datatableFiltersWrapper ">
            <div className="d-flex flex-column flex-lg-row align-items-lg-start">
                <div className="d-flex flex-column flex-lg-row mr-lg-3 mr-0">
                    <div id="sg-datatables-challenges_list_datatable_filter" className="dataTables_filter mb-5 mb-lg-0">
                        <input type="search" className="form-control form-control-md" placeholder="Search" aria-controls="sg-datatables-challenges_list_datatable" style={{ minWidth: 150, width: "100%" }} />
                    </div>
                </div>
                <div className="d-flex flex-column flex-lg-row scroll-h mr-lg-3 mr-0 flex-fill">
                    {/* <div className="mr-lg-3 mr-0 mb-3 mb-lg-0 dataFilter d-none">
                        <div className="dropdown position-static mb-3">
                            <a className="btn btn-lg btn-default custom-select small text-nowrap" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window" style={{ fontSize: ".9375rem" }}>
                                Status
                            </a>
                            <div className="dropdown-menu">
                                <form name="status" method="post" className=" px-5 pt-5 pb-3" style={{ maxHeight: 300, overflowY: "auto" }}>
                                    <div className="">
                                        <input className="form-control form-control-md searchControl mb-3" placeholder="Search" type="search" />
                                        <div className="btn-group w-100 mb-3" role="group">
                                            <a className="btn btn-sm btn-default w-50 checkControl">Select all</a>
                                            <a className="btn btn-sm btn-default w-50 uncheckControl">Clean</a>
                                        </div>
                                        <div id="chFilters_status">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" id="chFilters_status_0" name="chFilters[status][]" className="custom-control-input" defaultValue="user_open" />
                                                <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="chFilters_status_0">
                                                    Open
                                                </label>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" id="chFilters_status_1" name="chFilters[status][]" className="custom-control-input" defaultValue="in_progress" />
                                                <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="chFilters_status_1">
                                                    In progress
                                                </label>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" id="chFilters_status_2" name="chFilters[status][]" className="custom-control-input" defaultValue="closed" />
                                                <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="chFilters_status_2">
                                                    Closed
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="mr-lg-3 mr-0 mb-3 mb-lg-0 dataFilter d-none">
                        <div className="dropdown position-static mb-3">
                            <a className="btn btn-lg btn-default custom-select small text-nowrap" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window" style={{ fontSize: ".9375rem" }}>
                                Role
                            </a>
                            <div className="dropdown-menu">
                                <form name="role" method="post" className=" px-5 pt-5 pb-3" style={{ maxHeight: 300, overflowY: "auto" }}>
                                    <div className="">
                                        <input className="form-control form-control-md searchControl mb-3" placeholder="Search" type="search" />
                                        <div className="btn-group w-100 mb-3" role="group">
                                            <a className="btn btn-sm btn-default w-50 checkControl">Select all</a>
                                            <a className="btn btn-sm btn-default w-50 uncheckControl">Clean</a>
                                        </div>
                                        <div id="chFilters_role">
                                            <div className="custom-control custom-radio">
                                                <input type="radio" id="chFilters_role_0" name="chFilters[role]" required className="custom-control-input" defaultValue="participant" />
                                                <label className="checkbox-custom custom-control-label custom-control-label required" htmlFor="chFilters_role_0">
                                                    Participant
                                                </label>
                                            </div>
                                            <div className="custom-control custom-radio">
                                                <input type="radio" id="chFilters_role_1" name="chFilters[role]" required className="custom-control-input" defaultValue="mentor" />
                                                <label className="checkbox-custom custom-control-label custom-control-label required" htmlFor="chFilters_role_1">
                                                    Expert
                                                </label>
                                            </div>
                                            <div className="custom-control custom-radio">
                                                <input type="radio" id="chFilters_role_2" name="chFilters[role]" required className="custom-control-input" defaultValue="jury" />
                                                <label className="checkbox-custom custom-control-label custom-control-label required" htmlFor="chFilters_role_2">
                                                    Jury
                                                </label>
                                            </div>
                                            <div className="custom-control custom-radio">
                                                <input type="radio" id="chFilters_role_3" name="chFilters[role]" required className="custom-control-input" defaultValue="admin" />
                                                <label className="checkbox-custom custom-control-label custom-control-label required" htmlFor="chFilters_role_3">
                                                    Manager
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div> */}
                    <div className="mr-lg-3 mr-0 mb-3 mb-lg-0 dataFilter">
                        <div className="dropdown position-static mb-3">
                            <a className="btn btn-lg btn-default custom-select small text-nowrap" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window" style={{ fontSize: ".9375rem" }}>
                                Organization
                            </a>
                            <div className="dropdown-menu" style={{}}>
                                <form name="organization" method="post" className=" px-5 pt-5 pb-3" style={{ maxHeight: 300, overflowY: "auto" }}>
                                    <div className="">
                                        <input className="form-control form-control-md searchControl mb-3" placeholder="Search" type="search" />
                                        <div className="btn-group w-100 mb-3" role="group">
                                            <a className="btn btn-sm btn-default w-50 checkControl">Select all</a>
                                            <a className="btn btn-sm btn-default w-50 uncheckControl">Clean</a>
                                        </div>
                                        <div id="chFilters_organization">
                                            <div className="custom-control custom-radio">
                                                <input type="radio" id="chFilters_organization_0" name="chFilters[organization]" required className="custom-control-input" defaultValue={37} />
                                                <label className="checkbox-custom custom-control-label custom-control-label required" htmlFor="chFilters_organization_0">
                                                    Le Perqo
                                                </label>
                                            </div>
                                            <div className="custom-control custom-radio">
                                                <input type="radio" id="chFilters_organization_1" name="chFilters[organization]" required className="custom-control-input" defaultValue={34} />
                                                <label className="checkbox-custom custom-control-label custom-control-label required" htmlFor="chFilters_organization_1">
                                                    Refactory
                                                </label>
                                            </div>
                                            <div className="custom-control custom-radio">
                                                <input type="radio" id="chFilters_organization_2" name="chFilters[organization]" required className="custom-control-input" defaultValue={29} />
                                                <label className="checkbox-custom custom-control-label custom-control-label required" htmlFor="chFilters_organization_2">
                                                    Rungis &amp; Co
                                                </label>
                                            </div>
                                            <div className="custom-control custom-radio">
                                                <input type="radio" id="chFilters_organization_3" name="chFilters[organization]" required className="custom-control-input" defaultValue={2} />
                                                <label className="checkbox-custom custom-control-label custom-control-label required" htmlFor="chFilters_organization_3">
                                                    Schoolab Startups
                                                </label>
                                            </div>
                                            <div className="custom-control custom-radio">
                                                <input type="radio" id="chFilters_organization_4" name="chFilters[organization]" required className="custom-control-input" defaultValue={31} />
                                                <label className="checkbox-custom custom-control-label custom-control-label required" htmlFor="chFilters_organization_4">
                                                    Université Paris Cité
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* <div className="dropdown dataFitlersControl mr-lg-3 mr-0 mb-5 mb-lg-0" data-save-to-close="true">
                        <a className="btn btn-lg btn-muted" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window">
                            <span className="icon icon-plus-circle" />
                            <span>Filter</span>
                        </a>
                        <div className="dropdown-menu gap-xs py-5">
                            <form className="d-flex flex-column gap-md px-16px">
                                <div className="form-group">
                                    <label>Filters</label>
                                    <select required data-hint="type" aria-describedby="exemple_help" className="form-control custom-select" defaultValue="">
                                        <option value="" disabled>
                                            Choose a filter...
                                        </option>
                                    </select>
                                    <div className="invalid-feedback">Please choose an option in the select.</div>
                                </div>
                            </form>
                            <div className="d-flex flex-column dataFitlersControlRemove px-16px"></div>
                        </div>
                    </div> */}
                </div>
                <div className="d-flex flex-column flex-lg-row">
                    <form name="views" className="dataTableFilter mr-lg-3 mr-0 mb-5 mb-lg-0">
                        <div className="d-flex btn-group btn-group-lg btn-group-toggle btn-filter-radios" data-toggle="buttons" data-col={0}>
                        <label className="btn btn-default btn-lg active">
                                <input type="radio" className="btn-check" name="resourcesMainFilters[related]" id="resourcesMainFilters_related_0" defaultValue="_default" autoComplete="off" required defaultChecked />
                                All
                            </label>
                            <label className="btn btn-default btn-lg">
                                <input type="radio" className="btn-check" name="resourcesMainFilters[related]" id="resourcesMainFilters_related_0" defaultValue="_default" autoComplete="off" required defaultChecked />
                                Open
                            </label>
                            <label className="btn btn-default btn-lg">
                                <input type="radio" className="btn-check" name="resourcesMainFilters[related]" id="resourcesMainFilters_related_1" defaultValue="draft" autoComplete="off" required />
                                In progress
                            </label>
                            <label className="btn btn-default btn-lg">
                                <input type="radio" className="btn-check" name="resourcesMainFilters[related]" id="resourcesMainFilters_related_1" defaultValue="draft" autoComplete="off" required />
                                Closed
                            </label>
                        </div>
                    </form>
                    <div className="mb-5 mb-lg-0" data-toggle="tooltip" data-placement="top" data-original-title="Sort by range dates" data-boundary="window">
                        <FilterDateRange />
                    </div>
                </div>
            </div>
        </div>
    );
};
