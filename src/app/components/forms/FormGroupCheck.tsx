import React from "react";

interface FormGroupCheckProps {}

export const FormGroupCheck = ({}: FormGroupCheckProps) => {
    return (
        <fieldset className="form-group">
            <legend className="label">Autorizations</legend>
            <small id="exemple_help" className="form-text text-muted">
                Choose to which features this user has access.
            </small>
            <div className="form-options" id="checkbox" aria-describedby="exemple_help">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" id="checkbox_0" name="checkbox" className="custom-control-input" defaultValue={0} defaultChecked />
                    <label className="custom-control-label" htmlFor="checkbox_0">
                        Category
                    </label>
                </div>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" id="checkbox_1" name="checkbox" className="custom-control-input" defaultValue={1} defaultChecked disabled />
                    <label className="custom-control-label" htmlFor="checkbox_1">
                        Data
                    </label>
                </div>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" id="checkbox_2" name="checkbox" className="custom-control-input" defaultValue={2} />
                    <label className="custom-control-label" htmlFor="checkbox_2">
                        Plans
                    </label>
                </div>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" id="checkbox_3" name="checkbox" className="custom-control-input" defaultValue={3} />
                    <label className="custom-control-label" htmlFor="checkbox_3">
                        Impersonate participants (login as)
                    </label>
                </div>
            </div>
        </fieldset>
    );
};
