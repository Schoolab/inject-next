import React from "react";
import { useEffect } from "react";
import { Button } from "@/app/components/buttons/Button";
import { tooltips } from "../../../../public/utils/tooltips";
export interface ModalProjectTabProps {}

export const ModalProjectTab = ({}: ModalProjectTabProps) => {
    useEffect(() => {
        tooltips();
    }, []);
    return (
        <div className="application-modals modal show overflow-y-scroll" tabIndex={-1} role="dialog" style={{ zIndex: 1040, display: "block" }} aria-modal="true">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document" style={{ maxWidth: "800px!important" }}>
                <div className="modal-content">
                    <div className="modal-header border-bottom">
                        <h3 className="modal-title line-clamp-1">
                            <span className="text-truncate">Acme</span>
                        </h3>
                        <nav className="modal-nav nav nav-tabs">
                            <a href="#" className=" nav-link nav-item active" id="info-tab" data-toggle="tab" data-target="#info" type="button" role="tab" aria-controls="info" aria-selected="true">
                                <span>About</span>
                            </a>
                            <a href="#" className=" nav-link nav-item" id="data-tab" data-toggle="tab" data-target="#responses" type="button" role="tab" aria-controls="responses" aria-selected="false">
                                <span>Data</span>
                            </a>
                            <a href="#" className=" nav-link nav-item" id="members-tab" data-toggle="tab" data-target="#data" type="button" role="tab" aria-controls="data" aria-selected="false">
                                <span>Members</span>
                            </a>
                        </nav>
                        <div className="modal-pagination d-flex align-items-center ml-auto gap-xs">
                            <small className="pagination-label text-muted">1&nbsp;of&nbsp;6</small>
                            <Button type="default" size="sm" iconStartName="chevron-left" data-toggle="tooltip" data-original-title="Previous" />
                            <Button type="default" size="sm" iconStartName="chevron-right" data-toggle="tooltip" data-original-title="Next" />
                        </div>
                        <div className="modal-actions">
                            <a className="btn btn-transparent border-0 p-2xs text-muted" data-toggle="tooltip" data-original-title="Open full page" href="#">
                                <span className="icon icon-new-tab is-24px" />
                            </a>
                            <button className="btn btn-transparent border-0 p-2xs text-muted" type="button" data-dismiss="modal" aria-label="Close">
                                <span className="icon icon-close is-24px" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                    <div className="tab-content modal-body" id="projectTabsContent">
                        <div id="info" role="tabpanel" aria-labelledby="info-tab" className="tab-pane fade active show">
                            <div className=" d-flex flex-column gap-md">
                                <div className="d-flex flex-column flex-lg-row align-items-center flex-wrap flex-lg-nowrap gap-md">
                                    <div className="card-image-container">
                                        <div className="card-image bg-highlight">
                                            <span className="icon icon--letter is-40px position-absolute top-50 start-50 translate-middle">
                                                <span>A</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column align-items-center align-items-lg-start gap-xs flex-fill">
                                        <div className="d-flex flex-column align-items-center align-items-lg-start gap-0">
                                            <div className="d-flex align-items-center gap-2xs">
                                                <a href="#" className="h3 line-clamp-1 d-flex align-items-center gap-2xs">
                                                    <span>ACME</span>
                                                </a>
                                            </div>
                                            <ul className="text-muted small metas is-list mb-none">
                                                <li
                                                    data-toggle="tooltip"
                                                    data-placement="bottom"
                                                    data-original-title="<ul class='list-unstyled d-flex flex-column gap-2xs m-none'><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/2216e7ab-c701-4503-83a2-ae7b91afb15d/sq150.jpeg'></div><span>Alexandra Jolly</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/3155b942-7535-4b0b-8ded-97eb42a92e1b/sq150.jpeg'></div><span>Emma Salvarelli</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/41c42fb1-35bd-4a31-bf08-3b2267df4b95/sq150.jpeg'></div><span>Pierre Lemeteil</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/47fed806-ad38-46a0-9fd5-feec0e62189e/sq150.jpeg'></div><span>Terence Irving</span></li><li><span>+ 4 more</span></li></ul>"
                                                    data-html="true"
                                                    data-boundary="window"
                                                >
                                                    <div className="d-flex gap-2xs">
                                                        <span className="icon icon-members is-xs" />
                                                        <span className="text-nowrap">8 members</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex gap-2xs">
                                                        <span className="icon icon-bookmark" />
                                                        <span>200 followers</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <a href="#" className="badge is-pill">
                                            <span className="icon icon-program" />
                                            <span>
                                                {"{"}program.name{"}"}
                                            </span>
                                        </a>
                                    </div>
                                    <div className="d-flex gap-xs">
                                        <a href="#" className="btn btn-lg btn-primary">
                                            <span className="icon icon-bookmark-outline" />
                                            <span>Follow</span>
                                        </a>
                                        <div className="dropdown">
                                            <a className="btn btn-default btn-lg dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="icon icon-email" />
                                                <span>Contact</span>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">
                                                    <span className="dropdown-item--label">Open project space</span>
                                                </a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item" href="#">
                                                    <span className="dropdown-item--icon icon icon-comment" />
                                                    <span className="dropdown-item--label">Open Chat</span>
                                                    <span className="dropdown-item--shortcut icon icon-new-tab" />
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <span className="dropdown-item--icon icon icon-video" />
                                                    <span className="dropdown-item--label">Open Video</span>
                                                    <span className="dropdown-item--shortcut icon icon-new-tab" />
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <span className="dropdown-item--icon icon icon-email" />
                                                    <span className="dropdown-item--label">Send an email</span>
                                                    <span className="dropdown-item--shortcut icon icon-new-tab" />
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <span className="dropdown-item--icon icon icon-calendar" />
                                                    <span className="dropdown-item--label">Book a coaching</span>
                                                    <span className="dropdown-item--shortcut icon icon-new-tab" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="dropdown">
                                            <a className="btn btn-transparent btn-lg btn-icon position-relative z-1" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="icon is-20px icon-options" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">
                                                    <span>Edit profile</span>
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <span>Manage tags</span>
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <span>Manage data</span>
                                                </a>
                                                <a className="dropdown-item is-danger" href="#">
                                                    <span>Disable this project</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-column gap-md">
                                    <div className="d-flex flex-column">
                                        <h4>Learn more</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est, at elementum felis diam eget massa.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est, at elementum felis diam eget massa.</p>
                                    </div>
                                    <div className="badges small">
                                        <a href="#" className="badge is-pill">
                                            <span>Community</span>
                                        </a>
                                        <a href="#" className="badge is-pill">
                                            <span>SaaS</span>
                                        </a>
                                        <a href="#" className="badge is-pill">
                                            <span>Impact</span>
                                        </a>
                                        <a href="#" className="badge is-pill">
                                            <span>Social</span>
                                        </a>
                                        <a href="#" className="badge is-pill">
                                            <span className="icon icon-visibility-off" />
                                            <span>private tag</span>
                                        </a>
                                        <a href="#" className="badge is-pill">
                                            <span className="icon icon-visibility-off" />
                                            <span>private tag</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="responses" role="tabpanel" aria-labelledby="data-tab" className="tab-pane fade">
                            <div className=" d-flex flex-column gap-md">
                                <div id="fields_configuration_form">
                                    <fieldset className="form-group">
                                        <div id="fields_configuration_form_categories">
                                            <fieldset className="form-group">
                                                <legend className="checkbox-custom font-weight-bold col-form-label">Impact</legend>
                                                <div id="fields_configuration_form_categories_6" data-display="custom">
                                                    <div className="d-flex flex-wrap">
                                                        <div className="custom-label ">
                                                            <input type="checkbox" id="fields_configuration_form_categories_6_0" name="fields_configuration_form[categories][6][]" disabled className="is-solo d-none" defaultValue={35} />
                                                            <label className="d-flex flex-column p-5" htmlFor="fields_configuration_form_categories_6_0" title="No impact">
                                                                {/* <span className="icon icon-cancel is-md mb-3" /> */}
                                                                <span className="text-truncate">No impact</span>
                                                            </label>
                                                        </div>
                                                        <div className="custom-label ">
                                                            <input type="checkbox" id="fields_configuration_form_categories_6_1" name="fields_configuration_form[categories][6][]" disabled className="d-none" defaultValue={7} />
                                                            <label className="d-flex flex-column p-5" htmlFor="fields_configuration_form_categories_6_1" title="Sustainable">
                                                                {/* <span className="icon icon-leaf is-md mb-3" /> */}
                                                                <span className="text-truncate">Sustainable</span>
                                                            </label>
                                                        </div>
                                                        <div className="custom-label ">
                                                            <input type="checkbox" id="fields_configuration_form_categories_6_2" name="fields_configuration_form[categories][6][]" disabled className="d-none" defaultValue={8} />
                                                            <label className="d-flex flex-column p-5" htmlFor="fields_configuration_form_categories_6_2" title="Equitable">
                                                                {/* <span className="icon icon-scale-balance is-md mb-3" /> */}
                                                                <span className="text-truncate">Equitable</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <fieldset className="form-group">
                                                <legend className="checkbox-custom font-weight-bold col-form-label">Verticals</legend>
                                                <div id="fields_configuration_form_categories_9" data-display="custom">
                                                    <div className="d-flex flex-wrap">
                                                        <div className="custom-label ">
                                                            <input type="checkbox" id="fields_configuration_form_categories_9_0" name="fields_configuration_form[categories][9][]" disabled className="d-none" defaultValue={10} />
                                                            <label className="d-flex flex-column p-5" htmlFor="fields_configuration_form_categories_9_0" title="Plastic">
                                                                {/* <span className="icon icon-bottle-soda-classic-outline is-md mb-3" /> */}
                                                                <span className="text-truncate">Plastic</span>
                                                            </label>
                                                        </div>
                                                        <div className="custom-label ">
                                                            <input type="checkbox" id="fields_configuration_form_categories_9_1" name="fields_configuration_form[categories][9][]" disabled className="d-none" defaultValue={11} />
                                                            <label className="d-flex flex-column p-5" htmlFor="fields_configuration_form_categories_9_1" title="Food">
                                                                {/* <span className="icon icon-corn is-md mb-3" /> */}
                                                                <span className="text-truncate">Food</span>
                                                            </label>
                                                        </div>
                                                        <div className="custom-label ">
                                                            <input type="checkbox" id="fields_configuration_form_categories_9_2" name="fields_configuration_form[categories][9][]" disabled className="d-none" defaultValue={12} />
                                                            <label className="d-flex flex-column p-5" htmlFor="fields_configuration_form_categories_9_2" title="DEI">
                                                                {/* <span className="icon icon-account-group is-md mb-3" /> */}
                                                                <span className="text-truncate">DEI</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <fieldset className="form-group">
                                                <legend className="checkbox-custom font-weight-bold col-form-label">SDGs</legend>
                                                <div id="fields_configuration_form_categories_13" data-display="custom">
                                                    <div className="d-flex flex-wrap">
                                                        <div className="custom-label custom-label--sdg">
                                                            <input type="checkbox" id="fields_configuration_form_categories_13_0" name="fields_configuration_form[categories][13][]" disabled className="d-none" defaultValue={14} />
                                                            <label className="d-flex flex-column p-1" htmlFor="fields_configuration_form_categories_13_0" title="1 - No poverty">
                                                                <img src="img/odd/F-WEB-Goal-01.png" alt="1 - No poverty" title="1 - No poverty" />
                                                            </label>
                                                        </div>
                                                        <div className="custom-label custom-label--sdg">
                                                            <input type="checkbox" id="fields_configuration_form_categories_13_1" name="fields_configuration_form[categories][13][]" disabled className="d-none" defaultValue={15} />
                                                            <label className="d-flex flex-column p-1" htmlFor="fields_configuration_form_categories_13_1" title="2 - Zero hunger">
                                                                <img src="img/odd/F-WEB-Goal-02.png" alt="2 - Zero hunger" title="2 - Zero hunger" />
                                                            </label>
                                                        </div>
                                                        <div className="custom-label custom-label--sdg">
                                                            <input type="checkbox" id="fields_configuration_form_categories_13_2" name="fields_configuration_form[categories][13][]" disabled className="d-none" defaultValue={16} />
                                                            <label className="d-flex flex-column p-1" htmlFor="fields_configuration_form_categories_13_2" title="3 - Good health and well-being">
                                                                <img src="img/odd/F-WEB-Goal-03.png" alt="3 - Good health and well-being" title="3 - Good health and well-being" />
                                                            </label>
                                                        </div>
                                                        <div className="custom-label custom-label--sdg">
                                                            <input type="checkbox" id="fields_configuration_form_categories_13_3" name="fields_configuration_form[categories][13][]" disabled className="d-none" defaultValue={17} />
                                                            <label className="d-flex flex-column p-1" htmlFor="fields_configuration_form_categories_13_3" title="4 - Quality education">
                                                                <img src="img/odd/F-WEB-Goal-04.png" alt="4 - Quality education" title="4 - Quality education" />
                                                            </label>
                                                        </div>
                                                        <div className="custom-label custom-label--sdg">
                                                            <input type="checkbox" id="fields_configuration_form_categories_13_4" name="fields_configuration_form[categories][13][]" disabled className="d-none" defaultValue={18} />
                                                            <label className="d-flex flex-column p-1" htmlFor="fields_configuration_form_categories_13_4" title="5 - Gender equality">
                                                                <img src="img/odd/F-WEB-Goal-05.png" alt="5 - Gender equality" title="5 - Gender equality" />
                                                            </label>
                                                        </div>
                                                        <div className="custom-label custom-label--sdg">
                                                            <input type="checkbox" id="fields_configuration_form_categories_13_5" name="fields_configuration_form[categories][13][]" disabled className="d-none" defaultValue={19} />
                                                            <label className="d-flex flex-column p-1" htmlFor="fields_configuration_form_categories_13_5" title="6 - Clean water and sanitation">
                                                                <img src="img/odd/F-WEB-Goal-06.png" alt="6 - Clean water and sanitation" title="6 - Clean water and sanitation" />
                                                            </label>
                                                        </div>
                                                        <div className="custom-label custom-label--sdg">
                                                            <input type="checkbox" id="fields_configuration_form_categories_13_6" name="fields_configuration_form[categories][13][]" disabled className="d-none" defaultValue={20} />
                                                            <label className="d-flex flex-column p-1" htmlFor="fields_configuration_form_categories_13_6" title="7 - Affordable and clean energy">
                                                                <img src="img/odd/F-WEB-Goal-07.png" alt="7 - Affordable and clean energy" title="7 - Affordable and clean energy" />
                                                            </label>
                                                        </div>
                                                        <div className="custom-label custom-label--sdg">
                                                            <input type="checkbox" id="fields_configuration_form_categories_13_7" name="fields_configuration_form[categories][13][]" disabled className="d-none" defaultValue={21} />
                                                            <label className="d-flex flex-column p-1" htmlFor="fields_configuration_form_categories_13_7" title="8 - Decent work and economic growth">
                                                                <img src="img/odd/F-WEB-Goal-08.png" alt="8 - Decent work and economic growth" title="8 - Decent work and economic growth" />
                                                            </label>
                                                        </div>
                                                        <div className="custom-label custom-label--sdg">
                                                            <input type="checkbox" id="fields_configuration_form_categories_13_8" name="fields_configuration_form[categories][13][]" disabled className="d-none" defaultValue={22} />
                                                            <label className="d-flex flex-column p-1" htmlFor="fields_configuration_form_categories_13_8" title="9 - Industry, innovation and infrastructure">
                                                                <img src="img/odd/F-WEB-Goal-09.png" alt="9 - Industry, innovation and infrastructure" title="9 - Industry, innovation and infrastructure" />
                                                            </label>
                                                        </div>
                                                        <div className="custom-label custom-label--sdg">
                                                            <input type="checkbox" id="fields_configuration_form_categories_13_9" name="fields_configuration_form[categories][13][]" disabled className="d-none" defaultValue={23} />
                                                            <label className="d-flex flex-column p-1" htmlFor="fields_configuration_form_categories_13_9" title="10 - Reduced inequalities">
                                                                <img src="img/odd/F-WEB-Goal-10.png" alt="10 - Reduced inequalities" title="10 - Reduced inequalities" />
                                                            </label>
                                                        </div>
                                                        <div className="custom-label custom-label--sdg">
                                                            <input type="checkbox" id="fields_configuration_form_categories_13_10" name="fields_configuration_form[categories][13][]" disabled className="d-none" defaultValue={24} />
                                                            <label className="d-flex flex-column p-1" htmlFor="fields_configuration_form_categories_13_10" title="11 - Sustainable cities and communities">
                                                                <img src="img/odd/F-WEB-Goal-11.png" alt="11 - Sustainable cities and communities" title="11 - Sustainable cities and communities" />
                                                            </label>
                                                        </div>
                                                        <div className="custom-label custom-label--sdg">
                                                            <input type="checkbox" id="fields_configuration_form_categories_13_11" name="fields_configuration_form[categories][13][]" disabled className="d-none" defaultValue={25} />
                                                            <label className="d-flex flex-column p-1" htmlFor="fields_configuration_form_categories_13_11" title="12 - Responsible consumption and production">
                                                                <img src="img/odd/F-WEB-Goal-12.png" alt="12 - Responsible consumption and production" title="12 - Responsible consumption and production" />
                                                            </label>
                                                        </div>
                                                        <div className="custom-label custom-label--sdg">
                                                            <input type="checkbox" id="fields_configuration_form_categories_13_12" name="fields_configuration_form[categories][13][]" disabled className="d-none" defaultValue={26} />
                                                            <label className="d-flex flex-column p-1" htmlFor="fields_configuration_form_categories_13_12" title="13 - Climate action">
                                                                <img src="img/odd/F-WEB-Goal-13.png" alt="13 - Climate action" title="13 - Climate action" />
                                                            </label>
                                                        </div>
                                                        <div className="custom-label custom-label--sdg">
                                                            <input type="checkbox" id="fields_configuration_form_categories_13_13" name="fields_configuration_form[categories][13][]" disabled className="d-none" defaultValue={27} />
                                                            <label className="d-flex flex-column p-1" htmlFor="fields_configuration_form_categories_13_13" title="14 - Life below water">
                                                                <img src="img/odd/F-WEB-Goal-14.png" alt="14 - Life below water" title="14 - Life below water" />
                                                            </label>
                                                        </div>
                                                        <div className="custom-label custom-label--sdg">
                                                            <input type="checkbox" id="fields_configuration_form_categories_13_14" name="fields_configuration_form[categories][13][]" disabled className="d-none" defaultValue={28} />
                                                            <label className="d-flex flex-column p-1" htmlFor="fields_configuration_form_categories_13_14" title="15 - Life on land">
                                                                <img src="img/odd/F-WEB-Goal-15.png" alt="15 - Life on land" title="15 - Life on land" />
                                                            </label>
                                                        </div>
                                                        <div className="custom-label custom-label--sdg">
                                                            <input type="checkbox" id="fields_configuration_form_categories_13_15" name="fields_configuration_form[categories][13][]" disabled className="d-none" defaultValue={29} />
                                                            <label className="d-flex flex-column p-1" htmlFor="fields_configuration_form_categories_13_15" title="16 - Peace, justice and strong institutions">
                                                                <img src="img/odd/F-WEB-Goal-16.png" alt="16 - Peace, justice and strong institutions" title="16 - Peace, justice and strong institutions" />
                                                            </label>
                                                        </div>
                                                        <div className="custom-label custom-label--sdg">
                                                            <input type="checkbox" id="fields_configuration_form_categories_13_16" name="fields_configuration_form[categories][13][]" disabled className="d-none" defaultValue={30} />
                                                            <label className="d-flex flex-column p-1" htmlFor="fields_configuration_form_categories_13_16" title="17 - Partnerships for the goals">
                                                                <img src="img/odd/F-WEB-Goal-17.png" alt="17 - Partnerships for the goals" title="17 - Partnerships for the goals" />
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <div className="form-group">
                                                {" "}
                                                <label className="checkbox-custom font-weight-bold" htmlFor="fields_configuration_form_categories_51">
                                                    Business line
                                                </label>
                                                <div className="dropdown bootstrap-select disabled form-control">
                                                    <select id="fields_configuration_form_categories_51" name="fields_configuration_form[categories][51]" disabled data-display="custom" className="form-control" tabIndex={-98}>
                                                        <option value="" />
                                                        <option value={80}>Agriculture and Food Production</option>
                                                        <option value={81}>Corporate services</option>
                                                        <option value={82}>Education</option>
                                                        <option value={58}>Energy and Utilities</option>
                                                        <option value={83}>Entertainment</option>
                                                        <option value={52}>Financial Services</option>
                                                        <option value={53}>Healthcare and Life Sciences</option>
                                                        <option value={62}>Hospitality and Tourism</option>
                                                        <option value={56}>Manufacturing</option>
                                                        <option value={84}>Media</option>
                                                        <option value={61}>Mobility and Logistics</option>
                                                        <option value={57}>Public Administration and Government Services</option>
                                                        <option value={60}>Real Estate and Construction</option>
                                                        <option value={55}>Retail and Consumer Goods</option>
                                                        <option value={54}>Software and Technology</option>
                                                        <option value={59}>Telecommunications</option>
                                                        <option value={63}>Other</option>
                                                    </select>
                                                    <button type="button" className="btn btn-lg dropdown-toggle disabled btn-default bs-placeholder" data-toggle="dropdown" role="button" data-id="fields_configuration_form_categories_51" tabIndex={-1} aria-disabled="true" title="Nothing selected">
                                                        <div className="filter-option">
                                                            <div className="filter-option-inner">
                                                                <div className="filter-option-inner-inner">Nothing selected</div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <div className="dropdown-menu " role="combobox">
                                                        <div className="inner show" role="listbox" aria-expanded="false" tabIndex={-1}>
                                                            <ul className="dropdown-menu inner show" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                {" "}
                                                <label className="checkbox-custom font-weight-bold" htmlFor="fields_configuration_form_categories_64">
                                                    Technologies
                                                </label>
                                                <div className="dropdown bootstrap-select show-tick disabled form-control">
                                                    <select id="fields_configuration_form_categories_64" name="fields_configuration_form[categories][64][]" disabled data-display="custom" className="form-control" multiple tabIndex={-98}>
                                                        <option value={65}>Artificial Intelligence and Machine Learning</option>
                                                        <option value={66}>Biotechnology</option>
                                                        <option value={67}>Blockchain Technology (Web3…)</option>
                                                        <option value={68}>Engineering Technology</option>
                                                        <option value={69}>Entertainment</option>
                                                        <option value={70}>Information Technology (IT, IoT, …)</option>
                                                        <option value={71}>Medical Technology</option>
                                                        <option value={72}>Nanotechnology</option>
                                                        <option value={73}>Quantum Technology</option>
                                                        <option value={74}>Renewable Energy Technology</option>
                                                        <option value={75}>Robotics and Automation</option>
                                                        <option value={76}>Space Technology</option>
                                                        <option value={77}>Virtual Reality (VR) and Augmented Reality (AR)</option>
                                                        <option value={78}>Other</option>
                                                    </select>
                                                    <button type="button" className="btn btn-lg dropdown-toggle disabled btn-default bs-placeholder" data-toggle="dropdown" role="button" data-id="fields_configuration_form_categories_64" tabIndex={-1} aria-disabled="true" title="Nothing selected">
                                                        <div className="filter-option">
                                                            <div className="filter-option-inner">
                                                                <div className="filter-option-inner-inner">Nothing selected</div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <div className="dropdown-menu " role="combobox">
                                                        <div className="inner show" role="listbox" aria-expanded="false" tabIndex={-1}>
                                                            <ul className="dropdown-menu inner show" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <div id="fields_configuration_form_customData">
                                            <div className="form-group">
                                                {" "}
                                                <label className="checkbox-custom font-weight-bold" htmlFor="fields_configuration_form_customData_problematics">
                                                    Problems addressed
                                                </label>
                                                <textarea
                                                    id="fields_configuration_form_customData_problematics"
                                                    name="fields_configuration_form[customData][problematics]"
                                                    disabled
                                                    rows={4}
                                                    className="form-control"
                                                    style={{
                                                        overflow: "hidden",
                                                        overflowWrap: "break-word",
                                                        resize: "none",
                                                        height: 100,
                                                    }}
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <div className="form-group">
                                                {" "}
                                                <label className="checkbox-custom font-weight-bold" htmlFor="fields_configuration_form_customData_methodology">
                                                    Used methodology
                                                </label>
                                                <div className="dropdown bootstrap-select show-tick disabled form-control">
                                                    <select id="fields_configuration_form_customData_methodology" name="fields_configuration_form[customData][methodology][]" disabled className="form-control" multiple tabIndex={-98}>
                                                        <option value="consulting">Consulting</option>
                                                        <option value="design_fiction">Design fiction</option>
                                                        <option value="design_thinking">Design thinking</option>
                                                        <option value="educational_engineering">Educational engineering</option>
                                                        <option value="sustainable_design">Sustainable design</option>
                                                        <option value="ux_ui">UX / UI</option>
                                                        <option value="other">Other</option>
                                                    </select>
                                                    <button type="button" className="btn btn-lg dropdown-toggle disabled btn-default bs-placeholder" data-toggle="dropdown" role="button" data-id="fields_configuration_form_customData_methodology" tabIndex={-1} aria-disabled="true" title="Nothing selected">
                                                        <div className="filter-option">
                                                            <div className="filter-option-inner">
                                                                <div className="filter-option-inner-inner">Nothing selected</div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <div className="dropdown-menu " role="combobox">
                                                        <div className="inner show" role="listbox" aria-expanded="false" tabIndex={-1}>
                                                            <ul className="dropdown-menu inner show" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                {" "}
                                                <label className="checkbox-custom font-weight-bold" htmlFor="fields_configuration_form_customData_impact">
                                                    Results and impact (including environmental and social impact)
                                                </label>
                                                <textarea
                                                    id="fields_configuration_form_customData_impact"
                                                    name="fields_configuration_form[customData][impact]"
                                                    disabled
                                                    rows={4}
                                                    className="form-control"
                                                    style={{
                                                        overflow: "hidden",
                                                        overflowWrap: "break-word",
                                                        resize: "none",
                                                        height: 100,
                                                    }}
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <div className="form-group">
                                                {" "}
                                                <label className="checkbox-custom font-weight-bold" htmlFor="fields_configuration_form_customData_customer_verbatim">
                                                    Customer verbatim
                                                </label>
                                                <textarea
                                                    id="fields_configuration_form_customData_customer_verbatim"
                                                    name="fields_configuration_form[customData][customer_verbatim]"
                                                    disabled
                                                    rows={4}
                                                    className="form-control"
                                                    style={{
                                                        overflow: "hidden",
                                                        overflowWrap: "break-word",
                                                        resize: "none",
                                                        height: 100,
                                                    }}
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <div className="form-group">
                                                {" "}
                                                <label className="checkbox-custom font-weight-bold" htmlFor="fields_configuration_form_customData_confidentiality">
                                                    Confidentiality
                                                </label>
                                                <div className="dropdown bootstrap-select disabled form-control">
                                                    <select id="fields_configuration_form_customData_confidentiality" name="fields_configuration_form[customData][confidentiality]" disabled className="form-control" tabIndex={-98}>
                                                        <option value="" />
                                                        <option value="public">Public</option>
                                                        <option value="confidential">Confidential</option>
                                                    </select>
                                                    <button type="button" className="btn btn-lg dropdown-toggle disabled btn-default bs-placeholder" data-toggle="dropdown" role="button" data-id="fields_configuration_form_customData_confidentiality" tabIndex={-1} aria-disabled="true" title="Nothing selected">
                                                        <div className="filter-option">
                                                            <div className="filter-option-inner">
                                                                <div className="filter-option-inner-inner">Nothing selected</div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <div className="dropdown-menu " role="combobox">
                                                        <div className="inner show" role="listbox" aria-expanded="false" tabIndex={-1}>
                                                            <ul className="dropdown-menu inner show" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                {" "}
                                                <label className="checkbox-custom font-weight-bold" htmlFor="fields_configuration_form_customData_note">
                                                    Note
                                                </label>
                                                <textarea
                                                    id="fields_configuration_form_customData_note"
                                                    name="fields_configuration_form[customData][note]"
                                                    disabled
                                                    aria-describedby="fields_configuration_form_customData_note_help"
                                                    rows={4}
                                                    className="form-control"
                                                    style={{
                                                        overflow: "hidden",
                                                        overflowWrap: "break-word",
                                                        resize: "none",
                                                        height: 100,
                                                    }}
                                                    defaultValue={""}
                                                />{" "}
                                                <small id="fields_configuration_form_customData_note_help" className="form-text text-muted">
                                                    Why do we believe in it (team, sales drive, etc.)?
                                                </small>
                                            </div>
                                        </div>
                                    </fieldset>{" "}
                                    <input type="hidden" id="fields_configuration_form__token" name="fields_configuration_form[_token]" defaultValue="968bf603db9b215031347f.lXZldnVx_HfokafSpSrEvevhp5kSXshBTM1NYcCboZ8.z09TASY2jACZ5Oy1w1me8dur0qlaDokWCLwOMraokvKkAQgDJjKIGZL19g" />
                                    <input type="hidden" name="_method" defaultValue="PATCH" />
                                </div>
                            </div>
                        </div>
                        <div id="data" role="tabpanel" aria-labelledby="members-tab" className="tab-pane fade">
                            <div className=" d-flex flex-column gap-md">
                                <div className="cards">
                                    <div className="card">
                                        <div className="card-infos is-linked d-flex align-items-start gap-sm">
                                            <div className="thumbnail is-lg is-oval">
                                                <img src="https://inject-prod.s3.amazonaws.com/images/731305ed-0603-4910-9e93-65dd89ef302a/sq150.jpeg" />
                                            </div>
                                            <div className="card-title flex-grow-1">
                                                <a href="#" className="h4 mb-none line-clamp-1 d-flex align-items-center gap-2xs">
                                                    <span>Sarah Mecheneau</span>
                                                </a>
                                                <ul className="metas is-list small">
                                                    <li>Program Manager at Schoolab</li>
                                                    <li>Paris, FR</li>
                                                </ul>
                                            </div>
                                            <div className="dropdown z-2">
                                                <a href="#" className="btn btn-muted" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span className="icon icon-options"></span>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="#">
                                                        <div className="dropdown-item--label">
                                                            <span>Show profile</span>
                                                        </div>
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <div className="dropdown-item--label">
                                                            <span>Send a message</span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-infos is-linked d-flex align-items-start gap-sm">
                                            <div className="thumbnail is-lg is-oval">
                                                <img src="https://inject-prod.s3.amazonaws.com/images/41c42fb1-35bd-4a31-bf08-3b2267df4b95/sq150.jpeg" />
                                            </div>
                                            <div className="card-title flex-grow-1">
                                                <a href="#" className="h4 mb-none line-clamp-1 d-flex align-items-center gap-2xs">
                                                    <span>Pierre Lemeteil</span>
                                                </a>
                                                <ul className="metas is-list small">
                                                    <li>Chief Digital Officer</li>
                                                    <li>Paris, FR</li>
                                                </ul>
                                            </div>
                                            <div className="dropdown z-2">
                                                <a href="#" className="btn btn-muted" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span className="icon icon-options"></span>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="#">
                                                        <div className="dropdown-item--label">
                                                            <span>Show profile</span>
                                                        </div>
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <div className="dropdown-item--label">
                                                            <span>Send a message</span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer border-top">
                        <div className="d-flex flex-fill" data-toggle="tooltip" data-placement="top" data-original-title="This page is not available or is private." data-html="true" data-boundary="window">
                            <a className="btn btn-lg btn-block btn-default" href="#">
                                <span>Open full page</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
