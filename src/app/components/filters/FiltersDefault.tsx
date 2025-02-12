import React from "react";
import { useEffect } from "react";
import { FilterDateRange } from "@/app/components/filters/FilterDateRange";
import { searchControl } from "../../../../public/utils/searchControl";
import { tooltips } from "../../../../public/utils/tooltips";
import { dataFilters } from "../../../../public/utils/dataFilters";

interface FiltersDefaultProps {}

export const FiltersDefault = ({}: FiltersDefaultProps) => {
    useEffect(() => {
        searchControl();
        tooltips();
        dataFilters();
    }, []);
    return (
        <div className="datatableFiltersWrapper ">
            <div className="d-flex flex-column flex-lg-row align-items-lg-start pb-5">
                <div className="d-flex flex-column flex-lg-row mr-lg-3 mr-0">
                    <div id="sg-datatables-challenges_list_datatable_filter" className="dataTables_filter mb-5 mb-lg-0">
                        <input type="search" className="form-control form-control-md" placeholder="Search" aria-controls="sg-datatables-challenges_list_datatable" style={{ minWidth: 150, width: "100%" }} />
                    </div>
                </div>
                <div className="d-flex flex-column flex-lg-row scroll-h mr-lg-3 mr-0 flex-fill">
                    <div className="mr-lg-3 mr-0 mb-3 mb-lg-0 dataFilter d-none">
                        <div className="dropdown position-static mb-3">
                            <a className="btn btn-lg btn-default custom-select small text-nowrap" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window" style={{ fontSize: ".9375rem" }}>
                                Status
                            </a>
                            <div className="dropdown-menu">
                                <form name="challenges_status" method="post" data-col={17} className="dataTableFilter table-filter px-5 pt-5 pb-3" style={{ maxHeight: 300, overflowY: "auto" }}>
                                    <div id="challenges_filters_challenges_status" data-col={17} className="dataTableFilter table-filter">
                                        <input type="search" className="form-control form-control-md searchControl mb-3" placeholder="Search" title="Type in a name" />

                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_challenges_status_0" name="challenges_filters[challenges_status]" required className="custom-control-input" defaultValue="" defaultChecked />
                                            <label className="checkbox-custom custom-control-label custom-control-label required" htmlFor="challenges_filters_challenges_status_0">
                                                All
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_challenges_status_1" name="challenges_filters[challenges_status]" required className="custom-control-input" defaultValue="opened" />
                                            <label className="checkbox-custom custom-control-label custom-control-label required" htmlFor="challenges_filters_challenges_status_1">
                                                Opened
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_challenges_status_2" name="challenges_filters[challenges_status]" required className="custom-control-input" defaultValue="closed" />
                                            <label className="checkbox-custom custom-control-label custom-control-label required" htmlFor="challenges_filters_challenges_status_2">
                                                Closed
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_challenges_status_3" name="challenges_filters[challenges_status]" required className="custom-control-input" defaultValue="in_progress" />
                                            <label className="checkbox-custom custom-control-label custom-control-label required" htmlFor="challenges_filters_challenges_status_3">
                                                In progress
                                            </label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="mr-lg-3 mr-0 mb-3 mb-lg-0 dataFilter d-none">
                        <div className="dropdown position-static mb-3">
                            <a className="btn btn-lg btn-default custom-select small text-nowrap active" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window" style={{ fontSize: ".9375rem" }}>
                                Impact
                            </a>
                            <div className="dropdown-menu">
                                <form name="1" method="post" data-col={3} className="dataTableFilter table-filter px-5 pt-5 pb-3" style={{ maxHeight: 300, overflowY: "auto" }}>
                                    <div id="challenges_filters_1" data-col={3} className="dataTableFilter table-filter">
                                        <input type="search" className="form-control form-control-md searchControl mb-3" placeholder="Search" title="Type in a name" />
                                        <div className="btn-group w-100 mb-3" role="group">
                                            <a className="btn btn-sm btn-default w-50 checkControl">All</a>
                                            <a className="btn btn-sm btn-default w-50 uncheckControl">Clean</a>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_1_0" name="challenges_filters[1][]" className="custom-control-input" defaultValue={2} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_1_0">
                                                No impact
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_1_1" name="challenges_filters[1][]" className="custom-control-input" defaultValue={3} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_1_1">
                                                Impact not obvious
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_1_2" name="challenges_filters[1][]" className="custom-control-input" defaultValue={4} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_1_2">
                                                Impact push
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_1_3" name="challenges_filters[1][]" className="custom-control-input" defaultValue={5} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_1_3">
                                                Impact native
                                            </label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="mr-lg-3 mr-0 mb-3 mb-lg-0 dataFilter d-none">
                        <div className="dropdown position-static mb-3">
                            <a className="btn btn-lg btn-default custom-select small text-nowrap" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window" style={{ fontSize: ".9375rem" }}>
                                Verticals
                            </a>
                            <div className="dropdown-menu">
                                <form name="9" method="post" data-col={4} className="dataTableFilter table-filter px-5 pt-5 pb-3" style={{ maxHeight: 300, overflowY: "auto" }}>
                                    <div id="challenges_filters_9" data-col={4} className="dataTableFilter table-filter">
                                        <input type="search" className="form-control form-control-md searchControl mb-3" placeholder="Search" title="Type in a name" />
                                        <div className="btn-group w-100 mb-3" role="group">
                                            <a className="btn btn-sm btn-default w-50 checkControl">All</a>
                                            <a className="btn btn-sm btn-default w-50 uncheckControl">Clean</a>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_9_0" name="challenges_filters[9][]" className="custom-control-input" defaultValue={10} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_9_0">
                                                Plastic
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_9_1" name="challenges_filters[9][]" className="custom-control-input" defaultValue={11} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_9_1">
                                                Food
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_9_2" name="challenges_filters[9][]" className="custom-control-input" defaultValue={12} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_9_2">
                                                DEI
                                            </label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="mr-lg-3 mr-0 mb-3 mb-lg-0 dataFilter d-none">
                        <div className="dropdown position-static mb-3">
                            <a className="btn btn-lg btn-default custom-select small text-nowrap" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window" style={{ fontSize: ".9375rem" }}>
                                SDGs
                            </a>
                            <div className="dropdown-menu">
                                <form name="13" method="post" data-col={5} className="dataTableFilter table-filter px-5 pt-5 pb-3" style={{ maxHeight: 300, overflowY: "auto" }}>
                                    <div id="challenges_filters_13" data-col={5} className="dataTableFilter table-filter">
                                        <input type="search" className="form-control form-control-md searchControl mb-3" placeholder="Search" title="Type in a name" />
                                        <div className="btn-group w-100 mb-3" role="group">
                                            <a className="btn btn-sm btn-default w-50 checkControl">All</a>
                                            <a className="btn btn-sm btn-default w-50 uncheckControl">Clean</a>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_13_0" name="challenges_filters[13][]" className="custom-control-input" defaultValue={14} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_13_0">
                                                1 - No poverty
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_13_1" name="challenges_filters[13][]" className="custom-control-input" defaultValue={15} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_13_1">
                                                2 - Zero hunger
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_13_2" name="challenges_filters[13][]" className="custom-control-input" defaultValue={16} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_13_2">
                                                3 - Good health and well-being
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_13_3" name="challenges_filters[13][]" className="custom-control-input" defaultValue={17} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_13_3">
                                                4 - Quality education
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_13_4" name="challenges_filters[13][]" className="custom-control-input" defaultValue={18} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_13_4">
                                                5 - Gender equality
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_13_5" name="challenges_filters[13][]" className="custom-control-input" defaultValue={19} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_13_5">
                                                6 - Clean water and sanitation
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_13_6" name="challenges_filters[13][]" className="custom-control-input" defaultValue={20} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_13_6">
                                                7 - Affordable and clean energy
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_13_7" name="challenges_filters[13][]" className="custom-control-input" defaultValue={21} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_13_7">
                                                8 - Decent work and economic growth
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_13_8" name="challenges_filters[13][]" className="custom-control-input" defaultValue={22} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_13_8">
                                                9 - Industry, innovation and infrastructure
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_13_9" name="challenges_filters[13][]" className="custom-control-input" defaultValue={23} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_13_9">
                                                10 - Reduced inequalities
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_13_10" name="challenges_filters[13][]" className="custom-control-input" defaultValue={24} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_13_10">
                                                11 - Sustainable cities and communities
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_13_11" name="challenges_filters[13][]" className="custom-control-input" defaultValue={25} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_13_11">
                                                12 - Responsible consumption and production
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_13_12" name="challenges_filters[13][]" className="custom-control-input" defaultValue={26} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_13_12">
                                                13 - Climate action
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_13_13" name="challenges_filters[13][]" className="custom-control-input" defaultValue={27} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_13_13">
                                                14 - Life below water
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_13_14" name="challenges_filters[13][]" className="custom-control-input" defaultValue={28} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_13_14">
                                                15 - Life on land
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_13_15" name="challenges_filters[13][]" className="custom-control-input" defaultValue={29} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_13_15">
                                                16 - Peace, justice and strong institutions
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_13_16" name="challenges_filters[13][]" className="custom-control-input" defaultValue={30} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_13_16">
                                                17 - Partnerships for the goals
                                            </label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="mr-lg-3 mr-0 mb-3 mb-lg-0 dataFilter d-none">
                        <div className="dropdown position-static mb-3">
                            <a className="btn btn-lg btn-default custom-select small text-nowrap" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window" style={{ fontSize: ".9375rem" }}>
                                Ecosystems
                            </a>
                            <div className="dropdown-menu">
                                <form name="31" method="post" data-col={6} className="dataTableFilter table-filter px-5 pt-5 pb-3" style={{ maxHeight: 300, overflowY: "auto" }}>
                                    <div id="challenges_filters_31" data-col={6} className="dataTableFilter table-filter">
                                        <input type="search" className="form-control form-control-md searchControl mb-3" placeholder="Search" title="Type in a name" />
                                        <div className="btn-group w-100 mb-3" role="group">
                                            <a className="btn btn-sm btn-default w-50 checkControl">All</a>
                                            <a className="btn btn-sm btn-default w-50 uncheckControl">Clean</a>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_31_0" name="challenges_filters[31][]" className="custom-control-input" defaultValue={32} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_31_0">
                                                Students
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_31_1" name="challenges_filters[31][]" className="custom-control-input" defaultValue={33} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_31_1">
                                                Startups
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_31_2" name="challenges_filters[31][]" className="custom-control-input" defaultValue={34} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_31_2">
                                                Corporate
                                            </label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="mr-lg-3 mr-0 mb-3 mb-lg-0 dataFilter d-none">
                        <div className="dropdown position-static mb-3">
                            <a className="btn btn-lg btn-default custom-select small text-nowrap" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window" style={{ fontSize: ".9375rem" }}>
                                Use case
                            </a>
                            <div className="dropdown-menu">
                                <form name="36" method="post" data-col={7} className="dataTableFilter table-filter px-5 pt-5 pb-3" style={{ maxHeight: 300, overflowY: "auto" }}>
                                    <div id="challenges_filters_36" data-col={7} className="dataTableFilter table-filter">
                                        <input type="search" className="form-control form-control-md searchControl mb-3" placeholder="Search" title="Type in a name" />
                                        <div className="btn-group w-100 mb-3" role="group">
                                            <a className="btn btn-sm btn-default w-50 checkControl">All</a>
                                            <a className="btn btn-sm btn-default w-50 uncheckControl">Clean</a>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_36_0" name="challenges_filters[36][]" className="custom-control-input" defaultValue={37} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_36_0">
                                                Incubator
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_36_1" name="challenges_filters[36][]" className="custom-control-input" defaultValue={38} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_36_1">
                                                Community
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_36_2" name="challenges_filters[36][]" className="custom-control-input" defaultValue={39} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_36_2">
                                                Hackathon
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_36_3" name="challenges_filters[36][]" className="custom-control-input" defaultValue={40} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_36_3">
                                                Learning Expedition
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_36_4" name="challenges_filters[36][]" className="custom-control-input" defaultValue={41} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_36_4">
                                                Learning Course
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_36_5" name="challenges_filters[36][]" className="custom-control-input" defaultValue={42} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_36_5">
                                                Learning Workshop
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_36_6" name="challenges_filters[36][]" className="custom-control-input" defaultValue={43} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_36_6">
                                                Open Innovation
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_36_7" name="challenges_filters[36][]" className="custom-control-input" defaultValue={44} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_36_7">
                                                Innovation
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_36_8" name="challenges_filters[36][]" className="custom-control-input" defaultValue={45} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_36_8">
                                                Other
                                            </label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="mr-lg-3 mr-0 mb-3 mb-lg-0 dataFilter d-none">
                        <div className="dropdown position-static mb-3">
                            <a className="btn btn-lg btn-default custom-select small text-nowrap" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window" style={{ fontSize: ".9375rem" }}>
                                Capability
                            </a>
                            <div className="dropdown-menu">
                                <form name="46" method="post" data-col={8} className="dataTableFilter table-filter px-5 pt-5 pb-3" style={{ maxHeight: 300, overflowY: "auto" }}>
                                    <div id="challenges_filters_46" data-col={8} className="dataTableFilter table-filter">
                                        <input type="search" className="form-control form-control-md searchControl mb-3" placeholder="Search" title="Type in a name" />
                                        <div className="btn-group w-100 mb-3" role="group">
                                            <a className="btn btn-sm btn-default w-50 checkControl">All</a>
                                            <a className="btn btn-sm btn-default w-50 uncheckControl">Clean</a>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_46_0" name="challenges_filters[46][]" className="custom-control-input" defaultValue={47} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_46_0">
                                                Education
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_46_1" name="challenges_filters[46][]" className="custom-control-input" defaultValue={48} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_46_1">
                                                Entrepreneurship
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_46_2" name="challenges_filters[46][]" className="custom-control-input" defaultValue={49} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_46_2">
                                                Innovation
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_46_3" name="challenges_filters[46][]" className="custom-control-input" defaultValue={50} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_46_3">
                                                Campus
                                            </label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="mr-lg-3 mr-0 mb-3 mb-lg-0 dataFilter d-none">
                        <div className="dropdown position-static mb-3">
                            <a className="btn btn-lg btn-default custom-select small text-nowrap" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window" style={{ fontSize: ".9375rem" }}>
                                Business line
                            </a>
                            <div className="dropdown-menu">
                                <form name="51" method="post" data-col={9} className="dataTableFilter table-filter px-5 pt-5 pb-3" style={{ maxHeight: 300, overflowY: "auto" }}>
                                    <div id="challenges_filters_51" data-col={9} className="dataTableFilter table-filter">
                                        <input type="search" className="form-control form-control-md searchControl mb-3" placeholder="Search" title="Type in a name" />
                                        <div className="btn-group w-100 mb-3" role="group">
                                            <a className="btn btn-sm btn-default w-50 checkControl">All</a>
                                            <a className="btn btn-sm btn-default w-50 uncheckControl">Clean</a>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_51_0" name="challenges_filters[51][]" className="custom-control-input" defaultValue={52} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_51_0">
                                                Financial Services
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_51_1" name="challenges_filters[51][]" className="custom-control-input" defaultValue={53} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_51_1">
                                                Healthcare and Life Sciences
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_51_2" name="challenges_filters[51][]" className="custom-control-input" defaultValue={54} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_51_2">
                                                Technology
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_51_3" name="challenges_filters[51][]" className="custom-control-input" defaultValue={55} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_51_3">
                                                Retail and Consumer Goods
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_51_4" name="challenges_filters[51][]" className="custom-control-input" defaultValue={56} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_51_4">
                                                Manufacturing
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_51_5" name="challenges_filters[51][]" className="custom-control-input" defaultValue={57} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_51_5">
                                                Public Administration and Government Services
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_51_6" name="challenges_filters[51][]" className="custom-control-input" defaultValue={58} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_51_6">
                                                Energy and Utilities
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_51_7" name="challenges_filters[51][]" className="custom-control-input" defaultValue={59} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_51_7">
                                                Telecommunications
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_51_8" name="challenges_filters[51][]" className="custom-control-input" defaultValue={60} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_51_8">
                                                Real Estate and Construction
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_51_9" name="challenges_filters[51][]" className="custom-control-input" defaultValue={61} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_51_9">
                                                Transportation and Logistics
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_51_10" name="challenges_filters[51][]" className="custom-control-input" defaultValue={62} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_51_10">
                                                Hospitality and Tourism
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" id="challenges_filters_51_11" name="challenges_filters[51][]" className="custom-control-input" defaultValue={63} />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_51_11">
                                                Other
                                            </label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="mr-lg-3 mr-0 mb-5 mb-lg-0 dataFilter d-none">
                        <div className="dropdown position-static mb-3">
                            <a className="btn btn-lg btn-default custom-select small text-nowrap" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window" style={{ fontSize: ".9375rem" }}>
                                Owner
                            </a>
                            <div className="dropdown-menu">
                                <form name="form_value_owner" method="post" data-col={11} className="dataTableFilter table-filter px-5 pt-5 pb-3" style={{ maxHeight: 300, overflowY: "auto" }}>
                                    <div id="challenges_filters_form_value_owner" data-col={11} className="dataTableFilter table-filter">
                                        <input type="search" className="form-control form-control-md searchControl mb-3" placeholder="Search" title="Type in a name" />

                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_0" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="" defaultChecked />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_0">
                                                All
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_1" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Adrien Tournadre" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_1">
                                                Adrien Tournadre
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_2" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Alexandra Jolly" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_2">
                                                Alexandra Jolly
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_3" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Alexandre Heully" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_3">
                                                Alexandre Heully
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_4" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Alexane HONG" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_4">
                                                Alexane HONG
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_5" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Amira RIGHI" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_5">
                                                Amira RIGHI
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_6" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Anais Montazeri" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_6">
                                                Anais Montazeri
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_7" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Anne Mordon" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_7">
                                                Anne Mordon
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_8" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Anthony Mauricio" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_8">
                                                Anthony Mauricio
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_9" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Arnaud Chaigneau" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_9">
                                                Arnaud Chaigneau
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_10" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Arthur Mossa" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_10">
                                                Arthur Mossa
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_11" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Bérénice Gits" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_11">
                                                Bérénice Gits
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_12" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Camille Petrucci" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_12">
                                                Camille Petrucci
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_13" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Can OZUL" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_13">
                                                Can OZUL
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_14" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Capucine Cedoz" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_14">
                                                Capucine Cedoz
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_15" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Charles CESARI" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_15">
                                                Charles CESARI
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_16" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Cian Mitsunaga" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_16">
                                                Cian Mitsunaga
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_17" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Claire Lequintrec" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_17">
                                                Claire Lequintrec
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_18" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Claire SUCHODOLSKI" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_18">
                                                Claire SUCHODOLSKI
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_19" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Clara Missoffe" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_19">
                                                Clara Missoffe
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_20" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Clemence Affre" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_20">
                                                Clemence Affre
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_21" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Clément Mugisha" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_21">
                                                Clément Mugisha
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_22" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Clément Ravard" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_22">
                                                Clément Ravard
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_23" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Clementine Faivre" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_23">
                                                Clementine Faivre
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_24" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Coline Schmitt" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_24">
                                                Coline Schmitt
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_25" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Cyprien Borios" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_25">
                                                Cyprien Borios
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_26" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Dylan Antonisamy" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_26">
                                                Dylan Antonisamy
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_27" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Emma Salvarelli" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_27">
                                                Emma Salvarelli
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_28" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Fatou NDIAYE" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_28">
                                                Fatou NDIAYE
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_29" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Guillaume Tran" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_29">
                                                Guillaume Tran
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_30" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Hugues Galanth" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_30">
                                                Hugues Galanth
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_31" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Jan Veicht" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_31">
                                                Jan Veicht
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_32" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Jean-Claude Charlet" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_32">
                                                Jean-Claude Charlet
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_33" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Jeanne FETIVEAU" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_33">
                                                Jeanne FETIVEAU
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_34" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Jeremy Lluansi" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_34">
                                                Jeremy Lluansi
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_35" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Jules Langeard" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_35">
                                                Jules Langeard
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_36" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Julie Delchet" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_36">
                                                Julie Delchet
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_37" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Julien Braidi" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_37">
                                                Julien Braidi
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_38" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Julien Fayet" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_38">
                                                Julien Fayet
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_39" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Kelly Chou" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_39">
                                                Kelly Chou
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_40" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Kim FRECON" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_40">
                                                Kim FRECON
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_41" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Liora Belaisch" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_41">
                                                Liora Belaisch
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_42" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Louis Boutet" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_42">
                                                Louis Boutet
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_43" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Lucas Veyrines" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_43">
                                                Lucas Veyrines
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_44" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Madina Ward" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_44">
                                                Madina Ward
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_45" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Maissane Benaim" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_45">
                                                Maissane Benaim
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_46" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Marie-Capucine Goube" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_46">
                                                Marie-Capucine Goube
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_47" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Marine Martinez" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_47">
                                                Marine Martinez
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_48" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Marjorie Pouzadoux" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_48">
                                                Marjorie Pouzadoux
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_49" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Martin Duizabo" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_49">
                                                Martin Duizabo
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_50" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Mathieu AGUESSE" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_50">
                                                Mathieu AGUESSE
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_51" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Mathis Leonard" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_51">
                                                Mathis Leonard
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_52" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Matthieu Raffier" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_52">
                                                Matthieu Raffier
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_53" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Mickael Jakubowicz" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_53">
                                                Mickael Jakubowicz
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_54" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Nina Leroy" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_54">
                                                Nina Leroy
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_55" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Nora Hechelef" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_55">
                                                Nora Hechelef
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_56" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Olivier Cotinat" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_56">
                                                Olivier Cotinat
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_57" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Oscar FEBVRE" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_57">
                                                Oscar FEBVRE
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_58" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Patrick Consorti" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_58">
                                                Patrick Consorti
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_59" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Paul  Chenard" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_59">
                                                Paul Chenard
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_60" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Paula Fajardo" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_60">
                                                Paula Fajardo
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_61" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Pauline Bonoron" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_61">
                                                Pauline Bonoron
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_62" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Pierre Lemeteil" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_62">
                                                Pierre Lemeteil
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_63" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Pierre Rault" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_63">
                                                Pierre Rault
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_64" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Prisca Denizeau" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_64">
                                                Prisca Denizeau
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_65" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Quentin Cailluyer" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_65">
                                                Quentin Cailluyer
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_66" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Quentin Frécon" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_66">
                                                Quentin Frécon
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_67" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Quentin GUY DE CHAMISSO" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_67">
                                                Quentin GUY DE CHAMISSO
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_68" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Rachel Scherer" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_68">
                                                Rachel Scherer
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_69" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Robin Tamine" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_69">
                                                Robin Tamine
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_70" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Romain CORREARD" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_70">
                                                Romain CORREARD
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_71" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Samantha ROUVRAIS" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_71">
                                                Samantha ROUVRAIS
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_72" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Sarah Lamoureux" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_72">
                                                Sarah Lamoureux
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_73" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Shanna Minla'a" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_73">
                                                Shanna Minla'a
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_74" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Shérane Prompsy" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_74">
                                                Shérane Prompsy
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_75" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Solène HOANG TRONG" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_75">
                                                Solène HOANG TRONG
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_76" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Sonia Williams" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_76">
                                                Sonia Williams
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_77" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Sophie Brand" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_77">
                                                Sophie Brand
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_78" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Stacey Binnion" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_78">
                                                Stacey Binnion
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_79" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Stephanie Bideau" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_79">
                                                Stephanie Bideau
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_80" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Tanguy Cleirec" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_80">
                                                Tanguy Cleirec
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_81" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Terence Irving" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_81">
                                                Terence Irving
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_82" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Valentin Haesebrouck" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_82">
                                                Valentin Haesebrouck
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_83" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Valentine DENIS" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_83">
                                                Valentine DENIS
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_84" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Yan Liu" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_84">
                                                Yan Liu
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_85" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Yann Depoorter" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_85">
                                                Yann Depoorter
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_86" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Yves Lehmann" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_86">
                                                Yves Lehmann
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="challenges_filters_form_value_owner_87" name="challenges_filters[form_value_owner]" className="custom-control-input" defaultValue="Zacharie Amsellem" />
                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenges_filters_form_value_owner_87">
                                                Zacharie Amsellem
                                            </label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dataFitlersControl mr-lg-3 mr-0 mb-5 mb-lg-0" data-save-to-close="true">
                        <a className="btn btn-lg btn-muted" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window">
                            <span className="icon icon-plus-circle" />
                            <span>Filter</span>
                        </a>
                        <div className="dropdown-menu gap-xs">
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

                            {/* <div className="d-flex gap-xs justify-content-end px-16px ">
                                <button className="btn btn-lg btn-default dataFitlersControlCancel">
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-lg btn-primary dataFitlersControlApply">
                                    Apply
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column flex-lg-row">
                    <div className="mr-lg-3 mr-0 mb-5 mb-lg-0" data-toggle="tooltip" data-placement="top" data-original-title="Sort by range dates" data-boundary="window">
                        <FilterDateRange />
                    </div>
                    <div className="mr-lg-3 mr-0 mb-5 mb-lg-0">
                        <a className="btn btn-default btn-block btn-icon btn-lg text-nowrap" href="/organization/challenges/export" data-toggle="tooltip" data-placement="top" data-original-title="export" data-boundary="window">
                            <span className="icon icon-cloud-download" />
                        </a>
                    </div>

                    <div className="mb-5 mb-lg-0">
                        <a id="btn-new-challenge" className="btn btn-primary btn-icon btn-lg btn-block text-nowrap" data-form-url="/organization/challenge/modal/new" href="#">
                            <span className="icon icon-plus-circle" />
                            <span>Add</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
