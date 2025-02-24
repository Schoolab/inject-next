import React from "react";

import { Dropdown } from "@/app/components/dropdowns/Dropdown";
import { DropdownMenu } from "@/app/components/dropdowns/DropdownMenu";
import { DropdownItem } from "@/app/components/dropdowns/DropdownItem";
import { DropdownDivider } from "@/app/components/dropdowns/DropdownDivider";

interface DropdownNotificationsProps {}

export const DropdownNotifications = ({}: DropdownNotificationsProps) => {
    return (
        <Dropdown>
            <DropdownMenu direction="left" show={true} addClass="dropdown-menu-notifications">
            <form className="d-flex flex-column gap-md px-16px py-8px">
  <div className="form-group d-flex flex-column gap-xs">
    <label htmlFor="filterBy">Send me a notification...</label>
    <div id="sort1" className="d-flex gap-xs align-items-center">
      <span className="d-flex flex-shrink-0" style={{ width: 80 }}>
        When
      </span>
      <div className="input-group">
        <div className="input-group-prepend" style={{ flex: "1 1 50%" }}>
          <input
            type="number"
            className="form-control"
            id="validationDefault01"
            placeholder="Value"
            defaultValue=""
          />
        </div>
        <select
          name="filters"
          id="filter-select"
          className="filterSelect custom-select"
          style={{ flex: "1 1 50%" }}
        >
          <option value="added" selected>
            items added
          </option>
          <option value="updated">items updated</option>
        </select>
      </div>
      <a href="#" className="btn btn-lg btn-default btn-icon">
        <span className="icon icon-delete" />
      </a>
    </div>
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
        <input
          className="custom-control-input"
          type="checkbox"
          id="push"
          defaultValue="push"
          disabled
        />
        <label className="custom-control-label" htmlFor="push">
          Push notifications
        </label>
      </div>
      <div className="custom-control custom-checkbox">
        <input
          className="custom-control-input"
          type="checkbox"
          id="email"
          defaultValue="email"
          defaultChecked
        />
        <label className="custom-control-label" htmlFor="email">
          Email
        </label>
      </div>
      <div className="custom-control custom-checkbox">
        <input
          className="custom-control-input"
          type="checkbox"
          id="digest"
          defaultValue="digest"
          defaultChecked
        />
        <label className="custom-control-label" htmlFor="digest">
          Daily digest
        </label>
      </div>
    </div>
  </div>
  <div className="d-flex">
    <a href="#" className="btn btn-lg btn-danger" data-toggle="dropdown">
      Delete notifications
    </a>
    <div className="d-flex gap-xs justify-content-end flex-fill">
      <a href="#" className="btn btn-lg btn-default" data-toggle="dropdown">
        Cancel
      </a>
      <button
        type="submit"
        className="btn btn-lg btn-primary"
        data-toggle="dropdown"
      >
        Apply
      </button>
    </div>
  </div>
</form>

            </DropdownMenu>
        </Dropdown>
    );
};
