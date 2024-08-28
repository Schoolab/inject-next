import React from "react";

interface FormInputProps {}

export const FormInput = ({}: FormInputProps) => {
    return (
        <div className="form-group">
            <label className="required" htmlFor="exemple">
                Name
            </label>
            <small id="exemple_help" className="form-text text-muted">
                This is visible to participants on <a href="#">courses list</a>.
            </small>
            <input type="text" id="exemple" required data-hint="name" aria-describedby="exemple_help" className="form-control" defaultValue="" placeholder="Your response here..." />
            <div className="invalid-feedback">Please enter a message in the textarea.</div>
        </div>
    );
};
