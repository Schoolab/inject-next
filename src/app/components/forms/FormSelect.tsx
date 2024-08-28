import React from "react";
import { useEffect } from "react";
import { select } from "../../../../public/utils/select";


interface FormSelectProps {}

export const FormSelect = ({}: FormSelectProps) => {
    useEffect(() => {
        select();
    }, []);
    return (
        <div className="form-group">
            <label className="required" htmlFor="exemple">
                Type
            </label>
            <small id="exemple_help" className="form-text text-muted">
                Choose the type of this custom field.
            </small>
            <select id="exemple" required data-hint="type" aria-describedby="exemple_help" className="form-control custom-select" defaultValue="">
                <option value="" disabled>Choose an option...</option>
                <option value="short">
                    Short text
                </option>
                <option value="long">Long text</option>
                <option value="unique_select">Unique choice (select)</option>
                <option value="unique_radio">Unique choice (radio)</option>
                <option value="multiple">Multiple choices</option>
                <option value="checklist">Checklist</option>
                <option value="resources">Resources</option>
                <option value="links">Links</option>
                <option value="rating">Rating</option>
                <option value="nbs">NPS</option>
            </select>
            <div className="invalid-feedback">Please choose an option in the select.</div>
        </div>
    );
};
