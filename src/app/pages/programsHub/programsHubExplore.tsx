import React from "react";
import { Layout } from "../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";

export const ProgramsHubExplore = () => {
    return (
        <Layout showShortcutbar={false} hub={true}>
            <AppContent>
                <div className="application-section">
                    <div className="row ">
                        <div className="col-12 d-flex d-lg-inline-flex flex-column flex-lg-row mb-md">
                            <div className="reloadChallenges btn-group btn-group-toggle btn-filter-radios mr-lg-3 mr-0  mb-4 mb-lg-0" data-toggle="buttons">
                                <label className="btn btn-default btn-lg active text-nowrap">
                                    <input type="radio" name="" defaultValue="" id="" defaultChecked />
                                    My&nbsp;programs{" "}
                                </label>
                                <label className="btn btn-default btn-lg text-nowrap">
                                    <input type="radio" name="" id="" defaultValue="" />
                                    All programs
                                </label>
                            </div>
                            <div className="reloadChallenges btn-group btn-group-toggle btn-filter-radios mr-lg-3 mr-0  mb-4 mb-lg-0" data-toggle="buttons">
                                <label className="btn btn-default btn-lg active">
                                    <input type="radio" name="showprograms" id="" defaultValue="all" defaultChecked />
                                    All
                                </label>
                                <label className="btn btn-default btn-lg">
                                    <input type="radio" name="showprograms" defaultValue="Plastic" id="all" />
                                    Plastic{" "}
                                </label>
                                <label className="btn btn-default btn-lg">
                                    <input type="radio" name="showprograms" defaultValue="Food" id="all" />
                                    Food{" "}
                                </label>
                                <label className="btn btn-default btn-lg">
                                    <input type="radio" name="showprograms" defaultValue="DEI" id="all" />
                                    DEI{" "}
                                </label>
                            </div>
                            <div className="mr-lg-3 mr-0 mb-3 mb-lg-0">
                                <select defaultValue="" className="custom-select small">
                                    <option value="" className="small" >
                                        All roles
                                    </option>
                                    <option value={1}>Participant</option>
                                    <option value={2}>Expert</option>
                                    <option value={3}>Jury</option>
                                    <option value={4}>Manager</option>
                                </select>
                            </div>
                            <div className="mr-lg-3 mr-0 mb-3 mb-lg-0">
                                <select defaultValue=""  className="custom-select small">
                                    <option value="" className="small" >
                                        All registration
                                    </option>
                                    <option value={1}>Open</option>
                                    <option value={2}> In progress</option>
                                    <option value={3}> Closed</option>
                                </select>
                            </div>
                            <div className="mr-lg-3 mr-0 mb-3 mb-lg-0">
                                <select defaultValue=""  className="custom-select">
                                    <option value="" >All organization</option>
                                    <option value={1}>Schoolab</option>
                                    <option value={2}>Moho</option>
                                    <option value={3}>Raiselab</option>
                                </select>
                            </div>
                            <div>
                                <input type="search" className="form-control" id="exampleInputEmail1" aria-describedby="search" placeholder="Search ..." />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="bg-white border rounded px-40px py-80px d-flex flex-column align-items-center gap-0px text-center">
                                <div className="d-flex pb-16px">
                                    <span className="icon icon-program is-24px" />
                                </div>
                                <div className="d-flex flex-column gap-2xs">
                                    <p className="font-weight-bold">You have no program yet...</p>
                                    <p className="small text-muted">You are not a member of any program at this time. Please check back later.</p>
                                </div>
                                <div className="d-flex pt-32px">
                                    <a href="#" className="btn btn-lg btn-primary">
                                        <span className="icon icon-compass" />
                                        <span>Explore all programs</span>
                                    </a>
                                </div>
                                <div className="d-flex py-16px">
                                    <a href="#" className="small">
                                        Learn more about programs
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AppContent>
        </Layout>
    );
};
