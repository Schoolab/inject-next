import React from "react";
// import { useEffect } from "react";
// import { dropdownNotSaved } from "../../../../../public/utils/dropdownNotSaved";
export interface TableElementNotificationsProps {}

export const TableElementNotifications = ({}: TableElementNotificationsProps) => {
    // useEffect(() => {
    //     dropdownNotSaved();
    // }, []);
    return (
        <>
  <div
    id="tables-filters"
    className="d-flex flex-wrap align-items-sm-start gap-xs"
  >
    <form className="d-flex flex-grow-1 flex-sm-grow-0 order-1">
      <input
        name="search"
        autoComplete="off"
        type="search"
        id="search"
        className="form-control w-100 w-md-auto field-sizing"
        style={{ maxWidth: "100%" }}
        aria-describedby="search"
        placeholder="Search..."
        defaultValue=""
      />
    </form>
    <div className="d-flex flex-column flex-fill flex-sm-row gap-xs order-3 order-sm-2">
      <div className="dropdown" data-save-to-close="true">
        <a
          className="btn btn-lg btn-default dropdown-toggle w-100"
          href="#"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          data-boundary="window"
        >
          <span className="icon icon-sort-ascending" />
          <span className="d-sm-none d-md-flex">Sort by</span> <span>Name</span>
        </a>
        <div
          className="dropdown-menu"
          style={{ width: 512, maxWidth: "calc(100% - 2rem)" }}
        >
          <form className="d-flex flex-column gap-md px-16px py-8px">
            <div className="form-group d-flex flex-column gap-xs">
              <label htmlFor="sortBy">In this view, sort by...</label>
              <div id="sort1" className="d-flex gap-xs align-items-center">
                <div className="input-group">
                  <div
                    className="input-group-prepend"
                    style={{ flex: "1 1 50%" }}
                  >
                    <select
                      name="filters"
                      id="filter-select"
                      className="filterSelect custom-select"
                    >
                      <option value="name">Name</option>
                      <option value="date">Date</option>
                      <option value="tags">Tags</option>
                      <option value="col">Column</option>
                      <option value="col">Column</option>
                      <option value="col">Column</option>
                    </select>
                  </div>
                  <select
                    name="filters"
                    id="filter-select"
                    className="filterSelect custom-select"
                    style={{ flex: "1 1 50%" }}
                  >
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
              <a
                href="#"
                className="btn btn-lg btn-default"
                data-toggle="dropdown"
              >
                Cancel
              </a>
              <button
                type="submit"
                className="btn btn-lg btn-primary disabled"
                data-toggle="dropdown"
              >
                Apply
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        className="dropdown d-flex flex-nowrap gap-xs"
        data-save-to-close="true"
      >
        <a
          className="btn btn-lg btn-transparent text-muted"
          href="#"
          role="button"
          data-reference="parent"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          data-boundary="window"
        >
          <span className="icon icon-plus-circle" />
          <span>Add filter</span>
        </a>
        <div
          className="dropdown-menu"
          style={{ width: 512, maxWidth: "calc(100% - 2rem)" }}
        >
          <form className="d-flex flex-column gap-md px-16px py-8px">
            <div className="form-group d-flex flex-column gap-xs">
              <label htmlFor="filterBy">In this view, filter by...</label>
              <a href="#" className="btn btn-lg btn-default btn-block">
                <span className="icon icon-plus-circle" />
                <span>Add filter</span>
              </a>
            </div>
            <div className="d-flex gap-xs justify-content-end">
              <a
                href="#"
                className="btn btn-lg btn-default"
                data-toggle="dropdown"
              >
                Cancel
              </a>
              <button
                type="submit"
                className="btn btn-lg btn-primary disabled"
                data-toggle="dropdown"
              >
                Apply
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="d-flex gap-xs order-2 order-sm-3">
      <div className="d-flex gap-xs gap-sm-0px">
        <div
          className="dropdown"
          data-toggle="tooltip"
          data-placement="top"
          data-original-title="Manage notifications subscriptions"
          data-boundary="window"
          data-save-to-close="true"
        >
          <a
            href="#"
            className="btn btn-lg btn-transparent btn-icon text-primary"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            aria-label="Manage notifications subscriptions"
            data-boundary="window"
          >
            <span className="icon icon-notifications-active" />
          </a>
          <div
            className="dropdown-menu dropdown-menu-right"
            style={{ width: 512, maxWidth: "calc(100% - 2rem)" }}
          >
            <form className="d-flex flex-column gap-md px-16px py-8px">
              <div className="form-group d-flex flex-column gap-xs">
                <label htmlFor="filterBy">Send me a notification...</label>
                <div id="sort1" className="d-flex gap-xs align-items-center">
                  <span className="d-flex flex-shrink-0" style={{ width: 80 }}>
                    When
                  </span>
                  <div className="input-group">
                    <div
                      className="input-group-prepend"
                      style={{ flex: "1 1 50%" }}
                    >
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
                <a
                  href="#"
                  className="btn btn-lg btn-danger"
                  data-toggle="dropdown"
                >
                  Delete notifications
                </a>
                <div className="d-flex gap-xs justify-content-end flex-fill">
                  <a
                    href="#"
                    className="btn btn-lg btn-default"
                    data-toggle="dropdown"
                  >
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
          </div>
        </div>
        <a
          href="#"
          className="btn btn-lg btn-transparent btn-icon text-muted"
          data-toggle="tooltip"
          data-placement="top"
          data-original-title="Download all data in this view"
          data-boundary="window"
        >
          <span className="icon icon-download" />
        </a>
      </div>
      <a href="#" id="btn-new" className="btn btn-lg btn-primary text-nowrap">
        <span className="icon icon-plus-circle" />
        <span>
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
      zIndex: 400
    }}
    className="toast is-warning fade"
    id="modalHidePrevented"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    data-autohide="false"
  >
    <div className="toast-body">
      <span className="mr-auto">
        You cannot close this modal until you saved or canceled your changes.
      </span>
      <button
        className="ml-2 my-1 close"
        data-dismiss="toast"
        data-delay={6000}
        aria-label="close"
      >
        <div className="icon icon-close" />
      </button>
    </div>
  </div>
</>

    );
};
