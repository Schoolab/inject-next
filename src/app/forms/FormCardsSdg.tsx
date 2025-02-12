import React from "react";

interface FormCardsSdgProps {}

export const FormCardsSdg = ({}: FormCardsSdgProps) => {
    return (
        <fieldset className="form-group">
            <legend className="label">SDGs</legend>
            <small id="exemple_help" className="form-text text-muted">
                Choose on which SDGs this program have an impact.{" "}
                <a href="https://sdgs.un.org/goals" target="_blank">
                    Open full SDGs list
                </a>
            </small>
            <div className="form-options grid gap-xs" id="id-4" aria-describedby="exemple_help">
                <div className="g-col-12 g-col-sm-6 g-col-md-4">
                    <div className="flex-fill custom-control custom-control-card custom-checkbox">
                        <input type="checkbox" id="id-4_0" name="form2" className="custom-control-input" defaultValue={0} />
                        <label className="custom-control-label text-nowrap gap-xs" htmlFor="id-4_0">
                            <div aria-hidden="true" className="icon icon--sdg is-sdg-1 is-24px">
                                <span>1</span>
                            </div>
                            <span>No poverty</span>
                        </label>
                    </div>
                </div>
                <div className="g-col-12 g-col-sm-6 g-col-md-4">
                    <div className="flex-fill custom-control custom-control-card custom-checkbox">
                        <input type="checkbox" id="id-4_1" name="form2" className="custom-control-input" defaultValue={1} />
                        <label className="custom-control-label text-nowrap gap-xs" htmlFor="id-4_1">
                            <div aria-hidden="true" className="icon icon--sdg is-sdg-2 is-24px">
                                <span>2</span>
                            </div>
                            <span>Zero hunger</span>
                        </label>
                    </div>
                </div>
                <div className="g-col-12 g-col-sm-6 g-col-md-4">
                    <div className="flex-fill custom-control custom-control-card custom-checkbox">
                        <input type="checkbox" id="id-4_2" name="form2" className="custom-control-input" defaultValue={2} />
                        <label className="custom-control-label text-nowrap gap-xs" htmlFor="id-4_2">
                            <div aria-hidden="true" className="icon icon--sdg is-sdg-3 is-24px">
                                <span>3</span>
                            </div>
                            <span>Good health and well being</span>
                        </label>
                    </div>
                </div>
                <div className="g-col-12 g-col-sm-6 g-col-md-4">
                    <div className="flex-fill custom-control custom-control-card custom-checkbox">
                        <input type="checkbox" id="id-4_3" name="form3" className="custom-control-input" defaultValue={3} />
                        <label className="custom-control-label text-nowrap gap-xs" htmlFor="id-4_3">
                            <div aria-hidden="true" className="icon icon--sdg is-sdg-4 is-24px">
                                <span>4</span>
                            </div>
                            <span>Quality education</span>
                        </label>
                    </div>
                </div>
                <div className="g-col-12 g-col-sm-6 g-col-md-4">
                    <div className="flex-fill custom-control custom-control-card custom-checkbox">
                        <input type="checkbox" id="id-4_4" name="form4" className="custom-control-input" defaultValue={4} />
                        <label className="custom-control-label text-nowrap gap-xs" htmlFor="id-4_4">
                            <div aria-hidden="true" className="icon icon--sdg is-sdg-5 is-24px">
                                <span>5</span>
                            </div>
                            <span>Gender equality</span>
                        </label>
                    </div>
                </div>
                <div className="g-col-12 g-col-sm-6 g-col-md-4">
                    <div className="flex-fill custom-control custom-control-card custom-checkbox">
                        <input type="checkbox" id="id-4_5" name="form5" className="custom-control-input" defaultValue={5} />
                        <label className="custom-control-label text-nowrap gap-xs" htmlFor="id-4_5">
                            <div aria-hidden="true" className="icon icon--sdg is-sdg-6 is-24px">
                                <span>6</span>
                            </div>
                            <span>Clean water and satination</span>
                        </label>
                    </div>
                </div>
                <div className="g-col-12 g-col-sm-6 g-col-md-4">
                    <div className="flex-fill custom-control custom-control-card custom-checkbox">
                        <input type="checkbox" id="id-4_6" name="form6" className="custom-control-input" defaultValue={6} />
                        <label className="custom-control-label text-nowrap gap-xs" htmlFor="id-4_6">
                            <div aria-hidden="true" className="icon icon--sdg is-sdg-7 is-24px">
                                <span>7</span>
                            </div>
                            <span>Affordable and clean energy</span>
                        </label>
                    </div>
                </div>
                <div className="g-col-12 g-col-sm-6 g-col-md-4">
                    <div className="flex-fill custom-control custom-control-card custom-checkbox">
                        <input type="checkbox" id="id-4_7" name="form7" className="custom-control-input" defaultValue={7} />
                        <label className="custom-control-label text-nowrap gap-xs" htmlFor="id-4_7">
                            <div aria-hidden="true" className="icon icon--sdg is-sdg-8 is-24px">
                                <span>8</span>
                            </div>
                            <span>Decent work and economic growth</span>
                        </label>
                    </div>
                </div>
                <div className="g-col-12 g-col-sm-6 g-col-md-4">
                    <div className="flex-fill custom-control custom-control-card custom-checkbox">
                        <input type="checkbox" id="id-4_8" name="form8" className="custom-control-input" defaultValue={8} />
                        <label className="custom-control-label text-nowrap gap-xs" htmlFor="id-4_8">
                            <div aria-hidden="true" className="icon icon--sdg is-sdg-9 is-24px">
                                <span>9</span>
                            </div>
                            <span>Industry Innovation &amp; Infrastructure</span>
                        </label>
                    </div>
                </div>
                <div className="g-col-12 g-col-sm-6 g-col-md-4">
                    <div className="flex-fill custom-control custom-control-card custom-checkbox">
                        <input type="checkbox" id="id-4_9" name="form9" className="custom-control-input" defaultValue={9} />
                        <label className="custom-control-label text-nowrap gap-xs" htmlFor="id-4_9">
                            <div aria-hidden="true" className="icon icon--sdg is-sdg-10 is-24px">
                                <span>10</span>
                            </div>
                            <span>Reduced Inequalities</span>
                        </label>
                    </div>
                </div>
                <div className="g-col-12 g-col-sm-6 g-col-md-4">
                    <div className="flex-fill custom-control custom-control-card custom-checkbox">
                        <input type="checkbox" id="id-4_10" name="form10" className="custom-control-input" defaultValue={10} />
                        <label className="custom-control-label text-nowrap gap-xs" htmlFor="id-4_10">
                            <div aria-hidden="true" className="icon icon--sdg is-sdg-11 is-24px">
                                <span>11</span>
                            </div>
                            <span>Sustainable Cities &amp; Communities</span>
                        </label>
                    </div>
                </div>
                <div className="g-col-12 g-col-sm-6 g-col-md-4">
                    <div className="flex-fill custom-control custom-control-card custom-checkbox">
                        <input type="checkbox" id="id-4_11" name="form11" className="custom-control-input" defaultValue={11} />
                        <label className="custom-control-label text-nowrap gap-xs" htmlFor="id-4_11">
                            <div aria-hidden="true" className="icon icon--sdg is-sdg-12 is-24px">
                                <span>12</span>
                            </div>
                            <span>Responsable Consumption &amp; Production</span>
                        </label>
                    </div>
                </div>
                <div className="g-col-12 g-col-sm-6 g-col-md-4">
                    <div className="flex-fill custom-control custom-control-card custom-checkbox">
                        <input type="checkbox" id="id-4_12" name="form12" className="custom-control-input" defaultValue={12} />
                        <label className="custom-control-label text-nowrap gap-xs" htmlFor="id-4_12">
                            <div aria-hidden="true" className="icon icon--sdg is-sdg-13 is-24px">
                                <span>13</span>
                            </div>
                            <span>Climate Action</span>
                        </label>
                    </div>
                </div>
                <div className="g-col-12 g-col-sm-6 g-col-md-4">
                    <div className="flex-fill custom-control custom-control-card custom-checkbox">
                        <input type="checkbox" id="id-4_13" name="form13" className="custom-control-input" defaultValue={13} />
                        <label className="custom-control-label text-nowrap gap-xs" htmlFor="id-4_13">
                            <div aria-hidden="true" className="icon icon--sdg is-sdg-14 is-24px">
                                <span>14</span>
                            </div>
                            <span>Life Below Water</span>
                        </label>
                    </div>
                </div>
                <div className="g-col-12 g-col-sm-6 g-col-md-4">
                    <div className="flex-fill custom-control custom-control-card custom-checkbox">
                        <input type="checkbox" id="id-4_14" name="form14" className="custom-control-input" defaultValue={14} />
                        <label className="custom-control-label text-nowrap gap-xs" htmlFor="id-4_14">
                            <div aria-hidden="true" className="icon icon--sdg is-sdg-15 is-24px">
                                <span>15</span>
                            </div>
                            <span>Life on Land</span>
                        </label>
                    </div>
                </div>
                <div className="g-col-12 g-col-sm-6 g-col-md-4">
                    <div className="flex-fill custom-control custom-control-card custom-checkbox">
                        <input type="checkbox" id="id-4_15" name="form15" className="custom-control-input" defaultValue={15} />
                        <label className="custom-control-label text-nowrap gap-xs" htmlFor="id-4_15">
                            <div aria-hidden="true" className="icon icon--sdg is-sdg-16 is-24px">
                                <span>16</span>
                            </div>
                            <span>Peace Justice &amp; Strong Institutions</span>
                        </label>
                    </div>
                </div>
                <div className="g-col-12 g-col-sm-6 g-col-md-4">
                    <div className="flex-fill custom-control custom-control-card custom-checkbox">
                        <input type="checkbox" id="id-4_16" name="form16" className="custom-control-input" defaultValue={16} />
                        <label className="custom-control-label text-nowrap gap-xs" htmlFor="id-4_16">
                            <div aria-hidden="true" className="icon icon--sdg is-sdg-17 is-24px">
                                <span>17</span>
                            </div>
                            <span>Partnerships for the goals</span>
                        </label>
                    </div>
                </div>
            </div>
        </fieldset>
    );
};
