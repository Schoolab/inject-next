import React from "react";

interface FormCardsCheckProps {}

export const FormCardsCheck = ({}: FormCardsCheckProps) => {
    return (
        <fieldset className="form-group">
            <legend className="label">Autorizations</legend>
            <small id="exemple_help" className="form-text text-muted">
                Choose to which features this user has access.
            </small>
            <div className="form-options" id="checkbox" aria-describedby="exemple_help">
                <div className="custom-control custom-control-card custom-checkbox">
                    <input type="checkbox" id="checkbox_0" name="checkbox" className="custom-control-input" defaultValue={0} defaultChecked />
                    <label className="custom-control-label" htmlFor="checkbox_0" aria-describedby="exemple_help_0">
                        Category
                    </label>
                    <small id="exemple_help_0" className="form-text text-muted">
                        This user can manage categories of this organization’s programs
                    </small>
                </div>
                <div className="custom-control custom-control-card custom-checkbox">
                    <input type="checkbox" id="checkbox_1" name="checkbox" className="custom-control-input" defaultValue={1} defaultChecked disabled/>
                    <label className="custom-control-label" htmlFor="checkbox_1" aria-describedby="exemple_help_1">
                        Data
                    </label>
                    <small id="exemple_help_1" className="form-text text-muted">
                        This user can manage data of this organization’s programs
                    </small>
                </div>
                <div className="custom-control custom-control-card custom-checkbox">
                    <input type="checkbox" id="checkbox_2" name="checkbox" className="custom-control-input" defaultValue={2} />
                    <label className="custom-control-label" htmlFor="checkbox_2" aria-describedby="exemple_help_2">
                        Plans
                    </label>
                    <small id="exemple_help_2" className="form-text text-muted">
                        This user can manage plans of this organization’s programs
                    </small>
                </div>
                <div className="custom-control custom-control-card custom-checkbox">
                    <input type="checkbox" id="checkbox_3" name="checkbox" className="custom-control-input" defaultValue={3} />
                    <label className="custom-control-label" htmlFor="checkbox_3" aria-describedby="exemple_help_3">
                        Impersonate participants (login as)
                    </label>
                    <small id="exemple_help_3" className="form-text text-muted">
                        This user can access to participants accounts, for trusted users only.
                    </small>
                </div>
            </div>
        </fieldset>
    );
};
