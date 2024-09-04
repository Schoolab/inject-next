import React from "react";
import { Layout } from "../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";

export const AdminInstaller = () => {
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
                            <legend className="label">Impact</legend>
                            <div className="grid gap-xs mt-2xs" id="id-1">
                                <div className="g-col-12 g-col-sm-6 g-col-xl-3">
                                    <div className="flex-fill mb-lg-0 custom-control custom-control-card custom-radio">
                                        <input type="radio" id="id-1_0" name="form1" className="custom-control-input" defaultValue={0} />
                                        <label className="text-nowrap custom-control-label custom-control-label d-flex flex-column gap-xs" htmlFor="id-1_0">
                                            <span className="icon is-sm icon-impact-none" />
                                            <span>None</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="g-col-12 g-col-sm-6 g-col-xl-3">
                                    <div className="flex-fill  mb-lg-0 custom-control custom-control-card custom-radio">
                                        <input type="radio" id="id-1_1" name="form1" className="custom-control-input" defaultValue={1} defaultChecked />
                                        <label className="text-nowrap custom-control-label custom-control-label d-flex flex-column gap-xs" htmlFor="id-1_1">
                                            <span className="icon is-sm icon-impact-not-obvious" />
                                            <span>Not obvious</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="g-col-12 g-col-sm-6 g-col-xl-3">
                                    <div className="flex-fill  mb-lg-0 custom-control custom-control-card custom-radio">
                                        <input type="radio" id="id-1_2" name="form1" className="custom-control-input" defaultValue={2} />
                                        <label className="text-nowrap custom-control-label custom-control-label d-flex flex-column gap-xs" htmlFor="id-1_2">
                                            <span className="icon is-sm icon-impact-native" />
                                            <span>Native</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="g-col-12 g-col-sm-6 g-col-xl-3">
                                    <div className="flex-fill  mb-lg-0 custom-control custom-control-card custom-radio">
                                        <input type="radio" id="id-1_3" name="form1" className="custom-control-input" defaultValue={2} />
                                        <label className="text-nowrap custom-control-label custom-control-label d-flex flex-column gap-xs" htmlFor="id-1_3">
                                            <span className="icon is-sm icon-impact-push" />
                                            <span>Push</span>
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
                                            <span className="icon is-sm icon-vertical-plastic" />
                                            <span>Plastic</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="g-col-12 g-col-sm-6 g-col-md-4">
                                    <div className="flex-fill mb-lg-0 custom-control custom-control-card custom-checkbox">
                                        <input type="checkbox" id="id-2_1" name="form2" className="custom-control-input" defaultValue={1} defaultChecked />
                                        <label className="text-nowrap custom-control-label custom-control-label d-flex flex-column gap-xs" htmlFor="id-2_1">
                                            <span className="icon is-sm icon-vertical-food" />
                                            <span>Food</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="g-col-12 g-col-sm-6 g-col-md-4">
                                    <div className="flex-fill mb-lg-0 custom-control custom-control-card custom-checkbox">
                                        <input type="checkbox" id="id-2_2" name="form2" className="custom-control-input" defaultValue={2} />
                                        <label className="text-nowrap custom-control-label custom-control-label d-flex flex-column gap-xs" htmlFor="id-2_2">
                                            <span className="icon is-sm icon-vertical-dei" />
                                            <span>DEI</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset className="form-group">
                            <legend className="label">Ecosystems</legend>
                            <div className="grid gap-xs mt-2xs" id="id-3">
                                <div className="g-col-12 g-col-sm-6 g-col-md-4">
                                    <div className="flex-fill mb-lg-0 custom-control custom-control-card custom-checkbox">
                                        <input type="checkbox" id="id-3_0" name="form2" className="custom-control-input" defaultValue={0} />
                                        <label className="text-nowrap custom-control-label custom-control-label d-flex flex-column gap-xs" htmlFor="id-3_0">
                                            <span className="icon is-sm icon-ecosystem-student" />
                                            <span>Student</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="g-col-12 g-col-sm-6 g-col-md-4">
                                    <div className="flex-fill mb-lg-0 custom-control custom-control-card custom-checkbox">
                                        <input type="checkbox" id="id-3_1" name="form2" className="custom-control-input" defaultValue={1} defaultChecked />
                                        <label className="text-nowrap custom-control-label custom-control-label d-flex flex-column gap-xs" htmlFor="id-3_1">
                                            <span className="icon is-sm icon-ecosystem-startups" />
                                            <span>Startups</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="g-col-12 g-col-sm-6 g-col-md-4">
                                    <div className="flex-fill mb-lg-0 custom-control custom-control-card custom-checkbox">
                                        <input type="checkbox" id="id-3_2" name="form2" className="custom-control-input" defaultValue={2} />
                                        <label className="text-nowrap custom-control-label custom-control-label d-flex flex-column gap-xs" htmlFor="id-3_2">
                                            <span className="icon is-sm icon-ecosystem-corporate" />
                                            <span>Corporate</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset className="form-group">
                            <legend className="label">Use case</legend>
                            <div className="grid gap-xs mt-2xs" id="id-4">
                                <div className="g-col-12 g-col-sm-6 g-col-xl-4">
                                    <div className="flex-fill custom-control custom-control-card custom-radio">
                                        <input type="radio" id="id-4_0" name="form2" className="custom-control-input" defaultValue={0} />
                                        <label className="text-nowrap custom-control-label custom-control-label" htmlFor="id-4_0">
                                            Community
                                        </label>
                                    </div>
                                </div>
                                <div className="g-col-12 g-col-sm-6 g-col-xl-4">
                                    <div className="flex-fill custom-control custom-control-card custom-radio">
                                        <input type="radio" id="id-4_1" name="form2" className="custom-control-input" defaultValue={1} defaultChecked />
                                        <label className="text-nowrap custom-control-label custom-control-label" htmlFor="id-4_1">
                                            Hackathon
                                        </label>
                                    </div>
                                </div>
                                <div className="g-col-12 g-col-sm-6 g-col-xl-4">
                                    <div className="flex-fill custom-control custom-control-card custom-radio">
                                        <input type="radio" id="id-4_2" name="form2" className="custom-control-input" defaultValue={2} />
                                        <label className="text-nowrap custom-control-label custom-control-label" htmlFor="id-4_2">
                                            Incubator
                                        </label>
                                    </div>
                                </div>
                                <div className="g-col-12 g-col-sm-6 g-col-xl-4">
                                    <div className="flex-fill custom-control custom-control-card custom-radio">
                                        <input type="radio" id="id-4_3" name="form2" className="custom-control-input" defaultValue={0} />
                                        <label className="text-nowrap custom-control-label custom-control-label" htmlFor="id-4_3">
                                            Innovation
                                        </label>
                                    </div>
                                </div>
                                <div className="g-col-12 g-col-sm-6 g-col-xl-4">
                                    <div className="flex-fill custom-control custom-control-card custom-radio">
                                        <input type="radio" id="id-4_4" name="form2" className="custom-control-input" defaultValue={1} defaultChecked />
                                        <label className="text-nowrap custom-control-label custom-control-label" htmlFor="id-4_4">
                                            Learning Course
                                        </label>
                                    </div>
                                </div>
                                <div className="g-col-12 g-col-sm-6 g-col-xl-4">
                                    <div className="flex-fill custom-control custom-control-card custom-radio">
                                        <input type="radio" id="id-4_5" name="form2" className="custom-control-input" defaultValue={2} />
                                        <label className="text-nowrap custom-control-label custom-control-label" htmlFor="id-4_5">
                                            Learning expedition
                                        </label>
                                    </div>
                                </div>
                                <div className="g-col-12 g-col-sm-6 g-col-xl-4">
                                    <div className="flex-fill custom-control custom-control-card custom-radio">
                                        <input type="radio" id="id-4_6" name="form2" className="custom-control-input" defaultValue={0} />
                                        <label className="text-nowrap custom-control-label custom-control-label" htmlFor="id-4_6">
                                            Learning Workshop
                                        </label>
                                    </div>
                                </div>
                                <div className="g-col-12 g-col-sm-6 g-col-xl-4">
                                    <div className="flex-fill custom-control custom-control-card custom-radio">
                                        <input type="radio" id="id-4_7" name="form2" className="custom-control-input" defaultValue={1} defaultChecked />
                                        <label className="text-nowrap custom-control-label custom-control-label" htmlFor="id-4_7">
                                            Open Innovation
                                        </label>
                                    </div>
                                </div>
                                <div className="g-col-12 g-col-sm-6 g-col-xl-4">
                                    <div className="flex-fill custom-control custom-control-card custom-radio">
                                        <input type="radio" id="id-4_8" name="form2" className="custom-control-input" defaultValue={2} />
                                        <label className="text-nowrap custom-control-label custom-control-label" htmlFor="id-4_8">
                                            Other
                                        </label>
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
