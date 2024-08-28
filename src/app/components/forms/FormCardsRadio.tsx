import React from "react";

interface FormCardsRadioProps {}

export const FormCardsRadio = ({}: FormCardsRadioProps) => {
    return (
        <fieldset className="form-group">
            <legend className="label">The program is visible to...</legend>
            <small id="exemple_help" className="form-text text-muted">
                This is visible to participants on <a href="#">courses list</a>.
            </small>
            <div className="form-options" id="radio" aria-describedby="exemple_help">
                <div className="custom-control custom-control-card custom-radio">
                    <input type="radio" id="radio_0" name="radio" className="custom-control-input" defaultValue={0} defaultChecked />
                    <label className="custom-control-label" htmlFor="radio_0" aria-describedby="exemple_help_0">
                        Administrators only (draft mode)
                    </label>
                    <small id="exemple_help_0" className="form-text text-muted">
                        This program will be visible by 4 people.
                        {/*  <a href="#">Manage admins</a>*/}
                    </small>
                </div>
                <div className="custom-control custom-control-card custom-radio">
                    <input type="radio" id="radio_1" name="radio" className="custom-control-input" defaultValue={1} />
                    <label className="custom-control-label" htmlFor="radio_1" aria-describedby="exemple_help_1">
                        Members only
                    </label>
                    <small id="exemple_help_1" className="form-text text-muted">
                        This program will be visible by 803 people.
                        {/*  <a href="#">Manage participants</a>*/}
                    </small>
                </div>
                <div className="custom-control custom-control-card custom-radio">
                    <input type="radio" id="radio_2" name="radio" className="custom-control-input" defaultValue={2} disabled />
                    <label className="custom-control-label" htmlFor="radio_2" aria-describedby="exemple_help_2">
                        All visitors
                    </label>
                    <small id="exemple_help_2" className="form-text text-muted">
                        This program will be visible to anyone with the link.
                    </small>
                </div>
            </div>
        </fieldset>
    );
};
