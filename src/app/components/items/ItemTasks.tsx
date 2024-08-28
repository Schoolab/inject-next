import React from "react";
export interface ItemTasksProps {}

export const ItemTasks = ({}: ItemTasksProps) => {
    return (
        <div className="d-flex flex-column">
            <div className="item is-completed is-static is-bordered">
                <div className="item-row">
                    <div className="item-row">
                        <div className="item-icon is-darker icon icon-information-outline" />
                        <div className="item-content">
                            <h4 className="item-title">Complete the basic info</h4>
                            <span className="small text-muted">Review the name, the description, dates and cover of the program</span>
                        </div>
                    </div>
                    <div className="item-options">
                        <div className="p-xs">
                            <span className="small text-muted d-none">0/3</span>
                            <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={100} style={{ ["--percent" as any]: 100 }}>
                                <circle className="progress-circle progress-circle-bg" />
                                <circle className="progress-circle progress-circle-percent" />
                                <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                            </svg>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-lg btn-default dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                View
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#">
                                    Action
                                </a>
                                <a className="dropdown-item" href="#">
                                    Another action
                                </a>
                                <a className="dropdown-item" href="#">
                                    Something else here
                                </a>
                                <div role="separator" className="dropdown-divider" />
                                <a className="dropdown-item" href="#">
                                    Separated link
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item is-static is-bordered">
                <div className="item-row">
                    <div className="item-row">
                        <div className="item-icon is-darker icon icon-learning" />
                        <div className="item-content">
                            <h4 className="item-title">Add content and resources to the learning course</h4>
                            <span className="small text-muted">Add at least a module, a capsule and a task to the learning course</span>
                        </div>
                    </div>
                    <div className="item-options">
                        <div className="p-xs">
                            <span className="small text-muted">1/3</span>
                            <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={30} style={{ ["--percent" as any]: 30 }}>
                                <circle className="progress-circle progress-circle-bg" />
                                <circle className="progress-circle progress-circle-percent" />
                                <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                            </svg>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-lg btn-primary dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Add
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#">
                                    Action
                                </a>
                                <a className="dropdown-item" href="#">
                                    Another action
                                </a>
                                <a className="dropdown-item" href="#">
                                    Something else here
                                </a>
                                <div role="separator" className="dropdown-divider" />
                                <a className="dropdown-item" href="#">
                                    Separated link
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item is-static is-bordered">
                <div className="item-row">
                    <div className="item-row">
                        <div className="item-icon is-darker icon icon-label" />
                        <div className="item-content">
                            <h4 className="item-title">Create participants types</h4>
                            <span className="small text-muted">Complete this if you need multiple type of participants</span>
                        </div>
                    </div>
                    <div className="item-options">
                        <div className="p-xs">
                            <span className="small text-muted d-none">0/3</span>
                            <svg className="progress-circle-container is-small flex-shrink-0 d-none" viewBox="0 0 32 32" data-percent={100} style={{ ["--percent" as any]: 100 }}>
                                <circle className="progress-circle progress-circle-bg" />
                                <circle className="progress-circle progress-circle-percent" />
                                <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                            </svg>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-lg btn-primary dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Add
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#">
                                    Action
                                </a>
                                <a className="dropdown-item" href="#">
                                    Another action
                                </a>
                                <a className="dropdown-item" href="#">
                                    Something else here
                                </a>
                                <div role="separator" className="dropdown-divider" />
                                <a className="dropdown-item" href="#">
                                    Separated link
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item is-static is-bordered">
                <div className="item-row">
                    <div className="item-row">
                        <div className="item-icon is-darker icon icon-summary" />
                        <div className="item-content">
                            <h4 className="item-title">Add a brief for experts</h4>
                            <span className="small text-muted">Use this to give instructions on the expert dashboard</span>
                        </div>
                    </div>
                    <div className="item-options">
                        <div className="p-xs">
                            <span className="small text-muted d-none">1/3</span>
                            <svg className="progress-circle-container is-small flex-shrink-0 d-none" viewBox="0 0 32 32" data-percent={30} style={{ ["--percent" as any]: 30 }}>
                                <circle className="progress-circle progress-circle-bg" />
                                <circle className="progress-circle progress-circle-percent" />
                                <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                            </svg>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-lg btn-primary dropdown-toggle" data-boundary="window" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Edit
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#">
                                    Action
                                </a>
                                <a className="dropdown-item" href="#">
                                    Another action
                                </a>
                                <a className="dropdown-item" href="#">
                                    Something else here
                                </a>
                                <div role="separator" className="dropdown-divider" />
                                <a className="dropdown-item" href="#">
                                    Separated link
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
