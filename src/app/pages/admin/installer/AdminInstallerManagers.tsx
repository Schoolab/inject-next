import React from "react";
import { Layout } from "../../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";

export const AdminInstallerManagers = () => {
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
                                        <div className="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <div className="d-flex flex-column">
                                    <span className="text-primary">
                                            <span className="icon icon-check mr-3 " />
                                            Categories{" "}
                                        </span>
                                        <span className="small">Finished</span>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-3">
                                    <div className="progress mb-3" style={{ height: 5 }}>
                                        <div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <div className="d-flex flex-column">
                                    <span className="font-weight-bold">
                                            <span className="icon icon-check mr-3 d-none" />
                                            Managers{" "}
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
                                            Features{" "}
                                        </span>
                                        <span className="small">Not completed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="application-section">
                            <h3 className="application-section--title mb-3">
                                <span className="application-section--title-content">Managers</span>
                            </h3>
                            <p className="mb-5">Choose the people who will be in charge of the program</p>
                            <div className="bg-light rounded p-5">
                                <p>todo</p>
                            </div>
                           
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
