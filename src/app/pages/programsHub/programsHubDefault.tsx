import React from "react";
import { Layout } from "../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";

export const ProgramsHubDefault = () => {
    return (
        <Layout showShortcutbar={false}>
            <AppContent>
                <div className="application-section">
                    <div className="items row card-row">
                        <div className="col-12 d-flex d-lg-inline-flex flex-column flex-lg-row mb-8">
                            <div className=" reloadChallenges btn-group btn-group-toggle btn-filter-radios mr-lg-3 mr-0 mb-4 mb-lg-0" data-toggle="buttons">
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
                                    <option value="" className="small">
                                        All roles
                                    </option>
                                    <option value={1}>Participant</option>
                                    <option value={2}>Expert</option>
                                    <option value={3}>Jury</option>
                                    <option value={4}>Manager</option>
                                </select>
                            </div>
                            <div className="mr-lg-3 mr-0 mb-3 mb-lg-0">
                                <select defaultValue="" className="custom-select small">
                                    <option value="" className="small">
                                        All registration
                                    </option>
                                    <option value={1}>Open</option>
                                    <option value={2}> In progress</option>
                                    <option value={3}> Closed</option>
                                </select>
                            </div>
                            <div className="mr-lg-3 mr-0 mb-3 mb-lg-0">
                                <select defaultValue="" className="custom-select">
                                    <option value="">All organization</option>
                                    <option value={1}>Schoolab</option>
                                    <option value={2}>Moho</option>
                                    <option value={3}>Raiselab</option>
                                </select>
                            </div>
                            <div>
                                <input type="search" className="form-control" id="exampleInputEmail1" aria-describedby="search" placeholder="Search ..." />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card h-100">
                                <div className="card-infos is-linked">
                                    <div className="card-banner">
                                        <div className="card-image">
                                            <picture>
                                                <img src="https://inject-prod.s3.amazonaws.com/challenge/cover/pink_co900x600.png" alt="" />
                                            </picture>
                                        </div>
                                        <div className="card-external">
                                            <div className="small">External: </div>
                                            <div className="small font-weight-bold text-truncate mx-2">
                                                {"{"}
                                                {"{"}Organization name {"}"}
                                                {"}"}
                                            </div>
                                            <div className="small icon icon-new-tab" />
                                        </div>
                                    </div>
                                    <div className="card-title">
                                        <a href="/program/142/details" className="h3 mb-none stretched-link line-clamp-1">
                                            {" "}
                                            {"{"}
                                            {"{"}Program name{"}"}
                                            {"}"}
                                        </a>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2xs">
                                        <div className="d-flex align-items-center flex-wrap">
                                            <div className="badges mr-3">
                                                <div className="badge is-pill">Food</div>
                                                <a className="badge is-pill" href="#">
                                                    Plastic
                                                </a>
                                                <a className="badge is-pill" href="#">
                                                    DEI
                                                </a>
                                            </div>
                                        </div>
                                        <div className="badges">
                                            <div className="badge is-pill is-open">
                                                <span className="icon icon-circle" /> Open
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-targets">
                                    <div className="card-target">
                                        <a href="#" className="stretched-link d-flex align-items-center">
                                            <span className="icon icon-information is-sm mr-2" />
                                            Public page{" "}
                                        </a>
                                        <span className="icon icon-chevron-right is-sm" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card h-100">
                                <div className="card-infos is-linked">
                                    <div className="card-banner">
                                        <div className="card-image">
                                            <picture>
                                                <img src="https://inject-prod.s3.amazonaws.com/images/f5e0a581-76e3-413a-a462-88dc98361172/co1800x1200.png" alt="" />
                                            </picture>
                                        </div>
                                        <div className="card-external">
                                            <div className="small">External: </div>
                                            <div className="small font-weight-bold text-truncate mx-2">
                                                {"{"}
                                                {"{"}Organization name{"}"}
                                                {"}"}
                                            </div>
                                            <div className="small icon icon-new-tab" />
                                        </div>
                                    </div>
                                    <div className="card-title">
                                        <a href="/program/142/details" className="h3 mb-none stretched-link line-clamp-1">
                                            {" "}
                                            {"{"}
                                            {"{"}Program name{"}"}
                                            {"}"}
                                        </a>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2xs">
                                        <div className="d-flex align-items-center flex-wrap">
                                            <div className="badges mr-3">
                                                <div className="badge is-pill">Food</div>
                                                <a className="badge is-pill" href="#">
                                                    Plastic
                                                </a>
                                                <a className="badge is-pill" href="#">
                                                    DEI
                                                </a>
                                            </div>
                                        </div>
                                        <div className="badges">
                                            <div className="badge is-pill is-open">
                                                <span className="icon icon-circle" /> Open
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-links">
                                    <div className="d-flex align-items-center justify-content-between text-muted mb-3">
                                        <span className="small font-weight-bold">Join the program</span>
                                        <span className="small">
                                            Canditates{" "}
                                            <span className="font-weight-bold">
                                                <span className="icon icon-account" /> 48
                                            </span>
                                        </span>
                                    </div>
                                    <div className="card-actions">
                                        <a className="btn btn-lg btn-primary btn-block" href="#">
                                            {" "}
                                            Join{" "}
                                        </a>
                                        <a className="btn btn-lg btn-default btn-block" href="#">
                                            {" "}
                                            Learn more{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card h-100">
                                <div className="card-infos is-linked">
                                    <div className="card-banner">
                                        <div className="card-image">
                                            <picture>
                                                <img src="https://inject-prod.s3.amazonaws.com/images/b9751cfd-f746-4963-af9e-23f335a5792f/co1920x640.png" alt="" />
                                            </picture>
                                        </div>
                                        <div className="card-external">
                                            <div className="small">External: </div>
                                            <div className="small font-weight-bold text-truncate mx-2">
                                                {"{"}
                                                {"{"}Organization name{"}"}
                                                {"}"}
                                            </div>
                                            <div className="small icon icon-new-tab" />
                                        </div>
                                    </div>
                                    <div className="card-title">
                                        <a href="/program/142/details" className="h3 mb-none stretched-link line-clamp-1">
                                            {" "}
                                            {"{"}
                                            {"{"}Program name{"}"}
                                            {"}"}
                                        </a>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2xs">
                                        <div className="d-flex align-items-center flex-wrap">
                                            <div className="badges mr-3">
                                                <div className="badge is-pill">Food</div>
                                                <a className="badge is-pill" href="#">
                                                    Plastic
                                                </a>
                                                <a className="badge is-pill" href="#">
                                                    DEI
                                                </a>
                                            </div>
                                        </div>
                                        <div className="badges">
                                            <div className="badge is-pill is-progress">
                                                <span className="icon icon-circle-slice-3" /> In progress
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-targets">
                                    <div className="card-target">
                                        <a href="#" className="stretched-link d-flex align-items-center">
                                            <span className="icon icon-settings is-sm mr-2" />
                                            Manage program{" "}
                                        </a>
                                        <span className="icon icon-chevron-right is-sm" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card h-100">
                                <div className="card-infos is-linked">
                                    <div className="card-banner">
                                        <div className="card-image">
                                            <picture>
                                                <img src="https://inject-prod.s3.amazonaws.com/images/d5623bc5-fafa-49f4-8f9c-763d1f12fe44/co1920x640.png" alt="" />
                                            </picture>
                                        </div>
                                        <div className="card-external">
                                            <div className="small">External: </div>
                                            <div className="small font-weight-bold text-truncate mx-2">
                                                {"{"}
                                                {"{"}Organization name with a super long text{"}"}
                                                {"}"}
                                            </div>
                                            <div className="small icon icon-new-tab" />
                                        </div>
                                    </div>
                                    <div className="card-title">
                                        <a href="/program/142/details" className="h3 mb-none stretched-link line-clamp-1">
                                            {" "}
                                            {"{"}
                                            {"{"}Program name{"}"}
                                            {"}"}
                                        </a>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2xs">
                                        <div className="mr-3 mb-3">
                                            <span className="text-muted small text-nowrap">No category...</span>
                                        </div>
                                        <div className="badges">
                                            <div className="badge is-pill is-closed">
                                                <span className="icon icon-minus-circle" /> Closed
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card h-100">
                                <div className="card-infos is-linked">
                                    <div className="card-banner">
                                        <div className="card-image">
                                            <picture>
                                                <img src="https://inject-prod.s3.amazonaws.com/images/bc84f5cc-c5be-45ac-a0f8-f2ad3b7efa91/co1800x1200.jpeg" alt="" />
                                            </picture>
                                        </div>
                                        <div className="card-external">
                                            <div className="small">External: </div>
                                            <div className="small font-weight-bold text-truncate mx-2">
                                                {"{"}
                                                {"{"}Organization name with a super long text{"}"}
                                                {"}"}
                                            </div>
                                            <div className="small icon icon-new-tab" />
                                        </div>
                                    </div>
                                    <div className="card-title">
                                        <a href="/program/142/details" className="h3 mb-none stretched-link line-clamp-1">
                                            {" "}
                                            {"{"}
                                            {"{"}Program name{"}"}
                                            {"}"}
                                        </a>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2xs">
                                        <div className="d-flex align-items-center flex-wrap">
                                            <div className="badges mr-3">
                                                <div className="badge is-pill">Food</div>
                                            </div>
                                        </div>
                                        <div className="badges">
                                            <div className="badge is-pill is-draft">
                                                <span className="icon icon-circle-outline" /> Draft
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AppContent>
        </Layout>
    );
};
