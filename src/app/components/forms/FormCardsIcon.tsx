import React from "react";

interface FormCardsIconProps {}

export const FormCardsIcon = ({}: FormCardsIconProps) => {
    return (
        <fieldset className="form-group">
            <legend className="label">Impact</legend>
            <small id="exemple_help" className="form-text text-muted">
                Does this program have an positive impact to the society?
            </small>
            <div className="form-options grid gap-xs" id="id-1" aria-describedby="exemple_help">
                <div className="g-col-12 g-col-sm-6 g-col-md-3">
                    <div className="flex-fill mb-lg-0 custom-control custom-control-card custom-radio">
                        <input type="radio" id="id-1_0" name="form1" className="custom-control-input" defaultValue={0} />
                        <label className="custom-control-label text-nowrap d-flex flex-column gap-xs" htmlFor="id-1_0">
                            <span className="icon is-sm icon-impact-none" />
                            <span>None</span>
                        </label>
                    </div>
                </div>
                <div className="g-col-12 g-col-sm-6 g-col-md-3">
                    <div className="flex-fill  mb-lg-0 custom-control custom-control-card custom-radio">
                        <input type="radio" id="id-1_1" name="form1" className="custom-control-input" defaultValue={1} defaultChecked />
                        <label className="custom-control-label text-nowrap d-flex flex-column gap-xs" htmlFor="id-1_1">
                            <span className="icon is-sm icon-impact-not-obvious" />
                            <span>Not obvious</span>
                        </label>
                    </div>
                </div>
                <div className="g-col-12 g-col-sm-6 g-col-md-3">
                    <div className="flex-fill  mb-lg-0 custom-control custom-control-card custom-radio">
                        <input type="radio" id="id-1_2" name="form1" className="custom-control-input" defaultValue={2} />
                        <label className="custom-control-label text-nowrap d-flex flex-column gap-xs" htmlFor="id-1_2">
                            <span className="icon is-sm icon-impact-native" />
                            <span>Native</span>
                        </label>
                    </div>
                </div>
                <div className="g-col-12 g-col-sm-6 g-col-md-3">
                    <div className="flex-fill  mb-lg-0 custom-control custom-control-card custom-radio">
                        <input type="radio" id="id-1_3" name="form1" className="custom-control-input" defaultValue={3} />
                        <label className="custom-control-label text-nowrap d-flex flex-column gap-xs" htmlFor="id-1_3">
                            <span className="icon is-sm icon-impact-push" />
                            <span>Push</span>
                        </label>
                    </div>
                </div>
            </div>
        </fieldset>
    );
};
