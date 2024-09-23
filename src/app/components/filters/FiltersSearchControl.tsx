import React from "react";
import { useEffect } from "react";
import { FilterDateRange } from "./FilterDateRange";
import { searchControl } from "../../../../public/utils/searchControl";
interface FiltersSearchControlProps {}

export const FiltersSearchControl = ({}: FiltersSearchControlProps) => {
    useEffect(() => {
        searchControl();
    }, []);
    return (
        <div className="datatableFiltersWrapper ">
            <div className="d-flex flex-column flex-lg-row align-items-lg-start pb-5 justify-content-lg-between">
                <div className="d-flex flex-column flex-lg-row scroll-h mr-lg-8 mr-0">
                    <div className="mr-lg-3 mr-0 mb-3 mb-lg-0">
                        <div className="dropdown position-static mb-3">
                            <a className="btn btn-lg btn-default custom-select small text-nowrap" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window" style={{ fontSize: ".9375rem" }}>
                                SDGs
                            </a>
                            <div className="dropdown-menu">
                                <form name="13" method="post" data-col={5} className="dataTableFilter table-filter px-5 pt-5 pb-3" style={{ maxHeight: 300, overflowY: "auto" }}>
                                    <div id="challenges_filters_13" data-col={5} className="dataTableFilter table-filter">
                                        
                                            <input type="search" className="form-control form-control-md searchControl mb-3" placeholder="Search" title="Type in a name" />
                                            <div className="btn-group w-100 mb-3" role="group">
                                                <a className="btn btn-sm btn-default w-50 checkControl">Select all</a>
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
                </div>
               
            </div>
        </div>
    );
};
