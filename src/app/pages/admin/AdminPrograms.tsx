import React from "react";
import { useEffect } from "react";
import { Layout } from "../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { ChallengesTable } from "../../../../public/utils/tables/challengesTable.js";

export const AdminPrograms = () => {
    useEffect(() => {
        ChallengesTable();
    }, []);
    return (
        <Layout sideBar="Admin" showShortcutbar={false}>
            <AppContent sections="transparent">
                <div className="row">
                    <div className="col-12">
                        <div className="application-section dataTableContainer dataTableLargeHeight loaded" id="challengesTable">
                            <div className="showable-datatable-filter ">
                                <div className="card-body bg-primary dataTableBulkWrapper mb-3 d-none" data-mode="select">
                                    <div className="level">
                                        <div className="level-left">
                                            <div className="level-item selectMode">
                                                <div className="h4 text-white m-none">
                                                    <span className="tableSelectedCount" /> selected element(s){" "}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="level-right">
                                            <div className="level-item dropdown">
                                                <button className="btn btn-default dropdown-toggle" id="dropdownBulkActions" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    {" "}
                                                    Actions{" "}
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownBulkActions">
                                                    <span className="cursorLink dropdown-item bulkActionLink" data-url="/organization/challenges/export">
                                                        Export
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="datatableFiltersWrapper ">
                                    <div className="d-flex flex-column flex-lg-row align-items-lg-start pb-5 justify-content-lg-between">
                                        <div className="d-flex flex-column flex-lg-row scroll-h mr-lg-8 mr-0">
                                            <div className="mr-lg-3 mr-0 mb-3 mb-lg-0">
                                                <div className="dropdown position-static mb-3">
                                                    <a className="btn btn-lg btn-default custom-select small text-nowrap" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window" style={{ fontSize: ".9375rem" }}>
                                                        Status
                                                    </a>
                                                    <div className="dropdown-menu">
                                                        <form name="challenges_status" method="post" data-col={17} className="dataTableFilter table-filter px-5 pt-5 pb-3" style={{ maxHeight: 300, overflowY: "auto" }}>
                                                            <div id="challenges_filters_challenges_status" data-col={17} className="dataTableFilter table-filter">
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
                                            <div className="mr-lg-3 mr-0 mb-3 mb-lg-0">
                                                <div className="dropdown position-static mb-3">
                                                    <a className="btn btn-lg btn-default custom-select small text-nowrap" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window" style={{ fontSize: ".9375rem" }}>
                                                        Impact
                                                    </a>
                                                    <div className="dropdown-menu">
                                                        <form name="1" method="post" data-col={3} className="dataTableFilter table-filter px-5 pt-5 pb-3" style={{ maxHeight: 300, overflowY: "auto" }}>
                                                            <div id="challenges_filters_1" data-col={3} className="dataTableFilter table-filter">
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
                                            <div className="mr-lg-3 mr-0 mb-3 mb-lg-0">
                                                <form name="organization" method="post" className="d-flex">
                                                    <select id="chFilters_organization" name="chFilters[organization]" className="flex-fill mb-3 text-center custom-select form-control has-default  text-nowrap">
                                                        <option value="_default">Toutes les organisations</option>
                                                        <option value={2}>Schoolab</option>
                                                        <option value={4}>MoHo</option>
                                                        <option value={12}>Ambassade de France à Madagascar</option>
                                                        <option value={21}>Shibuya QWS</option>
                                                        <option value={25}>La Scène</option>
                                                        <option value={27}>Ravinala Airports</option>
                                                        <option value={29}>Rungis &amp; Co</option>
                                                        <option value={31}>Université Paris Cité</option>
                                                        <option value={32}>GEFE</option>
                                                        <option value={34}>Refactory</option>
                                                        <option value={37}>Le Perqo</option>
                                                        <option value={38}>Grand Prix Diversité &amp; Inclusion</option>
                                                        <option value={39}>French Event Booster</option>
                                                        <option value={41}>SIREHNA Aquabot</option>
                                                        <option value={42}>RaiseLab</option>
                                                        <option value={43}>ESFAM</option>
                                                        <option value={44}>L'Institut français</option>
                                                        <option value={45}>GIZ</option>
                                                        <option value={46}>Better Than Plastic</option>
                                                        <option value={49}>Les Mousquetaires</option>
                                                        <option value={50}>Lyreco Pioneers</option>
                                                        <option value={51}>CA Lead'up</option>
                                                        <option value={52}>INNO FOR HEROES</option>
                                                        <option value={53}>CFTR</option>
                                                        <option value={57}>Hectar</option>
                                                        <option value={58}>Incubateur Station numixs</option>
                                                        <option value={59}>Système U</option>
                                                        <option value={61}>KEDGE BS</option>
                                                        <option value={62}>JCDecaux</option>
                                                        <option value={63}>TDF</option>
                                                        <option value={73}>EIC Tech 2 Market virtual training space</option>
                                                    </select>
                                                </form>
                                            </div>
                                            <div className="mr-lg-3 mr-0 mb-3 mb-lg-0">
                                                <div className="dropdown position-static mb-3">
                                                    <a className="btn btn-lg btn-default custom-select small text-nowrap" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window" style={{ fontSize: ".9375rem" }}>
                                                        Verticals
                                                    </a>
                                                    <div className="dropdown-menu">
                                                        <form name="9" method="post" data-col={4} className="dataTableFilter table-filter px-5 pt-5 pb-3" style={{ maxHeight: 300, overflowY: "auto" }}>
                                                            <div id="challenges_filters_9" data-col={4} className="dataTableFilter table-filter">
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
                                            <div className="mr-lg-3 mr-0 mb-3 mb-lg-0">
                                                <div className="dropdown position-static mb-3">
                                                    <a className="btn btn-lg btn-default custom-select small text-nowrap" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window" style={{ fontSize: ".9375rem" }}>
                                                        SDGs
                                                    </a>
                                                    <div className="dropdown-menu">
                                                        <form name="13" method="post" data-col={5} className="dataTableFilter table-filter px-5 pt-5 pb-3" style={{ maxHeight: 300, overflowY: "auto" }}>
                                                            <div id="challenges_filters_13" data-col={5} className="dataTableFilter table-filter">
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
                                            <div className="mr-lg-3 mr-0 mb-3 mb-lg-0">
                                                <div className="dropdown position-static mb-3">
                                                    <a className="btn btn-lg btn-default custom-select small text-nowrap" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window" style={{ fontSize: ".9375rem" }}>
                                                        Ecosystems
                                                    </a>
                                                    <div className="dropdown-menu">
                                                        <form name="31" method="post" data-col={6} className="dataTableFilter table-filter px-5 pt-5 pb-3" style={{ maxHeight: 300, overflowY: "auto" }}>
                                                            <div id="challenges_filters_31" data-col={6} className="dataTableFilter table-filter">
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
                                            <div className="mr-lg-3 mr-0 mb-3 mb-lg-0">
                                                <div className="dropdown position-static mb-3">
                                                    <a className="btn btn-lg btn-default custom-select small text-nowrap" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window" style={{ fontSize: ".9375rem" }}>
                                                        Use case
                                                    </a>
                                                    <div className="dropdown-menu">
                                                        <form name="36" method="post" data-col={7} className="dataTableFilter table-filter px-5 pt-5 pb-3" style={{ maxHeight: 300, overflowY: "auto" }}>
                                                            <div id="challenges_filters_36" data-col={7} className="dataTableFilter table-filter">
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
                                            <div className="mr-lg-3 mr-0 mb-3 mb-lg-0">
                                                <div className="dropdown position-static mb-3">
                                                    <a className="btn btn-lg btn-default custom-select small text-nowrap" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window" style={{ fontSize: ".9375rem" }}>
                                                        Capability
                                                    </a>
                                                    <div className="dropdown-menu">
                                                        <form name="46" method="post" data-col={8} className="dataTableFilter table-filter px-5 pt-5 pb-3" style={{ maxHeight: 300, overflowY: "auto" }}>
                                                            <div id="challenges_filters_46" data-col={8} className="dataTableFilter table-filter">
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
                                            <div className="mr-lg-3 mr-0 mb-3 mb-lg-0">
                                                <div className="dropdown position-static mb-3">
                                                    <a className="btn btn-lg btn-default custom-select small text-nowrap" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window" style={{ fontSize: ".9375rem" }}>
                                                        Business line
                                                    </a>
                                                    <div className="dropdown-menu">
                                                        <form name="51" method="post" data-col={9} className="dataTableFilter table-filter px-5 pt-5 pb-3" style={{ maxHeight: 300, overflowY: "auto" }}>
                                                            <div id="challenges_filters_51" data-col={9} className="dataTableFilter table-filter">
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
                                            <div className="mr-lg-3 mr-0 mb-3 mb-lg-0">
                                                <div className="dropdown position-static mb-3">
                                                    <a className="btn btn-lg btn-default custom-select small text-nowrap" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window" style={{ fontSize: ".9375rem" }}>
                                                        Owner
                                                    </a>
                                                    <div className="dropdown-menu">
                                                        <form name="form_value_owner" method="post" data-col={11} className="dataTableFilter table-filter px-5 pt-5 pb-3" style={{ maxHeight: 300, overflowY: "auto" }}>
                                                            <div id="challenges_filters_form_value_owner" data-col={11} className="dataTableFilter table-filter">
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
                                        </div>
                                        <div className="d-flex flex-column flex-lg-row">
                                            <div id="sg-datatables-challenges_list_datatable_filter" className="dataTables_filter mr-lg-3 mr-0 mb-5 mb-lg-0">
                                                <input type="search" className="form-control form-control-md" placeholder="Search" aria-controls="sg-datatables-challenges_list_datatable" style={{ minWidth: 150, width: "100%" }} />
                                            </div>
                                            <div className="mr-lg-3 mr-0 mb-5 mb-lg-0">
                                                <a className="btn btn-default btn-block btn-icon btn-lg text-nowrap" href="/organization/challenges/export">
                                                    <span className="icon icon-cloud-download" />
                                                    <span>Export</span>
                                                </a>
                                            </div>
                                            <div className="mb-5 mb-lg-0">
                                                <a id="btn-new-challenge" className="btn btn-primary btn-icon btn-lg btn-block text-nowrap" data-form-url="/organization/challenge/modal/new" href="#">
                                                    <span className="icon icon-plus-circle" />
                                                    <span>Add program</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="sg-datatables-challenges_list_datatable_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <table id="sg-datatables-challenges_list_datatable" className="table responsive nowrap dataTable no-footer" cellSpacing={0} width="100%" role="grid" aria-describedby="sg-datatables-challenges_list_datatable_info" style={{ width: "100%" }}>
                                                <thead>
                                                    <tr role="row">
                                                        <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: 40 }} aria-label="">
                                                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                                                <input className="custom-control-input selectAllBulkSelectors" id="selectAll" type="checkbox" name="select" />
                                                                <label className="custom-control-label" htmlFor="selectAll" />
                                                            </div>
                                                        </th>
                                                        <th className="sorting" tabIndex={0} aria-controls="sg-datatables-challenges_list_datatable" rowSpan={1} colSpan={1} style={{ width: "415.625px" }} aria-label="Name: activate to sort column ascending">
                                                            Name
                                                        </th>
                                                        <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: 100 }} aria-label="Plan">
                                                            Plan
                                                        </th>
                                                        <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: "150.625px" }} aria-label="Impact">
                                                            Impact
                                                        </th>
                                                        <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: "216.172px" }} aria-label="Verticals">
                                                            Verticals
                                                        </th>
                                                        <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: "432.953px" }} aria-label="SDGs">
                                                            SDGs
                                                        </th>
                                                        <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: "305.359px" }} aria-label="Ecosystems">
                                                            Ecosystems
                                                        </th>
                                                        <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: "155.609px" }} aria-label="Use case">
                                                            Use case
                                                        </th>
                                                        <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: "155.344px" }} aria-label="Capability">
                                                            Capability
                                                        </th>
                                                        <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: "149.859px" }} aria-label="Business line">
                                                            Business line
                                                        </th>
                                                        <th className="sorting" tabIndex={0} aria-controls="sg-datatables-challenges_list_datatable" rowSpan={1} colSpan={1} style={{ width: "214.203px" }} aria-label="Customer organization name: activate to sort column ascending">
                                                            Customer organization name
                                                        </th>
                                                        <th className="sorting" tabIndex={0} aria-controls="sg-datatables-challenges_list_datatable" rowSpan={1} colSpan={1} style={{ width: "148.266px" }} aria-label="Owner: activate to sort column ascending">
                                                            Owner
                                                        </th>
                                                        <th className="sorting" tabIndex={0} aria-controls="sg-datatables-challenges_list_datatable" rowSpan={1} colSpan={1} style={{ width: "61.0469px" }} aria-label="Projects: activate to sort column ascending">
                                                            Projects
                                                        </th>
                                                        <th className="sorting" tabIndex={0} aria-controls="sg-datatables-challenges_list_datatable" rowSpan={1} colSpan={1} style={{ width: "73.5156px" }} aria-label="Managers: activate to sort column ascending">
                                                            Managers
                                                        </th>
                                                        <th className="sorting" tabIndex={0} aria-controls="sg-datatables-challenges_list_datatable" rowSpan={1} colSpan={1} style={{ width: "64.1094px" }} aria-label="Start: activate to sort column ascending">
                                                            Start
                                                        </th>
                                                        <th className="sorting" tabIndex={0} aria-controls="sg-datatables-challenges_list_datatable" rowSpan={1} colSpan={1} style={{ width: "66.4219px" }} aria-label="End: activate to sort column ascending">
                                                            End
                                                        </th>
                                                        <th className="sorting_desc" tabIndex={0} aria-controls="sg-datatables-challenges_list_datatable" rowSpan={1} colSpan={1} style={{ width: "79.5156px" }} aria-label="Created At: activate to sort column ascending" aria-sort="descending">
                                                            Created At
                                                        </th>
                                                        <th className="text-center sorting_disabled" rowSpan={1} colSpan={1} style={{ width: "55.8594px" }} aria-label="Actions">
                                                            Actions
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr role="row" className="odd">
                                                        <td className="table-checkbox">
                                                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                                                <input className="bulkActionSelector custom-control-input" id="447" defaultValue="447" type="checkbox" />
                                                                <label className="custom-control-label" htmlFor="447" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold is-primary" href="/manage/program/447/data">
                                                                Executive Master - Session francophone mai 2024
                                                            </a>
                                                            <br />
                                                            <span className="small text-muted">Schoolab</span>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <select name="plan" className="custom-select" style={{ minWidth: 100 }} data-url="/rest/challenge/447/update-plan">
                                                                <option value="data">Data</option>
                                                                <option value="default">Native</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Impact not obvious" className="categoryElement badge is-pill " data-id={3}>
                                                                {" "}
                                                                Impact not obv…{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td>
                                                            {" "}
                                                            <span title="4 - Quality education" className="categoryElement badge is-pill " data-id={17}>
                                                                {" "}
                                                                4 - Quality ed…{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Corporate" className="categoryElement badge is-pill " data-id={34}>
                                                                {" "}
                                                                Corporate{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Learning Workshop" className="categoryElement badge is-pill " data-id={42}>
                                                                {" "}
                                                                Learning Works…{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Innovation" className="categoryElement badge is-pill " data-id={49}>
                                                                {" "}
                                                                Innovation{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Public Administration and Government Services" className="categoryElement badge is-pill " data-id={57}>
                                                                {" "}
                                                                Public Adminis…{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td />
                                                        <td>Marie-Capucine Goube</td>
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/447/manage/projects">
                                                                0
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/447/manage/participants/list">
                                                                1
                                                            </a>
                                                        </td>
                                                        <td> 05/21/2024 </td>
                                                        <td> 05/23/2024 </td>
                                                        <td className="sorting_1"> 10/30/2023 </td>
                                                        <td className=" text-center">
                                                            <div className="dropdown-container">
                                                                <div className="d-inline-flex justify-content-end dropdown">
                                                                    <a className="btn btn-lg btn-transparent btn-icon text-muted" data-display="static" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">
                                                                        <span className="icon icon-options" />
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
                                                                        <a href="/manage/program/447/data" id="organization-manage-applications-447" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Data</div>
                                                                        </a>
                                                                        <a href="/program/447/manage/analytics" id="manage-challenge-447" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Manage</div>
                                                                        </a>
                                                                        <a href="/program/447/details" id="workspace-challenge-447" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Workspace</div>
                                                                        </a>
                                                                        <div className="dropdown-divider">
                                                                            <a href="" className="d-none">
                                                                                {" "}
                                                                                null{" "}
                                                                            </a>
                                                                        </div>
                                                                        <a href="" id="edit-challenge-447" data-target="#loadingContentModal" data-toggle="modal" data-url="/organization/challenge/447/modal/update" data-action="edit-data" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Edit</div>
                                                                        </a>
                                                                        <a href="" data-target="#copyChallengeModal" data-toggle="modal" data-url="/rest/challenge/447/copy" id="copy-challenge-447" data-modal-title="Duplicate: Executive Master - Session francophone mai 2024" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Duplicate</div>
                                                                        </a>
                                                                        <a href="" id="delete-challenge-447" className="dropdown-item is-danger rowAction" data-url="/rest/challenge/447/delete" data-confirm-modal="challengeDeleteModal">
                                                                            <div className="dropdown-item--label">Delete</div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr role="row" className="even">
                                                        <td className="table-checkbox">
                                                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                                                <input className="bulkActionSelector custom-control-input" id="446" defaultValue="446" type="checkbox" />
                                                                <label className="custom-control-label" htmlFor="446" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold is-primary" href="/manage/program/446/data">
                                                                Disney - Programme Intrap - Tous acteur du business S2
                                                            </a>
                                                            <br />
                                                            <span className="small text-muted">Schoolab</span>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <select name="plan" className="custom-select" style={{ minWidth: 100 }} data-url="/rest/challenge/446/update-plan">
                                                                <option value="data">Data</option>
                                                                <option value="default">Native</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Impact not obvious" className="categoryElement badge is-pill " data-id={3}>
                                                                {" "}
                                                                Impact not obv…{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td>
                                                            {" "}
                                                            <span title="4 - Quality education" className="categoryElement badge is-pill " data-id={17}>
                                                                {" "}
                                                                4 - Quality ed…{" "}
                                                            </span>{" "}
                                                            <span title="8 - Decent work and economic growth" className="categoryElement badge is-pill " data-id={21}>
                                                                {" "}
                                                                8 - Decent wor…{" "}
                                                            </span>{" "}
                                                            <span title="9 - Industry, innovation and infrastructure" className="categoryElement badge is-pill " data-id={22}>
                                                                {" "}
                                                                9 - Industry,…{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Corporate" className="categoryElement badge is-pill " data-id={34}>
                                                                {" "}
                                                                Corporate{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Incubator" className="categoryElement badge is-pill " data-id={37}>
                                                                {" "}
                                                                Incubator{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Innovation" className="categoryElement badge is-pill " data-id={49}>
                                                                {" "}
                                                                Innovation{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td />
                                                        <td>Clara Missoffe</td>
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/446/manage/projects">
                                                                0
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/446/manage/participants/list">
                                                                1
                                                            </a>
                                                        </td>
                                                        <td> 02/27/2024 </td>
                                                        <td> 04/05/2024 </td>
                                                        <td className="sorting_1"> 10/30/2023 </td>
                                                        <td className=" text-center">
                                                            <div className="dropdown-container">
                                                                <div className="d-inline-flex justify-content-end dropdown">
                                                                    <a className="btn btn-lg btn-transparent btn-icon text-muted" data-display="static" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">
                                                                        <span className="icon icon-options" />
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
                                                                        <a href="/manage/program/446/data" id="organization-manage-applications-446" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Data</div>
                                                                        </a>
                                                                        <a href="/program/446/manage/analytics" id="manage-challenge-446" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Manage</div>
                                                                        </a>
                                                                        <a href="/program/446/details" id="workspace-challenge-446" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Workspace</div>
                                                                        </a>
                                                                        <div className="dropdown-divider">
                                                                            <a href="" className="d-none">
                                                                                {" "}
                                                                                null{" "}
                                                                            </a>
                                                                        </div>
                                                                        <a href="" id="edit-challenge-446" data-target="#loadingContentModal" data-toggle="modal" data-url="/organization/challenge/446/modal/update" data-action="edit-data" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Edit</div>
                                                                        </a>
                                                                        <a href="" data-target="#copyChallengeModal" data-toggle="modal" data-url="/rest/challenge/446/copy" id="copy-challenge-446" data-modal-title="Duplicate: Disney - Programme Intrap - Tous acteur du business S2" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Duplicate</div>
                                                                        </a>
                                                                        <a href="" id="delete-challenge-446" className="dropdown-item is-danger rowAction" data-url="/rest/challenge/446/delete" data-confirm-modal="challengeDeleteModal">
                                                                            <div className="dropdown-item--label">Delete</div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr role="row" className="odd">
                                                        <td className="table-checkbox">
                                                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                                                <input className="bulkActionSelector custom-control-input" id="379" defaultValue="379" type="checkbox" />
                                                                <label className="custom-control-label" htmlFor="379" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold is-primary" href="/manage/program/379/data">
                                                                Programme transverse
                                                            </a>
                                                            <br />
                                                            <span className="small text-muted">Schoolab</span>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <select name="plan" className="custom-select" style={{ minWidth: 100 }} data-url="/rest/challenge/379/update-plan">
                                                                <option value="data">Data</option>
                                                                <option value="default">Native</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Impact not obvious" className="categoryElement badge is-pill " data-id={3}>
                                                                {" "}
                                                                Impact not obv…{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="DEI" className="categoryElement badge is-pill " data-id={12}>
                                                                {" "}
                                                                DEI{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td>
                                                            {" "}
                                                            <span title="Startups" className="categoryElement badge is-pill " data-id={33}>
                                                                {" "}
                                                                Startups{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Incubator" className="categoryElement badge is-pill " data-id={37}>
                                                                {" "}
                                                                Incubator{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Entrepreneurship" className="categoryElement badge is-pill " data-id={48}>
                                                                {" "}
                                                                Entrepreneursh…{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/379/manage/projects">
                                                                0
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/379/manage/participants/list">
                                                                12
                                                            </a>
                                                        </td>
                                                        <td />
                                                        <td />
                                                        <td className="sorting_1"> 10/17/2023 </td>
                                                        <td className=" text-center">
                                                            <div className="dropdown-container">
                                                                <div className="d-inline-flex justify-content-end dropdown">
                                                                    <a className="btn btn-lg btn-transparent btn-icon text-muted" data-display="static" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">
                                                                        <span className="icon icon-options" />
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
                                                                        <a href="/manage/program/379/data" id="organization-manage-applications-379" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Data</div>
                                                                        </a>
                                                                        <a href="/program/379/manage/analytics" id="manage-challenge-379" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Manage</div>
                                                                        </a>
                                                                        <a href="/program/379/details" id="workspace-challenge-379" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Workspace</div>
                                                                        </a>
                                                                        <div className="dropdown-divider">
                                                                            <a href="" className="d-none">
                                                                                {" "}
                                                                                null{" "}
                                                                            </a>
                                                                        </div>
                                                                        <a href="" id="edit-challenge-379" data-target="#loadingContentModal" data-toggle="modal" data-url="/organization/challenge/379/modal/update" data-action="edit-data" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Edit</div>
                                                                        </a>
                                                                        <a href="" data-target="#copyChallengeModal" data-toggle="modal" data-url="/rest/challenge/379/copy" id="copy-challenge-379" data-modal-title="Duplicate: Programme transverse" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Duplicate</div>
                                                                        </a>
                                                                        <a href="" id="delete-challenge-379" className="dropdown-item is-danger rowAction" data-url="/rest/challenge/379/delete" data-confirm-modal="challengeDeleteModal">
                                                                            <div className="dropdown-item--label">Delete</div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr role="row" className="even">
                                                        <td className="table-checkbox">
                                                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                                                <input className="bulkActionSelector custom-control-input" id="272" defaultValue="272" type="checkbox" />
                                                                <label className="custom-control-label" htmlFor="272" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold is-primary" href="/manage/program/272/data">
                                                                We Design a Brighter Future - CAPUCINE
                                                            </a>
                                                            <br />
                                                            <span className="small text-muted">Schoolab</span>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <select name="plan" className="custom-select" style={{ minWidth: 100 }} data-url="/rest/challenge/272/update-plan">
                                                                <option value="data">Data</option>
                                                                <option value="default">Native</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Impact native" className="categoryElement badge is-pill " data-id={5}>
                                                                {" "}
                                                                Impact native{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Plastic" className="categoryElement badge is-pill " data-id={10}>
                                                                {" "}
                                                                Plastic{" "}
                                                            </span>{" "}
                                                            <span title="Food" className="categoryElement badge is-pill " data-id={11}>
                                                                {" "}
                                                                Food{" "}
                                                            </span>{" "}
                                                            <span title="DEI" className="categoryElement badge is-pill " data-id={12}>
                                                                {" "}
                                                                DEI{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td>
                                                            {" "}
                                                            <span title="Corporate" className="categoryElement badge is-pill " data-id={34}>
                                                                {" "}
                                                                Corporate{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Incubator" className="categoryElement badge is-pill " data-id={37}>
                                                                {" "}
                                                                Incubator{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Entrepreneurship" className="categoryElement badge is-pill " data-id={48}>
                                                                {" "}
                                                                Entrepreneursh…{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td />
                                                        <td>Capucine Cedoz</td>
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/272/manage/projects">
                                                                1
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/272/manage/participants/list">
                                                                1
                                                            </a>
                                                        </td>
                                                        <td />
                                                        <td />
                                                        <td className="sorting_1"> 09/15/2023 </td>
                                                        <td className=" text-center">
                                                            <div className="dropdown-container">
                                                                <div className="d-inline-flex justify-content-end dropdown">
                                                                    <a className="btn btn-lg btn-transparent btn-icon text-muted" data-display="static" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">
                                                                        <span className="icon icon-options" />
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
                                                                        <a href="/manage/program/272/data" id="organization-manage-applications-272" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Data</div>
                                                                        </a>
                                                                        <a href="/program/272/manage/analytics" id="manage-challenge-272" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Manage</div>
                                                                        </a>
                                                                        <a href="/program/272/details" id="workspace-challenge-272" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Workspace</div>
                                                                        </a>
                                                                        <div className="dropdown-divider">
                                                                            <a href="" className="d-none">
                                                                                {" "}
                                                                                null{" "}
                                                                            </a>
                                                                        </div>
                                                                        <a href="" id="edit-challenge-272" data-target="#loadingContentModal" data-toggle="modal" data-url="/organization/challenge/272/modal/update" data-action="edit-data" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Edit</div>
                                                                        </a>
                                                                        <a href="" data-target="#copyChallengeModal" data-toggle="modal" data-url="/rest/challenge/272/copy" id="copy-challenge-272" data-modal-title="Duplicate: We Design a Brighter Future - CAPUCINE" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Duplicate</div>
                                                                        </a>
                                                                        <a href="" id="delete-challenge-272" className="dropdown-item is-danger rowAction" data-url="/rest/challenge/272/delete" data-confirm-modal="challengeDeleteModal">
                                                                            <div className="dropdown-item--label">Delete</div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr role="row" className="odd">
                                                        <td className="table-checkbox">
                                                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                                                <input className="bulkActionSelector custom-control-input" id="270" defaultValue="270" type="checkbox" />
                                                                <label className="custom-control-label" htmlFor="270" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold is-primary" href="/manage/program/270/data">
                                                                Design Fiction
                                                            </a>
                                                            <br />
                                                            <span className="small text-muted">Schoolab</span>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <select name="plan" className="custom-select" style={{ minWidth: 100 }} data-url="/rest/challenge/270/update-plan">
                                                                <option value="data">Data</option>
                                                                <option value="default">Native</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Impact push" className="categoryElement badge is-pill " data-id={4}>
                                                                {" "}
                                                                Impact push{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>
                                                            {" "}
                                                            <span title="Corporate" className="categoryElement badge is-pill " data-id={34}>
                                                                {" "}
                                                                Corporate{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Innovation" className="categoryElement badge is-pill " data-id={44}>
                                                                {" "}
                                                                Innovation{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Innovation" className="categoryElement badge is-pill " data-id={49}>
                                                                {" "}
                                                                Innovation{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td />
                                                        <td>Julien Fayet</td>
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/270/manage/projects">
                                                                1
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/270/manage/participants/list">
                                                                9
                                                            </a>
                                                        </td>
                                                        <td />
                                                        <td />
                                                        <td className="sorting_1"> 09/13/2023 </td>
                                                        <td className=" text-center">
                                                            <div className="dropdown-container">
                                                                <div className="d-inline-flex justify-content-end dropdown">
                                                                    <a className="btn btn-lg btn-transparent btn-icon text-muted" data-display="static" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">
                                                                        <span className="icon icon-options" />
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
                                                                        <a href="/manage/program/270/data" id="organization-manage-applications-270" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Data</div>
                                                                        </a>
                                                                        <a href="/program/270/manage/analytics" id="manage-challenge-270" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Manage</div>
                                                                        </a>
                                                                        <a href="/program/270/details" id="workspace-challenge-270" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Workspace</div>
                                                                        </a>
                                                                        <div className="dropdown-divider">
                                                                            <a href="" className="d-none">
                                                                                {" "}
                                                                                null{" "}
                                                                            </a>
                                                                        </div>
                                                                        <a href="" id="edit-challenge-270" data-target="#loadingContentModal" data-toggle="modal" data-url="/organization/challenge/270/modal/update" data-action="edit-data" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Edit</div>
                                                                        </a>
                                                                        <a href="" data-target="#copyChallengeModal" data-toggle="modal" data-url="/rest/challenge/270/copy" id="copy-challenge-270" data-modal-title="Duplicate: Design Fiction" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Duplicate</div>
                                                                        </a>
                                                                        <a href="" id="delete-challenge-270" className="dropdown-item is-danger rowAction" data-url="/rest/challenge/270/delete" data-confirm-modal="challengeDeleteModal">
                                                                            <div className="dropdown-item--label">Delete</div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr role="row" className="even">
                                                        <td className="table-checkbox">
                                                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                                                <input className="bulkActionSelector custom-control-input" id="268" defaultValue="268" type="checkbox" />
                                                                <label className="custom-control-label" htmlFor="268" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold is-primary" href="/manage/program/268/data">
                                                                Template Inject - Incubateur
                                                            </a>
                                                            <br />
                                                            <span className="small text-muted">Schoolab</span>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <select name="plan" className="custom-select" style={{ minWidth: 100 }} data-url="/rest/challenge/268/update-plan">
                                                                <option value="data">Data</option>
                                                                <option value="default">Native</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="No impact" className="categoryElement badge is-pill " data-id={2}>
                                                                {" "}
                                                                No impact{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>
                                                            {" "}
                                                            <span title="Startups" className="categoryElement badge is-pill " data-id={33}>
                                                                {" "}
                                                                Startups{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Incubator" className="categoryElement badge is-pill " data-id={37}>
                                                                {" "}
                                                                Incubator{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Entrepreneurship" className="categoryElement badge is-pill " data-id={48}>
                                                                {" "}
                                                                Entrepreneursh…{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/268/manage/projects">
                                                                0
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/268/manage/participants/list">
                                                                18
                                                            </a>
                                                        </td>
                                                        <td />
                                                        <td />
                                                        <td className="sorting_1"> 09/11/2023 </td>
                                                        <td className=" text-center">
                                                            <div className="dropdown-container">
                                                                <div className="d-inline-flex justify-content-end dropdown">
                                                                    <a className="btn btn-lg btn-transparent btn-icon text-muted" data-display="static" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">
                                                                        <span className="icon icon-options" />
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
                                                                        <a href="/manage/program/268/data" id="organization-manage-applications-268" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Data</div>
                                                                        </a>
                                                                        <a href="/program/268/manage/analytics" id="manage-challenge-268" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Manage</div>
                                                                        </a>
                                                                        <a href="/program/268/details" id="workspace-challenge-268" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Workspace</div>
                                                                        </a>
                                                                        <div className="dropdown-divider">
                                                                            <a href="" className="d-none">
                                                                                {" "}
                                                                                null{" "}
                                                                            </a>
                                                                        </div>
                                                                        <a href="" id="edit-challenge-268" data-target="#loadingContentModal" data-toggle="modal" data-url="/organization/challenge/268/modal/update" data-action="edit-data" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Edit</div>
                                                                        </a>
                                                                        <a href="" data-target="#copyChallengeModal" data-toggle="modal" data-url="/rest/challenge/268/copy" id="copy-challenge-268" data-modal-title="Duplicate: Template Inject - Incubateur" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Duplicate</div>
                                                                        </a>
                                                                        <a href="" id="delete-challenge-268" className="dropdown-item is-danger rowAction" data-url="/rest/challenge/268/delete" data-confirm-modal="challengeDeleteModal">
                                                                            <div className="dropdown-item--label">Delete</div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr role="row" className="odd">
                                                        <td className="table-checkbox">
                                                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                                                <input className="bulkActionSelector custom-control-input" id="265" defaultValue="265" type="checkbox" />
                                                                <label className="custom-control-label" htmlFor="265" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold is-primary" href="/manage/program/265/data">
                                                                Basics impacts (template)
                                                            </a>
                                                            <br />
                                                            <span className="small text-muted">Schoolab</span>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <select name="plan" className="custom-select" style={{ minWidth: 100 }} data-url="/rest/challenge/265/update-plan">
                                                                <option value="data">Data</option>
                                                                <option value="default">Native</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="No impact" className="categoryElement badge is-pill " data-id={2}>
                                                                {" "}
                                                                No impact{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>
                                                            {" "}
                                                            <span title="Corporate" className="categoryElement badge is-pill " data-id={34}>
                                                                {" "}
                                                                Corporate{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Incubator" className="categoryElement badge is-pill " data-id={37}>
                                                                {" "}
                                                                Incubator{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Entrepreneurship" className="categoryElement badge is-pill " data-id={48}>
                                                                {" "}
                                                                Entrepreneursh…{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/265/manage/projects">
                                                                0
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/265/manage/participants/list">
                                                                0
                                                            </a>
                                                        </td>
                                                        <td />
                                                        <td />
                                                        <td className="sorting_1"> 08/28/2023 </td>
                                                        <td className=" text-center">
                                                            <div className="dropdown-container">
                                                                <div className="d-inline-flex justify-content-end dropdown">
                                                                    <a className="btn btn-lg btn-transparent btn-icon text-muted" data-display="static" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">
                                                                        <span className="icon icon-options" />
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
                                                                        <a href="/manage/program/265/data" id="organization-manage-applications-265" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Data</div>
                                                                        </a>
                                                                        <a href="/program/265/manage/analytics" id="manage-challenge-265" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Manage</div>
                                                                        </a>
                                                                        <a href="/program/265/details" id="workspace-challenge-265" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Workspace</div>
                                                                        </a>
                                                                        <div className="dropdown-divider">
                                                                            <a href="" className="d-none">
                                                                                {" "}
                                                                                null{" "}
                                                                            </a>
                                                                        </div>
                                                                        <a href="" id="edit-challenge-265" data-target="#loadingContentModal" data-toggle="modal" data-url="/organization/challenge/265/modal/update" data-action="edit-data" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Edit</div>
                                                                        </a>
                                                                        <a href="" data-target="#copyChallengeModal" data-toggle="modal" data-url="/rest/challenge/265/copy" id="copy-challenge-265" data-modal-title="Duplicate: Basics impacts (template)" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Duplicate</div>
                                                                        </a>
                                                                        <a href="" id="delete-challenge-265" className="dropdown-item is-danger rowAction" data-url="/rest/challenge/265/delete" data-confirm-modal="challengeDeleteModal">
                                                                            <div className="dropdown-item--label">Delete</div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr role="row" className="even">
                                                        <td className="table-checkbox">
                                                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                                                <input className="bulkActionSelector custom-control-input" id="202" defaultValue="202" type="checkbox" />
                                                                <label className="custom-control-label" htmlFor="202" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold is-primary" href="/manage/program/202/data">
                                                                RATP accélérateur
                                                            </a>
                                                            <br />
                                                            <span className="small text-muted">Schoolab</span>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <select name="plan" className="custom-select" style={{ minWidth: 100 }} data-url="/rest/challenge/202/update-plan">
                                                                <option value="data">Data</option>
                                                                <option value="default">Native</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Impact native" className="categoryElement badge is-pill " data-id={5}>
                                                                {" "}
                                                                Impact native{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>
                                                            {" "}
                                                            <span title="Startups" className="categoryElement badge is-pill " data-id={33}>
                                                                {" "}
                                                                Startups{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Incubator" className="categoryElement badge is-pill " data-id={37}>
                                                                {" "}
                                                                Incubator{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Entrepreneurship" className="categoryElement badge is-pill " data-id={48}>
                                                                {" "}
                                                                Entrepreneursh…{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td>Ratp Holding</td>
                                                        <td>Marine Martinez</td>
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/202/manage/projects">
                                                                5
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/202/manage/participants/list">
                                                                4
                                                            </a>
                                                        </td>
                                                        <td />
                                                        <td />
                                                        <td className="sorting_1"> 07/20/2023 </td>
                                                        <td className=" text-center">
                                                            <div className="dropdown-container">
                                                                <div className="d-inline-flex justify-content-end dropdown">
                                                                    <a className="btn btn-lg btn-transparent btn-icon text-muted" data-display="static" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">
                                                                        <span className="icon icon-options" />
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
                                                                        <a href="/manage/program/202/data" id="organization-manage-applications-202" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Data</div>
                                                                        </a>
                                                                        <a href="/program/202/manage/analytics" id="manage-challenge-202" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Manage</div>
                                                                        </a>
                                                                        <a href="/program/202/details" id="workspace-challenge-202" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Workspace</div>
                                                                        </a>
                                                                        <div className="dropdown-divider">
                                                                            <a href="" className="d-none">
                                                                                {" "}
                                                                                null{" "}
                                                                            </a>
                                                                        </div>
                                                                        <a href="" id="edit-challenge-202" data-target="#loadingContentModal" data-toggle="modal" data-url="/organization/challenge/202/modal/update" data-action="edit-data" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Edit</div>
                                                                        </a>
                                                                        <a href="" data-target="#copyChallengeModal" data-toggle="modal" data-url="/rest/challenge/202/copy" id="copy-challenge-202" data-modal-title="Duplicate: RATP accélérateur" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Duplicate</div>
                                                                        </a>
                                                                        <a href="" id="delete-challenge-202" className="dropdown-item is-danger rowAction" data-url="/rest/challenge/202/delete" data-confirm-modal="challengeDeleteModal">
                                                                            <div className="dropdown-item--label">Delete</div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr role="row" className="odd">
                                                        <td className="table-checkbox">
                                                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                                                <input className="bulkActionSelector custom-control-input" id="192" defaultValue="192" type="checkbox" />
                                                                <label className="custom-control-label" htmlFor="192" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold is-primary" href="/manage/program/192/data">
                                                                Schoolab - Saint Lazare
                                                            </a>
                                                            <br />
                                                            <span className="small text-muted">Schoolab</span>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <select name="plan" className="custom-select" style={{ minWidth: 100 }} data-url="/rest/challenge/192/update-plan">
                                                                <option value="data">Data</option>
                                                                <option value="default">Native</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="No impact" className="categoryElement badge is-pill " data-id={2}>
                                                                {" "}
                                                                No impact{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>
                                                            {" "}
                                                            <span title="Students" className="categoryElement badge is-pill " data-id={32}>
                                                                {" "}
                                                                Students{" "}
                                                            </span>{" "}
                                                            <span title="Startups" className="categoryElement badge is-pill " data-id={33}>
                                                                {" "}
                                                                Startups{" "}
                                                            </span>{" "}
                                                            <span title="Corporate" className="categoryElement badge is-pill " data-id={34}>
                                                                {" "}
                                                                Corporate{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Incubator" className="categoryElement badge is-pill " data-id={37}>
                                                                {" "}
                                                                Incubator{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Campus" className="categoryElement badge is-pill " data-id={50}>
                                                                {" "}
                                                                Campus{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td>Schoolab</td>
                                                        <td>Mickael Jakubowicz</td>
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/192/manage/projects">
                                                                60
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/192/manage/participants/list">
                                                                3
                                                            </a>
                                                        </td>
                                                        <td />
                                                        <td />
                                                        <td className="sorting_1"> 06/08/2023 </td>
                                                        <td className=" text-center">
                                                            <div className="dropdown-container">
                                                                <div className="d-inline-flex justify-content-end dropdown">
                                                                    <a className="btn btn-lg btn-transparent btn-icon text-muted" data-display="static" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">
                                                                        <span className="icon icon-options" />
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
                                                                        <a href="/manage/program/192/data" id="organization-manage-applications-192" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Data</div>
                                                                        </a>
                                                                        <a href="/program/192/manage/analytics" id="manage-challenge-192" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Manage</div>
                                                                        </a>
                                                                        <a href="/program/192/details" id="workspace-challenge-192" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Workspace</div>
                                                                        </a>
                                                                        <div className="dropdown-divider">
                                                                            <a href="" className="d-none">
                                                                                {" "}
                                                                                null{" "}
                                                                            </a>
                                                                        </div>
                                                                        <a href="" id="edit-challenge-192" data-target="#loadingContentModal" data-toggle="modal" data-url="/organization/challenge/192/modal/update" data-action="edit-data" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Edit</div>
                                                                        </a>
                                                                        <a href="" data-target="#copyChallengeModal" data-toggle="modal" data-url="/rest/challenge/192/copy" id="copy-challenge-192" data-modal-title="Duplicate: Schoolab - Saint Lazare" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Duplicate</div>
                                                                        </a>
                                                                        <a href="" id="delete-challenge-192" className="dropdown-item is-danger rowAction" data-url="/rest/challenge/192/delete" data-confirm-modal="challengeDeleteModal">
                                                                            <div className="dropdown-item--label">Delete</div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr role="row" className="even">
                                                        <td className="table-checkbox">
                                                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                                                <input className="bulkActionSelector custom-control-input" id="182" defaultValue="182" type="checkbox" />
                                                                <label className="custom-control-label" htmlFor="182" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold is-primary" href="/manage/program/182/data">
                                                                Schoolab Learning learning
                                                            </a>
                                                            <br />
                                                            <span className="small text-muted">Schoolab</span>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <select name="plan" className="custom-select" style={{ minWidth: 100 }} data-url="/rest/challenge/182/update-plan">
                                                                <option value="data">Data</option>
                                                                <option value="default">Native</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="No impact" className="categoryElement badge is-pill " data-id={2}>
                                                                {" "}
                                                                No impact{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>
                                                            {" "}
                                                            <span title="Corporate" className="categoryElement badge is-pill " data-id={34}>
                                                                {" "}
                                                                Corporate{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Learning Course" className="categoryElement badge is-pill " data-id={41}>
                                                                {" "}
                                                                Learning Course{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Innovation" className="categoryElement badge is-pill " data-id={49}>
                                                                {" "}
                                                                Innovation{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td>Schoolab</td>
                                                        <td />
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/182/manage/projects">
                                                                0
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/182/manage/participants/list">
                                                                17
                                                            </a>
                                                        </td>
                                                        <td />
                                                        <td />
                                                        <td className="sorting_1"> 03/13/2023 </td>
                                                        <td className=" text-center">
                                                            <div className="dropdown-container">
                                                                <div className="d-inline-flex justify-content-end dropdown">
                                                                    <a className="btn btn-lg btn-transparent btn-icon text-muted" data-display="static" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">
                                                                        <span className="icon icon-options" />
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
                                                                        <a href="/manage/program/182/data" id="organization-manage-applications-182" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Data</div>
                                                                        </a>
                                                                        <a href="/program/182/manage/analytics" id="manage-challenge-182" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Manage</div>
                                                                        </a>
                                                                        <a href="/program/182/details" id="workspace-challenge-182" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Workspace</div>
                                                                        </a>
                                                                        <div className="dropdown-divider">
                                                                            <a href="" className="d-none">
                                                                                {" "}
                                                                                null{" "}
                                                                            </a>
                                                                        </div>
                                                                        <a href="" id="edit-challenge-182" data-target="#loadingContentModal" data-toggle="modal" data-url="/organization/challenge/182/modal/update" data-action="edit-data" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Edit</div>
                                                                        </a>
                                                                        <a href="" data-target="#copyChallengeModal" data-toggle="modal" data-url="/rest/challenge/182/copy" id="copy-challenge-182" data-modal-title="Duplicate: Schoolab Learning learning" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Duplicate</div>
                                                                        </a>
                                                                        <a href="" id="delete-challenge-182" className="dropdown-item is-danger rowAction" data-url="/rest/challenge/182/delete" data-confirm-modal="challengeDeleteModal">
                                                                            <div className="dropdown-item--label">Delete</div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr role="row" className="odd">
                                                        <td className="table-checkbox">
                                                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                                                <input className="bulkActionSelector custom-control-input" id="178" defaultValue="178" type="checkbox" />
                                                                <label className="custom-control-label" htmlFor="178" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold is-primary" href="/manage/program/178/data">
                                                                Design &amp; Thinking: Welcome to Schoolab
                                                            </a>
                                                            <br />
                                                            <span className="small text-muted">Schoolab</span>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <select name="plan" className="custom-select" style={{ minWidth: 100 }} data-url="/rest/challenge/178/update-plan">
                                                                <option value="data">Data</option>
                                                                <option value="default">Native</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="No impact" className="categoryElement badge is-pill " data-id={2}>
                                                                {" "}
                                                                No impact{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>
                                                            {" "}
                                                            <span title="Corporate" className="categoryElement badge is-pill " data-id={34}>
                                                                {" "}
                                                                Corporate{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Learning Course" className="categoryElement badge is-pill " data-id={41}>
                                                                {" "}
                                                                Learning Course{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Innovation" className="categoryElement badge is-pill " data-id={49}>
                                                                {" "}
                                                                Innovation{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td>Schoolab</td>
                                                        <td />
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/178/manage/projects">
                                                                0
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/178/manage/participants/list">
                                                                1
                                                            </a>
                                                        </td>
                                                        <td />
                                                        <td />
                                                        <td className="sorting_1"> 02/15/2023 </td>
                                                        <td className=" text-center">
                                                            <div className="dropdown-container">
                                                                <div className="d-inline-flex justify-content-end dropdown">
                                                                    <a className="btn btn-lg btn-transparent btn-icon text-muted" data-display="static" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">
                                                                        <span className="icon icon-options" />
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
                                                                        <a href="/manage/program/178/data" id="organization-manage-applications-178" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Data</div>
                                                                        </a>
                                                                        <a href="/program/178/manage/analytics" id="manage-challenge-178" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Manage</div>
                                                                        </a>
                                                                        <a href="/program/178/details" id="workspace-challenge-178" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Workspace</div>
                                                                        </a>
                                                                        <div className="dropdown-divider">
                                                                            <a href="" className="d-none">
                                                                                {" "}
                                                                                null{" "}
                                                                            </a>
                                                                        </div>
                                                                        <a href="" id="edit-challenge-178" data-target="#loadingContentModal" data-toggle="modal" data-url="/organization/challenge/178/modal/update" data-action="edit-data" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Edit</div>
                                                                        </a>
                                                                        <a href="" data-target="#copyChallengeModal" data-toggle="modal" data-url="/rest/challenge/178/copy" id="copy-challenge-178" data-modal-title="Duplicate: Design & Thinking: Welcome to Schoolab" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Duplicate</div>
                                                                        </a>
                                                                        <a href="" id="delete-challenge-178" className="dropdown-item is-danger rowAction" data-url="/rest/challenge/178/delete" data-confirm-modal="challengeDeleteModal">
                                                                            <div className="dropdown-item--label">Delete</div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr role="row" className="even">
                                                        <td className="table-checkbox">
                                                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                                                <input className="bulkActionSelector custom-control-input" id="154" defaultValue="154" type="checkbox" />
                                                                <label className="custom-control-label" htmlFor="154" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold is-primary" href="/manage/program/154/data">
                                                                Les bases de la food
                                                            </a>
                                                            <br />
                                                            <span className="small text-muted">Schoolab</span>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <select name="plan" className="custom-select" style={{ minWidth: 100 }} data-url="/rest/challenge/154/update-plan">
                                                                <option value="data">Data</option>
                                                                <option value="default">Native</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Impact native" className="categoryElement badge is-pill " data-id={5}>
                                                                {" "}
                                                                Impact native{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Food" className="categoryElement badge is-pill " data-id={11}>
                                                                {" "}
                                                                Food{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td>
                                                            {" "}
                                                            <span title="Corporate" className="categoryElement badge is-pill " data-id={34}>
                                                                {" "}
                                                                Corporate{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Learning Course" className="categoryElement badge is-pill " data-id={41}>
                                                                {" "}
                                                                Learning Course{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Innovation" className="categoryElement badge is-pill " data-id={49}>
                                                                {" "}
                                                                Innovation{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td>Schoolab</td>
                                                        <td>Julien Fayet</td>
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/154/manage/projects">
                                                                0
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/154/manage/participants/list">
                                                                5
                                                            </a>
                                                        </td>
                                                        <td />
                                                        <td />
                                                        <td className="sorting_1"> 08/26/2022 </td>
                                                        <td className=" text-center">
                                                            <div className="dropdown-container">
                                                                <div className="d-inline-flex justify-content-end dropdown">
                                                                    <a className="btn btn-lg btn-transparent btn-icon text-muted" data-display="static" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">
                                                                        <span className="icon icon-options" />
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
                                                                        <a href="/manage/program/154/data" id="organization-manage-applications-154" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Data</div>
                                                                        </a>
                                                                        <a href="/program/154/manage/analytics" id="manage-challenge-154" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Manage</div>
                                                                        </a>
                                                                        <a href="/program/154/details" id="workspace-challenge-154" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Workspace</div>
                                                                        </a>
                                                                        <div className="dropdown-divider">
                                                                            <a href="" className="d-none">
                                                                                {" "}
                                                                                null{" "}
                                                                            </a>
                                                                        </div>
                                                                        <a href="" id="edit-challenge-154" data-target="#loadingContentModal" data-toggle="modal" data-url="/organization/challenge/154/modal/update" data-action="edit-data" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Edit</div>
                                                                        </a>
                                                                        <a href="" data-target="#copyChallengeModal" data-toggle="modal" data-url="/rest/challenge/154/copy" id="copy-challenge-154" data-modal-title="Duplicate: Les bases de la food" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Duplicate</div>
                                                                        </a>
                                                                        <a href="" id="delete-challenge-154" className="dropdown-item is-danger rowAction" data-url="/rest/challenge/154/delete" data-confirm-modal="challengeDeleteModal">
                                                                            <div className="dropdown-item--label">Delete</div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr role="row" className="odd">
                                                        <td className="table-checkbox">
                                                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                                                <input className="bulkActionSelector custom-control-input" id="153" defaultValue="153" type="checkbox" />
                                                                <label className="custom-control-label" htmlFor="153" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold is-primary" href="/manage/program/153/data">
                                                                Les bases de l'inclusion
                                                            </a>
                                                            <br />
                                                            <span className="small text-muted">Schoolab</span>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <select name="plan" className="custom-select" style={{ minWidth: 100 }} data-url="/rest/challenge/153/update-plan">
                                                                <option value="data">Data</option>
                                                                <option value="default">Native</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Impact native" className="categoryElement badge is-pill " data-id={5}>
                                                                {" "}
                                                                Impact native{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="DEI" className="categoryElement badge is-pill " data-id={12}>
                                                                {" "}
                                                                DEI{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td>
                                                            {" "}
                                                            <span title="Corporate" className="categoryElement badge is-pill " data-id={34}>
                                                                {" "}
                                                                Corporate{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Learning Course" className="categoryElement badge is-pill " data-id={41}>
                                                                {" "}
                                                                Learning Course{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Innovation" className="categoryElement badge is-pill " data-id={49}>
                                                                {" "}
                                                                Innovation{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td>Schoolab</td>
                                                        <td>Julien Fayet</td>
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/153/manage/projects">
                                                                5
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/153/manage/participants/list">
                                                                4
                                                            </a>
                                                        </td>
                                                        <td />
                                                        <td />
                                                        <td className="sorting_1"> 08/26/2022 </td>
                                                        <td className=" text-center">
                                                            <div className="dropdown-container">
                                                                <div className="d-inline-flex justify-content-end dropdown">
                                                                    <a className="btn btn-lg btn-transparent btn-icon text-muted" data-display="static" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">
                                                                        <span className="icon icon-options" />
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
                                                                        <a href="/manage/program/153/data" id="organization-manage-applications-153" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Data</div>
                                                                        </a>
                                                                        <a href="/program/153/manage/analytics" id="manage-challenge-153" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Manage</div>
                                                                        </a>
                                                                        <a href="/program/153/details" id="workspace-challenge-153" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Workspace</div>
                                                                        </a>
                                                                        <div className="dropdown-divider">
                                                                            <a href="" className="d-none">
                                                                                {" "}
                                                                                null{" "}
                                                                            </a>
                                                                        </div>
                                                                        <a href="" id="edit-challenge-153" data-target="#loadingContentModal" data-toggle="modal" data-url="/organization/challenge/153/modal/update" data-action="edit-data" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Edit</div>
                                                                        </a>
                                                                        <a href="" data-target="#copyChallengeModal" data-toggle="modal" data-url="/rest/challenge/153/copy" id="copy-challenge-153" data-modal-title="Duplicate: Les bases de l'inclusion" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Duplicate</div>
                                                                        </a>
                                                                        <a href="" id="delete-challenge-153" className="dropdown-item is-danger rowAction" data-url="/rest/challenge/153/delete" data-confirm-modal="challengeDeleteModal">
                                                                            <div className="dropdown-item--label">Delete</div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr role="row" className="even">
                                                        <td className="table-checkbox">
                                                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                                                <input className="bulkActionSelector custom-control-input" id="152" defaultValue="152" type="checkbox" />
                                                                <label className="custom-control-label" htmlFor="152" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold is-primary" href="/manage/program/152/data">
                                                                Les bases du plastique
                                                            </a>
                                                            <br />
                                                            <span className="small text-muted">Schoolab</span>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <select name="plan" className="custom-select" style={{ minWidth: 100 }} data-url="/rest/challenge/152/update-plan">
                                                                <option value="data">Data</option>
                                                                <option value="default">Native</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Impact native" className="categoryElement badge is-pill " data-id={5}>
                                                                {" "}
                                                                Impact native{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Plastic" className="categoryElement badge is-pill " data-id={10}>
                                                                {" "}
                                                                Plastic{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td>
                                                            {" "}
                                                            <span title="Corporate" className="categoryElement badge is-pill " data-id={34}>
                                                                {" "}
                                                                Corporate{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Learning Course" className="categoryElement badge is-pill " data-id={41}>
                                                                {" "}
                                                                Learning Course{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Innovation" className="categoryElement badge is-pill " data-id={49}>
                                                                {" "}
                                                                Innovation{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td>Schoolab</td>
                                                        <td>Julien Fayet</td>
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/152/manage/projects">
                                                                0
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/152/manage/participants/list">
                                                                3
                                                            </a>
                                                        </td>
                                                        <td />
                                                        <td />
                                                        <td className="sorting_1"> 08/26/2022 </td>
                                                        <td className=" text-center">
                                                            <div className="dropdown-container">
                                                                <div className="d-inline-flex justify-content-end dropdown">
                                                                    <a className="btn btn-lg btn-transparent btn-icon text-muted" data-display="static" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">
                                                                        <span className="icon icon-options" />
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
                                                                        <a href="/manage/program/152/data" id="organization-manage-applications-152" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Data</div>
                                                                        </a>
                                                                        <a href="/program/152/manage/analytics" id="manage-challenge-152" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Manage</div>
                                                                        </a>
                                                                        <a href="/program/152/details" id="workspace-challenge-152" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Workspace</div>
                                                                        </a>
                                                                        <div className="dropdown-divider">
                                                                            <a href="" className="d-none">
                                                                                {" "}
                                                                                null{" "}
                                                                            </a>
                                                                        </div>
                                                                        <a href="" id="edit-challenge-152" data-target="#loadingContentModal" data-toggle="modal" data-url="/organization/challenge/152/modal/update" data-action="edit-data" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Edit</div>
                                                                        </a>
                                                                        <a href="" data-target="#copyChallengeModal" data-toggle="modal" data-url="/rest/challenge/152/copy" id="copy-challenge-152" data-modal-title="Duplicate: Les bases du plastique" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Duplicate</div>
                                                                        </a>
                                                                        <a href="" id="delete-challenge-152" className="dropdown-item is-danger rowAction" data-url="/rest/challenge/152/delete" data-confirm-modal="challengeDeleteModal">
                                                                            <div className="dropdown-item--label">Delete</div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr role="row" className="odd">
                                                        <td className="table-checkbox">
                                                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                                                <input className="bulkActionSelector custom-control-input" id="142" defaultValue="142" type="checkbox" />
                                                                <label className="custom-control-label" htmlFor="142" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold is-primary" href="/manage/program/142/data">
                                                                We Design a Brighter Future
                                                            </a>
                                                            <br />
                                                            <span className="small text-muted">Schoolab</span>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <select name="plan" className="custom-select" style={{ minWidth: 100 }} data-url="/rest/challenge/142/update-plan">
                                                                <option value="data">Data</option>
                                                                <option value="default">Native</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Impact native" className="categoryElement badge is-pill " data-id={5}>
                                                                {" "}
                                                                Impact native{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Plastic" className="categoryElement badge is-pill " data-id={10}>
                                                                {" "}
                                                                Plastic{" "}
                                                            </span>{" "}
                                                            <span title="Food" className="categoryElement badge is-pill " data-id={11}>
                                                                {" "}
                                                                Food{" "}
                                                            </span>{" "}
                                                            <span title="DEI" className="categoryElement badge is-pill " data-id={12}>
                                                                {" "}
                                                                DEI{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td>
                                                            {" "}
                                                            <span title="Corporate" className="categoryElement badge is-pill " data-id={34}>
                                                                {" "}
                                                                Corporate{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Incubator" className="categoryElement badge is-pill " data-id={37}>
                                                                {" "}
                                                                Incubator{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Entrepreneurship" className="categoryElement badge is-pill " data-id={48}>
                                                                {" "}
                                                                Entrepreneursh…{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td>Schoolab</td>
                                                        <td />
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/142/manage/projects">
                                                                0
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/142/manage/participants/list">
                                                                16
                                                            </a>
                                                        </td>
                                                        <td />
                                                        <td />
                                                        <td className="sorting_1"> 07/01/2022 </td>
                                                        <td className=" text-center">
                                                            <div className="dropdown-container">
                                                                <div className="d-inline-flex justify-content-end dropdown">
                                                                    <a className="btn btn-lg btn-transparent btn-icon text-muted" data-display="static" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">
                                                                        <span className="icon icon-options" />
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
                                                                        <a href="/manage/program/142/data" id="organization-manage-applications-142" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Data</div>
                                                                        </a>
                                                                        <a href="/program/142/manage/analytics" id="manage-challenge-142" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Manage</div>
                                                                        </a>
                                                                        <a href="/program/142/details" id="workspace-challenge-142" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Workspace</div>
                                                                        </a>
                                                                        <div className="dropdown-divider">
                                                                            <a href="" className="d-none">
                                                                                {" "}
                                                                                null{" "}
                                                                            </a>
                                                                        </div>
                                                                        <a href="" id="edit-challenge-142" data-target="#loadingContentModal" data-toggle="modal" data-url="/organization/challenge/142/modal/update" data-action="edit-data" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Edit</div>
                                                                        </a>
                                                                        <a href="" data-target="#copyChallengeModal" data-toggle="modal" data-url="/rest/challenge/142/copy" id="copy-challenge-142" data-modal-title="Duplicate: We Design a Brighter Future" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Duplicate</div>
                                                                        </a>
                                                                        <a href="" id="delete-challenge-142" className="dropdown-item is-danger rowAction" data-url="/rest/challenge/142/delete" data-confirm-modal="challengeDeleteModal">
                                                                            <div className="dropdown-item--label">Delete</div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr role="row" className="even">
                                                        <td className="table-checkbox">
                                                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                                                <input className="bulkActionSelector custom-control-input" id="138" defaultValue="138" type="checkbox" />
                                                                <label className="custom-control-label" htmlFor="138" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold is-primary" href="/manage/program/138/data">
                                                                Summer Design Challenge
                                                            </a>
                                                            <br />
                                                            <span className="small text-muted">Schoolab</span>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <select name="plan" className="custom-select" style={{ minWidth: 100 }} data-url="/rest/challenge/138/update-plan">
                                                                <option value="data">Data</option>
                                                                <option value="default">Native</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="No impact" className="categoryElement badge is-pill " data-id={2}>
                                                                {" "}
                                                                No impact{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>
                                                            {" "}
                                                            <span title="Corporate" className="categoryElement badge is-pill " data-id={34}>
                                                                {" "}
                                                                Corporate{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Hackathon" className="categoryElement badge is-pill " data-id={39}>
                                                                {" "}
                                                                Hackathon{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Entrepreneurship" className="categoryElement badge is-pill " data-id={48}>
                                                                {" "}
                                                                Entrepreneursh…{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td>Schoolab</td>
                                                        <td />
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/138/manage/projects">
                                                                2
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/138/manage/participants/list">
                                                                2
                                                            </a>
                                                        </td>
                                                        <td />
                                                        <td />
                                                        <td className="sorting_1"> 06/20/2022 </td>
                                                        <td className=" text-center">
                                                            <div className="dropdown-container">
                                                                <div className="d-inline-flex justify-content-end dropdown">
                                                                    <a className="btn btn-lg btn-transparent btn-icon text-muted" data-display="static" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">
                                                                        <span className="icon icon-options" />
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
                                                                        <a href="/manage/program/138/data" id="organization-manage-applications-138" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Data</div>
                                                                        </a>
                                                                        <a href="/program/138/manage/analytics" id="manage-challenge-138" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Manage</div>
                                                                        </a>
                                                                        <a href="/program/138/details" id="workspace-challenge-138" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Workspace</div>
                                                                        </a>
                                                                        <div className="dropdown-divider">
                                                                            <a href="" className="d-none">
                                                                                {" "}
                                                                                null{" "}
                                                                            </a>
                                                                        </div>
                                                                        <a href="" id="edit-challenge-138" data-target="#loadingContentModal" data-toggle="modal" data-url="/organization/challenge/138/modal/update" data-action="edit-data" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Edit</div>
                                                                        </a>
                                                                        <a href="" data-target="#copyChallengeModal" data-toggle="modal" data-url="/rest/challenge/138/copy" id="copy-challenge-138" data-modal-title="Duplicate: Summer Design Challenge" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Duplicate</div>
                                                                        </a>
                                                                        <a href="" id="delete-challenge-138" className="dropdown-item is-danger rowAction" data-url="/rest/challenge/138/delete" data-confirm-modal="challengeDeleteModal">
                                                                            <div className="dropdown-item--label">Delete</div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr role="row" className="odd">
                                                        <td className="table-checkbox">
                                                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                                                <input className="bulkActionSelector custom-control-input" id="119" defaultValue="119" type="checkbox" />
                                                                <label className="custom-control-label" htmlFor="119" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold is-primary" href="/manage/program/119/data">
                                                                ODP INJECT
                                                            </a>
                                                            <br />
                                                            <span className="small text-muted">Schoolab</span>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <select name="plan" className="custom-select" style={{ minWidth: 100 }} data-url="/rest/challenge/119/update-plan">
                                                                <option value="data">Data</option>
                                                                <option value="default">Native</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="No impact" className="categoryElement badge is-pill " data-id={2}>
                                                                {" "}
                                                                No impact{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>
                                                            {" "}
                                                            <span title="Corporate" className="categoryElement badge is-pill " data-id={34}>
                                                                {" "}
                                                                Corporate{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Learning Course" className="categoryElement badge is-pill " data-id={41}>
                                                                {" "}
                                                                Learning Course{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Innovation" className="categoryElement badge is-pill " data-id={49}>
                                                                {" "}
                                                                Innovation{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td>Schoolab</td>
                                                        <td />
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/119/manage/projects">
                                                                40
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/119/manage/participants/list">
                                                                1
                                                            </a>
                                                        </td>
                                                        <td />
                                                        <td />
                                                        <td className="sorting_1"> 12/20/2021 </td>
                                                        <td className=" text-center">
                                                            <div className="dropdown-container">
                                                                <div className="d-inline-flex justify-content-end dropdown">
                                                                    <a className="btn btn-lg btn-transparent btn-icon text-muted" data-display="static" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">
                                                                        <span className="icon icon-options" />
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
                                                                        <a href="/manage/program/119/data" id="organization-manage-applications-119" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Data</div>
                                                                        </a>
                                                                        <a href="/program/119/manage/analytics" id="manage-challenge-119" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Manage</div>
                                                                        </a>
                                                                        <a href="/program/119/details" id="workspace-challenge-119" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Workspace</div>
                                                                        </a>
                                                                        <div className="dropdown-divider">
                                                                            <a href="" className="d-none">
                                                                                {" "}
                                                                                null{" "}
                                                                            </a>
                                                                        </div>
                                                                        <a href="" id="edit-challenge-119" data-target="#loadingContentModal" data-toggle="modal" data-url="/organization/challenge/119/modal/update" data-action="edit-data" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Edit</div>
                                                                        </a>
                                                                        <a href="" data-target="#copyChallengeModal" data-toggle="modal" data-url="/rest/challenge/119/copy" id="copy-challenge-119" data-modal-title="Duplicate: ODP INJECT" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Duplicate</div>
                                                                        </a>
                                                                        <a href="" id="delete-challenge-119" className="dropdown-item is-danger rowAction" data-url="/rest/challenge/119/delete" data-confirm-modal="challengeDeleteModal">
                                                                            <div className="dropdown-item--label">Delete</div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr role="row" className="even">
                                                        <td className="table-checkbox">
                                                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                                                <input className="bulkActionSelector custom-control-input" id="118" defaultValue="118" type="checkbox" />
                                                                <label className="custom-control-label" htmlFor="118" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold is-primary" href="/manage/program/118/data">
                                                                INTERNATIONAL SEMINAR
                                                            </a>
                                                            <br />
                                                            <span className="small text-muted">Schoolab</span>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <select name="plan" className="custom-select" style={{ minWidth: 100 }} data-url="/rest/challenge/118/update-plan">
                                                                <option value="data">Data</option>
                                                                <option value="default">Native</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="No impact" className="categoryElement badge is-pill " data-id={2}>
                                                                {" "}
                                                                No impact{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>
                                                            {" "}
                                                            <span title="Corporate" className="categoryElement badge is-pill " data-id={34}>
                                                                {" "}
                                                                Corporate{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Community" className="categoryElement badge is-pill " data-id={38}>
                                                                {" "}
                                                                Community{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Innovation" className="categoryElement badge is-pill " data-id={49}>
                                                                {" "}
                                                                Innovation{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td>Schoolab</td>
                                                        <td />
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/118/manage/projects">
                                                                0
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/118/manage/participants/list">
                                                                1
                                                            </a>
                                                        </td>
                                                        <td />
                                                        <td />
                                                        <td className="sorting_1"> 12/20/2021 </td>
                                                        <td className=" text-center">
                                                            <div className="dropdown-container">
                                                                <div className="d-inline-flex justify-content-end dropdown">
                                                                    <a className="btn btn-lg btn-transparent btn-icon text-muted" data-display="static" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">
                                                                        <span className="icon icon-options" />
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
                                                                        <a href="/manage/program/118/data" id="organization-manage-applications-118" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Data</div>
                                                                        </a>
                                                                        <a href="/program/118/manage/analytics" id="manage-challenge-118" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Manage</div>
                                                                        </a>
                                                                        <a href="/program/118/details" id="workspace-challenge-118" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Workspace</div>
                                                                        </a>
                                                                        <div className="dropdown-divider">
                                                                            <a href="" className="d-none">
                                                                                {" "}
                                                                                null{" "}
                                                                            </a>
                                                                        </div>
                                                                        <a href="" id="edit-challenge-118" data-target="#loadingContentModal" data-toggle="modal" data-url="/organization/challenge/118/modal/update" data-action="edit-data" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Edit</div>
                                                                        </a>
                                                                        <a href="" data-target="#copyChallengeModal" data-toggle="modal" data-url="/rest/challenge/118/copy" id="copy-challenge-118" data-modal-title="Duplicate: INTERNATIONAL SEMINAR" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Duplicate</div>
                                                                        </a>
                                                                        <a href="" id="delete-challenge-118" className="dropdown-item is-danger rowAction" data-url="/rest/challenge/118/delete" data-confirm-modal="challengeDeleteModal">
                                                                            <div className="dropdown-item--label">Delete</div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr role="row" className="odd">
                                                        <td className="table-checkbox">
                                                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                                                <input className="bulkActionSelector custom-control-input" id="74" defaultValue="74" type="checkbox" />
                                                                <label className="custom-control-label" htmlFor="74" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold is-primary" href="/manage/program/74/data">
                                                                ODP - Design Fiction
                                                            </a>
                                                            <br />
                                                            <span className="small text-muted">Schoolab</span>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <select name="plan" className="custom-select" style={{ minWidth: 100 }} data-url="/rest/challenge/74/update-plan">
                                                                <option value="data">Data</option>
                                                                <option value="default">Native</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="No impact" className="categoryElement badge is-pill " data-id={2}>
                                                                {" "}
                                                                No impact{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>
                                                            {" "}
                                                            <span title="Corporate" className="categoryElement badge is-pill " data-id={34}>
                                                                {" "}
                                                                Corporate{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Incubator" className="categoryElement badge is-pill " data-id={37}>
                                                                {" "}
                                                                Incubator{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Entrepreneurship" className="categoryElement badge is-pill " data-id={48}>
                                                                {" "}
                                                                Entrepreneursh…{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td>Schoolab</td>
                                                        <td />
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/74/manage/projects">
                                                                0
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/74/manage/participants/list">
                                                                1
                                                            </a>
                                                        </td>
                                                        <td />
                                                        <td />
                                                        <td className="sorting_1"> 05/25/2021 </td>
                                                        <td className=" text-center">
                                                            <div className="dropdown-container">
                                                                <div className="d-inline-flex justify-content-end dropdown">
                                                                    <a className="btn btn-lg btn-transparent btn-icon text-muted" data-display="static" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">
                                                                        <span className="icon icon-options" />
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
                                                                        <a href="/manage/program/74/data" id="organization-manage-applications-74" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Data</div>
                                                                        </a>
                                                                        <a href="/program/74/manage/analytics" id="manage-challenge-74" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Manage</div>
                                                                        </a>
                                                                        <a href="/program/74/details" id="workspace-challenge-74" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Workspace</div>
                                                                        </a>
                                                                        <div className="dropdown-divider">
                                                                            <a href="" className="d-none">
                                                                                {" "}
                                                                                null{" "}
                                                                            </a>
                                                                        </div>
                                                                        <a href="" id="edit-challenge-74" data-target="#loadingContentModal" data-toggle="modal" data-url="/organization/challenge/74/modal/update" data-action="edit-data" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Edit</div>
                                                                        </a>
                                                                        <a href="" data-target="#copyChallengeModal" data-toggle="modal" data-url="/rest/challenge/74/copy" id="copy-challenge-74" data-modal-title="Duplicate: ODP - Design Fiction" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Duplicate</div>
                                                                        </a>
                                                                        <a href="" id="delete-challenge-74" className="dropdown-item is-danger rowAction" data-url="/rest/challenge/74/delete" data-confirm-modal="challengeDeleteModal">
                                                                            <div className="dropdown-item--label">Delete</div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr role="row" className="even">
                                                        <td className="table-checkbox">
                                                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                                                <input className="bulkActionSelector custom-control-input" id="56" defaultValue="56" type="checkbox" />
                                                                <label className="custom-control-label" htmlFor="56" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold is-primary" href="/manage/program/56/data">
                                                                Schoolab Onboarding
                                                            </a>
                                                            <br />
                                                            <span className="small text-muted">Schoolab</span>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <select name="plan" className="custom-select" style={{ minWidth: 100 }} data-url="/rest/challenge/56/update-plan">
                                                                <option value="data">Data</option>
                                                                <option value="default">Native</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="No impact" className="categoryElement badge is-pill " data-id={2}>
                                                                {" "}
                                                                No impact{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>
                                                            {" "}
                                                            <span title="Corporate" className="categoryElement badge is-pill " data-id={34}>
                                                                {" "}
                                                                Corporate{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Incubator" className="categoryElement badge is-pill " data-id={37}>
                                                                {" "}
                                                                Incubator{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Entrepreneurship" className="categoryElement badge is-pill " data-id={48}>
                                                                {" "}
                                                                Entrepreneursh…{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td>Schoolab</td>
                                                        <td />
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/56/manage/projects">
                                                                11
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/56/manage/participants/list">
                                                                3
                                                            </a>
                                                        </td>
                                                        <td />
                                                        <td />
                                                        <td className="sorting_1"> 02/20/2021 </td>
                                                        <td className=" text-center">
                                                            <div className="dropdown-container">
                                                                <div className="d-inline-flex justify-content-end dropdown">
                                                                    <a className="btn btn-lg btn-transparent btn-icon text-muted" data-display="static" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">
                                                                        <span className="icon icon-options" />
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
                                                                        <a href="/manage/program/56/data" id="organization-manage-applications-56" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Data</div>
                                                                        </a>
                                                                        <a href="/program/56/manage/analytics" id="manage-challenge-56" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Manage</div>
                                                                        </a>
                                                                        <a href="/program/56/details" id="workspace-challenge-56" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Workspace</div>
                                                                        </a>
                                                                        <div className="dropdown-divider">
                                                                            <a href="" className="d-none">
                                                                                {" "}
                                                                                null{" "}
                                                                            </a>
                                                                        </div>
                                                                        <a href="" id="edit-challenge-56" data-target="#loadingContentModal" data-toggle="modal" data-url="/organization/challenge/56/modal/update" data-action="edit-data" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Edit</div>
                                                                        </a>
                                                                        <a href="" data-target="#copyChallengeModal" data-toggle="modal" data-url="/rest/challenge/56/copy" id="copy-challenge-56" data-modal-title="Duplicate: Schoolab Onboarding" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Duplicate</div>
                                                                        </a>
                                                                        <a href="" id="delete-challenge-56" className="dropdown-item is-danger rowAction" data-url="/rest/challenge/56/delete" data-confirm-modal="challengeDeleteModal">
                                                                            <div className="dropdown-item--label">Delete</div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr role="row" className="odd">
                                                        <td className="table-checkbox">
                                                            <div className="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                                                                <input className="bulkActionSelector custom-control-input" id="29" defaultValue="29" type="checkbox" />
                                                                <label className="custom-control-label" htmlFor="29" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold is-primary" href="/manage/program/29/data">
                                                                Ecole de l'Impact Positif
                                                            </a>
                                                            <br />
                                                            <span className="small text-muted">Schoolab</span>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <select name="plan" className="custom-select" style={{ minWidth: 100 }} data-url="/rest/challenge/29/update-plan">
                                                                <option value="data">Data</option>
                                                                <option value="default">Native</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Impact native" className="categoryElement badge is-pill " data-id={5}>
                                                                {" "}
                                                                Impact native{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Plastic" className="categoryElement badge is-pill " data-id={10}>
                                                                {" "}
                                                                Plastic{" "}
                                                            </span>{" "}
                                                            <span title="Food" className="categoryElement badge is-pill " data-id={11}>
                                                                {" "}
                                                                Food{" "}
                                                            </span>{" "}
                                                            <span title="DEI" className="categoryElement badge is-pill " data-id={12}>
                                                                {" "}
                                                                DEI{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td>
                                                            {" "}
                                                            <span title="Students" className="categoryElement badge is-pill " data-id={32}>
                                                                {" "}
                                                                Students{" "}
                                                            </span>{" "}
                                                            <span title="Startups" className="categoryElement badge is-pill " data-id={33}>
                                                                {" "}
                                                                Startups{" "}
                                                            </span>{" "}
                                                            <span title="Corporate" className="categoryElement badge is-pill " data-id={34}>
                                                                {" "}
                                                                Corporate{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Incubator" className="categoryElement badge is-pill " data-id={37}>
                                                                {" "}
                                                                Incubator{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <span title="Entrepreneurship" className="categoryElement badge is-pill " data-id={48}>
                                                                {" "}
                                                                Entrepreneursh…{" "}
                                                            </span>{" "}
                                                        </td>
                                                        <td>-</td>
                                                        <td>MoHo</td>
                                                        <td />
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/29/manage/projects">
                                                                1
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a className="font-weight-bold" href="/program/29/manage/participants/list">
                                                                3
                                                            </a>
                                                        </td>
                                                        <td />
                                                        <td />
                                                        <td className="sorting_1"> 10/27/2020 </td>
                                                        <td className=" text-center">
                                                            <div className="dropdown-container">
                                                                <div className="d-inline-flex justify-content-end dropdown">
                                                                    <a className="btn btn-lg btn-transparent btn-icon text-muted" data-display="static" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">
                                                                        <span className="icon icon-options" />
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
                                                                        <a href="/manage/program/29/data" id="organization-manage-applications-29" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Data</div>
                                                                        </a>
                                                                        <a href="/program/29/manage/analytics" id="manage-challenge-29" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Manage</div>
                                                                        </a>
                                                                        <a href="/program/29/details" id="workspace-challenge-29" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Workspace</div>
                                                                        </a>
                                                                        <div className="dropdown-divider">
                                                                            <a href="" className="d-none">
                                                                                {" "}
                                                                                null{" "}
                                                                            </a>
                                                                        </div>
                                                                        <a href="" id="edit-challenge-29" data-target="#loadingContentModal" data-toggle="modal" data-url="/organization/challenge/29/modal/update" data-action="edit-data" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Edit</div>
                                                                        </a>
                                                                        <a href="" data-target="#copyChallengeModal" data-toggle="modal" data-url="/rest/challenge/29/copy" id="copy-challenge-29" data-modal-title="Duplicate: Ecole de l'Impact Positif" className="dropdown-item">
                                                                            <div className="dropdown-item--label">Duplicate</div>
                                                                        </a>
                                                                        <a href="" id="delete-challenge-29" className="dropdown-item is-danger rowAction" data-url="/rest/challenge/29/delete" data-confirm-modal="challengeDeleteModal">
                                                                            <div className="dropdown-item--label">Delete</div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div id="sg-datatables-challenges_list_datatable_processing" className="dataTables_processing" style={{ display: "none" }}>
                                                <div className="card">
                                                    <div className="card-body text-center">
                                                        <div className="spinner-border spinner-border-sm mr-3 text-center" role="status">
                                                            <span className="sr-only">Loading…</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="dt-buttons btn-group" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-5">
                                            <div className="dataTables_info" id="sg-datatables-challenges_list_datatable_info" role="status" aria-live="polite">
                                                Showing 1 to 21 of 21 entries (filtered from 241 total entries)
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-7">
                                            <div className="dataTables_paginate paging_simple_numbers" id="sg-datatables-challenges_list_datatable_paginate">
                                                <ul className="pagination">
                                                    <li className="paginate_button page-item previous disabled" id="sg-datatables-challenges_list_datatable_previous">
                                                        <a href="#" aria-controls="sg-datatables-challenges_list_datatable" data-dt-idx={0} tabIndex={0} className="page-link">
                                                            Previous
                                                        </a>
                                                    </li>
                                                    <li className="paginate_button page-item active">
                                                        <a href="#" aria-controls="sg-datatables-challenges_list_datatable" data-dt-idx={1} tabIndex={0} className="page-link">
                                                            1
                                                        </a>
                                                    </li>
                                                    <li className="paginate_button page-item next disabled" id="sg-datatables-challenges_list_datatable_next">
                                                        <a href="#" aria-controls="sg-datatables-challenges_list_datatable" data-dt-idx={2} tabIndex={0} className="page-link">
                                                            Next
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AppContent>
        </Layout>
    );
};
