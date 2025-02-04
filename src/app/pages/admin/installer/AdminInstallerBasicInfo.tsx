import React from "react";
import { Layout } from "../../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";

export const AdminInstallerBasicInfo = () => {
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
                                        <div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <div className="d-flex flex-column">
                                        <span className="font-weight-bold">
                                            <span className="icon icon-check mr-3 d-none" />
                                            Basic info{" "}
                                        </span>
                                        <span className="small">In progress</span>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-3 mb-5 mb-sm-0">
                                    <div className="progress mb-3" style={{ height: 5 }}>
                                        <div className="progress-bar" role="progressbar" style={{ width: "0%" }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <div className="d-flex flex-column">
                                        <span className="">
                                            <span className="icon icon-check mr-3 d-none" />
                                            Categories{" "}
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
                                <span className="application-section--title-content">Basic info</span>
                            </h3>
                            <p className="mb-5">Name the program and choose a description.</p>
                            <form name="ChallengeDefaultForm" method="post" action="/rest/challenge/create/default">
                                <ul className="nav nav-pills gap-xs" role="tablist">
                                    <li className="nav-item d-flex align-items-center gap-xs">
                                        <span className="icon icon-translate is-16px text-muted" />
                                        <span className="small d-none d-lg-flex text-muted">Edit for each language</span>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link is-sm active" id="ChallengeDefaultFormdefaultFormModel" data-toggle="pill" href="#form-ChallengeDefaultFormdefaultFormModel" role="tab" aria-controls="form-ChallengeDefaultFormdefaultFormModel" aria-selected="true">
                                            English
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link is-sm" id="ChallengeDefaultFormfr" data-toggle="pill" href="#form-ChallengeDefaultFormfr" role="tab" aria-controls="form-ChallengeDefaultFormfr" aria-selected="false">
                                            French
                                        </a>
                                    </li>
                                </ul>
                                <div className="alert-inline is-info icon icon-information mt-3" role="alert">
                                    {" "}
                                    If the program uses only one language, enter the content in the "English" tab (default language).{" "}
                                </div>

                                <div className="card-row">
                                    <div className="col-6 form-group">
                                        {" "}
                                        <label className="checkbox-custom font-weight-bold required" htmlFor="ChallengeDefaultForm_defaultFormModel_name">
                                            Name
                                        </label>
                                        <input type="text" id="ChallengeDefaultForm_defaultFormModel_name" name="ChallengeDefaultForm[defaultFormModel][name]" required data-hint="name" aria-describedby="ChallengeDefaultForm_defaultFormModel_name_help" className="form-control" />{" "}
                                        <small id="ChallengeDefaultForm_defaultFormModel_name_help" className="form-text text-muted">
                                            min 3 characters, max 60 characters
                                        </small>
                                    </div>
                                    <div className="col-6 form-group">
                                        {" "}
                                        <label className="checkbox-custom font-weight-bold required" htmlFor="ChallengeDefaultForm_defaultFormModel_slug">
                                            Slug
                                        </label>
                                        <input type="text" id="ChallengeDefaultForm_defaultFormModel_slug" name="ChallengeDefaultForm[defaultFormModel][slug]" required data-hint="slug" aria-describedby="ChallengeDefaultForm_defaultFormModel_slug_help" className="form-control" />{" "}
                                        <small id="ChallengeDefaultForm_defaultFormModel_slug_help" className="form-text text-muted">
                                            Slug must not be changed after you communicate it to your users.
                                        </small>
                                    </div>
                                </div>
                                <div className="card-row">
                                    <div className="col-6 form-group">
                                        {" "}
                                        <label className="mb-0 checkbox-custom font-weight-bold" htmlFor="ChallengeDefaultForm_defaultFormModel_dateBegin">
                                            From
                                        </label>
                                        <input type="date" id="ChallengeDefaultForm_defaultFormModel_dateBegin" name="ChallengeDefaultForm[defaultFormModel][dateBegin]" className="form-control" />
                                    </div>
                                    <div className="col-6 form-group">
                                        {" "}
                                        <label className="mb-0 checkbox-custom font-weight-bold" htmlFor="ChallengeDefaultForm_defaultFormModel_dateEnd">
                                            To
                                        </label>
                                        <input type="date" id="ChallengeDefaultForm_defaultFormModel_dateEnd" name="ChallengeDefaultForm[defaultFormModel][dateEnd]" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    {" "}
                                    <label className="checkbox-custom font-weight-bold" htmlFor="ChallengeDefaultForm_defaultFormModel_overview">
                                        Short description
                                    </label>
                                    <textarea
                                        id="ChallengeDefaultForm_defaultFormModel_overview"
                                        name="ChallengeDefaultForm[defaultFormModel][overview]"
                                        maxLength={500}
                                        data-hint="overview"
                                        aria-describedby="ChallengeDefaultForm_defaultFormModel_overview_help"
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
                                    <small id="ChallengeDefaultForm_defaultFormModel_overview_help" className="form-text text-muted">
                                        Just 1 or 2 lines to describe the program.
                                    </small>
                                </div>
                                <div className="form-group">
                                    {" "}
                                    <label className="active checkbox-custom font-weight-bold required" htmlFor="ChallengeDefaultForm_defaultFormModel_plan">
                                        Plan
                                    </label>
                                    <div className="dropdown bootstrap-select form-control">
                                        <select id="ChallengeDefaultForm_defaultFormModel_plan" name="ChallengeDefaultForm[defaultFormModel][plan]" className="form-control" tabIndex={-98}>
                                            <option value="data">Data</option>
                                            <option value="default" selected>
                                                Lite
                                            </option>
                                        </select>
                                        <button type="button" className="btn btn-lg dropdown-toggle btn-default" data-toggle="dropdown" role="button" data-id="ChallengeDefaultForm_defaultFormModel_plan" title="Lite">
                                            <div className="filter-option">
                                                <div className="filter-option-inner">
                                                    <div className="filter-option-inner-inner">Lite</div>
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
                                <hr className="mt-8" />
                                <fieldset className="form-group">
                                    <div id="ChallengeDefaultForm_defaultFormModel_customData gap-xs">
                                        <div className="bg-light rounded p-5 mb-5">
                                            <div className="form-group">
                                                {" "}
                                                <label className="checkbox-custom font-weight-bold" htmlFor="ChallengeDefaultForm_defaultFormModel_customData_pipedrive_id">
                                                    Pipedrive ID
                                                </label>
                                                <input type="text" id="ChallengeDefaultForm_defaultFormModel_customData_pipedrive_id" name="ChallengeDefaultForm[defaultFormModel][customData][pipedrive_id]" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                {" "}
                                                <label className="checkbox-custom font-weight-bold" htmlFor="ChallengeDefaultForm_defaultFormModel_customData_customer_organization">
                                                    Customer organization name
                                                </label>
                                                <input type="text" id="ChallengeDefaultForm_defaultFormModel_customData_customer_organization" name="ChallengeDefaultForm[defaultFormModel][customData][customer_organization]" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            {" "}
                                            <label className="checkbox-custom font-weight-bold" htmlFor="ChallengeDefaultForm_defaultFormModel_customData_problematics">
                                                Problems addressed
                                            </label>
                                            <textarea
                                                id="ChallengeDefaultForm_defaultFormModel_customData_problematics"
                                                name="ChallengeDefaultForm[defaultFormModel][customData][problematics]"
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
                                            <label className="checkbox-custom font-weight-bold" htmlFor="ChallengeDefaultForm_defaultFormModel_customData_mission_goal">
                                                Mission goal
                                            </label>
                                            <textarea
                                                id="ChallengeDefaultForm_defaultFormModel_customData_mission_goal"
                                                name="ChallengeDefaultForm[defaultFormModel][customData][mission_goal]"
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
                                            <label className="checkbox-custom font-weight-bold" htmlFor="ChallengeDefaultForm_defaultFormModel_customData_methodology">
                                                Methodology used
                                            </label>
                                            <div className="dropdown bootstrap-select show-tick form-control">
                                                <select id="ChallengeDefaultForm_defaultFormModel_customData_methodology" name="ChallengeDefaultForm[defaultFormModel][customData][methodology][]" className="form-control" multiple tabIndex={-98}>
                                                    <option value="consulting">Consulting</option>
                                                    <option value="design_fiction">Design fiction</option>
                                                    <option value="design_thinking">Design thinking</option>
                                                    <option value="educational_engineering">Educational engineering</option>
                                                    <option value="sustainable_design">Sustainable design</option>
                                                    <option value="ux_ui">UX / UI</option>
                                                    <option value="other">Other</option>
                                                </select>
                                                <button type="button" className="btn btn-lg dropdown-toggle btn-default bs-placeholder" data-toggle="dropdown" role="button" data-id="ChallengeDefaultForm_defaultFormModel_customData_methodology" title="Nothing selected">
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
                                            <label className="checkbox-custom font-weight-bold" htmlFor="ChallengeDefaultForm_defaultFormModel_customData_impact">
                                                Results and impact (including environmental and social impact)
                                            </label>
                                            <textarea
                                                id="ChallengeDefaultForm_defaultFormModel_customData_impact"
                                                name="ChallengeDefaultForm[defaultFormModel][customData][impact]"
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
                                            <label className="checkbox-custom font-weight-bold" htmlFor="ChallengeDefaultForm_defaultFormModel_customData_confidentiality">
                                                Confidentiality
                                            </label>
                                            <div className="dropdown bootstrap-select form-control">
                                                <select id="ChallengeDefaultForm_defaultFormModel_customData_confidentiality" name="ChallengeDefaultForm[defaultFormModel][customData][confidentiality]" className="form-control" tabIndex={-98}>
                                                    <option value="" />
                                                    <option value="public">Public</option>
                                                    <option value="confidential">Confidential</option>
                                                </select>
                                                <button type="button" className="btn btn-lg dropdown-toggle btn-default bs-placeholder" data-toggle="dropdown" role="button" data-id="ChallengeDefaultForm_defaultFormModel_customData_confidentiality" title="Nothing selected">
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
                                            <label className="active checkbox-custom font-weight-bold" htmlFor="ChallengeDefaultForm_defaultFormModel_customData_owner">
                                                Owner
                                            </label>
                                            <div className="dropdown bootstrap-select form-control">
                                                <select id="ChallengeDefaultForm_defaultFormModel_customData_owner" name="ChallengeDefaultForm[defaultFormModel][customData][owner]" className="form-control" tabIndex={-98}>
                                                    <option value="" />
                                                    <option value={0} selected>
                                                        Guillaume Yvon
                                                    </option>
                                                    <option value={1}>Orga Admin</option>
                                                </select>
                                                <button type="button" className="btn btn-lg dropdown-toggle btn-default" data-toggle="dropdown" role="button" data-id="ChallengeDefaultForm_defaultFormModel_customData_owner" title="Guillaume Yvon">
                                                    <div className="filter-option">
                                                        <div className="filter-option-inner">
                                                            <div className="filter-option-inner-inner">Guillaume Yvon</div>
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
                                            <label className="checkbox-custom font-weight-bold" htmlFor="ChallengeDefaultForm_defaultFormModel_customData_customer_verbatim">
                                                Customer verbatim
                                            </label>
                                            <textarea
                                                id="ChallengeDefaultForm_defaultFormModel_customData_customer_verbatim"
                                                name="ChallengeDefaultForm[defaultFormModel][customData][customer_verbatim]"
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
                                            <label className="checkbox-custom font-weight-bold" htmlFor="ChallengeDefaultForm_defaultFormModel_customData_note">
                                                Note
                                            </label>
                                            <textarea
                                                id="ChallengeDefaultForm_defaultFormModel_customData_note"
                                                name="ChallengeDefaultForm[defaultFormModel][customData][note]"
                                                aria-describedby="ChallengeDefaultForm_defaultFormModel_customData_note_help"
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
                                            <small id="ChallengeDefaultForm_defaultFormModel_customData_note_help" className="form-text text-muted">
                                                Why do we believe in it?
                                            </small>
                                        </div>
                                        <div className="form-group">
                                            {" "}
                                            <label className="checkbox-custom font-weight-bold" htmlFor="ChallengeDefaultForm_defaultFormModel_customData_google_drive">
                                                Google drive
                                            </label>
                                            <input type="text" id="ChallengeDefaultForm_defaultFormModel_customData_google_drive" name="ChallengeDefaultForm[defaultFormModel][customData][google_drive]" aria-describedby="ChallengeDefaultForm_defaultFormModel_customData_google_drive_help" className="form-control" />{" "}
                                            <small id="ChallengeDefaultForm_defaultFormModel_customData_google_drive_help" className="form-text text-muted">
                                                Schoolteam internal drive
                                            </small>
                                        </div>
                                    </div>
                                </fieldset>
                               
                                

                                <input type="hidden" id="ChallengeDefaultForm__token" name="ChallengeDefaultForm[_token]" defaultValue="cb2089.BbycxPx_AJSRz1u1uLQEtWKJMuUPT99mJ0FF4XejUZw.SuPMvLgHN6PygDjTjYN9jQ79YtdcJOYUF3AEpD_QB8hyid-WtShB_OPiCg" />
                            </form>

                            <div className="d-flex justify-content-end">
                             
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
