import React from "react";
import { useEffect } from "react";
import { select } from "../../../../public/utils/select";

interface FormSelectMultipleProps {}

export const FormSelectMultiple = ({}: FormSelectMultipleProps) => {
    useEffect(() => {
        select();
    }, []);
    return (
        <div className="form-group" style={{width:250}}>
            <label className="required" htmlFor="exemple">
                Tags
            </label>
            <small id="exemple_help" className="form-text text-muted">
                Choose tags to describe this project.
            </small>
            <select id="exemple" required data-hint="type" aria-describedby="exemple_help" className="form-control custom-select-tags" multiple defaultValue="">
                <option value="" disabled>
                    Choose an option...
                </option>
            </select>
            <div className="invalid-feedback">Please choose tags</div>
        </div>
    );
};
