import React from "react";

interface FormNumberProps {}

export const FormNumber = ({}: FormNumberProps) => {
    return (
        <div className="form-group">
            <label className="required" htmlFor="exemple">
                Total points
            </label>
            <small id="exemple_help" className="form-text text-muted">
                You still have 8 points to distribute.
            </small>
            <input type="number" id="exemple" required data-hint="name" aria-describedby="exemple_help" className="form-control" defaultValue="" min="0" max="8" placeholder="0" />
            <div className="invalid-feedback">Please enter a message in the textarea.</div>
        </div>
    );
};
