import React from "react";

interface FormGroupInputProps {}

export const FormGroupInput = ({}: FormGroupInputProps) => {
    return (
        <div className="form-group">
            <label className="required" htmlFor="exemple">
                Dates
            </label>
            <small id="exemple_help" className="form-text text-muted">
                These dates are informational and doesn’t restrict access. <a href="#">Learn more</a>
            </small>
            <div className="input-group">
                <div className="input-group-prepend flex-fill">
                    <input type="date" id="exemple" required data-hint="name" aria-describedby="exemple_help" className="form-control" defaultValue="2024-07-22" />
                </div>
                <span className="input-group-text">to</span>
                <div className="input-group-append flex-fill">
                    <input type="date" id="exemple" required data-hint="name" aria-describedby="exemple_help" className="form-control" defaultValue="" min="2024-07-22" />
                </div>
            </div>
            <div className="invalid-feedback">Please enter a message in the textarea.</div>
        </div>
    );
};
