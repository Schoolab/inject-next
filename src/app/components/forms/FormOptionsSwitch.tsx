import React from "react";

interface FormOptionsSwitchProps {}

export const FormOptionsSwitch = ({}: FormOptionsSwitchProps) => {
    return (
        <fieldset className="form-group">
            <legend className="label">Autorizations</legend>
            <small id="exemple_help" className="form-text text-muted">
                Choose to which features this user has access.
            </small>
            <div className="form-options" id="switch" aria-describedby="exemple_help">
                <div className="custom-control custom-switch">
                    <input type="checkbox" role="switch" id="switch_0" name="switch" className="custom-control-input" defaultValue={0} defaultChecked />
                    <label className="custom-control-label" htmlFor="switch_0">
                        Category
                    </label>
                </div>
                <div className="custom-control custom-switch">
                    <input type="checkbox" role="switch" id="switch_1" name="switch" className="custom-control-input" defaultValue={1} defaultChecked disabled />
                    <label className="custom-control-label" htmlFor="switch_1">
                        Data
                    </label>
                </div>
                <div className="custom-control custom-switch">
                    <input type="checkbox" role="switch" id="switch_2" name="switch" className="custom-control-input" defaultValue={2} />
                    <label className="custom-control-label" htmlFor="switch_2">
                        Plans
                    </label>
                </div>
                <div className="custom-control custom-switch">
                    <input type="checkbox" role="switch" id="switch_3" name="switch" className="custom-control-input" defaultValue={3} />
                    <label className="custom-control-label" htmlFor="switch_3">
                        Impersonate participants (login as)
                    </label>
                </div>
            </div>
        </fieldset>
    );
};
