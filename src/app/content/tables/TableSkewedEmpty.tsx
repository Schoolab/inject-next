import React from "react";
import { useEffect } from "react";
import { skewed } from "../../../../public/utils/tables/skewed";

export interface TableElementSkewedEmptyProps {}

export const TableElementSkewedEmpty = ({}: TableElementSkewedEmptyProps) => {
    useEffect(() => {
        skewed();
        return () => {
            // Cleanup
        };
    }, []);
    return (
        <div>
            <table className="table table-striped table-vertical table-skewed responsive w-100" id="doc-table-data-skewed" role="grid">
                <thead>
                    {/* <th class="table-c" style="min-width: 20px;">
                    <div class="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
                        <input type="checkbox" id="selectAll" class="custom-control-input selectAllBulkSelectors" name="select" />
                        <label class="custom-control-label" for="selectAll"></label>
                    </div>
                </th> */}
                    <tr>
                        <th scope="col" style={{ minWidth: 320, maxWidth: 320, width: 320 }}>
                            Name
                        </th>
                        <th scope="col" style={{ minWidth: 32, maxWidth: 32, width: 32 }}>
                            <div className="th-skewed-container">
                                <div className="th-skewed d-flex align-items-center gap-xs">
                                    <p className="font-weight-bold text-truncate flex-fill">Progression</p>
                                </div>
                            </div>
                        </th>
                        <th scope="col" style={{ minWidth: 32, maxWidth: 32, width: 32 }}>
                            <div className="th-skewed-container">
                                <div className="th-skewed-icon text-muted">
                                    <div aria-hidden="true" className="icon icon-emoji">
                                        👀
                                    </div>
                                </div>
                                <div className="th-skewed d-flex align-items-center gap-xs">
                                    <p className="font-weight-bold text-truncate flex-fill">L'importance de la phase d'observation</p>
                                </div>
                            </div>
                        </th>
                        <th scope="col" style={{ minWidth: 32, maxWidth: 32, width: 32 }}>
                            <div className="th-skewed-container">
                                <div className="th-skewed-icon text-muted">
                                    <div aria-hidden="true" className="icon icon-emoji">
                                        🤝
                                    </div>
                                </div>
                                <div className="th-skewed d-flex align-items-center gap-xs">
                                    <p className="font-weight-bold text-truncate flex-fill">Identifier les parties prenantes</p>
                                </div>
                            </div>
                        </th>
                        <th style={{ width: '100%', padding: '0 124px' }} />
                    </tr>
                </thead>
                <tbody>
                    <tr role="row" className="exclude-sort">
                        {/* <td class="table-checkbox">
          <div class="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
              <input type="checkbox" id="1" class="bulkActionSelector custom-control-input" value="1" />
              <label class="custom-control-label" for="1"></label>
          </div>
      </td> */}
                        <th scope="row" data-content="All participants (10)">
                            <div className="d-flex align-items-center flex-fill gap-0">
                                <div className="d-flex align-items-start flex-fill gap-xs">
                                    <div className="text-muted">
                                        <div aria-hidden="true" className="icon icon-community is-24px" />
                                    </div>
                                    <div className="d-flex flex-column flex-fill gap-0">
                                        <p className="font-weight-bold">All participants (10)</p>
                                    </div>
                                </div>
                                <div className="show-on-hover z-1">
                                    <a href="#" className="btn btn-lg btn-muted my-n8px" role="button" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Copy line to clipboard">
                                        <span className="icon icon-copy" />
                                    </a>
                                </div>
                                <div className="dropdown-container z-1" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Options">
                                    <a href="#" className="btn btn-lg btn-muted my-n8px" role="button" data-toggle="dropdown" aria-expanded="false">
                                        <span className="icon icon-options" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a href="#" className="dropdown-item">
                                            Data
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            Manage
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            Workspace
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a href="#" className="dropdown-item">
                                            <span className="dropdown-item--icon icon icon-pencil" />
                                            <span className="dropdown-item--label">Edit</span>
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            <span className="dropdown-item--icon icon icon-copy" />
                                            <span className="dropdown-item--label">Duplicate</span>
                                        </a>
                                        <a href="#" className="dropdown-item is-danger">
                                            <span className="dropdown-item--icon icon icon-delete" />
                                            <span className="dropdown-item--label">Delete</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </th>
                        <td
                            style={{
                                backgroundColor: "var(--bg-interactive)!important",
                                color: "var(--fg-interactive)",
                            }}
                        >
                            <div className="d-flex align-items-center flex-fill gap-0">
                                <div className="d-flex align-items-start flex-fill gap-xs">
                                    <div className="d-flex flex-fill gap-2xs">
                                        <p className="font-weight-bold text-center" style={{ width: "2rem" }}>
                                            43%
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="d-flex align-items-center flex-fill gap-0">
                                <div className="d-flex align-items-start flex-fill gap-xs">
                                    <div className="d-flex flex-fill gap-2xs">
                                        <p className="text-center sr-only-focusable" style={{ width: "2rem" }}>
                                            50%
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="d-flex align-items-center flex-fill gap-0">
                                <div className="d-flex align-items-start flex-fill gap-xs">
                                    <div className="d-flex flex-fill gap-2xs">
                                        <p className="text-center sr-only-focusable" style={{ width: "2rem" }}>
                                            50%
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td style={{ width: '100%', padding: '0 124px' }} />
                    </tr>
                    <tr role="row" className="table-active">
                        {/* <td class="table-checkbox">
          <div class="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
              <input type="checkbox" id="1" class="bulkActionSelector custom-control-input" value="1" />
              <label class="custom-control-label" for="1"></label>
          </div>
      </td> */}
                        <th scope="row" data-content="Alexandra Jolly">
                            <div className="d-flex align-items-center flex-fill gap-0">
                                <div className="d-flex align-items-start flex-fill gap-xs">
                                    <div className="thumbnail is-sm is-oval">
                                        <img src="https://inject-prod.s3.amazonaws.com/images/2216e7ab-c701-4503-83a2-ae7b91afb15d/sq150.jpeg" />
                                    </div>
                                    <div className="d-flex flex-fill gap-2xs">
                                        <a href="#" className="underlined-link stretched-link">
                                            Alexandra Jolly
                                        </a>
                                        <span className="icon icon-new-tab text-muted" />
                                    </div>
                                </div>
                                <div className="show-on-hover z-1">
                                    <a href="#" className="btn btn-lg btn-muted my-n8px" role="button" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Copy line to clipboard">
                                        <span className="icon icon-copy" />
                                    </a>
                                </div>
                                <div className="dropdown-container z-1" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Options">
                                    <a href="#" className="btn btn-lg btn-muted my-n8px" role="button" data-toggle="dropdown" aria-expanded="false">
                                        <span className="icon icon-options" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a href="#" className="dropdown-item">
                                            Data
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            Manage
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            Workspace
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a href="#" className="dropdown-item">
                                            <span className="dropdown-item--icon icon icon-pencil" />
                                            <span className="dropdown-item--label">Edit</span>
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            <span className="dropdown-item--icon icon icon-copy" />
                                            <span className="dropdown-item--label">Duplicate</span>
                                        </a>
                                        <a href="#" className="dropdown-item is-danger">
                                            <span className="dropdown-item--icon icon icon-delete" />
                                            <span className="dropdown-item--label">Delete</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </th>
                        <td>
                            <div className="d-flex align-items-center flex-fill gap-0">
                                <div className="d-flex align-items-start flex-fill gap-xs">
                                    <div className="d-flex flex-fill gap-2xs">
                                        <p className="font-weight-bold text-center" style={{ width: "2rem" }}>
                                            46%
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="d-flex align-items-center flex-fill gap-0">
                                <div className="d-flex align-items-start justify-content-center flex-fill gap-xs">
                                    <svg className="progress-circle-container is-sm" viewBox="0 0 32 32" data-percent={25} style={{ ["--percent" as any]: 25 }}>
                                        <circle className="progress-circle progress-circle-bg" />
                                        <circle className="progress-circle progress-circle-percent" />
                                        <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                        {/* <text class="progress-circle-text" x="16" y="20">567/756</text> */}
                                    </svg>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="d-flex align-items-center flex-fill gap-0">
                                <div className="d-flex align-items-start justify-content-center flex-fill gap-xs">
                                    <svg className="progress-circle-container is-sm" viewBox="0 0 32 32" data-percent={25} style={{ ["--percent" as any]: 25 }}>
                                        <circle className="progress-circle progress-circle-bg" />
                                        <circle className="progress-circle progress-circle-percent" />
                                        <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                        {/* <text class="progress-circle-text" x="16" y="20">567/756</text> */}
                                    </svg>
                                </div>
                            </div>
                        </td>
                        <td style={{ width: '100%', padding: '0 124px' }} />
                    </tr>
                    <tr role="row" className="table-active">
                        {/* <td class="table-checkbox">
          <div class="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
              <input type="checkbox" id="1" class="bulkActionSelector custom-control-input" value="1" />
              <label class="custom-control-label" for="1"></label>
          </div>
      </td> */}
                        <th scope="row" data-content="Schoolab">
                            <div className="d-flex align-items-center flex-fill gap-0">
                                <div className="d-flex align-items-start flex-fill gap-xs">
                                    <div aria-hidden="true" className="icon icon--letter is-sm">
                                        <span aria-hidden="true">S</span>
                                    </div>
                                    <div className="d-flex flex-fill gap-2xs">
                                        <a href="#" className="underlined-link stretched-link">
                                            Schoolab
                                        </a>
                                        <span className="icon icon-new-tab text-muted" />
                                    </div>
                                </div>
                                <div className="show-on-hover z-1">
                                    <a href="#" className="btn btn-lg btn-muted my-n8px" role="button" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Copy line to clipboard">
                                        <span className="icon icon-copy" />
                                    </a>
                                </div>
                                <div className="dropdown-container z-1" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Options">
                                    <a href="#" className="btn btn-lg btn-muted my-n8px" role="button" data-toggle="dropdown" aria-expanded="false">
                                        <span className="icon icon-options" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a href="#" className="dropdown-item">
                                            Data
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            Manage
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            Workspace
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a href="#" className="dropdown-item">
                                            <span className="dropdown-item--icon icon icon-pencil" />
                                            <span className="dropdown-item--label">Edit</span>
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            <span className="dropdown-item--icon icon icon-copy" />
                                            <span className="dropdown-item--label">Duplicate</span>
                                        </a>
                                        <a href="#" className="dropdown-item is-danger">
                                            <span className="dropdown-item--icon icon icon-delete" />
                                            <span className="dropdown-item--label">Delete</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </th>
                        <td>
                            <div className="d-flex align-items-center flex-fill gap-0">
                                <div className="d-flex align-items-start flex-fill gap-xs">
                                    <div className="d-flex flex-fill gap-2xs">
                                        <p className="font-weight-bold text-center" style={{ width: "2rem" }}>
                                            46%
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="d-flex align-items-center flex-fill gap-0">
                                <div className="d-flex align-items-start justify-content-center flex-fill gap-xs">
                                    <svg className="progress-circle-container is-sm" viewBox="0 0 32 32" data-percent={25} style={{ ["--percent" as any]: 25 }}>
                                        <circle className="progress-circle progress-circle-bg" />
                                        <circle className="progress-circle progress-circle-percent" />
                                        <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                        {/* <text class="progress-circle-text" x="16" y="20">567/756</text> */}
                                    </svg>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="d-flex align-items-center flex-fill gap-0">
                                <div className="d-flex align-items-start justify-content-center flex-fill gap-xs">
                                    <svg className="progress-circle-container is-sm" viewBox="0 0 32 32" data-percent={25} style={{ ["--percent" as any]: 25 }}>
                                        <circle className="progress-circle progress-circle-bg" />
                                        <circle className="progress-circle progress-circle-percent" />
                                        <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                        {/* <text class="progress-circle-text" x="16" y="20">567/756</text> */}
                                    </svg>
                                </div>
                            </div>
                        </td>
                        <td style={{ width: '100%', padding: '0 124px' }} />
                    </tr>
                    <tr role="row">
                        {/* <td class="table-checkbox">
          <div class="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
              <input type="checkbox" id="1" class="bulkActionSelector custom-control-input" value="1" />
              <label class="custom-control-label" for="1"></label>
          </div>
      </td> */}
                        <th scope="row" data-content="Impact (1)">
                            <div className="d-flex align-items-center flex-fill gap-0">
                                <div className="d-flex align-items-start flex-fill gap-xs">
                                    <div className="text-muted">
                                        <div aria-hidden="true" className="icon is-24px icon-emoji">
                                            🌱
                                        </div>
                                    </div>
                                    <div className="d-flex flex-fill gap-2xs">
                                        <a href="#" className="underlined-link stretched-link">
                                            Impact (1)
                                        </a>
                                        <span className="icon icon-new-tab text-muted" />
                                    </div>
                                </div>
                                <div className="show-on-hover z-1">
                                    <a href="#" className="btn btn-lg btn-muted my-n8px" role="button" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Copy line to clipboard">
                                        <span className="icon icon-copy" />
                                    </a>
                                </div>
                                <div className="dropdown-container z-1" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Options">
                                    <a href="#" className="btn btn-lg btn-muted my-n8px" role="button" data-toggle="dropdown" aria-expanded="false">
                                        <span className="icon icon-options" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a href="#" className="dropdown-item">
                                            Data
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            Manage
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            Workspace
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a href="#" className="dropdown-item">
                                            <span className="dropdown-item--icon icon icon-pencil" />
                                            <span className="dropdown-item--label">Edit</span>
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            <span className="dropdown-item--icon icon icon-copy" />
                                            <span className="dropdown-item--label">Duplicate</span>
                                        </a>
                                        <a href="#" className="dropdown-item is-danger">
                                            <span className="dropdown-item--icon icon icon-delete" />
                                            <span className="dropdown-item--label">Delete</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </th>
                        <td>
                            <div className="d-flex align-items-center flex-fill gap-0">
                                <div className="d-flex align-items-start flex-fill gap-xs">
                                    <div className="d-flex flex-fill gap-2xs">
                                        <p className="font-weight-bold text-center" style={{ width: "2rem" }}>
                                            0%
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="d-flex align-items-center flex-fill gap-0">
                                <div className="d-flex align-items-start justify-content-center flex-fill gap-xs">
                                    <svg className="progress-circle-container is-sm" viewBox="0 0 32 32" data-percent={0} style={{ ["--percent" as any]: 0 }}>
                                        <circle className="progress-circle progress-circle-bg" />
                                        <circle className="progress-circle progress-circle-percent" />
                                        <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                        {/* <text class="progress-circle-text" x="16" y="20">567/756</text> */}
                                    </svg>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="d-flex align-items-center flex-fill gap-0">
                                <div className="d-flex align-items-start justify-content-center flex-fill gap-xs">
                                    <svg className="progress-circle-container is-sm" viewBox="0 0 32 32" data-percent={0} style={{ ["--percent" as any]: 0 }}>
                                        <circle className="progress-circle progress-circle-bg" />
                                        <circle className="progress-circle progress-circle-percent" />
                                        <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                        {/* <text class="progress-circle-text" x="16" y="20">567/756</text> */}
                                    </svg>
                                </div>
                            </div>
                        </td>
                        <td style={{ width: '100%', padding: '0 124px' }} />
                    </tr>
                    <tr role="row">
                        {/* <td class="table-checkbox">
          <div class="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
              <input type="checkbox" id="1" class="bulkActionSelector custom-control-input" value="1" />
              <label class="custom-control-label" for="1"></label>
          </div>
      </td> */}
                        <th scope="row" data-content="Freelance (0)">
                            <div className="d-flex align-items-center flex-fill gap-0">
                                <div className="d-flex align-items-start flex-fill gap-xs">
                                    <div className="text-muted">
                                        <div aria-hidden="true" className="icon is-24px icon-emoji">
                                            🎒
                                        </div>
                                    </div>
                                    <div className="d-flex flex-fill gap-2xs">
                                        <a href="#" className="underlined-link stretched-link">
                                            Freelance (0)
                                        </a>
                                        <span className="icon icon-new-tab text-muted" />
                                    </div>
                                </div>
                                <div className="show-on-hover z-1">
                                    <a href="#" className="btn btn-lg btn-muted my-n8px" role="button" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Copy line to clipboard">
                                        <span className="icon icon-copy" />
                                    </a>
                                </div>
                                <div className="dropdown-container z-1" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Options">
                                    <a href="#" className="btn btn-lg btn-muted my-n8px" role="button" data-toggle="dropdown" aria-expanded="false">
                                        <span className="icon icon-options" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a href="#" className="dropdown-item">
                                            Data
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            Manage
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            Workspace
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a href="#" className="dropdown-item">
                                            <span className="dropdown-item--icon icon icon-pencil" />
                                            <span className="dropdown-item--label">Edit</span>
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            <span className="dropdown-item--icon icon icon-copy" />
                                            <span className="dropdown-item--label">Duplicate</span>
                                        </a>
                                        <a href="#" className="dropdown-item is-danger">
                                            <span className="dropdown-item--icon icon icon-delete" />
                                            <span className="dropdown-item--label">Delete</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </th>
                        <td>
                            <div className="d-flex align-items-center flex-fill gap-0">
                                <div className="d-flex align-items-start flex-fill gap-xs">
                                    <div className="d-flex flex-fill gap-2xs">
                                        <p className="text-center" style={{ width: "2rem" }}>
                                            N/A
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td />
                        <td />
                        <td style={{ width: '100%', padding: '0 124px' }} />
                    </tr>
                    <tr role="row">
                        {/* <td class="table-checkbox">
          <div class="custom-control custom-checkbox table-checkbox--control nolabel-checkbox">
              <input type="checkbox" id="1" class="bulkActionSelector custom-control-input" value="1" />
              <label class="custom-control-label" for="1"></label>
          </div>
      </td> */}
                        <th scope="row" data-content="External (0)">
                            <div className="d-flex align-items-center flex-fill gap-0">
                                <div className="d-flex align-items-start flex-fill gap-xs">
                                    <div className="text-muted">
                                        <div aria-hidden="true" className="icon is-24px icon-emoji">
                                            🌍
                                        </div>
                                    </div>
                                    <div className="d-flex flex-fill gap-2xs">
                                        <a href="#" className="underlined-link stretched-link">
                                            External (0)
                                        </a>
                                        <span className="icon icon-new-tab text-muted" />
                                    </div>
                                </div>
                                <div className="show-on-hover z-1">
                                    <a href="#" className="btn btn-lg btn-muted my-n8px" role="button" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Copy line to clipboard">
                                        <span className="icon icon-copy" />
                                    </a>
                                </div>
                                <div className="dropdown-container z-1" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Options">
                                    <a href="#" className="btn btn-lg btn-muted my-n8px" role="button" data-toggle="dropdown" aria-expanded="false">
                                        <span className="icon icon-options" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a href="#" className="dropdown-item">
                                            Data
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            Manage
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            Workspace
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a href="#" className="dropdown-item">
                                            <span className="dropdown-item--icon icon icon-pencil" />
                                            <span className="dropdown-item--label">Edit</span>
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            <span className="dropdown-item--icon icon icon-copy" />
                                            <span className="dropdown-item--label">Duplicate</span>
                                        </a>
                                        <a href="#" className="dropdown-item is-danger">
                                            <span className="dropdown-item--icon icon icon-delete" />
                                            <span className="dropdown-item--label">Delete</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </th>
                        <td>
                            <div className="d-flex align-items-center flex-fill gap-0">
                                <div className="d-flex align-items-start flex-fill gap-xs">
                                    <div className="d-flex flex-fill gap-2xs">
                                        <p className="text-center" style={{ width: "2rem" }}>
                                            N/A
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td />
                        <td />
                        <td style={{ width: '100%', padding: '0 124px' }} />
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
