import React from "react";
// import { useEffect } from "react";
// import { dropdownNotSaved } from "../../../../../public/utils/dropdownNotSaved";
export interface TableElementFiltersEditedProps {}

export const TableElementFiltersEdited = ({}: TableElementFiltersEditedProps) => {
    // useEffect(() => {
    //     dropdownNotSaved();
    // }, []);
    return (
        <>
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
                        <a className="btn btn-lg btn-default active dropdown-toggle w-100" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window">
                            <span className="icon icon-filter-variant" />
                            <span className="d-md-none d-md-flex">Filtered by</span> <span>2 rules</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-filters">
                            <form className="d-flex flex-column gap-md px-16px py-8px">
                                <div className="form-group d-flex flex-column gap-xs">
                                    <label htmlFor="filterBy">In this view, filter by...</label>
                                    <div id="sort1" className="d-flex gap-xs align-items-center">
                                        <span className="d-flex flex-shrink-0" style={{ width: 80 }}>
                                            Where
                                        </span>
                                        <div className="input-group">
                                            <div className="input-group-prepend" style={{ flex: "1 1 33%" }}>
                                                <select name="filters" id="filter-select" className="filterSelect custom-select">
                                                    <option value="name">Name</option>
                                                    <option value="date">Date</option>
                                                    <option value="tags" selected>
                                                        Tags
                                                    </option>
                                                    <option value="col">Column</option>
                                                    <option value="col">Column</option>
                                                    <option value="col">Column</option>
                                                </select>
                                            </div>
                                            <select name="filters" id="filter-select" className="filterSelect custom-select" style={{ flex: "1 1 33%" }}>
                                                <option value="hasAnyOf">has any of</option>
                                                <option value="hasAllOf">has all of</option>
                                                <option value="isExactly">is exactly</option>
                                                <option value="isExactly">has none of</option>
                                                <option value="contains" selected>
                                                    contains
                                                </option>
                                                <option value="notContain">does not contain</option>
                                                <option value="isEmpty">is empty</option>
                                                <option value="NotEmpty">is not empty</option>
                                            </select>
                                            <div className="input-group-append" style={{ flex: "1 1 33%" }}>
                                                <input type="text" className="form-control" id="validationDefault01" placeholder="Value" defaultValue="" />
                                            </div>
                                        </div>
                                        <a href="#" className="btn btn-lg btn-default btn-icon">
                                            <span className="icon icon-delete" />
                                        </a>
                                    </div>
                                    <div id="sort2" className="d-flex gap-xs align-items-center">
                                        <select name="filters" id="filter-select" className="filterSelect custom-select flex-shrink-0" style={{ width: 80 }}>
                                            <option value="name">And</option>
                                            <option value="date">Or</option>
                                        </select>
                                        <div className="input-group">
                                            <div className="input-group-prepend" style={{ flex: "1 1 33%" }}>
                                                <select name="filters" id="filter-select" className="filterSelect custom-select">
                                                    <option value="name" selected>
                                                        Name
                                                    </option>
                                                    <option value="date">Date</option>
                                                    <option value="tags">Tags</option>
                                                    <option value="col">Column</option>
                                                    <option value="col">Column</option>
                                                    <option value="col">Column</option>
                                                </select>
                                            </div>
                                            <select name="filters" id="filter-select" className="filterSelect custom-select" style={{ flex: "1 1 33%" }}>
                                                <option value="hasAnyOf">has any of</option>
                                                <option value="hasAllOf">has all of</option>
                                                <option value="isExactly">is exactly</option>
                                                <option value="isExactly">has none of</option>
                                                <option value="contains" selected>
                                                    contains
                                                </option>
                                                <option value="notContain">does not contain</option>
                                                <option value="isEmpty">is empty</option>
                                                <option value="NotEmpty">is not empty</option>
                                            </select>
                                            <div className="input-group-append" style={{ flex: "1 1 33%" }}>
                                                <input type="text" className="form-control" id="validationDefault01" placeholder="Value" defaultValue="" />
                                            </div>
                                        </div>
                                        <a href="#" className="btn btn-lg btn-default btn-icon">
                                            <span className="icon icon-delete" />
                                        </a>
                                    </div>
                                    <a href="#" className="btn btn-lg btn-default btn-block">
                                        <span className="icon icon-plus-circle" />
                                        <span>Add filter</span>
                                    </a>
                                </div>
                                <div className="d-flex gap-xs justify-content-end">
                                    <a href="#" className="btn btn-lg btn-default" data-toggle="dropdown">
                                        Cancel
                                    </a>
                                    <button type="submit" className="btn btn-lg btn-primary" data-toggle="dropdown">
                                        Apply
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="table-actions d-flex flex-nowrap align-items-start gap-xs order-2 order-md-3">
                    <a href="#" className="btn btn-lg btn-transparent text-muted">
                        Reset
                    </a>
                    <a href="#" className="btn btn-lg btn-warning text-nowrap">
                        Save for everyone
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
