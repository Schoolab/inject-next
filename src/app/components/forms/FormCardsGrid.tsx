import React from "react";

interface FormCardsGridProps {}

export const FormCardsGrid = ({}: FormCardsGridProps) => {
    return (
        <fieldset className="form-group">
            <legend className="label">Use case</legend>
            <small id="exemple_help" className="form-text text-muted">
                Choose the use cases that describes best the program
            </small>
            <div className="form-options grid gap-xs" id="id-4" aria-describedby="exemple_help">
                <div className="g-col-12 g-col-sm-6 g-col-md-4">
                    <div className="flex-fill custom-control custom-control-card custom-radio">
                        <input type="radio" id="id-4_0" name="form2" className="custom-control-input" defaultValue={0} />
                        <label className="custom-control-label text-nowrap" htmlFor="id-4_0">
                            Community
                        </label>
                    </div>
                </div>
                <div className="g-col-12 g-col-sm-6 g-col-md-4">
                    <div className="flex-fill custom-control custom-control-card custom-radio">
                        <input type="radio" id="id-4_1" name="form2" className="custom-control-input" defaultValue={1} defaultChecked />
                        <label className="custom-control-label text-nowrap" htmlFor="id-4_1">
                            Hackathon
                        </label>
                    </div>
                </div>
                <div className="g-col-12 g-col-sm-6 g-col-md-4">
                    <div className="flex-fill custom-control custom-control-card custom-radio">
                        <input type="radio" id="id-4_2" name="form2" className="custom-control-input" defaultValue={2} />
                        <label className="custom-control-label text-nowrap" htmlFor="id-4_2">
                            Incubator
                        </label>
                    </div>
                </div>
                <div className="g-col-12 g-col-sm-6 g-col-md-4">
                    <div className="flex-fill custom-control custom-control-card custom-radio">
                        <input type="radio" id="id-4_3" name="form2" className="custom-control-input" defaultValue={3} />
                        <label className="custom-control-label text-nowrap" htmlFor="id-4_3">
                            Innovation
                        </label>
                    </div>
                </div>
                <div className="g-col-12 g-col-sm-6 g-col-md-4">
                    <div className="flex-fill custom-control custom-control-card custom-radio">
                        <input type="radio" id="id-4_4" name="form2" className="custom-control-input" defaultValue={4} defaultChecked />
                        <label className="custom-control-label text-nowrap" htmlFor="id-4_4">
                            Learning Course
                        </label>
                    </div>
                </div>
                <div className="g-col-12 g-col-sm-6 g-col-md-4">
                    <div className="flex-fill custom-control custom-control-card custom-radio">
                        <input type="radio" id="id-4_5" name="form2" className="custom-control-input" defaultValue={5} />
                        <label className="custom-control-label text-nowrap" htmlFor="id-4_5">
                            Learning expedition
                        </label>
                    </div>
                </div>
                <div className="g-col-12 g-col-sm-6 g-col-md-4">
                    <div className="flex-fill custom-control custom-control-card custom-radio">
                        <input type="radio" id="id-4_6" name="form2" className="custom-control-input" defaultValue={6} />
                        <label className="custom-control-label text-nowrap" htmlFor="id-4_6">
                            Learning Workshop
                        </label>
                    </div>
                </div>
                <div className="g-col-12 g-col-sm-6 g-col-md-4">
                    <div className="flex-fill custom-control custom-control-card custom-radio">
                        <input type="radio" id="id-4_7" name="form2" className="custom-control-input" defaultValue={7} defaultChecked />
                        <label className="custom-control-label text-nowrap" htmlFor="id-4_7">
                            Open Innovation
                        </label>
                    </div>
                </div>
                <div className="g-col-12 g-col-sm-6 g-col-md-4">
                    <div className="flex-fill custom-control custom-control-card custom-radio">
                        <input type="radio" id="id-4_8" name="form2" className="custom-control-input" defaultValue={8} />
                        <label className="custom-control-label text-nowrap" htmlFor="id-4_8">
                            Other
                        </label>
                    </div>
                </div>
            </div>
        </fieldset>
    );
};
