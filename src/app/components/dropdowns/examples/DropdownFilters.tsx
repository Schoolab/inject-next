import React from "react";

import { Dropdown } from "@/app/components/dropdowns/Dropdown";
import { DropdownMenu } from "@/app/components/dropdowns/DropdownMenu";
import { DropdownItem } from "@/app/components/dropdowns/DropdownItem";
import { DropdownDivider } from "@/app/components/dropdowns/DropdownDivider";

interface DropdownFiltersProps {}

export const DropdownFilters = ({}: DropdownFiltersProps) => {
    return (
        <Dropdown>
            <DropdownMenu direction="left" show={true} addClass="dropdown-menu-filters">
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
            </DropdownMenu>
        </Dropdown>
    );
};
