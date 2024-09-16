import React from "react";

interface FormOptionsProps {}

export const FormOptions = ({}: FormOptionsProps) => {
    return (
        <fieldset className="form-group">
            <legend className="label">Choices</legend>
            <small id="exemple_help" className="form-text text-muted">
                Add choices to this question.
            </small>
            <div className="d-flex flex-column gap-xs">
                <div className="d-flex align-items-center gap-2xs">
                    <div className="dropdown">
                        <a href="#" className="btn btn-sm btn-transparent" data-toggle="dropdown" aria-expanded="false" data-boundary="window">
                            <span className="icon icon-drag" />
                        </a>
                        <div className="dropdown-menu">
                            <h6 className="dropdown-header">Position</h6>
                            <a className="dropdown-item">
                                <span className="dropdown-item--label">Send to top</span>
                            </a>
                            <a className="dropdown-item">
                                <span className="dropdown-item--label">Move up</span>
                            </a>
                            <a className="dropdown-item">
                                <span className="dropdown-item--label">Move down</span>
                            </a>
                            <a className="dropdown-item">
                                <span className="dropdown-item--label">Send to bottom</span>
                            </a>
                            <div className="dropdown-divider" />
                            <h6 className="dropdown-header">Actions</h6>
                            <a className="dropdown-item" data-toggle="collapse" data-target="#question1">
                                <span className="dropdown-item--label">Duplicate</span>
                            </a>
                            <a className="dropdown-item is-danger">
                                <span className="dropdown-item--label">Delete</span>
                            </a>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="sr-only" htmlFor="option1">
                            Name
                        </label>
                        <input type="text" className="form-control" id="option1" defaultValue="Option #1" placeholder="Option value here..." />
                    </div>
                    <a href="#" className="btn btn-sm btn-transparent">
                        <span className="icon icon-close" />
                    </a>
                </div>
                <div className="d-flex align-items-center gap-2xs">
                    <div className="dropdown">
                        <a href="#" className="btn btn-sm btn-transparent" data-toggle="dropdown" aria-expanded="false" data-boundary="window">
                            <span className="icon icon-drag" />
                        </a>
                        <div className="dropdown-menu">
                            <h6 className="dropdown-header">Position</h6>
                            <a className="dropdown-item">
                                <span className="dropdown-item--label">Send to top</span>
                            </a>
                            <a className="dropdown-item">
                                <span className="dropdown-item--label">Move up</span>
                            </a>
                            <a className="dropdown-item">
                                <span className="dropdown-item--label">Move down</span>
                            </a>
                            <a className="dropdown-item">
                                <span className="dropdown-item--label">Send to bottom</span>
                            </a>
                            <div className="dropdown-divider" />
                            <h6 className="dropdown-header">Actions</h6>
                            <a className="dropdown-item" data-toggle="collapse" data-target="#question1">
                                <span className="dropdown-item--label">Duplicate</span>
                            </a>
                            <a className="dropdown-item is-danger">
                                <span className="dropdown-item--label">Delete</span>
                            </a>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="sr-only" htmlFor="option1">
                            Name
                        </label>
                        <input type="text" className="form-control" id="option1" placeholder="Option value here..." />
                    </div>
                    <a href="#" className="btn btn-sm btn-transparent">
                        <span className="icon icon-close" />
                    </a>
                </div>
                <button className="btn btn-sm btn-default btn-muted text-nowrap align-self-start" role="button">
                    <span className="icon icon-plus-circle" />
                    <span>Add option</span>
                </button>
            </div>
        </fieldset>
    );
};
