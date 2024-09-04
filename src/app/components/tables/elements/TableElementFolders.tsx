import React from "react";
export interface TableElementFoldersProps {}

export const TableElementFolders = ({}: TableElementFoldersProps) => {
    return (
        <div id="tables-folders" className="grid row-gap-md pb-16px border-bottom">
            <div className="g-col-12 g-col-sm-6 g-col-lg-3">
                <div className="item is-bordered active">
                    <div className="item-row gap-sm">
                        <span className="icon icon-folder is-sm text-muted" />
                        <div className="item-content">
                            <a href="#" className="item-title h4 mb-none stretched-link text-truncate">
                                All
                            </a>
                            <ul className="item-caption metas small is-list">
                                <li>120 resources</li>
                            </ul>
                        </div>
                        <div className="dropdown z-1">
                            <a className="btn btn-lg btn-transparent btn-icon text-muted" role="button" data-toggle="dropdown" aria-expanded="false" data-boundary="window" href="#">
                                <span className="icon icon-options" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" data-toggle="collapse" data-target="#question1">
                                    Edit
                                </a>
                                <a className="dropdown-item is-danger">Delete</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="g-col-12 g-col-sm-6 g-col-lg-3">
                <div className="item is-bordered ">
                    <div className="item-row gap-sm">
                        <span className="icon icon-folder is-sm text-muted" />
                        <div className="item-content">
                            <a href="#" className="item-title h4 mb-none stretched-link text-truncate">
                                Learning course
                            </a>
                            <ul className="item-caption metas small is-list">
                                <li>4 resources</li>
                            </ul>
                        </div>
                        <div className="dropdown z-1">
                            <a className="btn btn-lg btn-transparent btn-icon text-muted" role="button" data-toggle="dropdown" aria-expanded="false" data-boundary="window" href="#">
                                <span className="icon icon-options" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" data-toggle="collapse" data-target="#question1">
                                    Edit
                                </a>
                                <a className="dropdown-item is-danger">Delete</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="g-col-12 g-col-sm-6 g-col-lg-3">
                <div className="item is-bordered ">
                    <div className="item-row gap-sm">
                        <span className="icon icon-folder is-sm text-muted" />
                        <div className="item-content">
                            <a href="#" className="item-title h4 mb-none stretched-link text-truncate">
                                A very long label that is not entirely visible
                            </a>
                            <ul className="item-caption metas small is-list">
                                <li>4 resources</li>
                            </ul>
                        </div>
                        <div className="dropdown z-1">
                            <a className="btn btn-lg btn-transparent btn-icon text-muted" role="button" data-toggle="dropdown" aria-expanded="false" data-boundary="window" href="#">
                                <span className="icon icon-options" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" data-toggle="collapse" data-target="#question1">
                                    Edit
                                </a>
                                <a className="dropdown-item is-danger">Delete</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="g-col-12 g-col-sm-6 g-col-lg-3">
                <div className="item is-bordered ">
                    <div className="item-row gap-sm">
                        <span className="icon icon-folder is-sm text-muted" />
                        <div className="item-content">
                            <a href="#" className="item-title h4 mb-none stretched-link text-truncate">
                                Name
                            </a>
                            <ul className="item-caption metas small is-list">
                                <li>4 resources</li>
                            </ul>
                        </div>
                        <div className="dropdown z-1">
                            <a className="btn btn-lg btn-transparent btn-icon text-muted" role="button" data-toggle="dropdown" aria-expanded="false" data-boundary="window" href="#">
                                <span className="icon icon-options" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" data-toggle="collapse" data-target="#question1">
                                    Edit
                                </a>
                                <a className="dropdown-item is-danger">Delete</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
