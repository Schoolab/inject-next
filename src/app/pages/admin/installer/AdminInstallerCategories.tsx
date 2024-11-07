import React from "react";
import { Layout } from "../../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";

export const AdminInstallerCategories = () => {
    return (
        <Layout showShortcutbar={false}>
            <AppContent showSubnav={false}>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 ">
                        <div className="mb-7 py-5 py-lg-0">
                            <div className="mb-5">
                                <h2>Create a new program</h2>
                                <p className="text-muted">Fill the information below and watch how it will appear to people joining it.</p>
                            </div>
                            <div className="row">
                                <div className="col-6 col-sm-3 mb-5 mb-sm-0">
                                    <div className="progress mb-3" style={{ height: 5 }}>
                                        <div className="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <div className="d-flex flex-column">
                                        <span className="text-primary">
                                            <span className="icon icon-check mr-3" />
                                            Basic info{" "}
                                        </span>
                                        <span className="small">Finished</span>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-3 mb-5 mb-sm-0">
                                    <div className="progress mb-3" style={{ height: 5 }}>
                                        <div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <div className="d-flex flex-column">
                                        <span className="font-weight-bold">
                                            <span className="icon icon-check mr-3 d-none" />
                                            Categories{" "}
                                        </span>
                                        <span className="small">In progress</span>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-3">
                                    <div className="progress mb-3" style={{ height: 5 }}>
                                        <div className="progress-bar" role="progressbar" style={{ width: "0%" }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <div className="d-flex flex-column">
                                        <span className="">
                                            <span className="icon icon-check mr-3 d-none" />
                                            Managers{" "}
                                        </span>
                                        <span className="small">Not completed</span>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-3">
                                    <div className="progress mb-3" style={{ height: 5 }}>
                                        <div className="progress-bar" role="progressbar" style={{ width: "0%" }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <div className="d-flex flex-column">
                                        <span className="">
                                            <span className="icon icon-check mr-3 d-none" />
                                            Features{" "}
                                        </span>
                                        <span className="small">Not completed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="application-section">
                            <h3 className="application-section--title mb-3">
                                <span className="application-section--title-content">Categories</span>
                            </h3>
                            <p className="mb-5">Choose the impact and the categories of the program. It will be used for insights.</p>
                            <fieldset className="form-group">
                                <div id="ChallengeDefaultForm_defaultFormModel_categories">
                                    <fieldset className="form-group">
                                        <legend className="active checkbox-custom font-weight-bold col-form-label">Impact</legend>
                                        <div id="ChallengeDefaultForm_defaultFormModel_categories_1" data-display="custom">
                                            <div className="d-flex flex-wrap">
                                                <div className="custom-label ">
                                                    <input type="radio" id="ChallengeDefaultForm_defaultFormModel_categories_1_0" name="ChallengeDefaultForm[defaultFormModel][categories][1]" className="d-none" defaultValue={2} defaultChecked />
                                                    <label className="d-flex flex-column p-5" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_1_0" title="No impact">
                                                        <span className="text-truncate">No impact</span>
                                                    </label>
                                                </div>
                                                <div className="custom-label ">
                                                    <input type="radio" id="ChallengeDefaultForm_defaultFormModel_categories_1_1" name="ChallengeDefaultForm[defaultFormModel][categories][1]" className="d-none" defaultValue={3} />
                                                    <label className="d-flex flex-column p-5" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_1_1" title="Impact not obvious">
                                                        <span className="text-truncate">Impact not obvious</span>
                                                    </label>
                                                </div>
                                                <div className="custom-label ">
                                                    <input type="radio" id="ChallengeDefaultForm_defaultFormModel_categories_1_2" name="ChallengeDefaultForm[defaultFormModel][categories][1]" className="d-none" defaultValue={4} />
                                                    <label className="d-flex flex-column p-5" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_1_2" title="Impact push">
                                                        <span className="text-truncate">Impact push</span>
                                                    </label>
                                                </div>
                                                <div className="custom-label ">
                                                    <input type="radio" id="ChallengeDefaultForm_defaultFormModel_categories_1_3" name="ChallengeDefaultForm[defaultFormModel][categories][1]" className="d-none" defaultValue={5} />
                                                    <label className="d-flex flex-column p-5" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_1_3" title="Impact native">
                                                        <span className="text-truncate">Impact native</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <legend className="checkbox-custom font-weight-bold col-form-label">Verticals</legend>
                                        <div id="ChallengeDefaultForm_defaultFormModel_categories_9" data-display="custom">
                                            <div className="d-flex flex-wrap">
                                                <div className="custom-label ">
                                                    <input type="checkbox" id="ChallengeDefaultForm_defaultFormModel_categories_9_0" name="ChallengeDefaultForm[defaultFormModel][categories][9][]" className="d-none" defaultValue={10} />
                                                    <label className="d-flex flex-column p-5" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_9_0" title="Plastic">
                                                        <span className="icon icon-bottle-soda-classic-outline is-md mb-3" />
                                                        <span className="text-truncate">Plastic</span>
                                                    </label>
                                                </div>
                                                <div className="custom-label ">
                                                    <input type="checkbox" id="ChallengeDefaultForm_defaultFormModel_categories_9_1" name="ChallengeDefaultForm[defaultFormModel][categories][9][]" className="d-none" defaultValue={11} />
                                                    <label className="d-flex flex-column p-5" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_9_1" title="Food">
                                                        <span className="icon icon-corn is-md mb-3" />
                                                        <span className="text-truncate">Food</span>
                                                    </label>
                                                </div>
                                                <div className="custom-label ">
                                                    <input type="checkbox" id="ChallengeDefaultForm_defaultFormModel_categories_9_2" name="ChallengeDefaultForm[defaultFormModel][categories][9][]" className="d-none" defaultValue={12} />
                                                    <label className="d-flex flex-column p-5" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_9_2" title="DEI">
                                                        <span className="icon icon-account-group is-md mb-3" />
                                                        <span className="text-truncate">DEI</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <legend className="checkbox-custom font-weight-bold col-form-label">SDGs</legend>
                                        <div id="ChallengeDefaultForm_defaultFormModel_categories_13" data-display="custom">
                                            <div className="d-flex flex-wrap">
                                                <div className="custom-label custom-label--sdg">
                                                    <input type="checkbox" id="ChallengeDefaultForm_defaultFormModel_categories_13_0" name="ChallengeDefaultForm[defaultFormModel][categories][13][]" className="d-none" defaultValue={14} />
                                                    <label className="d-flex flex-column p-1" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_13_0" title="1 - No poverty">
                                                        <img src="img/odd/F-WEB-Goal-01.png" alt="1 - No poverty" title="1 - No poverty" />
                                                    </label>
                                                </div>
                                                <div className="custom-label custom-label--sdg">
                                                    <input type="checkbox" id="ChallengeDefaultForm_defaultFormModel_categories_13_1" name="ChallengeDefaultForm[defaultFormModel][categories][13][]" className="d-none" defaultValue={15} />
                                                    <label className="d-flex flex-column p-1" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_13_1" title="2 - Zero hunger">
                                                        <img src="img/odd/F-WEB-Goal-02.png" alt="2 - Zero hunger" title="2 - Zero hunger" />
                                                    </label>
                                                </div>
                                                <div className="custom-label custom-label--sdg">
                                                    <input type="checkbox" id="ChallengeDefaultForm_defaultFormModel_categories_13_2" name="ChallengeDefaultForm[defaultFormModel][categories][13][]" className="d-none" defaultValue={16} />
                                                    <label className="d-flex flex-column p-1" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_13_2" title="3 - Good health and well-being">
                                                        <img src="img/odd/F-WEB-Goal-03.png" alt="3 - Good health and well-being" title="3 - Good health and well-being" />
                                                    </label>
                                                </div>
                                                <div className="custom-label custom-label--sdg">
                                                    <input type="checkbox" id="ChallengeDefaultForm_defaultFormModel_categories_13_3" name="ChallengeDefaultForm[defaultFormModel][categories][13][]" className="d-none" defaultValue={17} />
                                                    <label className="d-flex flex-column p-1" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_13_3" title="4 - Quality education">
                                                        <img src="img/odd/F-WEB-Goal-04.png" alt="4 - Quality education" title="4 - Quality education" />
                                                    </label>
                                                </div>
                                                <div className="custom-label custom-label--sdg">
                                                    <input type="checkbox" id="ChallengeDefaultForm_defaultFormModel_categories_13_4" name="ChallengeDefaultForm[defaultFormModel][categories][13][]" className="d-none" defaultValue={18} />
                                                    <label className="d-flex flex-column p-1" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_13_4" title="5 - Gender equality">
                                                        <img src="img/odd/F-WEB-Goal-05.png" alt="5 - Gender equality" title="5 - Gender equality" />
                                                    </label>
                                                </div>
                                                <div className="custom-label custom-label--sdg">
                                                    <input type="checkbox" id="ChallengeDefaultForm_defaultFormModel_categories_13_5" name="ChallengeDefaultForm[defaultFormModel][categories][13][]" className="d-none" defaultValue={19} />
                                                    <label className="d-flex flex-column p-1" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_13_5" title="6 - Clean water and sanitation">
                                                        <img src="img/odd/F-WEB-Goal-06.png" alt="6 - Clean water and sanitation" title="6 - Clean water and sanitation" />
                                                    </label>
                                                </div>
                                                <div className="custom-label custom-label--sdg">
                                                    <input type="checkbox" id="ChallengeDefaultForm_defaultFormModel_categories_13_6" name="ChallengeDefaultForm[defaultFormModel][categories][13][]" className="d-none" defaultValue={20} />
                                                    <label className="d-flex flex-column p-1" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_13_6" title="7 - Affordable and clean energy">
                                                        <img src="img/odd/F-WEB-Goal-07.png" alt="7 - Affordable and clean energy" title="7 - Affordable and clean energy" />
                                                    </label>
                                                </div>
                                                <div className="custom-label custom-label--sdg">
                                                    <input type="checkbox" id="ChallengeDefaultForm_defaultFormModel_categories_13_7" name="ChallengeDefaultForm[defaultFormModel][categories][13][]" className="d-none" defaultValue={21} />
                                                    <label className="d-flex flex-column p-1" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_13_7" title="8 - Decent work and economic growth">
                                                        <img src="img/odd/F-WEB-Goal-08.png" alt="8 - Decent work and economic growth" title="8 - Decent work and economic growth" />
                                                    </label>
                                                </div>
                                                <div className="custom-label custom-label--sdg">
                                                    <input type="checkbox" id="ChallengeDefaultForm_defaultFormModel_categories_13_8" name="ChallengeDefaultForm[defaultFormModel][categories][13][]" className="d-none" defaultValue={22} />
                                                    <label className="d-flex flex-column p-1" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_13_8" title="9 - Industry, innovation and infrastructure">
                                                        <img src="img/odd/F-WEB-Goal-09.png" alt="9 - Industry, innovation and infrastructure" title="9 - Industry, innovation and infrastructure" />
                                                    </label>
                                                </div>
                                                <div className="custom-label custom-label--sdg">
                                                    <input type="checkbox" id="ChallengeDefaultForm_defaultFormModel_categories_13_9" name="ChallengeDefaultForm[defaultFormModel][categories][13][]" className="d-none" defaultValue={23} />
                                                    <label className="d-flex flex-column p-1" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_13_9" title="10 - Reduced inequalities">
                                                        <img src="img/odd/F-WEB-Goal-10.png" alt="10 - Reduced inequalities" title="10 - Reduced inequalities" />
                                                    </label>
                                                </div>
                                                <div className="custom-label custom-label--sdg">
                                                    <input type="checkbox" id="ChallengeDefaultForm_defaultFormModel_categories_13_10" name="ChallengeDefaultForm[defaultFormModel][categories][13][]" className="d-none" defaultValue={24} />
                                                    <label className="d-flex flex-column p-1" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_13_10" title="11 - Sustainable cities and communities">
                                                        <img src="img/odd/F-WEB-Goal-11.png" alt="11 - Sustainable cities and communities" title="11 - Sustainable cities and communities" />
                                                    </label>
                                                </div>
                                                <div className="custom-label custom-label--sdg">
                                                    <input type="checkbox" id="ChallengeDefaultForm_defaultFormModel_categories_13_11" name="ChallengeDefaultForm[defaultFormModel][categories][13][]" className="d-none" defaultValue={25} />
                                                    <label className="d-flex flex-column p-1" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_13_11" title="12 - Responsible consumption and production">
                                                        <img src="img/odd/F-WEB-Goal-12.png" alt="12 - Responsible consumption and production" title="12 - Responsible consumption and production" />
                                                    </label>
                                                </div>
                                                <div className="custom-label custom-label--sdg">
                                                    <input type="checkbox" id="ChallengeDefaultForm_defaultFormModel_categories_13_12" name="ChallengeDefaultForm[defaultFormModel][categories][13][]" className="d-none" defaultValue={26} />
                                                    <label className="d-flex flex-column p-1" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_13_12" title="13 - Climate action">
                                                        <img src="img/odd/F-WEB-Goal-13.png" alt="13 - Climate action" title="13 - Climate action" />
                                                    </label>
                                                </div>
                                                <div className="custom-label custom-label--sdg">
                                                    <input type="checkbox" id="ChallengeDefaultForm_defaultFormModel_categories_13_13" name="ChallengeDefaultForm[defaultFormModel][categories][13][]" className="d-none" defaultValue={27} />
                                                    <label className="d-flex flex-column p-1" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_13_13" title="14 - Life below water">
                                                        <img src="img/odd/F-WEB-Goal-14.png" alt="14 - Life below water" title="14 - Life below water" />
                                                    </label>
                                                </div>
                                                <div className="custom-label custom-label--sdg">
                                                    <input type="checkbox" id="ChallengeDefaultForm_defaultFormModel_categories_13_14" name="ChallengeDefaultForm[defaultFormModel][categories][13][]" className="d-none" defaultValue={28} />
                                                    <label className="d-flex flex-column p-1" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_13_14" title="15 - Life on land">
                                                        <img src="img/odd/F-WEB-Goal-15.png" alt="15 - Life on land" title="15 - Life on land" />
                                                    </label>
                                                </div>
                                                <div className="custom-label custom-label--sdg">
                                                    <input type="checkbox" id="ChallengeDefaultForm_defaultFormModel_categories_13_15" name="ChallengeDefaultForm[defaultFormModel][categories][13][]" className="d-none" defaultValue={29} />
                                                    <label className="d-flex flex-column p-1" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_13_15" title="16 - Peace, justice and strong institutions">
                                                        <img src="img/odd/F-WEB-Goal-16.png" alt="16 - Peace, justice and strong institutions" title="16 - Peace, justice and strong institutions" />
                                                    </label>
                                                </div>
                                                <div className="custom-label custom-label--sdg">
                                                    <input type="checkbox" id="ChallengeDefaultForm_defaultFormModel_categories_13_16" name="ChallengeDefaultForm[defaultFormModel][categories][13][]" className="d-none" defaultValue={30} />
                                                    <label className="d-flex flex-column p-1" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_13_16" title="17 - Partnerships for the goals">
                                                        <img src="img/odd/F-WEB-Goal-17.png" alt="17 - Partnerships for the goals" title="17 - Partnerships for the goals" />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <legend className="checkbox-custom font-weight-bold col-form-label">Ecosystems</legend>
                                        <div id="ChallengeDefaultForm_defaultFormModel_categories_31" data-display="custom">
                                            <div className="d-flex flex-wrap">
                                                <div className="custom-label ">
                                                    <input type="checkbox" id="ChallengeDefaultForm_defaultFormModel_categories_31_0" name="ChallengeDefaultForm[defaultFormModel][categories][31][]" className="d-none" defaultValue={32} />
                                                    <label className="d-flex flex-column p-5" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_31_0" title="Students">
                                                        <span className="text-truncate">Students</span>
                                                    </label>
                                                </div>
                                                <div className="custom-label ">
                                                    <input type="checkbox" id="ChallengeDefaultForm_defaultFormModel_categories_31_1" name="ChallengeDefaultForm[defaultFormModel][categories][31][]" className="d-none" defaultValue={33} />
                                                    <label className="d-flex flex-column p-5" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_31_1" title="Startups">
                                                        <span className="text-truncate">Startups</span>
                                                    </label>
                                                </div>
                                                <div className="custom-label ">
                                                    <input type="checkbox" id="ChallengeDefaultForm_defaultFormModel_categories_31_2" name="ChallengeDefaultForm[defaultFormModel][categories][31][]" className="d-none" defaultValue={34} />
                                                    <label className="d-flex flex-column p-5" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_31_2" title="Corporate">
                                                        <span className="text-truncate">Corporate</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <legend className="active checkbox-custom font-weight-bold col-form-label">Use case</legend>
                                        <div id="ChallengeDefaultForm_defaultFormModel_categories_36" data-display="custom">
                                            <div className="d-flex flex-wrap">
                                                <div className="custom-label ">
                                                    <input type="radio" id="ChallengeDefaultForm_defaultFormModel_categories_36_0" name="ChallengeDefaultForm[defaultFormModel][categories][36]" className="d-none" defaultValue={37} defaultChecked />
                                                    <label className="d-flex flex-column p-5" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_36_0" title="Incubator / Entrepreneurship">
                                                        <span className="text-truncate">Incubator / Entrepreneurship</span>
                                                    </label>
                                                </div>
                                                <div className="custom-label ">
                                                    <input type="radio" id="ChallengeDefaultForm_defaultFormModel_categories_36_1" name="ChallengeDefaultForm[defaultFormModel][categories][36]" className="d-none" defaultValue={38} />
                                                    <label className="d-flex flex-column p-5" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_36_1" title="Innovation hub / Community">
                                                        <span className="text-truncate">Innovation hub / Community</span>
                                                    </label>
                                                </div>
                                                <div className="custom-label ">
                                                    <input type="radio" id="ChallengeDefaultForm_defaultFormModel_categories_36_2" name="ChallengeDefaultForm[defaultFormModel][categories][36]" className="d-none" defaultValue={39} />
                                                    <label className="d-flex flex-column p-5" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_36_2" title="Hackathon / Bootcamp / Project acceleration">
                                                        <span className="text-truncate">Hackathon / Bootcamp / Project acceleration</span>
                                                    </label>
                                                </div>
                                                <div className="custom-label ">
                                                    <input type="radio" id="ChallengeDefaultForm_defaultFormModel_categories_36_3" name="ChallengeDefaultForm[defaultFormModel][categories][36]" className="d-none" defaultValue={40} />
                                                    <label className="d-flex flex-column p-5" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_36_3" title="Learning expedition">
                                                        <span className="text-truncate">Learning expedition</span>
                                                    </label>
                                                </div>
                                                <div className="custom-label ">
                                                    <input type="radio" id="ChallengeDefaultForm_defaultFormModel_categories_36_4" name="ChallengeDefaultForm[defaultFormModel][categories][36]" className="d-none" defaultValue={41} />
                                                    <label className="d-flex flex-column p-5" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_36_4" title="Learning">
                                                        <span className="text-truncate">Learning</span>
                                                    </label>
                                                </div>
                                                <div className="custom-label ">
                                                    <input type="radio" id="ChallengeDefaultForm_defaultFormModel_categories_36_5" name="ChallengeDefaultForm[defaultFormModel][categories][36]" className="d-none" defaultValue={42} />
                                                    <label className="d-flex flex-column p-5" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_36_5" title="Workshop">
                                                        <span className="text-truncate">Workshop</span>
                                                    </label>
                                                </div>
                                                <div className="custom-label ">
                                                    <input type="radio" id="ChallengeDefaultForm_defaultFormModel_categories_36_6" name="ChallengeDefaultForm[defaultFormModel][categories][36]" className="d-none" defaultValue={43} />
                                                    <label className="d-flex flex-column p-5" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_36_6" title="Startup / Student challenge">
                                                        <span className="text-truncate">Startup / Student challenge</span>
                                                    </label>
                                                </div>
                                                <div className="custom-label ">
                                                    <input type="radio" id="ChallengeDefaultForm_defaultFormModel_categories_36_7" name="ChallengeDefaultForm[defaultFormModel][categories][36]" className="d-none" defaultValue={44} />
                                                    <label className="d-flex flex-column p-5" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_36_7" title="Strategic thinking / Framework">
                                                        <span className="text-truncate">Strategic thinking / Framework</span>
                                                    </label>
                                                </div>
                                                <div className="custom-label ">
                                                    <input type="radio" id="ChallengeDefaultForm_defaultFormModel_categories_36_8" name="ChallengeDefaultForm[defaultFormModel][categories][36]" className="d-none" defaultValue={85} />
                                                    <label className="d-flex flex-column p-5" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_36_8" title="Inject">
                                                        <span className="text-truncate">Inject</span>
                                                    </label>
                                                </div>
                                                <div className="custom-label ">
                                                    <input type="radio" id="ChallengeDefaultForm_defaultFormModel_categories_36_9" name="ChallengeDefaultForm[defaultFormModel][categories][36]" className="d-none" defaultValue={86} />
                                                    <label className="d-flex flex-column p-5" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_36_9" title="Leadership / Talent / Intrapreneurship program">
                                                        <span className="text-truncate">Leadership / Talent / Intrapreneurship program</span>
                                                    </label>
                                                </div>
                                                <div className="custom-label ">
                                                    <input type="radio" id="ChallengeDefaultForm_defaultFormModel_categories_36_10" name="ChallengeDefaultForm[defaultFormModel][categories][36]" className="d-none" defaultValue={45} />
                                                    <label className="d-flex flex-column p-5" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_36_10" title="Other">
                                                        <span className="text-truncate">Other</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <legend className="active checkbox-custom font-weight-bold col-form-label">Capability</legend>
                                        <div id="ChallengeDefaultForm_defaultFormModel_categories_46" data-display="custom">
                                            <div className="d-flex flex-wrap">
                                                <div className="custom-label ">
                                                    <input type="radio" id="ChallengeDefaultForm_defaultFormModel_categories_46_0" name="ChallengeDefaultForm[defaultFormModel][categories][46]" className="d-none" defaultValue={47} defaultChecked />
                                                    <label className="d-flex flex-column p-5" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_46_0" title="Education">
                                                        <span className="text-truncate">Education</span>
                                                    </label>
                                                </div>
                                                <div className="custom-label ">
                                                    <input type="radio" id="ChallengeDefaultForm_defaultFormModel_categories_46_1" name="ChallengeDefaultForm[defaultFormModel][categories][46]" className="d-none" defaultValue={48} />
                                                    <label className="d-flex flex-column p-5" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_46_1" title="Entrepreneurship">
                                                        <span className="text-truncate">Entrepreneurship</span>
                                                    </label>
                                                </div>
                                                <div className="custom-label ">
                                                    <input type="radio" id="ChallengeDefaultForm_defaultFormModel_categories_46_2" name="ChallengeDefaultForm[defaultFormModel][categories][46]" className="d-none" defaultValue={49} />
                                                    <label className="d-flex flex-column p-5" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_46_2" title="Innovation">
                                                        <span className="text-truncate">Innovation</span>
                                                    </label>
                                                </div>
                                                <div className="custom-label ">
                                                    <input type="radio" id="ChallengeDefaultForm_defaultFormModel_categories_46_3" name="ChallengeDefaultForm[defaultFormModel][categories][46]" className="d-none" defaultValue={79} />
                                                    <label className="d-flex flex-column p-5" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_46_3" title="Inject">
                                                        <span className="text-truncate">Inject</span>
                                                    </label>
                                                </div>
                                                <div className="custom-label ">
                                                    <input type="radio" id="ChallengeDefaultForm_defaultFormModel_categories_46_4" name="ChallengeDefaultForm[defaultFormModel][categories][46]" className="d-none" defaultValue={50} />
                                                    <label className="d-flex flex-column p-5" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_46_4" title="Campus">
                                                        <span className="text-truncate">Campus</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <div className="form-group">
                                        <label className="checkbox-custom font-weight-bold" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_51">
                                            Business line
                                        </label>
                                        <div className="dropdown bootstrap-select form-control">
                                            <select id="ChallengeDefaultForm_defaultFormModel_categories_51" name="ChallengeDefaultForm[defaultFormModel][categories][51]" data-display="custom" className="form-control" tabIndex={-98}>
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
                                            <button type="button" className="btn btn-lg dropdown-toggle btn-default bs-placeholder" data-toggle="dropdown" role="button" data-id="ChallengeDefaultForm_defaultFormModel_categories_51" title="Nothing selected">
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
                            <div className="d-flex justify-content-end">
                                <button type="submit" className="btn btn-default btn-lg mr-3">
                                    Previous
                                </button>
                                <button type="submit" className="btn btn-primary btn-lg">
                                    Next Step
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </AppContent>
        </Layout>
    );
};
