import React from "react";

interface FormOptionsRadioProps {}

export const FormOptionsRadio = ({}: FormOptionsRadioProps) => {
    return (
        <fieldset className="form-group">
            <legend className="label">The program is visible to...</legend>
            <small id="exemple_help" className="form-text text-muted">
                This is visible to participants on <a href="#">courses list</a>.
            </small>
            <div className="form-options" id="radio" aria-describedby="exemple_help">
                <div className="custom-control custom-radio">
                    <input type="radio" id="radio_0" name="radio" className="custom-control-input" defaultValue={0} defaultChecked />
                    <label className="custom-control-label" htmlFor="radio_0">
                        Administrators only (draft mode)
                    </label>
                </div>
                <div className="custom-control custom-radio">
                    <input type="radio" id="radio_1" name="radio" className="custom-control-input" defaultValue={1} />
                    <label className="custom-control-label" htmlFor="radio_1">
                        Members only
                    </label>
                </div>
                <div className="custom-control custom-radio">
                    <input type="radio" id="radio_2" name="radio" className="custom-control-input" defaultValue={2} disabled />
                    <label className="custom-control-label" htmlFor="radio_2">
                        All visitors
                    </label>
                </div>
            </div>
        </fieldset>
    );
};
