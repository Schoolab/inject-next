import React from "react";
export interface ModalNewProjectProps {}

export const ModalNewProject = ({}: ModalNewProjectProps) => {
    return (
        <div className="modal-dialog modal-lg modal-dialog-centered " role="document">
            <div className="modal-content">
                <div className="modal-header border-bottom">
                    <h3 className="modal-title line-clamp-1">
                        <span className="text-truncate">New project</span>
                    </h3>
                    <div className="modal-actions">
                        {/* <a class="btn btn-transparent border-0 p-2xs text-muted" data-toggle="tooltip" data-original-title="Open in new tab" href="#">
              <span class="icon icon-new-tab is-24px"></span>
          </a> */}
                        <button className="btn btn-transparent border-0 p-2xs text-muted" type="button" data-dismiss="modal" aria-label="Close">
                            <span className="icon icon-close is-24px" aria-hidden="true" />
                        </button>
                    </div>
                </div>
                <div className="modal-body">
                    <form name="translations_wrapper" method="post" action="">
                        <div id="translations_wrapper_lang_fr">
                            <div className="form-group">
                                {" "}
                                <label className="checkbox-custom font-weight-bold required" htmlFor="translations_wrapper_lang_fr_name">
                                    Name
                                </label>
                                <input type="text" id="translations_wrapper_lang_fr_name" name="translations_wrapper[lang_fr][name]" required data-hint="name" aria-describedby="translations_wrapper_lang_fr_name_help" className="form-control" />
                                <small id="translations_wrapper_lang_fr_name_help" className="form-text text-muted">
                                    min 3 characters, max 50 characters
                                </small>
                            </div>
                            <div className="form-group">
                                {" "}
                                <label className="checkbox-custom font-weight-bold required" htmlFor="translations_wrapper_lang_fr_overview ">
                                    Short description
                                </label>
                                <textarea
                                    id="translations_wrapper_lang_fr_overview"
                                    name="translations_wrapper[lang_fr][overview]"
                                    maxLength={500}
                                    data-hint="overview"
                                    aria-describedby="translations_wrapper_lang_fr_overview_help"
                                    rows={4}
                                    className="form-control"
                                    style={{
                                        overflow: "hidden",
                                        overflowWrap: "break-word",
                                        resize: "none",
                                        height: 102,
                                    }}
                                    defaultValue={""}
                                />
                                <small id="translations_wrapper_lang_fr_overview_help" className="form-text text-muted">
                                    Just one or two line to describe the project.
                                </small>
                            </div>
                            <fieldset className="form-group">
                                <legend className="label">Impact</legend>
                                <div className="grid gap-xs mt-2xs" id="id-1">
                                    <div className="g-col-12 g-col-sm-6 g-col-md-4">
                                        <div className="flex-fill mb-lg-0 custom-control custom-control-card custom-checkbox">
                                            <input type="checkbox" id="id-1_0" name="form1" className="custom-control-input" defaultValue={0} />
                                            <label className="text-nowrap custom-control-label custom-control-label d-flex flex-column gap-xs" htmlFor="id-1_0">
                                                <span className="icon icon-impact-none is-sm" />
                                                <span>None</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="g-col-12 g-col-sm-6 g-col-md-4">
                                        <div className="flex-fill  mb-lg-0 custom-control custom-control-card custom-checkbox">
                                            <input type="checkbox" id="id-1_1" name="form1" className="custom-control-input" defaultValue={1} defaultChecked />
                                            <label className="text-nowrap custom-control-label custom-control-label d-flex flex-column gap-xs" htmlFor="id-1_1">
                                                <span className="icon icon-impact-sustainable is-sm" />
                                                <span>Sustainable</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="g-col-12 g-col-sm-6 g-col-md-4">
                                        <div className="flex-fill  mb-lg-0 custom-control custom-control-card custom-checkbox">
                                            <input type="checkbox" id="id-1_2" name="form1" className="custom-control-input" defaultValue={2} />
                                            <label className="text-nowrap custom-control-label custom-control-label d-flex flex-column gap-xs" htmlFor="id-1_2">
                                                <span className="icon icon-impact-equitable is-sm" />
                                                <span>Equitable</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset className="form-group">
                                <legend className="label">Verticals</legend>
                                <div className="grid gap-xs mt-2xs" id="id-2">
                                    <div className="g-col-12 g-col-sm-6 g-col-md-4">
                                        <div className="flex-fill mb-lg-0 custom-control custom-control-card custom-checkbox">
                                            <input type="checkbox" id="id-2_0" name="form2" className="custom-control-input" defaultValue={0} />
                                            <label className="text-nowrap custom-control-label custom-control-label d-flex flex-column gap-xs" htmlFor="id-2_0">
                                                <span className="icon icon-vertical-plastic is-sm" />
                                                <span>Plastic</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="g-col-12 g-col-sm-6 g-col-md-4">
                                        <div className="flex-fill mb-lg-0 custom-control custom-control-card custom-checkbox">
                                            <input type="checkbox" id="id-2_1" name="form2" className="custom-control-input" defaultValue={1} defaultChecked />
                                            <label className="text-nowrap custom-control-label custom-control-label d-flex flex-column gap-xs" htmlFor="id-2_1">
                                                <span className="icon icon-vertical-food is-sm" />
                                                <span>Food</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="g-col-12 g-col-sm-6 g-col-md-4">
                                        <div className="flex-fill mb-lg-0 custom-control custom-control-card custom-checkbox">
                                            <input type="checkbox" id="id-2_2" name="form2" className="custom-control-input" defaultValue={2} />
                                            <label className="text-nowrap custom-control-label custom-control-label d-flex flex-column gap-xs" htmlFor="id-2_2">
                                                <span className="icon icon-vertical-dei is-sm" />
                                                <span>DEI</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset className="form-group">
                                <legend className="label">SDGs</legend>
                                <div className="d-flex flex-wrap">
                                    <div className="custom-label custom-label--sdg">
                                        <input className="d-none" type="checkbox" id="translations_wrapper_lang_fr_sdg_odd1" name="translations_wrapper[lang_fr][sdg_odd1]" defaultValue="sdg_odd1" />
                                        <label className="d-flex flex-column p-1" htmlFor="translations_wrapper_lang_fr_sdg_odd1">
                                            <img src="../img/odd/F-WEB-Goal-01.png" alt="odd1" />
                                        </label>
                                    </div>
                                    <div className="custom-label custom-label--sdg">
                                        <input className="d-none" type="checkbox" id="translations_wrapper_lang_fr_sdg_odd2" name="translations_wrapper[lang_fr][sdg_odd2]" defaultValue="sdg_odd2" />
                                        <label className="d-flex flex-column p-1" htmlFor="translations_wrapper_lang_fr_sdg_odd2">
                                            <img src="../img/odd/F-WEB-Goal-02.png" alt="odd2" />
                                        </label>
                                    </div>
                                    <div className="custom-label custom-label--sdg">
                                        <input disabled className="d-none" type="checkbox" id="translations_wrapper_lang_fr_sdg_odd3" name="translations_wrapper[lang_fr][sdg_odd3]" defaultValue="sdg_odd3" />
                                        <label className="d-flex flex-column p-1" htmlFor="translations_wrapper_lang_fr_sdg_odd3">
                                            <img src="../img/odd/F-WEB-Goal-03.png" alt="odd3" />
                                        </label>
                                    </div>
                                    <div className="custom-label custom-label--sdg">
                                        <input className="d-none" type="checkbox" id="translations_wrapper_lang_fr_sdg_odd4" name="translations_wrapper[lang_fr][sdg_odd3]" defaultValue="sdg_odd4" />
                                        <label className="d-flex flex-column p-1" htmlFor="translations_wrapper_lang_fr_sdg_odd4">
                                            <img src="../img/odd/F-WEB-Goal-04.png" alt="odd4" />
                                        </label>
                                    </div>
                                    <div className="custom-label custom-label--sdg">
                                        <input className="d-none" type="checkbox" id="translations_wrapper_lang_fr_sdg_odd5" name="translations_wrapper[lang_fr][sdg_odd5]" defaultValue="sdg_odd5" />
                                        <label className="d-flex flex-column p-1" htmlFor="translations_wrapper_lang_fr_sdg_odd5">
                                            <img src="../img/odd/F-WEB-Goal-05.png" alt="odd5" />
                                        </label>
                                    </div>
                                    <div className="custom-label custom-label--sdg">
                                        <input className="d-none" type="checkbox" id="translations_wrapper_lang_fr_sdg_odd6" name="translations_wrapper[lang_fr][sdg_odd6]" defaultValue="sdg_odd6" />
                                        <label className="d-flex flex-column p-1" htmlFor="translations_wrapper_lang_fr_sdg_odd6">
                                            <img src="../img/odd/F-WEB-Goal-06.png" alt="odd6" />
                                        </label>
                                    </div>
                                    <div className="custom-label custom-label--sdg">
                                        <input className="d-none" type="checkbox" id="translations_wrapper_lang_fr_sdg_odd7" name="translations_wrapper[lang_fr][sdg_odd7]" defaultValue="sdg_odd7" />
                                        <label className="d-flex flex-column p-1" htmlFor="translations_wrapper_lang_fr_sdg_odd7">
                                            <img src="../img/odd/F-WEB-Goal-07.png" alt="odd7" />
                                        </label>
                                    </div>
                                    <div className="custom-label custom-label--sdg">
                                        <input className="d-none" type="checkbox" id="translations_wrapper_lang_fr_sdg_odd8" name="translations_wrapper[lang_fr][sdg_odd8]" defaultValue="sdg_odd8" />
                                        <label className="d-flex flex-column p-1" htmlFor="translations_wrapper_lang_fr_sdg_odd8">
                                            <img src="../img/odd/F-WEB-Goal-08.png" alt="odd8" />
                                        </label>
                                    </div>
                                    <div className="custom-label custom-label--sdg">
                                        <input className="d-none" type="checkbox" id="translations_wrapper_lang_fr_sdg_odd9" name="translations_wrapper[lang_fr][sdg_odd9]" defaultValue="sdg_odd9" />
                                        <label className="d-flex flex-column p-1" htmlFor="translations_wrapper_lang_fr_sdg_odd9">
                                            <img src="../img/odd/F-WEB-Goal-09.png" alt="odd9" />
                                        </label>
                                    </div>
                                    <div className="custom-label custom-label--sdg">
                                        <input className="d-none" type="checkbox" id="translations_wrapper_lang_fr_sdg_odd10" name="translations_wrapper[lang_fr][sdg_odd10]" defaultValue="sdg_odd10" />
                                        <label className="d-flex flex-column p-1" htmlFor="translations_wrapper_lang_fr_sdg_odd10">
                                            <img src="../img/odd/F-WEB-Goal-10.png" alt="odd1" />
                                        </label>
                                    </div>
                                    <div className="custom-label custom-label--sdg">
                                        <input className="d-none" type="checkbox" id="translations_wrapper_lang_fr_sdg_odd11" name="translations_wrapper[lang_fr][sdg_odd11]" defaultValue="sdg_odd11" />
                                        <label className="d-flex flex-column p-1" htmlFor="translations_wrapper_lang_fr_sdg_odd11">
                                            <img src="../img/odd/F-WEB-Goal-11.png" alt="odd11" />
                                        </label>
                                    </div>
                                    <div className="custom-label custom-label--sdg">
                                        <input className="d-none" type="checkbox" id="translations_wrapper_lang_fr_sdg_odd12" name="translations_wrapper[lang_fr][sdg_odd12]" defaultValue="sdg_odd12" />
                                        <label className="d-flex flex-column p-1" htmlFor="translations_wrapper_lang_fr_sdg_odd12">
                                            <img src="../img/odd/F-WEB-Goal-12.png" alt="odd12" />
                                        </label>
                                    </div>
                                    <div className="custom-label custom-label--sdg">
                                        <input className="d-none" type="checkbox" id="translations_wrapper_lang_fr_sdg_odd13" name="translations_wrapper[lang_fr][sdg_odd13]" defaultValue="sdg_odd13" />
                                        <label className="d-flex flex-column p-1" htmlFor="translations_wrapper_lang_fr_sdg_odd13">
                                            <img src="../img/odd/F-WEB-Goal-13.png" alt="odd13" />
                                        </label>
                                    </div>
                                    <div className="custom-label custom-label--sdg">
                                        <input className="d-none" type="checkbox" id="translations_wrapper_lang_fr_sdg_odd14" name="translations_wrapper[lang_fr][sdg_odd14]" defaultValue="sdg_odd14" />
                                        <label className="d-flex flex-column p-1" htmlFor="translations_wrapper_lang_fr_sdg_odd14">
                                            <img src="../img/odd/F-WEB-Goal-14.png" alt="odd14" />
                                        </label>
                                    </div>
                                    <div className="custom-label custom-label--sdg">
                                        <input className="d-none" type="checkbox" id="translations_wrapper_lang_fr_sdg_odd15" name="translations_wrapper[lang_fr][sdg_odd15]" defaultValue="sdg_odd15" />
                                        <label className="d-flex flex-column p-1" htmlFor="translations_wrapper_lang_fr_sdg_odd15">
                                            <img src="../img/odd/F-WEB-Goal-15.png" alt="odd15" />
                                        </label>
                                    </div>
                                    <div className="custom-label custom-label--sdg">
                                        <input className="d-none" type="checkbox" id="translations_wrapper_lang_fr_sdg_odd16" name="translations_wrapper[lang_fr][sdg_odd16]" defaultValue="sdg_odd16" />
                                        <label className="d-flex flex-column p-1" htmlFor="translations_wrapper_lang_fr_sdg_odd16">
                                            <img src="../img/odd/F-WEB-Goal-16.png" alt="odd16" />
                                        </label>
                                    </div>
                                    <div className="custom-label custom-label--sdg">
                                        <input className="d-none" type="checkbox" id="translations_wrapper_lang_fr_sdg_odd17" name="translations_wrapper[lang_fr][sdg_odd17]" defaultValue="sdg_odd17" />
                                        <label className="d-flex flex-column p-1" htmlFor="translations_wrapper_lang_fr_sdg_odd17">
                                            <img src="../img/odd/F-WEB-Goal-17.png" alt="odd17" />
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <input type="hidden" id="translations_wrapper__token" name="translations_wrapper[_token]" defaultValue="ecd887896.SN-WXDe3rF-mCWBCXEHEuJWOeUn0ZeT1m9lM_NBPI3g.cJX-DWj__jzMO1QpHwrw28q4My-HNbKY64x9ypN5dCcmlKRoUNnKZsFqOQ" />
                    </form>
                </div>
                <div className="modal-footer border-top">
                    <div className="dropdown">
                        <a className="btn btn-default btn-lg dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span>Options</span>
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                                <span className="dropdown-item--label">Open</span>
                                <span className="dropdown-item--shortcut icon icon-new-tab" />
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">
                                <span>Edit</span>
                            </a>
                            <a className="dropdown-item is-danger" href="#">
                                <span>Delete</span>
                            </a>
                        </div>
                    </div>
                    <div className="d-flex gap-xs ml-auto">
                        <a className="btn btn-lg btn-default" href="#">
                            Discard changes
                        </a>
                        <a className="btn btn-lg btn-primary" href="#">
                            Save
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
