import React from "react";
// import { useEffect } from "react";
// import { dropdownNotSaved } from "../../../../../public/utils/dropdownNotSaved";
export interface TableElementFiltersProps {}

export const TableElementFilters = ({}: TableElementFiltersProps) => {
    // useEffect(() => {
    //     dropdownNotSaved();
    // }, []);
    return (
        <>
            <div id="tables-filters" className="table-filters-wrapper d-flex flex-wrap justify-content-between align-items-md-start gap-xs">
                <form className="table-search d-flex flex-grow-1 flex-md-grow-0 flex-shrink-1 order-1">
                    <input name="search" autoComplete="off" type="search" id="search" className="form-control field-sizing flex-fill mw-100" aria-describedby="search" placeholder="Search..." defaultValue="" />
                </form>
                <div className="table-filters-sort d-flex flex-column flex-fill flex-sm-row gap-xs order-3 order-md-2">
                    <div className="dropdown" data-save-to-close="true">
                        <a className="btn btn-lg btn-default dropdown-toggle w-100" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window">
                            <span className="icon icon-sort-ascending" />
                            <span className="d-md-none d-md-flex">Sort by</span> <span>Name</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-filters">
                            <form className="d-flex flex-column gap-md px-16px py-8px">
                                <div className="form-group d-flex flex-column gap-xs">
                                    <label htmlFor="sortBy">In this view, sort by...</label>
                                    <div id="sort1" className="d-flex gap-xs align-items-center">
                                        <div className="input-group">
                                            <div className="input-group-prepend" style={{ flex: "1 1 50%" }}>
                                                <select name="filters" id="filter-select" className="filterSelect custom-select">
                                                    <option value="name">Name</option>
                                                    <option value="date">Date</option>
                                                    <option value="tags">Tags</option>
                                                    <option value="col">Column</option>
                                                    <option value="col">Column</option>
                                                    <option value="col">Column</option>
                                                </select>
                                            </div>
                                            <select name="filters" id="filter-select" className="filterSelect custom-select" style={{ flex: "1 1 50%" }}>
                                                <option value="name">Descending</option>
                                                <option value="date">Ascending</option>
                                            </select>
                                        </div>
                                        {/* Hidden when 1 line */}
                                        {/* <a href="#" class="btn btn-lg btn-default btn-icon">
                          <span class="icon icon-delete"></span>
                      </a> */}
                                    </div>
                                    <a href="#" className="btn btn-lg btn-default btn-block">
                                        <span className="icon icon-plus-circle" />
                                        <span>Add sort</span>
                                    </a>
                                </div>
                                <div className="d-flex gap-xs justify-content-end">
                                    <a href="#" className="btn btn-lg btn-default" data-toggle="dropdown">
                                        Cancel
                                    </a>
                                    <button type="submit" className="btn btn-lg btn-primary disabled" data-toggle="dropdown">
                                        Apply
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="dropdown d-flex flex-nowrap gap-xs" data-save-to-close="true">
                        <a className="btn btn-lg btn-muted" href="#" role="button" data-reference="parent" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window">
                            <span className="icon icon-plus-circle" />
                            <span>Add filter</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-filters">
                            <form className="d-flex flex-column gap-md px-16px py-8px">
                                <div className="form-group d-flex flex-column gap-xs">
                                    <label htmlFor="filterBy">In this view, filter by...</label>
                                    <a href="#" className="btn btn-lg btn-default btn-block">
                                        <span className="icon icon-plus-circle" />
                                        <span>Add filter</span>
                                    </a>
                                </div>
                                <div className="d-flex gap-xs justify-content-end">
                                    <a href="#" className="btn btn-lg btn-default" data-toggle="dropdown">
                                        Cancel
                                    </a>
                                    <button type="submit" className="btn btn-lg btn-primary disabled" data-toggle="dropdown">
                                        Apply
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="table-actions d-flex flex-nowrap align-items-start gap-xs order-2 order-md-3">
                    <div className="d-flex gap-xs gap-md-0px">
                        <div className="dropdown" data-toggle="tooltip" data-placement="top" data-original-title="Manage notifications subscriptions" data-boundary="window" data-save-to-close="false">
                            <a href="#" className="btn btn-lg btn-transparent btn-icon text-muted" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Manage notifications subscriptions" data-boundary="window">
                                <span className="icon icon-notifications-off" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-notifications dropdown-menu-right">
                                <form className="d-flex flex-column gap-md px-16px py-8px">
                                    <div className="form-group d-flex flex-column gap-xs">
                                        <label htmlFor="filterBy">Send me a notification...</label>
                                        <a href="#" className="btn btn-lg btn-default btn-block">
                                            <span className="icon icon-plus-circle" />
                                            <span>Add trigger</span>
                                        </a>
                                    </div>
                                    <div className="form-group d-flex flex-column gap-xs">
                                        <label htmlFor="filterBy">Filter by...</label>
                                        <a href="#" className="btn btn-lg btn-default btn-block">
                                            <span className="icon icon-plus-circle" />
                                            <span>Add filter</span>
                                        </a>
                                    </div>
                                    <div className="form-group d-flex flex-column gap-xs">
                                        <label htmlFor="sendBy">Send by...</label>
                                        <div className="d-flex gap-md">
                                            <div className="custom-control custom-checkbox">
                                                <input className="custom-control-input" type="checkbox" id="push" defaultValue="push" disabled />
                                                <label className="custom-control-label" htmlFor="push">
                                                    Push notifications
                                                </label>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input className="custom-control-input" type="checkbox" id="email" defaultValue="email" />
                                                <label className="custom-control-label" htmlFor="email">
                                                    Email
                                                </label>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input className="custom-control-input" type="checkbox" id="digest" defaultValue="digest" />
                                                <label className="custom-control-label" htmlFor="digest">
                                                    Daily digest
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <a href="#" className="btn btn-lg btn-default disabled" data-toggle="dropdown">
                                            Delete notifications
                                        </a>
                                        <div className="d-flex gap-xs justify-content-end flex-fill">
                                            <a href="#" className="btn btn-lg btn-default" data-toggle="dropdown">
                                                Cancel
                                            </a>
                                            <button type="submit" className="btn btn-lg btn-primary disabled" data-toggle="dropdown">
                                                Create
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <a href="#" className="btn btn-lg btn-transparent btn-icon text-muted d-none d-md-flex" data-toggle="tooltip" data-placement="top" data-original-title="Download all data in this view" data-boundary="window">
                            <span className="icon icon-download" />
                        </a>
                    </div>
                    <a href="#" id="btn-new" className="btn btn-lg btn-primary text-nowrap">
                        <span className="icon icon-plus-circle" />
                        <span className="d-none d-sm-flex">
                            Add {"{"}
                            {"{"}item{"}"}
                            {"}"}
                        </span>
                    </a>
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    bottom: "1rem",
                    left: "50vw",
                    transform: "translateX(-50%)",
                    zIndex: 400,
                }}
                className="toast is-warning fade"
                id="modalHidePrevented"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
                data-autohide="false"
            >
                <div className="toast-body">
                    <span className="mr-auto">You cannot close this modal until you saved or canceled your changes.</span>
                    <button className="ml-2 my-1 close" data-dismiss="toast" data-delay={6000} aria-label="close">
                        <div className="icon icon-close" />
                    </button>
                </div>
            </div>
        </>
    );
};
