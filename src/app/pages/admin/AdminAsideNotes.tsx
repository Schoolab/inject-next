import React from "react";
import { useEffect } from "react";
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { FiltersDefault } from "@/app/components/filters/FiltersDefault";
import { TableElementAsideNotes } from "@/app/components/tables/elements/TableElementAsideNotes";
import { AsideNotes } from "@/app/components/asides/AsideNotes";
import { aside } from "../../../../public/utils/aside";

export const AdminAsideNotes = () => {
    useEffect(() => {
        aside();
    }, []);
    return (
        <Layout sideBar="Admin" showShortcutbar={false}>
            <AppContent sections="transparent" showSubnav={false} isAsside={true}>
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
                                        <FiltersDefault />
                                </div>
                                <div id="sg-datatables-challenges_list_datatable_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <TableElementAsideNotes />
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
            <AsideNotes />
        </Layout>
    );
};
